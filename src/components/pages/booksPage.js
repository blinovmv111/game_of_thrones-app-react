import React, { Component } from "react";
import ItemList from "../itemList";
// import ItemDetails, { Field } from "../itemDetails";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";
// import RowBlock from "../rowBlock";
import { withRouter } from "react-router-dom";

class BooksPage extends Component {
  gotService = new GotService();

  state = {
    // selectedBook: 130,
    error: false,
  };

  // onItemSelected = (id) => {
  //   this.setState({
  //     selectedBook: id,
  //   });
  // };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <ItemList
        onItemSelected={(itemId) => {
          // this.props.history.push(`/books/${itemId}`);
          this.props.history.push(itemId);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => name}
      />
    );

    // const itemList = (
    //   <ItemList
    //     onItemSelected={this.onItemSelected}
    //     getData={this.gotService.getAllBooks}
    //     renderItem={(item) => item.name}
    //   />
    // );

    // const itemDetails = (
    //   <ItemDetails
    //     itemId={this.state.selectedBook}
    //     getData={this.gotService.getBook}
    //   >
    //     <Field field="numberOfPages" label="NumberOfPages" />
    //     <Field field="publisher" label="Publisher" />
    //     <Field field="released" label="Released" />
    //   </ItemDetails>
    // );

    // return <RowBlock left={itemList} right={itemDetails} />;
  }
}

export default withRouter(BooksPage);
