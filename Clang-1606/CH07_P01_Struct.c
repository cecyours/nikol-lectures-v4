#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student
{
    int rollNo;
    char name[20];
    float marks;
};

int main()
{
    struct Student s1;

    struct Student s2;

    // Declaration and initialization
    struct Student s1 = {102, "Bob", 90.0};

    s1.rollNo = 101;
    strcpy(s1.name, "Keya");
    s1.marks = 98;

    s2.rollNo = 102;
    strcpy(s2.name, "Vish");
    s2.marks = 66;

    printf("Student Details:\n");
    printf("Roll: %d\n", s1.rollNo);
    printf("Name: %s\n", s1.name);
    printf("Marks: %.2f\n", s1.marks);

    printf("Student Details:\n");
    printf("Roll: %d\n", s2.rollNo);
    printf("Name: %s\n", s2.name);
    printf("Marks: %.2f\n", s2.marks);

    return 0;
}