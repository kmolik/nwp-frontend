import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcel } from '../models/parcel';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  private url = 'http://localhost:3000/parcels';

  constructor(private http: HttpClient) {}

  getParcels(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(this.url);
  }
}
