import java.util.ArrayList; // import the ArrayList class

public class Main {
    public static void main(String[] args) {
        CargaSimple carga1 = new CargaSimple("TV LED", "una tv sencilla", 3, false);
        CargaSimple carga2 = new CargaSimple("Medicamentos", "medicamentos de prueba", 2, true);

        ArrayList<Carga> listaCargas = new ArrayList<Carga>();
        listaCargas.add(carga1);
        listaCargas.add(carga2);

        CargaContenedor contenedor = new CargaContenedor("Evergreen", "un contenedor cualquiera", 100, listaCargas);
        listaCargas.add(contenedor);

        Barco nuevoBarco = new Barco("POO", listaCargas );
        
        nuevoBarco.generarInforme();
    }
}
