import express from 'express';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});