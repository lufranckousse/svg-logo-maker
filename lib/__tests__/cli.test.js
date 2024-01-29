const inquirer = require('inquirer');
const fs = require('fs');
const { spawn } = require('child_process');

jest.mock('inquirer');

test('Prompts work as expected', async () => {
    // Mock user input
    inquirer.prompt.mockResolvedValueOnce({ text: 'ABC', textColor: 'black', shape: 'Circle', shapeColor: 'red' });
  
    // Run the CLI
    const child = spawn('node', ['index.js'], { stdio: 'pipe' });
  
    // Simulate user input
    child.stdin.setEncoding('utf-8');
    child.stdin.write('ABC\n');
    child.stdin.write('black\n');
    child.stdin.write('Circle\n');
    child.stdin.write('red\n');
    child.stdin.end();
  
    // Wait for the CLI to finish
    await new Promise(resolve => {
      child.on('close', () => resolve());
    });
  
    // Check if the prompts were called with the correct questions
    expect(inquirer.prompt).toHaveBeenCalledWith([
      { type: 'input', name: 'text', message: 'Enter text (up to three characters):' },
      { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hex code):' },
      { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
      { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hex code):' }
    ]);
  });
  

