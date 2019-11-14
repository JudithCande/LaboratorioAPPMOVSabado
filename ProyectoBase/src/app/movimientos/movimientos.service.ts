import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/http-services';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimientos } from './../model/movimientos';

@Injectable({
    providedIn: 'root'
})
export class MovimientosService extends HttpService<Movimientos>{
    constructor(protected http: HttpClient){
        super(http, Movimientos.endPoint);
    }
    public getAll(): Observable<Movimientos> {
        return super.getAll();
      }
    
      public save(movimientos: Movimientos): Observable<Movimientos>{
        return super.save(movimientos);
      }
    }
