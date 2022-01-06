let calculate = function(value) {



        return new Promise((resolve , reject) => {

            if (value%2 == 0){
                setTimeout(() => {
                    resolve(value + 1);
                } , 0)
            }else{
                setTimeout(() => {
                    reject("ASD");
                } , 0)
            }
            })
            
    
}

calculate(1)
    .then(calculate)
    .then(calculate)
    .then(calculate)
    .then(calculate)
    .then((calculate)=> {
        console.log(calculate);
    }).catch((calculate) => {
        console.log(calculate);
    })

