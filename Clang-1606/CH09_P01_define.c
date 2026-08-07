#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Zoya.h"

//  Defining Constants using #define
#define PI 3.14

//  Function-like Macro
#define SQUARE(x) (x * x)

int main()
{
    float radius = 5;
    float area = PI * radius * radius;
    printf("Area of circle: %.2f\n", area);
    printf("Square: %d\n", SQUARE(5));
}