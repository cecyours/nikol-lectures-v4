#include <stdio.h>
#include <string.h>

int main()
{

    int arr[5] = {14, 21, 36, 42, 58};

    int *ptr = arr;

    printf("First element: %d\n", *ptr);
    printf("Second element: %d\n", *(ptr + 1));
    ptr++;
    ptr++;

    printf("Third element: %d\n", *(ptr + 2));
    printf("Fourth element: %d\n", *(ptr));



}