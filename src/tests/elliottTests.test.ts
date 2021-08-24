const request = require('supertest');

import app from '../server';

test('Test `Elliott` total creditor value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Elliott',
    address: '76 Goodhouse Road',
    postcode: 'BL1 8QT',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      totalCreditorValue: 12149717,
    })
  );
});

test('Test `Elliott` secured creditor value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Elliott',
    address: '76 Goodhouse Road',
    postcode: 'BL1 8QT',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      securedCreditorValue: 11786427,
    })
  );
});

test('Test `Elliott` unsecured creditor value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Elliott',
    address: '76 Goodhouse Road',
    postcode: 'BL1 8QT',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      unsecuredCreditorValue: 363290,
    })
  );
});

test('Test `Elliott` qualifies value', async () => {
  const res = await request(app).post('/credit-search').send({
    surname: 'Elliott',
    address: '76 Goodhouse Road',
    postcode: 'BL1 8QT',
  });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(
    expect.objectContaining({
      qualifies: false,
    })
  );
});
