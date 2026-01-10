import CardLogic from './component/CardLogic.jsx'
import './App.css'
import 'bootstrap/dist/CSS/bootstrap.min.css'
import HomePage from './component/HomePage.jsx'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
// import FormDetails from './component/FormDetails.jsx'
import Bar from './component/Bar.jsx'
import FormLogic from './component/FormLogic.jsx';
import { DataProvider } from './component/Context.jsx';
function App() {

const Router=createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Bar/>
      <HomePage/>
    </div>
  },
  
  {
    path:"/form",
    element:<div>
      <Bar/>
      <FormLogic/>
    </div>
  },
  {
    path:"/card",
    element:<div>
      <Bar/>
      <CardLogic/>
    </div>
  }
])
  return(
    <>
    <DataProvider>
       <RouterProvider router={Router}>
  <Bar/> </RouterProvider>
    </DataProvider>
    
    </>
  )
}
export default App
