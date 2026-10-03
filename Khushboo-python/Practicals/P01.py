word = input("Enter Your Name : ")

vowel = "aeiou"


vowelCount = 0

for ch in word:
    if ch in vowel:
        vowelCount+=1

print("Vowel Count" , vowelCount)