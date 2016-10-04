/*
 * Modifica el comportamiento por defecto de los modales de Bootstrap para permitir
 * que ocupen toda la pantalla.
 */
$(function() {
  $.fn.modal.Constructor.prototype.adjustDialog = function () {}

  $.fn.modal.Constructor.prototype.setScrollbar = function () {
    this.originalBodyPad = document.body.style.paddingRight || ''
  }
})
