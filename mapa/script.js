const mapaFetch = d3.json('barrios-caba.geojson')
const dataFetch = d3.dsv(';', '147_01-07_enero2.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
  
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    marginLeft: 5,
    marginRight: 20,
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      range: ['#1B2F37', '#E24D28'],
      //
      //#283137
    },
    marks: [
      Plot.density(data, { x: 'lon', y: 'lat', fill: 'density', bandwidth: 15, thresholds: 8 }),
      Plot.geo(barrios, {
        stroke: '#236865',
        strokeWidth: 2,
        opacity: 0.8,
      }),
      
    ],
    style: {
      backgroundColor: '#1B2F37',
    },
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
    let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
    let tiempopromedioxBarrio = obj.sum / cantReclamos
    d.properties.DENUNCIAS = tiempopromedioxBarrio

    //console.log(nombreBarrio + ': ' + Reclamos)
  })

  let chart2Map = Plot.plot({
    marginLeft: 5,
    marginRight: 20,
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
          opacity: 0.8,
          fill: d => d.properties.DENUNCIAS > 16 ? '#236865' : '#698b69',
          //fill: '#698b69',
          stroke: d => d.properties.DENUNCIAS > 16 ? '#2BA193' : '#8ab37f',
          //stroke:'#8ab37f',
          strokeWidth: 1.5,
        })
      ),
      
      Plot.text(
        barrios.features,
        Plot.centroid({
          text: (d) => d.properties.BARRIO,
          fill: "#2BA193",
          stroke: "#1B2F37",
          strokeWidth: 5,
          textAnchor: "right",
          dx: 35,
          filter: (d) => d.properties.BARRIO == "NUÑEZ" || d.properties.BARRIO == "BOEDO" || d.properties.BARRIO == "BOCA"
        })
      ),
      Plot.text(
        barrios.features,
        Plot.centroid({
          text: (d) => d.properties.BARRIO,
          fill: "#2BA193",
          stroke: "#1B2F37",
          strokeWidth: 5,
          textAnchor: "right",
          dx: 58,
          filter: (d) => d.properties.BARRIO == "PUERTO MADERO"
        })
      ),
      
      Plot.text(
        barrios.features,
        Plot.centroid({
          text: (d) => d.properties.BARRIO,
          fill: "#8ab37f",
          stroke: "#4D3734",
          strokeWidth: 5,
          textAnchor: "right",
          dx: -40,
          filter: (d) => d.properties.BARRIO == "BARRACAS" || d.properties.BARRIO == "CABALLITO"
        })
      ),
      Plot.text(
        barrios.features,
        Plot.centroid({
          text: (d) => d.properties.BARRIO,
          fill: "#8ab37f",
          stroke: "#1B2F37",
          strokeWidth: 5,
          textAnchor: "right",
          dx: -54,
          filter: (d) => d.properties.BARRIO == "VILLA URQUIZA"
        })
      ),
      Plot.text(
        barrios.features,
        Plot.centroid({
          text: (d) => d.properties.BARRIO,
          fill: "#8ab37f",
          stroke: "#1B2F37",
          strokeWidth: 5,
          textAnchor: "right",
          dx: -60,
          filter: (d) =>  d.properties.BARRIO == "VILLA PUEYRREDON"
        })
      )
    ],
    style: {
      backgroundColor: '#1B2F37',
    },

    r: {range: [0,15]},
  })
  
  
  /* Agregamos al DOM la visualización chartMap */
  var svg = d3.select('#chart').append(() => chartMap)
  svg.append(() => chart2Map)
})
