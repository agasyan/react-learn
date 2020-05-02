import { join } from 'path';
import express, { static } from 'express';
const app = express();
const port = process.env.PORT || 3000;
const publicPath = join(__dirname, '..', 'build');

app.use(static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'));
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});
