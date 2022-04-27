package com.company;

import java.util.Date;

public abstract class Impresora {
    private String modelo;
    private String tipoConexion;
    private Date fechaFabricacion;
    protected Integer hojasDisponibles;
    protected Double porcentajeTinta;

    protected Impresora(String modelo, String conexion){
        this.modelo = modelo;
        tipoConexion = conexion;
        fechaFabricacion = new Date();
        hojasDisponibles = 0;
        porcentajeTinta = 100.0;
    }

    public Boolean tienePapel(){
        return hojasDisponibles > 0;
    }

    public Boolean necesitaTinta(){
        return porcentajeTinta == 0.0;
    }

    public abstract String imprimir();

    protected void gastarMateriales(){
        hojasDisponibles --;
        porcentajeTinta = porcentajeTinta - 10.0;
    }

    public void setHojasDisponibles(Integer hojasDisponibles) {
        this.hojasDisponibles = hojasDisponibles;
    }

    public void setPorcentajeTinta(Double porcentajeTinta) {
        this.porcentajeTinta = porcentajeTinta;
    }
}
