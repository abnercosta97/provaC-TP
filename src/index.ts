// index.ts
import express, { Request, Response } from 'express';
import  Movie  from '../src/classes/Movie';
import Set  from '../src/classes/Set';


const app = express();
const port = 3000;


app.get('/um/:title/:year', (req: Request, res: Response) => {
  const {title, year} = req.params;
  const filme = new Movie(title, parseInt(year));
    //res.json(filme.toJson());
  const filmes = new Set(filme);
res.json(filmes.getItems());

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});