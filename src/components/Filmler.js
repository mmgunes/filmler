import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import FilmEkle from "./FilmEkle";
import FilmDuzenle from "./FilmDuzenle";
//Router işlemi için ekledik
import { BrowserRouter as Router,  Route } from "react-router-dom";


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

    Ekle_Film_Fnk = async (film) => {
        await axios.post(`http://localhost:3002/filmler_db/`, film)
        this.setState(state => ({ filmler_db: state.filmler_db.concat(film) }))
        console.log(this.filmler_db);
    }

    Filtrele = () => {
        return this.state.filmler_db.filter(
            s => {
                return s.name.toLowerCase().indexOf(this.state.aramaQuery.toLowerCase()) !== -1
            }
        ).sort( ( a , b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 // 1 olduğunda 2.parametre(b) olanı -1 olduğunda 1.parametreyi(a) 0 eşit olduğunda döner
        } )
    }


    render() {

        return (
            // <Router> divi return içinde diğer divleri kapsamalı
            <Router>

                <div className="container">

                    {/* exact birebir aynı demek aynı addaki sayfayı getirir */}
                    <Route exact path="/" render={() => (
                        <React.Fragment>  {/* React.Fragment tek div içinde aynı hiyerarşide etiketlerin yazılabilmesini sağlar */}
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
                        </React.Fragment>
                    )}>

                    </Route>

                    {/* 1.yol
                     <Route  path="/ekle">
                        <FilmEkle />
                    </Route> */}

                    {/* 2.yol aynı */}
                    {/* <Route path="/ekle" component={FilmEkle} /> */}


                    {/* render ın içine history ekle ve propun içinde push edince anasayfaya yönlendir */}
                    <Route exact path="/ekle" render={({history}) => (

                        <FilmEkle
                            filmEkleProp={(film) => { this.Ekle_Film_Fnk(film)
                            
                            history.push("/");
                            }}
                                
                        />
                    )}>

                    </Route>

                    {/* id ile yönlendirmek gerekiyor */}
                    <Route path="/edit/:id" component={FilmDuzenle}/>


                </div>
            </Router>
        );
    }
}

export default Filmler;