// index.ts
import express, { Request, Response } from 'express';
import  Movie  from '../src/classes/Movie';
import Set  from '../src/classes/Set';
import { Comparable } from './classes/Types';
import Car from './classes/Car';
import SetGeneric from './classes/SetGeneric';


const app = express();
const port = 3000;


app.get('/um/:title/:year', (req: Request, res: Response) => {
  const {title, year} = req.params;
  const filme = new Movie(title, parseInt(year));
    //res.json(filme.toJson());
  const filmes = new Set(filme);
res.json({"Filmes:": filmes.getItems()});

});

app.post('/dois', async (req: Request, res: Response) => {
  try{
    const {type, data} = req.body;
    let items: Comparable ;
    if (type === 'Movie') {
      items = data.map((item: any) => new Movie(item.title, item.year));
    } else if (type === 'Car') {
      items = data.map((item: any) => new Car(item.model, item.year));
    } else{ 
      return res.status(400).json({message: 'Invalid type'});
  }
  const setGeneric = new SetGeneric(items);


    res.json(setGeneric.getItems());
  } catch (error) {
    res.status(500).json({error });
  }


  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
app.post('/dois', async (req: Request, res: Response) => {
  try {
    const { type, data } = req.body;
    
    let items: Comparable[] = [];

    if (type === 'Movie') {
      items = data.map((item: MovieProps) => new Movie(item.title, item.year));
    } else if (type === 'Car') {
      items = data.map((item: CarProps) => new Car(item.model, item.year));
    } else {
      return res.status(400).json({ error: 'Invalid type' });
    }

    const setGeneric = new SetGeneric(items);

    // Salvando os dados no arquivo dados.txt usando o método append da classe File
    await File.append(setGeneric.getItems());

    res.json(setGeneric.getItems());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/