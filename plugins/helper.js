function getFirstLetters(str) {
  if (str) {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .join('');
  
    return firstLetters.toUpperCase();
  }
}

function random4Digit() {
  return Math.floor(1000 + Math.random() * 9000)
}

export {
  getFirstLetters,
  random4Digit
}