d3.dsv(';', '147_18-24_agosto20.csv', d3.autoType).then(data => {

  let datafiltered = data.filter((d => d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'FLORES' || d.domicilio_barrio == 'BARRACAS')) //&& (d => d.canal == 'App BA 147' || d.canal == 'GCS Web'|| d.canal == 'Operador UGIS'|| d.canal == 'App Denuncia Vial'))
  
  let chart = Plot.plot({
    height:500,
    //width:800,
    color: {
      //legend: true,
      range: ['#236865','#2BA193','#8AB37F','#E76F51','#E9C46A','#E55E3D','#E24D28']
    },
    marks: [
      Plot.barY(datafiltered,Plot.groupX({y: "count"}, {x: 'domicilio_barrio', fill:'canal',opacity: 0.8, stroke:'canal', strokeWidth: 4})),
      //Plot.text(datafiltered,{datafiltered, Plot.groupX({y: "count"}, {x: 'domicilio_barrio', fill:'canal'}), text: d => (d. * 100).toFixed(1), dy: -5}),
      //Plot.text(datafiltered,Plot.groupX({y: "count"}, {x: 'domicilio_barrio', fill:'canal',}),{text: d => '${d.y}'}) //{filter: d => d.y, text: d => `${d.y}`})
    ],
    y: {
      label: "",
      ticks: "",
    },
    x: {
      label: "",
    },
    style: {
      backgroundColor: '#1B2F37',
      color: '#2BA193',
    },
    
    })
  
  d3.select('#chart').append(() => chart)
})

//#69b3a2