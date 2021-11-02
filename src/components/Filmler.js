import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import FilmEkle from "./FilmEkle";
//Router işlemi için ekledik
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Filmler extends React.Component {

    state = {

        filmler_db: [],

        aramaQuery: "",
    }




    // Aynı İşlemi axios kütüphanesiyle yapabiliriz

    async componentDidMount() {

        const db_adres = await axios.get("http://localhost:3002/filmler_db");
        //db_adres.data da json şeklinde object tutuyor yani veritabanı
        this.setState({ filmler_db: db_adres.data });


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
        this.setState({ aramaQuery: event.target.value })
    }

    Filtrele = () => {
        return this.state.filmler_db.filter(
            s => {
                return s.name.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
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
            // <Router> divi return içinde diğer divleri kapsamalı
            <Router>

                <div className="container">
                    <Route exact path="/">
                        {/* exact birebir aynı demek aynı addaki sayfayı getirir */}

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
                    </Route>

                    <Route  path="/ekle">
                        <FilmEkle />
                    </Route>

                </div>
            </Router>
        );
    }
}

export default Filmler;