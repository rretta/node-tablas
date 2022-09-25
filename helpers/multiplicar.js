import { writeFileSync } from 'node:fs';
import "colors"



export const crearArchivoTabla = async (base=1, listar=false, hasta= 10) =>{
    
    
    try{
        if(listar){
        console.log(">>".zebra)
        console.log("tabla del", `[${base}]`.bgWhite.bold)
       
    }
        let salida,consola = ""
        
        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${"x".green} ${index} = ${base*index}\n`
            salida += `${base} x ${index} = ${base*index}\n`
        }
        
        if(listar){
    console.log(consola.bold)
        }
    
    writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
    


    return `tabla-${base}.txt`.red
} catch(error){
    throw error;
}

}
