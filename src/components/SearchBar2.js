import React from "react";




class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aramaQuery: "varsayılan",
            ali: "ali"
        }

        this.aradi = this.aradi.bind(this);
    }

    //state ve fonksiyonları render() in üstüne yaz



    //Enter a basınca normalde sayfa yenilenir. onSubmit() çalışır
    //basınca yenilemesin preventDefault()

    sayfayiYenilemesinFnk = (event) => {
        event.preventDefault();
    }

    //    AramaFnk = (event) => {
    //     event => this.setState({aramaQuery:event.target.value}) 
    //    }
    kucult(gelen) {
        return gelen.toUpperCase();
    }
    aradi(event) {
        const d = this.kucult(event.target.value);
        this.setState({ aramaQuery: d });
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
                            onChange={this.aradi}
                            type="text" className="form-control"
                            placeholder="Aranacak film"
                            value={this.state.aramaQuery}
                        />
                    </div>
                </div>
            </form>
        )
    }
}




export default SearchBar;