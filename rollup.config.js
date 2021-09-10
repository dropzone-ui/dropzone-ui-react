import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import packageJson from "./package.json";
//import jsx from 'rollup-plugin-jsx'
//import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";
export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    sass({ insert: true }),
    peerDepsExternal(),
    resolve(
     // { preferBuiltins: true, mainFields: ['browser'] }
      ),
    commonjs(),
    typescript(),
    terser(),
    //json(),
    // jsx( {factory: 'React.createElement'} ),
  ],
};
