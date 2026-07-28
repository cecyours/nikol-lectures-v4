#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{

    FILE *fp;
    char line[50];

    fp = fopen("hola.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }

    // fputs("Welcome TO CEC", fp);

    while (fgets(line, sizeof(line), fp) != NULL)
    {
        printf("%s", line);
    }

    fclose(fp);
}