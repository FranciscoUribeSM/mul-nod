
const fs = require('fs')


 let crearArchivo = (base) => {
     return new Promise ((resolve, reject) => {
        
        if (! Number(base)){
            reject(`El valor ${base} no es un numero`)
            return ;
        }
        
        let data = '';

        for(let i=1; i<10; i++){
            data += `${base} * ${i} = ${base*i} \n`  
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(` tabe-${base}.txt`)
            // console.log('The file has been saved!');
          });
        
     })
 }

 module.exports = {
    crearArchivo
 }
