# Global variable
name = "Aarav"
surname = "Shah"
def display():
    name = "Vish" # Treat as new local variable 
    print(name) # Vish


display()


def greet():
    global surname
    surname = "Jain"
    print(name , surname)


greet()
    

print(name)  #aarav
print(surname)  #aarav


