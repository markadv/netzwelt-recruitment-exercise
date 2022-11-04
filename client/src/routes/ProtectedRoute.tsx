import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, navigateTo, children }: { isAuth: boolean; navigateTo: string; children: any }) => {
	if (!isAuth) {
		return <Navigate to={navigateTo} replace />;
	}
	return children;
};

export default ProtectedRoute;
