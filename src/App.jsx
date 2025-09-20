// import { Outlet } from "react-router-dom";
// import Navbar from "./CrudApp/Navbar";
// import { DataProvider } from "./Store/store";

// import Action from "./CrudApp/Action";
// import Counter from "./ReduxToolKit/Counter";
// import { Provider } from "react-redux";
// import store from "./ReduxToolKit/store";

// const App = () => {
//   return (
//     // <Action>
//     //   <div className="container">
//     //     <Navbar />
//     //     <Outlet />
//     //   </div>
//     // </Action>
//     <>
//     <Provider store={store}>
//     {/* <Counter/> */}

//     </Provider>
//     </>
//   );
// };

// export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./CrudApp/Navbar";

const App = () => {
  return (
    <>
      
        <div className="container">
          <Navbar/>
          <Outlet />
        </div>
    
    </>
  );
};

export default App;
