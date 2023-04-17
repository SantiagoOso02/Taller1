import { Serie } from "./Serie.js";
import { data } from "./data.js";

let seriesView: HTMLElement=document.getElementById('seriesView')!;
let average: HTMLElement = document.getElementById("average")!;

mostrarSeries(data);

average.innerHTML =`${getSeriesAverage(data)}`


function mostrarSeries(series :Serie[]): void 
{
    console.log('Despegar series');
    series.forEach((serie)=>
    {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td style='color: #0DA8CC;'>${serie.name}</td> 
                                <td>${serie.platform}</td>
                                <td>${serie.seasons}</td>`;

        seriesView.appendChild(trElement);
    });
}

function getSeriesAverage (series: Serie[]):number
{
    let totalSeries: number =0;
    let promedio: number= 0;
    series.forEach((serie)=> totalSeries=serie.seasons+totalSeries);
    promedio = totalSeries/series.length;
    return promedio;
}