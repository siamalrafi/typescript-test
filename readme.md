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

```function printData<T>(data: T) {
console.log(data);
}

printData<number>(10); // Prints 10
printData<string>("Hello, world!"); // Prints "Hello, world!"
```

generics in TypeScript to create a class that can work with any type of data

```class UserData<T> {
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
```

## What is the difference between an "unknown" and "any" type in TypeScript?

Here are the differences between TypeScript "unknown" and "any" type ---

-  **"unknown" type:** Safer alternative to "any". Requires type checks and narrowing before operations. Provides better type safety.

-  **"any" type:** Bypasses TypeScript's type checking. Allows any operations without type errors. Sacrifices type safety.

## Can you give an example of how to use enums in TypeScript?

Here are the example of enums in TypeScript ---

```
enum Color {
  Red,
  Green,
  Blue,
}

let bgColor: Color = Color.Blue;

if (bgColor === Color.Red) console.log("Red");
else if (bgColor === Color.Green) console.log("Green");
else if (bgColor === Color.Blue) console.log("Blue");
```

Uses -----

```
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let playerDirection: Direction = Direction.Right;

if (playerDirection === Direction.Up) console.log("Up");
else if (playerDirection === Direction.Right) console.log("Right");
```

## What is the "as" keyword used for in TypeScript?

The `as` keyword in TypeScript is used for type assertions. It tells the compiler that you're sure about the type of a value. Use it like this:

```typescript
let value: any = "Hello, TypeScript!";
let length: number = (value as string).length;
```

Remember, it's a way to override type inference, but be careful to ensure your assertion is correct.

## Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

Certainly, here's a concise explanation:

1. **Using `in` Operator:**
   The `in` operator checks if a property exists in an object. It helps narrow down types based on properties.

```typescript
interface Car {
   brand: string;
   model: string;
}

function displayCarInfo(vehicle: Car | string) {
   if ("brand" in vehicle && "model" in vehicle) {
      console.log(vehicle.brand, vehicle.model);
   } else {
      console.log("Invalid car:", vehicle);
   }
}

displayCarInfo({ brand: "Toyota", model: "Corolla" });
displayCarInfo("Not a car");
```

2. **Using `typeof` Operator:**
   The `typeof` operator checks the type of a value, useful for type guards with primitive types.

```typescript
function printLength(value: string | number) {
   if (typeof value === "string") {
      console.log("Length:", value.length);
   } else {
      console.log("Value is a number:", value);
   }
}

printLength("hello");
printLength(42);
```

These type guards help TypeScript make smarter type inferences and ensure safer code.
