#include <stdio.h>
#include <string.h>

int main()
{

    char src[] = "Hello";
    char dest[20];
    strcpy(dest, src);


    printf("Copied string: %s\n", dest);
    printf("String Length : %i\n", strlen(dest));

}