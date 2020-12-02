import React, { Component } from 'react';
import './App.css';

import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      // string: "Hello Tahmid Khandokar"
      monsters: [],
      searchField: ""
    };
  }

  // own class method
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  // life cycle method
  componentDidMount(){ // for fetching data from a database or something like web
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // have to convert to JSON
    .then(users => {
      console.log(users); 
      this.setState( { monsters: users } )
    });
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = "Search Monster..."
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />



        {/* =========================== previous code ================== */}
        {/* <input 
          type="search"
          placeholder="Search Monster..."
          onChange={e => {
            // console.log(e.target.value);
            this.setState({ searchField: e.target.value });
            // console.log(this.state); // this line make delay because of setState() cause it is asynchronus. we can make a callback
          }}
        /> */}
        {/* <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}












// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       // string: "Hello Tahmid Khandokar"
//       monsters: [
//       {
//         name: "Frankstein",
//         id: "mst1"
//       },
//       {
//         name: "Dracula",
//         id: "mst2"
//       },
//       {
//         name: "Jumba",
//         id: "mst3"
//       },
//       {
//         name: "Abalaba",
//         id: "mst4"
//       }
//       ]
//     }
//   }

//   render(){
//     return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p>
//                 Edit <code>src/App.js</code> and save to reload.
//               </p>
//               <p>
//     {/* { this.state.string }  */ this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name } </h1>)}
//               </p>
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 This is a React Course. Learn React.
//               </a>
//               {/* <button onClick={() => this.setState({ string: 'Goodbye Tahmid Khandokar' })}>Click here to goodbye</button> */}
//             </header>
//           </div>
//         );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           This is a React Course. Learn React.
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
