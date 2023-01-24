import React from 'react';
import './movies-add-form.css'

class MoviesAddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      views: '',
    }
  }

  onChaneValue = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {name, views} = this.state
    return (
      <div className='movies-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex'>
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
            name='views'
            className='form-control new-post-label' 
            placeholder="Necha marotaba ko'rilgan"
            value={views}
            onChange={this.onChaneValue}
          />
          <button className='btn btn-outline-dark' type='button'>
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
};


export default MoviesAddForm;