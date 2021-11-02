import React from "react";
import serialize from "form-serialize";

class FilmEkle extends React.Component {

        //Film Eklenince yenilenmesin
    sayfaYenilenmesin = (e) =>{
        e.preventDefault();
        var yeniFilm = serialize(e.target, { hash: true });
        //console.log(yeniFilm);
        this.props.filmEkleProp(yeniFilm);
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.sayfaYenilenmesin} className="mt-5">
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input  type="submit" className="mb-5 mt-3 btn btn-primary btn-lg btn-block" value="Add Movie" />
                </form>
            </div>
        )

    }
}

export default FilmEkle;