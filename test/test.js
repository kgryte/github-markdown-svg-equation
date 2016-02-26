'use strict';

// MODULES //

var tape = require( 'tape' );
var mdeqn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof mdeqn, 'function', 'main export is a function' );
	t.end();
});
