"use strict";
exports.__esModule = true;
exports.ColeccionDatos = void 0;
var ColeccionDatos = /** @class */ (function () {
    function ColeccionDatos(datos) {
        this.datos = datos;
        this.datos = datos;
    }
    ColeccionDatos.prototype.getDatos = function () {
        return this.datos;
    };
    ColeccionDatos.prototype.addDatos = function (coleccion) {
        this.datos.push(coleccion);
    };
    ColeccionDatos.prototype.removeDatos = function (nombre) {
        this.datos = this.datos.filter(function (c) { return c.getNombreUsuario() !== nombre; });
    };
    return ColeccionDatos;
}());
exports.ColeccionDatos = ColeccionDatos;
