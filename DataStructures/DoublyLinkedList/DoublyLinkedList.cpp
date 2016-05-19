#include <bits/stdc++.h>
using namespace std;
 
 
struct Node
{
    int data;
    Node* next;
    Node* prev;
 
    // Constructor
    Node(int data)
    {
       this->data = data;
       next = this;
       prev = this;
    }
};
 
// Class to represent Red-Black Tree
class DoublyLinkedList
{
private:
    Node* root;
public:
    // Constructor
    DoublyLinkedList() { root = NULL; }
    //insert new value into list
    void insert(int n);
    //print all values from root to end;
    void print();
};

// Function to insert a new node with given data
void DoublyLinkedList::insert(int data)
{
    if (root == NULL) { root = new Node(data); return; }
    Node* p = root;
    Node* n = new Node(data);
    n->prev = p->prev;
    n->prev->next = n;
    p->prev = n;
    n->next = p;
}

void DoublyLinkedList::print()
{
    Node* p = root;
    do {
        cout << p->data << " ";
        p = p->next;
    } while (p != root);
    cout << endl;
}



int main()
{
    DoublyLinkedList dll;
    dll.insert(5);
    dll.insert(2);
    dll.insert(22);
    dll.print();
    return 0;
}