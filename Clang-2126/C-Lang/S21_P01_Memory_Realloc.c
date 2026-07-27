
#include <stdio.h>
#include <stdlib.h>

int main()
{

    int *ptr;
    int n = 3;
    ptr = (int *)malloc(n * sizeof(int));
    // Initialize
    for (int i = 0; i < n; i++)
    {
        ptr[i] = i + 1;
    }

    ptr = (int *)realloc(ptr, 5 * sizeof(int));

    ptr[3] = 4;
    ptr[4] = 5;

    for (int i = 0; i < 5; i++)
    {
        printf("%d ", ptr[i]);
    }


    free(ptr);

    return 0;
}