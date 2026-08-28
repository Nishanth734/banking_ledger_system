#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define endl '\n'

void solve() {
    int n;
    cin>>n;
    vector<int> a(n);
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    unordered_map<int,int> mp;
    for(int i=0;i<n;i++)
    mp[a[i]]++;
    if(n==2||mp.size()==1) {cout<<"Yes"<<endl;return ;}
    if(mp.size()>2)
    {
        cout<<"No"<<endl;return ;
    }
    auto it=mp.begin();
    int freq1=it->second;it++;
    int freq2=it->second;
    if(abs(freq1-freq2)<=1)
    cout<<"Yes"<<endl;
else cout<<"No"<<endl;
    
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t ;
    cin >> t;

    while (t--) {
        solve();
    }

    return 0;
}