const data = d3.dsv(';', 'graficojunio.csv', d3.autoType).then(data => {

  let chart = Plot.plot({
    
    //height:600,
    width:1010,
    marginBottom:50,
    marginRight:140,

    
    facet: {
      data:data,
      y: 'barrio',
      label: "",
    },
    
    marks: [
      
      Plot.areaY(data,Plot.groupX({y: "count"}, {
        x: "hora",
        filter: (d) => d.mes === 'ENERO',
        fill:'#8AB37F',
        curve:'basis', 
        opacity: 0.3
      })),

      Plot.line(data,Plot.groupX({y: "count"}, {
        x: "hora",
        filter: (d) => d.mes === 'ENERO',
        curve:'basis',
        stroke:'#8AB37F',
        strokeWidth: 0.5
      })),  

      Plot.areaY(data,Plot.groupX({y: "count"}, {
        x: "hora",
        filter: (d) => d.mes === 'AGOSTO',
        fill:'#236865',
        curve:'basis',
        opacity: 0.3
      })),

      Plot.lineY(data,Plot.groupX({y: "count"}, {
        x: "hora",
        filter: (d) => d.mes === 'AGOSTO',
        curve:'basis',
        stroke:'#236865',
        strokeWidth: 0.5
      })),

            
      Plot.areaY(data,Plot.groupX({y: "count"}, {
        x: "hora",
        filter: (d) => d.mes === 'JUNIO',
        fill: '#E24D28',
        curve:'basis',
        opacity: 0.7
      })),
      Plot.lineY(data,Plot.groupX({y: "count"}, {
        x: "hora",
        filter: (d) => d.mes === 'JUNIO',
        curve:'basis',
        stroke: '#E24D28',
        strokeWidth: 2
      })),
      
     ],
     style: {
      backgroundColor: '#1B2F37',
      color: '#2BA193',
    },
    y: {
      axis: true,
      label:'',
    },
    x: {
      ticks: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','23:30'],
      axis: "bottom",
      label:'',
      grid: true,      
    },
    })
        
    var svg = d3.select('#chart').append(() => chart)
})