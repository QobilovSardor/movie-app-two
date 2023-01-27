import React from 'react';
import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import SearchPanel from '../search-panel/SearchPanel';
import './app.css'
import { v4 as uuidv4 } from 'uuid';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Empire of Osman', viewers: 726, id: 1, favourite: false, like: false },
        { name: 'Ertugrul', viewers: 856, id: 2, favourite: false, like: false },
        { name: 'Omar', viewers: 999, id: 3, favourite: false, like: false },
      ],
      term: '',
      filter: 'all'
    }
  }

  onDeleted = (id) => {
    this.setState(({data}) => ({data: data.filter(c => c.id !== id)}))
  }

  addForm = (item) => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    this.setState(({data}) => ({
      data: [...data, newItem]
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchHendler = (arr, term) => {
    if (term.length === 0) {
      return arr
    }

    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  updateTermHendler = term => this.setState({term})

  filterHendler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(item => item.like)
      case 'mostViewers':
        return arr.filter(item => item.viewers > 800)
      default:
        return arr
    }
  }

  updateFilterHandler = (filter) => this.setState({filter})

  render() {
    const {data, term, filter} = this.state;
    const allMoviesConunt = data.length;
    const favouriteMoviesCount = data.filter(favourite => favourite.favourite).length;
    const visibleteData = this.filterHendler(this.searchHendler(data, term), filter);
    return (
      <div className='app font-monospace'>
        <div className="content">
          <AppInfo allMoviesConunt={allMoviesConunt} favouriteMoviesCount={favouriteMoviesCount}/>
          <div className='search-panel'>
            <SearchPanel updateTermHendler={this.updateTermHendler} />
            <AppFilter filter={filter} updateFilterHendler={this.updateFilterHandler} />
          </div>
          <MovieList 
            onToggleProp={this.onToggleProp}
            data={visibleteData} 
            onDeleted={this.onDeleted}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
};

export default App;

