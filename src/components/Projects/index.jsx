import React, { useEffect, useState } from 'react';

import Divider from 'components/Divider';
import SingleProject from './components/SingleProject';

import { getProjects } from 'services';
import backgroundImage from 'assets/images/background-image-projects.png';

export default function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects()
			.then(projects => setProjects(projects))
			.catch(({ message }) => {
				alert(message);
			});
	}, []);

	return (
		<div className='projects'>
			<div className='projects-title'>
				From beginning ideas to individual integrity, rich identity from the line
				<span className='special-text'> on the paper to final projects</span>
			</div>
			<Divider />
			<Divider />
			<Divider />
			<div className='projects-body'>
				<div className='projects-left'>
					<img src={backgroundImage} alt='background-img' />
				</div>
				<div className='projects-right'>
					{projects.map(project => (
						<SingleProject key={project.id} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
