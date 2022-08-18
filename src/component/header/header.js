import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
	const navigate = useNavigate();
	const handleClick = () => {
		localStorage.removeItem('admin');
		localStorage.removeItem('user');
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('access');
		alert('logout successfully');
		navigate('/');
	};
	return (
		<Wrapper>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">Rivera</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/login">Login</Nav.Link>
							<Nav.Link href="/signup">Signup</Nav.Link>
							<Button className="ml-4" onClick={handleClick} variant="danger">
								{' '}
								Logout{' '}
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Wrapper>
	);
}

export default Header;
const Wrapper = styled.div`
	color: white !important;
	background-color: red !important;
`;
