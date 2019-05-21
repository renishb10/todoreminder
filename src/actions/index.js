import { ADD_REMINDER } from '../constants';
import { DELETE_REMINDER } from '../constants';

const addReminder = (text) => {
    console.log('Im in Action', text);
    return {
        type: ADD_REMINDER,
        text
    }
};

const deleteReminder = (id) => {
    console.log('Im in Delete Action', id);
    return {
        type: DELETE_REMINDER,
        id
    }
};

export {
    addReminder,
    deleteReminder,
} 