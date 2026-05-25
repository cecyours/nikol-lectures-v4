#include <stdio.h>
void counter()
{
    static int count = 0; // retains value between calls
    // auto int count = 0; // not retains value between calls

    count++;
    printf("Count = %d\n", count);
}
int main()
{
    counter();
    counter();
    counter();
    return 0;
}
