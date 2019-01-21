//contien todas las func impuras
import { h, diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

// parte func impura / relaciona con f puras y estado
function app(inicialmodel, update, view, nodo) {
    //seteo estado inicial con params defecto
    let model = inicialmodel;
    let viewactual = view(dispach, model);
    //-------dice al v dom el nodo vista a monitorizar
    let rootNode = createElement(viewactual);
    nodo.appendChild(rootNode);
    // el dispacher maneja los eventos de los btns
    // como dispacher está dentro del alcance de app se le pasa tmb al view
    function dispach(msg) {
        //act estado num según sea msg + o -
        //por lo que model tendrá el estado nuevo actualizado
        model = update(msg, model);
        const viewactualizado = view(dispach, model);
        //acutaliza nodo DOM reemplazando hjo --- patch de vdom
        const patches = diff(viewactual, viewactualizado);
        rootNode = patch(rootNode, patches);
        //nodo.replaceChild(viewactualizado, viewactual);
        //y como en un ciclo iterat se setea el inidice
        viewactual = viewactualizado;
    }
}
export default app;