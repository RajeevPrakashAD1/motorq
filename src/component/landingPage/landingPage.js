import React, { useEffect } from 'react';
import Header from './../header/header';
import styled from 'styled-components';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LandingPage = () => {
	useEffect(() => {}, []);
	return (
		<React.Fragment>
			<Header />

			<div>
				<h1>Rivera</h1>
			</div>
			<Link to="/events">
				<Button className="m-1" variant="success">
					See All Event
				</Button>
			</Link>
			{/* <Link to="/registered_event">
				<Button className="m-1" variant="success">
					See All Registered Event
				</Button>
			</Link> */}
			<Footer />
		</React.Fragment>
	);
};

export default LandingPage;

const Wrapper = styled.div`width: 100%;`;
