anychart.onDocumentReady(function () {
  
  anychart.data.loadCsvFile("agosto_sankey.csv", function (data) {

  // create a sankey diagram instance
  var chart = anychart.sankey();

  // load the data to the sankey diagram instance
  chart.data(data);

  // set the chart's padding
  chart.padding(20, 40);

  // configure a custom color palette
  chart.palette([
    '#0b3c49', //appba147
    '#3E64A3', //boti
    '#569F99', //comuna
    '#BDD076', //gcsweb
    '#363E14', //mail147
    '#15748E', //operadorgcba
    '#CF4D26', //operadorugis
    '#6ab8b1', //alumbrado
    '#8f996b', //arbolado
    '#fc6132', //barrios
    '#1f75a1', //callesyveredas
    '#98d6d2', //fiscalizacion
    '#81a4db', //limpieza
    '#a2c95f', //ordenamiento
    '#ff9678', //reciclado
    '#184b59', //tramites
    '#1b345e', //transito
    '#274a46', //otros


  ]);

  chart.flow({
    normal: {
      fill: function () {
        return anychart.color.lighten(this.sourceColor, 0) + ' ' + 0.4;
      }
    },
    hovered: {
      fill: function () {
        return this.sourceColor + ' ' + 0.8;
      }
    }
  });

  chart.nodeWidth("30%")

  // set the chart container id
  chart.container('container');

  // draw the chart
  chart.draw();
  
  });
});