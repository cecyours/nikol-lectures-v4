#include <stdio.h>

int main()
{
    FILE *fp;
    fp = fopen("hello.txt", "r");
    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }

    printf("File opened successfully\n");

    fclose(fp);
}