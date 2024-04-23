import { Component, OnInit, input } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ConsultasService } from '../../services/consultas.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [HttpClientModule, CanvasJSAngularChartsModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.scss'
})
export class GraficoComponent implements OnInit {

  timeframeChart = input<any>()
  ativoChart = input<any>()
  chartOptions = {}
  dataChartCoord: any = []

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {

    this.consultasService.consultaAtivo(this.ativoChart(), this.timeframeChart()).subscribe(resp => {

      console.log(resp)
      Object.values(resp)[1].forEach((element: any) => {
        let coordenadaX = new Date(element.datetime)
        let coordenadaY = [parseFloat(element.open), parseFloat(element.high), parseFloat(element.low), parseFloat(element.close)]
        this.dataChartCoord.push({ x: coordenadaX, y: coordenadaY })
      });

      this.chartOptions = {
        exportEnabled: true,
        title: {
          text: this.ativoChart(),
        },
        axisX: {
          valueFormatString: "MMM",
          crosshair: {
            enabled: true,
            valueFormatString: "MMM YYYY",
            snapToDataPoint: true
          }
        },
        axisY: {
          title: "Price in USD",
          prefix: "$",
          crosshair: {
            enabled: true
          }
        },
        data: [{
          type: "candlestick",
          risingColor: "green",
          fallingColor: "red",
          color: "black",

          yValueFormatString: "$##.##",
          xValueFormatString: "MMM YYYY",
          dataPoints: this.dataChartCoord
        }]
      }

    });

  }


}
