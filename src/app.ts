import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/todos', todoRoutes);
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    message: 'please visit /todos route to work with todos',
  });
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 'fail',
    message: 'Not Found',
    data: { message: 'please visit /todos route to work with todos' },
  });
});

// Error Handler Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    message: 'something went wrong',
  });
});

app.listen(3000, () => console.log('App is listening at: 3000'));
