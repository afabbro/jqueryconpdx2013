/* Customized JS */
(function () {
  'use strict';

  // Horizontal business as usual
  bespoke.horizontal.from('article', {
    state: true,
    hash: true,
    bullets: true
  });

  // This shit because my Kensington presentation clicker wasn't programmable
  // Seriously I should have bought a Logitech

  // document.body.onclick = function(e) {
  //   bespoke.prev();
  //   return false;
  // }

  // document.oncontextmenu = function (e) { 
  //    bespoke.next();
  //    return false;
  // };

})();