import { nanoid } from 'nanoid';

import featuredProject1 from 'assets/images/featured-project-1.png';
import featuredProject2 from 'assets/images/featured-project-2.png';
import featuredProject3 from 'assets/images/featured-project-3.png';
import featuredProject4 from 'assets/images/featured-project-4.png';

const getFeaturedProjects = async () =>
	await [
		{
			id: nanoid(3),
			featuredProjectImage: featuredProject1,
			title: 'Project title here'
		},
		{
			id: nanoid(3),
			featuredProjectImage: featuredProject2,
			title: 'Project title here'
		},
		{
			id: nanoid(3),
			featuredProjectImage: featuredProject3,
			title: 'Project title here'
		},
		{
			id: nanoid(3),
			featuredProjectImage: featuredProject4,
			title: 'Project title here'
		}
	];

export default getFeaturedProjects;
