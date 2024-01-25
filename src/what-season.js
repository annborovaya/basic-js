const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter'
  };
  const unableMsg = 'Unable to determine the time of year!';

  if (arguments.length === 0) {
    return unableMsg;
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!")
  }

  try {
    date.getFullYear();
  } catch (e) {
    if (e) throw new Error("Invalid date!")
  }

  const properties = Object.getOwnPropertyNames(date);

  if (properties.length !== 0) throw new Error("Invalid date!");

  const month = date.getMonth();

  return seasons[month];
}

module.exports = {
  getSeason
};