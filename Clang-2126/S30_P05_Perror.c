#include <stdio.h>
#include<errno.h>
#include <string.h>


int main()
{

    FILE *fp = fopen("data.txt", "r");

    if (fp == NULL)
    {
        printf("Error code: %d\n", errno);
        printf("Error message: %s\n", strerror(errno));
        perror("File error");
        return 1;
    }

    fclose(fp);

}