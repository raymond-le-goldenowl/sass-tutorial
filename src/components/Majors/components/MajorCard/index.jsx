import React from 'react';

export default function MajorCard({ iconImg = null, title = null, description = null }) {
	return (
		<div className='major-card'>
			<img className='major-card-icon' src={iconImg} alt={title} />
			<p className='major-card-title'>{title}</p>
			<p className='major-card-description'>{description}</p>
		</div>
	);
}
