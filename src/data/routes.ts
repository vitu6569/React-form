import { Router } from 'express';
import { dbConfig } from './dbConfig';

const routes = Router();

routes.post('/usuarios', async (req, res) => {
  const {
    username, email, password, firstName, lastName,
    dateOfBirth, gender, language,
    streetAddress, postalCode, streetNumber,
    country, state, city, neighborhood
  } = req.body;

  // 1. Inserir dados na tabela users
  const userSql = `
    INSERT INTO users (
      username, email, passwords, firstname, lastname,
      dateofbirth, gender, languages
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const userValues = [
    username, email, password, firstName, lastName,
    dateOfBirth, gender, language
  ];

  dbConfig.query(userSql, userValues, (userErr, userResult) => {
    if (userErr) {
      console.error('Erro ao inserir usuário:', userErr);
      return res.status(500).send('Erro ao cadastrar usuário');
    }

    const userId = userResult.insertId;

    // 2. Inserir endereço na tabela addresses
    const addressSql = `
      INSERT INTO addresses (
        UserID, streetAddress, streetNumber, postalCode,
        country, state, city, neighborhood
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const addressValues = [
      userId, streetAddress, streetNumber, postalCode,
      country, state, city, neighborhood
    ];

    dbConfig.query(addressSql, addressValues, (addrErr, addrResult) => {
      if (addrErr) {
        console.error('Erro ao inserir endereço:', addrErr);
        return res.status(500).send('Erro ao cadastrar endereço');
      }

      res.status(201).json({
        message: 'Usuário e endereço cadastrados com sucesso!',
        userId: userId
      });
    });
  });
});

export default routes;
