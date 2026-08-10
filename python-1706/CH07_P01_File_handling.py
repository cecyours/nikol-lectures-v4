file = open("hello.txt" , 'a')

for i in range(1 , 10):
    
    file.write("_+ " * 10)
    file.write("\n")
    if(i == 5):
        file.write("* " * 10)
        file.write("\n")


file.close()