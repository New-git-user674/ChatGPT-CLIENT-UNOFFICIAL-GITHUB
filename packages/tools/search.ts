import axios from "axios"

export async function searchWeb(query){

 const res = await axios.get(
   "https://api.duckduckgo.com",
   {params:{q:query,format:"json"}}
 )

 return res.data.Abstract
}
