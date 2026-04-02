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
  
> [!exr] Prob 1.29
> Let X be a countably infinite set and let $\mathfrak{A}$ be the $\sigma$ - algebra of all subset of $X$. Define a set function $\mu$ on $\mathfrak{A}$ by defining for every $E \in \mathfrak{A}$
> $$
> \mu(E) = 
> \begin{cases}
> 0, & \text{if }  E \text{ is a finite set} \\
> \infty, & \text{if } \text{otherwise}
> \end{cases}
> $$ 
> a) Show that $\mu$ is additive but not countably additive on $\mathfrak{A}$
> b) Show that X is a limit of an increasing sequence ${} (E_{n}: n \in \mathbb{N})$ in $\mathfrak{A}$ with $\mu(E_{n}) = 0$ for all n, but $\mu(X) = 0$.

> [!prf]
> a) 
> - Cho $A, B \in \mathfrak{A}$ là hai tập rời rạc, ta xét hai trường hợp:
> 	- Nếu $A, B$ đều hữu hạn: Khi đó $A \cup B$ hữu hạn nên $\mu (A \cup B) = 0$; đồng thời $\mu(A) + \mu(B) = 0 + 0 = 0$;
> 	- Ít nhất một trong hai tập $A$ hoặc $B$ là vô hạn: Khi đó $A \cup B$ là một tập vô hạn nên $\mu(A \cup B) = \infty$; còn $\mu(A) + \mu(B)$ sẽ có dạng $0 + \infty$ hoặc $\infty + 0$ và đều bằng $\infty$.
> 	Từ hai trường hợp trên ta kết luận $\mu$ có tính cộng tính hữu hạn
> - Ta chứng minh $\mu$ không có tính $\sigma$ - cộng tính:
> 	- Vì $X$ là tập vô hạn đếm được, ta liệt kê được các phần tử của $X$:
> 	  $X = \{ x_{1}, x_{2}, x_{3}, \dots,x_{n},\dots \}$
> 	  Ta chọn dãy ${} (E_{n})_{n \in \mathbb{N}}$ sao cho mỗi tập chỉ chứa đúng một phần tử: $E_{n} = \{ x_{n} \}$.
> 	- Ta nhận thấy: $\mu(E_{n}) = 0$ $\forall n \in \mathbb{N}$ và $\sum_{n=1}^{\infty} \mu(E_{n}) = \sum_{n=1}^{\infty} 0 = 0$; 
> 	  nhưng $\bigcup_{n=1} ^{\infty} E_{n} = \{ x_{1}, x_{2}, x_{3}, \dots \} = X$, mà $X$ là tập vô hạn (đếm được), nên $\mu\left( \bigcup_{n=1} ^{\infty} E_{n} \right) = \mu (X) = \infty$, mâu thuẫn với kết quả trước.
>   Vậy $\mu$ không có tính $\sigma$ - cộng tính.
> b)
> - Với $E_{n} = \{ x_{1}, x_{2}, x_{3}, \dots, x_{n} \}$ (mỗi dãy ${} E_{i}$ chứa $i$ phần tử): ta có $E_{1} \subset E_{2} \subset E_{3} \subset \dots$, do đó ${} (E_{n})$ là dãy tăng.
> - Vì mỗi phần tử
> 

  
  $\pi$