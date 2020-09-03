import { CHANGE_STEP, CHANGE_STEP_ON } from './actionType';

export const changeStep = data => ({
    type: CHANGE_STEP,
    data
})
export const changeStepOn = data => ({
    type: CHANGE_STEP_ON,
    data
})