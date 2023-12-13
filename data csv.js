async function getData (){
    const response = await fetch("./GLB.Ts+dSST.csv");
    const data = await response.text();
    
    const myLables = [];
    const yTemps = [];
    
    const table = data.split("\n").slice(2);    // split it into an array with linebreak and remove first 2 rows because it is not numeric data that we need
    // console.log(table)
    table.forEach(row=>{
        let colums = row.split(",");      // split columbs by ','
        let year = parseInt(colums[0]);   //sarate year and temp
        myLables.push(year);
        let temp = parseFloat(colums[1]);// display


        console.log(year, temp)
    })
    chartMake(myLables, yTemps)
}


function chartMake(myLables, yTemps){
    const ctx = document.getElementById('chart');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: myLables,
        datasets: [{
          label: 'Global average Temp',
          data: yTemps,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}




getData()