console.log('Start!');
fetch('https://www.google.com') 
  .then((response) => response.text()) 
  .then((result) => { console.log(result); });

console.log('End');