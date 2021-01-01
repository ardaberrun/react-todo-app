export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
          if(action.payload.length >= 3){
              return  [...state, { id: Date.now(), name: action.payload, complete: false }]
          }else{
              alert("Your task must be greater than 3 letters");
              return state;
          }
  
      case "REMOVE_TODO":
        return state.filter((item) => item.id !== action.payload);
  
      case "TOGGLE_TODO":
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, complete: !item.complete }
            : item
        );
  
      // case "INCOMPLETE_LENGTH":
      //      return state.filter((todo) => !todo.complete);
  
      default:
        return state;
    }
  };
  