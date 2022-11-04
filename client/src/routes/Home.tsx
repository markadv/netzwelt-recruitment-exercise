import axios from "axios";

const Home = () => {
	axios.get("http://localhost:1337/territories/all").then((response) => {
		console.log(response);
	});
	return <div>Home</div>;
};

export default Home;
