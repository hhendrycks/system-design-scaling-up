const pg = require('pg');
const connectionString = "postgres://hmh:rb29te@127.0.0.1:5432/homedepot";
const pgClient = new pg.Client(connectionString);

require('babel-polyfill');

describe('Query Postgres DB for correct values and time', () => {
    let db;

    beforeAll(async () => {
        await pgClient.connect((err) => {
            if (err) console.log(err);
        });
    });

    afterAll(async () => {
        await pgClient.end();
    });

    test('should return correct product with id of 1', async () => {
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 1');
        expect(product.rows[0].brand).toBe('Estwing');
    });

    test('should return correct product with id of 10000000', async () => {
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 10000000');
        expect(product.rows[0].brand).toBe('ANVIL');
    });

    test('should return query result within 50ms, id 1', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 1');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 3', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 10000000');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 5', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 5');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 5,000,000', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 5000000');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,990', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 9999990');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,993', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 9999993');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,995', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 9999995');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,997', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 9999997');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id of 10,000,000', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE id = 10000000');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, brand name of ANVIL', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE brand = \'ANVIL\' LIMIT 5');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, category kitchen', async () => {
        const start = performance.now();
        const product = await pgClient.query('SELECT brand FROM product WHERE category = \'kitchen\' LIMIT 5');
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });
});
