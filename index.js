

/**
 * This function takes two string inputs and returns a single string of either "TRUE"
 * or "FALSE". The function should determine if the first input is equal to the second input when
 * you are able to modify the first string input. The following modifications to the first string input
 * are permitted: letters may be capitalized, or discarded, but otherwise not changed.  
 * 
 * examples:  
 * ('ebCde','BCD') TRUE  
 * ('eCB','ECB') TRUE (e was uppercased)  
 * ('BcdEF','BCEF') TRUE (c was uppercased, d was discarded)  
 * ('BCD','BcD') FALSE (C could not be lowercased)  
 * @param {string} string1 
 * @param {string} string2 
 * @returns string "TRUE" or "FALSE"
 */

function match(string1, string2) {
    // check if both string are of the same
    if(string1 === string2) return "TRUE";
    // check if string1 has less characters than the string2
    if(string1.length < string2.length) return "FALSE";

    // exclude the extra characters from string1 if any.
    var regex = ".?";
    var regexGroup = "";
    string2.split('').forEach((letter, index) => {
        regex += `(${letter}).?`;
        regexGroup += `$${index+1}`;
    });
    
    const newString1 = string1.replace(new RegExp(regex, "gi"), regexGroup);
    // check if newString1 not equals to the string2
    if(newString1.toLowerCase() !==  string2.toLowerCase()) return "FALSE";

    var newString2 = "";
    for (let i = 0; i < newString1.length; i++) {
        if (newString1[i] === string2[i]) {
            newString2 += string2[i];
        }
        else if (newString1[i].toUpperCase() === string2[i]) {
            newString2 += string2[i];
        }
    }

    if(newString2 !== string2) return "FALSE";

    return "TRUE";
}


console.log("('ebCde','BCD'): ", match("ebCde", "BCD"));
console.log("('eCB','ECB'): ", match("eCB", "ECB"));
console.log("('BcdEF','BCEF'): ", match("BcdEF", "BCEF"));
console.log("('BCD','BcD'): ", match("BCD", "BcD"));