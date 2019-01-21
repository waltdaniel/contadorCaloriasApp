import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

//usamos un pre para ver el crudo en html
const { pre, div, h1 } = hh(h);
// vista. param dispach q maneja evento click, y modelo: valor contador.
function view(dispach, model) {
    return div({ className: 'mw6 center' }, [
        h1('Contador de calorias'),
        pre(JSON.stringify(model, null, 2),
        )]
    );
}
export default view;