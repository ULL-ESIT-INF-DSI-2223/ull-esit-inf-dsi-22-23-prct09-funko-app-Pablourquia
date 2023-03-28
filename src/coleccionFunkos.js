"use strict";
exports.__esModule = true;
exports.ColeccionFunkos = void 0;
var ColeccionFunkos = /** @class */ (function () {
    function ColeccionFunkos(nombre_usuario, funkos) {
        this.nombre_usuario = nombre_usuario;
        this.funkos = funkos;
        this.funkos = funkos;
        this.nombre_usuario = nombre_usuario;
    }
    ColeccionFunkos.prototype.getFunkos = function () {
        return this.funkos;
    };
    ColeccionFunkos.prototype.setFunkos = function (funkos) {
        this.funkos = funkos;
    };
    ColeccionFunkos.prototype.addFunko = function (funko) {
        this.funkos.forEach(function (f) {
            if (f.getId() === funko.getId()) {
                return;
            }
        });
        this.funkos.push(funko);
    };
    ColeccionFunkos.prototype.removeFunko = function (id) {
        this.funkos = this.funkos.filter(function (f) { return f.getId() !== id; });
    };
    ColeccionFunkos.prototype.updateFunko = function (funko) {
        this.funkos = this.funkos.map(function (f) { return (f.getId() === funko.getId() ? funko : f); });
    };
    ColeccionFunkos.prototype.getFunko = function (id) {
        return this.funkos.find(function (f) { return f.getId() === id; });
    };
    ColeccionFunkos.prototype.getNombreUsuario = function () {
        return this.nombre_usuario;
    };
    return ColeccionFunkos;
}());
exports.ColeccionFunkos = ColeccionFunkos;
