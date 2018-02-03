const eslintConfig = require('../../src/index');

describe('@dwp/eslint-config-jasmine', () => {
    it('the entrypoint should export an object', () => {
        expect(eslintConfig).toEqual(jasmine.any(Object));
    });

    describe('the exported object should', () => {
        it('have a plugins key', () => {
            expect(Object.keys(eslintConfig)).toContain('plugins');
        });

        it('have an extends key', () => {
            expect(Object.keys(eslintConfig)).toContain('extends');
        });

        it('have a globals key', () => {
            expect(Object.keys(eslintConfig)).toContain('env');
        });

        it('have a rules key', () => {
            expect(Object.keys(eslintConfig)).toContain('rules');
        });

        it('not have any other keys', () => {
            expect(Object.keys(eslintConfig)).toEqual([ 'plugins', 'extends', 'env', 'rules' ]);
        });

        describe('the extends key should ', () => {
            const rule = eslintConfig.extends;

            it('inherit recommended settings', () => {
                expect(rule).toEqual([ 'plugin:eslint-plugin-jasmine/recommended' ]);
            });
        });

        describe('the env key should', () => {
            const rule = eslintConfig.env;

            it('be an object', () => {
                expect(rule).toEqual(jasmine.any(Object));
            });

            it('have a jasmine key', () => {
                expect(Object.keys(rule)).toContain('jasmine');
            });

            it('not have any other keys', () => {
                expect(Object.keys(rule)).toEqual([ 'jasmine' ]);
            });

            describe('the jasmine key should ', () => {
                it('be enabled', () => {
                    expect(rule.jasmine).toEqual(true);
                });
            });
        });

        describe('the rules key should ', () => {
            const { rules } = eslintConfig;

            it('be an object', () => {
                expect(rules).toEqual(jasmine.any(Object));
            });
        });
    });
});
