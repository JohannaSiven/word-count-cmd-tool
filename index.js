/* unix word count tool copy

1. `-c` outputs the number of bytes in a file
2. '-l' outputs the number of lines in a file
3. '-w' outputs the number of words in a file
4. '-m' outputs the number of characters in a file
5. if no option flag provided, output the result of -c, -l and -w options
6. if no source file provided, use stdin

*/

const fs = require('fs');

const getSize = (file) => {
  const stats = fs.statSync(file);
  const sizeInBytes = stats.size;
  return sizeInBytes;
};

const getCount = (file, separator) => {
  const fileContent = fs.readFileSync(file, 'utf-8');
  return fileContent.split(separator).length;
};

const readFromStdin = () => {
  let data = ``;
  process.stdout.write(
    'Enter the text to evaluate (press CTRL+D to end input): \n'
  );
  process.stdin.setEncoding('utf-8');

  // read input data from stdin
  process.stdin.on('data', (chunk) => {
    data += chunk;
  });

  // write that input data into a file
  process.stdin.on('end', () => {
    fs.writeFileSync('dataFromStdin.txt', data);
    // use the new file to call handler
    handleValidInput('dataFromStdin.txt');
  });
};

const handleValidInput = (inputFile) => {
  const inputFlag =
    process.argv.filter((arg) => /^-/.test(arg))[0] || undefined;
  switch (inputFlag) {
    case '-c':
      console.log(getSize(inputFile), inputFile);
      break;
    case '-l':
      console.log(getCount(inputFile, /\r?\n/), inputFile);
      break;
    case '-w':
      console.log(getCount(inputFile, /\s+/), inputFile);
      break;
    case '-m':
      console.log(getCount(inputFile, ''), inputFile);
      break;
    default:
      console.log(
        getSize(inputFile),
        getCount(inputFile, /\r?\n/),
        getCount(inputFile, /\s+/),
        inputFile
      );
      break;
  }
};

const inputFile = process.argv.filter((arg) => /\.txt$/.test(arg))[0];

const handleReq = () => {
  try {
    if (!inputFile) {
      readFromStdin();
    } else {
      handleValidInput(inputFile);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.handleReqPublic = handleReq;
