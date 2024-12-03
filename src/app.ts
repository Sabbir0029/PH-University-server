import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './routes';
// import globalErrorHandler from './middlewares/globalErrorhandler';
// import notFound from './middlewares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (re: Request, res: Response) => {
  res.send('Hello World!');
});

// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
