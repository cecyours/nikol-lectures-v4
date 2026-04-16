print("CH01 - S02: Type Casting")
print("-" * 28)

# float -> int (decimal part is removed, not rounded)
price = 100.99
price_int = int(price)
print("float -> int:", price, "->", price_int)

# int -> float
num = 5
num_float = float(num)
print("int -> float:", num, "->", num_float)

# number -> string
age = 20
age_str = str(age)
print("int -> str:", age, "->", age_str, "| type:", type(age_str))

# string -> int (must be digits only)
roll_no_text = "101"
roll_no = int(roll_no_text)
print("str -> int:", roll_no_text, "->", roll_no)

# bool() rules (quick check)
# 0, 0.0, "", [], {}, set()  => False
# almost everything else      => True
print("\nbool(0):", bool(0))
print("bool(1):", bool(1))
print("bool(\"\"):", bool(""))
print("bool(\"0\"):", bool("0"))
print("bool([]):", bool([]))
print("bool([0]):", bool([0]))

