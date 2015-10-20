(function() {

  window.runRevealListeners = function() {
    listeners.forEach(function(fn) {
      fn();
    })
  }

  window.onSlideWithElementShown = onSlideWithElementShown;

  var listeners = [];

  function onSlideWithElementShown(el, fn) {
    listeners.push(listener);

    function listener() {
      Reveal.addEventListener('slidechanged', check);
      Reveal.addEventListener('ready', check);

      var slide = Reveal.getCurrentSlide();
      if(slide) {
        check({ currentSlide: slide });
      }

      function check(event) {
        if($.contains(event.currentSlide, el)) {
          var hide = fn(el, event.currentSlide) || function() {};
          Reveal.addEventListener('slidechanged', cleanup);
        }

        function cleanup() {
          hide();
          Reveal.removeEventListener('slidechanged', cleanup);
        }
      }
    }
  }
  
})()

