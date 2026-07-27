#include <stdio.h>


// Incorrect Macro
// #define SQUARE(x) x * x




// Correct Macro
#define SQUARE(x) ((x) * (x))



int main()
{

    printf("%d\n", SQUARE(5 + 2));
    return 0;
}