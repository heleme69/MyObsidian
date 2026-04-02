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
> - Giả sử $A \in \mathfrak{A}$, $A = \bigcup_{k \in I} J_{k}$, và vì $J_{k}$ phân hoạch $X$, phần bù của $A$ là: $A ^{c} = X \setminus A = \bigcup_{k \in \mathbb{N} \setminus I} J_{k}$ và vì $\mathbb{N} \setminus I$ cũng là tập con của $I$ nên $A ^{c} \in \mathfrak{A}$
> - Giả sử ta có dãy $A_{1}, A_{2}, \dots A_{n} \in \mathfrak{A}$. Mỗi tập $A_{n}$ được cho bởi: $A_{n} = \bigcup_{k \in I_{n}}J_{k}$. Khi đó, $\bigcup_{n=1} ^{\infty}A_{n} = \bigcup_{n=1}^{\infty} \bigcup_{k \in I_{n}}J_{k} = \bigcup_{k \in \bigcup_{n=1}^{\infty}I_{n}}J_{k}$. Vì $\bigcup_{n=1}^{\infty}I_{n} \subseteq \mathbb{N}$ nên $\bigcup_{n=1}^{\infty} A_{n} \in \mathfrak{A}$.
> Vậy $\mathfrak{A}$ là một $\sigma$ - đại số
> 
> b) Chứng minh $\mu$ là độ đo trên ${} \mathfrak{A}$:
> - Vì $\mu(A)$ chỉ số lượng phần tử nên $\mu(A)$ $\ge 0$.
> - Tập rỗng tương đương $I = \emptyset$ hay không có đoạn $J_{k}$ nào, khi đó $\mu(\emptyset) = 0$.
> - Lấy $\{ E_{n} \}_{n=1} ^{\infty}$ là dãy rời nhau, ta cần chứng minh $\mu\left( \bigcup_{n=1}^{\infty}E_{n} \right) = \sum_{n=1}^{\infty} \mu (E_{n})$.
>     - Giả sử $E_{n} = \bigcup_{k \in I_{n}} J_{k}$, ta có $\bigcup_{n=1} ^{\infty} E_{n} = \bigcup_{n=1} ^{\infty} \bigcup_{k \in I_{n}}J_{k} = \bigcup_{k \in \bigcup_{n=1}^{\infty}I_{n}}J_{k}$
>     - Vì $\mu\left( \bigcup_{n=1}^{\infty}E_{n} \right) = \left\lvert  \bigcup_{n=1} ^{\infty}I_{n}  \right\rvert$ và vì $I_{n}$ rời rạc, nên $\left\lvert  \bigcup_{n=1}^{\infty } I_{n}  \right\rvert = \sum_{n=1}^{\infty} \lvert I_{n} \rvert = \sum_{n=1}^{\infty} \mu(E_{n})$
>       
>
> c) Lấy $(A_{n}: n \in \mathbb{N}) \subset \mathfrak{A}$, $A_{n} = (n, \infty)$ với mọi $n \in \mathbb{N}$. Chứng minh dãy $(A_{n}: n \in \mathbb{N})$ có $\lim_{ n \to \infty } \mu (A_{n}) \neq \mu (\lim_{ n \to \infty } A_{n})$
> - Ta biểu diễn ${} A_{n}$ theo ${} J_{k}$: $A_{n} = \bigcup_{n = k+1}^{\infty} (k-1, k] = \bigcup_{n = k+1} ^{\infty} J_{k}$.
>   Vì $A_{n}$ được cấu tạo từ vô hạn các tập $J_{k} \subset \mathfrak{J}$, mỗi ${} J_{k}$ có lực lượng bằng một, nên $\mu (A_{n}) = \infty$ $\forall n \in \mathbb{N}$, Vậy $\lim_{ n \to \infty } \mu (A_{n}) = \infty$.
> - Ta lại có ${} (A_{n})$ là dãy giảm, giới hạn của dãy là giao của tất cả các tập:
>   $\lim_{ n \to \infty } A_{n} = \bigcap_{n=1} ^{\infty} (n, \infty)$.
>   Giả sử $x \in \bigcap_{n =1} ^{\infty} (n, \infty)$ thì $x > n$, $\forall n \in \mathbb{N}$, dẫn tới n không thể tồn tại. Suy ra $\lim_{ n \to \infty } A_{n} = \emptyset$, hay: $\mu (\lim_{ n \to \infty } A_{n}) = \mu (\emptyset) = 0$.
> - Vậy $\lim_{ n \to \infty } \mu (A_{n}) \neq \mu (\lim_{ n \to \infty }A_{n})$.

> [!exr] Prob 1.25
> Let $(X, \mathfrak{A}, \mu)$ be a $\sigma$ - finite measure space so that there exists a sequence ${} (E_{n}: n \in \mathbb{N})$ in $\mathfrak{A}$ such that $\bigcup_{n \in \mathbb{N}}E_{n} = X$ and $\mu(E_{n}) < \infty$. Show that there exists a disjoint sequence ${} (F_{n}: n \in \mathbb{N})$ in $\mathfrak{A}$ such that $\bigcup_{n \in \mathbb{N}}F_{n} = X$ and $\mu (F_{n})< \infty$ for every $n \in \mathbb{N}$.
  
> [!prf]
> - Ta định nghĩa dãy $(F_{n})$ theo quy nạp:
> 	- $F_{1} = E_{1}$
> 	- $F_{2} = E_{2} \setminus E_{1}$
> 	- $F_{3} = E_{3} \setminus (E_{1} \cup E_{2})$
> 	- Tổng quát: $F_{n} = E_{n} \setminus \bigcup_{k = 1}^{n-1} E_{k}$
> 	  ${} F_{n}$ vẫn thuộc $\mathfrak{A}$ do $\mathfrak{A}$ là $\sigma$ - đại số.
> - Ta dễ dàng kiểm tra được tính rời rạc, ta kiểm tra tính hợp $\left( \bigcup F_{n} = X \right)$
> 	- $n = 1$ đúng, ta giả sử đúng với $n - 1$: $\bigcup_{k = 1} ^{n-1} F_{k} = \bigcup E_{k= 1} ^{n - 1}$,
> 	- Xét n: $\bigcup_{k = 1} ^{n} F_{k} = \bigcup_{k = 1} ^{n - 1} F_{k} \bigcup F_{n} = \bigcup_{k = 1} ^{n -1} E_{k} \bigcup \left( E_{n} \setminus \bigcup_{k = 1} ^{n - 1} E_{k}  \right) = \bigcup_{k = 1} ^{n} E_{k}$, cho $n \to \infty$, ta có
> 	  $\bigcup_{n \in \mathbb{N}} F_{n} = \bigcup_{n \in \mathbb{N}} E_{n} = X$.
> 	- Vì $F_{n} \subseteq  E_{n}$ nên $\mu(F_{n}) \le \mu(E_{n}) \le \infty$
> 	  
  
  
  
  
  
  $\pi$