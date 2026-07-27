#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, sub;

    printf("How many students? ");
    scanf("%d", &n);

    printf("How many subjects? ");
    scanf("%d", &sub);

    // Allocate memory
    char *subjects = malloc(sub * sizeof(char));
    int *marks = malloc(n * sub * sizeof(int));

    if (subjects == NULL || marks == NULL)
    {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Input subject names (first character)
    printf("\nEnter first letter of each subject:\n");
    for (int i = 0; i < sub; i++)
    {
        printf("Subject %d: ", i + 1);
        scanf(" %c", &subjects[i]); // Space before %c ignores newline
    }

    // Input marks
    printf("\nEnter Marks:\n");
    for (int i = 0; i < n; i++)
    {
        printf("\nStudent %d\n", i + 1);

        for (int j = 0; j < sub; j++)
        {
            printf("Marks in %c: ", subjects[j]);
            scanf("%d", &marks[i * sub + j]);
        }
    }

    // Display marks
    printf("\n===== RESULT =====\n"); 

    for (int i = 0; i < n; i++)
    {
        printf("\nStudent %d\n", i + 1);

        for (int j = 0; j < sub; j++)
        {
            printf("%c : %d\n", subjects[j], marks[i * sub + j]);
        }
    }

    // Free memory
    free(subjects);
    free(marks);

    return 0;
}