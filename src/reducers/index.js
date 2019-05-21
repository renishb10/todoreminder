import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
    const newText = {
        text: action.text,
        id: Math.random()
    };

    console.log(newText);
    return newText;
};

const reminders = (state = [], action) => {
    let reminders = null;

    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            return reminders;
        default:
            return state;
    }
};

export default reminders;