import { ADD_REMINDER } from '../constants';

const addReminder = (text) => {
    console.log('Im in Action', text);
    return {
        type: ADD_REMINDER,
        text
    }
};

export default addReminder;