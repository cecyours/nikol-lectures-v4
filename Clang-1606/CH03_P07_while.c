#include <stdio.h>

int main()
{
    // int i = 1;
    int num;
    printf("Enter numbers (0 to stop): ");
    scanf("%d", &num);

    // while (i <= 5)
    // {
    //     printf("hello %d\n", i);
    //     i++;
    // }

    while (num != 0)
    {
        printf("You entered: %d\n", num);
        scanf("%d", &num);
    }
    printf("Program terminated.\n");
}
