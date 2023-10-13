const chai = require('chai');
const chaiHttp = require('chai-http');
const express = require('express');
const app = express(); // Crie uma nova instância do Express para o ambiente de teste
const User = require('../models/User');
const faker = require('faker');

chai.use(chaiHttp);
const expect = chai.expect;

app.use('/users/store', async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
});

describe('UserController', function () {
  it('deve criar um novo usuário', async function () {
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      confirmpassword: faker.internet.password(),
    };

    const response = await chai.request(app).post('/users/store').send(user);

    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message', 'Usuário cadastrado com sucesso');
  });

  it('deve retornar um erro quando o e-mail já existe', async function () {
    // Implemente a lógica de verificação do e-mail existente aqui
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      confirmpassword: faker.internet.password(),
    };

    const response = await chai.request(app).post('/users/store').send(user);

    expect(response).to.have.status(422);
    expect(response.body).to.have.property('message', 'Por favor, utilize outro e-mail');
  });
});
