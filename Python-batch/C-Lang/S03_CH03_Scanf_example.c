#include <stdio.h>
int main(void)
{
    int a, b;
    printf("Enter two integers: ");
    scanf("%d=%d", &a, &b);
    printf("Subtract: %d\n", a - b);
    printf("Multiply: %d\n", a * b);
    printf("Divide (integer): %d\n", b != 0 ? a / b : 0);
    return 0;
}