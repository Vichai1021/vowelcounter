/vowel counter

function vowelCount(sentence)
{
  var vowel = "aeiouAEIOU";
  var noOfVowel = 0;
  
  for(var i = 0; i < sentence.length ; i++)
  {
    if (vowel.indexOf(sentence[i]) !== -1)
    {
      noOfVowel += 1;
    }
  
  }
  return noOfVowel;
}
console.log(vowelCount("Asia Developer Academy"));
console.log(vowelCount("I love javascript"))


//lecturer answer vowel counter

function calculateVowel(sentence)
{
  var vowels = 0;
 sentence = sentence.toLowerCase();
  
  for(var i = 0; i < sentence.length ; i++){
    if (sentence.charAt(i)=="a" || sentence.charAt(i)=="e"|| sentence.charAt(i)=="i"|| sentence.charAt(i)=="o"|| sentence.charAt(i)=="u"|| sentence.charAt(i)=="A"|| sentence.charAt(i)=="E"|| sentence.charAt(i)=="I"|| sentence.charAt(i)=="O"|| sentence.charAt(i)=="U")
    {
      vowels++;
    }
  }
  return vowels;
}
console.log(vowelCount("Asia Developer Academy"));
console.log(vowelCount("I love javascript"))
