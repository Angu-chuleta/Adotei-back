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

describe('POST /pet', () => {
  it('create pet', async () => {
    const res = await request(app)
      .post('/pet')
      .send({ name: 'dog' });
    expect(res.status).toBe(201);
  });
});
