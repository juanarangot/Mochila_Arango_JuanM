import java.time.LocalDate;

public abstract class Vehiculo{
    // Atributos de la clase
    private Dueno dueno;
    private LocalDate fechaAdquisicion;
    private String marca;
    private String patente;
    private Boolean industriaNacional;

    // Constructor de la clase
    public Vehiculo(String nombre, String apellido, String cuil, LocalDate fecha, String marca, String patente, boolean industriaNacional){
        this.dueno = new Dueno(nombre, apellido, cuil);
        this.fechaAdquisicion = fecha;
        this.marca = marca;
        this.patente = patente;
        this.industriaNacional = industriaNacional;
    }

    boolean esIndustriaNacional(Vehiculo obj){
        return obj.industriaNacional;
    }

    // Metodos getters y setters de la clase
    public Dueno getDueno() {
        return dueno;
    }

    public void setDueno(Dueno dueno) {
        this.dueno = dueno;
    }

    public LocalDate getFechaAdquisicion() {
        return fechaAdquisicion;
    }

    public void setFechaAdquisicion(LocalDate fechaAdquisicion) {
        this.fechaAdquisicion = fechaAdquisicion;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getPatente() {
        return patente;
    }

    public void setPatente(String patente) {
        this.patente = patente;
    }

    public Boolean getEsIndustriaNacional() {
        return industriaNacional;
    }

    public void setEsIndustriaNacional(Boolean esIndustriaNacional) {
        this.industriaNacional = esIndustriaNacional;
    }
}

