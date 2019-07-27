const MongoClient = require('mongodb').MongoClient;
require('babel-polyfill');

describe('Query mongoDB for correct values and time', () => {
    let db;
    let connection;

    beforeAll(async () => {
        connection = await MongoClient.connect("mongodb://localhost:27017/sdc", { useNewUrlParser: true });
        db = await connection.db('sdc');
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    test('should return correct product with id of 1', async () => {
        const product = await db.collection('homedepot').findOne({ 'ID': 1 })
        expect(product.BRAND).toBe('Estwing');
    });

    test('should return correct product with id of 10000000', async () => {
        const product = await db.collection('homedepot').findOne({ 'ID': 10000000 })
        expect(product.BRAND).toBe('ANVIL');
    });

    test('should return query result within 50ms, id 1', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 1 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 3', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 3 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 5', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 5 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 5,000,000', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 5000000 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,990', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999990 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,993', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999993 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,995', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999995 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,997', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999997 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id of 10,000,000', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 10000000 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, brand name of ANVIL', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'BRAND': 'ANVIL' })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, category kitchen', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'CATEGORY': 'kitchen' })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });
});
const MongoClient = require('mongodb').MongoClient;
require('babel-polyfill');

describe('Query mongoDB for correct values and time', () => {
    let db;
    let connection;

    beforeAll(async () => {
        connection = await MongoClient.connect("mongodb://localhost:27017/sdc", { useNewUrlParser: true });
        db = await connection.db('sdc');
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    test('should return correct product with id of 1', async () => {
        const product = await db.collection('homedepot').findOne({ 'ID': 1 })
        expect(product.BRAND).toBe('Estwing');
    });

    test('should return correct product with id of 10000000', async () => {
        const product = await db.collection('homedepot').findOne({ 'ID': 10000000 })
        expect(product.BRAND).toBe('ANVIL');
    });

    test('should return query result within 50ms, id 1', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 1 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 3', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 3 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 5', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 5 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 5,000,000', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 5000000 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,990', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999990 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,993', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999993 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,995', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999995 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id 9,999,997', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 9999997 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, id of 10,000,000', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'ID': 10000000 })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, brand name of ANVIL', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'BRAND': 'ANVIL' })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });

    test('should return query result within 50ms, category kitchen', async () => {
        const start = performance.now();
        const product = await db.collection('homedepot').findOne({ 'CATEGORY': 'kitchen' })
        expect(performance.now() - start).toBeLessThanOrEqual(49);
    });
});

