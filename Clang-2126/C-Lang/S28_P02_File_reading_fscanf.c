#include <stdio.h>

int main()
{
    FILE *fp;
    char name[20];
    int roll;
    float marks;
    fp = fopen("student.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }
    printf("File opened successfully\n");

    fscanf(fp, "Name: %s", name);
    fscanf(fp, " Roll: %d", &roll);
    fscanf(fp, " Marks: %f", &marks);

    printf("Name: %s\n", name);
    printf("Roll: %d\n", roll);
    printf("Marks: %.2f\n", marks);

    fclose(fp);
}