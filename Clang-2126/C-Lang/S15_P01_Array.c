#include <stdio.h>

int main()
{

    int numbers[5] = {10, 20, 30, 40, 50};

    // printf("First Element Array is %d\n" , numbers[0]);
    // printf("Fifth Element Array is %d\n" , numbers[4]);

    // numbers[1] = 44;

    // printf("Modified second element: %d\n", numbers[1]); // 25

    for (int i = 0; i < 5; i++)
    {
        printf("Element %d: %d\n", i, numbers[i]);
    }
}
