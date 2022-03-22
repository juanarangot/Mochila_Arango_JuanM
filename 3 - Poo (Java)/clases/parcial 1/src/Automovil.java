import java.time.LocalDate;

public class Automovil extends Vehiculo{
    private boolean usaGas;
    private int cilindraje;

    // Constructor de la clase que hereda de la superclase Vehiculo
    public Automovil(String nombre, String apellido, String cuil, LocalDate fecha, String marca, String patente, boolean industriaNacional, boolean gas, int cilindraje) {
        super(nombre, apellido, cuil, fecha, marca, patente, industriaNacional);
        this.usaGas = gas;
        this.cilindraje = cilindraje;
    }

    public boolean esEconomico(){
        return this.usaGas && this.cilindraje < 1200;
    }

    public boolean getUsaGas() {
        return usaGas;
    }

    public void setUsaGas(boolean usaGas) {
        this.usaGas = usaGas;
    }

    public int getCilindraje() {
        return cilindraje;
    }

    public void setCilindraje(int cilindraje) {
        this.cilindraje = cilindraje;
    }
}
