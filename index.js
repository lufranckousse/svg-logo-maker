const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text (up to three characters):',
    validate: function(value) {
      if (value.length > 3) {
        return 'Text must be up to three characters';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex code):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex code):'
  }
];

inquirer.prompt(questions).then(answers => {
  console.log('\nUser Input:');
  console.log(answers);

  let shape;

  console.log('Selected Shape:', answers.shape); // Debug statement

  switch (answers.shape) {
    case 'Circle':
      console.log('Creating Circle...'); // Debug statement
      shape = new Circle();
      break;
    case 'Triangle':
      console.log('Creating Triangle...'); // Debug statement
      shape = new Triangle();
      break;
    case 'Square':
      console.log('Creating Square...'); // Debug statement
      shape = new Square();
      break;
    default:
      console.error('Invalid shape');
      return;
  }

  console.log('Selected Shape Object:', shape); // Debug statement

  shape.setColor(answers.shapeColor);

  const svgContent = shape.render(answers.text, answers.textColor);

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});
