import { app } from './app';

const port = process.env.PORT || 8050;

app.listen(port, () => {
    console.log(`Servidor Online - localhost:${port}`);
});