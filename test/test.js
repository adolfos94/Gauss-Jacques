const math = require( 'mathjs' );
const GaussJacques = require( '../index' );

// Let K a (N x N) matrix
let K =
    [ [ 42, 97, 23 ],
    [ 51, 30, 77 ],
    [ 33, 7, 66 ] ];

//K = math.random( [ 20, 20 ], 0, 500 );
//K = math.round( K );

// Let m a prime number, referred as modulo.
const m = 89;



// Calculate the inverModular of K
var hrstart = process.hrtime();
K = GaussJacques.inverseModular( K, m );
hrend = process.hrtime( hrstart );
console.info( 'Execution time (s): %d seconds.', ( hrend[ 0 ] + ( hrend[ 1 ] / 1e9 ) ).toFixed( 3 ) );

//console.log( K )


