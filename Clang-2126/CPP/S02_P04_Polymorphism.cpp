#include <iostream>
using namespace std;
// create class
class Math
{
public:
    int add(int a, int b)
    {
        return a + b;
    }

    int add(int a, int b, int c)
    {
        return a + b + c;
    }
};

int main()
{

    // create object for calculator class

    Math m;
    cout << m.add(1, 3) << endl;
    cout << m.add(1, 3, 6) << endl;

    return 0;
}