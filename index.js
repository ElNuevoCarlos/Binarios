import functionOne from './Function/function.js';

const content = 'nbsp';
const response = await functionOne(content)

if (response == null) console.log('"'+content+'" no éxiste en la tabla Ascii');
else console.log(`"${content}" correponde a los valores\nNumero: ${response.number} | Numero binario: ${response.binario} `)