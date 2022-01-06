const bar = () => console.log('bar')

const baz = () => console.log('baz')



const foo = () => {
    console.log("EVENT LOOP 1");

  
    console.log('foo')
    
    setImmediate(() => {
        bar()
        
    })
    

  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  
  baz()
}


process.nextTick(() => {
    
    console.log("EVENT LOOP 2");
    

    console.log('foo')
    
    setImmediate(() => {
        bar()
        
    })
    

  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  
  baz()
})

foo()

