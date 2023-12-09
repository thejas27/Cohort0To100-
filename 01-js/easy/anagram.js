/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let count1 = str1.length;
  let count2 = str2.length;
  let count3 = 0; 
 

  if(count1 != count2)
  {
    return false;
  }
  else
  {
    str1 = str1.replace(/ /g,"").toLowerCase();
    str2 = str2.replace(/ /g,"").toLowerCase();
    str1 = str1.split("").sort().join(""); 
    str2 = str2.split("").sort().join(""); 
    
    if(str1 == str2)
    {
      return true;
    }
    else
    {
      return false;
    }
  }


}

module.exports = isAnagram;
