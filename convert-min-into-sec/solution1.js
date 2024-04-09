'use strict';

/**
 * Convert minutes to second .
 *
 * @param {number} minutes - The number of minutes to convert 
 * @returns {number} The equivalent number of second.
 */


const convertToSecond = (minutes) => {
    return Math.floor(minutes * 60);
};