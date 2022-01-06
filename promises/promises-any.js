const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr  , pFast, pSlow]).then((value) => {
    console.log(value);
    // pFast fulfils first
  })
  // expected output: "Done quick"