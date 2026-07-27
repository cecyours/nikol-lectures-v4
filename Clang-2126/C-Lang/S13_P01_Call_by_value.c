#include <stdio.h>
#include <math.h>

// function initialize
void increment(int n)
{
    return n += 1;
    // printf("Inside function %d\n", n);
}
int main()
{
    int a = 20;
    increment(a);
    printf("Outside function %d\n", a);

    return 0;
}