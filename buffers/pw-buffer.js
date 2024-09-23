// Creates a buffer and allocates 10 bytes to it
const buffer = Buffer.alloc(20);
console.log("The buffer: ", buffer);

// Create a buffer from a string
const bufferFrmStr = Buffer.from("Hello, World");
console.log("From String: ", bufferFrmStr);

// Create a buffer from an array
const bufferFrmArray = Buffer.from([104, 101, 108, 108, 111]);
console.log("From Array: ", bufferFrmArray.toString());

// Writing to buffer
const buffer4write = Buffer.alloc(15);
console.log("B4W: ", buffer4write);
buffer4write.write("Hello");
buffer4write.write(" World", 5); // Starts writing at position 5
console.log("AW: ", buffer4write);
console.log("AW to string: ", buffer4write.toString());

// Reading from buffer
const read4rmbuffer = Buffer.from("Hello, World!", "utf8");
console.log("R4B to striing: ", read4rmbuffer.toString());
console.log("R4B to striing: ", read4rmbuffer.toString("hex"));
console.log("R4B to striing: ", read4rmbuffer.toString("base64"));

// Manipulating buffer
const bManipulating = Buffer.from("Hello, World!");
const slice = bManipulating.slice(4, 8);
console.log("Slice: ", slice.toString());

const buf1 = Buffer.from("Hello, ");
const buf2 = Buffer.from("World!");
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

// const bufAssess1 = Buffer.alloc("Hello, Node", "ascii");
const bufAssess2 = Buffer.from("Hello, Node", "ascii");

// console.log("Fail: ", bufAssess1);
console.log("Pass: ", bufAssess2);
