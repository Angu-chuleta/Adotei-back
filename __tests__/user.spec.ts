import request from 'supertest';
import { app } from '../src/main';

describe('GET /user', () => {});

describe('CRUD user', () => {
  const user = {
    name: 'buguer de Oliveira',
    foto: 'foto.jpg',
    email: 'gugguer@gmail.com',
    telefone: '27 920006060',
    sobre: 'Um adotador de gatos',
    credito: 100,
  };

  let user_id = '';
  it('create user', async () => {
    const res = await request(app)
      .post('/user')
      .set('Accept', 'application/json')
      .send(user);
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(user.name);

    user_id = res.body._id;
  });

  it('get the user', done => {
    request(app)
      .get(`/user/${user_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update user', async () => {
    const res = await request(app)
      .put(`/user/${user_id}`)
      .send({ ...user, name: 'bugguer da silva' });
    expect(res.status).toBe(200);
  });
  it('delete user', async () => {
    const res = await request(app)
      .put(`/user/${user_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});
