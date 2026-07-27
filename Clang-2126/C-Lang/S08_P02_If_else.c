#include <stdio.h>
int main()
{
    // 1 = True , 0 = False

    int num = 10;

    if (num > 0)
    {
        printf("The number is positive");
    }
    else
    {
        printf("The Number is Nagative");
    }

    int marks = 75;
    if (marks >= 50)
    {
        printf("You passed the exam.\n");
    }   
    else
    {
        printf("You failed the exam.\n");
    }
    return 0;
}