#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char src[] = "C++";
    char dest[10];
    strcpy(dest, src);
    cout << "Copied String: " << dest << endl;
    return 0;
}