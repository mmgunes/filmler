import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";


//Functional Component olmaz çünkü dinamik gösterilecek

/*const Filmler = () => {
    return ( <h1>Filmlerim</h1>)
}*/

//Class Component render()) metodunu unutma
class Filmler extends React.Component {

    state = {

        //  filmler_db = [ yerine iki noktalı yaz. filmler_db : [  çünkü property şeklinde gelecek
        filmler_db: [],

        aramaQuery: "",
    }


    /* json üzerinden çekmek için npm json server ekle npm i json-server
    npx json-server --watch src/api/filmler_db.json --port 3002
    
    port u ayrı seç. Dosya yolunu belirt

    */


    /*  async componentDidMount(){
          const db_adres =  "http://localhost:3002/filmler_db";
  
          //fetch asenkron sorgularda kullanılır. O yüzden asenkron fonksiyona çevirmek gerek
          //asenkron olması için fetch ve json fonksiyonlarını await ve async kullan       
          const cevap= await fetch(db_adres);
         // console.log(cevap); 
          const json_data= await cevap.json();
          console.log(json_data);
          this.setState({filmler_db : json_data});
          console.log(this.filmler_db);
       }
      */

    // Aynı İşlemi axios kütüphanesiyle yapabiliriz

    async componentDidMount() {

        const db_adres = await axios.get("http://localhost:3002/filmler_db");
        // console.log(db_adres);

        //db_adres.data da json şeklinde object tutuyor yani veritabanı
        this.setState({ filmler_db: db_adres.data });


    }


    /*
        Sil_Film = (flm) => {
            const yeniFilmListesi = this.state.filmler_db.filter(
                f => f.id !== flm.id,
                //console.log("çalış2")
            );
    
            //setState le yapılan işlemler react edilir.
    
            /* 1.yol  boş liste için uygun  
            this.setState({
                filmler_db : yeniFilmListesi
            })
            //*2.yol aynı rlimizde liste varsa
            this.setState(state => (
                { filmler_db: yeniFilmListesi }
            ))
        } */



    // Fetch metoduyla API üzerinde ile silme

   /* Sil_Film = async (flm) => {
        const db_adres = `http://localhost:3002/filmler_db/${flm.id}`

        await fetch(db_adres, {
            //get varsayılan olduğu için method: "GET" yazmamıştık
            method: "DELETE"
        })


        const yeniFilmListesi = this.state.filmler_db.filter(
            f => f.id !== flm.id,
        );

        this.setState(state => (
            { filmler_db: yeniFilmListesi }
        ))

    } */

    // AXIOS kütüphanesiyle silme

   Sil_Film = async (flm) => {



        const db_adres = `http://localhost:3002/filmler_db/${flm.id}`
        axios.delete(db_adres)

        const yeniFilmListesi = this.state.filmler_db.filter(
            f => f.id !== flm.id,
        );

        this.setState(state => (
            { filmler_db: yeniFilmListesi }
        ))

    } 


    Ara_Film_Fnk = (event) => {
        //     const yaz= event.target.value
        //    this.setState({aramaQuery:yaz})    

        this.setState({ aramaQuery: event.target.value })
    }

    Filtrele = () => {
        return this.state.filmler_db.filter(
            s => {
                return s.name.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            }
        )
    }


    render() {

        // let filtrelen_Filmler = this.state.filmler_db.filter(
        //     s => {
        //         return s.name.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
        //     }
        // )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                            filmAraProp={this.Ara_Film_Fnk}
                        />
                        <div className="display-3 bg-info">Display-3</div>
                    </div>
                </div>
                <MovieList
                    // filmler_prop={this.state.filmler_db}
                    filmler_prop={this.Filtrele()}
                    Sil_Film_Prop={this.Sil_Film}
                />
            </div>
        )
    }
}

export default Filmler;