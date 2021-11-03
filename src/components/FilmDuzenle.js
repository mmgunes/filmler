import React from "react";


class FilmDuzenle extends React.Component {

    sayfaYenilenmesin = (e) =>{
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
                            <label htmlFor="inputImage">Image Url</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageUrl" />
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
                    <input type="submit" className="mb-5 mt-3 btn btn-primary btn-lg btn-block" value="Add Movie" />
                </form>
            </div>
        )

    }
}

export default FilmDuzenle;