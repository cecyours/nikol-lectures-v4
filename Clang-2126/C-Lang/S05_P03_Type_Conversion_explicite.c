#include <stdio.h>
int main()
{
    float a = 9.7;
    int b;
    b = (int)a; // explicit conversion from float to int
    printf("Float a = %f\n", a);
    printf("Integer b = %d\n", b);
    return 0;
}
