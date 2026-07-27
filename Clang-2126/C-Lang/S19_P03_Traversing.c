#include <stdio.h>

int main()
{

    char str[] = "hello";

    char *ptr = str;

    printf("Characters in string: ");

    while (*ptr != '\0')
    {
        printf("%c", *ptr);
        ptr++; // Move to next character
    }

    return 0;
}