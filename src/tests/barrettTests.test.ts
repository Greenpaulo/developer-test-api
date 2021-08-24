const request = require('supertest');

import app from '../server';

test('Test `Barrett` total creditor value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Barrett',
    address: '2 Newhouse Lane',
    postcode: 'NH1 7EQ',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      totalCreditorValue: 52074574,
    })
  );
});

test('Test `Barrett` secured creditor value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Barrett',
    address: '2 Newhouse Lane',
    postcode: 'NH1 7EQ',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      securedCreditorValue: 50183516,
    })
  );
});

test('Test `Barrett` unsecured creditor value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Barrett',
    address: '2 Newhouse Lane',
    postcode: 'NH1 7EQ',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      unsecuredCreditorValue: 1891058,
    })
  );
});

test('Test `Barrett` qualifies value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Barrett',
    address: '2 Newhouse Lane',
    postcode: 'NH1 7EQ',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      qualifies: true,
    })
  );
});
