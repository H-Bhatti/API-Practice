console.log("fetch rainbow")
fetch("picture.jpg")      // fetch data
    .then(data => {         // get response and look at the resulting promise
        // console.log(data);
        return data.blob();
    })
    .then(blob =>{          //data here
        // console.log(blob)
        document.getElementById("rainbow").src= URL.createObjectURL(blob);
    })
    .catch(error =>{
        console.error("Error!!!!!!!!!!");
        console.error(error)
    })
    


    console.log("ASYnC")

    async function catchRainbow(){
        const response = await fetch("./download.jpeg");
        const blob = await response.blob();
        document.getElementById("rainbow2").src = URL.createObjectURL(blob)
    }


    async function jsonData (){
        const response = await fetch("./currencies.json");
        const data = await response.json();
        console.log(data["AED"])
         document.getElementById("data").innerHTML = JSON.stringify(data);
    }


    jsonData ().then(console.log("data")).catch(error=>console.error(error))

  catchRainbow()
    .then(console.log("YAY!"))
    .catch(error =>{
        console.error("Error!!!!!!!!!!");
        console.error(error)
    })

//    Call fetch
//  get response
//  complete data tream, get datainto image(blob) or json format
// make an image element
// Error