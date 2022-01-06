const wait = (valueFirst) => {

    console.log('WHAT YOURS NAME  %s ', valueFirst );


    const queue = setInterval(() => {
        console.log("WAITING");            
    } , 2000)

    setTimeout(() => {
        clearInterval(queue)
    }, 10000)

}

const inputValue = (value) => {
    
    if(value == "Yes"){
        setTimeout(wait , 2000 , "Rakha" );
        
    }else{
        clearTimeout(wait)
    }
}



inputValue("Yes");

setTimeout(() => {
    console.log("Done");
} , 12000)



