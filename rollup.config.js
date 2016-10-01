import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/screenFactory.js',
  plugins: [
    babel()
  ],
  format: 'cjs',
  moduleName: 'screenFactory',
  dest: 'lib/screenFactory.js'
}
