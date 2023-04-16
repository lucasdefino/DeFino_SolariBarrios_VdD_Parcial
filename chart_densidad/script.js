const mapaFetch = d3.json('barrios-caba.geojson')
const dataFetch = d3.dsv(';', '147_01-07_enero2.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'oranges',
    },
    marks: [
      Plot.density(data, { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
  })


  let chart2Map = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      //scheme: 'blues',
    },
    marks: [
      Plot.dot(data, { x: 'lon', y: 'lat', r: 'tiempo_de_cierre', fill: (d => d.tiempo_de_cierre > 30 ? '#003300':'transparent'), opacity: 0.65,}),
      
    ],

    r: {range: [0,15]},
  })
  
  /* Agregamos al DOM la visualización chartMap */
  var svg = d3.select('#chart').append(() => chartMap)
  svg.append(() => chart2Map)
})
