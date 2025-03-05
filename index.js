import readline from "readline";
import { binaryToDecimal } from "./binaryToDecimal.mjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input a binary string: ", (string) => {
  // Check if the input is a valid binary string; it must only contain '0's and '1's and not be empty.
  if (
    string.split("").some((bit) => bit !== "0" && bit !== "1") ||
    string.length === 0
  ) {
    console.log("Invalid binary string");
  } else {
    const decimal = binaryToDecimal(string);
    console.log(`Decimal: ${decimal}`);
  }
  rl.close();
});

rl.on("close", () => {
  process.exit(0);
});
