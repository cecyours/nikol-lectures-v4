#include <stdio.h>
#include <math.h>

// function initialize
void swap(int a, int b)
{
    int temp = a;
    a = b;
    b = temp;

    printf("inside).a = %d | b = %d\n", a, b);
}
int main()
{
    int a = 20, b = 30;

    swap(a, b);

    printf("outside).a = %d | b = %d\n", a, b);

    return 0;
}