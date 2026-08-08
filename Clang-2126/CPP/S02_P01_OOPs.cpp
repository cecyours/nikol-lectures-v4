#include <iostream>
using namespace std;
// create class
class Calculator {
    public:
        int add(int a , int b){
            return a  + b;
        }
};

int main()
{

    // create object for calculator class
    Calculator c1;


    cout << c1.add(5 , 6);

    return 0;
}