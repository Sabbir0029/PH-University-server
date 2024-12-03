"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
// import globalErrorHandler from './middlewares/globalErrorhandler';
// import notFound from './middlewares/notFound';
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/v1', routes_1.default);
app.get('/', (re, res) => {
    res.send('Hello World!');
});
// app.use(globalErrorHandler);
//Not Found
// app.use(notFound);
exports.default = app;
