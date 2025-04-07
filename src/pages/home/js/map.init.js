import puntosPorGrupo from './map.marks.json'
import { initMap, showPoints } from './map.features'

export function Map() {
    const map = document.querySelector('.map')

    if (map) {
        initMap()

        let grupoActivo = null

        window.toggleGrupo = function (grupo) {
            if (grupoActivo === grupo) {
                showPoints([])
                grupoActivo = null
            } else {
                showPoints(puntosPorGrupo[grupo])
                grupoActivo = grupo
            }
        }
    }

    function selectOptionTag() {
        const $options = document.querySelectorAll('.map__options button')
        $options[0].classList.add('active')
        $options[0].click()

        document.addEventListener('click', function (e) {
            const $target = e.target
            if ($target.closest('.map__options button')) {
                $options.forEach($option => $option.classList.remove('active'))
                $target.classList.add('active')
            }
        })
    }

    selectOptionTag()
}