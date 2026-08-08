#include <iostream>
using namespace std;
// create class
class Animal
{
public:
    void eat()
    {
        cout << "Animal eats food" << endl;
    }
};

class Dog : public Animal
{

public:
    void bark()
    {
        cout << "Dog barks" << endl;
    }

};

int main()
{

    // create object for calculator class

    Dog d;
    d.eat();
    d.bark();
    

    return 0;
}