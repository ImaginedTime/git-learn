let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    // a = 1 + 2;

    if(a == 2)
        resolve("Success");
    else
        reject("Failed");
});


p.then((message) => {
    console.log("this is printed when the promise resolves, " + message);
}).catch((message) => {
    console.log("this is printed when the promise fails or rejects, " + message);
})


let userLeft = false;
let userWatchingSomethingElse = false;
function watchingPromise()
{
    return new Promise((resolve, reject) => {
        if(userLeft)
            reject({name: "User Left", message: ":("});
        else if(userWatchingSomethingElse)
            reject({name: "User Watching Something else", message: "Your video sucks"});
        else
            resolve({name: "User still watching", message: "Good video"});
    });
}

watchingPromise().then((obj) => {
    console.log(obj.name + "\n" + obj.message);
}).catch((obj) => {
    console.log(obj.name + "\n" + obj.message);
});

// // we can just further add more .then() for each case rather than using callback which can lead to callback hell 
// watchingPromise().then((obj) => {
//     console.log(obj.name + "\n" + obj.message);
// }).then((obj) => {
//     console.log(obj.name + "\n" + obj.message);
// }).catch((obj) => {
//     console.log(obj.name + "\n" + obj.message);
// });





let p1 = new Promise((resolve, reject) => {
    resolve("Recorded Video 1");
});
let p2 = new Promise((resolve, reject) => {
    resolve("Recorded Video 2");
});
let p3 = new Promise((resolve, reject) => {
    resolve("Recorded Video 3");
});

// will run after all the promises have been resolved
Promise.all([p1, p2, p3]).then((messages) => {
    console.log(messages);
})

// will run as soon as any single one of the promises is resolved
Promise.race([p1, p2, p3]).then((message) => {
    console.log(message);
})