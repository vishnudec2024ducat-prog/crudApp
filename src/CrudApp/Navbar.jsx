import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataProvider } from "../Store/store";
import { IoMdPersonAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {handleCheckForm, handleClearForm, handleShow} from "./../ReduxToolKit/CrudSlice.js"
const Navbar = () => {
  const dispatch = useDispatch()

    const handleAdd = ()=>{
      dispatch(handleCheckForm("Add"))
      dispatch(handleClearForm())
      dispatch(handleShow());
    }
  return (
    <>

      <nav
        className="navbar navbar-expand-lg bg-danger-subtle"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin">
                  Admin Pannel
                </Link>
              </li>
            </ul>
            <div>
              <Button variant="success"
              className="me-5"
               onClick={handleAdd}
               >
                < IoMdPersonAdd/> <span>Add USer</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
