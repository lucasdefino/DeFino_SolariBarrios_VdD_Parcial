d3.dsv(';', '147_18-24_agosto20.csv', d3.autoType).then(data => {

  let datafiltered = data.filter((d => ((d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'CABALLITO' || d.domicilio_barrio == 'BARRACAS') && ( d.canal == 'App BA 147' || d.canal == 'GCS Web'|| d.canal == 'Operador UGIS'|| d.canal == 'App Denuncia Vial' || d.canal == 'Boti'))))

  let chart = Plot.plot({
    marginLeft:0,
    marginRight:0,
    height:500,
    color: {
      legend:true,
      range: ['#236865','#2BA193','#8AB37F','#E55E3D','#E24D28']
    },
    marks: [
      Plot.barY(datafiltered,Plot.groupX({y: "count",text:"first",}, {x: 'domicilio_barrio', fill:'canal',opacity: 0.8, stroke:'canal', strokeWidth: 4,})),
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
    }
    })
    let alpha = chart.legend('color',{
      columns:1,
      className: "leyenda_canal",
      swatchSize: 20,
      style: {
        fontFamily: "Poppins",
        fontSize: "20px"
      }
    })
  var svg = d3.select('#chart').append(() => chart)
  svg.append(() => alpha)
  

})

//#69b3a2