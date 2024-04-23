import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  // apiKey twelvedata
  apiKey = '13a61d54da3947b6bdc7c92eb9747b8c'
  ativos = 'EUR-BBD,EUR-BDT,EUR-BGN,EUR-BHD,EUR-BIF,EUR-BND,BTC-USD,ETH-USD,LTC-USD,XRP-USD,DOGE-USD,GBP-USD,EUR-CHF,EUR-USD,EUR-CAD,EUR-JPY,EUR-NZD,EUR-AUD,EUR-GBP,EUR-NOK,CAD-USD,CAD-BRL,AUD-USD,USD-JPY,USD-CHF,USD-CAD,NZD-USD,USD-ZAR,USD-TRY,USD-BRL'

  ativosDataSubject = new BehaviorSubject<any>(['Hello World'])

  constructor(private http: HttpClient) { }

  consultaAtivos() {
    return this.http.get("https://economia.awesomeapi.com.br/json/last/" + this.ativos)
  }

  consultaAtivo(ativo: any, timeframe: any) {
    return this.http.get("https://api.twelvedata.com/time_series?symbol=" + ativo + "&interval=" + timeframe + "&apikey=" + this.apiKey)
  }
}