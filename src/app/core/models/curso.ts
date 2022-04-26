export class Curso {
    constructor(
        public id: number,
        public nombre: string,
        public profesor:string,
        public cursos: number,
        public alumnoId: number
    ){}
    }