#include <stdio.h>
#define PI 3.14159

int main()
{
    const int MAX = 100;

    // below line will show error because of MAX is constnat
    // MAX = 34;

    printf("Maximum value  =  %d\n", MAX);
    printf("PI value  =  %f\n", PI);

    return 0;
}
