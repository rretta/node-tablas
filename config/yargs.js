import { createRequire } from 'module';
import "colors"

const require = createRequire(import.meta.url);

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')


const argv = yargs(hideBin(process.argv))
.option("b",{
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
})

.option("l",{
    alias: "listar",
    type: "boolean",
    default:false,
    describe: "Muestra la tabla en consola",
})
.option("h",{
    alias: "hasta",
    type: "number",
    demandOption: true,
    
    describe: "Es el multiplicador"
})

.check((argv, options) =>{
    if(isNaN(argv.b)){
        throw new Error("🙅 La base tiene que ser un número".red)
    }else if(isNaN(argv.h)){
        throw new Error("🙅 El multiplicador tiene que ser un número".red)
    }
    else {
        return true
    }
})
.argv


// console.log(argv)

// console.log(`base: yargs ${argv.base}`)

export default argv