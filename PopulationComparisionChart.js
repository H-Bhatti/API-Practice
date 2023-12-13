const datasetArray = []
// this array is for saving the objects for the data set that is required for the shartjs library
// this is storing only the y axis things not the x axis as all the x axis are same and the changes are happening on the y axis

  let xAxis;
//   this variable is storing the xaxis of the chart used for the charts.js library
// note this is being written as many times sa the getPopulationData function is being run need to make is clearer
// so that it only runs once and with a saperate function and not again adn again  for bette efficency

  let callstack;
//   this is an array which has the function getPopulationData that is being called with different data
// note: make this into a dynamic function which will take an array and call then one by one 
callstack = [getPopulationData("./PopulationCSVData/India.csv","rgb(0, 0, 255)","India"),getPopulationData("./PopulationCSVData/bengladesh.csv","rgb(255, 0,0)","Bengladesh"),getPopulationData("./PopulationCSVData/Pakistan.csv","rgb(0, 255, 0)","Pakistan")]


//  getChart function gcalls the getPopulation library one by one which populates the dataset array of objects
async function getChart(){
    await callstack[0];
    await callstack[1];
    await callstack[2];
    chartMake(xAxis, datasetArray);
}

// this function is calling the get chart function hence starting the cod eautomatically
getChart(callstack);


async function getPopulationData(filePath, rgb, country){
    const response = await fetch(filePath); // fetching the file
    const data = await response.text(); //waiting for he file to arrive
    const table = data.split("\n"); //. split to make 2 arrays, but array of one string 
    const readAbleData =  [];  // dynamic variable for saying the array of the sthings being read from the csv file


// \/ function for spliting the csv file into 2 arrys according to line break
    table.forEach(element=>{
        element = element.split(",");
        readAbleData.push(element);
    })

  
// funtion for breaking the array into strings and also making them an integer in the process
    for(i=0;i<readAbleData.length;i++){
        for(j=0;j<readAbleData[i].length;j++){
            readAbleData[i][j]=Number(readAbleData[i][j]);
        };
    }; 
// xaxis setting to default for all charts
// note need to find better approach for this
    xAxis = readAbleData[0];

// returning the data in the dataset array in form of object to be readable because they are in a charts.js readable array format

    return datasetArray.push({
        label: `Population Growth ${country}`,
        data: readAbleData[1],
        borderColor: rgb,
        borderWidth: 1
    });    
};

// function from cahrts.js library

function chartMake(xAxis, datasetArray){

    const ctx = document.getElementById('chart');
    console.log(datasetArray)
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: xAxis,  // getting the globally defined x variable
        datasets: datasetArray      // getting the array of objects for plotting
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
    );
}
// const dataset = [["./PopulationCSVData/Pakistan.csv","rgb(0, 255, 0)"],["./PopulationCSVData/India.csv","rgb(0, 0, 255)"],["./PopulationCSVData/bengladesh.csv","rgb(255, 0,0)"]]
// getPopulationData("./PopulationCSVData/Pakistan.csv","rgb(0, 255, 0)")
// getPopulationData("./PopulationCSVData/India.csv","rgb(0, 0, 255)")
// getPopulationData("./PopulationCSVData/bengladesh.csv","rgb(255, 0,0)")
// chartMake(xAxis, datasetArray)
