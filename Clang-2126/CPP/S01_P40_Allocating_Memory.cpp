#include <iostream>
using namespace std;
int main()
{
    int *ptr = new int;
    *ptr = 50;
    cout << "Value: " << *ptr << endl;
    delete ptr;
    cout << "Value: " << *ptr << endl;

    return 0;
}