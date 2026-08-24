class Student:
    # constructure 
    def __init__(self , roll_no , name , age , std , division):
        self.roll_no  = roll_no
        self.name = name
        self.age = age
        self.std = std
        self.division = division

    def display_student(self):
        print("----------")
        print("Name        . " , self.name)
        print("Roll No     . " , self.roll_no)
        print("Age         . " , self.age)
        print("std         . " , self.std)
        print("division    . " , self.division)


class School:
    def __init__(self):
        self.students = []

    def add_student(self):
        print("===== Process To Add Student=====")
        name = input("Enter Your Name : ")
        roll_no = int(input("Enter Roll No : "))
        age = int(input("Enter Your Age : "))
        std = int(input("Enter Your Standard : "))
        division = input("Enter Your Division : ")

        student = Student(roll_no, name ,age , std , division )

        self.students.append(student)

        print("Student Added Successfully.")


    def view_students(self):
        print("===== All Studnets =====")

        for student in self.students:
            student.display_student()

    def search_student(self):
        print("==== Search Student ====")
        roll_no = int(input("Enter The Roll Number . "))

        for student in self.students:
            if student.roll_no == roll_no:
                print("Student Found !")
                student.display_student()
                return
        print("Student Not found .")



school = School()

while True:
    print("-------------------------------")
    print("--------School Managment-------")
    print("-------------------------------")

    print("1. Add Student ")
    print("2. View Student ")
    print("3. Search Student ")
    print("4. Exit ")

    choice  =  input("Please Enter Your Choice ")

    if choice == "1":
        school.add_student()
    elif choice == "2":
        school.view_students()
    elif choice == "3":
        school.search_student()
    elif choice == "4":
        print("Thank You")
        break
    else:
        print("Invalid Choice !😡")






        
    




    
