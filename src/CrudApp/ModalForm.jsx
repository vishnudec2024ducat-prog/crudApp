import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DataProvider } from "../Store/store";
import UserDetails from "./UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, editUserData, getAllUserData, handleClose, handleUser } from "../ReduxToolKit/CrudSlice";
const ModalForm = () => {
  const dispatch = useDispatch();
  const { user, show, checkForm } = useSelector((state) => state.crudApp);
  let { name, age, email, image, address,id } = user;
  const HandleAdd = () => {
    if (checkForm == "Add") {
      dispatch(addUserData(user))
    } else if (checkForm == "Edit") {
      dispatch(editUserData({user}))
      // dispatch(getAllUserData())
    }
   dispatch( handleClose())
  };
  return (
    <>
      <Modal show={show} onHide={() => dispatch(handleClose())}>
        <Modal.Header closeButton>
          <Modal.Title>{checkForm} User Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-10 mx-auto">
              {checkForm == "Read" ? (
                <UserDetails />
              ) : (
                <form action="">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      placeholder="name@example.com"
                      name="name"
                      value={name}
                      onChange={(e) =>
                        dispatch(
                          handleUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                      // {name:aidfjgkj}
                    />
                    <label htmlFor="floatingName">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={(e) =>
                        dispatch(
                          handleUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                    />
                    <label htmlFor="floatingEmail">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingAge"
                      placeholder="name@example.com"
                      name="age"
                      value={age}
                      onChange={(e) =>
                        dispatch(
                          handleUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                    />
                    <label htmlFor="floatingAge">Age</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPhoto"
                      placeholder="name@example.com"
                      name="image"
                      value={image}
                      onChange={(e) =>
                        dispatch(
                          handleUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                    />
                    <label htmlFor="floatingPhoto">Photo</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingAddress"
                      placeholder="name@example.com"
                      name="address"
                      value={address}
                      onChange={(e) =>
                        dispatch(
                          handleUser({
                            ...user,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                    />
                    <label htmlFor="floatingAddress">Address</label>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={HandleAdd}
                    >
                      {checkForm}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
