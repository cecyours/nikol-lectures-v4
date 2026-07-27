#include <stdio.h>

int main()
{
    int arr[3][3] = {{44, 45, 46}, {57, 58, 59}, {77, 78, 79}};

    // int matrix[2][3] = {1, 2, 3, 4, 5, 6};


    printf("%d\n" , arr[0][0]);
    printf("%d\n" , arr[0][1]);
    printf("%d\n" , arr[0][2]);

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d\n",arr[i][j]);
        }
        printf("\n");
    }
    
    
    return 0;

}
