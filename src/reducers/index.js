import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
    let { text, dueDate } = action;
    const newText = {
        id: Math.random(),
        text,
        dueDate
    };

    console.log('reducer', newText);
    return newText;
};

const removeReminderById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('Deleted by Reducer', reminders); 
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;

    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            return reminders;
        case DELETE_REMINDER:
            reminders = removeReminderById(state, action.id);
            return reminders;
        default:
            return state;
    }
};

export default reminders;