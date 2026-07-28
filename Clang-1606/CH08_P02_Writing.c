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

    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            fprintf(fp, "* ");
        }
        fprintf(fp , "\n");
    }
}