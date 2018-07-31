import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);
        this.moviePhoto= React.createRef();
        this.state= {
            name: 'Nombre de la película',
            descripcion: 'Descripcion de la pelicula',
            genero: 'Género',
            image: ''
        };

        this.handleChangeName= this.handleChangeName.bind(this);
        this.handleChangeDes= this.handleChangeDes.bind(this);
        this.handleChangeGenre= this.handleChangeGenre.bind(this);
        this.loadMoviePhoto= this.loadMoviePhoto.bind(this);
    }

    handleChangeName(event) {
        this.setState (
            {
                name: event.target.value,
            }
        );

    }

    handleChangeDes(event) {
        this.setState (
            {
                descripcion: event.target.value,
            }
        );

    }

    handleChangeGenre(event) {
        this.setState (
            {

                genero: event.target.value
            }
        );

    }

    loadMoviePhoto (event) {
       const fr = new FileReader();
       
       const handleloadMoviePhoto=()=>{
           console.log(this.state);
           console.log('holi', fr.result);
           this.setState({
            image:fr.result
           })
           
        }

        fr.addEventListener('load', handleloadMoviePhoto);
        fr.readAsDataURL(this.moviePhoto.current.files[0]);
       
    }


    render(){
        console.log(this.state);
        return (
            
    <form>
        <label htmlFor ='nombre'>Nombre de la pelicula</label>
        <input type='text' value={this.state.name} onChange={this.handleChangeName} />
        <label htmlFor ='descripcion'>Descripción</label>
        <textarea  value={this.state.descripcion} onChange={this.handleChangeDes}/>
        <label htmlFor ='genero'>Género</label>
        <select value={this.state.genero} onChange={this.handleChangeGenre}>
            <option>Comedia </option>
            <option>Drama </option>
            <option>Infantil </option>
        </select>
        <label htmlFor ='caratula'>Carátula</label>
        <input type='file' ref={this.moviePhoto} onChange={this.loadMoviePhoto} />
        <img src={this.state.image} data='moviePhoto' />
    </form>
        )
    }
}


export default Form;