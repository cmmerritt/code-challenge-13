export function sortByChildren(arr) {
  return arr.sort((a, b) => 
    a.children.length - b.children.length);
}

export const containsW = (str) => {
  return str.match(/w/) ? true : false;
};