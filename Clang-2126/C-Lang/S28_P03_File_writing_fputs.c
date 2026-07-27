#include <stdio.h>

int main()
{
    FILE *fp;
    int a = 10, b = 20;

    fp = fopen("Z_message.txt", "w");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }
    printf("File opened successfully\n");

    fprintf(fp, "%d + %d = %d\n", a, b, a + b);

    for (int i = 0; i < 10; i++)
    {
        for (int i = 0; i < 10; i++)
        {
            fputs("* ", fp);
        }
        fputs("\n", fp);
    }

    fclose(fp);
}