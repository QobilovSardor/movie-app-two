import React from 'react';
import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import SearchPanel from '../search-panel/SearchPanel';
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Empire of Osman', viewers: 726, id: 1, favourite: false },
        { name: 'Ertugrul', viewers: 856, id: 2, favourite: false },
        { name: 'Omar', viewers: 999, id: 3, favourite: false },
      ],
    }
  }

  onDeleted = (id) => {
    this.setState(({data}) => ({data: data.filter(c => c.id !== id)}))
  }

  addForm = (item) => {
    console.log(item);
    this.setState(({data}) => ({
      data: [...data, { ...item}]
    }))
  }

  render() {
    return (
      <div className='app font-monospace'>
        <div className="content">
          <AppInfo />
          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={this.state.data} onDeleted={this.onDeleted} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
};

export default App;

