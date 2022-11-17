const todoList = require('../todo');
var d =new Date();


const {all,markAsComplete, add,overdue,dueToday,dueLater,} =todoList();

describe("todolist test suite", () => {
    beforeAll(() => {
        add(

            {
                title: "complete the work",
                completed: false,
                dueDate : new Date(new Date(d.setDate(d.getDate() - 1))).toLocaleDateString("en-CA")
            },
            {
                title: "play basketball",
                completed: false,
                dueDate : new Date(new Date(d.setDate(d.getDate() + 1))).toLocaleDateString("en-CA")
            }

        );
    })
    test("should add new todo", () => {
        const count =all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate : new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(count + 1);
    });

    test("Should mark todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
    test("checksing over dues", () => {

        expect(overdue().length).toBe(1);
    });
    test("checking today's dues", () => {

        expect(dueToday().length).toBe(1);
    });
    test("checking dues later", () => {

        expect(dueLater().length).toEqual(1);
    });
    


})
