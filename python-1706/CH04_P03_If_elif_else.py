marks =  int(input("Enter You marks (to get a grade) :" ))

if marks > 100:
    print("Invalid Marks")
elif marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Sorry , Better Luck Next time .🥲")