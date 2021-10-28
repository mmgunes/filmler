import React from "react";




class SearchBar extends React.Component {

    //  state ve fonksiyonları render() in üstüne yaz

  /*  state = {
        aramaQuery: "w1",
        ali: "ali"
    }*/

    //Enter a basınca normalde sayfa yenilenir. onSubmit() çalışır
    //basınca yenilemesin preventDefault()

    sayfayiYenilemesinFnk = (event) => {
        event.preventDefault();
    }

       AramaFnk = (event) => {
           const yaz= event.target.value;
        this.setState({aramaQuery:yaz}) 
       }

 

    render() {
        return (
            //onsubmit i çağır
            <form onSubmit={this.sayfayiYenilemesinFnk}>
                <div className="form-row mb-5 mt-5">
                    <div className="col-12">
                        {/* onChange={e=>console.log("değiştim")} her değişiklikte yapması gerekeni 
                    onChange={event=>console.log(event.target.value)} fonk ile içindeki value al */}
                        <input

                            // onChange={event => this.setState({aramaQuery:event.target.value}) }
                           // onChange={this.AramaFnk}
                           onChange={this.props.filmAraProp}
                            type="text" className="form-control"
                            placeholder="Aranacak film"
                           // value={this.state.aramaQuery}
                        />
                    </div>
                </div>
            </form>
        )
    }
}




export default SearchBar;