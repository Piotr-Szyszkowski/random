function silnia(num) {
  let final = 1;
  for (num; num > 1; num--) {
    final *= num;
  }
  return final;
}

console.log(silnia(9));

function recurSilnia(num) {
  if (num === 1) return num;
  return num * recurSilnia(num - 1);
}
recurSilnia(3);

console.log(recurSilnia(3));
