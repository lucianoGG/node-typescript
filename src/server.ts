import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

// Cross Origin Resource Sharing (CORS) é um mecanismo que permite
// que recursos restritos em uma página da web sejam solicitados a partir 
// de um domínio/endereço distinto.
app.use(cors());

// app.use(cors({
//     origin: ['dominio.com.br', 'meudominio.com.br']
// }));


//trata as requisões como json
app.use(express.json());

//criar as rotas
app.use(routes);

//acesso estastico na pasta uploads - imagens enviadas
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//retorna os erros do celebrate
app.use(errors());

//porta localhost
app.listen(3333, () =>{
    console.log('Server started on port 3333');
});
