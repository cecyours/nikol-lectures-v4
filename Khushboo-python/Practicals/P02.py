word = input("Enter Your Sentence : ")

chf = input("Enter A character to find count : ")

chCount = 0

for ch in word:
    if ch == chf:
        chCount+=1

print("Character Count" , chCount)