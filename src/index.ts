import { Router } from 'worktop';
import { listen } from 'worktop/cache';
import { uid } from 'worktop/utils'

const API = new Router();

API.add('GET', '/query', (req, res) => {
	res.end(uid(16))
});

listen(API.run);
