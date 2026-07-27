#include <stdio.h>
#include <string.h>

struct Student
{
    int roll;
    char name[20];
    float marks;
};

void display(struct Student s)
{

    printf("Roll: %d\n", s.roll);
    printf("Name: %s\n", s.name);
    printf("Marks: %.2f\n", s.marks);
}

int main()
{

    struct Student s1 = {101, "Tirth", 24};


    display(s1);
}

// 2 ** 3 => 2 X 2 X 2
// 2 ** 4 => 2 X 2 X 2 X 2
