## 🔢 1. Fibonacci Series in C

Print first `n` numbers in Fibonacci series.

### 💡 Logic:
- First two numbers: 0, 1
- Next number = sum of previous two

### 💻 Code:
```c
#include <stdio.h>

int main() {
    int n, a = 0, b = 1, next;

    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series:\n");

    for(int i = 1; i <= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }

    return 0;
}
````

---

## 🔍 2. Prime Number Check in C

Check whether a number is prime or not.

### 💡 Logic:

* Prime number is divisible only by 1 and itself
* Check divisibility from 2 to n/2

### 💻 Code:

```c
#include <stdio.h>

int main() {
    int n, i, isPrime = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if(n <= 1) {
        isPrime = 0;
    }

    for(i = 2; i <= n/2; i++) {
        if(n % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if(isPrime == 1)
        printf("Prime Number");
    else
        printf("Not a Prime Number");

    return 0;
}
```

---

## 🔁 3. Palindrome Number in C

Check if a number reads the same forward and backward.

### 💡 Logic:

* Reverse the number
* Compare with original

### 💻 Code:

```c
#include <stdio.h>

int main() {
    int n, original, reversed = 0, remainder;

    printf("Enter a number: ");
    scanf("%d", &n);

    original = n;

    while(n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n = n / 10;
    }

    if(original == reversed)
        printf("Palindrome Number");
    else
        printf("Not a Palindrome");

    return 0;
}
```