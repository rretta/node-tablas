import { crearArchivoTabla } from "./helpers/multiplicar.js"
// import { createRequire } from 'module';
// const requiree = createRequire(import.meta.url);
// const argv = requiree("./config/yargs.js")
import argv from './config/yargs.js'





crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreTabla => console.log(`${nombreTabla} creada`))
    .catch(err => console.log(err))