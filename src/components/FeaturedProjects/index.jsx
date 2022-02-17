import React, { useEffect, useState } from 'react';

import { getFeaturedProjects } from 'services';
import arrowRight from 'assets/images/arrow-right.svg';

export default function FeaturedProjects() {
	const [featuredProjects, setFeaturedProjects] = useState([]);
	useEffect(() => {
		getFeaturedProjects()
			.then(featuredProjects => setFeaturedProjects(featuredProjects))
			.catch(({ message }) => alert(message));
	}, []);
	return (
		<div className='featured-projects'>
			<div className='featured-projects-title'>It’s great to always give the customer the best feed.</div>
			<div className='projects'>
				{featuredProjects.map((featuredProject, index) => (
					<div key={featuredProject.id} className={`featured-project-${index + 1}`}>
						<img src={featuredProject.featuredProjectImage} alt='' />
						<div className='featured-project-title'>
							<div className='left'>
								<span>{featuredProject.title}</span>
								<span>Photograph</span>
							</div>
							<div className='right'>
								<div className='icon'>
									<img src={arrowRight} alt='' />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
