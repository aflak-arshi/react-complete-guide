import { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Char from './Char/Char';
import Person from './Persons/Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
class App extends Component {
  
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Aflak', age: 26 }
    ],
    userName: 'Max',
    showPerson: false,
    textBoxValue: ''
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
    console.log(this.state)
  }

  onTextChangeHandler = (event) => {
    this.setState({
      textBoxValue: event.target.value
    })
  };

  onCharHandler = (id) => {
    let charIndex = this.state.textBoxValue.split('');
    charIndex.splice(id, 1);
    const updatedText = charIndex.join('');
    this.setState({
      textBoxValue: updatedText
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const rdn = Math.random();
    if (rdn > 0.7) {
      throw new Error('Somthing went wrong');
    }

    return (
      <div className="App">
        <h1>Hello Aflakaaa</h1>
        {/* <input type="text" onChange={this.onTextChangeHandler} value={this.state.textBoxValue} />
        <Validation textLength={this.state.textBoxValue.length} />
        {this.state.textBoxValue.split('').map((item, index) => (
          <Char key={index} char={item} click={() => this.onCharHandler(index)} />
        ))} */}
        
        <UserInput onUserNameChange={this.handleUserNameChange} userName={this.state.userName}  />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <button style={style} type="button" onClick={this.togglePersonsHandler} >Toogle Persons</button>
        <div>
          {this.state.showPerson && this.state.persons.map((person, index) => (
            <ErrorBoundry key={person.name}>
              <Person 
              click={() => this.deletePersonHandler(index)} 
              key={person.name} 
              name={person.name} 
              age={person.age} />
            </ErrorBoundry>
          ))}
        </div>
      </div>
    )
  }
}

export default Radium(App);
