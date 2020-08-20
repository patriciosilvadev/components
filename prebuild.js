const fs = require('fs');

//get jsons
const packageJson = require('./package.json');
const dependenciesJson = require('./typescriptComponentsDependencies.json');
const tsconfigJson = require('./tsconfig.json');

//get Components
const components = require('./typescriptComponents')

//check dep
const checkDep = (name,n,c) => (!c&&n===name)||(c==="*"&&name.includes(n))||(name===n+"/"+c)

//env
const setEnv = (path) => ({
  "compiler": {
    "bit.envs/compilers/react-typescript": {
      "rawConfig": {
        "tsconfig": {
          "compilerOptions": {
            "outDir": `./dist/src/components/${path}`,
            "target": "ES5",
            "module": "CommonJS",
            "inlineSources": true,
            "inlineSourceMap": true,
            "removeComments": false
          }
        }
      }
    }
  }
})

packageJson.bit.overrides = {}
tsconfigJson.compilerOptions.paths = {}
components.forEach(([path,name]) => {
    //get extra dependencies
    const [,deps] = Object.entries(dependenciesJson).find(([key]) => checkDep(name,...key.split("/")))||[null,{}]
    //write override
    packageJson.bit.overrides[name] = { ...deps, env: setEnv(path) }
    //set tsconfig paths
    tsconfigJson.compilerOptions.paths[`@bit/vitorbarbosa19.ziro.${name.replace("/",".")}`] = [`components/${path}`]
})

fs.writeFileSync(__dirname+"/package.json",JSON.stringify(packageJson,null,2))
fs.writeFileSync(__dirname+"/tsconfig.json",JSON.stringify(tsconfigJson,null,2))