const gw = require('gsheet-web');

const gsTojson = sheetId => {
  return new Promise((resolve,reject) => {
    gw(sheetId)
        .then((data)=>{
          resolve(data);
        })
        .catch(err => {
          console.log('poop')
        })
  })
}

module.exports = {
  gsTojson
}
