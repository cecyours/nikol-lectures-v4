# Read File  -> r

textFile = open('zello.txt' , 'a')


data = "This is new added line from python"


textFile.write(data)

textFile.close()