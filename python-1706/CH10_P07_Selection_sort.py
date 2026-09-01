numbers = [64, 25, 12, 22, 11]
n = len(numbers)
for i in range(n):
    min_index = i
    for j in range(i+1, n):
        if numbers[j] < numbers[min_index]:
            print(f"Sorted list at step :{j}",   numbers)
            min_index = j
    numbers[i], numbers[min_index] = numbers[min_index], numbers[i]
print("Sorted list:", numbers)
