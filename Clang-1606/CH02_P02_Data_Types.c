#include <stdio.h>

int main()
{

    // 1.int => Integer => %d
    int a = 10;
    int b = 20;
    int c = a + b;

    printf("Value of a is %d\n", a);
    printf("Value of b is %d\n", b);
    printf("The total of a and b is =  %d\n", c);

    // 2.float => %f
    float PI = 3.14;
    float radius = 2.5;
    float area = 3.14 * radius * radius;

    printf("Value of pi: %f\n", PI);
    printf("Radius: %f\n", radius);
    printf("Area: %f\n", area);

    // 3.double => %lf
    double num1 = 3.14159265359;
    double num2 = 2.71828182846;
    double sum = num1 + num2;

    printf("Value of num1: %lf\n", num1);
    printf("Value of num2: %lf\n", num2);
    printf("Sum: %lf\n", sum);

    // 4.char => %c
    char grade = 'a';
    char sym = '#';

    printf("Grade: %c\n", grade);
    printf("Symbol: %c\n", sym);

    return 0;
}