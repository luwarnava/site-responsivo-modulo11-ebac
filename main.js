$('.lista-produtos button').click(function() {
    const destino = $('#product');
    const nomeProduto = $(this).parent().find('h3').text();

    $('#product').val(nomeProduto);

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000) 
})