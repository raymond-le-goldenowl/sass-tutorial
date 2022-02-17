import { nanoid } from 'nanoid';

const getProjects = async () => {
	return await [
		{
			id: nanoid(4),
			title: 'Web design',
			desc: 'Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.',
			link: '#!Web design'
		},
		{
			id: nanoid(4),
			title: 'Mobile design',
			desc: 'Mobile application development is a highlight that businesses are interested in at the moment and in the future.',
			link: '#!Mobile design'
		},
		{
			id: nanoid(4),
			title: 'Branding',
			desc: 'Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.',
			link: '#!Branding'
		},
		{
			id: nanoid(4),
			title: '3D modeling',
			desc: 'Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art',
			link: '#!3D modeling'
		},
		{
			id: nanoid(4),
			title: 'Photography',
			desc: 'While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.',
			link: '#!Photography'
		},
		{
			id: nanoid(4),
			title: 'Video creating',
			desc: 'Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.',
			link: '#!Video creating'
		}
	];
};

export default getProjects;
