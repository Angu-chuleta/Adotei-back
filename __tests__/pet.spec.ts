import request from 'supertest';
import { app } from '../src/main';

describe('GET /pet', () => {
  it('responds with json', done => {
    request(app)
      .get('/pet')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('CRUD pet', () => {
  const pet = {
    name: 'bugger',
    foto: 'bugger.jpg',
    porte: 'medio',
    sobre: 'lindo',
    idade: 1,
    foiAdotado: false,
  };
  let pet_id = '';
  it('create pet', async () => {
    const res = await request(app)
      .post('/pet')
      .send(pet);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(pet);
    pet_id = res.body._id;
  });

  it('update pet', async () => {
    const res = await request(app)
      .put(`/pet/${pet_id}`)
      .send({ ...pet, name: 'bugguer da silva' });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(pet);
  });
  it('delete pet', async () => {
    const res = await request(app)
      .put(`/pet/${pet_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(pet);
  });
});
