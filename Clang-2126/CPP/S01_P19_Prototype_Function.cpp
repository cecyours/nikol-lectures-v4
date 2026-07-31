#include <iostream>
using namespace std;

int multiply(int a, int b);
int main()
{
    int result = multiply(4, 5);
    cout << "Product: " << result << endl;
    return 0;
}

int multiply(int a, int b)
{
    return a * b;
}