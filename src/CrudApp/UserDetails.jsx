import React, { useContext } from "react";
import { DataProvider } from "../Store/store";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { user } = useSelector(state=>state.crudApp);
  const { name, age, email, address, image } = user;
  return (
    <div className="">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-8 p-4 d-flex flex-column position-static">
          <h1 className="d-inline-block mb-2 text-primary-emphasis">{name}</h1>
          <h6 className="mb-0">{email}</h6>
          <div className="mb-1 text-body-secondary">{age}</div>
          <p className="card-text mb-auto">
            <i>{address}</i>
          </p>
        </div>
        <div className="col-4 d-none d-lg-block">
          <img src={image} alt="image" width={200} height={200} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
