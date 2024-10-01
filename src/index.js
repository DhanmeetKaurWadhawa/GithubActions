const core = require('@actions/core');
 
const person=process.env.INPUT_PERSON;
console.log('Hello ${person} from custom js actions');
