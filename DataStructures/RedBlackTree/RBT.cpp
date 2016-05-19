#include <bits/stdc++.h>
using namespace std;
 
struct Node
{
    int key;
    int end;
    int r;
    bool red;
    Node *left, *right, *parent;
 
    // Constructor
    Node(int key, int end, int r)
    {
       this->key = key;
       this->end = end;
       this->r = r;
       left = right = parent = NULL;
       red = true;
    }
};
 
// Class to represent Red-Black Tree
class RBTree
{
private:
    Node* root;
    Node* sentinel;
public:
    // Constructor
    RBTree() { root = NULL; sentinel = NULL; }
    void insert(int key, int end, int r);
    void leftRotate(Node* x);
    void rightRotate(Node* x);
    void fixup(Node* z);
    void traverse();
    void printRoot();
};

void RBTree::printRoot ()
{
    cout << "root key: " << root->key << endl;
}

// Function to insert a new node with given key
void RBTree::insert (int key, int end, int r)
{

    Node* z = new Node(key,end,r);
    Node* y = sentinel;
    Node* x = root;
    while (x != sentinel){
        y = x;
        if (key < x->key)
            x = x->left;
        else
            x = x->right;
    }
    z->parent = y;
    if (y == sentinel)
        root = z;
    else if (key < y->key)
        y->left = z;
    else
        y->right = z;
    z->left = sentinel;
    z->right = sentinel;
    fixup(z);

}

void RBTree::fixup (Node* z)
{
    while (z->parent && z->parent->parent && z->parent->red){
        if (z->parent == z->parent->parent->left){
            Node* y = z->parent->parent->right;
            if (y && y->red){
                z->parent->red = false;
                y->red = false;
                z->parent->parent->red = true;
                z = z->parent->parent;
            }
            else{
                if (z == z->parent->right){
                    z = z->parent;
                    leftRotate(z);
                }
                z->parent->red = false;
                z->parent->parent->red = true;
                rightRotate(z->parent->parent);
            }
        }
        else {
            Node* y = z->parent->parent->left;
            if (y && y->red){
                z->parent->red = false;
                y->red = false;
                z->parent->parent->red = true;
                z = z->parent->parent;
            }
            else{
                if (z == z->parent->left){
                    z = z->parent;
                    rightRotate(z);
                }
                z->parent->red = false;
                z->parent->parent->red = true;
                leftRotate(z->parent->parent);
            }
        }
    }
    root->red = false;

}

void traversal (Node* p)
{

    if (p->left) {traversal(p->left);}
    cout << p->key << " " << p->end << " " << p->r << endl;
    if (p->right) {traversal(p->right);}

}

void RBTree::traverse ()
{

    Node* p = root;
    traversal(p);
    cout << endl;

}

void RBTree::leftRotate (Node* x)
{

    Node* y = x->right;
    x->right = y->left;
    if (y->left != sentinel)
        y->left->parent = x;
    y->parent = x->parent;
    if (x->parent == sentinel)
        root = y;
    else if (x == x->parent->left)
        x->parent->left = y;
    else
        x->parent->right = y;
    y->left = x;
    x->parent = y;

}

void RBTree::rightRotate (Node* x)
{

    Node* y = x->left;
    x->left = y->right;
    if (y->right != sentinel)
        y->right->parent = x;
    y->parent = x->parent;
    if (x->parent == sentinel)
        root = y;
    else if (x == x->parent->right)
        x->parent->right = y;
    else
        x->parent->left = y;
    y->right = x;
    x->parent = y;

}



int main ()
{
    auto start1 = std::chrono::high_resolution_clock::now();
    RBTree T;
    int i,n,m,start,finish,r,left,right;
    long long int t;
    cin >> n;
    for (i = 0; i < n; i++){
        cin >> t >> start >> r;
        finish = t % 1000000000;
        start = finish - start;
        T.insert(start,finish,r);
    }
    cin >> m;
    for (i = 0; i < m; i++){
        cin >> left >> right;
    }
    auto finish1 = std::chrono::high_resolution_clock::now();
    std::cout << std::chrono::duration_cast<std::chrono::nanoseconds>(finish1-start1).count() << "ns\n";
    return 0;
}