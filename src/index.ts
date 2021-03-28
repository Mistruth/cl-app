import { Router } from 'worktop';

import { listen } from 'worktop/cache';

const API = new Router();

API.add('GET', '/greet/:name', (req, res) => {
	res.end(`Hello, ${req.params.name}!`);
});

API.add('GET', '/', (req, res) => {

	res.end('this is a test baby');
});

listen(API.run);
