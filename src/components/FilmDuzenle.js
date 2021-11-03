import React from "react";
import axios from "axios";

class FilmDuzenle extends React.Component {

    //Başlangıç stateleri boş
    state = {
        name: "",
        rating: "",
        overview: "",
        imageUrl: ""
    }


    //başlangıçta düzenlenecek filmin değerlerin gelmesi için
    async componentDidMount() {

        const film_id = this.props.match.params.id; //id yi sayfanın propsundan çekebiliriz
        //console.log(film_id)
        const duzenlenecek_flm = await axios.get(`http://localhost:3002/filmler_db/${film_id}`)
        // console.log(duzenlenecek_flm.data)
        const film_bilgi = duzenlenecek_flm.data;

        this.setState(
            {
                name: film_bilgi.name,
                rating: film_bilgi.rating,
                overview: film_bilgi.overview,
                imageUrl: film_bilgi.imageUrl
            }
        )

    }

    sayfaYenilenmesin = (e) => {
        e.preventDefault();

    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.sayfaYenilenmesin} className="mt-5">
                    <input className="form-control" id="disabledInput" type="text" placeholder="Düzenlenecek Film Bilgileri ..." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.rating} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image Url</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageUrl" 
                                value={this.state.imageUrl}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"
                                value={this.state.overview}
                                ></textarea>
                        </div>
                    </div>
                    <input type="submit" className="mb-5 mt-3 btn btn-primary btn-lg btn-block" value="Add Movie" />
                </form>
            </div>
        )

    }
}

export default FilmDuzenle;