#include <stdio.h>

int main()
{

    int arr[5] = {10, 20, 30, 40, 50};

    int *ptr = arr; // Pointer to first element

    *(ptr + 1) = 80; // Change second element

    printf("First element: %d\n", *ptr);        // 10
    printf("Second element: %d\n", *(ptr + 1)); // 20
    printf("Third element: %d\n", *(ptr + 2));

    printf("Pointer after increment: %d\n", *ptr);

    return 0;
}