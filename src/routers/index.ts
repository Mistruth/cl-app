import type { Handler } from 'worktop';
import getHtml from '../controllers/view'
import { getList } from '../controllers/list'

export const list: Handler = async function (req, res) {
	// const list = await getList('test1')
  // getList()
  getList('1')
  res.end('ok')
}

export const create: Handler = async function (req, res) {
  // await addItem('test1', {name: '1'})
  // res.end('ok')
}

export const html: Handler = async function(req, res) {
  res.setHeader('content-type', 'text/html')
  const html = getHtml()
  res.end(html)
}