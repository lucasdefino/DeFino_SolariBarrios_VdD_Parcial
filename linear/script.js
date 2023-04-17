d3.dsv(';', '147_01-07_enero2.csv', d3.autoType).then(data => {

  let chart = Plot.plot({
    //facet: {data: data,y: "categoria",marginRight: 140},
    marks: [
      //Plot.areaY(data.filter(d => d.categoria === 'ALUMBRADO'), {x: "hora_ingreso",y: 'tiempo_de_cierre', fillOpacity: 1}),
      Plot.lineY(data.filter(d => d.categoria === 'ALUMBRADO'), {x: "hora_ingreso",y: 'tiempo_de_cierre', strokeWidth: 1})
    ],
  })
  d3.select('#chart').append(() => chart)
})