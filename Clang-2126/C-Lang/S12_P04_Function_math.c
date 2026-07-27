#include <stdio.h>
#include <math.h>

int main()
{
    int num = 144;
    double res;

    res = sqrt(num);
    // res = pow(num , 4);

    printf("Square root of %d = %.2f\n", num, res);
    return 0;
}