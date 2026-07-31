#include <iostream>
using namespace std;
int main()
{
    int x = 10;
    int *ptr = &x;
    cout << "Value of x: " << x << endl;
    cout << "Address of x: " << &x << endl;
    cout << "Pointer ptr holds: " << ptr << endl;

    cout << "Value using pointer: " << *ptr << endl;

    return 0;
}