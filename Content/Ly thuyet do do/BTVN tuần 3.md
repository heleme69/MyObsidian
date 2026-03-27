# Problems

> [!exr] Prob 1.24
> Let $X$ = $(0,\infty)$ and let $\mathfrak{J} = \{ J_{k}: k \in \mathbb{N} \}$ where $J_{k} = (k-1,k]$ for all $k \in \mathbb{N}$. Let $\mathfrak{A}$ be the collection of all arbitrary unions of member of $\mathfrak{J}$. For every $A \in \mathfrak{A}$ let us define $\mu(A)$ to be the number of element of $\mathfrak{F}$ that constitute A.
> a) Show that $\mathfrak{A}$ is a $\sigma$ - algebra of subset of $X$.
> b) Show that $\mu$ is a measure on the $\sigma$ - algebra $\mathfrak{A}$.
> c) Let $(A_{n}:n \in \mathbb{N})$ $\subset \mathfrak{A}$ where $A_{n} = (n, \infty)$ for $n \in \mathbb{N}$. Show that for the decresing sequence $(A_{n}: n \in N)$ we have $\lim_{ n \to  \infty }\mu(A_{n} )\neq \mu(\lim_{ n \to \infty }A_{n})$

> [!prf] 
> Ta nhận thấy $\mathfrak{J}$ là phân hoạch các tập rời nhau của không gian $X = (0, \infty)$. Ngĩa là $J_{k}$ rời nhau đôi một và hội của chúng bằng không gian $X$. Vì $\mathfrak{J}$ là họ bất kì của hội $J_{k}$ trong $\mathfrak{A}$, ta có với mọi $A \in \mathfrak{A}$, ta có $A = \bigcup_{k \in I} J_{k}$, với $I \subseteq \mathbb{N}$ là tập hợp chỉ số bất kì, khi đó $\mu(A) = \lvert I \rvert$ là lực lượng của chỉ số $I$.
> 
> a) Ta chứng minh $\mathfrak{A}$ là $\sigma$ - đại số:
> - Ta có $X = (0, \infty) = \bigcup_{k=1} ^{\infty} J_{k}$, vì là hợp tất cả phần tử trong $\mathfrak{J}$ mà $\mathfrak{A}$ là hội bất kì của tất cả các tập trong $X$ nên $X \in \mathfrak{A}$.
> - Giả sử $A \in \mathfrak{A}$, $A = \bigcup_{k \in I} J_{k}$, và vì ${} J_{k}$ phân hoạch $X$, phần bù của $A$ là: $A ^{c} = X \setminus A = \bigcup_{k \in \mathbb{N} \setminus I} J_{k}$ và vì $\mathbb{N} \setminus I$ cũng là tập con của $I$ nên $A ^{c} \in \mathfrak{A}$
> - Giả sử ta có dãy $A_{1}, A_{2}, \dots A_{n} \in \mathfrak{A}$. Mỗi tập $A_{n}$ được cho bởi: $A_{n} = \bigcup_{k \in I_{n}}J_{k}$. Khi đó, $\bigcup_{n=1} ^{\infty}A_{n} = \bigcup_{n=1}^{\infty} \bigcup_{k \in I_{n}}J_{k} = \bigcup_{k \in \bigcup_{n=1}^{\infty}I_{n}}J_{k}$. Vì $\bigcup_{n=1}^{\infty}I_{n} \subseteq \mathbb{N}$ nên $\bigcup_{n=1}^{\infty} A_{n} \in \mathfrak{A}$.
> Vậy $\mathfrak{A}$ là một $\sigma$ - đại số
> 
> b) Chứng minh $\mu$ là độ đo trên $\mathfrak{A}$:
> - Vì $\mu(A)$ chỉ số lượng phần tử nên $\mu(A)$ $\ge 0$.
> - Tập rỗng tương đương $I = \emptyset$ hay không có đoạn $J_{k}$ nào, khi đó $\mu(\emptyset) = 0$.
> - Lấy $\{ E_{n} \}_{n=1} ^{\infty}$ là dãy rời nhau, ta cần chứng minh $\mu\left( \bigcup_{n=1}^{\infty}E_{n} \right) = \sum_{n=1}^{\infty} \mu (E_{n})$.
>     - Giả sử $E_{n} = \bigcup_{k \in I_{n}} J_{k}$, ta có $\bigcup_{n=1} ^{\infty} E_{n} = \bigcup_{n=1} ^{\infty} \bigcup_{k \in I_{n}}J_{k} = \bigcup_{k \in \bigcup_{n=1}^{\infty}I_{n}}J_{k}$
>     - Vì $\mu\left( \bigcup_{n=1}^{\infty}E_{n} \right) = \left\lvert  \bigcup_{n=1} ^{\infty}I_{n}  \right\rvert$ và vì $I_{n}$ rời rạc, nên $\left\lvert  \bigcup_{n=1}^{\infty } I_{n}  \right\rvert = \sum_{n=1}^{\infty} \lvert I_{n} \rvert = \sum_{n=1}^{\infty} \mu(E_{n})$
> Vậy $\mu$ là độ đo trên $\mathfrak{A}$
>     
> 
> c) 
> 

* Lấy $\{E_n\}_{n=1}^\infty$ là dãy rời nhau, ta cần chứng minh $\mu (\bigcup_{n=1}^\infty E_n) = \sum_{n=1}^\infty \mu(E_n)$.
    > Giả sử $E_n = \bigcup_{k \in I_n} J_k$, ta có:
    > $$\bigcup_{n=1}^\infty E_n = \bigcup_{n=1}^\infty \bigcup_{k \in I_n} J_k = \bigcup_{k \in \bigcup_{n=1}^\infty I_n} J_k$$
    > Vì $\mu (\bigcup_{n=1}^\infty E_n) = |\bigcup_{n=1}^\infty I_n|$ và vì $I_n$ rời rạc, nên:
    > **
$\pi$