#include <stdio.h>
int main()
{
    int a = 5;
    printf("a = %d\n", a);

    // Increment
    printf("a++ = %d\n", a++);
    printf("++a = %d\n", ++a);
    printf("After a++: a = %d\n", a);

    // Decrement
    printf("--a = %d\n", --a);        // prefix: decrement then use → 4
    printf("a-- = %d\n", a--);        // postfix: use then decrement → 4
    printf("After a--: a = %d\n", a); // 3
}
