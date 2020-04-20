import React, { Component } from "react";
import Product from "./Product";
import { storeProducts } from "../data";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);

    return (
      <div>
        <Product />
      </div>
    );
  }
}
