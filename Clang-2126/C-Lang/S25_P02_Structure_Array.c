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

    struct Student s1[3];

    for (int i = 0; i < 3; i++)
    {

        printf("Enter the roll of student %d :", i + 1);
        scanf("%d", &s1[i].roll);

        printf("Enter the name of student %d :", i + 1);
        scanf("%s", &s1[i].name);

        printf("Enter the marks of student %d :", i + 1);
        scanf("%f", &s1[i].marks);
    }

    printf("Student Details:\n");
    for (int i = 0; i < 3; i++)
    {
        printf("Roll: %d\n", s1[i].roll);
        printf("Name: %s\n", s1[i].name);
        printf("Marks: %.2f\n", s1[i].marks);
    }
}


// 2 ** 3 => 2 X 2 X 2
// 2 ** 4 => 2 X 2 X 2 X 2
