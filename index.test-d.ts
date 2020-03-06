import {expectType} from 'tsd';
import camelcaseKeys = require('.');

const fooBarObject = {'foo-bar': true};
const camelFooBarObject = camelcaseKeys(fooBarObject);
expectType<typeof fooBarObject>(camelFooBarObject);

const fooBarArray = [{'foo-bar': true}];
const camelFooBarArray = camelcaseKeys(fooBarArray);
expectType<typeof fooBarArray>(camelFooBarArray);

expectType<Array<{[key in 'foo-bar']: true}>>(camelcaseKeys([{'foo-bar': true}]));

expectType<{[key in 'foo-bar']: true}>(camelcaseKeys({'foo-bar': true}));

expectType<{[key in 'foo-bar']: true}>(
	camelcaseKeys({'foo-bar': true}, {deep: true}),
);

expectType<{[key in 'foo-bar']: true}>(
	camelcaseKeys({'foo-bar': true}, {deep: true, pascalCase: true}),
);

expectType<{[key in 'foo-bar']: true}>(
	camelcaseKeys({'foo-bar': true}, {exclude: ['foo', /bar/]}),
);

expectType<{[key in 'foo-bar']: true}>(
	camelcaseKeys({'foo-bar': true}, {stopPaths: ['foo']}),
);

interface SomeObject {
	someProperty: string;
}

const someObj: SomeObject = {
	someProperty: 'hello'
};

expectType<SomeObject>(camelcaseKeys(someObj));
expectType<SomeObject[]>(camelcaseKeys([someObj]));

type SomeTypeAlias = {
	someProperty: string;
}

const objectWithTypeAlias = {
	someProperty: 'this should also work'
};

expectType<SomeTypeAlias>(camelcaseKeys(objectWithTypeAlias));
expectType<SomeTypeAlias[]>(camelcaseKeys([objectWithTypeAlias]));
