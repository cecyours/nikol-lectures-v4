# JavaScript String Methods 

## 1. Extraction & Splitting

- `slice(start, end)` — Extracts a part of a string (supports negative indices).
- `substring(start, end)` — Similar to `slice`, but treats negative indices as 0.
- `split(separator, limit)` — Breaks a string into an array of substrings.
- `at(index)` — Returns the character at an index (supports negative indexing).
- `charAt(index)` — Returns the character at a specific index.
- `charCodeAt(index)` — Returns the UTF-16 code of the character.
- `codePointAt(pos)` — Returns the Unicode code point (better for emojis).

---

## 2. Searching & Checking

- `includes(searchString, pos)` — Returns `true` if the string contains the search value.
- `indexOf(searchValue, start)` — Returns the index of the first occurrence.
- `lastIndexOf(searchValue, start)` — Returns the index of the last occurrence.
- `startsWith(searchString, length)` — Checks if the string starts with specified characters.
- `endsWith(searchString, length)` — Checks if the string ends with specified characters.
- `match(regexp)` — Retrieves the result of matching a string against a regex.
- `matchAll(regexp)` — Returns an iterator of all results matching a regex.
- `search(regexp)` — Searches for a match and returns the index.

---

## 3. Modification & Formatting

- `replace(search, replacement)` — Replaces the first occurrence.
- `replaceAll(search, replacement)` — Replaces all occurrences.
- `toUpperCase()` — Converts to all uppercase.
- `toLowerCase()` — Converts to all lowercase.
- `trim()` — Removes whitespace from both ends.
- `trimStart()` / `trimLeft()` — Removes whitespace from the beginning.
- `trimEnd()` / `trimRight()` — Removes whitespace from the end.
- `padStart(targetLength, padString)` — Pads the start to reach a specific length.
- `padEnd(targetLength, padString)` — Pads the end to reach a specific length.
- `repeat(count)` — Returns a new string with the original repeated count times.
- `concat(...strings)` — Joins two or more strings together.

---

## 4. Internationalization & Specialized

- `localeCompare(compareString)` — Compares strings for sorting based on language rules.
- `normalize(form)` — Returns the Unicode Normalization Form of the string.
- `toLocaleLowerCase()` / `toLocaleUpperCase()` — Case conversion based on the user's locale.

---

## 5. Static Methods (Used as `String.method()`)

- `String.fromCharCode(...codes)` — Returns a string created from UTF-16 units.
- `String.fromCodePoint(...codes)` — Returns a string created from Unicode code points.
- `String.raw()` — Returns the raw string form of a template literal.

---

## Quick Table Comparison

| Method | Returns | Changes Original? |
|--------|---------|------------------|
| `slice()` | New String | No |
| `split()` | Array | No |
| `indexOf()` | Number | No |
| `includes()` | Boolean | No |
| `trim()` | New String | No |

---

## Example Combined Logic Flow

```javascript
const input = "   hello-world-example   ";

const result = input
  .trim()
  .split("-")
  .map(word =>
    word.charAt(0).toUpperCase() +
    word.slice(1).toLowerCase()
  )
  .join(" ")
  .replace("World", "JS");

console.log(result);
// Hello JS Example
```

## Example Using Search + Replace + Includes

```javascript
let str = "JavaScript is awesome";

if (str.includes("awesome")) {
  str = str.replace("awesome", "powerful");
}

console.log(str);
// JavaScript is powerful
```