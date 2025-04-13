import { dbConfig } from './dbConfig';

dbConfig.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar no MySQL:', err);
  } else {
    console.log('✅ Conexão com o MySQL estabelecida com sucesso!');
  }
});
