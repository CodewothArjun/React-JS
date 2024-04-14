import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteItems: () => {},
});

const todoItemsReducer = (CurrTodoItems, action) => {
  let newToDoItems = CurrTodoItems;
  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...CurrTodoItems,
      {
        itemName: action.payload.itemName,
        itemDueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = CurrTodoItems.filter(
      (item) => item.itemName !== action.payload.itemName
    );
  }
  return newToDoItems;
};

const todoItemContexProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  let addNewItems = (itemName, itemDueDate) => {
    let newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItems = (itemName) => {
    let deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default todoItemContexProvider;
