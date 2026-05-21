#include <stdio.h>
int main(void)
{

    int num, count = 0;
    printf("Please Enter an integer :");
    scanf("%d", &num);

    while (num != 0)
    {
        
        num = num / 10;
        count++;
    }

    printf("number has a %d digits", count);

    return 0;
}