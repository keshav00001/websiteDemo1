// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Blog from './pages/Home/Blog';
import Brand from './pages/Home/Brand';
import CaseStudy from './pages/Home/CaseStudy';
import OurTeams from './pages/Home/Teams';
import Services from './pages/Home/Services';
import Testimonial from './pages/Home/Testimonial';
import Contact from './pages/Home/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div style={{  }}>
      <Header/>
      {/* <Home /> */}
      <Routes>
        <Route path = "/" element={<Home type="home"/>}></Route>
        <Route path="/blog" element={ <Blog type="blog" /> }></Route>
        <Route path="/brand" element={ <Brand type="brand" /> }></Route>
        <Route path="/casestudy" element={ <CaseStudy type="casestudy" /> }></Route>
        <Route path="/ourTeams" element={ <OurTeams type="ourTeams" /> }></Route>
        <Route path="/Services" element={ <Services type="Services" /> }></Route>
        <Route path="/Tetimonial" element={ <Testimonial type="Tetimonial" /> }></Route>
        <Route path="/Contact" element={ <Contact type="Contact" /> }></Route>

      </Routes>
      <Footer />
    </div>


  );
}

export default App;


{/* <div >


<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}
