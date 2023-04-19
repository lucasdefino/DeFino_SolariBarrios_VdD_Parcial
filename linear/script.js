d3.dsv(';', '147_01-07_enero2.csv', d3.autoType).then(data => {

  let datafilter = data.filter(d => d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'FLORES' || d.domicilio_barrio == 'BARRACAS')


  let chart = Plot.plot({
    
    height:600,
    width:1000,
    marginBottom:50,
    marginRight:210,
    marginLeft:70,
    
    facet: {
      data: datafilter,
      y: 'domicilio_barrio',
      label:"",
    },
    marks: [
      Plot.areaY(datafilter,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'#69b3a2',curve:'basis'})),
      Plot.lineY(datafilter,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
      //Plot.dotY(datafilter,Plot.groupX({y: "proportion-facet"}, {x: "hora_redondeada",curve:'basis'})),
      Plot.ruleY([0])
     ],
     
     
     x: {
      axis: "bottom",
      grid: true,
      inset: -6,
      
    },
    y:{line:true}
    })
  d3.select('#chart').append(() => chart)
})