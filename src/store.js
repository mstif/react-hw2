import { configureStore } from '@reduxjs/toolkit';
import textReducer from './stateManagement/textReducer';

const store = configureStore({
    reducer: {
        textbox: textReducer,
    },

});
export default store;