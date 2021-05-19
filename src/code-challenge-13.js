export function sortByChildren(arr) {
  return arr.sort((a, b) => 
    a.children.length - b.children.length);
}

export const containsW = (str) => {
  return str.match(/w/) ? true : false;
};

/* export const isNum = (input) => {
  if (input.type !== 'string') {
    let str = toString(input);
    return str.match(/[0-9]/) ? true : false;
  } else return input.match(/[0-9]/) ? true : false;
}; */

/* export const isNum = (input) => {
  let str = toString(input);
  return str.match(/[0-9]+/) ? true : false;
}; */

/* export const isNum = (input) => {
  let str = toString(input);
  return str.match(/\d+/) ? true : false;
}; */

/* export const isNum = (input) => {
  let str = toString(input);
  return str.match(/\[[0-9]+\]/) ? true : false;
}; */

// sigh ok moving on 



export const containsWorld = (input) => {
  return input.match(/[w][o][r][l][d]/) ? true : false;
};
