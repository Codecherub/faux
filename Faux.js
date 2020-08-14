// start Faux.js
function write(data){document.write(data)}


const faux = (data) =>{
  write(data.name)
}


faux({
  //define faux schema
  'name':'fauxDB',
  'schema':['id','name','age']
})
