import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './src/index.js',
  output: {
    dir: './dist',
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
})
