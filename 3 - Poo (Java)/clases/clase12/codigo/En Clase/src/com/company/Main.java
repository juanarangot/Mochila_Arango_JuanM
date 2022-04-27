package com.company;

public class Main {

    /*

        Socio unSocio = new Socio("2803M", "Martin", "Gimnasio", 1000.0);
        SocioHabilitado unSocioHabilitado = new SocioHabilitado("2001E", "Federico", "Natacion", 1000.0, 500.0);

        System.out.println(unSocio.toString());
        System.out.println(unSocioHabilitado.toString());

        System.out.println(unSocio.costoMensual());
        System.out.println(unSocioHabilitado.costoMensual());

        // unSocio.hacerRevisionMedica();
        unSocioHabilitado.hacerRevisionMedica();

        System.out.println(unSocio.costoMensual());
        System.out.println(unSocioHabilitado.costoMensual());

        System.out.println(unSocio.hashCode());

     */

    public static void main(String[] args) {
        Impresora unaImpresora = new ImpresoraEpson("E1995", "USB");

        System.out.println(unaImpresora.imprimir());
        System.out.println(unaImpresora.imprimir());

        unaImpresora = new ImpresoraCannon("C1998", "USB");

        unaImpresora.setHojasDisponibles(2);
        unaImpresora.setPorcentajeTinta(30.0);

        System.out.println(unaImpresora.imprimir());
        System.out.println(unaImpresora.imprimir());
    }
}
