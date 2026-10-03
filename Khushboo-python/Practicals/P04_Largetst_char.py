string = input("Enter a string : ")

largest = string[0]

for ch in string:
    if ch > largest:
        largest = ch


print("Largest Char "  , largest)