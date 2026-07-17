#include <stdio.h>
#include <string.h>

int main()
{

    char a[] = "Apple";
    char b[] = "Apple";

    if (strcmp(a, b) == 0)
    {
        printf("Equal\n");
    }
    else
    {
        printf("Not Equal");
    }
}