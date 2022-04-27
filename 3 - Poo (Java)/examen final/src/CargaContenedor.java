//import java.lang.reflect.Array;
import java.util.ArrayList; // import the ArrayList class

public class CargaContenedor implements Carga{
    private String nombre;
    private String descripcion;
    private double pesoCarga;
    private ArrayList<Carga> listaCargas;

    // Constructor de la clase 'CargaContenedor'
    public CargaContenedor(String nombre, String descripcion, double pesoContenedor, ArrayList<Carga> lista) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.pesoCarga = pesoContenedor;
        this.listaCargas = lista;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPesoCarga() {
        return pesoCarga;
    }

    public void setPesoCarga(double pesoContenedor) {
        this.pesoCarga = pesoContenedor;
    }

    // Metodo para calcular el peso de un contenedor en funcion de una lista de cargas simples basads en la estructura de una interfaz
    public double calcularPeso(){
        // Se itera sobre la lista de cargas del contenedor, para sumar el peso de su contenido
        int variable = 0;
        for (Carga elemento : this.listaCargas){
            if (!(elemento.getClass().getName() == "CargaContenedor")){
                // Se usa el metodo 'getter' ya que si se usa el de 'calcularPeso' se realiza
                // nuevamente el calculo y se incrementa el valor en 10% para los refrigerados
                pesoCarga += elemento.getPesoCarga();
//                System.out.println(elemento.getPesoCarga());
            }
        }
//        System.out.println(listaCargas.get(1).calcularPeso());
        return this.pesoCarga;
    }

}
