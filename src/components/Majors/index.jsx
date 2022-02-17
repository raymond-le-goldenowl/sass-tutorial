import React from 'react';

import MajorCard from './components/MajorCard';

import search from 'assets/images/search.png';
import barChart from 'assets/images/bar-chart.png';
import dollarSign from 'assets/images/dollar-sign.png';

console.log(search);

export default function Majors() {
	return (
		<div className='majors'>
			<MajorCard
				iconImg={barChart}
				title={'Business planning'}
				description={
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
			/>

			<MajorCard
				iconImg={dollarSign}
				title={'Financial Planning'}
				description={
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
			/>

			<MajorCard
				iconImg={search}
				title={'Market Analytics'}
				description={
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
			/>
		</div>
	);
}
