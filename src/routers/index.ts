import type { Handler } from 'worktop';
import getHtml from '../controllers/view'

export const list: Handler = async function (req, res) {
	
}

export const create: Handler = async function (req, res) {
  
}

export const html: Handler = async function(req, res) {
  res.setHeader('content-type', 'text/html')
  const html = getHtml()
  res.end(html)
}