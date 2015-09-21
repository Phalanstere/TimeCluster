var // Expectation library:
    chai = require( 'chai' ),
    util = require('util'),
    // Module to be tested:
    basic = require( './../lib/index.js' );


// VARIABLES //

var expect = chai.expect,
    assert = chai.assert;


describe( 'timeCluster', function tests() {
    "use strict";
    var list1,
        list2;
    
    it( 'should export a function', function test() {
        expect( basic ).to.be.a( 'function' );
    });    
    

    list1 = [{"file":"folder/images1/IMG_4358.jpg","date":"2015:09:04 21:11:26","time":1431401036000},{"file":"folder/images1/IMG_4370.jpg","date":"2015:09:04 21:11:44","time":1421401104000},{"file":"folder/images1/IMG_4375.jpg","date":"2015:09:04 21:11:50","time":1441401110000},{"file":"folder/images1/IMG_4381.jpg","date":"2015:09:04 21:12:10","time":1441401130000},{"file":"folder/images1/IMG_4424.jpg","date":"2015:09:04 21:17:33","time":1441401453000},{"file":"folder/images1/IMG_4442.jpg","date":"2015:09:04 21:18:16","time":1441401496000},{"file":"folder/images1/IMG_4363.jpg","date":"2015:09:04 21:11:35","time":1441401095000},{"file":"folder/images1/_MG_4501.jpg","date":"2015:09:17 15:54:23","time":1432505263000},{"file":"folder/dir/images2/IMG_4363.jpg","date":"2015:09:04 21:11:35","time":1441401095000},{"file":"folder/dir/images2/IMG_4370.jpg","date":"2015:09:04 21:11:44","time":1441401104000},{"file":"folder/dir/images2/IMG_4375.jpg","date":"2015:09:04 21:11:50","time":1441401110000},{"file":"folder/dir/images2/IMG_4381.jpg","date":"2015:09:04 21:12:10","time":1441401130000},{"file":"folder/dir/images2/IMG_4424.jpg","date":"2015:09:04 21:17:33","time":1441401453000},{"file":"folder/dir/images2/IMG_4442.jpg","date":"2015:09:04 21:18:16","time":1441401496000},{"file":"folder/dir/images2/IMG_4358.jpg","date":"2015:09:04 21:11:26","time":1441401086000}];
    list2 = ["Hans", "Peter"];


    it( 'should pass provided list of timeframed objects', function test() {
        var m = new basic(list1);
    });


    it( 'should return if provided with a timeframe that is a number ', function test() {
        var values = [
            list1,
            27
        ];
       var m = new basic(list1);
       assert.lengthOf(list2, 2, 'list value has a length of 3');

    });


    it( 'warning should be: the array contains strings instead of objects', function test() {
        var m = new basic(list2);

    });    
    


});