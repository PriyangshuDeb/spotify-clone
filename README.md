---
id: zjn31w0pbvgg1ppxkw01trf
title: ARRAY
desc: ''
updated: 1727919709167
created: 1697330635409
---
    ARRAY PROBLEM SOLVING
### DEFINITION
- An array is a series of elements of the same type placed in contiguous memory locations that can be individually referenced by adding an index to a unique identifier.
- When declared globally max array size = 10 ^ 7, when declared inside function max array size = 10 ^ 6
- Array first element is stored in a random **x** memory location then next elements will be stored as x + 1, x + 2, x + 3 ....
- > NOTE: Regular arrays of local scope (inside func) are left uninitialized.

```cpp
    // declare array with garbage values inside
    int arr[10];

    cout<<"Value at 0 index: "<<arr[0]<<endl;

    cout<<"Value at 15 index: "<<arr[15]<<endl;

    // initialize an array 
    int array[4] = {1,26,3,4};
   
    // cout<<array[2]<<endl;
    int n = 4;      //notice that we need to print n =3 for printing int array[4] so n denotes the index 0 1 2 3 = 4 elements
    for(int i =0;i<=n;i++){
        cout<<array[i]<<endl;
    }

    //array with function
    int voidPrint(int arr[], int size){}
```
---

### MAXIMUM ELEMENT IN ARRAY
- we need to include<limits.h> to use INT_MIN 
```cpp
//max function
int getMax(int num[],int n){
    int max = INT_MIN; //initializing max with int = 2^-31
    for(int i = 0; i<n; i++){
        if(num[i] > max){               //suppose num[1,2,3] num[i=1] > max by default
            max = num[i];                // max becomes num[i=1] same loop goes on comparing other elements of string 
        }
    }
    return max;
}
```

### MINIMUM ELEMENT IN ARRAY
- we need to include<limits.h> to use INT_MAX
```cpp
//min function
int getMin(int num[],int n){
    int min = INT_MAX; //initializing max with minimum range of int = 2^-31

    for(int i = 0; i<n; i++){
        if(num[i] < min){
            min = num[i];
        }
    }
    return min;
}
```
---

### SECOND LARGEST ELEMENT IN ARRAY
- > EXAMPLE: {1,5,2,6,2,7,1,7,5}


**Brute force:**  
 TC:  N LOGN + N
1. First sort the array - > {1,1,2,2,5,5,6,7,7}
2. THEN
```cpp
for(int i = size - 1; i>=0; i--){
    if(arr[i] != arr[size-1] or largest){  //size - 2 for two same largest present
        secondLargest = arr[i];
        break;
    }
}
```
**Better:** 
TC: N + N = 2N
1. FIRST FIND LARGEST ELEMENT
```cpp
int largest = arr[0];
for(int i=0; i<n; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
    return largest;
}
```
2. FIND SECOND LARGEST THEN
```cpp
int seclargest = arr[0];
for(int i=0; i<n; i++){
    if(arr[i] > seclargest && arr[i] != largest){
        seclargest = arr[i];
    }
    return seclargest;
}
```
**Optimal:**  
TC: N
Interchanging values between largest and second largest
```cpp
int secondLargest(vector<int> &arr, int n){
    int largest = arr[0];
    int slargest = INT_MIN;
    for(int i = 0; i < n - 1; i++){
        if(arr[i] > largest){
            slargest = largest;
            largest = arr[i];
        }
        else if(a[i] < largest && a[i] > slargest){
            slargest = a[i];
        }
        return slargest;
    }
}
int secondSmallest(vector<int> &arr, int n){
    int smallest = arr[0];
    int ssmallest = INT_MAX;
    for(int i = 0; i < n - 1; i++){
        if(arr[i] < smallest){
            ssmallest = smallest;
            smallest = arr[i];
        }
        else if(a[i] != smallest && a[i] <> ssmallest){
            ssmallest = a[i];
        }
        return ssmallest;
    }
}

vector<int> getSecondOrderElement(vector<int> &a, int n){
    int slargest = secondLargest;
    int ssmallest = secondSmallest;

    return {slargest, ssmallest};
}
```
---

### LINEAR SEARCH
- TC: n
Searching an array in a linear way
```cpp
bool linearSearch(int arr[], int size, int key){
    for(int i=0; i<size; i++){
        if(arr[i] == key){
            return i;
        }    
    }
    return 0;
}             
```
----

### REVERSE ARRAY
1ST METHOD
```cpp
int reverseArray(int arr[], int size){
    int start = 0;
    int end = size-1;
    while(start<=end){
    swap(arr[start],arr[end]);
    start++;
    end--;
    }
}  
```
2ND METHOD
```cpp
int reverseArray(int arr[], int size){

    for(int i = size - 1; i>=0; i--){
        cout<<arr[i];
    }

}  
```
- > NOTE: updating other functions updates the array in main function
---

### SWAP ALTERNATIVE
Swapping alternate element to each other
EX: {1,3,4,5}  --->  {3,1,5,4}
```cpp
void swapAlt(int arr[],int size){
    for(int i = 0; i<size-1; i+=2){
        if(i+1 < size){
            swap(arr[i], arr[i+1]);
        }
    }
}
```
---

### FIND UNIQUE ELEMENTS
n= 2m + 1 where m numbers are present twice and one number is present once
```cpp
#include<iostream>
using namespace std;
int findUnique(int *arr,int size){
    int ans = 0;
    for(int i = 0;i<size;i++){
        ans = ans^arr[i];
    }
    return ans;
}

int main(int *arr,int size){
    int num[5]={2,1,2,3,3};          //Output: 1        
        //only applies when elements cancels out each other
    cout<<findUnique(num,5)<<endl;
}
```
- > Using XOR to find the unique element 
---

### FIND UNIQUE CONCURRENCIES
If no of times a number is repeated is unique - return true else return false.
```cpp
bool uniqueOccurences(vector<int>& arr){
    vector<int> ans;
    int size=arr.size();
    sort(arr.begin(),arr.end()); //Sorting the vector makes it easier to count occurrences of unique elements.
    int i = 0;
    while(i<size){
        int count = 1;     //every element has 1 count by default
        for(int j=i+1; i<size; j++){
            if(arr[i]=arr[j]){
                count++;
            }
            else{
                break;     //if no elements are repeated
            }
        }
        ans.push_back(count);  //push used to store count in another array
        i = i + count; // i is updated to i + count, which moves to the next unique element in the sorted vector.
    }
    size=ans.size();
    sort(ans.begin(),ans.end());
    for(int i = 0;i<size-1;i++){
        if(ans[i]==ans[i+1]){ //checks if the current count is equal to the next count. If they are equal, the function returns false, 
            return false;
        }
    }
    return true;
}
```
---

### CHECK IF ARRAY IS SORTED

```cpp
int isSorted(int n, vector<int> a){
    for(int i = 1; i < n; i++){
        if(a[i] >= a[i-1]){

        }
        else{
            return false;
        }
    }
    return true;

}
```
---

### LEFT ROTATE THE ARRAY BY ONE PLACE
- TC: N
- SC: 1
- arr[ ] = { 1, 2, 3, 4, 5}
- left rotate by 1 place: - { 2, 3, 4, 5, 1}
```cpp
int leftRotate(int arr[], int n){
    int temp = arr[0];     //temp to store 1st element
    for(int i = 1; i<n; i++>){
        arr[i] = arr[i-1];
    }
    arr[n-1] = temp;     //swap last and 1st element
}
```
---

### LEFT ROTATE THE ARRAY BY D PLACES
- arr[] = {1, 2, 3, 4, 5, 6, 7}     
- for d = 2  - > {3, 4, 5, 6, 7}
- for d = 3  - > {4, 5, 6, 7, 1, 2, 3}

**BRUTE FORCE:**
```cpp
- TC: d + (n-d)  + d = n+d
- SC: d + n = n + d
int dRotate(int arr[], int n, int dr){ 
    //storing values in temp
    vector<int> temp;
    for(i = 0;i<d; i++){
        temp.push_back(arr[i]);
    }
    //shifting elements
    for(int i = d; i<n; i++){
        arr[i] = arr[i-d];
    }
    //shifting stored temp
    int j = 0;
    for(int i = n - d; i<n; i++){
        a[i] = temp[j];
        j++;
    }
}
```
**BETTER**
- TC: d + (n-d) + d  =  n +d 
- SC: d
```cpp
int dRotate(int arr[], int n, int d){ 
    //storing values in temp
    vector<int> temp;
    for(i = 0;i<d; i++){
        temp.push_back(arr[i]);
    }
    //shifting elements
    for(int i = d; i<n; i++){
        arr[i] = arr[i-d];
    }
    //shifting stored temp
    for(int i = n - d; i<n; i++){
        a[i] = temp[i - (n-d)]; //since we need values of index of temp as 1, 2, 3...
        j++;
    }
}
```
**OPTIMAL:**
- TC: d + (n-d) + n ---> N
- SC:  1
- 3 REVERSALS
```cpp
int dRotate(int arr[], int n, int d){ 
    //reverse built-in function : reverse(arr, arr+size) - >reverse till arr[0] till array size passed
    reverse(arr,arr+d);   // reverse index 0 to d
    reverse(arr+d,arr+n); // reverse index d to n
    reverse(arr, arr+n);  // reverse index 0 to n
}
```
---

### MOVE ALL ZEROES TO THE END OF ARRAY
- arr[] = {1, 0, 2, 3, 2, 0, 0, 4, 5, 1}

**BRUTE FORCE:**
- TC: n + x + (n-x) ---> n
- SC: x and Worst case: n if no zeroes present
```cpp
int moveZeroes(int arr[], int n){
    vector<int> temp;
    //insert non zero values inside temp
    for(int i = 0; i<n; i++){
        if(arr[i] != 0){
            temp.push_back(arr[i]);
        }
    }

    //insert temp into array
    for(int i = 0; i<temp.size(); i++){
        arr[i] = temp[i];
    }

    //zeroes at end
    for(int i = temp.size() - 1; i<n; i++){
        arr[i] = 0;
    }
}
```
**OPTIMAL:**
- TC: x + (n-x) ---> n
- SC: 1
- 2 pointer approach
- i gets incremented after swapping of non-zero with j
- j always stays on 0 values in index
```cpp
    int moveZeroes(int arr[], int n){
        //pointing i at zero index
        int j = -1;
        for(int i = 0; i<n; i++){
            //j to 0
            if(arr[i] == 0){
                j = i;
                break; // iterate till first 0 presrnt in array
            }
        }    
        //no zeroes in array
        if(arr[i] == -1) return arr; 

        //swap non zero with zero 
        for(int i = j + 1; i<n; i++){
            if(arr[i] != 0){
                swap(arr[i], arr[j]);
                j++;
            }
        }
    }
```
---

### UNION OF TWO SORTED ARRAY WITH NO REPEAT
arr 1 = [1, 1, 2, 4, 5]
arr 2 = [2, 3, 5, 6, 7]

**BRUTE FORCE:**

```cpp
int unionSort(int arr1[], int n, int arr2[], int m){
    // ordered set to put elements in ascending order
    set<int> st;
    for(int i = 0; i<n; i++){
        st.insert(arr1[i]);
    }
    for(int i = 0; i<m; i++){
        st.insert(arr2[i]);
    }
}
```

**OPTIMAL:**
- TC: n1 + n2
- SC: n1 + n2
```cpp
vector<int> unionSort(vectr<int> a, vector<int> b){
    int n1 = a.size();
    int n2 = b.size();

    vector<int> union;

    int i = 0;
    int j = 0;

    //until they remain of same size
    while(i<n1 && j<n2){
        if(arr[i] <= arr[j]){
            if(union.size() == 0 || union.back() != a[i]){
                union.push_back(a[i]);
            }
            i++;
        }
        else{
            if(union.size() == 0 || union.back() != b[j]){
                union.push_back(b[j]);
            }
            j++;
        }
    }
    //when array 1 is exhausted
    while(j<n2){
        if(union.size() == 0 || union.back() != b[j]){
            union.push_back(b[j]);
        }
        j++;
    }
    //when array 2 is exhausted
    while(i<n1){
        if(union.size() == 0 || union.back() != a[i]){
            union.push_back(a[i]);
        }
        i++;
    }
}
```
---

### INTERSECTION OF TWO SORTED ARRAY

**BRUTE FORCE:**
- TC: n1 x n2
- SC: n2
```cpp
vector<int> arrayIntersect(vector<int> &a,int n, vector<int> &b, int m){
    vector<int> ans;
    int vis[m] = {0};
    for(int i = 0; i<n; i++){
        for(int j=0; j<m; j++){
            if(a[i] == b[j] && vis[j] == 0){
                ans.push_back(a[i]);
                vis[j] = 1;
                break;
            }
            if(b[j] > a[i]) break;
        }
    }
}
```

**OPTIMAL:**
- TC: n1 + n2
- SC: 1
```cpp
vector<int> arrayIntersect(vector<int> &a,int n, vector<int> &b, int m){

    int i = 0;
    int j = 0;
    vector<int> ans;

    while(i<n and j<m){
        if(a[i] < b[j]){
            i++;
        }
        if(a[i] > b[j]){
            j++;
        }
        else{
            ans.push_back(a[i]);
            i++;
            j++;
        }
    }
    return ans;
}
```
--- 

### FIND MISSING NUMBER IN AN ARRAY
- arr = [1, 2, 4, 5]  given -> N = 5 
- ans = 3

**BRUTE FORCE:**
TC: n x n
SC: 1
```cpp
int findMissing(int arr[],int n){
    for(int i = 0; i<n; i++){
        int flag = 0;
        for(int j = 0; j<n-1; j++){
            if(arr[j] == i){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            return i;
        }
    }
}
```
**BETTER:**
- TC: 2n
- SC: n
- Using Hashmaps
```cpp
int findMissing(int arr[],int n){
    int hash[n+1] = {0};
    for(int i=0; i<n; i++){
        hash[arr[i]]++;
    }
    for(int i = 0; i <= n; i++){
        if(hash[i] == 0){
            return i;
        }
    }
}
```

**OPTIMAL:**

```cpp
int findMissing(int arr[],int n){
    int sum = n * ((n+1)/2);
    int sum2 = 0;
    for(int i = 0; i < n; i++){
        sum2 += arr[i];
    }
    return sum - sum2;
}
```

```cpp
int findMissing(int arr[],int n){
    int x = 0;
    int x2 = 0;
    for(int i = 0; i<n-1; i++){
        x = x ^ arr[i];
        x2 = x ^ (i+1);
    }
    return x ^ x2;
}
```
---

### MAXIMUM CONSECUTIVE ONES
- arr[] = {1, 1, 0, 1, 1, 1, 0, 1, 1}

```cpp
int maxOnes(int arr[], int n){
    int max = 0;
    int cnt = 0;
    for(int i = 0; i<n; i++){
        if(arr[i] == 1){
            cnt++;
            max = max(max, cnt);
        }
        else{
            cnt = 0;
        }
    }
    return max;
}
```
---

### FIND THE NUMBER THAT APPEARS ONCE
- arr = [1, 1, 2, 3, 3, 4, 4] - >  ans=2

**BRUTE FORCE:**
TC: n ^ 2
SC: 1
```cpp
int apOnce(int arr[], int n){
    int num = 0;
    int count = 0;
    for(int i=0; i<n; i++){
        num = arr[i];
        for(int j=0; j<n; j++){
            if(arr[j] == num){
                count++;
            }
        }
        if(count == 1){
            return num;
        }
    }
}
```

**BETTER:**
- hashmap isnt possible for large nos s we use map
- TC: 3n
- SC: size of max element
```cpp
int apOnce(int arr[], int n){
    int maxe = arr[0];
    for(int i =0; i<n; i++){
        maxe = max(maxe, arr[i]);
    }  
    int hash[maxe] = [0];
    for(int i=0; i<n; i++){
        hash[arr[i]]++;
    }
    for(int i=0; i<n; i++){
        if(hash[arr[i]] == 1){
            return arr[i];
        }
    }
}
```
**OPTIMAL:**
- TC: n
- SC: 1
```cpp
int apOnce(int arr[], int n){
    int xor = 0
    for(int i=0; i<n; i++){
        xor = xor ^ arr[i];
    }
    return xor;
}
```
---

### LONGEST SUBARRAY WITH GIVEN SUM K 
- subarray - contiguous part inside the array
- arr = [1,2,3,4,5] 
- 1, 2 - > subarray
- 3, 4, 5 - > subarray
- 1, 4 - > not subarray

**BRUTE FORCE:**
- TC: n ^ 3 = approx n ^ 2
```cpp
int subArray(int arr[], int n, int K){
    int len = 0;
    for(int i = 0; i<n; i++){
        for(int j = i; j<n; j++){
            int sum = 0;
            for(int k = i; k<j; k++){
                sum += arr[k];
                if(sum == K){
                    len = max(len,j-i+1);
                }
            }
        }
    }
    return len;
}

```  
**BETTER:** FOR ARRAY HAVING NEGATIVES, ZEROES AND POSITIVES
- TC: ordered map: n x logn    | unordered map: n ^ 2
- SC: n
- using hashing where k = 7, x = 3, k - x = 4
```cpp
int longestSubArray(vector<int> arr, long long k){
    map<long long, int> preSumMap;
    int maxLength = 0;
    long long sum = 0;
    for(int i = 0; i<n; i++){
        sum += arr[i];
        if(sum==k){
            maxLength = max(maxLength, i+1);  //i+1 cuz zero based indexing
        }
        long long rem = sum - k;
        if(preSumMap.find(rem) != preSumMap.end()){ // if remaining that is 4 exists in hashmap and not in the end 
            int len = i - preSumMap[rem];
            maxLength = max(maxLength, len); 
        }
        if(preSumMap.find(sum) == preSumMap.end()){
            preSumMap[sum] = i;  // getting index which has sum
        }
    }
    return maxLength;
}
```
- > Initialize a map called preSumMap to store the prefix sum and its corresponding index.

- > The key in this map is the prefix sum of elements encountered so far.
The value associated with each key is the index where that sum was achieved in the arr vector.
Initialize two variables:

- > maxLength to keep track of the length of the longest subarray whose sum equals k. It starts at 0.
sum to keep track of the cumulative sum of elements in the array. It starts at 0.
Loop through the elements of the arr vector using the variable i as an index, ranging from 0 to n-1, where n is the size of the input vector.

- > Inside the loop:

- > Update sum by adding the current element of arr to it, effectively calculating the prefix sum.
Check if sum is equal to k. If it is, this means that the subarray from the beginning up to the current index i has a sum equal to k. In this case, update maxLength to be the maximum of its current value and i + 1 (adding 1 because of zero-based indexing).

- > Calculate the remainder rem by subtracting k from the current sum, which gives you the difference required to reach the target sum k.

- > Check if rem exists as a key in the preSumMap. If it does, this means that there was a previous prefix sum equal to sum - k. In this case, calculate the length of the subarray by subtracting the index at which that previous prefix sum was achieved (retrieved from preSumMap[rem]) from the current index i. Update maxLength to be the maximum of its current value and this length.

- > Update the preSumMap with the current prefix sum sum and its corresponding index i if it doesn't already exist in the map. This keeps track of the first occurrence of each prefix sum.

- > Continue the loop until all elements in the arr vector have been processed.

- > Finally, return the value of maxLength, which represents the length of the longest subarray whose sum equals k.


**OPTIMAL:** FOR ARRAY WITH POSITIVES ONLY
- TC: 2n -> the whole iteration: n   +  inner iteration: n
```cpp
int longestSubArray(vector<int> arr, long long k){
    int left = 0, right = 0;
    long long sum = 0;
    int maxLength = 0;
    int n = arr.size();
    while(right < n){
        while(sum > k){
            sum -= arr[left];
            left++;
        }
        if(sum == k){
            maxLength = max(maxLength, right - left + 1);
        }
        right++;
        if(right < n){
            sum += arr[right];
            }
    }
    return maxLength;
}
```
---

### TWO SUM PROBLEM
- arr[] = [2, 6, 5 , 8, 11]  target = 14  -> 6 + 8
- 1st - > yes or no
- 2nd - > position of elements

**BRUTE FORCE:**
- every element traversed
- TC: n ^ 2
```cpp
vector<int> twoSum(vector<int> arr[], int n, int target){
    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){
            if(i == j) continue;
            else if(arr[i] + arr[j] == target){
                return {i,j};
            }
        }
    }
    return 0;
}

```

**BETTER:**
- hashing
- TC: n * log n
- SC: n
```cpp
vector<int> twoSum(vector<int> arr[], int n, int target){
    map<int, int> mpp;
    for(int i = 0; i<n; i++){
        int a = arr[i];
        int more = target - a;
        if(mpp.find(more) != mpp.end()){
            return "YES"; // if index needed {mpp[more], i};
        }
        mpp[a] = i;
    }
    return "NO";
}

```

**OPTIMAL:** 
- 2 pointer approach - GREEDY APPROACH
- TC: n + nlogn
- SC: 1
```cpp
vector<int> twoSum(vector<int> arr[], int n, int target){
    int i = 0; j = n-1;
    sort(arr.begin(), arr.end())

    while(i<j){
        int sum = arr[i] + arr[j];
        if(sum == target){
            return "YES";
        }
        else if(sum < target){
            i++;
        }
        else{
            j--;
        }
    }
    return "NO";
}

```
---

### SORT 0s, 1s & 2s

**BRUTE FORCE:**
- merge sorting
- TC: nlogn + n -> temp array 

**BETTER:**
- Count 0, 1 & 2
- then for loop and manually overwrite till index = count 
```cpp
int count0 = 0, count1 = 0, count2 = 0
for(int i=0; i<n; i++){
    if(arr[i] == 0){
        count0++;
    }
    else if(arr[i] == 1){
        count1++;
    }
    else{
        count2++;
    }
}
for(int i = 0; i<count0; i++){ //manually putting 0
    a[i] = 0;
}
for(int i = count0; i<count0 + count1; i++){ //manually putting 1 till count 0 index + 1 to count 1 end
    a[i] = 1;
}
for(int i = count0 + count1; i<n; i++){ //remaining elements 2
    a[i] = 2;
}

```

**OPTIMAL:**
>**DUTCH NATIONAL FLAG ALGORITHM**
- TC: n
- SC: n
- 0, low, mid, high, n
- 0 to low - 1 -> 0
- low to mid - 1 -> 1
- mid to high -> random nos in an unsorted way - now entire array is unsorted at first so we **two pointers** take mid and high as 0 and nth index respectively, mid pointer at starting index
- high + 1 to n - 1 -> 2

```cpp
void sortArray(vector<int> &arr, int n){
    int low = 0, mid = 0, high = n-1;
    while(mid <= high)
    {
        if(arr[mid] == 0){
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        }
        else if(arr[mid] == 1){
            mid++;
        }
        else{
            swap(arr[mid], arr[high]);
            high--;
        }
    }
}
```
---

### MAJORITY ELEMENT
**BRUTE FORCE:**
- SC: n ^ 2
```cpp
for(int i=0; i<n; i++){
    int count = 0;
    for(int j = 0; j<n; j++){
        if(arr[j] == arr[i]){
            count++;
        }
    }
    if(count > n/2){
        return arr[i];
    }
}
return -1;

```
**BETTER:**
- hashing
- TC: nlogn + n
- SC: n
```cpp
int majorityElement(vector<int> v){
    map<int, int> mpp;
    for(int i =0; i<v.size(); i++){
        mpp[v[i]]++;
    }
    for(auto it: mpp){
        if(it.second > (v.size()/2)){
            return it.first;
        }
    }
    return -1;
}
```
**OPTIMIZED:**
>MOORE'S VOTING ALGORITHM
```cpp
int majorityElement(vector<int>& nums) {
    int count = 0;     // Initialize a count variable to keep track of occurrences.
    int candidate = 0; // Initialize a candidate variable for the potential majority element.
    for (int num : nums) { // Loop through each number in the 'nums' array.
        if (count == 0) { // If the count is 0, set the current number as the candidate.
            candidate = num;
        //If the count becomes 0, it means that the current candidate is no longer a potential majority element.In this case, a new candidate is chosen from the remaining elements. 
        } 
        if (num == candidate) { // If the current number is the same as the candidate, increment the count.
            count++;
        } else { // If the current number is different from the candidate, decrement the count.
            count--;
        }
    }
    return candidate; // Return the candidate as the majority element.
}
```
---

### MAXIMUM SUBARRAY SUM
**BRUTE FORCE:**
- TC: n ^ 3 = approx n ^ 2
```cpp
int subArray(int arr[], int n){
    int len = 0;
    for(int i = 0; i<n; i++){
        for(int j = i; j<n; j++){
            int sum = 0;
            for(int k = i; k<j; k++){
                sum += arr[k];
                len = max(sum,len);
            }
        }
    }
    return len;
}
```
**BETTER:**
- TC: n ^ 2
```cpp
int subArray(int arr[], int n){
    int len = 0;
    for(int i = 0; i<n; i++){
        int sum = 0;
        for(int j = i; j<n; j++){
            sum += arr[j];
            len = max(sum, len)
        }
    }
    return len;
}
```

**OPTIMAL:**
>**KADANE'S ALGORITHM**
```cpp
long long maxSubarray(int arr[], int n){
    long long sum = 0, maxi = INT_MIN;
    int ansStart = -1;
    int ansEnd = -1;
    for(int i =0; i<n; i++){
        if(sum == 0){
            int start = i;
        }
        sum += arr[i];
        if(sum > maxi){
            maxi = sum;
            ansStart = start;     //nw array can be printed for this index range start to end
            ansEnd = i;
        }
        else if(sum < 0){ // dont carry negatives
            sum = 0;
        }
        else{       // empty or only negative array
            return 0;
        }
    }
}
```
---

### REARRANGE ARRAY ELEMENTS BY SIGN
##### VARIETY 1
- TC: n + n = 2n
- SC: n
- equal +ve and -ve in array
- rearrange by + - + - + -
- arr = [3, 1, -2, -5, 2, -4]

**BRUTE FORCE:**
- +ve  at even index -> array made
- -ve at odd index -> array made 
```cpp
vector<int> pos;
vector<int> neg;
for(int i = 0; i<n; i++){
    if(arr[i] > 0){
        pos.push_back(arr[i]);
    }
    else{
        neg.push_back(arr[i]);
    }
}
for(i = 0; i<n/2; i++){
    arr[2*i] = pos[i];
    arr[2*i +1] = neg[i];
}
```
**OPTIMAL:**
- single for loop
- TC: n
- SC: n
```cpp
vector<int> rearrangeArray(vector<int> &nums){
    int n = nums.size();
    vector<int> ans(n, 0);
    int posIndex = 0;
    int negIndex = 1;
    for(int i=0; i<n; i++){
        if(nums[i] < 0){
            ans[negIndex] = nums[i];
            negIndex += 2
        }
        else{
            ans[posIndex] = nums[i];
            posIndex += 2;
        }
    }
}
```

##### VARIETY 2
- if +ve and -ve elements nt equal then add remaining at end without alterring the order
- arr = [1, 2, -4, -5, 3, 6]
```cpp
vector<int> alternateNumbers(vector<int> &a){
    vector<int> pos, meg;
    int n = a.size();
    for(int i=0; i<n; i++){
        if(a[i] > 0){
            pos.push_back(a[i]);
        }
        else{
            neg.push_back(a[i]);
        }
    }
    if(pos.size() > neg.size()){
        for(int i = 0; i<neg.size(); i++){
            a[2*i] = pos[i];
            a[2*i + 1] = neg[i];
        }
        int index = neg.size() * 2;
        for(int i=neg.size(); i<pos.size(); i++){
            a[index] = pos[i];
            index++;
        }
    }
    else{
        for(int i = 0; i<pos.size(); i++){
            a[2*i] = pos[i];
            a[2*i + 1] = neg[i];
        }
        int index = pos.size() * 2;
        for(int i=pos.size(); i<neg.size();i++){
            a[index] = neg[i];
            index++;
        }
    }
    return a;
}
```
---

### NEXT PERMUTATION
>- AS PERMUTATIONS GOES DOWN NUMBER BECOMES LARGER 123<132<213<231.....
- 1 2 3  
- 1 3 2
- 2 1 3
- 2 3 1
- 3 1 2 
- 3 2 1 


**BRUTE FORCE:** 
- TC: n! x n  -> lots of time
- Create permutations using recursion \ increment all sorted
- linear search
- next index(ans)

**BETTER:**
- use STL library
- TC: n * n!
- SC: 1
```cpp
vector<int> nextGreaterPermutation(vector<int> &a){
    next_permutation(a.begin(), a.end());
    return a;
}
```
**OPTIMAL:**
- TC: n + n + n = 3n
- SC: 1 since im not using extra space


- LONGER PREFIX MATCH (raajnew, raajnex -> common prefix = 'raajne')
- break point a[i] < a[i+1]
- swap arr[i+1] with someone smallest greater element than arr[i]
- place remaining in shortest order
- reverse array after break point to get smallest number as it was in incresing order so its gets sorted
```cpp
vector<int> nextGreaterPermutation(vector<int> &a){
    int index = -1;
    int n = a.size();
    for(int i=n-2; i>=0; i--){
        if(a[i] < a[i+1]){
            index = i;
            break;
        }
    }
    if(index == -1){     //goes to last to first index
        reverse(a.begin(), a.end());
        return a;
    }
    for(int i=n-1; i>=0; i--){
        if(a[i] > a[index]){
            swap(a[i], a[index]);
            break;
        }
    }
    reverse(a.begin() + index + 1, a.end())
    return a;
}
```
---

### LEADERS IN AN ARRAY
- everything on the right of the leader the should be smaller
**BRUTE FORCE:**
- TC: n ^ 2
- SC: n
```cpp
int leader(int arr[], int n){
    vector<int> ans;

    for(int i =0; i<n; i++){
        bool leader = true;
        for(j= i+1; j<n; j++){
            if(a[j] > a[i]){
                leader = false;
                break;
            }
        }
        if(leader == true){
            ans.add(add[i]);
        }
    }
}
```

**OPTIMAL:**
- if index greater than maximum of the whole right side then it is the **leader**
- TC: n + nlogn
- SC: n
```cpp
vector<int> superiorElements(vector<int> &a){
    vector<int> ans;

    int maxi = INT_MIN;
    int n = a.size();
    for(int i= n-1; i>=0; i--){
        if(a[i] > maxi){
            ans.push_back(a[i]);
        }
        //keep track of right maximum
        maxi = max(maxi, a[i]);
    }
    sort(a.begin(), a.end());
    return ans;
}
```
---

### LONGEST CONSECUTIVE SEQUENCE
- arr = [102, 4, 100, 1, 101, 3, 2, 1, 1] -> consecutive sequences  (100, 101, 102) -> length = 3  & (1, 2, 3, 4) -> length = 4 -> longest consecutive sequence

  ---
id: gc3lnerrcdqulxoqe03kwm1
title: BINARY-SEARCH
desc: ''
updated: 1703852608790
created: 1698964378788
---

### DEFINITION
Searching algorithm in a limited search space
- **Real Life example:** Dictionary

### LOWER BOUND
- LOWER BOUND: smallest index such that arr[index] >= x
- lower bound [1, 3, 5, 7, 7] -> if 6 -> lb = 7, if  3 -> lb = 3 , if 7 -> lb = 7 at index 3(smallest index)
> SORTED ARRAY

**BRUTE FORCE:**
- linear search

**OPTIMAL**
TC: log n
-binary search
```cpp
int lowerBound(int arr[], int n, int k){
    int low = 0;
    int high = n-1;
    int ans = 0;
    
    while(low < high){
        int mid = low + (high - low)/2;

        if(arr[mid] >= k){
            ans = mid;
            high = mid - 1; // looks for more smaller index on left
        }
        else{
            low = mid + 1;
        }
    }
}
```

**STL FUNCTION FOR ABOVE CODE:**
```cpp
int lb = lower_bound(arr.begin(), arr.end(),n) - arr.begin()  // lower_bound(arr.begin(), arr.end(),n) gives beginner iterator   and subtracting arr.begin() gives the index
```

### UPPER BOUND 
- TC: log n
- LOWER BOUND: smallest index such that arr[index] > x
- lower bound [1, 3, 5, 7, 7] -> if 6 -> lb = 7, if  3 -> lb = 5 , if 7 -> lb = 7 at index 3(smallest index)
```cpp
int upperBound(int arr[], int n, int k){
    int low = 0;
    int high = n-1;
    int ans = 0;

    while(low < high)[
        int mid = low + (high - low)/2;

        if(arr[mid]  > k){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    ]
}
```
**STL FUNCTION FOR ABOVE CODE:**
```cpp
int lb = upper_bound(arr.begin(), arr.end(),n) - arr.begin()  // lower_bound(arr.begin(), arr.end(),n) gives beginner iterator   and subtracting arr.begin() gives the index
```
---

### SEARCH INSERT POSITION
- where should a number be ideally inserted in an array  we have to return the **index**
- similiar to upper bound

```cpp

int searchInsertPos(int arr[], int n, int k){
    int low = 0;
    int high = n-1;
    int ans = 0;
    
    while(low < high){
        int mid = low + (high - low)/2;

        if(arr[mid] >= k){
            ans = mid;
            high = mid - 1; // looks for more smaller index on left
        }
        else{
            low = mid + 1;
        }
    }
}
```

### FLOOR AND CEIL IN SORTED ARRAY
- **floor** : largest no. in array <= x
- **ceil** : smallest no in array >= x

```cpp
int ceil(int arr[], int n; int x){
    int s = 0;
    int e = n-1;
    int ceil = -1;

    while(s<e){
        int mid = s+ (e-s)/2;

        if(arr[mid] >= x){
            ceil = mid;
            e = mid - 1;
        }
        else{
            s = mid + 1;
        }
    }
}
```
```cpp
int ceil(int arr[], int n, int x){
    int s = 0;
    int e = n-1;
    int floor = -1;

    while(s<e){
        int mid = s+ (e-s)/2;

        if(arr[mid] <= x){
            floor = mid;
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
}
```

### FIRST AND LAST OCCURRENCE IN ARRAY
**BRUTE FORCE:**
- linear

**BETTER:**
- TC: 2 x log n 
- SC: 1
```cpp
int lowerBound(int arr[], int n, int k){
    int s = 0;
    int e = n-1;
    int index = 0;
    
    while(s<e){
        if(arr[mid] >= k){
            index = mid;
            e = mid - 1;
        } 
        else{
            s = mid + 1;
        }
    }
    return ans;
}
int upperBound(int arr[], int n, int k){
    int low = 0;
    int high = n-1;
    int ans = 0;
    while(low < high)[
        int mid = low + (high - low)/2;
        if(arr[mid]  > k){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    ]
}
pair <int, int> firstAndLastPosition(vector<int> &arr, int n, int k){
    int lb = lowerBound(arr, n, k);
    if(lb == n || arr[lb] != x){
        return {-1, -1};
    }
    else{
        return{lb, upperBound(arr, n, k) - 1};  // upper bound index - 1 to get the right element
    }
}
```
**OPTIMAL:**
- TC: 2 x log n
- SC: 1
```cpp
int firstOccurence(int arr[], int n, int k){
    int s = 0;
    int e = n-1;
    int first = -1;
    while(s<e){
        int mid = s + (e-s)/2;
        if(arr[mid] == k){
            first = mid;
            e = mid - 1;
        }
        else if(arr[mid] < k){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    return first;
}
int lastOccurence(int arr[], int n, int k){
    int s = 0;
    int e = n-1;
    int last = -1;
    while(s<e){
        int mid = s + (e-s)/2;
        if(arr[mid] == k){
            last = mid;
            s = mid + 1;
        }
        else if(arr[mid] < k){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    return last;
}
pair<int, int> firstAndLastPosition(vector<int> &arr, int n, int k){
    int first = firstOccurence(arr, n, k);
    if(first == -1) return {-1, -1};
    int last = lastOccurence(arr, n, k);
    return {first, last};
}
```

### COUNT OCCURENCES OF NUMBER IN SORTED ARRAY WITH DUPLICATES
- TC: 2 x log n
- SC: 1
```cpp
int firstOccurence(int arr[], int n, int k){
    int s = 0;
    int e = n-1;
    int first = -1;
    while(s<e){
        int mid = s + (e-s)/2;
        if(arr[mid] == k){
            first = mid;
            e = mid - 1;
        }
        else if(arr[mid] < k){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    return first;
}
int lastOccurence(int arr[], int n, int k){
    int s = 0;
    int e = n-1;
    int last = -1;
    while(s<e){
        int mid = s + (e-s)/2;
        if(arr[mid] == k){
            last = mid;
            s = mid + 1;
        }
        else if(arr[mid] < k){
            s = mid + 1;
        }
        else{
            e = mid - 1;
        }
    }
    return last;
}
pair<int, int> firstAndLastPosition(vector<int> &arr, int n, int k){
    int first = firstOccurence(arr, n, k);
    if(first == -1) return {-1, -1};
    int last = lastOccurence(arr, n, k);
    return {first, last};
}
int count(vector<int> &arr, int n, int x){
    pair<int, int> ans = FirstAndLastPosition(arr, n , x);
    if(ans.first == -1) return 0;

    return ans.second - ans.first + 1;
}
```
---

###  FIRST BAD VERSION
- TC: log n

```cpp
// // The API isBadVersion is defined for you.
// // bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        long long int low = 1, high = n, result = 0;

        while(low <= high){
            int mid = low + (high-low)/2;
            if(isBadVersion(mid) == 1){
                result = mid;
                high = mid - 1; //elimatinate right side to find bad side
            }
            else{
                low = mid + 1; //moving t right side to find bad side
            }
        }
        return result;
    }
};
```
---

### GUESS NUMBER HIGER OR LOWER
- -1: Your guess is higher than the number I picked (i.e. num > pick).
- 1: Your guess is lower than the number I picked (i.e. num < pick).
- 0: your guess is equal to the number I picked (i.e. num == pick).
```cpp
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */
class Solution {
public:
    int guessNumber(int n) {
        int low = 0, high = n, result;

        while(low <= high){
            int mid = low + (high-low)/2;

            if(n == 0){
                result = mid;
            }
            if(n == 1){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }

        }
        return result;
    }
};
```
---

### SEARCH ELEMENT IN ROTATED SORTED ARRAY I
- [4, 5, 1, 2, 3], only unique elements

**BRUTE FORCE:**
-linear search
- TC: n

**BETTER:**
```cpp
int searchRotated(int arr[], int n, int target){
    int s = 0;
    int e = n-1;
    
    while(s<=e){
        int mid = s + (e-s)/2;
        if(arr[mid] == target){
            return mid;
        } 
        //left sorted
        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                e = mid - 1;
            }
            else{
                s = mid + 1;
            }
        }
        //right sorted
        else{
            if(arr[high] >= target && target >= arr[mid] ){
                s = mid + 1;
            }
            else{
                e = mid - 1;
            }
        }
    }
    return -1;
}
```
---

### SEARCH ELEMENT IN ROTATED SORTED ARRAY II
- [3, 4, 5, 1, 2, 3], with duplicates , does it exist or not -> bool
- TC: avg- log n  worst - n/2
```cpp
bool searchRotated(int arr[], int n, int target){
    int s = 0;
    int e = n-1;
    
    while(s<=e){
        int mid = s + (e-s)/2;
        if(arr[mid] == target){
            return true;
        } 
        if(arr[low] == target && arr[high] == target){
            low++;
            high--;
            continue;
        }
        //left sorted
        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                e = mid - 1;
            }
            else{
                s = mid + 1;
            }
        }
        //right sorted
        else{
            if(arr[high] >= target && target >= arr[mid] ){
                s = mid + 1;
            }
            else{
                e = mid - 1;
            }
        }
    }
    return false;
}
```

### FIND MINIMUM IN ROTATED SORTED ARRAY
- unique
- [4, 5, 6, 7, 0, 1, 2, 3] 
**BRUTE FORCE:**
- linear n time

**BETTER:**
- TC: log n
- SC: n
- 1st - 4 5 6 7  
- 2nd - 1 1 2 3
- take the starting element of the sorted array inside the array
```CPP
int findMin(vector<int>& arr){
    int low = 0, high = arr.size() - 1;
    int ans = INT_MAX;
    
    while(low<=high){
        int mid = low + (high-low)/2;
        if(arr[low] <= arr[mid]){
            ans = min(ans, arr[low]);
            low = mid + 1;
        }
        else{
            ans = min(ans, arr[mid]);
            high = mid - 1;
        }
    }
}
```

**OPTIMIZE:**
- log n
```CPP
int findMin(vector<int>& arr){
    int low = 0, high = arr.size() - 1;
    int ans = INT_MAX;
    
    while(low<=high){
        int mid = low + (high-low)/2;

        //low always smaller in a sorted search space
        if(arr[low] <= arr[high]){
            ans = min(ans, arr[low]);
            break;
        }
        // if the left half of the array is sorted
        if(arr[low] <= arr[mid]){
            ans = min(ans, arr[low]);
            low = mid + 1;
        }
        // if the right half of the array is sorted
        else{  // arr[high] > arr[mid]
            ans = min(ans, arr[mid]);
            high = mid - 1;
        }
    }
    return ans;
}
```
---

### HOW MANY TIMES ARRAY HAS BEEN ROTATED
- ind [0, 1, 2, 3] -> rotated 3 times
- arr [3, 4, 5, 1, 2]
- just need to find the index of the minimum element 

```cpp
int timesRotated(vector<int> &arr){
    int low = 0, high = arr.size() - 1;
    int ans = INT_MAX;
    int index = -1;

    while(low <= high){
        int mid = low + (high - low)/2;

        if(arr[low] <= arr[high]){
            if(arr[low] < ans){
                index = low;
                ans = arr[low];
            }
            break;
        }
        if(arr[low] <= arr[mid]){
            if(arr[low] < ans){
                index = low;
                ans = arr[low];
            }
            low = mid + 1;
        }
        else{
            if(arr[mid] < ans){
                index = mid;
                ans = arr[low];
            }
            high = mid - 1;
        }
    }
    return index;
}
```
---

### FINDING SINGLE ELEMENT IN SORTED ARRAY
- arr[] - [ 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
- unique element = 4

**BRUTE FORCE:**
- TC: n
```cpp
int singleElement(int arr, int n){
    if(n==1){
        return arr[0];
    }
    for(int i=0; i<n; i++){
        if(i == 0){
            if(arr[i] != arr[i+1]){
                return arr[0];
            }
        }
        else if(i == n-1){
            if(arr[i] != arr[i-1]){
                return arr[i];
            }
        }
        else{
            if(arr[i] != arr[1+1] && arr[i] != arr[i-1]){
                return arr[i];
            }
        }
    }
}
```
---

**BETTER:**
- binary search
- TC: log n
- arr[] - [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
- 4 is unique
- sequence of index:- (1,1) -> even , odd (2,2) -> even, (5,5) -> odd, even -> **change in order**
> - **even, odd**-> element is in right half
> - **odd, even**-> element is in left half

```cpp
int singleEle(int arr, int n){
    // pre cases
    int low = 1, high = n-1;
    if(n==1){
        return arr[0];
    }
    if(arr[0] != arr[1]){
        return arr[0];
    }
    if(arr[n-1] != arr[n-2]){
        return arr[n-1];
    }
    while(low <=high){
        int mid = low + (high-low)/2;

        if(arr[mid] != arr[mid+1] && arr[mid] != arr[mid-1]){
            return arr[mid];
        }
        //standing on left half and element on right half so eleminate left half
        if(mid%2 == 1 && arr[mid-1] == arr[mid]){
            low = mid + 1;
        }
        //standing on right half and element on left half so eleminate right half
        else{       //if(mid%2 == 0 && arr[mid + 1] == arr[mid]){
            high = mid - 1;
        }
    }
}
```
---

### FIND PEAK ELEMENT 
- visualize a line graph where growth happens and then a point comes when the graph goes down that point is the peak
- array can have multiple peaks
- arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1] -> ans = 8
- arr[] = [1, 2, 1, 3, 5, 6, 4] -> ans = 2
- arr[] = -infinity  [1, 2, 3, 4, 5] - infinity -> ans = 5
- arr[] = [5, 4, 3, 2, 1] -> ans = 5 
> Assume -i to -i

**BRUTE FORCE :**
- TC: n
```cpp
int findPeak(int arr[], int n){
    for(int i=0; i<n; i++){
        if((n==0 || arr[i-1] < arr[i]) && (i== n-1 || arr[i] > arr[i+1])){
            return i;
        }
    }
}
```

**OPTIMAL :** SINGLE PEAK
- TC: log n
- if arr[i]  < arr[i+1] it is in a increasing graph ->go to right side - i
- if arr[i]  > arr[i+1] it is in a decreasing graph ->go to left side  - ii
- return indexes
```cpp
int findPeak(int arr[], int n){
    //edge cases
    if(n == 1){    
        return 0;
    }
    if(arr[0] > arr[1]){
        return 0;
    }
    if(arr[n-1] > arr[n-2]){
        return n-1;
    }
    //binary search
    int low = 1, high = n-2;
    while(low<=high){
        int mid = low + (high-low)/2;

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
            return mid;
        }
        else if(arr[mid] > arr[mid-1]){ 
            low = mid + 1; //refer i
        }
        else{
            high = mid - 1; //refer ii
        }
    }
    return -1;
}
```

**OPTIMAL :** MULTIPLE PEAK
- TC: log n
- code will be almost similiar to the single peak code with 1 change due to a case shown below
- arr - [1, 5, 1, 2, 1]
- mid comes to 1 
- all three if statements as 5>1<2
- this creates an infinite loop in the search
> this case happens mid falls to the the most lowest point in graph
```cpp
int findPeak(int arr[], int n){
    //edge cases
    if(n == 1){    
        return 0;
    }
    if(arr[0] > arr[1]){
        return 0;
    }
    if(arr[n-1] > arr[n-2]){
        return n-1;
    }
    //binary search
    int low = 1, high = n-2;
    while(low<=high){
        int mid = low + (high-low)/2;

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
            return mid;
        }
        else if(arr[mid] > arr[mid-1]){ 
            low = mid + 1; //refer i
        }
        else if(arr[mid] > arr[mid+1]){
            high = mid - 1; //refer ii
        }
        else{
            low = mid + 1; 
            // high = mid - 1; can go to left or right side
            // we can go to left side peak or the right side peak
        }
    }
    return -1;
}
```
---

### FIND SQRT OF AN INTEGER
-
**BRUTE FORCE**
```cpp
int sqrt(int n){
    int ans = 0;
    for(int i=0; i<n; i++){
        if(i*i <= n){
            ans = i;
        }
        else{
            break;
        }
    }
}
```

**OPTIMAL**
- low,mid and high are at same position finally, high reaches a point when it ends up pointing to a number which is greater square then it crosses low and reaches t the previus element as high = mid-1
```cpp
int sqrt(int n){
    int low = 1, high = n;

    while(low<=high){
        long long mid = low + (high-low)/2;
        long long val = (mid*mid)
        if(val <= n){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return high;
}

```
---

### FIND NTH ROOT OF AN INTEGER
- n=3 m=27 cuberoot = 3(ans)
```cpp
// BINARY EXPONENTIATION FUNCTION - TC: log n
int func(int mid, int n){
    long long ans = 1;
    while(n>0){
        if(n % 2 == 1){
            ans = ans * mid;
            n = n - 1;
        }
        else{
            mid = mid * mid;
            n = n/2;
        }
    }
    return ans;
}

//NORMAL FOR LOOP POWER FUNC
int funcTwo(int mid, int n, int m){
    long long ans = 1;
    for(int i=0; i<=n; i++){
        ans = ans * mid;
        if(ans > m) return 2; 
    }
    if(ans == m) return 1;
    return 0;
}
int NthRoot(int n, int m){
    int low = 1, high = m;
    while(low<=high){
        int mid = low + (high-low)/2;
        int midN = func(mid, n, m);
        if(midN == 1){
            return mid;
        }
        else if(midN == 0){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return -1;
}
```
---

### KOKO EATING BANANAS
- Return the minimum integer K(no of bananaas to eat per hour) such that Koko can eat all bananas within h hours
- arr - [3, 6, 7, 11],  maximum hours that can be taken = 8 
- let **4 bananas/hr**
- before taking ceiling hrs = ceil[0.75, 1.5, 1.75, 2.75]
- so hrs taken =[1,2,2,3] = 1+2+2+3 = 8;
- (4 is the answer)

**BRUTE FORCE**
-   TC: maxArr() * n -> time limit exceeded
```cpp
int maxArr(int arr[], int n){
    int max = INT_MIN;
    for(int i=0; i<n; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

int reqTime(int arr[], int n, int h){
    int totalhrs = 0;
    int maxEl = maxArr(arr, n);
    for(int i=0; i<maxArr){
        totalhrs += ceil(arr[i]/hourly);
    }
    return totalhrs;
}

int nBananas(int arr[], int n, int h){
    int maxEl = maxArr(arr, n);

    for(int i=0; i<=maxEl; i++){

        int time = reqTime(arr,n, h);
        if(time <= h){
            return i;
        }
    }
}
```
---

**OPTIMAL**
- TC: n x log(maxelement)
- answer lies in range of max pile of bananas
- until 3 b/h it is not possible after 4 b/h it is possible within 8 hrs.
- so 1,2,3 -> n0 
- & 4,5...max -> yes
- low and high are opposite polarity
- initially low was at impssible and high was at possible
- but at the end of binary search polariy changes high comes t impossible and low goes to pssible polarity
- so we return low
```cpp
int findMax(vector<int> &arr){
    int maxi = INT_MIN;
    int n = v.size();
    for(int i=0; i<n; i++){
        maxi = max(maxi, arr[i]);
    }
    return maxi;
}
int calculateTotalHours(vector<int> &v, int hourly){
    int totalH = 0;
    int n = arr.size();
    for(int i=0;i<n;i++){
        totalH += ceil((double)arr[i]/(double)hourly); //convert to double 
    }
    return totalH;
}
int minimumRateToEatBananas(vector<int> arr, int h){
    int low = 1, high = findMax(arr);
    while(low<=high){
        int mid = low + (high-low)/2;
        int totalH = calculateTotalHours(v, mid);
        if(totalH <= h){ 
            high = mid - 1; //the more right side the less the totalH but we need the min k so we elimate right
        }
        else{
            low = mid + 1; // search right side when totalH exceeds maximum given hour  
        }
    }
    return low;
}
```
---

### MINIMUM DAYS TO FIND M BOUQETS
- BLOOM DAYS = [7, 7, 7, 7, 13, 11, 12, 7] 
- m(no of boquets) = 2, k(adjacent flowers req.) = 3
- 3 adjacent flowers ->  1 bouqets
- 1 = possible, 0 = not possible
- 12 days -> [1, 1, 1, 1, 0, 1, 1, 1] -> 2 adjacent pattern on index(0,1,2) & (5,6,7)
- 12 days is answer
- before 12 days no 3 adjacent flowers boomed
- after 12 days all 3 adjacent flowers will boom
- so we apply binary search

**BRUTE FORCE**
- TC: O(max - min - 1) x O(n)
```cpp
bool isPossible(int arr[], int day, int m, int k){
    int cnt = 0;
    int noOfBouqets = 0;
    for(int i = 0; i<arr.size()){
        if(arr[i] <= day){
            cnt++;
        }
        else{
            noOfBoquets += (cnt/k); // 4/3 = 1 -> 1 b in first 4 index until arr[i] > arr[i]
            cnt = 0;
        }
        noOfBoquets += (cnt/k);
    }
    if(noOfBoquets >= m){
        return true;
    } 
    else{
        return false;
    }
}
//min and max func to be created

int minimumDays(int arr[], int m, int k){
    for(int i = min(arr, n); i<=max(arr,i); i++){
        if(isPossible(arr, i, m, k) == true){
            return i;
        }
    }
    return -1;
}
```

**OPTIMAL**
- TC: n x log(max - min + 1)
```cpp
bool isPossible(int arr[], int day, int m, int k){
    int cnt = 0;
    int noOfBouqets = 0;
    for(int i = 0; i<arr.size(); i++){
        if(arr[i] <= day){
            cnt++;
        }
        else{
            noOfBoquets += (cnt/k); // 4/3 = 1 -> 1 b in first 4 index until arr[i] > arr[i]
            cnt = 0;
        }
        noOfBoquets += (cnt/k);
    }
    if(noOfBoquets >= m){
        return true;
    } 
    else{
        return false;
    }
}

//min and max func to be created

int search(int arr[], int r, int b){
    long long val = r * 1LL * b * 1LL;

    int mini = INT_MAX, maxi = INT_MIN;
    for(int i=0; i<arr.size();i++){
        mini = min(mini, arr[i]);
        maxi = max(maxi, arr[i]);
    }
    
    int low = mini, high = maxi;
    while(low<=high){
        int mid = low + (high-low)/2;
        if(possible(arr, mid, r, b)){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans; //can also return low
}
```
---

### FIND THE SMALLEST DIVISOR GIVEN A THRESHOLD VALUE
- arr[] - [1, 2, 5, 9] threshold = 6
- For 5-> ceil[1/5, 2/5, 5/5, 9/5] = [1, 1, 1, 2] = 1+1+1+2 = 5
- 5 <= 6 (5 is the smallest divisor)
- when we take number greater than 5 all satisty the threshold condition <= 

- arr[] - [1, 2, 5, 9] threshold = 7
- For 3-> ceil[1/3, 2/3, 5/3, 9/3] = [1, 1, 2, 3] = 1+1+2+3 = 7
- 7 = 7(3 is the smallest divisor)
- when we take number greater than 3 all satisty the threshold condition <= 

- search space - 0 to 9(highest elem)

**BRUTE FORCE**
- TC: max x n
```cpp
int smallestDivisor(int arr[],int n, int threshold){
    for(int d = 1; d<= max(arr, n); d++){
        int sum = 0;
        for(int i=0; i < n; i++){
            sum += ceil(arr[i]/d);
        }
        if(sum <= threshold){
            return d;
        }
    }
    return -1;
}
```

**OPTIMAL**

```cpp
int sumByD(int arr[], int n, int div){
    int sum = 0;
    for(int i=0; i<max(arr,n); i++){
        sum += ceil((double)(arr[i])/(double)(div)); //typecast
    }
    return sum
}
int smallestDivisor(int arr[], int n, int threshold){
    int low = 1, int high = max(arr, n);  
    while(low<=high){
        int mid = low + (high-low)/2;
        if(sumOfD(arr, n, mid) <= threshold){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}
```
---

### LEAST CAPACITY TO SHIP PACKAGES WITHIN D DAYS
- weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   days = 5
- here 15 = least capacity because:-
- 1st day -> [1, 2, 3, 4, 5]
- 2nd day -> [6, 7]
- 3rd day -> [ 8 ]
- 4th day -> [ 9 ]
- 5th day -> [ 10 ]

**BRUTE FORCE**
- TC: (sum-max + 1) x n = n^2
```cpp
int daysReq(vector<int> &wt, int cap){
    int day = 1;
    int load = 0;
    for(int i=0; i<wt.size()-1;i++){
        if(load + wt[i] > cap){ //1+2+3+4+5+6 > 15
            day=day+1; //next day 2
            load = wt[i]  // load = 6
        }
        else{
            load += wt[i]; // load -> 6 + 7 < 15
        }
    }
    return day;
}

int leastCap(vector<int> &arr, int days){
    int maxi = 0;
    int sum = 0;
    for(int i=0; i<arr.size(); i++){
        maxi = max(maxi, arr[i]);
        sum += arr[i];
    }

    for(int c=maxi; i<sum; i++){
        if(daysReq(arr, i)<=days){
            return daysReq;
        } 
    }
    return -1;
}
```

**OPTIMAL**
```cpp
int daysReq(vector<int> &wt, int cap){
    int day = 1;
    int load = 0;
    for(int i=0; i<wt.size()-1;i++){
        if(load + wt[i] > cap){ //1+2+3+4+5+6 > 15
            day=day+1; //next day 2
            load = wt[i]  // load = 6
        }
        else{
            load += wt[i]; // load -> 6 + 7 < 15
        }
    }
    return day;
}

int leastCap(vector<int> &arr, int days){
    int maxi = 0;
    int sum = 0;
    for(int i=0; i<arr.size(); i++){
        maxi = max(maxi, arr[i]);
        sum += arr[i];
    }

    int low = maxi, high = sum;

    while(low<=high){
        int mid = low + (high-low)/2;

        if(daysReq(arr, mid) > days){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}
```
---

### FIND KTH MISSING NUMBER
- arr[] = [2, 3, 4, 7, 11], k = 5 -> 5th missing no,
- nos[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- missing nos. = 1,5,6,8,9,10 
- 5th missing no= 9(ans)

**BRUTE FORCE**
- TC: n

- [5, 7, 9, 10] -> k = 3 
- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> answer is 3 in 3rd place
- [1, 2, 3, 4, 5, 6, 7, 8] -> answer is 3 in 3rd place

- [5, 7, 10, 11] -> k = 5
- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] ->   ans= 5 + 1(5) = 6(ans)

- so numbers that are lesser than k will take its place
- [2, 3, 4, 7, 11] -> k=5
- ans = 5 + 1(2) + 1(3) + 1(4) + 1(7)  = 9(ans )
- -> +1 = 1 place in array
```cpp
int kMissing(vector<int> &arr, int k){
    for(int i=0; i<arr.size(); i++){
        if(arr[i] <= k){
            k++;
        }
        else{
            break;
        }
    }
}
```

**OPTIMAL**
- TC: log n
- arr - [1, 2, 3, 4, 5]  we know ideally first 5 index should be this
- arr - [2, 3, 4, 7, 11], k=5
- so in 7 ideally 4 should be present here so midssing nos before 7 = 7-4 = 3
- 3 missing nos come before 7
- for 11-> 5 should be there so 11-5 = 6 -> 6 numbers missing
- number - index of number + 1 = missing nos. that comes b4
- we know **k = 5, so it will lie between index of 7 and 11**
- more req = **k** - number - index of number + 1 = missing nos.  
- to find no ->  ans = missing + numbers required more req
- ans = number + (**k** - number - index of number + 1 = missing nos.)
- ans = index of number + k + 1 (for high =index)
- ans = index + 1(for low = index)

```cpp
int totalMissing(vector<int> &arr, int k){
    int low = 0, high = arr.size() - 1;
    while(low <= high){
        int mid = low + (high-low)/2;
        int missing = arr[mid] - (mid + 1);
        if(missing > k){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return high + 1 + k; //or low + k
}
```
---

### AGGRESIVE COWS
- **return minimum** distance between any two cows is **maximum**
- between two consecutive cows
- **non sorted array**
- arr[] - [0, 3, 4, 7, 10, 9], cows = 4
- **sort[]** - [0, 3, 4, 7, 9, 10]
- placed- [c, ., c, c, .., c]
- distance c1-c2=4, c2-c3=3, c3-c4=3 || **minimum distance = 3**(ans)
- search space - [1(distance between cows), (max-min)]

**BRUTE FORCE**
- TC: (max-min) x n
- SC: 1
- we take a distance try to maintain it as a min distance
- sort[] - [0, 3, 4, 7, 9, 10], cows = 4
- **FOR D = 2** :-
- arr[] - [c, c, ., c, c, .]
- **FOR D = 3** :-
- arr[] - [c, c, ., c, ., c] - min distance = 3(**ans**)

```cpp
bool isPlaceable(vector<int> &arr, int distance, int cows){
    int cntcows = 1; // first cows always stays in first index
    int precow = arr[0]; //coordinate of previous cow
    for(int i=1; i<arr.size(); i++){
        if(arr[i] - precow >= distance){
            cntcows += 1;
            precow = arr[i];
        }
        if(cntcows >= cows){ // if we can insert req cows while the minimum distance return true
            return true;
        }
        else{
            return false
        }
    }
}
int aggressiveCows(vector<int> &arr, int cows){
    sort(arr.begin(), arr.end());
    for(int i=1, i<=arr[0] - arr[arr.size() - 1]; i++){        // i < max - min
        if(isPlaceable(arr, i, cows)){
            continue;
        }
        else{
            return(i-1);  // we not possible return previous value
        }
    }
    return -1;
}
```

**OPTIMAL**
- TC: log(max - mini) x n
```cpp
bool isPlaceable(vector<int> &arr, int distance, int cows){
    int cntcows = 1; // first cows always stays in first index
    int precow = arr[0]; //coordinate of previous cow
    for(int i=1; i<arr.size(); i++){
        if(arr[i] - precow >= distance){
            cntcows += 1;
            precow = arr[i];
        }
        if(cntcows >= cows){ // if we can insert req cows while the minimum distance return true
            return true;
        }
        else{
            return false;
        }
    }
}
int aggresiveCows(vector<int> &arr, int cows){
    sort(arr.begin(), arr.end());
    // low can be min f all consecutive distance differences
    int low = 1;
    int high = arr[n-1] - arr[0]; //max - min
    while(low<=high){
        int mid = low + (high-low)/2;
        if(isPlaceable(arr, mid, cows)){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return high;
}
```
---

### BOOK ALLOCATION
- arr[] - [25, 46, 28, 49, 24]
- here n = 5 books , no of pages = 25, 46, 28, 49, 24
- no of students  **m** = 4

- rules of allocation of books :- 
1. - each student gets one book
2. - each book to only 1 student
3. - allocation in contiguous manner
4. - **allocate the books in a way such that which maximum no. of pages assigned to student is minimum**
- lets assign pages to students
- s1 = 25, s2 = 46, s3 = 28, s4 = 49+24     || **max pages** = 73
- s1 = 25, s2 = 46, s3 = 28+49, s4 = 24     || **max pages** = 77
- s1 = 25, s2 = 46+28, s3 = 49, s4 = 24     || **max pages** = 74
- s1 = 25+46, s2 = 28, s3 = 49, s4 = 24     || **max pages** = 71(**minimum**) -> answer
- made possible to 4 students

- if no of students > no of books -> not possible
**BRUTE FORCE**
- TC: (sum - (max+1)) x n
```cpp
int nPages(int arr[], int pages){
    int studentcnt = 1;
    int pages = 0;
    for(int i=0; i<arr.size(); i++){
        if(pages + arr[i] <= pages){ //if pages can be fitted in give page to student
            pages += arr[i];
        }
        else{
            studentcnt++; //next student
            pages = arr[i]; //give pages stored in previous if statement to the next student 
        }
    }
    return studentcnt;
}
int bookAllocation(vector<int> &arr, int n, int m){
    if(m>n) return -1;
    int maxi = 0;
    int sum = 0;
    for(int i=0; i<arr.size(); i++){
        maxi = max(maxi, arr[i]);
        sum += arr[i];
    }
    for(int i=maxi; i<sum; i++){
        int low = maxi;  //if same no of books and students so ans will be the max page book nothing req to be added
        int high = sum(arr);
        for(int p=low; p<=high; p++){
            int cntstudent = nPages(arr, p);
            if(cntStudent == m){
                return p;
            }
        }
    }
}
```

**OPTIMAL**
- TC:  log (sum-(max+1)) x n
```cpp
int nPages(int arr[], int pages){
    if()
    int studentcnt = 1;
    int pages = 0;
    for(int i=0; i<arr.size(); i++){
        if(pages + arr[i] <= pages){ //if pages can be fitted in give page to student
            pages += arr[i];
        }
        else{
            studentcnt++; //next student
            pages = arr[i]; //give pages stored in previous if statement to the next student 
        }
    }
    return studentcnt;
}
int bookAllocation(vector<int> &arr, int n, int m){
    if(m>n) return -1;
    int maxi = 0;
    int sum = 0;
    for(int i=0; i<arr.size(); i++){
        maxi = max(maxi, arr[i]);
        sum += arr[i];
    }
    int low = maxi, high = sum;
    while(low<=high){
        int mid = low + (high-low)/2;
        int countstu = nPages(arr, mid); 
        // lower max page capacity more will be the students
        if(countstu > m){       
            low = mid + 1;  
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}
```
---

### PAINTER'S PARTITION / SPLIT ARRAY - LARGEST SUM
- area units - [10, 20, 30, 40], k = 2 -> no. of painters
- to paint n unit area we need n unit of time
- each painter gets atleast one unit to paint
- contiguous paint

- Total time needed at which both of them finish = painter with max time
- p1 = 10, p2 = (20,30,40) -> time = 90
- p1 = (10,20) p2 = (30,40) -> time = 70
- p1 = (10,20,30), p4 = (40) -> time = 60(ans) -> this the least time taken
- tasks should be consecutive

```cpp
int nPages(int arr[], int pages){
    if()
    int studentcnt = 1;
    int pages = 0;
    for(int i=0; i<arr.size(); i++){
        if(pages + arr[i] <= pages){ //if pages can be fitted in give page to student
            pages += arr[i];
        }
        else{
            studentcnt++; //next student
            pages = arr[i]; //give pages stored in previous if statement to the next student 
        }
    }
    return studentcnt;
}
int bookAllocation(vector<int> &arr, int n, int m){
    if(m>n) return -1;
    int maxi = 0;
    int sum = 0;
    for(int i=0; i<arr.size(); i++){
        maxi = max(maxi, arr[i]);
        sum += arr[i];
    }
    int low = maxi, high = sum;
    while(low<=high){
        int mid = low + (high-low)/2;
        int countstu = nPages(arr, mid); 
        // lower max page capacity more will be the students
        if(countstu > m){       
            low = mid + 1;  
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}
int painter(vector<int> &boards, int k){
    return bookAllocation(boards, boards.size(), k);
}
```
---

### MINIMIZE MAXIMUM DISTANCE TO GAS STATION
- sorted array
- n gas stations coordinates - [1, 2, 3, 4, 5], k=4
- place 4 new gas s and minimize the maximum distance
- placing:-
- [1, 2, 3, 4, 5, 6, 7, 8, 9] -> maximum distance bet consecutive = 1
- [1, 1.25, 1.5, 1.75, 2, 3, 4, 4.5, 5] -> -> maximum distance bet consecutive = 1
- [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] -> maximum distance bet consecutive = 0.5(ans) -> most minimum max distance

- **distance between: difference between consecutive / no of placed + 1**
- arr - [1, 13, 17, 23], k=5
- diff - 12,  4,  5     
- 12 is maximum distance so we insert here to reduce consecutive distance 
- after placing - [1, 7, 13, 17, 23] -> placed at disatnce (13-1)/1+1 = 6
- diff - 6, 6, 4, 6
- can place in either with 6 distance
- after placing - [1, 7, 13, 17, 20, 23] -> placed at distance between(23-17)/1+1 = 3
- diff - 6, 6, 4, 3, 3
- can place in 6 distance and change distance of insertion 1
- after placing - [1, 5, 9, 13, 17, 20, 23] -> placed at (13-1)/2+1 = 4 -> distance -> 1 + 4 = 5 + 4 = 9
- diff - 4, 4, 4, 4, 3, 3
- after placing - [1, 5, 9, 13, 15, 17, 20, 23]  -> (17-13)/1+1 = 2
- diff - 4, 4, 4, 2, 2, 3, 3
- can reduce the 4 distance
- after placing - [1, 4, 7, 10, 13, 15, 17, 20, 23]  -> (13-1)/1+3 = 3
- diff - 3, 3, 3, 3, 2, 2, 3, 3
- **answer found** - maximum distance = 3

> **we do not need to place them we just use the formula: (difference between consecutive / no of placed + 1)**
> **this provides distance between elements if placed**

**BRUTE FORCE**
- TC: (k x n) x n
> we must keep track of the maximum distance and use the formula
> an array is created which maps how many no of insertions done in a section
> array size is the sections
> eg = [1, 13, 20] -> 2 sections exist to insert
> sections = n-1

```cpp
long double minimizeMaxDistance(vector<int> &arr, int k){
    int n = arr.size();
    vector<int> howMany(n-1, 0);
    for(int gasStations=1; gasStations<=k; gasStations++){
        long double maxSection = -1;
        int maxIndex = 1;
        for(int i=0; i<n-1; i++){
            long double diff = arr[i+1] - arr[i];
            long double sectionLength = diff/ (long double)howMany[i] + 1  //  diff / no of placed + 1
            if(sectionLength > maxSection){
                maxSection = sectionLength;
                maxIndex = i;
            }
        }
        howMany[maxIndex]++; //maps no of insertions made inside section
    }
    // maximum value of within the section length is the answer
    long double maxAns = -1;
    for(int i=0; i<n; i++){
        long double difference = arr[i+1] - arr[i];
        long double sectionLength = difference/(long double)(howMany(i) + 1);
        maxAns = max(maxAns, sectionLength);
    }
    return maxAns;
}

```

**BETTER**
- TC: n (log n) + k (log n)
- SC: n-1(priority queue store)
- PRIORITY QUEUE: WHEN INSERTING PRIORITY QUEUE ALWAYS STORES MAXIMUM VALUE AT TOP OF QUEUE - min(bottom) - max(top) 
- we make howMany[] use a priority queue - log n
- so we need not search for a maximum value by using O(n) time complexity
- arr - [1, 13, 17, 23], k=5
- diff - 12, 4, 6
- priority queue stores as (diff, section)

- **(12, 0)** -> top -> this gets broken down into 2 sections
- (6, 2)
- (4, 1)
- [1, 13, 17, 23] -> 1 section placed between 1 - 13 at distance = 6
- diff - (6, 6), 4, 6 ->1st section(1-13) -> max length becoems 6 and turns into (6,0)

- **(6,2)** -> top -> the section between (17 - 23)
- (6,0)
- (4,1)
- [1, 13, 17, 23] -> 1 section placed between 17 - 23 at distance = 3
- diff - (6, 6), 4, (3, 3) -> 3rd section(17-23) -> max length becoems 3 and turns into (3,2)

- **(6,0)** -> top -> the section between (1 - 13) -> already it has been broken into 2 section further broken into 3 sections 
- (4,1)
- (3,2)
- [1, 13, 17, 23] -> 1 section placed between 17 - 23 at distance = 4((13-1)/2+1 = 4) -> 3 sections
- diff - (6, 6), 4, (3, 3) -> 1st section(1-13) -> max length becoems 4 and (6,0) turns into (4,0)

- this goes on.. until all elements placed

- finally all 5 placed
- (3, 2) -> top = maximum value(ans)
- (3, 0)
- (2, 1)

```cpp
long double minimizeMaxDistance(vector<int> &arr, int k){
    int n = arr.size();
    vector<int> howMany(n-1, 0);
    priority_queue<pair<long double , int>> pq;
    for(int i= 0; i<n-1; i++){
        pq.push({arr[i+1] - arr[i], i}); // stores as (diff, section)
    }
    for(int gasStations=1; gasStations<=k; gasStations++){
        auto top = pq.top; pq.pop() // keep popping the top element
        int secIndex = top.second;
        howMany[secIndex]++; //updates no of sections inside main 3 sections
        long double initialDiff = arr[secIndex + 1] - arr[secIndex];
        long double newSecLen = iniDiff / (long double)(howMany[secIndex] + 1);
        pq.push(newSecLen, secIndex)
    }
    return pq.top().first;
}
```
---

### FIND MEDIAN OF TWO SORTED ARRAY
- arrOne[] - [1, 3, 4, 7, 10, 13], arrTwo[] - [2, 3, 6, 15]
- combine both and find median
- combined[] - [1, 2, 3, 3, 4, 6, 7, 10, 12, 15], n=10
- median - no of elements in right = no of elements in left
- median has to be between 4 and 6 to satisfy the left-right condition
- 4+6/2 = 5(ans)
- if n = odd then we can find the median directly

**BRUTE FORCE**
- TC: n1 + n2
- SC: n
```cpp
double median(int arr1[], int arr[2], int n1, int n2){
    int arr3 = [];
    int i = 0, j = 0;
    // until both array equal
    while(i<n1 && j<n2){
        if(arr1[i] < arr[j]){
            arr3.push_back(arr1[i]);
            i++;
        }
        else{
            arr3.push_back(arr2[j]);
            j++;
        }
    }
    //for size greater than other array
    while(i<n1){
        arr3.push_back(arr1[i]);
        i++;
    }
    while(j<n2){
        arr3.push_back(arr2[j]);
        j++;
    }
    int n = n1 + n2;
    if(n%2 == 1){ //when odd elements total
        return arr3[n/2];
    }
    else{ //even
        return (double)((double)(arr3[n/2] + arr[(n/2) - 1])) / 2.0;
    }
}
```

**BETTER**
- TC: n1 + n2
- SC: n
```cpp
double median(int arr1[], int arr[2], int n1, int n2){
    int i = 0, j = 0;
    int n = (n1 + n2);

    int ind2 = n/2;  
    int ind1 = ind2 - 1;

    int indEl1 = -1;
    int indEl2 = -1;

    int cnt = 0;
    while(i<n1 && j<n2){
        if(arr1[i] < arr2[j]){
            if(cnt == ind1){
                indEl1 = arr1[i];
            }
            if(cnt == ind2){
                indEl2 = arr1[i];
            }
            cnt++;
            i++;
        }
        else{
            if(cnt == ind2){
                indEl1 = arr2[j];
            }
            if(cnt == ind2){
                indEl2 = arr2[j];
            }
            cnt++;
            j++; 
        }
    }
    while(i<n1){
        if(cnt == ind1){
            indEl1 = arr1[i];
        }
        if(cnt == ind2){
            indEl2 = arr1[i];
        }
        cnt++;
        i++;
    }   
    while(j<n2){
        if(cnt == ind1){
            indEl1 = arr2[j];
        }
        if(cnt == ind2){
            indEl2 = arr2[j];
        }
        cnt++;
        j++;
    }          
    
    if(n%2 == 1){ //when odd elements total
        return arr3[n/2];
    }
    else{ //even
        return (double)((double)(arr3[n/2] + arr[(n/2) - 1])) / 2.0;
    }
}
```




---
id: 52763ictjvbxx9647isn0vg
title: LINKED-LIST
desc: ''
updated: 1702928758219
created: 1699927844540
---

- LINKED LIST IS A TYPE OF LINEAR DATA STRUCTURE WHICH IS A COLLECTION OF NODES
- **NODES** - CONTAINS DATA AND ADDRESS OF THE NEXT NODE
- DYNAMIC DATA STRUCTURE
- POINTER OF NODE TYPE SO TO IMPLEMENT WE MAKE CLASS

## SINGLY LINKED LIST
- -> = operator to select an element from a data structure pointed to by a pointer
```cpp

// node class for members to access
class Node {
    public:
    int data;  
    Node* next;

    //constructor for new Node to create node 
    Node(int data){
        this -> data = data;
        this -> next = NULL;
    }

}


int main(){
    Node* node1 = new Node(); //creating new node

}
```

### INSERTION

### AT HEAD
- First we create a new node which points to NULL(named temp)
- if we want to insert this node at head
- temp pointer is to be pointed to the node that is currently head
- head = temp -> head location changes

### AT TAIL
- new node becomes ending node 

```cpp
// node class for members to access
class Node {
    public:
    int data;  
    Node* next;

    //constructor for new Node to create node 
    Node(int data){
        this -> data = data;
        this -> next = NULL;
    }

    //destructor delete
    ~Node(){
        //memory free
        if(this -> next != NULL){
            delete next;
            this -> next = NULL;
        }
    }
}
// function for head insert
void insertAtHead(Node* &head, int data){ // refernce taken cuz we dont want a copy and change original linked list

    //new node create that we will insert
    Node* temp = new Node(data);
    temp -> next = head; //temp pointer is to be pointed to the node that is currently head
    head = temp // head location changes
}

// tail insert
void insertAtTail(Node* &tail, int data){
    //new node create that we will insert
    Node* temp = new Node(data);
    tail -> next = temp;
    tail = temp;
}

// insert at position
void insertAtMiddle(Node* &head,Node* &tail, int position, int data){
    //insert at start
    if(position == 1){
        insertAtHead(head, data);
        return;
    }

    Node* temp = head;
    int cnt = 1;
    //traverse till n-1
    while(cnt < position-1){
        temp = temp -> next;
        cnt++;
    }
    //insert at end
    if(temp -> next == NULL){
        insertAtTail(tail, data);
        return;
    }
    //creating node to insert
    Node* nodeToInsert = new Node(data);
    nodeToInsert -> next = temp -> next;
    temp -> next = nodeToInsert;
}
// printing full linkedlist 
void print(Node* &head){ //reference taken cuz we dont want to head to be updated
    Node* temp = head; //making the head first

    while(temp != NULL){
        cout<<temp -> data<<" ";
        temp = temp -> next; //temp travels forward
    }
    cout<<endl;
}

void deleteNode(int position, Node* &head){
    //start node
    if(position == 1){
        Node* temp = head;
        head = head -> next;
        temp -> next = NULL;
        delete temp;
    }
    // middle and last node
    else{
        Node* curr = head;
        Node* prev = NULL;

        int cnt=1;
        while(cnt <= position){
            prev = curr;
            curr = curr -> next;
            cnt++;
        }
        prev -> next = curr -> next;
        curr -> next = NULL;
        delete curr;
    }
}
int main(){
    Node* node1 = new Node(10); //creating new node

    //pointin head in node1
    Node* head = node1;
    
    //pointing tail to node1
    Node* tail = node1;

    insertAtHead(head, 12);
    print(head) // -> 12 comes before 10 and becomes head

    insertAtTail(tail, 12);
    print(tail) // -> 12 comes before 10 and becomes head

    deleteNode(1, head);
}
```
---


## DOUBLY LINKED LIST
- CONTAINS DATA AND ADDRESS OF THE NEXT NODE AND PREVIOUS NODE
```cpp
class Node{
    public:
    int data;
    Node* prev;
    Node* next;

    Node(int data){
        this -> data = data;
        this -> prev = NULL;
        this -> next = NULL;
    }
    
    ~Node(){
        while(this -> next != NULL){
            delete next;
            this -> next = NULL;
        }
    }
};

void print(Node* head){
    Node* temp = head;
    while(temp != NULL){
        cout<<temp -> data<<" ";
        temp = temp -> next;
    }
    cout<<endl;
}

//gives length of linked list
int getLength(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp != NULL){
        len++;
        temp = temp -> next;
    }
    return len;
}
void insertAtHead(Node* &head, int data){
    Node* temp = new Node(data);
    temp -> next = head;
    head -> prev = temp;
    head = temp;
}
void insertAtTail(Node* &tail, int data){
    Node* temp = new Node(data);
    tail -> next = temp;
    temp -> prev = tail;
    tail = temp;
}
void insertAtMiddle(Node* &head, Node* &tail, int position, int data){
    //insert at start
    if(position == 1){
        insertAtHead(head, data);
        return;
    }    
    Node* temp = head;
    int cnt = 1;
    while(cnt < position - 1){
        temp = temp -> next;
        cnt++;
    }
    //insert at end
    while(temp -> next == NULL){
        insertAtTail(tail, data);
        return;
    }
    //insert at middle
    Node * nodeToInsert = new Node(data);
    nodeToInsert -> next = temp -> next;
    temp -> next -> prev = nodeToInsert;
    temp -> next = nodeToInsert;
    nodeToInsert -> prev = temp;
}

void deleteNode(Node* &head, int position){
    if(position == 0){
        Node* temp = head;
        temp -> next -> prev = NULL;
        head = head -> next;
        temp -> next = NULL;
        delete temp;
    }
    else{
        Node* prev = NULL;
        Node* curr = head;
        int cnt = 1;
        while(cnt <= position){
            prev = curr;
            curr = curr -> next;
            cnt++;
        }
        curr -> prev =  NULL;
        prev -> next = curr -> next;
        curr -> next = NULL;
        delete curr;
    }
}
int main(){
    Node* node1 = new Node(10);
    Node* head = node1;
    Node* tail = node1;
    print(head);
    cout<<getLength(head)<<endl;
    insertAtHead(head, 11);
    print(head);
    cout<<endl;
    insertAtTail(tail, 23);
    print(head);    
    cout<<endl;
    insertAtMiddle(head, tail, 2, 20);
    print(head);
    cout<<endl;
    deleteNode(head, 3);
    print(head);
}
```

## REVERSE A LINKED LIST
**LOOP APPROACH**
- TC: n -> nodes
- SC: 1
- all current nodes pointers are to be pointed to its previous nodes
```cpp
class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this -> data = data;
        this -> next = NULL;
    }
}

Node* reverseLinkedList(Node* head){
    if(head == NULL || head -> next == NULL){ //empty list and single node
        return head;
    }
    Node* prev = NULL;
    Node* curr = head;
    Node* forward = NULL; // to keep maintaining connection and no ll break occurs
    while(curr != NULL){
        forward = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = forward;
    }
    return prev; //new head
}
```

**RECURSION 1**

```cpp
void reverse(Node* &head, Node* curr, Node* prev){
    if(curr == NULL){
        prev = head;
        return;
    }
    Node* forward = curr -> next;
    reverse(head, forward, curr);
    curr -> next = prev;
}
Node* reverseLinkedList(Node* head){
    Node* prev = NULL;
    Node* curr = head;
    reverse(head, curr, prev);
    return head;
}
```

**RECURSIVE 2**
```cpp
Node* reverse1(Node* head){
    if(head = NULL || head -> next = NULL){
        return head;
    }

    Node* chotahead = reverse1(head -> next);

    head -> next -> next = head;
    head -> next = NULL;

    return chotahead;
}
```

## REVERSE A DOUBLY LINKED LIST

**Approach-1: (Iterative)**
```cpp
Node* reverseDLL(Node* head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }
    Node* forward = NULL;
    Node* prev = NULL;
    Node* curr = head;

    while (curr != NULL) {
        forward = curr->next;
        curr->next = prev;
        curr->prev = forward;
        prev = curr;
        curr = forward;
    }
    return prev;
}
```

**Approach-2: (Recursive)**
```cpp
Node* reverseDLL(Node* head) {
    if(head == NULL || head -> next == NULL) {
        return head;
    }
    Node* newHead = reverseDLL(head -> next);
    head->next->next=head;
    head->prev=head->next;
    head->next=NULL;

    return newHead;
}
```


## MIDDLE OF A LINKED LIST
- if odd -> return mid
- if even -> return mid which is farther than head
- TC: n + n = 2n

**BRUTE FORCE:**
```cpp
Node *getLength(Node *head){
    int len = 0;
    while(head != NULL){
        len++;
        head = head -> next;
    }
    return len;
}
Node *findMid(Node *head){
    int len = getLength(head);
    int mid = (len/2); //mid

    Node* temp = head;
    int cnt = 0;
    while(cnt < mid){  // temp travels until mid starting from head
        temp = temp -> next;
        cnt++;
    }
    return temp;
}
```

**OPTIMAL:**
- fast travels 2x distance
- slow travels 1x distance 
- slow is mid
- TC: n/2 -> n
```cpp
Node *getMiddle(Node *head){
    if(head == NULL || head -> next == NULL){
        return head;
    }
    if(head -> next -> next == NULL){ 
        return head -> next;
    }
    Node* slow = head;
    Node* fast = head -> next;

    while(fast != NULL){
        fast = fast -> next; // 1 kadam
        if(fast != NULL){
            fast = fast -> next; //2 kadam
        }
        slow = slow -> next; //1 kadam
    }
    return slow;
}
```

## REVERSE LINKED LIST IN K ORDER
- Linked List 
- 3 -> 2 -> 7 -> 8 -> 9 -> 11 -> NULL 
- 2 -> 3 -> 8 -> 7 -> 11 -> 9 -> NULL  || k = 2
- 7 -> 2 -> 3 -> 11 -> 9 -> 8 -> NULL  || k = 3

### RECURSION
- TC: n
- SC: n
```cpp
Node* kReverse(Node &head, int k){
    if(head == NULL){
        return head;
    }

    Node* prev = NULL;
    Node* curr = head;
    Node* next = NULL;
    int count = 0;

    while(curr != NULL && count < k){
        next = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    if(next != NULL){
        head -> next = kReverse(next, k);
    }
    return prev;
}

```cpp
int getLength(ListNode* head) {

    int length = 0;

    ListNode* temp =head;

    while(temp != NULL) {
        length++;
        temp = temp -> next;
    }

    return length;
    }

    ListNode* reverseK(ListNode* &head, int k, int length) {
        
    //Base case
    if(head == NULL || head -> next == NULL || k == 1 || length < k)
        return head;
    
    //Step 1 : Reverse first k nodes
    ListNode* nxt = NULL;
    ListNode* curr = head;
    ListNode* prev = NULL;

    int count = 1;

    while(curr != NULL && count <= k) {

        nxt = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = nxt;
        count++;
    }

    //Step 2 : Reverse next k nodes using recursion
    if(nxt != NULL) { 
        head -> next = reverseK(nxt, k, (length - k));
    }

    //Step 3 : Return head of the reversed linked list
    head = prev;
    
    return head;
    }

    ListNode* reverseKGroup(ListNode* head, int k) {

    int len = getLength(head);
    
    return reverseK(head, k, len);
    }

    Node* kreverse(Node* &head,int k) {

    // base case
    if(head == NULL) {
        return NULL;
    }

    Node* curr = head;
    Node* prev = NULL;
    Node* forw = NULL;

    int cnt = 0;
    while( curr != NULL && cnt < k){

        forw = curr->next;
        curr -> next = prev;

      
        prev = curr;
        curr = forw;
        
        cnt++;
    }

   

   // if the forward list's length is less than k than we simply 
   // join the original list to the head 
    if(getlength(forw) < k){
        head->next = forw;
    }
    else if (forw != NULL && getlength(forw) >= k){
        head -> next = kreverse(forw,k);
    }
  
 return prev;


}
```

## CHECK IF LIST IS CIRCULAR

### MAP
```cpp
bool isCircular(Node* head)
{
  if(head==NULL)
  {
    return true;
    
}
unordered_map<Node* ,bool> m;
  m[head]=true;
Node* temp=head->next;
  
 while(temp!=NULL && temp!=head)
    { 
      m[temp]=true;
      temp=temp->next;
}

  if(m[temp])
  {
    return true;

    }
  else{
    return false;
}
  
}
```
### ITERATIVE
- TC: n
- SC: 1
```cpp
bool isCircular(Node* head){
    if(head == NULL){
        return true;
    }

    Node* temp = head -> next;
    while(temp != NULL && temp != head){
        temp = temp -> next;
    }

    if(temp == head){
        return true;
    }
    returnn false;
}
```

### MAP

## DETECT / REMOVE LOOP

### USING MAP
- TC: n
- SC: n
```cpp
// detect loop
bool detectLoop(Node* head){
    if(head == NULL){
        return false;
    }
    map<Node*, bool> visited;
    Node* temp = head;
    
    while(temp != NULL){
        if(visited[temp] == true){
            return true;
        }
        visited[temp] = true;
        temp = temp -> next;
    }
    return false;
}
```

### USING FLOYD CYCLE DETECTION
```cpp
node* floydCycle(Node* head){
    if(head == NULL){
        return false;
    }
    Node* slow = head;
    Node* fast = head;

    while(slow != NULL && fast != NULL){
        fast = fast -> next;
        if(fast != NULL){
            fast = fast -> next;
        }

        slow = slow -> next;
        if(fast == slow){
            return true;
        }
    }
    return false;
}
Node* getStartinNode(Node* head){ // n & n
    if(head == NULL){
        return NULL;
    }
    Node* intersection = floysCycle(head);
    Node* slow = head;

    while(slow != intersection){
        slow = slow -> next;
        intersection = intersection -> next;
    }
    return slow;
}

Node* removeLoop(Node* head){ //
    if( head == NULL){
        return;
    }
    Node* startofLoop = getStartingNode(Node);
    Node* temp = startofLoop; 

    while(temp -> next != startofLoop){
        temp = temp -> next;
    }
    temp -> next = NULL;
}
```

## REMOVE DUPLICATES FROM SORTED LIST
- TC: n
- SC: 1
```cpp
Node* uniqueSorted(Node* head){
    if(head == NULL){
        return NULL;
    }

    Node* curr = head;
    while(curr != NULL){
        if((curr -> next != NULL) && curr -> data == curr -> next -> data){
            Node* next = curr -> next -> next;
            Node* toDelete = curr -> next;
            delete(toDelete);
            curr -> next = next;
        }
        else{
            curr = curr -> next;
        }
    }
    return head;
}
```

## REMOVE DUPLICATES FROM UNSORTED LIST

### USING POINTER LOOP
- TC: n^ 2
- SC: 1
```cpp
Node* func(Node* head){
    Node* curr = head;
    while(curr != NULL){
        Node* temp = curr -> next;

        while(temp !=NULL){
            if(curr -> data == temp -> data){
                delete(temp);
            }
            temp = temp -> next;
        }
    }
}
```

### USING MAPS
- TC: n
- SC: n
```cpp
Node* func(Node* head){
    Node* curr = head;
    Node* prev = NULL;
    unordered_map<int, bool> visited;

    while(curr != NULL){
        if(!visited[curr -> data]){
            visited[curr -> data] = true;
            prev = curr;
            curr = curr -> next;
        }
        else{
            prev -> next = curr -> next;
            delete curr;
        }
        curr = prev -> next;
    }
    return head;
}
```

### USING SORT
- nlogn


## CIRCULAR LL SPLIT INTO TWO HALVES
```cpp
pair<Node*, Node*> splitMiddle(Node* &tail) {

    int len = getLength(tail);
    int intersection = len / 2;
    Node* tail1 = tail;
    Node* tail2 = tail;
    int cnt = 0;
    while (cnt < intersection) {
        tail2 = tail2 -> next;
        cnt++;
    }
    cnt = 0;
    Node* temp = tail;
    if (len & 1) {

        tail2 = tail2 -> next;
        while (cnt < intersection) {
            temp = temp -> next;
            cnt++;
        }
        temp -> next = tail1;

        temp = tail2;
        cnt=0;

        while (cnt < intersection-1) {
            temp = temp -> next;
            cnt++;
        }
        temp -> next = tail2;


    }
    else {

            while (cnt < intersection-1) {
                temp = temp-> next;
                cnt++;
            }
            temp -> next = tail1;

            temp = tail2;
            cnt=0;

            while (cnt < intersection-1) {
                temp = temp -> next;
                cnt++;
            }
            temp -> next = tail2;

    }

    return make_pair(tail1, tail2);

}
```

## SORT 0S, 1S AND 2S

### STORING COUNT // DATA REPLACEMENT
- TC: 2n
- SC: 1
```cpp
Node* sortList(Node* head){
    int zeroCount = 0;
    int oneCount = 0;
    int twoCount = 0;

    Node* temp = head;
    while(temp != NULL){
        if(temp -> data == 0){
            zeroCount++;
        }
        else if(temp -> data == 1){
            oneCount++;
        }
        else if(temp -> data == 2){
            twoCount++;
        }
        temp = temp -> next;
    }

    temp = head;
    while(temp != NULL){
        if(zeroCount != 0){
            temp -> data = 0;
            zeroCount--;
        }
        else if(oneCount != 0){
            temp -> data = 0;
            oneCount--;
        }
        else if(twoCount != 0){
            temp -> data = 0;
            twoCount--;
        }
        temp = temp -> next;
    }
}
```

###  USING SEPARATE LINKEDLIST FOR 0,1,2 THEN MERGE / POINTER REPLACEMENT
```cpp
void insertAtTail(Node* &tail, Node* curr){
    tail -> next = curr;
    tail = curr;
}
Node* sortList(Node* head){
    // dummy nodes as head
    Node* zeroHead = new Node(-1);
    Node* zeroTail = zeroHead;
    Node* oneHead = new Node(-1);
    Node* oneTail = zeroHead;
    Node* twoHead = new Node(-1);
    Node* twoTail = zeroHead;

    //creating separate lists
    Node* curr = head;
    while(curr != NULL){
        int value = curr -> data;
        if(value == 0){
            insertAtTail(zeroTail, curr);
        }
        else if(value == 1){
            insertAtTail(oneTail, curr);
        }
        else if(value == 2){
            insertAtTail(twoTail, curr);
        }
        curr = curr -> next;
    }

    //    merge 3 sublist

    //1s list is not empty
    if(oneHead -> next != NULL){
        zeroTail -> next = oneHead -> next;
    }
    // 1s list is empty
    else{
        zeroTail -> next = twoHead -> next;
    }
    
    oneTail -> next = twoHead -> next;
    twoTail -> next = NULL;
    
    //setup head
    head = zeroHead -> next;
    delete zeroHead;
    delete oneHead;
    delete twoHead;

    return head;
}
```

## CHECK PALINDROME OR NOT

### PUT DATA IN ARRAY
- TC: n
- SC: n
```cpp
private:
    bool checkPalindrome(vector<int> arr){
        int n = arr.size();
        int s = 0;
        int e = n-1;

        while(s<=e){
            if(arr[s] != arr[e]){
                return 0;
            }
            s++;
            e--;
        }
        return 1;
    }
public:
    bool isPalindrome(Node* head){
        vector<int> arr;
        Node* temp = head;
        while(temp != NULL){
            arr.push_back(temp -> data);
            temp = temp -> next
        }
        return checkPalindrome(arr);
    }
```

### COMPARE TWO HALVES AFTER REVERSING ONE HALF
```cpp
private:
    Node* getMid(Node* head){
        Node* slow = head;
        Node* fast = head;
        while(fast != NULL && fast -> next != NULL){
            fast = fast -> next -> next;
            slow = slow -> next;
        }
        return slow;
    }

    Node* reverse(Node* head){
        Node* curr = head;
        Node* prev = NULL;
        Node* next = NULL;

        while(curr != NULL){
            curr -> next = next;
            curr -> next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
public:
    bool isPalindrome(Node* head){
        if(head == NULL || head -> next == NULL){
            return true;
        }

        //mid
        Node* middle = getMid(head);

        //reverse list after middle
        Node* temp = middle -> next;
        middle -> next = reverse(temp);

        //compare both halves
        Node* head1 = head;
        Node* head2 = middle -> next;

        while(head2 != NULL){
            if(head1 -> data != head2 -> data){
                return false;
            }
            head1 = head1 -> next;
            head2 = head2 -> next;
        }

        //reverse again to get original ll
        temp = middle -> next;
        middle -> next = reverse(temp);
        return true;
}
```

## ADD 2 NOS REPRESENTED BY LL / ADD 1 TO A NUMBER REPRESENTED BY LL
TC: (M + N)
SC: MAX(N, M)

### 1
```cpp
private:
    Node* reverse(Node *head){
        Node* curr = head;
        Node* prev = NULL;
        Node* next = NULL;

        while(curr != NULL){
            curr -> next = next;
            curr -> next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    void insertAtTail(struct Node* head, struct Node* tail, int data){
        Node* temp = new Node(data);
        if(head == NULL){
            head = temp;
            tail = temp;
            return;
        }
        else{
            tail -> next = temp;
            tail = temp;
        }
    }
    struct Node* add(struct Node* first, struct Node* second){
        int carry = 0;

        // sum ans Node
        Node* ansHead = NULL;
        Node* ansTail = NULL;

        while(first != NULL || second != NULL !! carry != 0){
            int val1 = 0;
            if(first != NULL){
                val1 = first -> data;
            }

            int val2 = 0;
            if(second != NULL){
                val2 = second -> data;
            }

            int sum = carry + val1 + val2;
            int digit = sum%10;

            insertAtTail(ansHead, ansTail, digit);

            carry = sum/10;
            if(first != NULL){
                first = first -> next;
            }
            if(second != NULL){
                second = second -> next;
            }
        }
        return ansHead;
    }
public:
    struct Node* addList(struct Node* first, struct Node* second){
        //reverse the lists 
        first = reverse(head1);
        second = reverse(head2);

        //add 2 lists
        Node* ans = add(first, second);

        //reverse ans
         ans = reverse(ans);

         return ans;
    }
```

### 2
```cpp
private:
    Node* reverse(Node *head){
        Node* curr = head;
        Node* prev = NULL;
        Node* next = NULL;

        while(curr != NULL){
            curr -> next = next;
            curr -> next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    void insertAtTail(struct Node* head, struct Node* tail, int data){
        Node* temp = new Node(data);
        if(head == NULL){
            head = temp;
            tail = temp;
            return;
        }
        else{
            tail -> next = temp;
            tail = temp;
        }
    }
    struct Node* add(struct Node* first, struct Node* second){
        int carry = 0;

        // sum ans Node
        Node* ansHead = NULL;
        Node* ansTail = NULL;

        while(first!= NULL && second != NULL){
            int sum = carry + first -> data + second -> data;
            int digit = sum%10;
            
            //create node and add in ans ll
            insertAtTail(ansHead, ansTail, digit);

            carry = sum/10;
            first = first -> next;
            second = second -> next;
        }

        // if ll1 > ll2 or vice versa
        while(first != NULL){
            int sum = carry + first -> data;
            int digit = sum%10;

            insertAtTail(ansHead, ansTail, digit);
            carry = sum/10;
            first = first -> next;
        }
        while(second != NULL){
            int sum = carry + second -> data;
            int digit = sum%10;

            insertAtTail(ansHead, ansTail, digit);
            carry = sum/10;
            second = second -> next;
        }

        // if carry still remaining
        while(carry != 0){
            int sum = carry;
            int digit = sum%10;

            insertAtTail(ansHead, ansTail, digit);
            carry = sum/10;
        }
        return anshead;
    }
public:
    struct Node* addList(struct Node* first, struct Node* second){
        //reverse the lists 
        first = reverse(head1);
        second = reverse(head2);

        //add 2 lists
        Node* ans = add(first, second);

        //reverse ans
         ans = reverse(ans);

         return ans;
    }
```

## CLONE LL WITH NEXT AND RANDOM POINTER

### USING MAPPING
- TC: n
- SC: n
```cpp
void insertAtTail(Node* &head, Node* &tail, int data){
    Node* temp = new Node(data);
    if(head == NULL){
        head = temp;
        tail = temp;
        return;
    }
    else{
        tail -> next = temp;
        tail = temp;
    }
}
Node* cloneList(Node* head){

    // step 1 -> create a clone list
    Node* cloneHead = NULL;
    Node* cloneTail = NULL
    Node* temp = head;
    while(temp != NULL){
        insertAtTail(ansHead, ansTail, temp -> data);
        temp = temp -> next;
    }

    // step 2 -> create a map
    unordered_map<Node*, Node*> oldToNewNode;
    Node* originalNode = head;
    Node* cloneNode = cloneHead;
    while(originalNode != NULL && cloneNode != NULL){
        oldToNewNode[originalNode] = cloneNode;
        originalNode = originalNode -> next;
        cloneNode = cloneNode -> next;
    } 
    
    originalNode = head;
    cloneNode = cloneHead;
    while(originalNode != NULL){
        cloneNode -> random = oldToNewNode[originalNode -> random];
        originalNode = originalNode -> next;
        cloneNode = cloneNode -> next;
    }
    return cloneHead;
}
```

### CHANGING LINKS
- TC: n
- SC: 1
```cpp
void insertAtTail(Node* &head, Node* &tail, int data){
    Node* temp = new Node(data);
    if(head == NULL){
        head = temp;
        tail = temp;
        return;
    }
    else{
        tail -> next = temp;
        tail = temp;
    }
}
Node* cloneList(Node* head){
    // step 1 -> create clone list
    Node* cloneHead = NULL;
    Node* cloneTail = NULL;

    Node* temp = head;
    while(temp != NULL){
        insertAtTail(cloneHead, cloneTail, temp -> data);
        temp = temp -> next;
    }

    // step 2 -> cloneNodes add in between originalList
    Node* originalNode = head;
    Node* cloneNode = cloneHead;
    while(originalNode != NULL && cloneNode != NULL){
        Node* next = originalNode -> next;
        originalNode -> next = cloneNode;
        originalNode = next;

        next = cloneNode -> next;
        cloneNode -> next = originalNode;
        cloneNode = next;
    }

    // step 3 -> random pointer copy
    temp = head;
    while(temp != NULL){
        if(temp -> next != NULL){
            temp -> next -> random = temp -> random ? temp -> random -> next : temp -> random;
        }
        temp = temp -> next;
    }
    // step 4 -> revert changes done in step 2
    originalNode = head;
    cloneNode = cloneHead;
    while(originalNode != NULL && cloneNode != NULL){
        originalNode -> next = cloneNode -> next;
        originalNode = originalNode -> next;

        if(originalNode != NULL){
            cloneNode -> next = originalNode -> next;
            cloneNode = cloneNode -> next;
        }
    }
    // step 5 -> return ans
    return cloneHead;
}
```

## MERGE SORT IN LL
### USING RECURSION
```cpp
Node* findMid(Node* head){
    Node* fast = head -> next;
    Node* slow = head;

    while(fast != NULL && fast -> next != NULL){
        slow = slow -> next;
        fast = fast -> next -> next;
    }
    return slow;
}
Node* merge(Node* left, Node* right){
    if(left == NULL){
        return right;
    }
    if(right == NULL){
        return left;
    }

    Node* ans = new Node(-1);
    Node* temp = ans;

    // merge 2 sorted ll
    while(left != NULL && right != NULL){
        if(left -> data < right -> data){
            temp -> next = left;
            temp = left;
            left = left -> next
        }
        else{
            temp -> next = right;
            temp = right;
            right = right -> next;
        }
    }
    while(left != NULL){
        emp -> next = left;
        temp = left;
        left = left -> next
    }

    while(right != NULL){
        temp -> next = right;
        temp = right;
        right = right -> next;
    }

    ans = ans -> next;
    return ans;
}
Node* mergeSort(Node* head){
    //base case
    if(head == NULL || head -> next == null){
        return head;
    }
    Node* mid = findMid(head);

    // break into 2 halves after finding mid
    Node* left = head;
    Node* right = mid -> next;

    // sort using recursive calls
    left = mergeSort(left);
    right = mergeSort(right);

    // merge both halves 
    Node* result = merge(left, right);

    return result;
}
```

## FLATTEN A LL
### USING RECURSION
```cpp
Node* merge(Node* left, Node* right){
    if(left == NULL){
        return right;
    }
    if(right == NULL){
        return left;
    }

    Node* ans = new Node(-1);
    Node* temp = ans;

    // merge 2 sorted ll
    while(left != NULL && right != NULL){
        if(left -> data < right -> data){
            temp -> child = left;
            temp = left;
            left = left -> child;
        }
        else{
            temp -> child = right;
            temp = right;
            right = right -> child;
        }
    }
    while(left != NULL){
        temp -> child = left;
        temp = left;
        left = left -> child;
    }

    while(right != NULL){
        temp -> child = right;
        temp = right;
        right = right -> child;
    }

    ans = ans -> child;
    return ans;
}
Node* flattenList(Node* head){
    if(head == NULL || head -> next == NULL){
        return head;
    }
    Node* down = head;
    down -> right = flattenList(head -> next);
    down -> next = NULL;
    Node* ans2 = merge(down, right);
    return ans2;
}
```

---
id: rq6jelbd0dshh6rxh053tpr
title: RECURSION / BACKTRACKING
desc: ''
updated: 1699878047628
created: 1698560424702
---

### DEFINITION
- Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.
- **BASE CASE:** The base case is the **termination** condition of the recursive function. It's the condition that, when met, stops the recursion and provides a result without making further recursive calls. The base case is the simplest form of the problem that can be solved directly.
- **RECURSION RELATION:** In the recursive case, the function calls itself with modified arguments to break the problem into smaller, more manageable subproblems. The idea is that by solving the smaller **subproblems** using recursion, you eventually reach the base case, and then you can combine the results to solve the original problem.
> WITHOUT BASE CASE **SEGMENTATION FAULT** OCCURS STACK GETS FULL WITHOUT TERMINATION AND OVERFLOW OCCURS
- **RECURSION TREE:** is a visual representation of the recursive calls and their relationships in a recursive algorithm. It is often used to analyze the time complexity of recursive algorithms. Each node in the tree represents a recursive call, and the edges between nodes show the order in which the calls are made.

### FIBONACCI SERIES
- 0, 1, 1, 2, 3, 5, 8, 13, 21, ... 
- every nth term is addition of (n-1) and (n-2) term
```cpp
int fib(int n){
    // base cass
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }

    //recurrence relation
    int ans = fib(n-1) + fib(n-2);
    return ans;
}
```
---

### PRINT NAME N TIMES

### PRINT LINEARLY FROM N TO 1

### CLIMB STAIRS
**BRUTE FORCE:**
- how many one or two stair step to reach nth position
```cpp
int climbStairs(int n){
    if(n<0){
        return 0;
    }
    if(n==0){
        return ;
    }
    int ans = climbStairs(n-1) + climbStairs(n-2)
}
```
**OPTIMAL:**
- SOLUTION USES DP
---

### SAY DIGITS
- 412 -> Four, one , two
```cpp
void sayDigit(int n, string arr[]){
    //base case
    if(n == 0){
        return;
    }
    //processing
    int digit = n%10;
    n = n/10;
    cout << arr[digit] << " "; // print as it gets evaulated -> 214

    //recursive call
    sayDigit(n, arr);
    cout << arr[digit] << " ";   // when we come back from recursion tree then it gets printed  -> 412
}
int main(){
        string arr[10] = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
        int n;
        cin <<arr[n];
        cout << endl;

        sayDigit(n, arr);
}
```
---

### IS SORTED ARRAY
```cpp
bool isSorted(int arr[], int n){
    if(n==0 || n==1){
        return true;
    }
    if(arr[0] > arr[1]){
        return false;
    }
    else{
        bool remaining part = isSorted(arr+1,n-1); //from arr+1 element t0 end element
        return remainingpart;
    }
}
```
---

### ARRAY SUM
```cpp
int arraySum(int arr[], int n){
    if(n = 0){
        return 0;
    }
    if(n==1){
        return arr[0];
    }
    int remainingPart = arraySum(arr+1, n-1);
    int sum =  arr[0] + remainingPart;
}
```
---

### LINEAR SEARCH
```cpp
bool linearSearch(int arr[], int n, int k){
    if(n==0){
        return false;
    }
    if(arr[0] == k){
        return true;
    }
    else{
        bool remainingPart = linearSearch(arr+1, n-1, k);
        return remainingPart;
    }
}
```
---

### BINARY SEARCH
```cpp
bool binarySearch(int arr[], int s, int e, int k){
    if(s>e){
        return -1;
    }
    int mid = s + (e-s)/2;

    if(arr[mid] == key){
        return true;
    }
    if(arr[mid] < k){
        return binarySearch(arr, mid+1, e, k);
    }
    else{
        return binarySearch(arr, s, mid-1, k);
    }

```
---

### REVERSE STRING
```cpp
void reverseString(string& str, int i, int j){
    if(i>j){
        return;
    }
    swa(str[i], str[j]);
    i++;
    j--;

    reverseString(str, i, j);
}
```
---

### CHECK PALINDROME
```cpp
bool checkPalindrome(string str, int i, int j){
    if(i>j){
        return true;
    }
    if(str[i] != str[j]){
        return false;
    }
    else{
        checkPalindrom(str, i+1, j-1);
    }
}
```
---

### POWER
```cpp
int power(int a, int b){
    i(b==0){
        return 1;
    }
    if(b==1){
        return a;
    }

    int ans = power(a, b/2);

    if(b%2 == 0){
        return ans * ans;
    }
    else{
        return a * ans * ans;
    }
}
```
---

### BUBBLE SORT
```cpp
void sortArray(int &arr, int n){
    if(n==0 || n==1){
        return ;
    }
    for(int i=0; i<n-1; i++){
        if(arr[i] > arr[i+1]){
            swap[arr[i], arr[i+1]];
        }
    }

    sortArray(arr, n-1);
}
```
---

### SELECTION SORT
```cpp
void selectionSort(int arr[], int n){
    if(n==0 || n==1){
        return ;
    }
    int min =   INT_MAX;;
    int index = 0;
    for(int i=0; i<n; i++){
        if(arr[i] < mid){
            index = i;
        }
        swap(arr[0], arr[index]);

        selectionSort(arr+1, n-1)
    }
}
```
---

### INSERTION SORT
```cpp
void insertionSort(int *arr, int n, int i){
    if(i == n || n==0){
        return;
    }
    int x = arr[i];
    int inx = i;
    for(int j=0; j<n; j++){
        if(arr[j] > x){
            inx = j;
        }
    }

    for(j=i; i>inx; j--){
        arr[j] = arr[j-1];
    }

    arr[inx] = x;

    insertionSort(arr, n, ++i);
}
```
---

### MERGE SORT

### ARRAY SUBSET
- arr -> [3, 1, 2] -> {}, (3), (1), (2), (3,1), (1,2), (3,2), (3,1,2) -> 8 subsequences
- TC: 2 ^ n  * n
- SC: n
```cpp
void printF(int ind, vector<int> &ds, int arr[], int n){
    if(ind == n){
        for(auto it : ds){
            cout<< it << " ";
        }
        if(ds.size() == 0){
            cout<<"{}";
        }
        cout<<endl;
        return;
    }
    //not take condition, this element is not added to your subsequence
    printF(ind+1, ds, arr, n);
    //take particular index into the subsequence
    ds.push_back(arr[ind]);
    printF(ind+1, ds, arr, n);
    ds.pop_back();
}
```
---

### ARRAY SUBSEQUENCE
```cpp
void solve(string str, string output, string index, vector<string> &ans){
    if(index >= str.length()){
        if(output.length() > 0){
            ans.push_back(output);
        }
        return;
    }

    //exclude
    solve(str, output, index+1, ans);

    //include
    char element = str[index];
    output.push_back(element);
    solve(str, output, index+1, ans);
}
```
---

### PHONE KEYPAD
- all possible outcomes wwhen a number is pressed in nokia phone keypad
```cpp
void solve(string digit, string output, int index,vector<int> &ans, string mapping[]){  
    if(index >= digit.length())
}
vector<string> letterCombinations(string digits){
    vector<string> ans;
    string output;
    int index = 0;
    string mapping[10] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}; //2 to 9 has letters in phone
    solve(digits, output, index, ans, mapping);
    return ans;
}
```















































### ALL PERMUTATIONS
- BETTER:
```cpp
void recurPermute(vector<int> &ds, vector<int> &nums, vector<vector<int>>, &ans, int freq[]){
    if(ds.size() == nums.size()){
        ans.push_back(ds);
        return;
    }
    for(int i=0; i<nums.size(); i++){
        if(!freq[i]) {
            ds.push_back(nums[i]);
            freq[i] = 1;
            recurPermute(ds, nums, ans, freq);
            freq[i] = 0;
            ds.pop_back();
        }
    }
}
```

- OPTIMAL:
```cpp
void recurPermu(int index, vector<int> &nums, vector<vector<int> &ans>){
    if(index == nums.size()){
        ans.push_back(nums);
    }
    for(int i = index; i<nums.size(); i++){
        swap(nums[index], nums[i]);
        recurPermute(index+1, nums, ans);
        swap(nums[index], nums[i]);
    }
}
```
---


---
id: ukq81ykt8rujje3keedl3hv
title: STACKS
desc: ''
updated: 1703301255624
created: 1703206242979
---
### STACK
LAST IN FIRST OUT (LIFO)
- PUSH (INSERT)
- POP (REMOVE TOP)
- PEEK (TOP)

#### USING STL
```cpp
    //creating stack
    stack<int> s;

    //push operation
    s.push(2);
    s.push(3);

    //pop operations
    s.pop();

    cout<<"Top element:"<<s.top()<<endl;

    if(s.empty()){
        cout<<"Stack is empty"<<endl;
    }
    else{
        cout<<"Stack is not empty"<<endl;
    }
    // size of stack
    s.size();
```

### STACK IMPLEMENTATION 

- **USING ARRAY**
```cpp
class Stack {
    //properties
    public:
        int *arr;
        int top;
        int size;

    //functions
    Stack(int size){
        this -> size = size;
        arr = new int[size];
        top = -1;
    }
    void push(int element){
        if(size  - top > 1){  // if space available
            top++;
            arr[top] = element;
        }
        else{ // no space
            cout<<"Stack Overflow"<<endl;
        }
    }
    void pop(){
        if(top >=0){
            top--;
        }
        else{
            cout<<"Stack Underflow"<<endl;
        }
    }
    int peek(){
        if(top >= 0 && top < size){
            return arr[top];
        }
        else{
            cout<<"Stack is empty"<<endl
            return -1;
        }
    }

    bool isEmpty(){
        if(top == -1){
            return true;
        }
        else{
            return false;
        }
    }
}
```

### 2 STACKS IN AN ARRAY
- > DONT USE N/2 AND N/2 NOT OPTIMAL SPACE
- STACK 1 = LEFT TO RIGHT
- STACK 2 = RIGHT TO LEFT
```cpp
TwoStack(int s){
    this -> sizd = s;
    top1 = -1;
    top2 = s;
    arr = new int[size];
}

// Stack 1 push
void push1(int num){
    // atleadt 1 empty space present
    if(top2 - top1 > 1){
        top1++;
        arr[top1] = num;
    }
    else{
        cout<<"Stack overflow"<<endl;
    }
}

void push2(int num){
    // atleadt 1 empty space present
    if(top2 - top1 > 1){
        top2--;
        arr[top2] = num;
    }
    else{
        cout<<"Stack overflow"<<endl;
    }
}

int pop1(){
    if(top1 >= 0){
        int ans = arr[top1];
        top1--;
        return ans;
    }
    else{
        return -1;
    }
}

int pop2(){
    if(top2 < size){
        int ans = arr[top2];
        top2++;
        return ans;
    }
    else{
        return -1;
    }
}
```

### REVERSE A STRING USING STACK
```cpp
string str = "babbar";

stack<char> s;
for(int i = 0; i< str.length; i++){
    char ch = str[i];
    s.push(ch);
}

string ans = "";
while(!s.empty()){
    char ch = s.top();
    ans.push_back(ch);

    s.pop();
}
cout<<ans<<endl;
```
### REMOVE MIDDLE ELEMENT IN STACK
- for odd -> remove mid
- for even -> remove lowerbound

**USING RECURSION**
```cpp
void solve(stack<int> &inputStack,int count, int size){
    if(count == size/2){ // when reaches mid
        inputStack.pop();
        return;
    }

    // storing element above mid and removing them
    int num = inputStack.top();
    inputStack.pop();

    //recursive call
    solve(inputStack, count+1, size);

    //pushing stored element
    inputStack.push(num);
}
void deleteMiddle(stack<int> &inputStack, int N){
    int count = 0;
    solve(inputStack, count, N);

}
```

### VALID PARANTHESIS
- TC: n
- SC: n
```cpp
bool isValidParanthesis(string expression){
    stack<char> s;

    for(int i = 0; i<expression.length(); i++){
        char ch = expression[i];
        
        //if opening bracket push in stack
        if(ch == '(' || ch == '[' || ch == '{'){
            s.push(ch);
        }

        //if close bracket stacktop check and pop
        else{
            if(!s.empty()){
                char top = s.top();
                if((ch == ')' && top == '(' ) || 
                (  ch == ')' && top == '(' ) ||
                (  ch == ')' && top == '(' ) )
                {
                    s.pop();
                }
                else{
                    return false;
                }
            }
            // if only close bracket (unbalanced)
            else{
                return false;
            }
        }
    }
    if(s.empty()){
        return true;
    }
    else{
        return false;
    }
}
```

### PUSH ELEMENT TO BOTTOM OF STACK
- TC: n
```cpp
void insert(stack<int> &s, int x){
    if(s.empty()){
        s.push(x);
        return;
    }

    int num = s.top();
    s,pop();

    insert(s, x);

    s.push(num);
}


void insertAtBottom(stack<int> &myStack, int X){
    int count = 0;
    insert(inputStack, X);
    return myStack;
}
```

### REVERSE STACK USING RECURSION
- TC: n
```cpp
void insertAtBottom(stack<int> &stack, int val){
    if(s.empty()){
        stack.push(val);
        return;
    }
    
    int num = stack.top();
    stack.pop();

    insertAtBottom(stack, val);

    stack.push(num);
}
void reverseStack(stack<int> &stack){
    //base case
    if(stack.empty()){
        return;
    }

    int num = stack.top();
    stack.pop();

    reverseStack(stack);

    insertAtBottom(stack, num);

}
```

### SORT A STACK

---
id: mqql2x6ozmkhz0hnb7qkyaf
title: TREES
desc: ''
updated: 1706364325518
created: 1706202401802
---

### BINARY TREE 
- 0 OR 2 CHILDREN

#### REPRESENTATION
```cpp
Struct Node{
    int data;
    Struct Node* left;
    Struct Node* right;
    Node(int val){
        data = val;
        left = right = NULL;
    }
}

int main(){
    struct Node* root = new Node(1);
    root -> left = new Node(2);
    root -> right = new Node(3);
    root -> left -> right = new Node(5);
    return -1;
}
```

### TRAVERSAL TECHNIQUES
1. BREADTH FIRST SEARCH:- LEVELWISE
- TC: n
- SC: n
```cpp
vector<vector<int>> levelOrder(TreeNode* root){
    vector<vector<int>> ans; //ds to store answer
    if(root == NULL){
        return ans;
    }
    queue<TreeNode*> q;
    vector<int> level; //storing level wise
    q.push(root);
    while(!q.empty()){
        int size = q.size();
        for(int i=0; i<size; i++){
            TreeNode* node = q.front();
            q.pop();
            if(node -> left != NULL){
                q.push(node -> left);
            }
            if(node -> right != NULL){
                q.push(node -> right);
            }
            level.push_back(node -> val);
        } 
        ans.push_back(level);
    }
    return ans;
}
```
2. DFS
- **INORDER:- LEFT - ROOT - RIGHT**
**NORMAL APPROACH**
```cpp
void inorder(Node){
    if(Node == null)
        return;
    inOrder(Node -> left);
    cout<<Node -> data<<endl;
    inOrder(Node -> right);
}
```
**ITERATIVE INORDER**
```cpp
vector<int> inOrderTraversal(TreeNode* root){
    stack<TreeNode*> st;
    TreeNode* node = root;
    vector<int> inOrder;
    while(true){
        if(node != NULL){
            st.push(node);
            node = node -> left;
        }
        else{
            if(st.empty() == true){
                break;
            }
            st.pop();
            inOrder.push_back(node -> val);
            node = node -> right;
        }
    }
}
```


- **PREORDER:- ROOT - LEFT - RIGHT**
- TC: N
- SC: N

**NORMAL APPROACH**
```cpp
void preOrder(Node){
    if(node == NULL)
        return;

    cout<<node -> data<<endl;
    preOrder(node -> left);
    preOrder(node -> right);
}
```
**ITERATIVE PREORDER**
- TC: n
- SC: n(height)
```cpp
vector<int> preOrderTraversal(TreeNode* root){
    vector<int> preOrder;
    if(root == NULL){
        return preOrder;
    }
    stack<TreeNode*> s;
    s.push(root);
    while(!s.empty()){
        root = st.top();
        s.pop();
        preOrder.push_back(root -> val);
        if(root -> right != NULL){
            s.push(root -> right);
        }
        if(root -> left != NULL){
            s.push(root -> left);
        }
    }
    return preOrder;
}
```


- POSTORDER:- LEFT - RIGHT - ROOT
**NORMAL APPROACH**
```cpp
void postOrder(Node){
    if(node == NULL)
        return;

    postOrder(node -> left);
    postOrder(node -> right);
    cout<<node -> data<<endl;
}
```

**ITERATIVE POSTORDER(2 STACK)**

**ITERATIVE POSTORDER(2 STACK)**


### MAXIMUM DEPTH OF A TREE
```cpp
int maxDepth(TreeNode* root){
    if(root == NULL){
        return 0;
    }
    int lh = maxDepth(root -> left);
    int rh = maxDepth(root -> right);

    return 1 + max(lh, rh);
}
```

---
id: z4tfazwfzf3fk6a17q9zbg1
title: TREES
desc: ''
updated: 1704513122531
created: 1704504189333
---

### BINARY TREE 
- 0 OR 2 CHILDREN


#### REPRESENTATION
```cpp
struct Node{
    int data;
    struct Node* left;
    struct Node* right;
    Node(int val){
        data = val;
        left = right = NULL;
    }
}
int main(){
    struct Node* root = new Node(1);
    root -> left = new Node(2);
    root -> right = new Node(3);
    root -> left -> right = new Node(5);
    return -1;
}
```

### TRAVERSAL TECHNIQUES
1. BREADTH FIRST SEARCH:- LEVELWISE
- TC: n
- SC: n
```cpp
vector<vector<int>> levelOrder(TreeNode* root){
    vector<vector<int>> ans; //ds to store answer
    if(root == NULL){
        return ans;
    }
    queue<TreeNode*> q;
    vector<int> level; //storing level wise
    q.push(root);
    while(!q.empty()){
        int size = q.size();
        for(int i=0; i<size; i++){
            TreeNode* node = q.front();
            q.pop();
            if(node -> left != NULL){
                q.push(node -> left);
            }
            if(node -> right != NULL){
                q.push(node -> right);
            }
            level.push_back(node -> val);
        } 
        ans.push_back(level);
    }
    return ans;
}
```
2. DFS
- **INORDER:- LEFT - ROOT - RIGHT**
**NORMAL APPROACH**
```cpp
void inorder(Node){
    if(Node == null)
        return;
    inOrder(Node -> left);
    cout<<Node -> data<<endl;
    inOrder(Node -> right);
}
```
**ITERATIVE INORDER**
```cpp
vector<int> inOrderTraversal(TreeNode* root){
    stack<TreeNode*> st;
    TreeNode* node = root;
    vector<int> inOrder;
    while(true){
        if(node != NULL){
            st.push(node);
            node = node -> left;
        }
        else{
            if(st.empty() == true){
                break;
            }
            st.pop();
            inOrder.push_back(node -> val);
            node = node -> right;
        }
    }
}
```


- **PREORDER:- ROOT - LEFT - RIGHT**
- TC: N
- SC: N

**NORMAL APPROACH**
```cpp
void preOrder(Node){
    if(node == NULL)
        return;

    cout<<node -> data<<endl;
    preOrder(node -> left);
    preOrder(node -> right);
}
```
**ITERATIVE PREORDER**
- TC: n
- SC: n(height)
```cpp
vector<int> preOrderTraversal(TreeNode* root){
    vector<int> preOrder;
    if(root == NULL){
        return preOrder;
    }
    stack<TreeNode*> s;
    s.push(root);
    while(!s.empty()){
        root = st.top();
        s.pop();
        preOrder.push_back(root -> val);
        if(root -> right != NULL){
            s.push(root -> right);
        }
        if(root -> left != NULL){
            s.push(root -> left);
        }
    }
    return preOrder;
}
```


- POSTORDER:- LEFT - RIGHT - ROOT
**NORMAL APPROACH**
```cpp
void postOrder(Node){
    if(node == NULL)
        return;

    postOrder(node -> left);
    postOrder(node -> right);
    cout<<node -> data<<endl;
}
```

**ITERATIVE POSTORDER(2 STACK)**

**ITERATIVE POSTORDER(2 STACK)**


### MAXIMUM DEPTH OF A TREE
```cpp
int maxDepth(TreeNode* root){
    if(root == NULL){
        return 0;
    }
    int lh = maxDepth(root -> left);
    int rh = maxDepth(root -> right);

    return 1 + max(lh, rh);
}
```



### DIAMETER OF A BINARY TREE

**NAIVE APPROACH**
- TC: N ^ 2
```cpp
find maxDia(Node* root){
    if(root == NULL){
        return;
    }
    lh = findLeft(root -> left);
    rh = findRight(root -> right);
    
    maxi = max(maxi, lh+rh);
    maxDia(root -> left);
    maxDia(root -> right);
}
```

**OPTIMAL APPROACH**
- TC: N 
- SC: N
```cpp
int diameterofBT(Node* root){
    int diameter = 0;
    height(root, diameter);
    return diameter;
}
int height(Node* root, int& diameter){
    if(root == NULL){
        return 0;
    }
    int lh = masDia(root -> left, maxi);
    int rh = maxDia(root -> right, maxi);
  
    //To update the maximum diameter value.
    diameter = max(diameter, lh+rh);

    return 1 + max(lh,rh);
}
```


### MAXIMUM PATH SUM
- TC: N
- SC: N
```cpp
int maxPathSum(Node* root){
    int maxi = INT_MIN;
    maxPathSum(root, maxi);
    return maxi;
}
int maxPath(Node* root,  int& sum) {
    if (root == NULL) 
        return 0;

    int left = maxSum(root -> left, sum);
    int right = maxSumR(root -> right, sum);

    sum = max(sum, left + right + root -> val);

    return max(left, right) + root -> val;
}
```


### CHECK IF TWO TREES ARE IDENTICAL
- TC: N
- SC: N
```cpp
bool isTreeSame(Node* p, Node* q){
    if(p == NULL || q == NULL){
        return (p == q);
    }
    return(p -> val == q -> val) && isTreeSame(p -> left, q -> left) && isTreeSame(p -> right, q -> right);
}
```



### ZIG-ZAG TRAVERSAL
-  TC: O(N) 
-  SC: O(H)
```c++
vector<vector<int>> zigZagLevelOrder(TreeNode* root){

    vector<vector<int> result>;

    if(root == NULL){
        return result;
    }

    queue<TreeNode*> nodeQueue;
    nodesQueue.push(root);
    bool isLeftToRight = true;

    while(!nodesQueue.empty()){
        int size = nodesQueue.size();
        vector<int> level(size);

        for(int i=0 ; i < size ; i++){
            TreeNode* node = nodesQueue.front();   
            nodesQueue.pop();

            int index = isLeftToRight ? i : (size - 1 - i);

            level[index] = node -> val;
            if(node->left != NULL){
                nodesQueue.push(node->left);
            }
            if(node->right != NULL){
                nodesQueue.push(node->right);
            }
        }
        isLeftToRight = !isLeftToRight;
        result.push_back(level)
    }
    return result;
}
```

### BOUNDARY TRAVERSAL - ANTICLOCKWISE

- TC: O(N)
-  SC: O(H) / N
```cpp
void addLeftBoundary(Node* root, vector<int> &res){
    Node* curr = root-> left;
    while(curr){
        if(!isLeaf(curr)){
            res.push_back(curr -> data);
        }
        if(curr -> left){
            curr = curr -> left;
        }
        else{
            curr = curr -> right;
        }
    }
}
void addRightBoundary(Node* root, vector<int> &res){
    vector<int> temp;
    Node* curr = root-> right;
    while(curr){
        if(!isLeaf(curr)){
            res.push_back(curr -> data);
        }
        if(curr -> right){
            curr = curr -> right;
        }
        else{
            curr = curr -> left;
        }
    }
    for(int i=temp.size()-1; i >= 0; i--){
        res.push_back(temp[i]);
    }
}

void addLeaves(Node* root, vector<int> &res){
    if(isLeaf(root)){
        res.push_back(root -> data){
            return;
        }
    }
    if(root -> left){
        addLeaves(root -> left, res);
    }
    if(root -> right){
        addLeaves(root -> right, res);
    }
}

vector<int> printBoundary(Node* root){
    vector<int> res;
    if(!root)return res;
    if(!isLeaf(root)){
        res.push_back(root -> data);
    }
    addLeftBoundary(root, res);
    addLeaves(root, res);
    addRightBoundary(root, res);
    return res;
}
```

### VERTICAL ORDER TRAVERSAL
```c++
class Solution {
public:
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        // Map to store nodes based on their column index, row index, and value
        map<int, map<int, multiset<int>>> nodes;
        
        // Queue for level-order traversal, with each item containing the node and its coordinates
        queue<pair<TreeNode*, pair<int, int>>> todo;
        todo.push({root, {0,0}}); // Push the root node with its coordinates (0, 0)

        // Perform level-order traversal
        while(!todo.empty()) {
            auto p = todo.front();
            todo.pop();
            TreeNode* node = p.first;
            int x = p.second.first; // Column index
            int y = p.second.second; // Row index
            nodes[x][y].insert(node->val); // Insert the node value at its coordinates
            
            // Enqueue left child with updated coordinates (x - 1, y + 1)
            if(node->left) {
                todo.push({node->left, {x - 1, y + 1}});
            }
            // Enqueue right child with updated coordinates (x + 1, y + 1)
            if(node->right) {
                todo.push({node->right, {x + 1, y + 1}});
            }
        }

        // Extract nodes from the map of maps and generate the result
        vector<vector<int>> ans;
        for(auto p : nodes) {
            vector<int> col;
            // Concatenate values of each column and insert them into the result
            for(auto q : p.second) {
                col.insert(col.end(), q.second.begin(), q.second.end());
            }
            ans.push_back(col);
        }
        return ans;
    }
};
```

### TOP VIEW OF BINARY TREE
- TC: n
- SC: n
```c++
class Solution {
    public:

    vector<int> topView(Node* root){
        vector<int> ans;
        if(root == NULL){
            return ans;
        }
        map<int, int> mpp;
        queue<pair<Node*, int>> q;
        q.push({root,0});
        while(!q.empty()){
            auto it = q.front();
            q.pop();
            Node* node = it.first;
            int line = it.second
            if(mpp.find(line)==mpp.end()){
                mpp[line]=node->data;
            }
            if(node -> left != NULL){
                q.push(node -> left, line-1);
            }
            if(node -> right != NULL){
                q.push(node -> right, line+1);
            }
        }
        for(auto it : mpp){
            ans.push_back(it.second);
        }
        return ans;
    }
}
```

### BOTTOM VIEW OF BINARY TREE
- TC: O(n)
- SC: O(h)
```c++
class Solution {
    public:

    vector<int> bottomView(Node* root){
        vector<int> ans;
        if(root == NULL){
            return ans;
        }
        map<int, int> mpp;
        queue<pair<Node*, int>> q;
        q.push({root,0});
        while(!q.empty()){
            auto it = q.front();
            q.pop();
            Node* node = it.first;
            int line = it.second
            mpp[line]=node->data;
        
            if(node -> left != NULL){
                q.push(node -> left, line-1);
            }
            if(node -> right != NULL){
                q.push(node -> right, line+1);
            }
        }
        for(auto it : mpp){
            ans.push_back(it.second);
        }
        return ans;
    }
}
```

### LEFT/RIGHT VIEW OF BINARY TREE
- TC: O(n)
- SC: O(H)

```cpp
class Solution{
    vector<int> rightSideView(TreeNode* root){
        vector<int> res;
        recursion(root, 0, res);
        return res;
    }
    public:
        void recursion(TreeNode* root, int level, vector<int> &res){
            if(root == NULL) return;
            if(res.size() == level){
                res.push_back(root -> val);
            }
            recursion(root -> right, level+1, res);

            recursion(root -> left, level+1, res);
        }
}

```

### SYMMETRIC BINARY TREE
- TC: O(n)
- SC: O(n)
```c++
bool  isSymmetric(TreeNode* root) {
    return root == NULL || isSymmetricHelp(root->left, root->right){
        if(left==NULL || right==NULL){
            return left == right;
        }
        if(left -> val != right -> val){
            return false;
        }
        return isSymmetricHelp(left->left, right->right) && isSymmetricHelp(left->right, right->left);
    }
}
```

### ROOT TO NODE / LEAF PATH
- inorder
```c++
class Solution{
    public:
        bool getPath(TreeNode *root, vector<int> arr, int x) {
            if (root == NULL) return false;

            arr.push_back(root -> val);

            if(root->val == x){
                return true;
            }        
            if(getPath(root->left, arr, x) || getPath(root->right,  arr, x)) {
                return true;
            }
            arr.pop_back();
            return false;
        }
    public:
        vector<int> Solution::solve(TreeNode* A, int B) {
            vector<int> arr;
            if(A == NULL){
                returna arr;
            }
            getPath(A, arr, B);
            return arr;
        }
}
```                                                                                                                                                          

### LOWEST COMMON ANCESTOR IN BT
- n
- n
```cpp
TreeNode*  lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if(root == NULL || root = p || root = q){
        return root;
    }
    TreeNode* left = lowestCommonAncestr(root -> left, p, q);
    TreeNode* right = lowestCommonAncestr(root -> right, p, q);

    if(left == NULL){
        return right;
    }
    if(right == NULL){
        return left;
    }
    else{ // when both side returns value
        return root;
    }
}
```

### MAXIMUM WIDTH 
- no of max nodes possible between leftmost and rightmost nodes in the last level
- index every node and then return (left - right + 1)
```c++
int widthOfBinary(TreeNode* root){
    if(!root){
        return 0;
    }
    int ans = 0;
    queue<pair<TreeNode*, int>> q;
    q.push({root, 0});
    while(!q.empty()){
        int size = q.size();
        int mmin = q.front().second;
        int first, last;
        for(int i=0; i<size; i++){
            int cur_id = q.front().second - mmin;
            TreeNode* hode = q.front().first;
            q.pop();
            if(i==0) first = cur_id;
            if(i==size-1) last = cur_id;
            if(node -> left){
                q.push({node -> left, cur_id*2+1});
            }
            if(node -> right){
                q,push({node -> right, cur_id*2+2});
            }
        }
        ans = max(ans, last - first + 1);
    }
    return ans;
}
```

### CHILDREN SUM PROPERTY
- If chil sums greater than parent return sum else return parent value (backtracking)
```c++

```

### PRINT ALL NODES FROM DISTANCE K
```C++
void markParents(TreeNode* root, unordered_map<TreeNode*, TreeNode*> &parent_track, TreeNode* target){
    queue<TreeNode*> queue;
    queue.push(root);
    while(!q.empty()){
        TreeNode* current = queue.front();
        queue.pop();
        if(current -> left){
            parent_track[current->left] = current;
            queue.push(current->left);          
        }
        if(current -> right){
            parent_track[curent -> right] = current;
            queue.push(current ->right);
        }
    }
}

vector<int>  distanceK(TreeNode *root, TreeNode *target, int k) {
    unordered_map<TreeNode*, TreeNode*> parent_track;
    markParents(root, parent_track, target);

    unordered_map<TreeNode*, bool> visited;
    queue<TreeNode*> queue;
    queue.push(target); 
    visited[target] = true;
    int curr_level = 0;
    while(!queue.empty()){
        int size = queue.size();
        if(curr_level == k){
            break;
        }
        curr_level++;
    }
    for(int i=0; i<size; i++){
        TreeNode* current = queue.front();
        queue.pop();
        if(current -> left && !visited(current -> right)){
            queue.push(current -> left);
            visited[current -> left] = true; 
        }
        if(current -> right && !visited(current -> left)){
            queue.push(current -> right);
            visited[current -> right] = true;
        }
        if(parent_track[current] && !visited[parent_track[current]]){
            queue.push(parent_track(current));
            visited[parent_track[current]] = true;
        }
    }
    vector<int> result;
    while(!queue.empty()){
        TreeNode* current = queue.front();
        queue.pop();
        result.push_back(current->val);
    }
    return result;
}
```


