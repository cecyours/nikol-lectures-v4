name = "khush" # global


def show_message():
    message = "I am here"  # local
    # global name
    name = "kirav"
    print("IN function" , name)
    print("User said " , message)

show_message()





print("Outside of function" , name)
# print("Outside of function" , message)# cant be acceced 
