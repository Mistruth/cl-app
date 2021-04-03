import { Router } from 'worktop';
import { listen } from 'worktop/cache';
import * as TODO from './routers'

const API = new Router();

API.add('GET', '/queryList', TODO.list);
API.add('GET', '/create', TODO.create);
API.add('GET', '/index.html', TODO.html);

listen(API.run);
