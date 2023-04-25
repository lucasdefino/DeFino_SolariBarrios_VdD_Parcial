const data = d3.dsv(';', 'graficojunio.csv', d3.autoType).then(data => {

  let datafilteredE = data.filter(d => d.mes == 'ENERO')
  let datafilteredJ = data.filter(d => d.mes == 'JUNIO')
  let datafilteredA = data.filter(d => d.mes == 'AGOSTO')
  
  //JULIO
  let chart = Plot.plot({
    
    height:600,
    width:1000,
    marginBottom:50,
    marginRight:210,
    marginLeft:70,
    
    facet: {
      data: datafilteredJ,
      y: 'barrio',
      label:"",
    },
    marks: [
      
      Plot.areaY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora",fill: '#E24D28',curve:'basis', opacity: 0.7})),
      Plot.lineY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora",curve:'basis', stroke: '#E24D28', strokeWidth: 2})),
      Plot.ruleY([0])
     ],
    y: {
      axis: true,
    },
    fy: {
      axis: null,
      label: null,
    }, 
    x: {
      //domain: d3.sort(datafilteredJ, (a, b) => d3.descending(a.hora_redondeado, b.hora_redondeado)).map(d => d.nombre),
      ticks: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','23:30'],
      axis: "bottom",
      label:'',
      grid: true,      
    },
    })
    

    //ENERO
    let chart2 = Plot.plot({
    
      height:600,
      width:1000,
      marginBottom:50,
      marginRight:210,
      marginLeft:70,
      
      facet: {
        data: datafilteredE,
        y: 'barrio',
      },
      marks: [
        Plot.areaY(datafilteredE,Plot.groupX({y: "count"}, {x: "hora",fill:'#8AB37F',curve:'basis', opacity: 0.7})),
        Plot.lineY(datafilteredE,Plot.groupX({y: "count"}, {x: "hora",curve:'basis', stroke:'#8AB37F', strokeWidth: 2})),
       ],
      style: {
        backgroundColor: '#1B2F37',
        color: '#2BA193',
      },
      grid: true,
      nice: true,
      y: {
        axis: null,
        label: null,
      },
      fy: {
        axis: null,
        label: null,
      }, 
      x: {
        ticks: [],
        axis: "bottom",
        grid: true,
        nice:true,
        label:''
      },
      })
      
      //AGOSTO
      let chart3 = Plot.plot({
    
        height:600,
        width:1000,
        marginBottom:50,
        marginRight:210,
        marginLeft:70,
        
        facet: {
          data: datafilteredA,
          y: 'barrio',
          label:"",
        },
        marks: [          
          Plot.areaY(datafilteredA,Plot.groupX({y: "count"}, {x: "hora",fill:'#236865',curve:'basis',opacity: 0.7})),
          Plot.lineY(datafilteredA,Plot.groupX({y: "count"}, {x: "hora",curve:'basis', stroke:'#236865', strokeWidth: 2})),
          Plot.ruleY([0])
         ], 
        y: {
          axis: null,
          label: ""
        },
        fy: {
          axis: "right",
          label: "",
        },  
        x: {
          ticks: [],
          axis: "bottom",
          grid: true,
          label: "",     
        },
        })
        
    var svg = d3.select('#chart').append(() => chart2)
    svg.append(() => chart3)
    svg.append(() => chart)

})