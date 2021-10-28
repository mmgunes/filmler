import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";



//Functional Component olmaz çünkü dinamik gösterilecek

/*const Filmler = () => {
    return ( <h1>Filmlerim</h1>)
}*/

//Class Component render()) metodunu unutma
class Filmler extends React.Component {

    state = {

        //  filmler_db = [ yerine iki noktalı yaz. filmler_db : [  çünkü property şeklinde gelecek
        filmler_db: [

            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },

            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },

            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            },

            {
                "id": 4,
                "name": "Rogue",
                "rating": 7.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
            },

            {
                "id": 5,
                "name": "Project Power",
                "rating": 6.7,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
            },

            {
                "id": 6,
                "name": "Superman",
                "rating": 7.6,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageUrl": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
            }
        ],

        aramaQuery: "",
    }

    Sil_Film = (flm) => {
        const yeniFilmListesi = this.state.filmler_db.filter(
            f => f.id !== flm.id,
            //console.log("çalış2")
        );

        //setState le yapılan işlemler react edilir.

        /* 1.yol  boş liste için uygun  
        this.setState({
            filmler_db : yeniFilmListesi
        })*/
        //*2.yol aynı rlimizde liste varsa
        this.setState(state => (
            { filmler_db: yeniFilmListesi }
        ))
    }

    Ara_Film_Fnk = (event) => {
        //     const yaz= event.target.value
        //    this.setState({aramaQuery:yaz})    

        this.setState({ aramaQuery: event.target.value })
    }

    Filtrele= () =>{
        return  this.state.filmler_db.filter(
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