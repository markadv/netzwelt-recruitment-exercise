import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }: { isAuth: boolean; children: any }) => {
	if (isAuth) {
		return <Navigate to="/account/login" replace />;
	}

	return children;
};

export default ProtectedRoute;
