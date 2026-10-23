numbers = [8, 3, 6, 1, 9]


for x in numbers:
    print(x * 10)


print(numbers[2])

print(f" &&&& {len(numbers)}")

for v in range(len(numbers)):
    print(f"* - {numbers[v]}")

print(numbers.index(1))


if 6 in numbers:
    print("yes , i am there")
else:
    print("I am not there")



