const request = require('supertest');
const app = require('../app');

(async () => {
    const { expect } = await import('chai');

    describe('Sleep Tracker API', () => {
        let recordId;

        it('should create a sleep record', async () => {
            const res = await request(app)
                .post('/sleep')
                .send({ userId: 'user1', hours: 8, timestamp: '2024-05-18T08:00:00Z' });
            expect(res.status).to.equal(201);
            expect(res.body).to.include({ userId: 'user1', hours: 8, timestamp: '2024-05-18T08:00:00Z' });
            recordId = res.body.id;
        });

        it('should retrieve sleep records for a user', async () => {
            const res = await request(app)
                .get('/sleep/user1');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body[0]).to.include({ userId: 'user1', hours: 8, timestamp: '2024-05-18T08:00:00Z' });
        });

        it('should delete a sleep record', async () => {
            const res = await request(app)
                .delete(`/sleep/${recordId}`);
            expect(res.status).to.equal(204);
        });

        it('should return 404 when deleting a non-existent record', async () => {
            const res = await request(app)
                .delete(`/sleep/nonExistentId`);
            expect(res.status).to.equal(404);
        });
    });

    run(); // Needed to start Mocha tests
})();
