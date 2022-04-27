public class Dueno {
    // Definicion de los atributos de la clase
    private String nombre;
    private String apellido;
    private String cuil;

    // Metodo constructor de la clase
    public Dueno(String nombre, String apellido, String cuil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuil = cuil;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCuil() {
        return cuil;
    }

    public void setCuil(String cuil) {
        this.cuil = cuil;
    }
}
