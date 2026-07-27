#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, n ;

    printf("Enter THe number : ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        int sum = 0;
        for (int j = 1; j <= i / 2; j++)
        {
            if (i % j == 0)
            {
                sum += j;
            }
        }
        
        if (sum == i)
        {
            printf("%d ", i);
        }
    }
}