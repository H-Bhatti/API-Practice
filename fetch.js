console.log("fetch rainbow")
fetch("picture.jpg")      // fetch data
    .then(data => {         // get response and look at the resulting promise
        console.log(data);
        return data.blob();
    })
    .then(blob =>{          //data here
        console.log(blob)
        document.getElementById("rainkbow").src= URL.createObjectURL(blob);
    })
    .catch(error =>{
        console.error("Error!!!!!!!!!!");
        console.error(error)
    })
    



//    Call fetch
//  get response
//  complete data tream, get datainto image(blob) or json format
// make an image element
// Error