﻿﻿﻿let str = require('../src/stringCalculator');

let strCalc = new str;


describe("StringCalculator()", function(){
	it("Should should return zero if the string is empty", function(){
		expect(strCalc.Add("")).toEqual(0);
	});

	it("Should be able to add two string values", function() {
		expect(strCalc.Add("1,2")).toEqual(3);
	});

	it("Should return results if input is: '1\n2,3'", function(){
		expect(strCalc.Add("1\n2,3")).toEqual(6);
    });
    
    it("Should support different delimeters", function(){
        expect(strCalc.Add("//;n1;2")).toEqual(3);
    });

    it("Should ignore numbers bigger than 1000", function(){
        expect(strCalc.Add("2,1001")).toEqual(2);
    });

    it("Should support delimeters of any length", function(){
        expect(strCalc.Add("//[**][%%]\n1**2%%3")).toEqual(6);
    });
});