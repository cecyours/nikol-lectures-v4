#include <stdio.h>

int main()
{

    int x = 10;

    int *ptr = &x;

    printf("Value of x: %d\n", x);
    printf("Address of x: %p\n", &x);
    printf("Value stored in ptr (address of x): %p\n", ptr);
    printf("Value pointed to by ptr: %d\n", *ptr);

    return 0;
}