const inquirer = ('inquirer');
const fs = require('fs');
const createSVG = ('./lib/createSVG');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters.",
        validate: function (value) {
            if (value.length > 0 && value.length <= 3) return true;
            return "Please enter up to three characters";
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword/hexadecimal you would like.",
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose which of the following three shapes you would like.",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword/hexadecimal you would like.",
    },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        generateSVG(answers);
   });
};

init();