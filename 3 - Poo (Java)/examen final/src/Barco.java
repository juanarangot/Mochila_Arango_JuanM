import java.util.ArrayList;

public class Barco {
    private String nombre;
    private ArrayList<Carga> listaCargas;

    // Constructor de la clase 'Barco'
    public Barco(String nombre, ArrayList<Carga> listaCargas) {
        this.nombre = nombre;
        this.listaCargas = listaCargas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void generarInforme(){
        for (Carga carga : listaCargas ){
//            System.out.printf("NOMBRE: %s, PESO: %b\n",carga.getNombre(), carga.calcularPeso());
            System.out.println("NOMBRE: " + carga.getNombre() + " PESO: " +  carga.calcularPeso());

        }
    }
}
