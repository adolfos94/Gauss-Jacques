'use strict'

const math = require( 'mathjs' );

/**
 *  Calculates the inverseModular of the matrix
 *  based on the Gauss-Jacques method
 * @date 2019-03-06
 * @param {matrix} matrix Original Matrix
 * @param {m} m Prime number known as modulo
 * @returns {K} Returns the inverseModular of the original matrix
 */
function inverseModular( matrix, m ) {
    let K = math.matrix( matrix ) // Matrix
    let sizeOfArray = K.size();
    let rows = sizeOfArray[ 0 ];
    let cols = sizeOfArray[ 1 ];

    if ( !isSquareMatrix( cols, rows ) ) {
        console.error( "The matrix must be an square (n x n) matrix" );
        return undefined;
    }

    K = math.concat( K, math.identity( sizeOfArray ) )

    for ( let i = 0; i < rows; i++ ) {
        K = isPivotZero( K, i );

        let pivot = K.get( [ i, i ] );
        let x = ( math.xgcd( pivot, m ) )._data[ 1 ];

        //K(i,:) = mod( K(i,:) * x,m);
        K = setRow( K, math.mod( math.multiply( getRow( K, i ), x ), m ), i );

        for ( let j = 0; j < rows; j++ ) {
            if ( i != j ) {
                //K(j,:) = mod((K(i,:) * (K(j,i)*-1) + K(j,:)),m);
                var RxR = math.multiply( getRow( K, i ), math.multiply( K.get( [ j, i ] ), -1 ) );
                K = setRow( K, math.mod( math.add( RxR, getRow( K, j ) ), m ), j )
            }
        }
    }

    // Checks if it is the inverseModular of @param {matrix}
    if ( isInverseModular( K.subset( math.index( math.range( 0, rows ), math.range( 0, cols ) ) ), rows ) ) {
        //  Deletes de identity matrix
        K = K.subset( math.index( math.range( 0, rows ), math.range( cols, cols * 2 ) ) );
        return K;
    } else {
        console.error( `There is no inverseModular for the matrix K` );
        return undefined;
    }
}

/**
 * Calculate if the matrix is (n x n)
 * @date 2019-03-06
 * @param {cols} cols Cols of the Original Matrix
 * @param {rows} rows Rows of the Original Matrix
 * @returns {true | false} isQuareMatrix
 */
function isSquareMatrix( cols, rows ) {
    return cols === rows ? true : false;
}

/**
* Retrieve a row from a matrix
* @param {Matrix | Array} matrix
* @param {number} index_row    Row number index
* @return {Matrix | Array} Returns the row as a vector
*/
function getRow( matrix, index_row ) {
    var cols = math.size( matrix ).valueOf()[ 1 ];
    return math.flatten( matrix.subset( math.index( index_row, math.range( 0, cols ) ) ) ).toArray();
}

/**
 * Set a entirely row of the matrix
 * @date 2019-03-08
 * @param {matrix} matrix
 * @param {array} array New row to replace
 * @param {row} index_row Row number index
 * @returns {Matrix | Array} Returns the modified matrix
 */
function setRow( matrix, array, index_row ) {
    var cols = math.size( matrix ).valueOf()[ 1 ];
    for ( var i = 0; i < cols; i++ ) {
        matrix.set( [ index_row, i ], array[ i ] );
    }
    return matrix;
}

/**
 * This function swap rows if the pivot is zero
 * It finds a new pivot that is not zero.
 * @date 2019-03-08
 * @param {*} matrix
 * @param {*} index index of the pivot
 * @returns {Matrix | Array} Returns the modified matrix
 */
function isPivotZero( matrix, index ) {
    var rows = math.size( matrix ).valueOf()[ 0 ];
    if ( matrix.get( [ index, index ] ) == 0 ) {
        for ( var i = 0; i, rows; i++ ) {
            if ( matrix.get( [ i, index ] ) != 0 ) {
                matrix.swapRows( index, i );
                break;
            }
        }
    }
    return matrix;
}
/**
 * Validates the diagonal of the identity matrix being equal
 * to the number of the rows
 * @date 2019-03-09
 * @param {*} K The inverseModularMatrix
 * @param {*} rows The number of rows
 * @returns {Boolean}
 */
function isInverseModular( K, rows ) {
    if ( math.sum( math.diag( K ) ) == rows ) return true;
    else return false;
}

exports.inverseModular = inverseModular;