#include <stdio.h>
int main()
{
    int a = 10, b = 20;
    int max;

    // if (a > b)
    // {
    //     return a;
    // }
    // else
    // {
    //     return b;
    // }

    max = (a > b) ? a : b;

    printf("The maximum number is %d\n", max);

    int num = 16;

    (num % 2 == 0) ? printf("Even\n") : printf("Odd\n");

    return 0;
}