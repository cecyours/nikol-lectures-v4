#include <stdio.h>



void greet(){
    printf("hello\n");
    greet();
}

void main()
{

    greet();

}
