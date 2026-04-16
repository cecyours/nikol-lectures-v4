print("CH01 - S04: Lists")
print("-" * 18)

fruits = ["apple", "banana", "orange"]
print("fruits:", fruits)
print("first item:", fruits[0])
print("last item:", fruits[-1])
print("length:", len(fruits))

# Add items
fruits.append("grape")
fruits.append("kiwi")
print("\nafter append:", fruits)
print("length:", len(fruits))

# Remove items
fruits.remove("banana")
print("\nafter remove banana:", fruits)

# Insert at a position
fruits.insert(1, "mango")
print("after insert mango at index 1:", fruits)

# Slicing
print("\nfirst two:", fruits[:2])

