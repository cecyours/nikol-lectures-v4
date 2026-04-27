# JavaScript Array Methods

## 1. Adding & Removing Elements

- `push(...items)` — Adds elements to the end.
- `pop()` — Removes the last element.
- `unshift(...items)` — Adds elements to the beginning.
- `shift()` — Removes the first element.
- `splice(start, deleteCount, ...items)` — Add/remove/replace elements in place.

---

## 2. Extraction & Copying

- `slice(start, end)` — Returns a shallow copy of part of an array.
- `concat(...arrays)` — Merges arrays into a new array.
- `flat(depth)` — Flattens nested arrays.
- `flatMap(callback)` — Maps then flattens one level.
- `toReversed()` — Returns a reversed copy (does not mutate).
- `toSorted(compareFn)` — Returns a sorted copy.
- `toSpliced(start, deleteCount, ...items)` — Immutable version of `splice()`.
- `with(index, value)` — Returns a copy with one element changed.

---

## 3. Searching & Checking

- `includes(value)` — Checks if value exists.
- `indexOf(value)` — First matching index.
- `lastIndexOf(value)` — Last matching index.
- `find(callback)` — First element matching condition.
- `findIndex(callback)` — Index of first match.
- `findLast(callback)` — Last matching element.
- `findLastIndex(callback)` — Index of last match.
- `some(callback)` — `true` if at least one matches.
- `every(callback)` — `true` if all match.

---

## 4. Iteration & Transformation

- `forEach(callback)` — Loops through items.
- `map(callback)` — Creates new transformed array.
- `filter(callback)` — Returns matching elements.
- `reduce(callback, initialValue)` — Reduces to single value.
- `reduceRight(callback, initialValue)` — Reduce from right to left.

---

## 5. Sorting & Reordering

- `sort(compareFn)` — Sorts in place.
- `reverse()` — Reverses in place.
- `fill(value, start, end)` — Fills part of array with value.
- `copyWithin(target, start, end)` — Copies part within same array.

---

## 6. Converting / Joining

- `join(separator)` — Converts array to string.
- `toString()` — Converts to comma-separated string.
- `toLocaleString()` — Locale-aware string conversion.

---

## 7. Iterators

- `entries()` — Returns index-value pairs.
- `keys()` — Returns indexes.
- `values()` — Returns values iterator.

---

## 8. Static Array Methods (Used as `Array.method()`)

- `Array.isArray(value)` — Checks if value is an array.
- `Array.from(iterable)` — Creates array from iterable.
- `Array.of(...items)` — Creates array from arguments.

---

## Quick Table Comparison

| Method | Returns | Changes Original? |
|--------|---------|------------------|
| `map()` | New Array | No |
| `filter()` | New Array | No |
| `slice()` | New Array | No |
| `splice()` | Modified Array | Yes |
| `push()` | New Length | Yes |
| `sort()` | Same Array | Yes |
| `toSorted()` | New Array | No |

---

## Example Combined Logic Flow

```javascript
const nums = [1, 2, 3, 4, 5];

const result = nums
  .filter(n => n % 2 !== 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);

console.log(result);
// 90
```

---

## Example Using Find + Includes + Replace Logic

```javascript
let users = ["Ali", "John", "Sara"];

if (users.includes("John")) {
  users = users.map(name =>
    name === "John" ? "Jack" : name
  );
}

console.log(users);
// ["Ali", "Jack", "Sara"]
```

---

## Mutating vs Non-Mutating

### Mutates Original Array

```javascript
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()
```

### Does NOT Mutate Original

```javascript
map()
filter()
reduce()
slice()
concat()
flat()
toSorted()
toReversed()
toSpliced()
with()
```

---

## Common Interview Comparisons

- `map()` vs `forEach()`
- `filter()` vs `find()`
- `slice()` vs `splice()`
- `find()` vs `findIndex()`
- `some()` vs `every()`
- `sort()` vs `toSorted()`
- `Array.from()` vs `Array.of()`