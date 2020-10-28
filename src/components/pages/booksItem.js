import React, { Component } from "react";
import ItemDetails, { Field } from "../itemDetails";
import GotService from "../../services/gotService";

export default class BooksItem extends Component {
  gotService = new GotService();

  //   state = { //когда с помощью match мы вытащили id нам уже state не нужен
  //     selectedBook: 3,
  //   };

  render() {
    return (
      <ItemDetails
        // itemId={this.state.selectedBook}
        itemId={this.props.bookId}
        getData={this.gotService.getBook}
      >
        <Field field="numberOfPages" label="NumberOfPages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
  }
}
