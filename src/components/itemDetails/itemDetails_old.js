import React, { Component } from "react";
import "./itemDetails.css";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";
import gotService from "../../services/gotService";

const ItemDetailsBlock = styled.div`
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

const Field = ({ item, field, label }) => {
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <Term className="term">{label}</Term>
      <span>{item[field]}</span>
    </ListGroupItem>
  );
};

export { Field };

export default class ItemDetails extends Component {
  gotService = new gotService();

  state = {
    item: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({ item });
    });

    // this.gotService
    //   .getCharacter(itemId)
    //   .then(this.onItemDetailsLoaded)
    //   .catch(() => this.onError());

    // this.foo.bar = 0; // для создания ошибки в компоненте

    // this.gotService.getCharacter(charId).then((char) => {
    //   for (let key in char) {
    //     if (char[key] === "") {
    //       char[key] = "no data :(";
    //     } else {
    //       continue;
    //     }
    //   }
    //   this.setState({ char });
    //   this.foo.bar = 0;
    // });
  }

  // onError() {
  //   this.setState({
  //     item: null,
  //     error: true,
  //   });
  // }

  render() {
    if (!this.state.item) {
      return <span className="select-error">Please select item</span>;
    }

    const { item } = this.state;
    const { name } = item;

    return (
      <ItemDetailsBlock className="rounded">
        <h4>{name}</h4>
        <ListGroup className="list-group-flush">
          {/* <ListGroupItem className="d-flex justify-content-between">
            <Term className="term">Gender</Term>
            <span>{gender}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <Term className="term">Born</Term>
            <span>{born}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <Term className="term">Died</Term>
            <span>{died}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <Term className="term">Culture</Term>
            <span>{culture}</span>
          </ListGroupItem> */}

          {/* {this.props.children} */}
          {React.Children.map(this.props.children, (child) => {
            //Так как нам нужно добавить объект item перед тем как передавать props.children для рендеринга мы применяем этот метод. Этот метод очень похож на обычный метод map, только в качестве child может прийти что угодно, это и массив и объект и ф-я.
            return React.cloneElement(child, { item });
          })}
        </ListGroup>
      </ItemDetailsBlock>
    );
  }
}

// export default class CharDetails extends Component {
//   render() {
//     return (
//       <div className="char-details rounded">
//         <h4>John Snow</h4>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Gender</span>
//             <span>male</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Born</span>
//             <span>1783</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Died</span>
//             <span>1820</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Culture</span>
//             <span>First</span>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
