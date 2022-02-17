import { nanoid } from 'nanoid';

const getCareers = async () =>
	await [
		{
			id: nanoid(3),
			company: 'Massa Fames',
			city: 'New York',
			position: 'Junior Front-End Developer',
			year: 2016
		},
		{
			id: nanoid(3),
			company: 'Massa Fames',
			city: 'New York',
			position: 'Junior Front-End Developer',
			year: 2016
		},
		{
			id: nanoid(3),
			company: 'Massa Fames',
			city: 'New York',
			position: 'Junior Front-End Developer',
			year: 2016
		},
		{
			id: nanoid(3),
			company: 'Massa Fames',
			city: 'New York',
			position: 'Junior Front-End Developer',
			year: 2016
		},
		{
			id: nanoid(3),
			company: 'Massa Fames',
			city: 'New York',
			position: 'Junior Front-End Developer',
			year: 2016
		}
	];

export default getCareers;
