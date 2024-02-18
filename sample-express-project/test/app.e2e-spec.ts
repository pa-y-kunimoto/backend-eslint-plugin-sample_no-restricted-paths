import * as request from 'supertest';
import { setupServer } from './utils/server';

const server = setupServer();

describe('AppController (e2e)', () => {
  it('/ (GET)', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body).toEqual({ message: 'Hello World!' });
  });
});
