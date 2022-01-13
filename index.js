const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((line) => {
    //we need to return iterated array using map, then i need to declare parameters where each element goes.
    const tokens = line.split(" ");
    //we need to split to the parameters by using .split
    const capitalizedTokens = tokens.map(
      // we need to do declaration, we need use .map to the previous function
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    ); //charAt breaks down the elements to 0,1,2. (.toUpperCase changes to upper case)
    const response = capitalizedTokens.join(" ");
    // .join is used to join the new function that was modified and splited
    return response;
  });
};










