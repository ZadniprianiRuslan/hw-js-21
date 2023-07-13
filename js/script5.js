const data = [
    { 
        name: "John", 
        age: 30, 
    },
    { 
        name: "Alice", 
        age: 25, 
    },
    { 
        name: "Bob", 
        age: 35,
    },
  ];

  function getAllPropValues(arr, prop) {
    let propValues = [];
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      if (prop in obj) {
        propValues.push(obj[prop]);
      }
    }
  
    return propValues;
  }
  
  const names = getAllPropValues(data, "name");
  console.log(names);
  
  const ages = getAllPropValues(data, "age");
  console.log(ages);