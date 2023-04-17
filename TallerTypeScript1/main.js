import { data } from "./data.js";
var seriesView = document.getElementById('seriesView');
var average = document.getElementById("average");
mostrarSeries(data);
average.innerHTML = "".concat(getSeriesAverage(data));
function mostrarSeries(series) {
    console.log('Despegar series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td style='color: #0DA8CC;'>").concat(serie.name, "</td> \n                                <td>").concat(serie.platform, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesView.appendChild(trElement);
    });
}
function getSeriesAverage(series) {
    var totalSeries = 0;
    var promedio = 0;
    series.forEach(function (serie) { return totalSeries = serie.seasons + totalSeries; });
    promedio = totalSeries / series.length;
    return promedio;
}
