#include <stdio.h>

int main()
{

    for (int i = 0; i < 6; i++)
    {
        if (i == 3)
            continue;

        printf("%d", i);
    }
}
