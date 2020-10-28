import React, { useState, useEffect } from "react";
// import "./randomChar.css";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
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

function RandomChar({ interval, getData }) {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // static defaultProps = {
  //   interval: 15000,
  // };
  function updateChar() {
    const id = Math.floor(Math.random() * 140 + 25); // 25-140
    // const id = 130000; // для тестирования ошибки
    getData(id)
      .then((char) => {
        setChar(char);
      })
      .catch(() => setError(true));
  }

  useEffect(() => {
    updateChar();
    setLoading(false);
    let timeId = setInterval(updateChar, interval);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  console.log(char);
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

export default RandomChar;

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

// const View = ({ char }) => {
//   const { name, gender, born, died, culture } = char;
//   return (
//     <>
//       <h4>Random Character: {name} </h4>
//       <ListGroup className="list-group-flush">
//         <ListGroupItem className="d-flex justify-content-between">
//           <Term> Gender </Term>
//           <span>{gender}</span>
//         </ListGroupItem>
//         <ListGroupItem className="d-flex justify-content-between">
//           <Term> Born </Term>
//           <span>{born}</span>
//         </ListGroupItem>
//         <ListGroupItem className="d-flex justify-content-between">
//           <Term> Died </Term>
//           <span>{died}</span>
//         </ListGroupItem>
//         <ListGroupItem className="d-flex justify-content-between">
//           <Term> Culture </Term>
//           <span>{culture}</span>
//         </ListGroupItem>
//       </ListGroup>
//     </>
//   );
// };

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
