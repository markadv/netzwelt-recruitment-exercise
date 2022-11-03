import { Routes, Route, Link } from "react-router-dom";

/* Routes, Pages */
import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App = () => {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path="account/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
