////////// розпаршує те що прийшло з сервера в масив

export function hendlerAnswer (promisByFecthRequset){
  promisByFecthRequset.then(resp=>{
    console.log(resp.hits);
    return resp.hits;
  })}