#include <iostream>
using namespace std;
int main()
{
    int a = 5, b = 10;
    cout << (a > 0 && b > 0) << endl; 
    cout << (a > 0 || b < 0) << endl; 
    cout << !(a > b) << endl;         
    return 0;
}