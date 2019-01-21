//a diferencia del export defaul, este exporta MSG
export const MSG = {
    SHOW_FORM: 'SHOW_FORM',
}
function update(msg, model) {
    switch (msg) {
        case MSG.SHOW_FORM: {
            //seteo a true el atrib showF del modelo
            return { ...model, showForm: true };
        }
    }
    return model;
}
export default update;