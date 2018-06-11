export interface Preguntas {
    Correcta: number;
    Opciones: {
        A: {
            AR: string,
            indice: number
        },
        B: {
            AR: string,
            indice: number
        },
        C: {
            AR: string,
            indice: number
        },
        D: {
            AR: string,
            indice: number
        },
    };
    Pregunta: string;
    Respondida: boolean;
    Terminada: boolean;
    Fecha: any;
    Dificultad: string;
    Habilitado: boolean;
    $key?: string;
}

