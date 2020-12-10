module.exports = {
  name: 'poc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/poc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
