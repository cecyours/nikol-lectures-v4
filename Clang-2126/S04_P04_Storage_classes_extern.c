#include <stdio.h>
int num = 100; // global variable

void display();
int main()
{
    extern int num; // refers to global variable
    printf("num in main = %d\n", num);
    display();
    return 0;
}
void display()
{
    printf("num in display = %d\n", num);
}