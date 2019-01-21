import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

//usamos un pre para ver el crudo en html
const { pre, div, h1, button } = hh(h);

//dispatch es la fun maneja el evento click en este caso, model el dato
function formVer(dispatch, model) {
    return button({ className: 'f3 pv2 ph3 bg-blue white bn' },
        'Agregar comida')
}
// vista. param dispach q maneja evento click, y modelo: valor contador.
function view(dispatch, model) {
    return div({ className: 'mw6 center' }, [
        h1('Contador de calorias'),
        formVer(dispatch, model),
        pre(JSON.stringify(model, null, 3),
        )]
    );
}
export default view;