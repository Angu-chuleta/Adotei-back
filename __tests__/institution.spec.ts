import request from 'supertest';
import { app } from '../src/main';

describe('GET /instituition', () => {});

describe('CRUD instituition', () => {
  const instituition = {
    name: 'bug orfanato',
    foto: 'logo.jpg',
    email: 'adote@gmail.com',
    telefone: '27 9999999',
    sobre: 'Bug orfanato é um teste da api',
    credito: 0,
    valido: true,
    termo: 'não doe para nós.',
  };

  let instituition_id = '';
  it('create instituition', async () => {
    const res = await request(app)
      .post('/instituition')
      .set('Accept', 'application/json')
      .send(instituition);
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(instituition.name);

    instituition_id = res.body._id;
  });

  it('get the instituition', done => {
    request(app)
      .get(`/instituition/${instituition_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update instituition', async () => {
    const res = await request(app)
      .put(`/instituition/${instituition_id}`)
      .send({ ...instituition, credito: 100 });
    console.log(res.body);

    expect(res.status).toBe(200);
    //expect(res.body.credito).toBe(100);
  });
  it('delete instituition', async () => {
    const res = await request(app)
      .put(`/instituition/${instituition_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});
