function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    
  } else {
    console.log(x.toUpperCase());
  }
}

// явно указывает экземпляр класса это или  нет