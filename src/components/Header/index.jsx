import React from 'react';

import A from 'components/A';
import Logo from 'components/Logo';

export default function Header() {
	return (
		<div className='header-wrapper'>
			<header className='header-nav'>
				<nav>
					<ul className='nav-left'>
						<li>
							<Logo />
						</li>
					</ul>
					<ul className='nav-right'>
						<li>
							<A>Services</A>
						</li>
						<li>
							<A>Works</A>
						</li>
						<li>
							<A>Blog</A>
						</li>
						<li>
							<A border='border'>Hire me</A>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
