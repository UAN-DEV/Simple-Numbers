"use strict";
let i = 2;
outer: do {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue outer;
  }
  console.log("Primery number:", i);
} while (i++ < 100);
