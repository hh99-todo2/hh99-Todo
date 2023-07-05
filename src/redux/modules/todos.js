// Action value
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload: payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    id: id,
  };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리덕스 어떻게하냐",
      body: "공부 더하기~!",
      isDone: false,
    },
    {
      id: 2,
      title: "2레벨 과제 어렵다!!",
      body: "과제 끝내기~!",
      isDone: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  //랜덤 ID값 생성에 필요
  const generateRandomId = () => {
    const randomNumber = Math.floor(Math.random() * 100000);
    return randomNumber;
  };

  switch (action.type) {
    case CREATE_TODO:
      const uniqueId = generateRandomId();
      return {
        ...state,
        todos: [...state.todos, { id: uniqueId, ...action.payload }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              isDone: !(item.isDone),
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

// export default reducer
export default todos;



