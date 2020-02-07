import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    persons: [
      { id: 'kjhg', name: 'Justin', age: 28 },
      { id: 'gvre', name: 'Erin', age: 28 },
      { id: 'mklu', name: 'Roi', age: 5 }
    ],
    extraState: 'Some value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); 
    // const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
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

let persons = null;

if ( this.state.showPersons){
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person  
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age} 
          key={person.index}  
          changed={() => person.nameChangedHandler}
        />
      })}
      </div>
  )
}
    return (
      <div className="App">
        <h1>Hi Im Justin!</h1>
        <button 
          style={style}      
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
