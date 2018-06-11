import { pipe } from 'rxjs/internal-compatibility';
import { Injectable} from '@angular/core';
import { Preguntas } from '../Interfas/Pregunta';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map, tap,  } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Datos } from '../Interfas/Adminstrador';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  private URLBaseDatos = 'https://pregu-3c8e4.firebaseio.com/ListPregunta/Preguntas/Question.json';

  private URLEditar = 'https://pregu-3c8e4.firebaseio.com/ListPregunta/Preguntas/Question/';

  constructor(   private http: HttpClient) { }
/*metodo de agregar pregunta*/
  Agregar(pregunta: Preguntas): Observable<Preguntas> {

return this.http.post<Preguntas>(this.URLBaseDatos, pregunta, httpOptions)
.pipe(
  catchError(this.handleError('Agregar')));
  }

/*metodo de traer todas las preguntas*/
getPreguntas(): Observable<Preguntas []> {
  return this.http.get<Preguntas[]>(this.URLBaseDatos)
  .pipe(
    catchError(this.handleError('getPreguntas' , []))
  );
}
/*trae una sola pregunta*/

getPregunta(id$: string): Observable<Preguntas> {
  const url = `${this.URLEditar}/${ id$ }.json`;
return this.http.get<Preguntas>(url).pipe(
catchError(this.handleError<Preguntas>(`getPregunta id)${id$}`))
);

}
/*actualiar*/

Actualizar(pregunta: Preguntas , id$: string ): Observable<any> {
  const url = `${this.URLEditar}/${ id$ }.json`;
  return this.http.put(url , pregunta , httpOptions).
  pipe(
    catchError(this.handleError<any>('Actualizar'))
  );
}

/*Eliminar*/

Eliminar(key$: string): Observable<Preguntas> {
  const url = `${this.URLEditar}/${ key$ }.json`;
  return this.http.delete<Preguntas>(url, httpOptions).
  pipe(
    catchError(this.handleError<Preguntas>('Eliminar'))
  );
}

/*busqueda*/
search(term: string): Observable<Datos[]> {

  term = term.trim();

  const options = term ?
   { params: new HttpParams().set('Pregunta', term) } : {};

  return this.http.get<Datos[]>(this.URLBaseDatos, options)
    .pipe(
      catchError(this.handleError<Datos[]>('searchHeroes', []))
    );

}


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
