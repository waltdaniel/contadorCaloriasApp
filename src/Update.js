//a diferencia del export defaul, este exporta MSG
const MSG = {
    SHOW_FORM: 'SHOW_FORM',
};

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
            const { showForm } = msg;
            //seteo a true el atrib showF del modelo
            //retorna model con atrib cambiados sgún click
            return { ...model, showForm, description: '', calorias: 0 };
        }
    }
    return model;
}
export default update;