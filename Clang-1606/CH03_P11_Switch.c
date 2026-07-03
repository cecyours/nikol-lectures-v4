#include <stdio.h>

int main()
{

    int a;
    printf("Enter the day :");
    scanf("%d", &a);

    switch (a)
    {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    case 6:
        printf("Saturday");
        break;
    default:
        printf("Invalid day");
        break;
    }

    return 0;
}