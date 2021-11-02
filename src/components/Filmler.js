import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
<<<<<<< HEAD
import FilmEkle from "./FilmEkle";
=======
require('dotenv').config();
//apiyi direk dışardan gözükmesin diye npm dotenv ekledik
//proces.env. başına REACT_APP getirilmesi gerekir çağırıken

console.log(process.env.REACT_APP_API_KEY);
>>>>>>> 5d48f794dd1a6f823dd219a4fbb5e4e5f48c88c7



class Filmler extends React.Component {

    state = {

        filmler_db: [],

        aramaQuery: "",
    }




    // Aynı İşlemi axios kütüphanesiyle yapabiliriz

    async componentDidMount() {

<<<<<<< HEAD
        const db_adres = await axios.get("http://localhost:3002/filmler_db");
        //db_adres.data da json şeklinde object tutuyor yani veritabanı
        this.setState({ filmler_db: db_adres.data });
=======
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
>>>>>>> 5d48f794dd1a6f823dd219a4fbb5e4e5f48c88c7


    }

<<<<<<< HEAD
=======

    
>>>>>>> 5d48f794dd1a6f823dd219a4fbb5e4e5f48c88c7
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
        this.setState({ aramaQuery: event.target.value })
    }

    Filtrele = () => {
        return this.state.filmler_db.filter(
            s => {
                return s.title.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            }


            //bazıları name bazıları title olduğunda if(s.name) s.name varsa demek
            // if(s.name){
            //     return s.name.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            // }else{
            //     return s.title.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            // }   
        )
    }


    render() {

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
                <FilmEkle />
            </div>
        )
    }
}

export default Filmler;