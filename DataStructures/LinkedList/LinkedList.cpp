#include <bits/stdc++.h>
using namespace std;
 
 
struct Node
{
    int data;
    Node* next;
 
    // Constructor
    Node(int data)
    {
       this->data = data;
       next = NULL;
    }
};
 
// Class to represent Red-Black Tree
class LinkedList
{
private:
    Node* root;
public:
    // Constructor
    LinkedList() { root = NULL; }
    //insert new value into list
    void insert(const int n);
    //print all values from root to end;
    void print();
};

// Function to insert a new node with given data
void LinkedList::insert (const int data)
{
    Node** pp = &root;
    while(*pp)
        pp = &((*pp)->next);
    *pp = new Node(data);
}

void LinkedList::print ()
{
    Node** pp = &root;
    while (*pp){
        cout << (*pp)->data << " ";
        pp = &((*pp)->next);
    }
    cout << endl;
}



int main ()
{
    LinkedList ll;
    ll.insert(5);
    ll.insert(2);
    ll.insert(22);
    ll.print();

    return 0;
}