#include <stdio.h>

void counter()
{ // start block

    static int count = 0;
    count++;
    printf("Count = %d\n", count);

} // end block

int main()
{

    counter(); // 1
    counter(); // 2
    counter(); // 3

    return 0;
}