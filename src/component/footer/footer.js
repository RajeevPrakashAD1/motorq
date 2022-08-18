import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Link to="/adminLogin">
					<Button className="m-1" variant="outline-primary">
						Admin Login
					</Button>
				</Link>
				<Link to="/registerEvent">
					<Button className="m-1" variant="outline-secondary">
						Register Event
					</Button>
				</Link>
				<Link to="/verify">
					<Button className="m-1" variant="outline-secondary">
						Verify User
					</Button>
				</Link>
			</Wrapper>
		</React.Fragment>
	);
};

export default Footer;

const Wrapper = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	background-color: #f5f5f5;
	padding: 20px;
`;
