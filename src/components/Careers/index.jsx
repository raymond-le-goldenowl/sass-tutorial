import Divider from 'components/Divider';
import React, { useEffect, useState } from 'react';
import { getCareers } from 'services';

export default function Careers() {
	const [careers, setCareers] = useState([]);

	useEffect(() => {
		getCareers().then(careers => setCareers(careers));
	}, []);

	return (
		<div className='careers'>
			<div className='title'>Careers</div>

			<Divider />
			<Divider />
			<Divider />
			<table>
				<thead>
					<tr>
						<th>COMPANY</th>
						<th>POSITION</th>
						<th>YEAR</th>
					</tr>
				</thead>

				<tbody>
					{careers.map(career => (
						<tr key={career.id}>
							<td>
								<span className='company'>{career.company}</span>/<span className='city'>{career.city}</span>
							</td>
							<td className='position'>{career.position}</td>
							<td className='year'>{career.year}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
