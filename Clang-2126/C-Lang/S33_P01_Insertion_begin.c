#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *insertionAtBegin(struct Node *head, int value)
{
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;
    return newNode;
};

void display(struct Node *head)
{
    while (head != NULL)
    {
        printf("%d ", head->data);
        head = head->next;
    }
}

int main()
{

    struct Node *head = NULL;

    head = insertionAtBegin(head, 10);
    head = insertionAtBegin(head, 20);
    head = insertionAtBegin(head, 30);

    display(head);
}