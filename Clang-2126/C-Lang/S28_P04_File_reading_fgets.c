#include <stdio.h>

int main()
{
    FILE *fp;
    char line[50];

    fp = fopen("Z_message.txt", "r");

    if (fp == NULL)
    {
        printf("File could not be opened\n");
        return 1;
    }
    printf("File opened successfully\n");

    while (fgets(line, sizeof(line), fp) != NULL)
    {
        printf("%s", line);
    }

    fclose(fp);
}