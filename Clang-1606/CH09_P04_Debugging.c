#include <stdio.h>
int main()
{
    printf("Program started\n");
    int x = 5;
    printf("Before condition\n");
    if (x > 10)
    {
        printf("Inside if block\n");
    }
    else
    {
        printf("Inside else block\n");
    }
    printf("Program ended\n");
    return 0;
}
