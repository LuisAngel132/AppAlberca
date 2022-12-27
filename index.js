import { saveuser,getusers } from "../firestore.js";
window.addEventListener("DOMContentLoaded", () => {
  
});
let fecha_asignada = null;
 var array = [];
 async function reload_dates(){
  const querysnapshot = await getusers();
  querysnapshot.forEach(doc => {
     const fecha = doc.data().fecha_asignada;
     array.push(fecha);
 })
 }
 reload_dates();
 

$("#doi").datepicker({
  closeText: 'Cerrar',
  prevText: '<Ant',
  nextText: 'Sig>',
  currentText: 'Hoy',
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
  dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
  weekHeader: 'Sm',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: '',
  onSelect: function (dateText, inst) {
    fecha_asignada = dateText;
  },
  beforeShowDay: function (date) {
    var string = jQuery.datepicker.formatDate("yy-mm-dd", date);
    return [array.indexOf(string) == -1];
  },
  
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const info = fecha_asignada.split('/');
  fecha_asignada = info[2] + '-' + info[0] + '-' + info[1];
  const name = document.getElementById("nombre").value;
  const adelanto = document.getElementById("adelanto").value;
  saveuser(name, adelanto,fecha_asignada);
  reload_dates();
  form.reset()
});
