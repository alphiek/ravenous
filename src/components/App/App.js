import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = { // This is the example business object that will be passed to the businesses variable.
 imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
 name: 'MarginOtto Pizzeria',
 address: '1010 Paddington Way',
 city: 'Flavortown',
 state: 'NY',
 zipCode: '10101',
 category: 'Italian',
 rating: 4.5,
 reviewCount: 90
};

const businesses = [ // this variable creates an array of 6 business variable objects to pass to the BusinessList component
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;

{/* BusinessList businesses={businesses}  //This imports Business List Component, passing the information named businesses which represents the array stored in the variable businesses. */}
