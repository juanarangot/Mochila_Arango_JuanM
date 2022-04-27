import java.time.LocalDate;

public class Camion extends Vehiculo implements Comparable{
    // Atributos de la clase 'Camion'
    private int cantidadEjes;
    private int capacidadCarga;

    // Constructor de la clase que hereda de la superclase Vehiculo
    public Camion(String nombre, String apellido, String cuil, LocalDate fecha, String marca, String patente, boolean industriaNacional, int ejes, int carga) {
        super(nombre, apellido, cuil, fecha, marca, patente, industriaNacional);
        this.cantidadEjes = ejes;
        this.capacidadCarga = carga;
    }

    // Sobreescritura del metodo de la interfaz 'Comparable'
    @Override
    public int compareTo(Object camion){
        return this.capacidadCarga - ((Camion)camion).getCapacidadCarga();
    }

    // Metodos getters y setters de la clase 'Camion'
    public int getCantidadEjes() {
        return cantidadEjes;
    }

    public void setCantidadEjes(int cantidadEjes) {
        this.cantidadEjes = cantidadEjes;
    }

    public int getCapacidadCarga() {
        return capacidadCarga;
    }

    public void setCapacidadCarga(int capacidadCarga) {
        this.capacidadCarga = capacidadCarga;
    }
}
