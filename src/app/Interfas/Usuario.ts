export interface Usuario {
Nombre: string;
Apellido: string;
AñoCursa: number;
CarreraUni: string;
Cedula: string;
Edad: string;
$key?: string;

Detalle: {
    DuracionD: string;
    Finaliza: string;
    InicioJ: string;
    Nivel: number;
    Puntacion: number;
    $keyD?: string;
};

Autenticacion: {
    Usuario: string;
    Contraseña: string;
    ClaveSeg: string;
    $keyA?: string;
};
Pregunta: {
Habilitado: boolean;
Terminado: boolean;
Pendiente: boolean;
KeyP: string;
Intento: number;
$keyP?: string;
};
}