#include <stdio.h>
int main()
{
    int x = 10, y = 20;
    printf("x > 5 && y > 15: %d\n", x > 5 && y > 15); // both true → 1
    printf("x < 5 || y > 15: %d\n", x < 5 || y > 15); // one true → 1
    printf("!(x == 10): %d\n", !(x == 10));           // invert true → 0
    return 0;
}
