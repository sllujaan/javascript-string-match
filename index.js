


// Write a single function that takes two string inputs and returns a single string of either "TRUE"
// or "FALSE". The function should determine if the first input is equal to the second input when
// you are able to modify the first string input. The following modifications to the first string input
// are permitted: letters may be capitalized, or discarded, but otherwise not changed.

// Console.log the following examples:
// ('ebCde','BCD') TRUE
// ('eCB','ECB') TRUE (e was uppercased)
// ('BcdEF','BCEF') TRUE (c was uppercased, d was discarded)
// ('BCD','BcD') FALSE (C could not be lowercased)



function match(string1, string2) {

    // check if both string are of the same
    if(string1 === string2) return "TRUE";

    // check if string1 has less characters than the string2
    if(string1.length < string2.length) return "FALSE";


    var regex = ".?";
    var regexGroup = "";
    string2.split('').forEach((letter, index) => {
        regex += `(${letter}).?`;
        regexGroup += `$${index+1}`;
        console.log(letter);
    });
    
    const newString1 = string1.replace(new RegExp(regex, "gi"), regexGroup);
    
    console.log(regex);
    console.log(regexGroup);
    console.log(newString1);

    if(newString1.toLowerCase() !==  string2.toLowerCase()) return "FALSE";


    var newString2 = "";
    // string1.split('').forEach((letter, index) => {

    //     console.log(letter, string2, index);
    //     console.log(string2[index]);

    //     if(letter === string2[index]) {
    //         newString2 += letter;
    //         return;
    //     }
    //     else if(letter === string2[index].toUpperCase()) {
    //         newString2 += letter;
    //         return;
    //     }

    // });

    console.log(newString1, string2);
    var newString2 = "";
    for (let i = 0; i < newString1.length; i++) {
        //console.log(string1[i]);
        if (newString1[i] === string2[i]) {
            newString2 += string2[i];
        }
        else if (newString1[i].toUpperCase() === string2[i]) {
            newString2 += string2[i];
        }
    }

    console.log(newString2);

    if(newString2 !== string2) return "FALSE";


    return "TRUE";
}


console.log("('ebCde','BCD'): ", match("ebCde", "BCD"));
console.log("('eCB','ECB'): ", match("eCB", "ECB"));
console.log("('BcdEF','BCEF'): ", match("BcdEF", "BCEF"));
console.log("('BCD','BcD'): ", match("BCD", "BcD"));