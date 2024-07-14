import { BrowserRouter as Router ,useRoutes } from "react-router-dom";
import { Individual, Business } from "./pages"
import { Navbar, Footer } from "./layout";



const App = () =>{

return useRoutes([
        { path: "/", element: <Individual/> },
        { path: "/business", element: <Business/> },
      ])
}
const AppWrapper = () => {

  
    return (
      <Router>
        <Navbar/>
        <App />
        <Footer/>
      </Router>
    );
  };

export default AppWrapper