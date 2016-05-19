#include <bits/stdc++.h>
using namespace std;
 
 
struct Node
{
    int data;
    Node* left;
    Node* right;
    Node* parent;
 
    // Constructor
    Node(int data)
    {
       this->data = data;
       left = NULL;
       right = NULL;
       parent = NULL;
    }
};
 
// Class to represent Red-Black Tree
class BST
{
private:
    Node* root;
public:
    // Constructor
    BST() { root = NULL; }
    //insert new value into list
    void insert(int data);
    //print all values from root to end;
    void traverse();
    int extractMin();
    int extractMax();
};

void traversal(Node* p){
    if (p->left) {traversal(p->left);}
    cout << p->data << " ";
    if (p->right) {traversal(p->right);}
}

void BST::insert(int data){
    if (root == NULL) { root = new Node(data); return; }
    Node* p = root;
    Node* n = new Node(data);
    Node* y = p;
    while(y){
        p = y;
        if (data < p->data)
            y = p->left;
        else
            y = p->right;
    }
    if (data < p->data){
        p->left = n;
        n->parent = p;
    }
    else{
        p->right = n;
        n->parent = p;
    }
}

void BST::traverse(){
    Node* p = root;
    traversal(p);
    cout << endl;
}

int BST::extractMin(){
    if (root == NULL)
        return -1;
    Node* p = root;
    while (p->left)
        p = p->left;
    if (p == root && p->right != NULL)
        root = p->right;
    else if (p == root && p->right == NULL){
        root = NULL;
        return p->data;
    }
    else{
        if (p->right == NULL)
            p->parent->left = NULL;
        else{
            p->right->parent = p->parent;
            p->parent->left = p->right;
        }
    }
    return p->data;
}

int BST::extractMax(){
    if (root == NULL)
        return -1;
    Node* p = root;
    while (p->right)
        p = p->right;
    if (p == root && p->left != NULL)
        root = p->left;
    else if (p == root && p->left == NULL){
        root = NULL;
        return p->data;
    }
    else{
        if (p->left == NULL)
            p->parent->right = NULL;
        else{
            p->left->parent = p->parent;
            p->parent->right = p->left;
        }
    }
    return p->data;
}



int main(){
    BST bst;
    bst.insert(5);
    bst.insert(1);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(6);
    bst.traverse();
    cout << bst.extractMax() << endl;
    cout << bst.extractMin() << endl;
    cout << bst.extractMax() << endl;
    cout << bst.extractMin() << endl;
    cout << bst.extractMax() << endl;
    cout << bst.extractMin() << endl;
    return 0;
}