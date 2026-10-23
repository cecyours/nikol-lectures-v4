# Topic: Python List
# Definition: A list is an ordered, mutable collection that can store multiple values of different data types.

# Creating a List
fruits = ["Kiwi", "banana", "Apple", 3, True]

# Printing the List
print(fruits)

# Accessing List Elements Using Index
print(fruits[0])
print(fruits[3])

# Negative Indexing
print(fruits[-1])

# Updating List Elements
fruits[4] = "vishal"

# append() - Adds an element at the end of the list
fruits.append("Priyank")

# insert() - Adds an element at a specific index
fruits.insert(3, 1001)

# Printing Updated List
print(fruits)

# remove() - Removes a specific element from the list
fruits.remove("vishal")

# pop() - Removes an element at a specific index
fruits.pop(2)

# Printing Final List
print(fruits)