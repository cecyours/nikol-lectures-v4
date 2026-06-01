#include <stdio.h>
int main()
{
    // 1 = True , 0 = False

    int num = -10;

    if (num >= 0)
    {
        if (num == 0)
        {
            printf("The number is zero.\n");
        }
        else
        {
            printf("The number is positive.\n");
        }
    }
    else
    {
        printf("The number is Nagative.\n");
    }
}