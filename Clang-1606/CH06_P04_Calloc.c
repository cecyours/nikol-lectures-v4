#include <stdio.h>
#include <stdlib.h>

int main()
{

    int *ptr;
    int n = 5;

    ptr = (int *)  calloc(n  ,  sizeof(int));

    if (ptr == NULL)
    {
        printf("Memory allocation failed\n");
        return 1;
    }

   

    printf("Values in allocated memory: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ptr[i]);
    }


      for (int i = 0; i < 5; i++)
    {
        ptr[i] = (i + 1) * 10;
    }

       

    printf("\nValues in allocated memory: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", ptr[i]);
    }



    free(ptr);
    return 0;

}