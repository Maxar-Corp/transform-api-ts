## @maxar/transform-api

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:


### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

#### Testing

To test set a valid UAA_TOKEN in the .env file such that UAA_TOKEN="ey...."

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @maxar/transform-api@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
