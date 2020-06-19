import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = {
    person: [
      { name: "James", age: 28 },
      { name: "Rajan", age: 23 },
      { name: "Pintu", age: 30 }
    ],
    otherState: "the other state",
    showPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 32 },
        { name: "Rajan singh Baliyan", age: 24 },
        { name: "Pintu Saroha", age: 29 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: "James", age: 32 },
        { name: event.target.value, age: 24 },
        { name: "Pintu Saroha", age: 29 }
      ]
    })
  }

  toggelShowPerson = () => {
   const doesShow = this.state.showPerson;
   this.setState({showPerson: !doesShow});
  }


  

  render() {
    console.log(this.state);
    const cursorStyle = { cursor: 'pointer' }
    const style = {
      backgroundColor: "white",
      font: "inherit",
      padding: "10px",
      border: "1px solid blue",
      boxShadow: "0 2px 3px #ccc",
      margin: "2px",
      cursor: "pointer",
    }
    return (
      <div className="App">
        <button
          style={style}
          onClick={() => this.switchNameHandler('James Bond!')}>Switch Name</button>
        <button
          style={style}
          onClick={this.toggelShowPerson}
        >
          Show Content
        </button>
        { this.state.showPerson ?
          <div>
            <Person
              name={this.state.person[0].name}
              age={this.state.person[0].age} />
            <Person
              name={this.state.person[1].name}
              age={this.state.person[1].age}
              click={this.switchNameHandler.bind(this, 'Rajan Singh Baliyan')}
              nameChange={this.nameChangedHandler}
              style={cursorStyle} />
            <Person
              name={this.state.person[2].name}
              age={this.state.person[2].age}>My hobbies are Playing Football.</Person>
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default App;
