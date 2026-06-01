#include <stdio.h>
int main()
{
    // 1 = True , 0 = False

    int marks = 85;

    if (marks >= 90)
    {
        printf("Grade : A\n");
    }
    else if (marks >= 75)
    {
        printf("Grade : B\n");
    }
    else if (marks >= 50)
    {
        printf("Grade : C\n");
    }
    else
    {
        printf("Grade : F\n");
    }


    // largest Number 

    int a = 25, b = 40, c = 30;
    if (a > b && a > c)
    {
        printf("a is the largest\n");
    }
    else if (b > a && b > c)
    {
        printf("b is the largest\n");
    }
    else
    {
        printf("c is the largest\n");
    }

    return 0;
}