import React from 'react';

import Header from 'components/Header';
import Divider from 'components/Divider';
import Projects from 'components/Projects';
import Customers from 'components/Customers';
import BasicInformation from 'components/BasicInformation';
import FeaturedProjects from 'components/FeaturedProjects';
import Majors from 'components/Majors';
import Careers from 'components/Careers';
import Contact from 'components/Contact';

function App() {
	return (
		<div className='app'>
			<div className='app-width'>
				<Header />
				<Divider />
				<Divider />
				<Divider />
				<BasicInformation />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Projects />
				<Divider />
				<Divider />
				<Divider />
			</div>
			<Customers />
			<div className='app-width'>
				<Divider />
				<Divider />
				<Divider />
				<FeaturedProjects />
				<Divider />
				<Divider />
				<Divider />
				<Majors />
				<Divider />
				<Divider />
				<Divider />
				<Careers />
			</div>
			<Divider />
			<Divider />
			<Contact />
		</div>
	);
}

export default App;
