export default {
  presets: [
    [
      '@babel/env',
      {
        targets: { esmodules: true },
        modules: false,
        shippedProposals: true,
      },
    ],
  ],

  env: {
    cjs: {
      plugins: [
        'babel-plugin-transform-es2015-modules-simple-commonjs',
        [
          'module-resolver',
          {
            resolvePath(sourcePath, currentFile, opts) {
              return sourcePath.endsWith('.js') ? sourcePath.slice(0, -2) + 'cjs' : sourcePath
            },
          },
        ],
      ],
    },
  },
}
