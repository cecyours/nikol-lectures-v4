#include <stdio.h>
int main()
{
    // 1 = True , 0 = False

    // if (1)
    // {
    //     printf("Hello world");
    // }

    int num = 0;

    if (num >= 0)
    {
        printf("Number is Positive\n");
    }

    int number = -5;
    if (number > 0)
    {
        printf("The number is positive.\n");
    }

    int a = 125, b = 10;

    // if (a < b)
    // {
    //     printf("a is less then b ");
    // }

    if (a > b)
        printf("a is greater than b.\n");

    return 0;
}