 console.log($);
 var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';



script.type = 'text/javascript';




$(document).ready(() => {
 $('#get-started').click( function() {
    debugger;
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('#popup-container');
      if ($this.hasClass('active')) {
        $this.removeClass('active');
        return $sidenav.removeClass('active');
      } else {
        $this.addClass('active');
        return $sidenav.addClass('active');
      }
    });

    $('#get-started').on('click', function() {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('#popup-container');
      if ($this.hasClass('open')) {
        $this.removeClass('open');
        return $sidenav.removeClass('open');
      } else {
        $this.addClass('open');
        return $sidenav.addClass('open');
      }
    });

    $('#popup-container').find('.close').on('click', function() {
      $(this).parent().removeClass('open');
      $('#get-started').removeClass('open')
      return $('#popup-container').removeClass('open');
      return $('#get-started').removeClass('open');
    });
    })