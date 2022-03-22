package com.company;

public class ImpresoraCannon extends Impresora {
    public ImpresoraCannon(String modelo, String conexion) {
        super(modelo, conexion);
        porcentajeTinta = 50.0;
    }

    @Override
    public String imprimir() {
        if (tienePapel() && porcentajeTinta > 25.0) {
            gastarMateriales();
            return "Estoy imprimiendo desde una Impresora Cannon!";
        } else {
            return "No tengo papel o el porcentaje de tinta es bajo!";
        }
    }
}
