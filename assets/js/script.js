$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function(){
  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var scroll = this.hash;
      $("html, body").animate({
        scrollTop: $(scroll).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });
