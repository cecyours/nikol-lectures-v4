#include <stdio.h>

int main()
{
    // ===============================
    // 🔹 C Primitive Data Types
    // ===============================

    // int → stores whole numbers
    int age = 22;
    int marks = 95;

    // float → stores decimal numbers (less precision)
    float height = 5.9;
    float pi = 3.14;

    // double → stores decimal numbers (high precision)
    double price = 3223.23432;
    double exact_pi = 3.1415926535;

    // char → stores single character
    char grade = 'A';
    char symbol = '$';


    // ===============================
    // 🔹 Output (printf)
    // ===============================

    printf("Age: %d\n", age);
    printf("Marks: %d\n", marks);

    printf("Height: %f\n", height);
    printf("Pi (float): %f\n", pi);

    printf("Price: %lf\n", price);
    printf("Exact Pi: %lf\n", exact_pi);

    printf("Grade: %c\n", grade);
    printf("Symbol: %c\n", symbol);


    // ===============================
    // 🔹 Format Specifiers
    // ===============================
    // int    → %d
    // float  → %f
    // double → %lf
    // char   → %c


    // ===============================
    // 🔹 Key Notes
    // ===============================
    // ● int → whole numbers
    // ● float → decimal (less accurate)
    // ● double → decimal (more accurate)
    // ● char → single character


    return 0;
}