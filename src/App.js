import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Services from './Pages/Services/Services';
import PrimaryServices from './Components/AllServices/PrimiryServices/PrimaryServices';
import SexualServices from './Components/AllServices/SexualServices/SexualServices';
import MentalServices from './Components/AllServices/MentalServices/MentalServices';
import DentalServices from './Components/AllServices/DentalServices/DentalServices';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Service from './Pages/Details/Service/Service';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/primary">
              <Services></Services>
              <PrimaryServices></PrimaryServices>
            </Route>
            <Route path="/sexual">
              <Services></Services>
              <SexualServices></SexualServices>
            </Route>
            <Route path="/mental">
              <Services></Services>
              <MentalServices></MentalServices>
            </Route>
            <Route path="/dental">
              <Services></Services>
              <DentalServices></DentalServices>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
