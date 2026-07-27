#include <stdio.h>

int main()
{
    const int maxInput = 100;
    int i;

    double number, average, sum = 0.0;

    for (int i = 0; i < maxInput; i++)
    {
        printf("%d . Enter a number : ", i);
        scanf("%lf", &number);

        if (number < 0.0)
        {
            goto jump;
        }
        sum += number;
    }

jump:
    average = sum / (i - 1);
    printf("Sum = %.2f\n", sum);
    printf("Average = %.2f", average);

    return 0;

    int counter = 1;

repeat_loop: // Target label placed before the goto statement
    printf("Counter value: %d\n", counter);
    counter++;

    if (counter <= 3)
    {
        goto repeat_loop; // Backward jump creates a loop
    }

    printf("Loop finished.\n");
    return 0;
}