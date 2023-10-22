module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@core': './src/core',
          '@helpers': './src/helpers',
          '@infra': './src/infra',
          '@modules': './src/modules',
          '@shared': './src/shared'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
