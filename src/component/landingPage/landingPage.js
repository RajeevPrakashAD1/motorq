import React, { useEffect } from 'react';
import Header from './../header/header';
import styled from 'styled-components';
import Footer from '../footer/footer';

const LandingPage = () => {
	useEffect(() => {}, []);
	return (
		<React.Fragment>
			<Header />

			<div>Rivera</div>
			<Footer />
		</React.Fragment>
	);
};

export default LandingPage;

const Wrapper = styled.div`width: 100%;`;
