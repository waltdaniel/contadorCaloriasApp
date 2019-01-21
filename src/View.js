import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

//usamos un pre para ver el crudo en html
const { pre, div, h1, button, label, input, form } = hh(h);

//dispatch es la fun maneja el evento click en este caso, model el dato
function formVer(dispatch, model) {
    //muestra el boton. campo input con su label
    //sustraigo por destructuring el valor de la descrip/comida del modelo
    const { description, calorias } = model;
    return form(
        { className: 'w-100 mv2' },
        [
            setCampo('Comida', description),
            //aplicando un valor default se calorias en 0, utilizan la prop thrusty de js con pipe
            setCampo('Calorias', calorias || ''),
        ],
    );
    /* return button({ className: 'f3 pv2 ph3 bg-blue white bn' },
        'Agregar comida') */
}
//genera el label e input del form
function setCampo(etiq, valorinput) {
    return div([
        label({ className: 'db mb1 ' }, etiq),
        input({
            className: ' pa2 input-reset  ba w-100 mb2',
            type: 'text',
            value: valorinput
        }),
    ])
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