package com.company;

public class ImpresoraEpson extends Impresora {
    public ImpresoraEpson(String modelo, String conexion) {
        super(modelo, conexion);
        hojasDisponibles = 1;
    }

    @Override
    public String imprimir() {
        if (tienePapel()) {
            gastarMateriales();
            return "Estoy imprimiendo desde una Impresora Epson!";
        } else {
            return "No tengo papel!";
        }
    }
}
