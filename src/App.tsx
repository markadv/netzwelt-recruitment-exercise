import { Routes, Route, Link } from "react-router-dom";

/* Routes, Pages */
import Home from "./routes/Home";
import Login from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
	return (
		<>
			<Routes>
				<Route
					index
					element={
						<ProtectedRoute isAuth={false}>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route path="account/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
