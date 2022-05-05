export const transformDate = (date:string):string =>{
    
  const dateOriginal = new Date(date);
  const day = dateOriginal.getDate();
  const month = dateOriginal.getMonth()+1;
  const year = dateOriginal.getFullYear();
  const dateFinish = `${year}-${month}-${day}`;
  
  return dateFinish;
}