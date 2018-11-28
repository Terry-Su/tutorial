const PATH = require( 'path' )
const project = PATH.resolve( __dirname, './tsconfig.json' )

require( "ts-node" ).register( { files: true , project } )
