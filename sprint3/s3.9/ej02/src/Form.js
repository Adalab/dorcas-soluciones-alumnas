import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
         super(props);
        this.state = {
            name: '',
            description: '',
            genre: '',
            image: ''
        };
        this.image = '';
        this.fileInput = React.createRef();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleInputFile = this.handleInputFile.bind(this);
    }

    handleNameChange (event) {
        console.log('event', event)
        this.setState({
            name: event.target.value
        })
    }

    handleDescriptionChange (event) {
        console.log('event', event)
        this.setState({
            description: event.target.value
        })
    }

    handleGenreChange (event) {
        this.setState ({
            genre: event.target.value
        })
    }

    handleInputFile (event) {
        
        const fr = new FileReader();

        const loadImage = () => {
            this.setState ({image: fr.result});
        }
        
        fr.addEventListener('load', loadImage);
        fr.readAsDataURL(this.fileInput.current.files[0]);
    }
        
    render() { 
        return ( 
            <form action="">
                <label htmlFor="name">Nombre</label>
                <br/>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange}/>
                <br/>
                <label htmlFor="description">Descripción</label>
                <br/>
                <textarea name="" id="description" cols="30" rows="10" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                <br/>
                <label htmlFor="genre">Género</label>
                <br/>
                <select name="" id="genre" value={this.state.genre} onChange={this.handleGenreChange}>
                    <option value="Selecciona un género">Selecciona un género</option>
                    <option value="Comedia">Comedia</option>
                    <option value="Drama">Drama</option>
                    <option value="Infantil">Infantil</option>
                </select>
                <br/>
                <label htmlFor="imagen">
                    <input type="file" ref={this.fileInput} onChange={this.handleInputFile}/>
                </label>
                <img src={this.state.image} alt="" />
            </form>
         );
    }
}
 
export default Form;