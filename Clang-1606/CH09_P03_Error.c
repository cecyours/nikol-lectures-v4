#include <stdio.h>
#include <errno.h>


int main()
{
    FILE *fp = fopen("kunafa.txt", "r");

    if(fp == NULL){
        perror("Error Come");
        return 1;
    }

    fclose(fp);
}
