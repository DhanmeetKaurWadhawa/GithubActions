console.log('hello'); 
const core = require('@actions/core'); 
try { const person = process.env.INPUT_PERSON; 
console.log(`Hello ${person} from custom js actions`); 
} 
catch (error) { 
    core.setFailed(`Action failed: ${error}`);
 }
