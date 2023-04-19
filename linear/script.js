const dataFetchJ = d3.dsv(';', '147_15-21_junio2.csv', d3.autoType)
const dataFetchE = d3.dsv(';', '147_01-07_enero8.csv', d3.autoType)
const dataFetchA = d3.dsv(';', '147_18-24_agosto2.csv', d3.autoType)


Promise.all([dataFetchE, dataFetchJ,dataFetchA]).then(([dataE, dataJ, dataA]) => {

  let datafilteredE = dataE.filter(d => d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'FLORES' || d.domicilio_barrio == 'BARRACAS')
  let datafilteredJ = dataJ.filter(d => d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'FLORES' || d.domicilio_barrio == 'BARRACAS')
  let datafilteredA = dataA.filter(d => d.domicilio_barrio == 'VILLA URQUIZA' || d.domicilio_barrio == 'VILLA PUEYRREDON' || d.domicilio_barrio == 'FLORES' || d.domicilio_barrio == 'BARRACAS')

  
  let chart = Plot.plot({
    
    height:600,
    width:1000,
    marginBottom:50,
    marginRight:210,
    marginLeft:70,
    
    facet: {
      data: datafilteredJ,
      y: 'domicilio_barrio',
      label:"",
    },
    marks: [
      //Plot.areaY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'red',curve:'basis'})),
      //Plot.lineY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
      
      Plot.areaY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'#69b3a2',curve:'basis', opacity: 0.6})),
      Plot.lineY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
      Plot.ruleY([0])
     ],
    y: {
      axis: true
    },
    fy: {
      axis: "right",
      label: null
    }, 
    x: {
      ticks: ['00:00:00','02:00:00','04:00:00','06:00:00','08:00:00','10:00:00','12:00:00','14:00:00','16:00:00','18:00:00','20:00:00','22:00:00','23:30:00',],
      axis: "bottom",
      grid: true,      
    },
    })
    
    let chart2 = Plot.plot({
    
      height:600,
      width:1000,
      marginBottom:50,
      marginRight:210,
      marginLeft:70,
      
      facet: {
        data: datafilteredE,
        y: 'domicilio_barrio',
      },
      marks: [
        Plot.areaY(datafilteredE,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'red',curve:'basis', opacity: 0.6})),
        Plot.lineY(datafilteredE,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
        
        //Plot.areaY(datafilteredE,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'#69b3a2',curve:'basis'})),
        //Plot.lineY(datafilteredE,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
        Plot.ruleY([0])
       ],
      grid: true,
      nice: true,
      zero: true,
      y: {
        axis: null
      },
      fy: {
        axis: "right",
        label: null
      }, 
      x: {
        ticks: [],
        axis: "bottom",
        grid: true,
        nice:true 
      },
      })
      
      let chart3 = Plot.plot({
    
        height:600,
        width:1000,
        marginBottom:50,
        marginRight:210,
        marginLeft:70,
        
        facet: {
          data: datafilteredA,
          y: 'domicilio_barrio',
          label:"",
        },
        marks: [
          //Plot.areaY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'red',curve:'basis'})),
          //Plot.lineY(datafilteredJ,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
          
          Plot.areaY(datafilteredA,Plot.groupX({y: "count"}, {x: "hora_redondeada",fill:'orange',curve:'basis',opacity: 0.6})),
          Plot.lineY(datafilteredA,Plot.groupX({y: "count"}, {x: "hora_redondeada",curve:'basis'})),
          Plot.ruleY([0])
         ], 
        y: {
          axis: null
        },
        fy: {
          axis: "right",
          label: null
        },  
        x: {
          ticks: [],
          axis: "bottom",
          grid: true,      
        },
        })
        
    var svg = d3.select('#chart').append(() => chart)
    svg.append(() => chart3)
    svg.append(() => chart2)

})