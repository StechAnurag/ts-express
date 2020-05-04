"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/todos', todoRoutes_1.default);
app.use('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'please visit /todos route to work with todos',
    });
});
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'Not Found',
        data: { message: 'please visit /todos route to work with todos' },
    });
});
// Error Handler Middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'something went wrong',
    });
});
app.listen(3000, () => console.log('App is listening at: 3000'));
