interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
  }
  
  function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    const car: Car = { manufacturer, model };
    extras.forEach(([key, value]) => {
      car[key] = value;
    });
    return car;
  }
  
  // Example usage:
  const myCar = createCar("Toyota", "Corolla",["color", "red"],  ["year", 2024]);
  console.log(myCar);