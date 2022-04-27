package com.company;

public class Parcial extends Examen {
    private Integer unidad;
    private Integer reintentos;

    public Parcial(Alumno alumno, String titulo, String enunciado, Double nota, Integer unidad) {
        super(alumno, titulo, enunciado, nota);
        this.unidad = unidad;
        reintentos = 0;
    }

    public Boolean sePuedeRecuperar(){
        if(unidad <= 3 && reintentos < 3) {
            return true;
        } else if(unidad > 3 && reintentos < 2) {
            return true;
        }

        return false;
    }
}
