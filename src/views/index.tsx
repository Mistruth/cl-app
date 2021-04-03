import * as ReactDom from 'react-dom'
import { AppEle } from './app'

ReactDom.hydrate(AppEle, document.getElementById('app'))