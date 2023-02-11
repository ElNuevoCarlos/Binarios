import binario from './functionTwo.js';
import number from '../Array/array.js';

async function functionOne(content) {
    const valuesOne = number.values();

    for (const value of valuesOne) {
        if (value[content]) {
            const numberBinario = await binario(value[content]);
            return { number: value[content], binario: numberBinario};
        }
        else return null;
    }
}

export default functionOne;