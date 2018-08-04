import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descripcion: '',
      genre: '',
      image:''
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.fileInput = React.createRef();
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    this.setState({name: event.target.value});
  }

  handleChangeTextArea(event) {
    this.setState({descripcion: event.target.value});
  }

  handleChangeSelect(event) {
    this.setState({genre: event.target.value});
  }

  handleChangeImg(event) {
      console.log(this.state.image);
    const fr = new FileReader();
  fr.addEventListener('load', () => {

      this.setState({image: fr.result});
  });
  fr.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
}



  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.name}
      A genre was submitted: ${this.state.genre}`);
    event.preventDefault();


  }


  render() {
    console.log(this.state.name);
    return (<form className="Form" onSubmit={this.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" value={this.state.name} onChange={this.handleChangeInput} id="name"/>
      <textarea name="descripcion" value={this.state.descripcion} onChange={this.handleChangeTextArea} id="" cols="30" rows="10"></textarea>
      <select className="select" name="select-genre" value={this.state.genre} onChange={this.handleChangeSelect}>
        <option value="Drama">Drama</option>
        <option value="Comedia">Comedia</option>
        <option value="Infantil">Infantil</option>
      </select>
      <input type="file" ref={this.fileInput} onChange={this.handleChangeImg}/>

        <img src={this.state.image} alt=""/>
      <input type="submit" value="Enviar"/>
    </form>);
  }
}

export default Form;
