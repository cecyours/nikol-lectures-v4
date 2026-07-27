
#include <stdio.h>
#include <stdlib.h>

int main()
{

    int *ptr;
    int n = 5;
    ptr = (int *)calloc(n, sizeof(int)); // Allocates and initializes to 0
    if (ptr == NULL)
    {
        printf("Memory allocation failed\n");
        return 1;
    }
    // Print values (all initialized to 0)
    printf("Values in calloc memory: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ptr[i]);
    }
    free(ptr); // Release memory
    return 0;
}