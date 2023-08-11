function reverseArray<T>(...items: T[]): T[] {
   return items.reverse();
}

// Example usage
const mainStrings = ["a", "b", "c", "d", "e"];
const reversedStrings = reverseArray(...mainStrings);

console.log("main:", mainStrings);
console.log("reversed:", reversedStrings);
