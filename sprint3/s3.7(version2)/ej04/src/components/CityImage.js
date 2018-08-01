import React, { Component } from 'react';

class CityImage extends Component {
    constructor(props) {
        super(props);
        this.srcFoto = ""
        this.imagenes = {
            praga: "http://bcmviajes.com/wp-content/uploads/2015/06/PRAGA-1.jpg",
            
            boston: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Boston_skyline_from_Cambridge_November_2015_panorama_1.jpg/1500px-Boston_skyline_from_Cambridge_November_2015_panorama_1.jpg",

            buenosAires: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Buenos_Aires%2C_Puerto_Madero.jpg/800px-Buenos_Aires%2C_Puerto_Madero.jpg"
        }
    }
    render() { 
        console.log(this.props.city)
        if(this.props.city === "Praga"){
            this.srcFoto = this.imagenes.praga
        } else if (this.props.city === "Boston"){
            this.srcFoto = this.imagenes.boston
        } else if (this.props.city === "Buenos Aires"){
            this.srcFoto = this.imagenes.buenosAires
        }
        
        return ( 
            <div className="containerImagen">
            <img className="photo" src={this.srcFoto} alt={this.props.city}/>
            </div>
        );
    }
}
 
export default CityImage;