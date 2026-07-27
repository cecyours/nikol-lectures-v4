#include <stdio.h>

int main()
{
    FILE *fp;
    fp = fopen("student.txt", "w");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }

    printf("File opened successfully\n");

    fprintf(fp, "Name: Alice\n");
    fprintf(fp, "Roll: 101\n");
    fprintf(fp, "Marks: 85.5\n");

    fclose(fp);

}