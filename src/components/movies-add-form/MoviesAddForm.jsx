import React from 'react';
import './movies-add-form.css'
import { v4 as uuidv4 } from 'uuid';  

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
    this.props.addForm({name: this.state.name, viewers: this.state.viewers, id: uuidv4()});
    this.setState(({
      name: '',
      viewers: '',
    }))
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