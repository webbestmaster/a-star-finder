/* global describe, it */
const {assert} = require('chai');
const simpleMap = require('./mock/simple-map.json');
const unresolvedMap = require('./mock/unresolved-map.json');
const {getPath, getPathAsync} = require('./../index');

describe('get path sync', () => {
    it('simple map', () => {
        const {start, end, map, resolve} = simpleMap;
        const resolvedPath = getPath(map, start, end);

        assert.deepEqual(resolvedPath, resolve);
    });

    it('unresolved map', () => {
        const {start, end, map} = unresolvedMap;
        const resolvedPath = getPath(map, start, end);

        assert(resolvedPath === null);
    });

    it('custom parameters', () => {
        const {start, end, map, resolve} = simpleMap;
        const customNoPath = '!';
        const customMap = map.map(line => line.replace(/#/g, customNoPath));
        const resolvedPath = getPath(customMap, start, end, {noPath: customNoPath});

        assert.deepEqual(resolvedPath, resolve);
    });
});

describe('get path async', () => {
    it('simple map', done => {
        const {start, end, map, resolve} = simpleMap;

        getPathAsync(map, start, end, resolvedPath => {
            assert.deepEqual(resolvedPath, resolve);
            done();
        });
    });

    it('unresolved map', done => {
        const {start, end, map} = unresolvedMap;

        getPathAsync(map, start, end, resolvedPath => {
            assert(resolvedPath === null);
            done();
        });
    });

    it('custom parameters', done => {
        const {start, end, map, resolve} = simpleMap;
        const customNoPath = '!';
        const customMap = map.map(line => line.replace(/#/g, customNoPath));

        getPathAsync(customMap, start, end,
            resolvedPath => {
                assert.deepEqual(resolvedPath, resolve);
                done();
            },
            {noPath: customNoPath}
        );
    });
});
