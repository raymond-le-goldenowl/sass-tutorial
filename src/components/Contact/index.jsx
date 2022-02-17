import React from 'react';

import socialIcons from 'services/social-icons';

export default function Contact() {
	return (
		<div className='contact'>
			<div className='title'>Contact with me</div>
			<div className='tiny-caption'>
				I'm not currently taking on new client work but feel free to contact me for any other inquiries.
			</div>
			<div className='social-icons'>
				<div className='twitter'>
					<img src={socialIcons.twitter} alt='twitter' />
				</div>
				<div className='dribble'>
					<img src={socialIcons.dribble} alt='dribble' />
				</div>
				<div className='facebook'>
					<img src={socialIcons.facebook} alt='facebook' />
				</div>
				<div className='codepen'>
					<img src={socialIcons.codePen} alt='codepen' />
				</div>
				<div className='at-sign'>
					<img src={socialIcons.atSign} alt='at-sign' />
				</div>
				<div className='instagram'>
					<img src={socialIcons.instagram} alt='instagram' />
				</div>
			</div>
		</div>
	);
}
