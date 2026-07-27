#include <stdio.h>

#define add(a , b) (a + b)

int main()
{
    int a = 10;
    int b = 20;
    int sum =add(a , b);
    printf("The sum of %d and %d is : %d"  , a ,b , sum);
  
}