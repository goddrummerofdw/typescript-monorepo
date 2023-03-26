import express from 'express';
import path from 'path';
import cors from 'cors'
import favicon from 'serve-favicon';
const app = express();
app.use(express.json())
const port = process.env.PORT || 3001;
app.use(cors())
app.use(express.static(path.join(__dirname, '../../public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});
app.use(favicon(path.join(path.join(__dirname, '../../public'), 'images', 'favicon.ico')));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
