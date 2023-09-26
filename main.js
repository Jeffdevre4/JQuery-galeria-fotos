$(document).ready(function () {
   $('header button').click(function () {
      //Slide pra baixo
      $('form').slideDown();
   });

   //recolher slide
   $('#botao-Cancelar').click(function () {
      $('form').slideUp();
   });

   
   $('form').on('submit', function (e) {
      e.preventDefault();

      const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
      const novoItem= $('<li style="display: none"></li>');
      $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
      $(`
         <div class="overlay-imagem-link">
         <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
            ver imagem em tamanho real
         </a>
   </div>
      `).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $(novoItem).fadeIn(); //animaçao surgir 
      $('#endereço-imagem-nova').val('')
   })
})

