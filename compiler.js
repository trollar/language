import fs from 'node:fs';
import * as functions from './functions/internalRegister.js';

const argv = process.argv.slice(2);
let code = '// trollar language compiled with trollar compiler v0.0.1\n';
const source = fs.readFileSync(`./${argv[0]}.trol`, 'utf8');


source.split('\n').forEach(line => {
    line.split(';').forEach(statement => {
        Object.entries(functions).forEach(([functionTableName, table]) => {
            if (statement.startsWith(table.name)) {
                const newcode = table.exec(statement);
                code = `${code}\n${newcode}`
            }
        })
    })
})

fs.writeFile(`./${argv[0]}.trollar.js`, code, err => {
    if (err) {
        console.log(err);
    }
});