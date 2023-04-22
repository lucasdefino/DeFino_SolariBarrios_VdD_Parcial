d3.csv('astronautas.csv', d3.autoType).then(data => {

  let chart = globe.plot({
    width: 454,
    height: 454,
    projection: {
      type: "azimuthal-equal-area",
      rotate: [-10, -52],
      domain: {type: "MultiPoint", coordinates: [[-16, 52], [42, 52], [10, 32], [10, 70]]}
    }, marks: [Plot.frame()]
  })
  d3.select('#chart').append(() => chart)
})
