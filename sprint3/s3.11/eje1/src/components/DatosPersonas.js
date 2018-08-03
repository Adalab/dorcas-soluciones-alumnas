import React, { Component } from 'react';
import './DatosPersonas.css';

class DatosPersonas extends Component{


    render(){
        //const {results} = this.props.datos;
        console.log("bbb",this.props.datos)
        console.log("aaa",this.props.value)
        if(this.props.datos === undefined){
            
            return(<p>Cargando datos</p>) ;

        }else{


            return(
                <div className="container">
                <div className="container-filtro">
                    <p>Filtro por ciudad</p>
                    <select name="" id="" onChange={this.props.changeCity} value = "">
                        {
                            this.props.datos.map(function (item, index) {

                            return <option value={item.location.city} >{item.location.city}</option>
                            })
                        }
                     </select>
                </div>
                   <div className="container-filtro">
                    <p>Filtro por genero</p>
                    <select name="" onChange={this.props.changeGender} id="">
                        {
                            this.props.datos.map(function (item, index) {

                            return <option>{item.gender}</option>
                            })
                        }
                     </select>
                </div>
                <ul className="lista">
                {
                    this.props.datos.map(function(item,index){

                        return <li>
                                    <p className="name">Nombre: {item.name.first}</p>
                                    <img src={item.picture.thumbnail} alt=""/>
                                    <p className="city">Ciudad: {item.location.city}</p>
                                    <p className="age">Edad: {item.dob.age}</p>
                                </li> 
                        
                    })
                }
                </ul>
                </div>
            );
          
        }
    
    }


}

export default DatosPersonas;