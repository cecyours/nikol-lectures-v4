// Documentation Section
// This program will print hello world

// preprocessor Section
#include <stdio.h>
#define PI 3.14

// Global Variable
int a = 100;

int greet()
{
    int b = 10;
    printf("%d", a);

    // >
    // <

    if (b > 45) // true
    {
        printf("B is grater then 40");
    }
}
// Main section
int main()
{
    printf("Hello world\n");
    greet();
}

// user define functionssection