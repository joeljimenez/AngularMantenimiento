 
import { Injectable} from '@angular/core';
import { Preguntas } from '../Interfas/Pregunta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
 
import { URL_SERVICIOS } from '../Peticiones/URL';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  constructor(   private http: HttpClient) { }
/*metodo de agregar pregunta*/
  Agregar(pregunta: Preguntas): Observable<Preguntas> {
const url = URL_SERVICIOS + '/Preguntas/registrar';
return this.http.post<Preguntas>(url, pregunta, httpOptions)
.pipe(
  catchError(this.handleError('Agregar')));
  }

/*metodo de traer todas las preguntas*/
getPreguntas(): Observable<Preguntas []> {

  const url = URL_SERVICIOS + '/Preguntas/Traer_Preguntas';
  return this.http.get<Preguntas[]>(url)
  .pipe(
    catchError(this.handleError('getPreguntas' , []))
  );
}
/*trae una sola pregunta*/

getPregunta(id$: string): Observable<Preguntas> {
  const url = URL_SERVICIOS + 'Preguntas/Traer_Una_Pregunta/' + id$;
return this.http.get<Preguntas>(url).pipe(
catchError(this.handleError<Preguntas>(`getPregunta id)${id$}`))
);

}
/*actualiar*/

Actualizar(pregunta: Preguntas , id$: string ): Observable<any> {
  const url = URL_SERVICIOS + 'Preguntas/Actualizar_Pregunta/' + id$;

  return this.http.put(url , pregunta , httpOptions).
  pipe(
    catchError(this.handleError<any>('Actualizar'))
  );
}

/*Eliminar*/

Eliminar(id: string): Observable<Preguntas> {
  const url = URL_SERVICIOS + 'Preguntas/Eliminar_Pregunta/' + id;
  return this.http.delete<Preguntas>(url, httpOptions).
  pipe(
    catchError(this.handleError<Preguntas>('Eliminar'))
  );
}

/*busqueda*/
search(di: string): Observable<Preguntas> {
const url = URL_SERVICIOS + 'Preguntas/buscar_Pregunta/' + di;

  return this.http.get<Preguntas>(url).pipe(
    catchError(this.handleError<Preguntas>(`getPregunta id)${di}`))
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
