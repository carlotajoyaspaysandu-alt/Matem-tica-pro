// Lógica independiente para el control de preguntas gratuitas (máximo 3)
const GestorPreguntas = {
  obtenerRespondidas() {
    return parseInt(localStorage.getItem("preguntasRespondidas") || "0", 10);
  },
  
  incrementar() {
    let actual = this.obtenerRespondidas();
    actual++;
    localStorage.setItem("preguntasRespondidas", String(actual));
    return actual;
  },

  reiniciar() {
    localStorage.setItem("preguntasRespondidas", "0");
  },

  limiteAlcanzado() {
    return this.obtenerRespondidas() >= 3;
  }
};
