public interface Carga {
//    String nombre = null;
//    String descripcion = null;
//
//    default String getNombre() {
//        return nombre;
//    }
//
//    default void setNombre(String nombre) {
//        nombre = nombre;
//    }
//
//    default String getDescripcion() {
//        return descripcion;
//    }
//
//    default void setDescripcion(String descripcion) {
//        descripcion = descripcion;
//    }

    // Metodo que sera implementado por las clases subyacentes
    public double calcularPeso();
    public String getNombre();
    public double getPesoCarga();
}
