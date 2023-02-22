// fetch returns a promise

// after fetch is done, .then is called with the response if the promise succeeds
// the response when converted to json using response.json(), returns another promise, 
// hence another .then() is used to print out that data

// Even though fetch returns a promise, it always succeeds, unless in cases of network error,
// it'll succeed with error 404 but won't go to the catch of the promise and still run the .then() 

fetch("https://reqres.in/api/users")
.then((response) => response.json())
.then(data => console.log(data));


// since this user does not exist, it should fail, but fetch doesn't fail hence we need to check it in the .then()
// method whether the response was correct
fetch("https://reqres.in/api/users/23")
.then((response) => {
    if(response.ok)
        console.log("Successful");
    else 
        console.log("Unsuccessful");
    
    response.json();
})
.then(data => console.log(data));


// to post something on to the api, using the options part of the fetch api
fetch("https://reqres.in/api/users", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "User 1"
    })
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log("Error"));
