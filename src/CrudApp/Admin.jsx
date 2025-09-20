import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../Store/store";
import ModalForm from "./ModalForm";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData, getAllUserData, getSingleUserData, handleCheckForm, handleClearForm, handleShow } from "../ReduxToolKit/CrudSlice.js";
import Loading from "./Loading.jsx";
const Admin = () => {
  const dispatch = useDispatch();
  const { data, isLoading,user } = useSelector((state) => state.crudApp);

  const handleEdit = (id) => {
    dispatch(handleCheckForm("Edit"));
    dispatch(getSingleUserData(id))
    dispatch(handleShow());
  };
  const handleRead = (id)=>{
      dispatch(handleCheckForm("Read"))
      dispatch(handleClearForm())
      dispatch(getSingleUserData(id))
      dispatch(handleShow())
  }
  useEffect(() => {
    dispatch(getAllUserData());
  }, []);
  return (
    <>
      <ModalForm />
      {isLoading ? (
        <Loading />
      ) : (
        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Photo</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elm, ind) => (
              <tr key={elm.id}>
                <th scope="row">{ind + 1}</th>
                <td>{elm.name}</td>
                <td>{elm.email}</td>
                <td>{elm.age}</td>
                <td>
                  <img
                    src={elm.image}
                    alt=""
                    className="w-50 img-fluid"
                    style={{ height: "100px" }}
                  />
                </td>
                <td>{elm.address}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-success "
                       onClick={
                        ()=>handleEdit(elm.id)}
                    >
                      <CiEdit />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={() => dispatch(deleteUserData(elm.id))}
                    >
                      <MdDelete />
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                       onClick={()=>handleRead(elm.id)}
                    >
                      <CiRead />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Admin;
