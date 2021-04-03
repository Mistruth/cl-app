import * as ReactDom from 'react-dom/server'
import { AppEle } from '../views/app'

const AppString = ReactDom.renderToString(AppEle)

interface GetHtml {
  (str: string): string
}

const getHtml:GetHtml = (str: string) =>  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">${str}</div>
</body>
</html>
`

export default () => {
  return getHtml(AppString)
}