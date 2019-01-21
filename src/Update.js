//a diferencia del export defaul, este export puede usarse para
//exportar cualquier func/obj
const MSG = {
    SHOW_FORM: 'SHOW_FORM',
    COMIDA_INPUT: 'COMIDA_INPUT',
    CALORIAS_INPUT: 'CALORIAS_INPUT',
};
//maneja el input comida
export function comidaInputMsg(descrip) {
    return {
        type: MSG.COMIDA_INPUT,
        descrip
    };
}
//maneja el input calorias
export function caloriasInputMsg(valcalorias) {
    return {
        type: MSG.CALORIAS_INPUT,
        valcalorias
    };
}
//Exporta la func que maneja el mostrar/ocultar el form
export function mostrarForm(showForm) {
    return {
        type: MSG.SHOW_FORM,
        showForm,
    };
}
function update(msg, model) {
    //ahora se evalua el type de msg
    switch (msg.type) {
        case MSG.SHOW_FORM: {
            //extraigo el valor bool del modelo
            //el obj msg tiene un attr que viene el valor a modif
            //sea descrip o valor o si showform true o no
            const { showForm } = msg;
            //seteo a true el atrib showF del modelo
            //retorna model con atrib cambiados sgún click
            return { ...model, showForm, description: '', calorias: 0 };
        }
        //de acuerdo qué msg es.. agrego descrip o val de calor
        case MSG.COMIDA_INPUT: {
            const { descrip } = msg;
            //el obj msg tiene un attr que viene el valor a modif
            //sea descrip o valor o si showform true o no
            return { ...model, description: descrip };
        }
        case MSG.CALORIAS_INPUT: {
            const { valcalorias } = msg;
            return { ...model, calorias: valcalorias };
        }
    }
    return model;
}
export default update;