type initialStateProps = {
  title: string;
  category: string;
  status: string;
  description: string;
};

export const INITIAL_STATE: initialStateProps = {
  title: "",
  category: "",
  status: "suggestion",
  description: "",
};

export const inputStateReducer = (
  state: {},

  action: any
) => {
  console.log(state);
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    case "CHANGE_CATEGORY":
      return { ...state, category: action.payload };

    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "RESET_STATE":
      return INITIAL_STATE;
    default:
      return state;
  }
};
