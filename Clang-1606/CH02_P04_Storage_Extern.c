#include <stdio.h>

int num = 100; // global variable
void display();
int main()
{
    extern int num;
    printf("Num in main = %d\n", num);
    display();
    return 0;
}

void display()
{
    printf("num in display = %d\n", num);
}