#include <stdio.h>
#include <string.h>

union Data
{
    int i;
    float f;
    char c;
};

int main()
{

    union Data d;

    d.i = 10;

    printf("Value of i: %d\n", d.i);

    d.f = 220.5;

    printf("Now i: %d (overwritten)\n", d.i);

    printf("Value of f: %.2f\n", d.f);

    d.c = 'A';
    printf("Value of c: %c\n", d.c);


    printf("Now f: %d (overwritten)\n", d.f);

}
