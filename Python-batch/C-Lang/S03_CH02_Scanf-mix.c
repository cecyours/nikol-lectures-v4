#include <stdio.h>

int main()
{
    int number;
    float price;

    printf("Enter The Number  :");
    scanf("%d %f", &number, &price);
    printf("You Print the number %d %2f", number, price);
}