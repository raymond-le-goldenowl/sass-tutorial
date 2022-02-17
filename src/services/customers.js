import { nanoid } from 'nanoid';

import google from 'assets/images/google-original.png';
import amazon from 'assets/images/amazon.png';
import netflix from 'assets/images/netflix-primary.png';
import shopify from 'assets/images/shopify-original.png';
import alphabet from 'assets/images/alphabet.png';

const getCustomers = async () =>
	await [
		{ id: nanoid(3), customerImage: alphabet },
		{ id: nanoid(3), customerImage: shopify },
		{ id: nanoid(3), customerImage: amazon },
		{ id: nanoid(3), customerImage: google },
		{ id: nanoid(3), customerImage: netflix }
	];

export default getCustomers;
