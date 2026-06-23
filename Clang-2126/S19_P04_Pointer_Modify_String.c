#include <stdio.h>

int main()
{

    char str[] = "Hello";

    char *ptr = str;

    *ptr = 'J'; // Change first character
    *(ptr + 1) = 'o';



    printf("Modified string: %s\n", str);

    return 0;
}