"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoModel_1 = require("../models/todoModel");
const TODOS = [];
// export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
//   res.status(201).json({
//     status: 'success',
//     data: {
//       created: 'done',
//     },
//   });
// };
// Better approach
exports.createTodo = async (req, res, next) => {
    const todo = req.body.todo;
    const newTodo = new todoModel_1.Todo(+new Date(), todo);
    TODOS.push(newTodo);
    res.status(201).json({
        status: 'success',
        data: {
            todo: newTodo,
        },
    });
};
exports.getTodos = (req, res) => {
    res.json({ todos: TODOS });
};
exports.updateTodo = (req, res) => {
    res.json({ message: 'Todo updated' });
};
exports.deleteTodo = (req, res) => {
    res.json({ message: 'Todo deleted' });
};
exports.getTodo = (req, res) => {
    res.json({ message: 'Single Todo' });
};
