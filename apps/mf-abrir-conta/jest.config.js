module.exports = {
  name: 'mf-abrir-conta',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mf-abrir-conta',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
