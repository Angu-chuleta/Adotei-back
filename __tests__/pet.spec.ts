import request from 'supertest';
import { app } from '../src/main';
import { json } from 'body-parser';
import { log } from 'util';

describe('GET /pet', () => {});

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
      .set('Accept', 'application/json')
      .send(pet);
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(pet.name);

    pet_id = res.body._id;
  });

  it('get the pet', done => {
    request(app)
      .get(`/pet/${pet_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update pet', async () => {
    const res = await request(app)
      .put(`/pet/${pet_id}`)
      .send({ ...pet, name: 'bugguer da silva' });
    expect(res.status).toBe(200);
  });
  it('delete pet', async () => {
    const res = await request(app)
      .put(`/pet/${pet_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});
