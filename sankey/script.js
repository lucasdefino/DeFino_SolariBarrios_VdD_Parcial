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
    '#0b3c49',
    '#3E64A3',
    '#569F99',
    '#BDD076',
    '#CF4D26',

    '#15748E',
    '#6B8EC7',
    '#88BFBA',
    '#DAE5B3',
    '#E38164',

    '#20AED5',
    '#BDDBD9',
    '#A6BBDD',
    '#F1F5E0',
    '#EFB9A9',

    '#0B3A47',
    '#17243B',
    '#1D3532',
    '#363E14',
    '#451A0D',


  ]);

  // set the chart container id
  chart.container('container');

  // draw the chart
  chart.draw();
  
  });
});