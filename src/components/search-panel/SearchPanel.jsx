import React from 'react';
import './search-panel.css'

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  updateTermHendler = (e) => {
    const term = e.target.value
    this.setState({term});
    this.props.updateTermHendler(term)
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          className='form-control search-input' 
          placeholder='Kinorlarni qidirish' 
          value={this.state.term} 
          onChange={this.updateTermHendler} 
        />
      </div>
    );
  }
};

export default SearchPanel;