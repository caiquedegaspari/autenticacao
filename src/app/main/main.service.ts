import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly url = 'http://localhost:3000/api'

  constructor(private httpClient:HttpClient) { }

  getPeople():Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.url}/people`)
      .pipe(
        /* tap(p=>console.log("PESSOAS:",p)), */
        catchError((e)=>{
          console.log('Error geting people')
          return throwError(e)
        })
      )
  }


  getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.url}/products`)
      .pipe(
        /* tap(p=>console.log(p)), */
        catchError((e)=>{
          console.log('Error geting products')
          return throwError(e)
        })
      )
  }
}
