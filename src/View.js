import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import {
    mostrarForm,
    comidaInputMsg,
    caloriasInputMsg
} from './Update';

//usamos un pre para ver el crudo en html
const { pre, div, h1, button, label, input, form } = hh(h);

//dispatch es la fun maneja el evento click en este caso, model el dato
function formVer(dispatch, model) {
    //muestra el boton. campo input con su label
    //sustraigo por destructuring el valor de la descrip/comida del modelo
    // showForm para ver oculto o no el form
    const { description, calorias, showForm } = model;
    if (showForm) {
        return form(
            { className: 'w-100 mv2' },
            [
                setCampo('Comida', description,
                    //el param agregado en update oninput.. acá se le
                    //envía esta fun que maneja el evento. en cada caso.
                    e => dispatch(comidaInputMsg(e.target.value))
                ),
                //aplicando un valor default se calorias en 0, utilizan la prop thrusty de js con pipe
                setCampo('Calorias', calorias || '-',
                    e => dispatch(caloriasInputMsg(e.target.value))
                ),
                //agregado los botones
                genboton(dispatch),
            ],
        );
    }
    return button({
        className: 'f3 pv2 ph3 bg-blue white bn',
        onclick: () => dispatch(mostrarForm(true)),
    },
        'Agregar comida');
}
//genera el label e input del form
// agregado el param oninput para manejar el evento de ingreso
//oninput:Script to be run when an element gets user input
function setCampo(etiq, valorinput, oninput) {
    return div([
        label({ className: 'db mb1 ' }, etiq),
        input({
            className: ' pa2 input-reset  ba w-100 mb2',
            type: 'text',
            value: valorinput,
            //func reescribe model mientras ingres valor al input
            oninput
        }),
    ])
}
//genera el botón del form
function genboton(dispatch) {
    return div(
        [button(
            {
                className: 'f3 pv2 ph3 bg-blue white bn mr2 dim',
                type: 'submit',
            },
            'Guardar',
        ),
        button(
            {
                className: 'f3 pv2 ph3 bg-light-gray dim',
                type: 'button',
                onclick: () => dispatch(mostrarForm(false)),
            },
            'Cancelar',
        ),]
    );
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