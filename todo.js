const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var d = new Date();
const today = formattedDate(d);

const todoList = () => {
    all = [{
      title: "play basketball",
      completed: false,
      dueDate : new Date(new Date(d.setDate(d.getDate() + 1))).toLocaleDateString("en-CA")
  }
];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      return all.filter((todo) => todo.dueDate < today);
    };
  
    const dueToday = () => {
      return all.filter((todo) => todo.dueDate == today);
    };
  
    const dueLater = () => {
      return  all.filter((todo) => todo.dueDate > today);
    };
  
    const toDisplayableList = (list) => {
      return list
        .map(
          (todo) =>
            `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${todo.dueDate == today ? "" : todo.dueDate
            }`
        )
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
module.exports = todoList;
