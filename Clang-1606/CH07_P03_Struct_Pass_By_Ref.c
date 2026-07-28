#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student
{
    int rollNo;
    char name[20];
    float marks;
};

void updateMarks(struct Student *s, float newMarks)
{
    s->marks = newMarks;
}





int main()
{
    struct Student s1 = {101, "John", 87.22};
    printf("Before update: %.2f\n", s1.marks);

    updateMarks(&s1, 90);

    printf("After update: %.2f\n", s1.marks);

    return 0;
}