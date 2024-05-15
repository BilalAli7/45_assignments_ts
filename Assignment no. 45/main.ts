
//Exercise 45:
// Cars: 

function car(manufacturer: string, model: string,...args: any) {
    let car: any = {
      manufacturer: manufacturer,
      model: model
    };
    for (let i = 0; i < args.length; i++) {
      car[args[i][0]] = args[i+1];
    }
    return car;
  }
  
  console.log(car("Ford", "Mustang", ["color", "red"], ["year", 1969]));
  
  //for this code i take help of AI to understand
  