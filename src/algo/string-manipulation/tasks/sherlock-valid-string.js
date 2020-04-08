/**
 * Sherlock considers a string to be valid if all characters of the string
 * appear the same number of times.
 *
*/

export const count = (list, value) => {
  return list.filter((x) => x === value).length
}

function isValid(s) {
  // is not empty string case todo
  const arr = s.split('');
  const len = arr.length;
  let letters = {};

  for (let i = 0; i < len; i++) {
    const element = arr[i];
    letters[element] = (letters[element] || 0) + 1;
  }

  const values = Object.values(letters);
  const valMax = Math.max(...values)
  const valMin = Math.min(...values);

  const countMax = count(values, valMax);
  //const countMax = values.filter((x) => x === valMax).length;
  const countMin = count(values, valMin);
  ///const countMin = values.filter((x) => x === valMin).length;

  let isValid = false;

  // python solution
  // if val_max == val_min or
  // (val_max - val_min == 1 and values.count(val_max) == 1) or
  // (val_min == 1 and values.count(val_min) == 1 and len(set(values)) == 2 )

  if (
    (valMax === valMin) ||
    (valMax - valMin === 1 && countMax === 1) ||
    (valMin === 1 && countMin === 1 && [...new Set(values)].length === 2)
  ) {
    isValid = true
  }

  return isValid === true ? 'Yes' : 'No';
}

function isValidVariant1(s) {
  let h = {};
  let res = "Yes";
  let arr = [];
  let count = 0;
  for (let char of s) {
      h[char] = h[char]+1 || 1; // if any char appear more than once, value will increament;
  }
  Object.values(h).map( v => {
    arr.push(v);
    //if any value is different than first value;
    if(v !== arr[0]){
      count++;  // count how many values are different
      if( (v > arr[0]) && (v-1 !== arr[0]) ){
        res = "No";
      } else if ( (v < arr[0]) &&  (v !== (arr[0]-1)) ){
        console.log(v, arr[0])
        res = "Yes"
      }
    }
  })

  if(count > 1) res = "NO"; // if more than one values are different
  if(count === 1) res = "YES"; // if only one value is different
  return res;
}

export { isValid, isValidVariant1 }

