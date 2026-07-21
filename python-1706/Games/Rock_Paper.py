a = input("Aarav, do your move (r/p/s): ")
v = input("Vish, do your move (r/p/s): ")
u = input("Umang, do your move (r/p/s): ")

# Aarav wins
if (a == "r" and v == "s" and u == "s") or (a == "p" and v == "r" and u == "r") or   (a == "s" and v == "p" and u == "p"):
    print("Aarav Wins 😁")

# Vish wins
elif (v == "r" and a == "s" and u == "s") or  (v == "p" and a == "r" and u == "r") or  (v == "s" and a == "p" and u == "p"):
    print("Vish Wins 😁")

# Umang wins
elif (u == "r" and a == "s" and v == "s") or  (u == "p" and a == "r" and v == "r") or   (u == "s" and a == "p" and v == "p"):
    print("Umang Wins 😁")

# Draw
else:
    print("It's a Draw 🤝")