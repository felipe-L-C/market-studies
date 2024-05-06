import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  // apiKey twelvedata
  apiKeyDataChart = '13a61d54da3947b6bdc7c92eb9747b8c'
  apiKeyCalendar = 'bf8fdf98812c4db:pob4a3ny4mf02eg'
  
  ativos = 'EUR-BBD,EUR-BDT,EUR-BGN,EUR-BHD,EUR-BIF,EUR-BND,BTC-USD,ETH-USD,LTC-USD,XRP-USD,DOGE-USD,GBP-USD,EUR-CHF,EUR-USD,EUR-CAD,EUR-JPY,EUR-NZD,EUR-AUD,EUR-GBP,EUR-NOK,CAD-USD,CAD-BRL,AUD-USD,USD-JPY,USD-CHF,USD-CAD,NZD-USD,USD-ZAR,USD-TRY,USD-BRL'

  constructor(private http: HttpClient) { }

  consultaAtivos() {
    return this.http.get("https://economia.awesomeapi.com.br/json/last/" + this.ativos)
  }

  consultaAtivo(ativo: any, timeframe: any) {
    return this.http.get("https://api.twelvedata.com/time_series?symbol=" + ativo + "&interval=" + timeframe + "&apikey=" + this.apiKeyDataChart)
  }

  consultaCalendario() {
    return this.http.get("https://api.tradingeconomics.com/calendar?c=" + this.apiKeyCalendar)
  }
}