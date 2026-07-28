#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{

    FILE *fp;

    fp = fopen("hola.txt", "w");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }

    fprintf(fp, "I am here\n");

    fclose(fp);
}