#include <iostream>

using namespace std;

class Complex
{
public:
    float real, img;

    Complex() { real = img = 0; }

    Complex(float r, float i)
    {
        real = r;
        img = i;
    }

    Complex operator+(const Complex &c)
    {

        Complex temp;
        temp.real = real + c.real;

        temp.img = img + c.img;
        return temp;
    }

    void display()
    {
        cout << real << " + " << img << "i" << endl;
    }
};

int main()
{

    Complex c1(2 , 3)  ,c2(4 ,  4 ) , c3 ;

    c3 = c1 + c2;

    c3.display();

    return 0;
}