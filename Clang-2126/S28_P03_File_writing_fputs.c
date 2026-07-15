#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("Z_message.txt", "w");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }
    printf("File opened successfully\n");

    fputs("Welcome To C program\n", fp);
    fputs("File handling example", fp);

    fclose(fp);
}