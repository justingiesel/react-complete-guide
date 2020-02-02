import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    persons: [
      { name: 'Justin', age: 28 },
      { name: 'Erin', age: 28 },
      { name: 'Roi', age: 5 }
    ],
    extraState: 'Some value'
  }

  switchNameHandler = (newName) => {
    // console.log('It Works!');
    // DON'T DO THIS: this.state.persons[0].name = 'Justin'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Erinabella', age: 28 },
        { name: 'Roi', age: 58 }
      ]
    })
  }

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Justin', age: 28 },
      { name: event.target.value, age: 28 },
      { name: 'Roi', age: 58 }
    ]
  })
}

  render() {
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  color: 'blue',
  padding: '8px',
  cursor: 'pointer'
};

    return (
      <div className="App">
        <h1>Hi Im Justin!</h1>
        <button 
          style={style}      
          onClick={() => this.switchNameHandler('Justin!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Jonny!!!')} 
          changed={this.nameChangedHandler}>My Hobbies: Clothing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
