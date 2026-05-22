// This is simple hello world program

#include <stdio.h>

#define A 120
#define SUM(x, y) x + y

int i = 10;
void display()
{
    printf("Hello Friend !!!\n");
}

void main()
{

    printf("Hello World\n");
    printf("sum of %d,%d is %d\n", A, i, SUM(A, i));
    display();
}
