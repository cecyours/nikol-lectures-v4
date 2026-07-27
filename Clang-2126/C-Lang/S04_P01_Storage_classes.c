#include <stdio.h>

// -------------------------------
// EXTERN STORAGE CLASS
// -------------------------------

// Global variable (by default extern)
int extVar = 100;

// Function to demonstrate static variable 
void staticDemo()
{
    // STATIC variable retains its value between function calls
    static int count = 0;

    count++;  // Value persists
    printf("Static count = %d\n", count);
}

int main()
{
    // -------------------------------
    // AUTO STORAGE CLASS
    // -------------------------------
    
    auto int a = 10;  
    // 'auto' is default for local variables (optional to write)
    
    printf("Auto variable a = %d\n", a);


    // -------------------------------
    // REGISTER STORAGE CLASS
    // -------------------------------
    
    register int i;
    // Suggests storing variable in CPU register for faster access
    
    printf("Register variable demo: ");
    for(i = 1; i <= 3; i++)
    {
        printf("%d ", i);
    }
    printf("\n");


    // -------------------------------
    // EXTERN STORAGE CLASS
    // -------------------------------
    
    extern int extVar;
    // Refers to global variable declared outside main
    
    printf("Extern variable extVar = %d\n", extVar);


    // -------------------------------
    // STATIC STORAGE CLASS
    // -------------------------------
    
    printf("Static variable demo:\n");
    staticDemo();
    staticDemo();
    staticDemo();
    // Output will show value increasing (retained)


    return 0;
}