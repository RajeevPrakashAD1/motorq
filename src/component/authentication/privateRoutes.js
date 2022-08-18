import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
	let auth = localStorage.getItem('user');
	console.log('auth', auth);
	return auth ? <Outlet /> : <Navigate to="/login" />;
};

export const AdminPrivateRoutes = () => {
	let auth = localStorage.getItem('admin');
	console.log('auth', auth);
	return auth == 'true' ? <Outlet /> : <Navigate to="/adminLogin" />;
};
