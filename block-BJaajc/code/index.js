function getFullName(fn , ln)  {
    return `${fn} ${ln}`
}


console.log(getFullName("vivek" , "sharma"))


let palindrom =true
function isPalindrom(word) {
   for (let i=0 ; i<word.length ; i++)  {
       for (let j=word.length ; j>0 ;j--) {
           if (word[i]=== word[j]) {
               return palindrom =true
           }

           else {
               palindrom =false
           }
       }
   } 
}

isPalindrom("nitin")
if (palindrom==true) {
    console.log("palindrom")
}

else if (palindrom ==false) {
    console.log("Not plaindrom")
}