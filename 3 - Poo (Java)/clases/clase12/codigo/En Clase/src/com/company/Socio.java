package com.company;

public class Socio {
    private String numeroSocio;
    private String nombre;
    protected Double cuotaMensual;
    private String actividad;

    public Socio(String numero, String nombre,String actividad, Double cuota){
        numeroSocio = numero;
        this.nombre = nombre;
        cuotaMensual = cuota;
        this.actividad = actividad;
    }

    public Double costoMensual(){
        return cuotaMensual;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + "\n" + "Numero de Socio: " + numeroSocio;
    }

    @Override
    public boolean equals(Object object){
        if (object == null) { return false; }

        if (!(object instanceof Socio)) { return false; }

        Socio socioAux = (Socio) object;

        return socioAux.numeroSocio.equals(numeroSocio);
    }

    @Override
    public int hashCode(){
        int hash = 11;

        return hash * numeroSocio.hashCode();
    }
}
