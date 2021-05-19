import { sortByChildren, containsW, isNum, containsWorld, isCapitalized, citiesAtoJ } from './code-challenge-13';

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('true if str contains lowercase w, else false', () => {
    expect(containsW('hello world')).toBe(true);
    expect(containsW('Hello World')).toBe(false);
    expect(containsW('hello everyone')).toBe(false);
  });
});

describe('Testing challenge 3', () => {
  test('true if input contains number, else false', () => {
    expect(isNum(1234567890)).toBe(true);
    expect(isNum('12345')).toBe(true);
    expect(isNum('h3llo w0rld')).toBe(true);
    expect(isNum('hello world')).toBe(false);
    expect(isNum('')).toBe(false);
  });
});

describe('Testing challenge 4', () => {
  test('true if input contains word world in lc, else false', () => {
    expect(containsWorld('hello world')).toBe(true);
    expect(containsWorld('Hello World')).toBe(false);
    expect(containsWorld('hello everyone')).toBe(false);
  });
});

describe('Testing challenge 5', () => {
  test('return words beginning with a capitalized letter', () => {
    expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toStrictEqual(['We', 'Return', 'Words', 'With', 'Letter']);
    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () => {
  test.skip('return array of cities beginning A-J', () => {
    expect(citiesAtoJ(['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'])).toStrictEqual(['Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken']);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toStrictEqual(['Albuquerque', 'Chicago', 'Eugene']);
    expect(citiesAtoJ([])).toStrictEqual([]);
  });
});
