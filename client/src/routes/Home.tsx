import axios from "axios";
import { useState } from "react";

const Home = () => {
	const [territory, setTerritory] = useState([]);
	axios.get("http://localhost:1337/territories/all").then((response) => {
		setTerritory(response.data);
	});
	return <div>Home</div>;
};

export default Home;
