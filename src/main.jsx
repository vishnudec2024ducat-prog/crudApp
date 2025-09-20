import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Rout.jsx'
import { Provider } from 'react-redux'
import store from './ReduxToolKit/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
 <RouterProvider router={router}/>
     </Provider>
)
