public class CargaSimple implements Carga {
    // Propiedades de la clase
    private String nombre;
    private String descripcion;
    private double pesoCarga;
    private boolean necesitaRefrigeracion;

    // Constructor de la clase 'CargaSimple'
    public CargaSimple(String nombre, String descripcion, double pesoCarga, boolean necesitaRefrigeracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.pesoCarga = pesoCarga;
        this.necesitaRefrigeracion = necesitaRefrigeracion;
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

    public void setPesoCarga(double pesoCarga) {
        this.pesoCarga = pesoCarga;
    }

    public boolean isNecesitaRefrigeracion() {
        return necesitaRefrigeracion;
    }

    public void setNecesitaRefrigeracion(boolean necesitaRefrigeracion) {
        this.necesitaRefrigeracion = necesitaRefrigeracion;
    }

    // Metodo para calcular el peso de una carga simple
    public double calcularPeso() {
        // Se incrementa el peso en 10% en caso de que la carga vaya refrigerada
        if (this.necesitaRefrigeracion) {
            this.pesoCarga = this.pesoCarga + (this.pesoCarga * 0.1);
        }
        return this.pesoCarga;
    }
}
