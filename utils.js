const gw = require('./gsheet.js');

const gsTojson = sheetId => {
  return new Promise((resolve,reject) => {
    gw(sheetId)
        .then((data)=>{
          resolve(data);
        })
        .catch(err => {
          reject(Error('Invalid sheet id'));
        })
  })
}

module.exports = {
  gsTojson
}
