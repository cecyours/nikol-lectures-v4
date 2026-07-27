#include <stdio.h>

int main()
{

    for (int i = 0; i < 10; i++)
    {

        if (i == 5)
            continue;

        if (i == 7)
            break;

        printf("%d\n", i);
    }

    return 0;
}