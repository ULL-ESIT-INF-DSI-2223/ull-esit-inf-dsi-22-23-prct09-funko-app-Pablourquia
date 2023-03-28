"use strict";
exports.__esModule = true;
exports.Funko = exports.Genero = void 0;
var Genero;
(function (Genero) {
    Genero["Animacion"] = "Animacion";
    Genero["Accion"] = "Accion";
    Genero["Aventura"] = "Aventura";
})(Genero = exports.Genero || (exports.Genero = {}));
;
var Funko = /** @class */ (function () {
    function Funko(id, nombre, descripcion, tipo, genero, franquicia, numero, exclusivo, caracteristicasEspeciales, valorMercado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.genero = genero;
        this.franquicia = franquicia;
        this.numero = numero;
        this.exclusivo = exclusivo;
        this.caracteristicasEspeciales = caracteristicasEspeciales;
        this.valorMercado = valorMercado;
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.genero = genero;
        this.franquicia = franquicia;
        this.numero = numero;
        this.exclusivo = exclusivo;
        this.caracteristicasEspeciales = caracteristicasEspeciales;
        this.valorMercado = valorMercado;
    }
    Funko.prototype.getId = function () {
        return this.id;
    };
    Funko.prototype.getNombre = function () {
        return this.nombre;
    };
    Funko.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Funko.prototype.getTipo = function () {
        return this.tipo;
    };
    Funko.prototype.getGenero = function () {
        return this.genero;
    };
    Funko.prototype.getFranquicia = function () {
        return this.franquicia;
    };
    Funko.prototype.getNumero = function () {
        return this.numero;
    };
    Funko.prototype.getExclusivo = function () {
        return this.exclusivo;
    };
    Funko.prototype.getCaracteristicasEspeciales = function () {
        return this.caracteristicasEspeciales;
    };
    Funko.prototype.getValorMercado = function () {
        return this.valorMercado;
    };
    Funko.prototype.setId = function (id) {
        this.id = id;
    };
    Funko.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Funko.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Funko.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Funko.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Funko.prototype.setFranquicia = function (franquicia) {
        this.franquicia = franquicia;
    };
    Funko.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Funko.prototype.setExclusivo = function (exclusivo) {
        this.exclusivo = exclusivo;
    };
    Funko.prototype.setCaracteristicasEspeciales = function (caracteristicasEspeciales) {
        this.caracteristicasEspeciales = caracteristicasEspeciales;
    };
    Funko.prototype.setValorMercado = function (valorMercado) {
        this.valorMercado = valorMercado;
    };
    return Funko;
}());
exports.Funko = Funko;
