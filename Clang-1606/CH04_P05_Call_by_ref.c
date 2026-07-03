#include <stdio.h>

void increment(int *num)
{
    *num = *num + 1;
    printf("Inside function: %d\n", *num);
}

int main()
{

    int n = 5;
    increment(&n);


    printf("Value : %d\n", n);
}
