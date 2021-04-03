import { Router } from 'worktop';
import { listen } from 'worktop/cache';
import * as TODO from './routers'

const API = new Router();


API.add('GET', '/queryList', TODO.list);
API.add('POST', '/create', TODO.create);
API.add('GET', '/', TODO.html);

listen(API.run);
