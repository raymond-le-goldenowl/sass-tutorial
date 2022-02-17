import React from 'react';

export default function A({
	children,
	href = '!#',
	target = '',
	type = null,
	onClick = Function,
	border = null,
	bg = null,
	classes = null
}) {
	return (
		<div className='link-wrapper'>
			<a
				className={`link ${border === 'border' ? border : ''} ${bg === 'bg' ? bg : ''} ${classes ? classes : ''}`}
				href={href}
				target={target}
				type={type}
				onClick={onClick && onClick}
			>
				{children}
			</a>
		</div>
	);
}
