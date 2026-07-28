#include <stdio.h>
#include <stdlib.h>
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
    printf("Value of f : %f\n", d.f);
    printf("Value of i: %d\n", d.i);


    d.c = 'A'; // Overwrites previous value
    printf("Value of c: %c\n", d.c);


}