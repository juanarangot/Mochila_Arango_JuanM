package com.company;

public class Cliente {
    private String nombre;
    private String apellido;
    private String DNI;
    private double saldoEnCuenta;
    private double limite;

    public Cliente(String nombre, String apellido, String DNI, double limite) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.limite= limite;
        saldoEnCuenta=0;

    }
    public void comprar(double importe)
    {
        saldoEnCuenta+=importe;
    }
    public void saldarDeuda(double importe)
    {
        saldoEnCuenta-=importe;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                nombre + ' ' +
                apellido + ' ' +
                ", su saldo es=" + saldoEnCuenta + "$ }";
    }
}
