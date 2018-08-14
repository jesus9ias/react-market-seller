import React, { Component } from 'react';
import { getProducts } from '../store/InventoryService';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = getProducts();
    const result = products.find(p => p.id === parseInt(this.state.searchText, 10));
    global.eventHub.emit('productFound', result || null);
  }

  render() {
    return (
      <div className="searchBox">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchText} onChange={this.handleChange} />
          <button>Agregar</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
