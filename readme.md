## What is TypeScript, and how is it different from JavaScript?

TypeScript is an extension of JavaScript that adds:

1. **Static Typing:** Catching errors early by specifying variable types.
2. **Type Annotations:** Explicitly declaring variable and function types.
3. **Compile-Time Checks:** Detecting issues before runtime.
4. **Interfaces:** Defining object shapes and types.
5. **Modern JavaScript Support:** ES6+ features with static typing.
6. **Tooling:** Enhanced developer tools and IDE support.
7. **Compatibility:** Can gradually integrate with existing JavaScript.
8. **Optional Typing:** Choose when and where to use static typing.

JavaScript is dynamically typed with no built-in support for these features.

## Can you explain the difference between "interface" and "type" in TypeScript?

Interfaces and types are both used to define the shape of data in TypeScript

**Interface:**

-  Focus: Object shapes and contracts.
-  Extensibility: Can be extended and augmented.
-  Use Cases: Defining object structures and class contracts.

**Type:**

-  Focus: General type definitions, including unions and intersections.
-  Extensibility: Cannot be extended after declaration.
-  Use Cases: Creating complex types, unions, intersections, and aliases.

Both are useful, but interfaces are typically for objects and contracts, while types are broader and handle various type definitions.

## Can you give an example of how to use generics in TypeScript?

generics in TypeScript to create a function that can work with any type of data

``function printData<T>(data: T) {
console.log(data);
}

printData<number>(10); // Prints 10
printData<string>("Hello, world!"); // Prints "Hello, world!"
``

generics in TypeScript to create a class that can work with any type of data

`class UserData<T> {
name: string;
rollNo: T;

constructor(name: string, rollNo: T) {
this.name = name;
this.rollNo = rollNo;
}
}

const student = new UserData<string>("John Doe", 12345);
const teacher = new UserData<number>(5, "Mr. Smith");

console.log(student); // UserData { name: "John Doe", rollNo: "12345" }
console.log(teacher); // UserData { name: "Mr. Smith", rollNo: 5 }
`
