import A from 'components/A';
import React from 'react';

import backgroundImage from 'assets/images/background-image.png';

export default function BasicInformation() {
	return (
		<div className='basic-info'>
			<div className='basic-info--left'>
				<div className='name'>
					<span className='vertical-line'></span>
					<span className='name-text'>Raymond Le</span>
				</div>
				<div className='title'>Creative thinker Minimalism lover</div>
				<div className='tiny-desc'>
					Hi, I'm Raymond. I'm UI/UX Designer. If you are looking for Designer to build your brands and grow your
					business Let's shake hands with me.
				</div>
				<div className='group-btn'>
					<A bg={'bg'}>Hire Me</A>
					<A border={'border'}>Read More</A>
				</div>
				<div className='current-status'>I am currently open for part-time work.</div>
			</div>
			<div className='basic-info--right'>
				<img src={backgroundImage} alt='background-image' />
			</div>
		</div>
	);
}
