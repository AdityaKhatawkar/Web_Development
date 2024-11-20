const loadJoke = async () => { //Asynchronous function that will return a promise
    try {
        const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', { 
        //const chuckNorrisFetch: Declares a variable to store the response from the fetch operation.

        //The fetch() function is used to make an HTTP request. Since await is used, the function pauses
        //execution until the fetch() completes and returns a Promise.

        // Specifies that the request should include an Accept header, with the value "application/json".
        // This tells the server that the client expects a response in JSON format.
            headers: {
                //!The Accept header informs the server about the format you want the response in.
                Accept: "application/json"
            }
        });

        // const jokeData: Declares a variable to store the parsed JSON response.
        // .json(): A method available on the Response object returned by fetch().
        // It reads the body of the response and parses it as JSON.
        const jokeData = await chuckNorrisFetch.json();
        document.getElementById('loadingJoke').innerHTML = jokeData.value;
    } catch (error) {
        console.log(error);
    }
};

document.getElementById('loadJokeBtn').addEventListener("click", loadJoke);
