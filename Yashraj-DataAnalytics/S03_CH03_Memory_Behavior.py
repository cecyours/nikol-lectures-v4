a  = 50
b = a # b references same object
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
a += 10  # a now references a new object

print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))