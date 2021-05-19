export function sortByChildren(arr) {
  return arr.sort((a, b) => 
    a.children.length - b.children.length);
}