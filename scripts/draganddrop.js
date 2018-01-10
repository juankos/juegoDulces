//Para cambiar cambiar el estilo a una pieza
  $(".imgdulce").mousedown(function(){
    var self = $(this);
    $(this).addClass("imagen-seleccionada");
    $(this).on('dragstart', function(event) {
      event.preventDefault();
    });
    //Para cambiar la posición de la pieza si se presiona el click y se mueve
    $(".panel-tablero").mousemove(function(event){
      self.css("left", function(){
        var newLeft = event.pageX - 234;
        return newLeft+"px";
      });
      self.css("top", function(){
        var newLeft = event.pageY - 591;
        return newLeft+"px";
      });
    })
  });