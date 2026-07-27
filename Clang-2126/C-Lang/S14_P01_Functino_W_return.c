#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

char grade(int marks)
{
    if (marks >= 75)
    {
        return 'A';
    }
    else if (marks >= 50)
    {
        return 'B';
    }
    else
    {
        return 'C';
    }
}

void greet()
{
    printf("Hello C Programmer");
    greet();
}

int main()
{
    // int res;
    // res = add(3.5 , 5.5);
    // printf("The Resut is %d" , res );

    // char g;
    // g = grade(40);
    // printf("The Grade is %c", g);

    greet();

    return 0;
}
