const inputsForm = document.querySelectorAll('.input-form');
const enviarForm = document.querySelector('.btn-enviar');
const paragrafoObrigatorio = document.querySelectorAll('.paragrafo-obrigatorio');


enviarForm.addEventListener('click', (event) =>{
    event.preventDefault();
    
    inputsForm.forEach((inputsForm, index) => {
        if(inputsForm.value === ""){
            inputsForm.classList.add('campo-obrigatorio');
            inputsForm.classList.remove('campo-preenchido');
            paragrafoObrigatorio[index].classList.add('mostra-obrigatorio');
        }else {
            inputsForm.classList.add('campo-preenchido')
            inputsForm.classList.remove('campo-obrigatorio')
            paragrafoObrigatorio[index].classList.remove('mostra-obrigatorio');
        }
    });
});
