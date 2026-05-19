const base64 = `COLE_AQUI_O_QUERYEXEC`;

const buffer = Buffer.from(base64, 'base64');

console.log(buffer.slice(0, 30));