﻿﻿"use strict";

module.exports = class StringCalculator {
   
    constructor() {
        this.reg = /\d{1,}/gm;

        this.haveNegative = function(string) {
            let str = "";
            for(let i = 0; i < string.length; i++) {
                if(string[i] == "-" && !isNaN(string[i+1])) {
                    str += string[i+1] + ", ";
                }
            }
            return str;
        }
    }

    Add(string) {

        
        let sum = 0;
        let str = string.match(this.reg);
        let negatives = this.haveNegative(string);
        

        // Should catch an error if theres a negative
        try {
            if(string.includes("-")) throw ("Negatives " + negatives + "not allowed.");
        } 
        catch (error) {
            return error;
        }
        //should return 0 not NAN if a string is empty
        if(string == "") {
            return 0; 
        } 
        // Ignores an numbers that exceeds 1000 .e.g from 1001 upwards
        else {
            for(let i = 0; i < str.length; i++) {
                if(str[i] >= 1000){
                    continue;
                } 
                
                // first we need to converts our strings into intergers and thenn add numbers to the sum.
                else {
                    let number = parseInt(str[i]); // Converts our strings into intergers
                    sum += number; // Adding number to the sum
                }
            }

            return sum;
        }
    }
}