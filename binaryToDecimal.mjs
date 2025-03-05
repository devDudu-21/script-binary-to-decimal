export function binaryToDecimal(binaryString) {
  let decimal = 0;
  let power = 0;
  const binary = binaryString.split("");

  // Process non-negative binary number
  if (binary[0] === "0") {
    for (let index = binary.length - 1; index >= 0; index--) {
      decimal += parseInt(binary[index]) * Math.pow(2, power);
      power++;
    }
    return decimal;
  } else {
    // Process negative binary number
    // Invert each bit as part of two's complement calculation for negative binary numbers
    for (let index = 0; index < binary.length; index++) {
      binary[index] = binary[index] === "0" ? "1" : "0";
    }

    // Add 1 to the inverted binary string starting from the least significant bit (rightmost).
    // If a bit is 1 and there is a carry, set it to 0 and continue the carry.
    let carry = 1;
    for (let index = binary.length - 1; index >= 0; index--) {
      if (binary[index] === "1" && carry === 1) {
        binary[index] = "0";
      } else {
        binary[index] = (parseInt(binary[index]) + carry).toString();
        carry = 0;
      }
    }

    // Convert the final binary number to decimal. If the original number was negative, the result is negated.
    for (let index = binary.length - 1; index >= 0; index--) {
      decimal += parseInt(binary[index]) * Math.pow(2, power);
      power++;
    }

    // Negate the decimal result because the original binary was a negative number in two's complement form.
    // This step reflects the correct negative value of the binary input.
    return -decimal;
  }
}
