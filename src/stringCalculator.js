﻿"use strict";

module.exports = class StringCalculator {
   

    Add(string) {
        let sum = 0;
        let str = string.match(this.regex);   // this takes the variable str and matches it with the regex in our constructor
        let negative = this.extractNegative(string); // assigns our variable negative to the string.
        

        // Should cathc an error if theres a negative
        try {
            if(string.includes("-")) throw ("negative " + negative + "not allowed.");
        } 
        catch (error) {
            return error;
        }

        // Should retun 0 instead of isNaN if the string is empty.
        if(string == "") {
            return 0;
        } 
        else {
            for(let i = 0; i < str.length; i++) {
                if(str[i] >= 1000){
                    continue;
                } 

                
                else {
                    let number = parseInt(str[i]); // Converts string into a integer
                    sum += number;
                }
            }

            return sum;
        }
    }

    constructor() {
        this.regex = /\d{1,}/gm;

        this.extractNegative = function(string) {
            let str = "";
            for(let i = 0; i < string.length; i++) {
                if(string[i] == "-" && !isNaN(string[i+1])) {
                    str += string[i+1] + ", ";
                }
            }
            return str;
        }
    }
}