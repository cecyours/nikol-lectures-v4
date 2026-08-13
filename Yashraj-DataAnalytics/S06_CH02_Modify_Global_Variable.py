message = "Python Program is Here"


def display_message():
    global message
    message = "In the function"
    print(message)
    
display_message()


print(message)