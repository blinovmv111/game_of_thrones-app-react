import React, { Component } from "react";
// import "./randomChar.css";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";
import PropTypes from "prop-types";

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Term = styled.span`
  font-weight: bold;
`;

export default class RandomChar extends Component {
  gotService = new GotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  // static defaultProps = {
  //   interval: 15000,
  // };

  componentDidMount() {
    this.updateChar();
    this.timeId = setInterval(this.updateChar, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  onCharLoaded = (char) => {
    // for (let key in char) {
    //   if (char[key] === "") {
    //     char[key] = "no data :(";
    //   } else {
    //     continue;
    //   }
    // }
    this.setState({
      char,
      loading: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateChar = () => {
    console.log("update");
    const id = Math.floor(Math.random() * 140 + 25); // 25-140
    // const id = 130000; // для тестирования ошибки
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <RandomBlock>
        {errorMessage}
        {spinner}
        {content}
      </RandomBlock>
    );
  }
}

RandomChar.defaultProps = {
  interval: 15000,
};

RandomChar.propTypes = {
  interval: PropTypes.number,
};

//эту функцию заменяет испольование библиотеки PropTypes
// RandomChar.propTypes = {
//   interval: (props, propName, componentName) => {
//     const value = props[propName];

//     if (typeof value === "number" && !isNaN(value)) {
//       return null;
//     }
//     return new TypeError(`${componentName}: ${propName} must be a number`);
//   },
// };

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>Random Character: {name} </h4>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="d-flex justify-content-between">
          <Term> Gender </Term>
          <span>{gender}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <Term> Born </Term>
          <span>{born}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <Term> Died </Term>
          <span>{died}</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <Term> Culture </Term>
          <span>{culture}</span>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

// export default class RandomChar extends Component {

//     render() {

//         return (
//             <div className="random-block rounded">
//                 <h4>Random Character: John</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Gender </span>
//                         <span>male</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Born </span>
//                         <span>11.03.1039</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Died </span>
//                         <span>13.09.1089</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Culture </span>
//                         <span>Anarchy</span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }
