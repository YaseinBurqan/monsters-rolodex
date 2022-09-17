import { Component } from "react";
import "./search-box.css";

class SearchBox extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { onChangeHandler, placeholder, className } = this.props;

    return (
      <>
        <div className="card-list">
          <input type="search" className={`search-box ${className}`} placeholder={placeholder} onChange={onChangeHandler} />
        </div>
      </>
    );
  }
}

export default SearchBox;
