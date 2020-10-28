import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import { CharacterPage, BooksPage, HousesPage, BooksItem } from "../pages";
// import ItemList from "../itemList";
// import ItemDetails from "../itemDetails";
import GotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";

export default class App extends Component {
  gotService = new GotService();

  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };

  render() {
    const char = this.state.showRandomChar ? (
      <RandomChar interval={3000} getData={this.gotService.getCharacter} />
    ) : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <Router>
        <div className="app">
          {/* div нужен для того чтобы не потерялись стили, т.к. взаимодействие Router и Fragment иногда дает такой результат */}
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {char}
                <button className="toggle-btn" onClick={this.toggleRandomChar}>
                  Toggle random character
                </button>
              </Col>
            </Row>
            <Route path="/" component={() => <h1>Welcom to GOT DB</h1>} exact />
            <Route path="/characters" component={CharacterPage} />
            <Route path="/books" component={BooksPage} exact />
            <Route
              path="/books/:id"
              render={({ match }) => {
                console.log(match);
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
            <Route path="/houses" component={HousesPage} />
          </Container>
        </div>
      </Router>
    );
  }
}
