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
}
const loginSucesso = (mensagem) => toastr["success"](" ", mensagem); // Toast de sucesso ao logar
const loginErro = (mensagem) => toastr["error"](" ", mensagem); // Toast de erro ao logar
