/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ");
     // console.log(words);
     let index = [];
     let correct = [];
     for(let eachWord of words){
         // console.log(eachWord);
         index.push(eachWord.slice(-1));
     }
     index.sort();
     for(let eachIndex of index){
         for (let eachWord of words){
             if (eachWord.slice(-1) == eachIndex){
                 correct.push(eachWord.slice(0, eachWord.length - 1));
             }
         }
     }
     let sentence = correct.join(" ");
     return sentence;
 };