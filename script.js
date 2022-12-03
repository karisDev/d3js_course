window.onload = function () {
  function init() {
    setMap();
  }

  function setMap() {
    loadData();
  }

  function loadData() {
    queue()
      .defer(d3.json, "./assets/map/russia.json") // карта в topoJSON-формате
      .defer(d3.csv, "./assets/data/data.csv") // данные в cvs-формате
      .await(processData); // обработка загруженных данных
  }

  function processData(error, worldMap, countryData) {
    if (error) return console.error(error);
    console.log(worldMap);
    console.log(countryData);
  }

  init();
};
