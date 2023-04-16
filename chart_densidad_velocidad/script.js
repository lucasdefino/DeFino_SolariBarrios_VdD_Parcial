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
      scheme: 'blues',
    },
    marks: [
      Plot.dot(data, { x: 'lon', y: 'lat', r: 'tiempo_de_cierre', fill: 'tiempo_de_cierre', opacity: 0.8,}),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],

    //r: {range: [0,10]},
  })


  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart').append(() => (chartMap))
  //d3.select('#chart').append(() => chart2Map)
})

