#include <stdio.h>

int main()
{
    // -------------------------------
    // PART 1: Implicit Type Conversion
    // -------------------------------

    int a1 = 10;    // Integer variable
    float b1 = 3.5; // Float variable
    float result;   // To store result

    // 'a1' (int) is automatically converted to float
    // because it is added with float 'b1'
    result = a1 + b1;

    printf("=== Implicit Type Conversion ===\n");
    printf("a1 (int) = %d\n", a1);
    printf("b1 (float) = %f\n", b1);
    printf("Result (a1 + b1) = %f\n\n", result);

    // -------------------------------
    // PART 2: Explicit Type Conversion
    // -------------------------------

    float a2 = 9.7; // Float variable
    int b2;         // Integer variable

    // Explicit conversion using type casting
    // Decimal part is truncated (9.7 → 9)
    b2 = (int)a2;

    printf("=== Explicit Type Conversion ===\n");
    printf("a2 (float) = %f\n", a2);
    printf("b2 (int after casting) = %d\n", b2);

    return 0; // End of program
}