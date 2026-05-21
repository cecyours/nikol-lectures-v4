#include <stdio.h>
int main()
{

    int n, i, isPrime = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n <= 1)
    {
        isPrime = 0;
    }

    for (int i = 2; i < n / 2; i++)
    {
        if (n % i == 0)
        {
            isPrime = 0;
            break;
        }
    }



    if (isPrime == 1)
    {
        printf("Prime Number");
    }
    else
    {
        printf("Not Prime Number ");
    }

    return 0;
}