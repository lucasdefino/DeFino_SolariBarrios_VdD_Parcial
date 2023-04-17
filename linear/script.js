d3.dsv(';', '147_15-21_junio.csv', d3.autoType).then(data => {

  let chart = Plot.plot({
    marks: [
      Plot.lineY(data, Plot.groupX({y: "count"}, {x: "fecha_ingreso"})),
     ]
    })
  d3.select('#chart').append(() => chart)
})