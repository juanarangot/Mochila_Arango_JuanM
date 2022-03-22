package com.company;

public class SocioHabilitado extends Socio {
    private Double costoPileta;
    private Boolean habilitado;

    public SocioHabilitado(String numero, String nombre, String actividad, Double cuota, Double costoIngreso) {
        super(numero, nombre, actividad, cuota);

        costoPileta = costoIngreso;
        habilitado = false;
    }

    @Override
    public Double costoMensual(){
        if (habilitado) {
            return costoPileta + cuotaMensual;
        } else {
            return cuotaMensual;
        }
    }

    public void hacerRevisionMedica(){
        habilitado = true;
    }
}
