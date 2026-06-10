#include <stdio.h>
#include <math.h>

// function initialize
void increment(int *n)
{
    *n += 1;
    printf("Inside function %d\n", *n);
}
int main()
{
    int a = 20;
    printf("%d\n" , &a);
    increment(&a);
    printf("Outside function %d\n", a);

    return 0;
}