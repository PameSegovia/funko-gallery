import Cards from "../Cards/Cards";
import { Footer } from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

import "./Home.css"

const Home = () => {
	return (
		<>
      <NavBar />
			<br/>
			<div className="main">
			  <Cards/>
			</div>
			<Footer/>
			
    </>
	)
}
export default Home;