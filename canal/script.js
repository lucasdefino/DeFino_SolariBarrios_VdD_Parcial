d3.dsv(';', '147_01-07_enero2.csv', d3.autoType).then(data => {

  let chart = Plot.plot({
    
    marks: [
      Plot.dot()
      //Plot.barY(data,Plot.groupX({y: "count"}, {x: "canal",fill:'#69b3a2'})),
     ],
     
    })
  d3.select('#chart').append(() => chart)
})