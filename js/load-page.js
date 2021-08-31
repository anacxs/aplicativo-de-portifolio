//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função
  
  //Monitorar todos os clicks em nosso elemento link "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty() 
    $('.modal-body').empty() 

    switch(pagina){
      case 'projeto-reservetec': 
        $('.modal-title').append('Reservetec') 
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-8">
                <h4 class="text-center text-danger">Reservetec</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eos asperiores ipsam et, natus quod nihil, iusto animi saepe hic adipisci beatae deleniti. Recusandae, quo. Deserunt ratione corrupti et recusandae!</p>
              </div>
            </div>
          </div>
        `) 
        break
      case 'projeto-fadeline':
        $('.modal-title').append('Fadeline') 
        $('.modal-body').append('<p>Esse é o Projeto Fadeline!') 
        break
      case 'projeto-integrante-php':
        $('.modal-title').append('Integrante PHP') 
        $('.modal-body').append('<p>Aqui está um projeto de PHP!</p>') 
        break
      default: alert('Página não encontrada')
    }

    $('#modal-info').modal('show')

  })
})



$(document).ready(function(){
    $("#infolist").accordion({
        autoHeight: false
    });
});

$(document).ready(function(){
$('.btn-dark').click(function(e){
e.preventDefault()

$('body').removeClass('original')
$('body').removeClass('light')
$('body').addClass('dark')
$('p').addClass('text-white')
$('p').removeClass('text-dark')
$('h3').addClass('text-white')
$('h3').removeClass('text-dark')
$('h4').addClass('text-white')
$('h4').removeClass('text-dark')
})
$('.btn-light').click(function(e){
e.preventDefault()

$('body').removeClass('original')
$('body').removeClass('dark')
$('body').addClass('light')
$('p').removeClass('text-white')
$('p').addClass('text-dark')
$('h3').removeClass('text-white')
$('h3').addClass('text-dark')
$('h4').removeClass('text-white')
$('h4').addClass('text-dark')
})
$('.btn-primary').click(function(e){
e.preventDefault()

$('body').removeClass('light')
$('body').removeClass('dark')
$('body').addClass('original')
$('p').addClass('text-white')
$('p').removeClass('text-dark')
$('h3').addClass('text-white')
$('h3').removeClass('text-dark')
$('h4').addClass('text-white')
$('h4').removeClass('text-dark')
})

})