import request from 'supertest';
import { app } from '../src/main';

describe('GET /transaction', () => { });

describe('CRUD transaction', () => {
  const transaction = {
    pet_id: '1123123',
    value: 100,
    date: new Date('2020-01-01').toISOString(),
  };

  let transaction_id = '';
  it('create transaction', async () => {
    const res = await request(app)
      .post('/transaction')
      .set('Accept', 'application/json')
      .send(transaction);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(transaction);

    transaction_id = res.body._id;
  });

  it('get the transaction', done => {
    request(app)
      .get(`/transaction/${transaction_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update transaction', async () => {
    const res = await request(app)
      .put(`/transaction/${transaction_id}`)
      .send({ ...transaction, value: 50 });
    //expect(res.body.value).toBe(50);
    expect(res.status).toBe(200);
  });
  it('delete transaction', async () => {
    const res = await request(app)
      .delete(`/transaction/${transaction_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});
