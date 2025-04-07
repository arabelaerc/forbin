console.log('#MAP JS')
let map = document.querySelectorAll('.map');

import puntosPorGrupo from './puntos.json';
import { initMap, showPoints } from './js/map';
import './js/hero.swiper'


if (map) {
  initMap();
  
  let grupoActivo = null;
  
  window.toggleGrupo = function (grupo) {
    if (grupoActivo === grupo) {
      showPoints([]);
      grupoActivo = null;
    } else {
      showPoints(puntosPorGrupo[grupo]);
      grupoActivo = grupo;
    }
  };
}
