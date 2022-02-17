import React from 'react';

import A from 'components/A';

import arrowRight from 'assets/images/arrow-right.svg';

export default function SingleProject({ title = '', desc = '', href = '' }) {
	return (
		<div className='single-project'>
			<div className='project-title'>{title}</div>
			<div className='project-desc'>{desc}</div>
			<div className='project-link'>
				<A href={href}>
					See Works
					<img src={arrowRight} alt='' />
				</A>
			</div>
		</div>
	);
}
