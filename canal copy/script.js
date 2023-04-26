d3.dsv(';', '147_18-24_agosto20.csv', d3.autoType).then(data => {

  let datafiltered = data.filter((d => d.domicilio_barrio === 'CABALLITO'))
  
  const reclamosPorCanal = d3.group(data, d => d.canal)


  let meanGCSweb = reclamosPorCanal.get('GCS Web').length / 48
  let meanAppBA147 = reclamosPorCanal.get('App BA 147').length / 48
  let meanAppDenunciaVial = reclamosPorCanal.get('App Denuncia Vial').length / 48
  let meanBoti = reclamosPorCanal.get('Boti').length / 48
  
  promedios = [
    {canal: "GCS Web", media: meanGCSweb},
    {canal: "App BA 147", media: meanAppBA147},
    {canal: "App Denuncia Vial", media: meanAppDenunciaVial},
    {canal: "Boti", media: meanBoti},
  ]


  let chart = Plot.plot({
    //marginLeft:0,
    marginRight:-150,
    //height:500,
    color: {
      range: ['#2BA193','#8AB37F','#E55E3D','#E24D28','#236865']
    },
    marks: [
      Plot.barY(datafiltered,Plot.groupX({y: "count",}, {
        x: 'canal',
        fill:'canal',
        opacity: 0.5,
        stroke:'canal',
        strokeWidth: 4,
        sort: {x: "y", reverse: true}
      })),
      Plot.text(datafiltered,Plot.groupX({text: "count",y:'count'}, {
        x: 'canal',
        fill:'canal',
        dy: -10
      })),
      Plot.tickY(promedios, {
        x:'canal',
        y:'media',
        fill:'#1B2F37',
        //opacity: 1,
        stroke:'canal',
        strokeWidth: 4,
      }),
      Plot.text(promedios, {
        x: 'canal',
        y: 'media',
        text: 'media',
        fill:['#236865','#2BA193','#8AB37F','#E55E3D'],
        stroke: ['#236865','#2BA193','#8AB37F','#E55E3D'],
        strokeWidth: 1,
        //color: '#1B2F37',
        dy: -10
      }),
      
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



  var svg = d3.select('#chart').append(() => chart)
  //svg.append(() => chart2)

  

})