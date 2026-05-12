# Topic: Mutable vs Immutable Types

# --- IMMUTABLE TYPES ---

# Integer immutability - id changes after modification
x = 10
print("x id before:", id(x))
x += 5
print("x =", x)
print("x id after:", id(x))   # different address - new object created

# String immutability
name = "Mary"
print("name id before:", id(name))
name += " Doe"
print(name)
print("name id after:", id(name))   # different address - new object created

# --- MUTABLE TYPES ---

# List mutability - id stays same after modification
numbers = [1, 2, 3]
print("numbers id before:", id(numbers))
numbers.append(4)
print(numbers)
print("numbers id after:", id(numbers))   # same address - same object modified

# Dictionary mutability
student = {"name": "Mary", "age": 20}
print("student id before:", id(student))
student["age"] = 21
print(student)
print("student id after:", id(student))   # same address - same object modified

# --- MUTABLE vs IMMUTABLE IN FUNCTIONS ---

def modify_list(lst):
    lst.append(100)

def modify_number(n):
    n += 50
    return n

my_list = [1, 2, 3]
my_num = 10

modify_list(my_list)
my_num = modify_number(my_num)

print("List after modification:", my_list)    # original list changed
print("Number after modification:", my_num)   # original number not changed unless reassigned
