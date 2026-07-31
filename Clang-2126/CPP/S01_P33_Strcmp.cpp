#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char s1[] = "Apple";
    char s2[] = "Banana";
    int result = strcmp(s1, s2);
    if (result == 0)
    {
        cout << "Strings are equal" << endl;
    }
    else
    {
        cout << "Strings are not equal" << endl;
    }
    return 0;
}