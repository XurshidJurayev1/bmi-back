import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Courses',
      path: '/courses',
    },
    {
      name: 'News',
      path: '/news',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">KGD</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <AiOutlineMenu />
            {/*<span className="navbar-toggler-icon"></span>*/}
            {/*<i className="fa-solid fa-ellipsis-vertical"></i>*/}
          </button>
          <div className="collapse navbar-collapse nvb" id="navbarSupportedContent">
            <button className="navbar-toggler nvb-clos e" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                    style={{ position: 'absolute' }}
                    aria-label="Toggle navigation">
              <AiOutlineCloseSquare />
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                routes.map((item, idx) => {
                  return (
                    <li className="nav-item" key={idx}>
                      <NavLink to={item.path} className="nav-link " activeClassName="nav-link active"
                               aria-current="page">{item.name}</NavLink>
                    </li>
                  );
                })
              }


            </ul>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            </div>


          </div>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;


// import { Link } from "react-router-dom";
// import { React, useState } from "react";
// import logo from "../../images/PayMe_Logo.png";
// import "./navbar.scss";
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBBtn,
//   MDBCollapse,
//   MDBDropdownToggle,
//   MDBDropdown,
//   MDBDropdownItem,
//   MDBDropdownLink,
//   MDBDropdownMenu,
// } from "mdb-react-ui-kit";
//
// const Navbar = () => {
//   const [showBasic, setShowBasic] = useState(false);
//   return (
//     <div>
//       <MDBNavbar className="fixed-top" expand="lg" light bgColor="light">
//         <MDBContainer>
//           <MDBNavbarBrand href="#">
//             <img className="navbar__logo" src={logo} alt="" />
//           </MDBNavbarBrand>
//           <MDBNavbarToggler
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setShowBasic(!showBasic)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//
//           <MDBCollapse navbar show={showBasic}>
//             <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/">
//                   Домой
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/about">
//                   О нас
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/blog">
//                   Новости
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/contact">
//                   Контакты
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/vokansi">
//                   Ваканси
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <Link className="nabar__link nav-link" to="/paymet">
//                   Оплата
//                 </Link>
//               </MDBNavbarItem>
//               <MDBNavbarItem className="nabar__item">
//                 <MDBDropdown>
//                   <MDBDropdownToggle
//                     tag="a"
//                     className="nav-link nabar__link nabar__link-cursor"
//                   >
//                     Ru
//                     <i className="fas fa-language"></i>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink>UZ</MDBDropdownLink>
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       <MDBDropdownLink>EN</MDBDropdownLink>
//                     </MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//
//             <form className="d-flex input-group w-auto">
//               <input
//                 type="search"
//                 className="form-control"
//                 placeholder="поиск по сайту"
//                 aria-label="Search"
//               />
//               <MDBBtn color="primary">поиск</MDBBtn>
//             </form>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </div>
//   );
// };
//
// export default Navbar;

