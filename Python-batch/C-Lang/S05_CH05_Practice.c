#include <stdio.h>
int main(void)
{

    // int num;
    // printf("Please Enter an integer :");
    // scanf("%d", &num);

    // if (num > 0)
    // {
    //     printf("Number is Positive");
    // }
    // else
    // {
    //     printf("Number is Negative");
    // }

    // if (num % 2 == 0)
    // {
    //     printf("Number is Even");
    // }
    // else
    // {
    //     printf("Number is odd");
    // }

    int num1, num2;
    printf("Please Enter an integer :");
    scanf("%d %d", &num1, &num2);

    if (num1 > num2)
    {
        printf("%d is greater", num1);
    }
    else
    {
        printf("%d is greater", num2);
    }

    return 0;
}