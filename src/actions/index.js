import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

const addReminder = (text, dueDate) => {
    console.log('Im in Action', text, dueDate);
    return {
        type: ADD_REMINDER,
        text,
        dueDate
    }
};

const deleteReminder = (id) => {
    console.log('Im in Delete Action', id);
    return {
        type: DELETE_REMINDER,
        id
    }
};

const clearReminders = () => {
    console.log('Im in Clear Action');
    return {
        type: CLEAR_REMINDERS
    }
};

export {
    addReminder,
    deleteReminder,
    clearReminders
} 