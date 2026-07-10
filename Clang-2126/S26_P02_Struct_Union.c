#include <stdio.h>
#include <string.h>
struct StudentStruct
{
    int roll;
    char grade;
};
union StudentUnion
{
    int roll;
    char grade;
};
int main()
{
    struct StudentStruct s1 = {101, 'A'};
    union StudentUnion u1;
    u1.roll = 101;
    u1.grade = 'A'; // overwrites roll
    printf("Structure: roll=%d, grade=%c\n", s1.roll, s1.grade);
    printf("Union: roll=%d, grade=%c\n", u1.roll, u1.grade);
    return 0;
}
