d3.dsv(';', '147_15-21_junio.csv', d3.autoType).then(data => {

  let datafilter = data.filter(d => d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'FLORES' || d.domicilio_barrio == 'PARQUE CHACABUCO' || d.domicilio_barrio == 'BARRACAS')


  let chart = Plot.plot({
    height:700,
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
      Plot.areaY(datafilter,Plot.groupX({y: "proportion-facet"}, {x: "hora_redondeada",fill:'#69b3a2',curve:'basis'})),
      Plot.lineY(datafilter,Plot.groupX({y: "proportion-facet"}, {x: "hora_redondeada",curve:'basis'})),
      //Plot.dotY(datafilter,Plot.groupX({y: "proportion-facet"}, {x: "hora_redondeada",curve:'basis'})),
      Plot.ruleY([0])
     ],
     x:{
      zero:true,
      //axis:true,
      ticks: ['00:00:00','02:00:00','04:00:00','06:00:00','08:00:00','10:00:00','12:00:00','14:00:00','16:00:00','18:00:00','20:00:00','22:00:00'],
      grid:true,
      line:true
     },
     y:{
      line:true,
      //grid:true
     }
    })
  d3.select('#chart').append(() => chart)
})