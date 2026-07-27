#include <stdio.h>

#define HOLD

int main()
{

#ifdef HOLD
    printf("Debug Mode is On\n");
#endif

    printf("Program Done");
    return 0;
}