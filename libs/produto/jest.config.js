module.exports = {
  name: 'produto',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/produto',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
