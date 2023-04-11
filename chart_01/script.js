d3.dsv(';', '147_vehiculos_mal_estacionados.csv', d3.autoType).then(data => {
    console.log(data)
  
    let chart = Plot.plot({
        marks: [
          Plot.barY(data,
            {
              x: 'genero',
              y: 'domicilio_altura',
            }),
        ],
        x: { grid: true, line: true, nice: true, },
        y: { grid: true, line: true, nice: true, },
      })

    d3.select('#chart').append(() => chart)
  })