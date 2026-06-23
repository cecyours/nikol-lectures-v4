#include <stdio.h>

int main()
{

    int arr[5] = {10, 20, 30, 40, 50};

    int i, key = 30, found = 0;

    for ( i = 0; i < 5; i++)
    {
        if (arr[i] == key)
        {
            found = 1;
            break;
        }
    }
    if (found)
        printf("%d found at index %d\n", key, i);
    else
        printf("%d not found\n", key);

    return 0;
}