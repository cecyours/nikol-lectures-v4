

#include <stdio.h>

int add(int a, int b);

int main()
{

    int sum = add(10, 20);

    printf("SUM : %d\n", sum);
}

int add(int a, int b)
{
    return a + b;
}