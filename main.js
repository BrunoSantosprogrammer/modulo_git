$(document).ready(function(){ 

$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(00) 00000-0000'
});

$('#cpf').mask('000.000.000-00',{
    placeholder: '___.___.___-__'
});

$('#cep').mask('00000-000',{
    placeholder: '_____-___'
});

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            },
        },messages: {
            nome:'Por favor, insira seu nome completo ',
            email:"Por favor insira um endereço de email válido",
            telefone:'Por favor, insira um número de telefone',
            cpf:'Por favor, insira o número do cpf',
            enderecoCompleto:'Por favor, dígite o endereço completo',
            cep:'Por favor, dígite o número do cep'
        },
    })
});
