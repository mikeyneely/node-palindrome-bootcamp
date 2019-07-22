//event listener for the input and the function to check if the string is a palindrome.

document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault()
    let input = document.querySelector('input').value
    checkPalindrome(input)
    console.log(reverseStr)
// checkPalindrome is a function to break the input into an array, reverse the order, and join it back together so i can have the input in reverse.
//then an if statement to check if the string and the reversed string are equal in type and value. then an alert for each outcome and a console log to see for myself that my code is working
    function checkPalindrome(input) {
      reverseStr = input.split('').reverse().join('')
      str = input
      if(str.replace(/\s+/g, '') === reverseStr.replace(/\s+/g, '')){
        console.log(str.replace(/\s+/g, ''))
        alert(str + " is a palindrome")
      }else{
        alert(str + " is not a palindrome")
      }
      console.log(str)
    }
})
