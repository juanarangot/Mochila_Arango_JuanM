package com.company;

public abstract class Examen {
    private Alumno alumno;
    private String titulo;
    private String enunciado;
    private Double nota;

    public Examen(Alumno alumno, String titulo, String enunciado, Double nota) {
        this.alumno = alumno;
        this.titulo = titulo;
        this.enunciado = enunciado;
        this.nota = nota;
    }

    public Boolean aprobado(){
        return nota >= 4;
    }

    public Double getNota() {
        return nota;
    }
}
