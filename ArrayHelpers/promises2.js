var promise = new Promise((resolve, reject) => {
    resolve(1);
    const a ="Simplilearn"
    const b = "Simplilearn"
    if (a === b) {
        resolve();
    }
    else {
        reject();
    }
});

promise.then(()=>{
    console.log("Welcome in Simplilearn")
}).catch(()=>{
    console.log("error")
})



