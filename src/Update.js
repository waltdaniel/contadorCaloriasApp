import * as R from 'ramda';

//a diferencia del export defaul, este export puede usarse para
const MSG = {
    SHOW_FORM: 'SHOW_FORM',
    COMIDA_INPUT: 'COMIDA_INPUT',
    CALORIAS_INPUT: 'CALORIAS_INPUT',
    SAVE_COMIDA: 'SAVE_COMIDA'
};
//maneja el input comida
export function comidaInputMsg(descrip) {
    return {
        type: MSG.COMIDA_INPUT,
        descrip
    };
}
//----msg al boton guardar
export const guardarComidaMsg = { type: MSG.SAVE_COMIDA };
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
            /* COMO verif que se numero y no string, por comp funciones c/Rambda */
            const caloo = R.pipe(
                //parsea a entero por func JS
                parseInt,
                /* asegura default 0 -ya puesto por default en el model-
                para evitar error NaN, 0 es el param
                que R.defaultTo usa en caso de que el resultado de una eval 
                sea Nan o Null*/
                R.defaultTo(0),
            )(msg.valcalorias);
            return { ...model, calorias: caloo };
        }
        case MSG.SAVE_COMIDA: {
            //func que agrega item/comida a la colec del modelo
            return add(msg, model);
        }
    }
    return model;
}
function add(msg, model) {
    const { nextId, description, calorias } = model;
    const comidaN = { id: nextId, description, calorias };
    const comidas = [...model.comidas, comidaN];
    return {
        //agrupa en un obj el nuevo registro de comidas
        ...model, comidas,
        //setea el next para el que luego se inserte
        nextId: nextId + 1,
        //limpia campos por default en el form y cierra el form
        description: '',
        calorias: 0,
        showForm: false,
    }
}
export default update;