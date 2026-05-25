#include <stdio.h>
int main()
{
    int a = 10;
    float b = 3.5;
    float result;
    result = a + b; // int 'a' is promoted to float
    printf("Result = %f\n", result);
    return 0;
}
