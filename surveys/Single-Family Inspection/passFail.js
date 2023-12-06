/*
 * JavaScript functions for Survey123
 */

const inspectionCheck = (...inspectionParams) => {
    let result = ''
    for (const record of inspectionParams) {
        if (record == 'pass') {
            result = 'Inspection Passed'
        } else {
            result = 'Inspection Failed'
            return result
        }
    }

    return result;
}

