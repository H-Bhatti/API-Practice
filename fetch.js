console.log("fetch rainbow")
// fetch("picture.jpg")      // fetch data
//     .then(data => {         // get response and look at the resulting promise
//         // console.log(data);
//         return data.blob();
//     })
//     .then(blob =>{          //data here
//         // console.log(blob)
//         document.getElementById("rainbow").src= URL.createObjectURL(blob);
//     })
//     .catch(error =>{
//         console.error("Error!!!!!!!!!!");
//         console.error(error)
//     })
    


    console.log("ASYnC")

    async function catchRainbow(){
        const response = await fetch("./picture.jpg");
        const blob = await response.blob();
        document.getElementById("rainbow").src = URL.createObjectURL(blob)
    }


  catchRainbow()

//    Call fetch
//  get response
//  complete data tream, get datainto image(blob) or json format
// make an image element
// Error