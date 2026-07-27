#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, sum = 0;

    printf("Enter THe number : ");
    scanf("%d", &n);

    for (int i = 1; i <= n / 2; i++)
    {
        if (n % i == 0)
        {
            sum += i;
        }
    }

    if (sum == n)
    {
        printf("Yes the number is Perfect");
    }
    else
    {
        printf("No Its not number is Perfect");
    }
}