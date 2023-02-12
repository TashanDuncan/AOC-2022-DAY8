//https://dev.to/codesphere/10-algorithms-every-developer-should-learn-3lnm
//https://devpost.hashnode.dev/sorting-algorithms-implemented-in-typescript

const theData = [10, 5, 8, 2, 4, 11, 1];

const swapTwo = (
  data: number[],
  firstPosition: number,
  secondPosition: number
) => {
  [data[firstPosition], data[secondPosition]] = [
    data[secondPosition],
    data[firstPosition],
  ];
};

const sortTwo = (
  data: number[],
  firstPosition: number,
  secondPosition: number
) => {
  if (data[firstPosition] < data[secondPosition]) {
    swapTwo(data, firstPosition, secondPosition);
  }
};

const sortPass = (data: number[], endIndex: number) => {
  for (let i = 0; i < endIndex; i++) {
    sortTwo(data, i + 1, i);
  }

  if (endIndex > 0) {
    sortPass(data, endIndex - 1);
  }
};

const bubbleSortIt = (data: number[]): number[] => {
  console.time();
  console.log("Sorting - ", data);
  // sortPass(data, data.length)

  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data.length - j; i++) {
      sortTwo(data, i + 1, i);
    }
  }

  console.timeEnd();
  return data;
};

const selectionSortIt = (data: number[]): number[] => {
  console.time();

  const sortedArray = [];
  const unSortedArray = [...data]

  while(unSortedArray.length > 0){
    let minValue = unSortedArray[0];
    unSortedArray.forEach(value => {
      if(value < minValue) {
        minValue = value
      }
    })
    unSortedArray.splice(unSortedArray.indexOf(minValue), 1) 
    sortedArray.push(minValue)
  }
  console.timeEnd()
  return sortedArray
};

console.log(selectionSortIt([2,3,1,5,7]))
console.log(bubbleSortIt([2,3,1,5,7]))
