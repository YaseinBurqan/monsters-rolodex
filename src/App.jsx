import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFelid: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchMonster = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchFelid: searchMonster };
    });
  };

  render() {
    const { monsters, searchFelid } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFelid);
    });

    return (
      <>
        <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
          <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="search monster" />

          <CardList monsters={filteredMonster} />
        </div>
      </>
    );
  }
}

export default App;
