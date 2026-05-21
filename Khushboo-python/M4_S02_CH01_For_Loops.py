# Topic: Python Basics - Loops and Iteration

# 1. Using for loop with range()
print("Printing 'hello' with numbers:")
for i in range(50):
    print(f"hello {i}")


# 2. Iterating through a list
print("\nPrinting items from a list:")
fruits = ["Apple", "Banana", "Mango"]

for fruit in fruits:
    print(fruit)


# 3. Iterating through a string
print("\nPrinting each character of a string:")
word = "string"

for letter in word:
    print(letter)


# 4. Printing even numbers using range()
print("\nPrinting even numbers from 0 to 100:")
for i in range(0, 101, 2):
    print(i)