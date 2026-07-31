#include <iostream>
using namespace std;
void changeValue(int &x)
{
    x = 20;
}
int main()
{
    int a = 10;
    changeValue(a);
    cout << "Value of a: " << a << endl;
    return 0;
}