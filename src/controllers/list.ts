import * as DB from 'worktop/kv'
import type { KV } from 'worktop/kv'

// declare const LISTDB: KV.Namespace = MY_FIRST_KV_STORE



export const getList = async (username: string) => {
  await MY_FIRST_KV_STORE.put('data', '1')

  const res = await MY_FIRST_KV_STORE.get('data')
  console.log(res)
  // return LISTDB.get(username)
}

// export const addItem = (username: string, value: any) => {
//   return LISTDB.put(username, value)
// }