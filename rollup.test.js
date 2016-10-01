import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/screenFactory_spec.js',
  plugins: [
    babel()
  ],
  format: 'cjs',
  moduleName: 'screenFactory',
  dest: 'lib/screenFactory_spec.js'
}
