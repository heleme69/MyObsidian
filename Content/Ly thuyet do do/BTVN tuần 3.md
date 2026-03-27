# Problems

> [!exr] Prob 1.24
> Let $X$ = $(0,\infty)$ and let $\mathfrak{J} = \{ J_{k}: k \in \mathbb{N} \}$ where $J_{k} = (k-1,k]$ for all $k \in \mathbb{N}$. Let $\mathfrak{A}$ be the collection of all arbitrary unions of member of $\mathfrak{J}$. For every $A \in \mathfrak{A}$ let us define $\mu(A)$ to be the number of element of $\mathfrak{F}$ that constitute A.
> a) Show that $\mathfrak{A}$ is a $\sigma$ - algebra of subset of $X$.
> b) Show that $\mu$ is a measure on the $\sigma$ - algebra $\mathfrak{A}$.
> c) Let $(A_{n}:n \in \mathbb{N})$ $\subset \mathfrak{A}$ where $A_{n} = (n, \infty)$ for $n \in \mathbb{N}$. Show that for the decresing sequence $(A_{n}: n \in N)$ we have $\lim_{ n \to  \infty }\mu(A_{n} )\neq \mu(\lim_{ n \to \infty }A_{n})$

> [!prf] 
> Ta nhận thấy $\mathfrak{J}$ là phân hoạch các tập rời nhau của không gian $X = (0, \infty)$. Ngĩa là $J_{k}$ rời nhau đôi một và hội của chúng bằng không gian $X$. Vì $\mathfrak{J}$ là họ bất kì của hội $J_{k}$ trong $\mathfrak{A}$, ta có với mọi $A \in \mathfrak{A}$, ta có $A = \bigcup_{k \in I} J_{k}$, với $I \subseteq \mathbb{N}$ là tập hợp chỉ số bất kì, khi đó $\mu(A) = \lvert I \rvert$ là lực lượng của chỉ số $I$.
> a) Ta chứng minh $\mathfrak{A}$ là $\sigma$ - đại số:
> - Ta có $X = (0, \infty) = \bigcup_{k=1} ^{\infty} J_{k}$, vì là hợp tất cả phần tử trong $\mathfrak{J}$ mà $\mathfrak{A}$ là hội bất kì của tất cả các tập trong $X$ nên $X \in \mathfrak{A}$.
> - Giả sử $A \in \mathfrak{A}$, $A = \bigcup_{k \in I} J_{k}$