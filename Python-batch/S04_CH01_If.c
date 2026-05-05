#include <stdio.h>
int main()
{

    // 0 = False
    // 1 = True

    int marks;

    printf("Enter Marks :");
    scanf("%d", &marks);


    
    if (marks >= 40)  // false
    {
        printf("Pass\n");
    }

    return 0;
}