const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionalStr = '';

  const finalStr = [];
  const repTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';

  if (options.addition !== undefined) {
    const tempString = [];
    const addRepTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    const additionalSeparator = options.additionSeparator ? options.additionSeparator : '|';

    for (let i = addRepTimes; i > 0; i--) {
      tempString.push(String(options.addition));
    }

    additionalStr = tempString.join(additionalSeparator);

    // additionalStr = Array(addRepTimes).fill(String(options.addition)).join(additionalSeparator);
  }

  for (let i = repTimes; i > 0; i--) {
    finalStr.push(String(str) + additionalStr);
  }

  // const result = Array(repTimes).fill(String(str) + additionalStr).join(separator);


  return finalStr.join(separator);
}

module.exports = {
  repeater
};