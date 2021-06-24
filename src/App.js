import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChooseUS from './Components/ChooseUs/ChooseUs';
import Home from './Components/Home/Home';
import Smart from './Components/Smart/Smart';
import Works from './Components/Works/Works';
import Footer from './Shared/Footer/Footer';
function App() {
  return (
    <>
      <Home />
      <ChooseUS />
      <Works />
      <Smart />
      <Footer />

    </>
  );
}

export default App;
