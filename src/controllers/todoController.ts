import { RequestHandler } from 'express';
import { Todo } from '../models/todoModel';

const TODOS: Todo[] = [];

// export const createTodo = async (req: Request, res: Response, next: NextFunction) => {

//   res.status(201).json({
//     status: 'success',
//     data: {
//       created: 'done',
//     },
//   });
// };

// Better approach
export const createTodo: RequestHandler = async (req, res, next) => {
  const todo: string = (req.body as { todo: string }).todo;
  const newTodo = new Todo(+new Date(), todo);

  TODOS.push(newTodo);

  res.status(201).json({
    status: 'success',
    data: {
      todo: newTodo,
    },
  });
};

export const getTodos: RequestHandler = (req, res) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  res.json({ message: 'Todo updated' });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
  res.json({ message: 'Todo deleted' });
};

export const getTodo: RequestHandler<{ id: string }> = (req, res) => {
  res.json({ message: 'Single Todo' });
};
