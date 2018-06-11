import { retry } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
 import { Datos } from '../Interfas/Adminstrador';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap,  } from 'rxjs/operators';
import { Observable, of, throwError, observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AdminstradorService {
    private URLAdministrador = 'https://pregu-3c8e4.firebaseio.com/Administradores/Adminstrador/Lista.json';
    private URLEditar = 'https://pregu-3c8e4.firebaseio.com/Administradores/Adminstrador/Lista/';
    constructor( private http: HttpClient ) { }
/*agregarAd*/
    Agregar(datos: Datos): Observable<Datos> {
    return this.http.post<Datos>(this.URLAdministrador, datos, httpOptions)
        .pipe(
          catchError(this.handleError('Agregar')));
          }

          /*actualizar*/
Actualizar(datos: Datos , id$: string): Observable<any> {
  const url = `${this.URLEditar}/${ id$ }.json`;
return this.http.put(url , datos , httpOptions)
.pipe(
catchError(this.handleError<any>('Actualizar'))
);
}

/*traer un adiministrador*/
Pregunta(id$: string): Observable<Datos>  {
  const url = `${this.URLEditar}/${ id$ }.json`;

return this.http.get<Datos>(url).pipe(
  catchError(this.handleError<Datos>(`getPregunta id)${id$}`))
);
}
traerTodos(): Observable<Datos []> {
  return this.http.get<Datos[]>(this.URLAdministrador)
  .pipe(
    catchError(this.handleError('getPreguntas' , []))
  );
}

          /*error*/
           private handleError<T> (operation = 'operation', result?: T) {
            return (error: any): Observable<T> => {
              console.error(error);
               this.log(`${operation} failed: ${error.message}`);
               return of(result as T);
            };
          }
          private log(message: string) {
          } 
  }



