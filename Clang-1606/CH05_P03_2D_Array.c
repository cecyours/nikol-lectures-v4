#include <stdio.h>

void main()
{

    int arr[2][3] = {
        {1, 2, 3},
        {4, 5, 6}};

    printf("The first element is %d\n", arr[0][0]);
    printf("The first element is %d\n", arr[1][1]);

    for (int i = 0; i <= 1; i++)
    {
        for (int j = 0; j <= 2; j++)
        {
            printf("Element %d %d : %d\n", i, j, arr[i][j]);
        }
    }
}
