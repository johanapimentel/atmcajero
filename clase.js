class Billete {
    constructor (nombre, vale, existe, imagen) {
        this.nombre = nombre;
        this.valor = vale;
        this.existencia = existe;
        this.imagen = new Image();
        this.imagen.src = imagen;
    }
}