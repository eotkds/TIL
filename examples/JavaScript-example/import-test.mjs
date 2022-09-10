// import { fn1 } from "./export-test.js";
// import Fn from "./export-test.mjs";
// import { fn1, fn2, fn3 as fnThree } from "./export-test.mjs";
import * as Fn from "./export-test.mjs";

// const F1 = fn1();
// Fn.fn1(); //TypeError!
Fn.fn2();
Fn.fn3();

// fn1();
// fn2();
// fnThree();
