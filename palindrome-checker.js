function palindrome(str) {
  const alphaNumeric = str.toLowerCase()
                      .match(/[a-z0-9]/g)
   return alphaNumeric.join('') ===
        alphaNumeric.reverse().join('');
  return true;
}

palindrome("eye");