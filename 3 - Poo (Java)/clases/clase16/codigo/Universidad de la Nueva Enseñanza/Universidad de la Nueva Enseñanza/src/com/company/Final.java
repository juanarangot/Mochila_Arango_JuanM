package com.company;

public class Final extends Examen implements Comparable {
    private Double notaOral;
    private String descripcionOral;


    public Final(Alumno alumno, String titulo, String enunciado, Double nota, Double notaOral, String descripcionOral) {
        super(alumno, titulo, enunciado, nota);
        this.notaOral = notaOral;
        this.descripcionOral = descripcionOral;
    }

    @Override
    public Boolean aprobado(){
        return notaPromedio() >= 4;
    }

    private Double notaPromedio(){
        return (notaOral + getNota()) / 2;
    }

    @Override
    public int compareTo(Object object) {
        Final otroFinal = (Final) object;

        // return (int) (notaPromedio() - otroFinal.notaPromedio());
        // Acá me equivoque, 0.5 y -0.5 los castea a 0
        // Por lo tanto hay que ir si o si con el camino largo, el camino corto no sirve

        if (notaPromedio() > otroFinal.notaPromedio()){
            return 1;
        } else if (notaPromedio() < otroFinal.notaPromedio()){
            return -1;
        }

        return 0;
    }
}
