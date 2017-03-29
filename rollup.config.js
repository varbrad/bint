import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'dist/bint.js',
  format: 'umd',
  dest: 'dist/bint.umd.js',
  moduleName: 'bint',
  plugins: [
    uglify()
  ]
}
