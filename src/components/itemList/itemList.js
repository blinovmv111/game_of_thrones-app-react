import React, { useState, useEffect } from "react";
import "./itemList.css";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner";

const StyledListGroupItem = styled(ListGroupItem)`
  cursor: pointer;
`;

function ItemList({ getData, onItemSelected, renderItem }) {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      updateList(data);
    });
  }, []);

  function renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = renderItem(item);
      return (
        <StyledListGroupItem key={id} onClick={() => onItemSelected(id)}>
          {label}
        </StyledListGroupItem>
      );
    });
  }

  if (!itemList) {
    return <Spinner />;
  }

  const items = renderItems(itemList);

  return <ListGroup>{items}</ListGroup>;
}

export default ItemList;

// ItemList.defaultProps = {
//   onItemSelected: () => {},
// };

// ItemList.propTypes = {
//   onItemSelected: PropTypes.func,
//   // getData: PropTypes.arrayOf(PropTypes.object),// показано для примера синтаксиса
// };

// const WithData = (View) => {
//   return class extends Component {
//     state = {
//       data: null,
//     };

//     render() {
//       const { data } = this.state;

//       if (!data) {
//         return <Spinner />;
//       }

//       return <View {...this.props} data={data} />;
//     }
//   };
// };

// const { getAllCharacters } = new gotService();
// export default WithData(ItemList, getAllCharacters);

// export default WithData(ItemList);

// export default class ItemList extends Component {

//     render() {
//         return (
//             <ul className="item-list list-group">
//                 <li className="list-group-item">
//                     John Snow
//                 </li>
//                 <li className="list-group-item">
//                     Brandon Stark
//                 </li>
//                 <li className="list-group-item">
//                     Geremy
//                 </li>
//             </ul>
//         );
//     }
// }

// renderItems(arr) {
//   return arr.map((item) => {
//     let url = item.url;          //вариант извлечения цифр (id) из конца строки URL
//     let id = "";
//     for (let index in url) {
//       if (parseInt(url[index])) {
//         id += url[index];
//       }
//     }
//     const { id } = item;
//     const label = this.props.renderItem(item);
//     return (
//       <StyledListGroupItem
//         key={id}
//         onClick={() => this.props.onItemSelected(id)}
//       >
//         {label}
//       </StyledListGroupItem>
//     );
//   });
// }
