#include <stdio.h>
int main(void)
{
    int age;
    int hasId;

    printf("Enter age: ");
    scanf("%d", &age);
    printf("Do you have ID card? (0/1): ");
    scanf("%d", &hasId);

    if (age >= 18)
    {
        if (hasId == 1)
        {
            printf("Entry allowed\n");
        }
        else
        {
            printf("Entry not allowed\n");
        }
    }
    else
    {
        printf("Under age\n");
    }

    return 0;
}