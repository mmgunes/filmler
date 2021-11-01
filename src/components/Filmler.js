import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
require('dotenv').config();
//apiyi direk dışardan gözükmesin diye npm dotenv ekledik
//proces.env. başına REACT_APP getirilmesi gerekir çağırıken

console.log(process.env.REACT_APP_API_KEY);


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



    // Aynı İşlemi axios kütüphanesiyle yapabiliriz

    async componentDidMount() {

        //kendi api adresimizi ekliyoruz https://api.themoviedb.org/3/movie/popular?api_key=b069a85d79e68652d29df83fec3f67f1&language=en-US&page=1
        // const baseUrl = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b069a85d79e68652d29df83fec3f67f1&language=en-US&page=1");
        // console.log(baseUrl.data.results)

        //Api direk gözükmemesi için DOTENV kullandık
        // const baseUrl = await axios.get(`{https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1}`);
        // console.log(baseUrl.data.results)

        // Popüler filmleri getir 
         const baseUrl = await axios.get("https://api.themoviedb.org/3/list/7112357?api_key=b069a85d79e68652d29df83fec3f67f1&language=en-US");
         console.log(baseUrl.data.items);

       
        this.setState({ filmler_db: baseUrl.data.items });


    }


    
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
                return s.title.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            }


            //bazıları name bazıları title olduğunda
            // if(s.name){
            //     return s.name.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            // }else{
            //     return s.title.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            // }   
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