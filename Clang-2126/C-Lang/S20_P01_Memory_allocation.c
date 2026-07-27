
#include <stdio.h>
#include <stdlib.h>

int main()
{

    int n = 5;
    int *ptr;

    ptr =  malloc(n * sizeof(int));

    if (ptr == NULL)
    {
        printf("Memory allocation failed\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        ptr[i] = (i + 1) * 10;
    }

    printf("Values in allocated memory: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ptr[i]);
    }

    free(ptr); // Release memory

    return 0;
}