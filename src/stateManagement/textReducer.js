export const SetTextActions = {
  setText: "SET_START_TEXT"
};

// Исходный стейт
const initialState = {
  textboxvalue: "начальное значение"
};

// редюсер - функция, на основе входного объекта
// меняющая стейт и возвращающая новый
const textReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SetTextActions.setText:
      console.log("text before", state.textboxvalue);
      const tbvalue = state.textboxvalue;
      const item = action.payload;
      const newState = { ...state, textboxvalue: item };
      console.log("text after", newState.textboxvalue);
      return newState;
    default:
      return state;
  }
};
export default textReducer;
