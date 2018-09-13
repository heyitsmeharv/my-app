import React from 'react';
import './styles.scss';

function AgeCalculator (dob) {
  var ageDifMs = Date.now() - dob.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 2018);
}

export default AgeCalculator;