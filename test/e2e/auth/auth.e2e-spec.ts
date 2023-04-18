import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest-graphql';
import gql from 'graphql-tag';

describe('Auth endpoint', () => {
  let app: INestApplication
  let url: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ AppModule ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.listen(process.env.PORT);
    url = await app.getUrl();
  });

  afterAll(async () => {
    await app.close();
  })

  describe('signInUser', () => {
    it('should return token' , async() => {
      const response = await request(app)
      .query(gql`
          query {
              signInUser(username: "vinh") {
                  token
              }
          }
      `);
      expect(response.data).toHaveProperty('token');
    })
  })
  describe('signUpUser', () => {

  })
})
