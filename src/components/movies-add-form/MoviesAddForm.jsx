import React from 'react';
import './movies-add-form.css'

class MoviesAddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      viewers: '',
    }
  }

  onChaneValue = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addFormHendler = (e) => {
    e.preventDefault();
    if (this.state.name.length > 0 && this.state.name.trim() && this.state.viewers.length > 0 && this.state.viewers.trim()) {
      this.props.addForm({ name: this.state.name, viewers: this.state.viewers });
      this.setState(({
        name: '',
        viewers: '',
      }))
    } else {
      alert("Ma'lumot kiritmadingiz!");
    }
  }

  render() {
    const {name, viewers} = this.state
    const {addForm} = this.props
    return (
      <div className='movies-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHendler}>
          <input 
            type="text"
            name='name'
            className='form-control new-post-label' 
            placeholder='Qanday kino'
            value={name}
            onChange={this.onChaneValue}
          />
          <input 
            type="number"
            name='viewers'
            className='form-control new-post-label' 
            placeholder="Necha marotaba ko'rilgan"
            value={viewers}
            onChange={this.onChaneValue}
          />
          <button className='btn btn-outline-dark' type='submit'>
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
};


export default MoviesAddForm;