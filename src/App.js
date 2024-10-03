import './App.css';
import Banner from './components/banner/Banner';
import Navbarr from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/skills/Skils';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
<>
<Navbarr></Navbarr>
<Banner></Banner>
<Skills></Skills>
<Projects></Projects>
<Footer></Footer>


</>
  );
}

export default App;
