import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "150",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

const toastSucesso = (mensagem) => toastr["success"](" ", mensagem); // Toast de sucesso 
const toastErro = (mensagem) => toastr["error"](" ", mensagem); 
const toastAviso = (mensagem) => toastr["warning"](" ", mensagem);// Toast de erro 

export { toastSucesso, toastErro, toastAviso };