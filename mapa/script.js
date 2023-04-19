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
  
  function Counter() {
    this.sum = 0;
  }

  Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
      this.sum += entry.tiempo_de_cierre;
    }, this);
  };

  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio) // crea un Map
  console.log('reclamosPorBarrio', reclamosPorBarrio)
  
  /* A cada feature del mapa le agregamos la prop DENUNCIAS */
  barrios.features.forEach(d => {
    let nombreBarrio = d.properties.BARRIO
    var obj = new Counter();
    obj.add(reclamosPorBarrio.get(nombreBarrio));
    let tiempoxBarrio = obj.sum 
    d.properties.DENUNCIAS = tiempoxBarrio

    //console.log(nombreBarrio + ': ' + Reclamos)
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
      Plot.dot(
        barrios.features,
        Plot.centroid({
          r: d => d.properties.DENUNCIAS,
          text: (d) => d.properties.BARRIO,
          stroke: 'none',
          fill: '#274a46'
        })
      )
    ],

    r: {range: [0,20]},
  })
  
  /* Agregamos al DOM la visualización chartMap */
  var svg = d3.select('#chart').append(() => chartMap)
  svg.append(() => chart2Map)
})
