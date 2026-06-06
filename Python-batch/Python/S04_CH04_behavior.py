a = 50
b = a
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))

a += 10
print("After changing a:")
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
