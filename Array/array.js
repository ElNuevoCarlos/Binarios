export default [{
        "a": 97,
        "A": 65,
        "b": 98,
        "Ç": 128,
        "@": 64,
        "SOH": 1,
        "D": 68,
        "E": 69,
        ">": 62,
        "9": 57,
        "3": 51,
        "4": 52,
        "x": 120,
        "u": 117,
        "é": 130,
        "nbsp": 255
}]



///////////////////////////// index.js /////////////////////////////

import functionOne from './Function/function.js';

const content = 'nbsp';
const response = await functionOne(content)

if (response == null) console.log('"'+content+'" no éxiste en la tabla Ascii');
else console.log(`"${content}" correponde a los valores\nNumero: ${response.number} | Numero binario: ${response.binario} `)

///////////////////////////// index.js /////////////////////////////




///////////////////////////// Function /////////////////////////////

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

///////////////////////////// Function /////////////////////////////



///////////////////////////// FunctionTwo /////////////////////////////

async function Binario(number) {
    let a, sum;

    // 128 - 64 - 32 - 16 - 8 - 4 - 2 - 1            

    if (number == 128) return 10000000;

    if (number > 128) {
        a = 1;
        sum = 128+64;

        if (sum == number) a+'1000000';

        if (sum > number) {
            a = a+'0';
            sum = sum-64
        }
        else {
            a = a+'1';
        }

        sum = sum+32;

        if (sum == number) a+'100000';

        if (sum > number) {
            a = a+'0';
            sum = sum-32
        }
        else {
            a = a+'1';
        }

        sum = sum+16;

        if (sum == number) a+'10000';

        if (sum > number) {
            a = a+'0';
            sum = sum-16
        }
        else {
            a = a+'1';
        }

        sum = sum+8;

        if (sum == number) a+'1000';

        if (sum > number) {
            a = a+'0';
            sum = sum-8
        }
        else {
            a = a+'1';
        }

        sum = sum+4;

        if (sum == number) a+'100';

        if (sum > number) {
            a = a+'0';
            sum = sum-4
        }
        else {
            a = a+'1';
        }

        sum = sum+2;

        if (sum == number) a+'10';

        if (sum > number) {
            a = a+'0';
            sum = sum-2
        }
        else {
            a = a+'1';
        }

        sum = sum+1;

        if (sum == number) a+'1';

        if (sum > number) {
            a = a+'0';
            sum = sum-1
        }
        else {
            a = a+'1';
        }

    }
    else {
        if (number > 64) {
            a = '1';
            sum = 64+32;
            
            if (sum == number) a+'100000';

            if (sum > number) {
                a = a+'0';
                sum = sum-32;
            }
            else {
                a = a+'1';
            }

            sum = sum+16;

            if (sum == number) a+'10000';

            if (sum > number) {
                a = a+'0';
                sum = sum-16;
            }
            else {
                a = a+'1';
            }

            sum = sum+8;

            if (sum == number) a+'1000';

            if (sum > number) {
                a = a+'0';
                sum = sum-8;
            }
            else {
                a = a+'1';
            }

            sum = sum+4;

            if (sum == number) a+'100';

            if (sum > number) {
                a = a+'0';
                sum = sum-4;
            }
            else {
                a = a+'1';
            }

            sum = sum+2;

            if (sum == number) a+'10';

            if (sum > number) {
                a = a+'0';
                sum = sum-2;
            }
            else {
                a = a+'1';
            }

            sum = sum+1;

            if (sum == number) a+'1';

            if (sum > number) {
                a = a+'0';
                sum = sum-1;
            }
            else {
                a = a+'1';
            }
        }
        else {
            a = '00';

            if (64 == number) a+'1';

            sum = 32;

            if (sum == number) a+'1';

            if (sum > number) {
                a = a+'0';
                sum = 0;
            }
            else {
                a = a+'1';
            }

            sum = sum+16;

            if (sum == number) a+'1';
            
            if (sum > number) {
                a = a+'0';
                sum = sum-16;
            }
            else {
                a = a+'1';
            }

            sum = sum+8;

            if (sum == number) a+'1';

            if (sum > number) {
                a = a+'0';
                sum = sum-8
            }
            else {
                a = a+'1';
            }

            sum = sum+4;

            if (sum == number) a+'1';

            if (sum > number) {
                a = a+'0';
                sum = sum-4
            }
            else {
                a = a+'1';
            }

            sum = sum+2;

            if (sum == number) a+'01';

            if (sum > number) {
                a = a+'0';
                sum = sum-2
            }
            else {
                a = a+'1';
            }

            sum = sum+1;

            if (sum == number) a+'1';

            if (sum > number) {
                a = a+'0';
                sum = sum-1
            }
            else {
                a = a+'1';
            }
        }
    }
    return a
}

export default Binario;

///////////////////////////// FunctionTwo /////////////////////////////




///////////////////////////// Array /////////////////////////////

export default [{
        "a": 97,
        "A": 65,
        "b": 98,
        "Ç": 128,
        "@": 64,
        "SOH": 1,
        "D": 68,
        "E": 69,
        ">": 62,
        "9": 57,
        "3": 51,
        "4": 52,
        "x": 120,
        "u": 117,
        "é": 130,
        "nbsp": 255
}]

///////////////////////////// Array /////////////////////////////