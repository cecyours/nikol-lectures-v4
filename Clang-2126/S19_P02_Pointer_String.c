#include <stdio.h>

int main()
{

    char str[] = "hello";

    char *ptr = str;

    printf("String using pointer: %s\n", ptr);
    printf("First character: %c\n", *ptr);
    printf("Second character: %c\n", *(ptr + 1));

    return 0;
}