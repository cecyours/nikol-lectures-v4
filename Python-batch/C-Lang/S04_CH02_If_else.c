#include <stdio.h>
int main()
{

    // 0 = False
    // 1 = True

    int age;

    printf("Enter age: ");
    scanf("%d", &age);

    if (age >= 18)
    {
        printf("Eligibal to vote\n");
    }
    else
    {
        printf("Not Eligibal to vote\n");
    }

    return 0;
}