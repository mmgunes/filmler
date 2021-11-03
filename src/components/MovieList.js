import React from "react";
import { Link } from "react-router-dom";


const MovieList = (props) => {

/*  function SilmeClick(event){
    //    console.log("Silme Tıklandı");
    console.log(event.screenX);
   }   */
   
   const aciklamaKirp = (aciklama, maxUzunluk) => {

    if(!aciklama) return null; //(!aciklama) açıklama boş ise 
    if(aciklama.length<=maxUzunluk) return aciklama;
    return `${aciklama.substring(0, maxUzunluk)}...` //back t
   }


    return (
        <div className="row">

            {/*props kullanarak yapalım 
            {this.props.filmler.map((flm)=>flm())} */}

            {props.filmler_prop.map((flm ,i) => ( 

                <div className="col-lg-4 " key={i}>
                    <div className="card mb-4 shadow-sm">
                    
                    {/* resmin https://www.themoviedb.org/t/p/w220_and_h330_face/ kısmı sabit. Back tickler arasında yaz hepsini */}

                        <img src={`${flm.imageUrl}`} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            {/* //bazıları name bazıları title olduğunda 
                            <h5 className="card-title">{flm.name ? flm.name : flm.title}</h5> */}
                            <h5 className="card-title">{flm.name}</h5>
                            <p className="card-text">{aciklamaKirp(flm.overview , 100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* aynı sayfada fonksiyonla farklı componentlarda props larla çağrılır. 
                                 onClick={(e)=>props.Sil_Film_Prop(flm)} 
                                <button type="button" onClick={SilmeClick} className="btn btn-lg btn-outline-danger" >Delete</button> */}
                                <button type="button" onClick={(event) => props.Sil_Film_Prop(flm)} className="btn btn-md btn-outline-danger" >Delete</button>
                               <Link type="button"
                               className="btn btn-md btn-outline-primary"
                               to={`edit/${flm.id}`}
                               >
                               Düzenle</Link>
                               
                                <button type="button"  className="btn btn-sm btn-warning">
                                    <h3><span className="badge badge-light">{flm.rating}</span></h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}


export default MovieList;