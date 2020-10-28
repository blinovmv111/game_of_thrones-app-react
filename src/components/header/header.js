import React from "react";
import "./header.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const HeaderTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

const HeaderLinks = styled.ul`
  display: flex;
  margin: 0;
  align-items: center;
  color: #fff;
  list-style-type: none;
  li {
    margin-right: 20px;
    font-size: 18px;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderTitle>
        {/* <a href="#">Game of Thrones DB </a> */}
        <Link to="/">Game of Thrones DB</Link>
      </HeaderTitle>
      <HeaderLinks>
        <li>
          <Link to="/characters/">Characters</Link>
          {/* <a href="#"> Characters </a> */}
        </li>
        <li>
          <Link to="/houses/">Houses</Link>
          {/* <a href="#"> Houses </a> */}
        </li>
        <li>
          <Link to="/books/">Books</Link>
          {/* <a href="#"> Books </a> */}
        </li>
      </HeaderLinks>
    </HeaderBlock>
  );
};

export default Header;

// export default class Header extends Component {
//     render() {
//         return ( <
//             div className = "header" >
//             <
//             h3 className = "header__title" >
//             <
//             a href = "https://github.com" > Game of Thrones DB < /a>    < /
//             h3 > <
//             div className = "header__links" >
//             <
//             ul className = "header__links-list" >
//             <
//             li className = "header__links-list-item" >
//             <
//             a href = "https://github.com" > Characters < /a>  < /
//             li > <
//             li className = "header__links-list-item" >
//             <
//             a href = "https://github.com" > Houses < /a>  < /
//             li > <
//             li className = "header__links-list-item" >
//             <
//             a href = "https://github.com" > Books < /a>  < /
//             li > <
//             /ul>  < /
//             div > <
//             /div>
//         );
//     }
// }
