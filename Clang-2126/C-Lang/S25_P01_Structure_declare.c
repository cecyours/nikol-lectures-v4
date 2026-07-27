#include <stdio.h>
#include <string.h>

struct Student
{
    int roll;
    char name[20];
    float marks;
};

int main()
{

    struct Student s1 = {11, "Tirth", 78};

    printf("Student Details:\n");
    printf("Roll: %d\n", s1.roll);
    printf("Name: %s\n", s1.name);
    printf("Marks: %.2f\n", s1.marks);
}