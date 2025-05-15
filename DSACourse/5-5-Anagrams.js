// Question
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// ----------------------------------------------------

// Answer
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const obj1 = {}, obj2 = {};
    
    for(let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }
    
    for(let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
    
    for(let i = 0; i < str1.length; i++) {
        if (!obj2[str1[i]]) {
            return false;
        }
        if(obj1[str1[i]] !== obj2[str1[i]]) {
            return false;
        }
    }
    
    return true;
}