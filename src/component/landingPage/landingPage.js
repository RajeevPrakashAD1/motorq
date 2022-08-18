import React, { useEffect } from 'react';
import Header from './../header/header';
import styled from 'styled-components';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import homepage from '../../assets/homepage.jpg';
import fwsvg from '../../assets/firework.svg';
const LandingPage = () => {
	useEffect(() => {}, []);
	return (
		<React.Fragment>
			<Header />
			<Wrapper>
				<div>
					<h1>Rivera</h1>
				</div>
				<Link to="/events">
					<Button className="m-1" variant="success">
						See All Event
					</Button>
				</Link>
				<Link to="/map">
					<Button className="m-1" variant="success">
						map
					</Button>
				</Link>
				<Footer />
			</Wrapper>
		</React.Fragment>
	);
};

export default LandingPage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${fwsvg});
	background-repeat: no-repeat;
	background-size: 280px;
	background-position: bottom left;
`;
