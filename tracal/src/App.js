import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Card from './components/Card';
import Features from './components/Features';
import Footer from './components/Footer';
import logo from './images/logo.png';
import banner from './images/banner.png';
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const img1 = "https://media.istockphoto.com/photos/chicken-and-roasted-veg-with-lettuce-on-white-plate-picture-id182845577?b=1&k=20&m=182845577&s=170667a&w=0&h=x3ws5c1HEvKi3TRjpWti3Lc4WYXMBB6HXYWkONzYOAQ=";
const img2 = "https://media.istockphoto.com/photos/fitness-workout-routine-blank-notebook-and-detox-smoothie-picture-id492219680?b=1&k=20&m=492219680&s=170667a&w=0&h=o2FueosmL536wsHuNl3CFEOuOu5f3lVc6_thVhLA5EM=";
const img3 = "https://media.istockphoto.com/photos/healthy-food-for-lower-cholesterol-and-heart-care-shot-on-wooden-picture-id1279763992?b=1&k=20&m=1279763992&s=170667a&w=0&h=PP9Z4NeTcx5iZodFRxA4bbRG7QgXef9LCQdIh5lr7oY=";

function App() {
  return (
   <>
   <Navbar img= {logo} />
   <Image img = {banner} styles = "banner"/> 
   <Card id="1" img={img1} />
   <Card id="2" img={img2}/>
   <Card id="3" img={img3}/>
   <Features/>
   <Footer/>
   </>
  );
}

export default App;
