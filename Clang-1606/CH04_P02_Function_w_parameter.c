

#include <stdio.h>



void add(int a , int b);


int main()
{

    add(10, 30);
    add(55, 45);
    add(60, 88);
    add(33, 77);

}



void add(int a, int b)
{
    int sum = a + b;
    printf("SUM : %d\n", sum);
}