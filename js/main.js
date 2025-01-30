$(document).ready(function(){
    $('#slidecar').slick({
        autoplay:true
    })

    $('.menuh').click(function(){
        $('nav').slideToggle()
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })


    $('form').validate({
        rules: {
            nome: {
                required : true
            },
            tel: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            carint: {
                required: true
            },
            men: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome!',
            tel: 'Por favor, insira o seu número de telefone!',
            email: 'Por favor, insira o seu E-mail!',
            carint: 'Por favor, insira o seu veículo de interesse!',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let campInco = validador.numberOfInvalids()
            if (campInco) {
                alert(`Existem ${campInco} campos incorretos!`)
            }
        }
    })

    $('.listav button').click(function(){
        let destino = $('#contato')

        let nameCar = $(this).parent().find('h3').text()

        $('#carint').val(nameCar)

            $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})