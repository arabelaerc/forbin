console.log('#MAP JS')
import puntosPorGrupo from './puntos.json';
import { initMap, showPoints } from './js/map';
import './js/hero.swiper'


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
