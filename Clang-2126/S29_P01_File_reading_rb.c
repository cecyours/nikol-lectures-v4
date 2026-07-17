#include <stdio.h>

int main() {
    FILE *fp;
    int arr[5];

    fp = fopen("numbers.bin", "rb");   // binary read

    fread(arr, sizeof(int), 5, fp);

    printf("Numbers in file:\n");

    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    fclose(fp);

    return 0;
}