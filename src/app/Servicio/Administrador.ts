import { retry } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
 import { Datos } from '../Interfas/Adminstrador';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap,  } from 'rxjs/operators';
import { Observable, of, throwError, observable } from 'rxjs';
import { URL_SERVICIOS } from '../Peticiones/URL';
import { Usuario } from '../Interfas/Usuario';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AdminstradorService {

    constructor( private http: HttpClient ) { }
/*agregarAd*/
    Agregar(datos: Datos): Observable<Datos> {
      const url = URL_SERVICIOS  + 'Administrador/agregar_administrador';
    return this.http.post<Datos>(url, datos, httpOptions)
        .pipe(
          catchError(this.handleError('Agregar')));
          }

          /*actualizar*/
Actualizar(datos: Datos , id$: string): Observable<any> {
  const url = URL_SERVICIOS  + 'Administrador/actualizar_adminstrador/' + id$;
return this.http.put(url , datos , httpOptions)
.pipe(
catchError(this.handleError<any>('Actualizar'))
);
}

/*traer un adiministrador*/
Pregunta(id$: string): Observable<Datos>  {
  const url = URL_SERVICIOS  + 'Administrador/get_usuario/' + id$;

return this.http.get<Datos>(url).pipe(
  catchError(this.handleError<Datos>(`getPregunta id)${id$}`))
);
}
traerTodos(): Observable<Datos []> {
  const url = URL_SERVICIOS + 'Administrador/GetUsuarios';
  return this.http.get<Datos[]>(url)
  .pipe(
    catchError(this.handleError('getPreguntas' , []))
  );
}

verificar($usuario: string): Observable<Datos>{
const url = URL_SERVICIOS + 'Administrador/Buscar_Usuario/' + $usuario;
return this.http.get<Datos>(url).pipe(
  catchError(this.handleError<Datos>(`verificar usuario)${$usuario}`))
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



