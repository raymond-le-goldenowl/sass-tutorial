import React, { useEffect, useState } from 'react';

import { getCustomers } from 'services';

export default function Customers() {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		getCustomers().then(customers => setCustomers(customers));
	}, []);

	return (
		<div className='customers'>
			<div className='app-width'>
				<div className='customers-title'>Trusted by</div>
				<div className='customers-trusted-by'>
					<ul>
						{customers.map(customer => (
							<li key={customer.id}>
								<img src={customer.customerImage} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
