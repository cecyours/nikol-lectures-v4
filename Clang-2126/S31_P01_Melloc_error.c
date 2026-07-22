#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main()
{

    

    int *ptr = (int *)malloc(1);


    
    if (ptr == NULL)
    {
        printf("Memory allocation failed\n");
        printf("Error : %s\n ", strerror(errno));
        return 1;
    }



    free(ptr);
    return 0;
}