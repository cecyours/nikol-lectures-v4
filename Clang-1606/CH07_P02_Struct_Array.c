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
    struct Student s[3];

    for (int i = 0; i < 3; i++)
    {
        printf("Enter the Roll No of students %d :", i + 1);
        scanf("%d", &s[i].rollNo);

        printf("Enter the Name of students %d : ", i + 1);
        scanf("%s", s[i].name);

        printf("Enter the marks of students %d : ", i + 1);
        scanf("%f", &s[i].marks);
    }

    for (int i = 0; i < 3; i++)
    {
        printf("Student %d:\n", i + 1);
        printf("Roll: %d\n", s[i].rollNo);
        printf("Name: %s\n", s[i].name);
        printf("Marks: %.2f\n\n", s[i].marks);
    }

    return 0;
}