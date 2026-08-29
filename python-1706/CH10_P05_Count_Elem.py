data = "Hippopotomonstrosesquippedaliophobia"
elem = 'o'

counter = 0


for d in data:
    if d == elem:
        counter+=1

print(f"The Count of {elem} is {counter} times")