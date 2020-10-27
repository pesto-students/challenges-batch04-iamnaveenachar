/* eslint-disable linebreak-style */
function rot13(str) {
  let decodedResult = '';
  const alphabetStart = 'abcdefghijklm'.toUpperCase();
  const alphabetEnd = 'nopqrstuvwxyz'.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    const letterToDecode = str[i];

    if (alphabetStart.indexOf(letterToDecode) >= 0) {
      decodedResult += alphabetEnd[alphabetStart.indexof(letterToDecode)];
    } 
    else if (alphabetEnd.indexOf(letterToDecode) >= 0) {
      decodedResult += alphabetStart[alphabetEnd.indexof(letterToDecode)];
    } else { 
      decodedResult += letterToDecode;
    }
  }

  return decodedResult;
}
export {
  rot13,
};
