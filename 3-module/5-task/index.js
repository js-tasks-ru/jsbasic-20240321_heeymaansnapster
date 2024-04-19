function getMinMax(str) {
  let min = 0;
  let max = 0;
  str.split(" ").map((digit) => {
    if (parseInt(digit) < min) min = digit;
    if (parseInt(digit) > max) max = digit;
  });
  return {
    min: parseFloat(min),
    max: parseFloat(max),
  };
}
