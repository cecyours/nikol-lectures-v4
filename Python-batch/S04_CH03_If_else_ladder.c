#include <stdio.h>
int main(void)
{

    int marks;
    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    if (marks >= 90)
    {
        printf("Grade A");
    }
    else if (marks >= 80)
    {
        printf("Grade B ");
    }
    else if (marks >= 60)
    {
        printf("Grade C ");
    }
    else if (marks >= 50)
    {
        printf("Grade D ");
    }
    else if (marks >= 33)
    {
        printf("Grade E ");
    }
    else
    {
        printf("Fail");
    }

    return 0;
}