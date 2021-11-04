import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import React from 'react'
import {Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: null
  }

    async componentDidMount() {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
        this.setState({
          countries: data
        })
      } catch (e) {
        console.error(e)
      }
    }

  render(){
    if (!this.state.countries) return <div>Loadinnnng</div>
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} ></CountriesList>
            <Route path='/:cca3' render={(props) => {
              return <CountryDetails {...props} countries={this.state.countries} />
            }} />
          </div>
        </div>
      </div>
    );

  }
}

export default App;