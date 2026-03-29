# [I] Construction of Measure by Means of Outer Measure

> [!def] 
> Lấy X là tập bất kì: $\mu^{*}:2^{X} \to [0,+\infty]$ được gọi là độ đo ngoài nếu: 
> 1. $\mu^{*}(\emptyset) = 0$
> 2.  đơn điệu: $E_{1},E_{2} \in \mathfrak{B}(X)$, $E_{1} \subset E_{2}\implies \mu^{*}(E_{1})\le\mu^{*}(E_{2})$
> 3. $\sigma$ - dưới cộng tính: $(E_{n}:n \in N)\subset \mathfrak{B}(X)\implies \mu^{*}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right)\le \sum_{n \in \mathbb{N}} \mu^{*}(E_{n})$

Mục tiêu: Xây dựng $\sigma$ - đại số liên quan $\mu^{*}$:  $\mu^{*}|_{\sigma \text{- đại số}}$ là độ đo 
$$
\sigma \text{ - cộng tính} \iff \begin{cases}
\sigma \text{ - dưới cộng tính} \\
\text{cộng tính hữu hạn}
\end{cases}
$$
> [!def] Carathéodory's criterion
> Cho $\mu^{*}$ là độ đo ngoài, tập $E$ được gọi là đo được theo nghĩa $\mu^{*}$ (*Carathéodory*) nếu:
> $$
> \forall T \subset X : \mu^*(T) = \mu^*(T \cap E) + \mu^*(T \cap E^c) \tag{1}
> $$
> Trong đó $T$ là tập thử bất kì trên $X$
> ký hiệu: $\mathfrak{M}(\mu^{*}) = \{ E: E \text{ - đo được } \mu^{*} \}$
> 

> [!obs] $\sigma$ - dưới cộng tính
> Vì $\sigma$ - dưới cộng tính suy ra tính hữu hạn cộng tính, ta có với $A = (A \cap E) \cup(A \cap E^{c})$ $\implies$ $\mu^{*}(A)\le \mu^{*}(A \cap E) + \mu^{*}(A \cap E^{c})$

 > [!thm] $\mathfrak{M(\mu ^{*})}$  là đại số trên X

> [!prf] 
> 1. Lấy $E = \emptyset$, với $T \in X$ bất kì, ta có:
>     - $T \cap \emptyset = \emptyset$ $\implies$ $\mu^{*}(\emptyset) = \emptyset$
>     - $T \cap \emptyset^{c} = T \cap X = T$ $\implies$ $\mu^{*}(T)$
>     - $0 + \mu^{*}(T) = \mu^{*}(T)$
>     Vậy $\emptyset \in \mathfrak{M}(\mu^{*})$ 
> 2. Lấy $E \in \mathfrak{M}(\mu^{*})$, ta có $E^{c} \in \mathfrak{M(\mu^{*})}$ do tính đối xứng của $(1)$
> 3. Lấy $A, B \in \mathfrak{M}$, ta cần chứng minh: $\mu^{*}(T) = \mu^{*}(T \cap (A \cup B)) + \mu^{*}(T \cap (A \cup B)^{c}$
>     - Sử dụng:
>    $$
>       \begin{align*}
>    T &= (T \cap A) \cup (T \cap A^{c}) \\
>    &= (T \cap A) \cup (T \cap A^{c}\cap B) \cup (T \cap A^{c} \cap B^{c}) \\
>    &= (T \cap A) \cup (T \cap A^{c}\cap B) \cup (T \cap(A \cup B)^{c}) \\
>    &= ((T \cap A) \cup (T \cap A^{c}\cap B)) \cup (T \cap(A \cup B)^{c}) \\
>    &= (T \cap(A \cup B)) \cup (T \cap (A \cup B)^{c})
>    \end{align*}
>    $$
>     - Ta có:
>    $$
>    \begin{align*} & \text{Vì } \mu^* \Big( (T \cap A) \cup (T \cap A^c \cap B) \Big) \ge \mu^* \Big( T \cap (A \cup B) \Big) \\ \implies & \mu^* \Big( (T \cap A) \cup (T \cap A^c \cap B) \cup (T \cap(A \cup B)^c) \Big) \\ &\quad = \mu^*(T) \\ &\quad \ge \mu^* \Big( (T \cap(A \cup B)) \cup (T \cap (A \cup B)^c) \Big) \end{align*}
>    $$
>     - Kết hợp **Observation 1.**  ta kết luận $A \cup B \in \mathfrak{M}$

> [!prp] Cộng tính hữu hạn
> Với $A, B \in \mathfrak{M}(\mu ^{*})$, và $A \cap B = \emptyset$, ta cần chứng minh $\mu ^{*}(A \cup B) = \mu ^{*}(A) + \mu ^{*}(B)$.
> Ta tổng quát hóa, và chứng minh $\mu ^{*}(T \cap (A \cup B)) = \mu ^{*} (T \cap A) + \mu ^{*}(T \cap B)$, khi đó điều cần chứng minh đúng với $T = X$.
> Ta có: 
> $$
> \begin{align*}
> \mu ^{*} (T \cap (A \cup B)) &=  \mu ^{*}(T \cap (A \cup B) \cap A) +\mu  ^{*}(T \cap (A \cup B) \cap A ^{c}) \\
> &= \mu ^{*}(T \cap A) + \mu(T \cap(A \cap A^{c})\cup(B \cap A^{c})) \\
> &= \mu ^{*}(T \cap A) + \mu(T \cap B) 
> \end{align*}
> $$
> Đẳng thức cuối xảy ra do $A, B$ rời nhau dẫn tới $B \subseteq A^{c}$

> [!thm] $\mathfrak{M(\mu ^{*})}$ là $\sigma$ - đại số trên $X$
> 

> [!prf]
> Lấy tùy ý $\{ A_{n} \}_{n=1} ^{\infty} \subset \mathfrak{M}$, ta cần chứng minh $\bigcup_{n=1} ^{\infty} A_{n} = A \in \mathfrak{M}$.
> Giả sử $A_{n}$ rời nhau (sử dụng kĩ thuật rời rạc hóa), để chứng minh $A \in \mathfrak{M}$, ta cần kiểm tra (1), nghĩa là $\forall T \in A$, $\mu ^{*}(T) = \mu ^{*}(T \cap A) + \mu ^{*}(T \cap A^{c})$.
> - Ta có chiều thuận $(\le)$ đúng do **Observation 1.** 
> - Chiều ngược $(\ge)$: 
> 	- Do tính $\sigma$ - dưới cộng tính: 
> 	  $\mu ^{*}(T \cap A) \le \sum_{k=1}^{\infty} \mu ^{*} (T \cap A_{k}) = \lim_{ n \to \infty } \sum_{k=1}^{n} \mu ^{*} (T \cap A_{k})$
> 	- Vì $A_{k}$ rời rạc nên các số hạng đầu tiên thỏa tính hữu hạn cộng tính:
> 	  $\sum_{k=1}^{n} \mu ^{*} (T \cap A_{k}) = \mu ^{*} \left( T \cap \bigcup_{k=1} ^{n} A_{k} \right)$,
> 	  do đó số hạng $\mu ^{*} (T \cap A)$ $\le$ $\lim_{ n \to \infty } \mu ^{*} \left( T \cap \bigcup_{k=1} ^{n} A_{k} \right)$
> 	- Ta có:
> 	   $A = \bigcup_{k=1} ^{\infty} A_{k} \supset \bigcup_{k=1} ^{n} A_{k}$, do đó phần bù: $A ^{c} \subset \left( \bigcup_{k=1} ^{n} A_{k} \right)^{c}$,
> 	- Vậy:
> $$
> \begin{align*}
> \mu ^{*}(T \cap A) + \mu ^{*}(T \cap A ^{c}) &\le \lim_{ n \to \infty } \left( \mu ^{*} \left( T \cap \bigcup_{k=1} ^{n} A_{k} \right) \right) +\mu ^{*} (T \cap A^{c}) \\
> &\le \lim_{ n \to \infty } \left( \mu ^{*}\left( T \cap \bigcup_{k=1} ^{n} A_{k} \right)+\mu ^{*}\left( T \cap\left( \bigcup_{k=1}^{n} A_{k} \right) ^{c} \right) \right) \\
> \end{align*}
> $$
> 	- Đặt $S_{n} = \bigcup_{k=1} ^{n} A_{k}$, khi đó $\mu ^{*} (T \cap A) + \mu ^{*} (T \cap A ^{c}) \le \lim_{ n \to \infty } \mu ^{*}(T \cap S_{n}) + \mu ^{*}(T \cap S_{n}^{c})$
> 	- Vì $\mathfrak{M(\mu ^{*})}$ là đại số, và vì $S_{n}$ là hội hữu hạn nên nó thuộc $\mathfrak{M(\mu ^{*})}$, nghĩa là $\mu ^{*} (T \cap S_{n}) + \mu ^{*} (T \cap S_{n} ^{c}) = \mu ^{*}(T)$, với mọi n.
> 	  Vậy ta có $\mu ^{*} (T) \ge \mu ^{*} (T \cap A) + \mu ^{*} (T \cap A ^{c})$

> [!def] Độ đo đầy đủ
> Một không gian đo $(X, \mathfrak{M}, \mu)$ được gọi là đầy đủ nếu: Mọi tập con của một tập hợp có độ đo bằng 0 (null) thì đều phải đo được và cũng có độ đo bằng 0.
> Nếu $E \in \mathfrak{M}$ và $\mu (E) = 0 \implies \forall F \subset E: \mu (F) \le \mu (E) = 0$

> [!thm] $\mu ^{*}(\mathfrak{M})$ là độ đo đầy đủ trên $X$
> 

> [!prf]
> Giả sử E $\in \mathfrak{M}$ sao cho $\mu ^{*} (E) = 0$. Xét tập $F$ bất kì là con của $E$, ta cần chứng minh $\mu ^{*} (F) = 0$ và $F$ là tập đo được, tức là $F \in \mathfrak{M}$.
> - Vì độ đo ngoài có tính đơn điệu nên: $0 \le \mu ^{*} (F) \le \mu ^{*} (E) = 0$.
> - Vì độ đo ngoài có tính $\sigma$ - dưới cộng tính nên: $\mu ^{*} (T) \le \mu ^{*} (T \cap F) + \mu ^{*} (T \cap F^{c})$, ta chứng minh chiều ngược lại $(\ge)$ để thỏa hệ thức (1).
> 	  - Ta có $\mu ^{*} (T \cap F ) \le \mu ^{*} (F) = 0$ $\implies \mu ^{*} (T \cap F) = 0$
> 	  - Ta có $\mu ^{*} (T \cap F ^{c}) \le \mu ^{*} (T)$ do tính đơn điệu
> 	Vậy $\mu ^{*} (T \cap F) + \mu ^{*} (T \cap F ^{c}) \le 0 + \mu  (T) = \mu ^{*} (T)$, kết hợp tính $\sigma$ - cộng tính, ta được $F \in \mathfrak{M}$. 

# [IV] Construction of Outer Measures

> [!def]  Lớp phủ
> Một họ $\mathfrak{V}$ gồm các tập con của một tập hợp $X$ được gọi là một *lớp phủ* (covering class) nếu nó thỏa mãn các điều kiện sau: 
> - Tồn tại dãy $(V_{n} : n \in \mathbb{N}) \subset \mathfrak{V}$ sao cho $\bigcup_{n \in N} V_{n} = X$,
> - $\emptyset \in \mathfrak{V}$.
> Với mỗi $E \in \mathfrak{B}(X) = 2^{X}$, dãy $(V_{n}: n \in \mathbb{N}) \subset \mathfrak{V}$ sao cho ${} \bigcup_{n \in \mathbb{N}} V_{n} \supset E {}$ được gọi là dãy phủ $E$.

> [!thm] Độ đo ngoài theo $\gamma$
> Lấy $\mathfrak{V}$ là dãy phủ trên $X$, lấy  $\gamma$ là hàm bất kì trên $\mathfrak{V}$ sao cho:
> - $\gamma (V) \in [0, \infty]$ với mỗi $V \in \mathfrak{V}$
> - $\gamma (\emptyset) = 0$. 
> Định nghĩa hàm $\mu ^{*}$ trên $\mathfrak{B} (X)$ dựa trên $E \in \mathfrak{B} (X)$:
> $$
> \mu ^{*} (E) = inf \left\{\sum_{n \in \mathbb{N}} \gamma (V_{n}: n \in \mathbb{N}) \subset \mathfrak{V}, \bigcup_{n \in \mathbb{N}} V_{n} \supset E \right\}
> $$
> Khi đó $\mu ^{*}$ là độ đo ngoài trên $X$. Ta gọi $\mu ^{*}$ là độ đo ngoài sinh bởi $\gamma$

> [!prf] 
> Ta cần kiểm tra: độ đo tập rỗng = 0, tính đơn điệu và tính $\sigma$ - dưới cộng tính
> 1. Ta chọn $(V_{n} = \emptyset : n \in N)$, khi đó $\mu ^{*} (E) = inf \left( \sum_{n \in \mathbb{N}} V_{n}\right) = 0$
> 2. Giả sử $E_{1} \subset E_{2}$, cần chứng minh $\mu ^{*} (E_{1}) \le \mu ^{*} (E_{2})$. Điều này đúng vì hàm $\mu ^{*}$ nhận giá trị dương, nên nếu $A \subset B$ thì $inf(A) \le inf(B)$.
> 3. Lấy $(E_{n}: n \in \mathbb{N}) \subset \mathfrak{B} (X)$. Với $\epsilon > 0$, từ định nghĩa infimum, ta tìm được dãy $(V_{n,k}: k \in \mathbb{N}) \subset \mathfrak{V}$, sao cho $\bigcup_{k \in \mathbb{N}} V_{n,k} \supset E_{n}$ và $\sum_{k \in N} V_{n,k} < \mu ^{*} (E_{n}) + \frac{\epsilon}{2^{n}}$ 
>    Vì $\mu ^{*}$ được định nghĩa là infimum, nên $\mu ^{*} \left( \bigcup E_{n} \right)$ phải nhỏ hơn tổng giá trị của các phủ của $E$: $\mu ^{*}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right) \le \sum_{n \in \mathbb{N}} \sum_{k \in \mathbb{N}} \gamma(V_{n,k})$
>    Áp dụng bất đẳng thức theo định nghĩa infimum: 
>    $\mu ^{*}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right)\le \sum_{n \in \mathbb{N}} \left\{  \mu ^{*}(E_{n}) + \frac{\epsilon}{2 ^{n}} \right\}$
>    Ta có  $\sum_{n \in N} \frac{1}{2^{n}}\epsilon = \epsilon$, vậy $\mu ^{*} \left( \bigcup_{n \in N} E_{n} \right) \le \sum_{n \in \mathbb{N}} E_{n}$

> [!thm] 
> Lấy $\mathfrak{V}$ là lớp phủ của tập $X$ và hàm $\gamma$ trên $\mathfrak{V}$, có $\mathfrak{V}(V) \in [0, \infty]$ với mỗi $V \in \mathfrak{V}$ và $\gamma(\emptyset) = 0$.
>  Định nghĩa độ đo sinh bởi $\gamma$ và dựa trên $E \in \mathfrak{B}(X)$:
> $\mu ^{*} (E) =  inf\left\{  \sum_{n \in \mathbb{N}} \gamma(V_{n}: n \in \mathbb{N}), \bigcup_{n \in \mathbb{N}} \supset E  \right\}$.
> Ta có hai điều sau tương đương cho điều kiện *Carathéodory*:
> 1. $\mu ^{*}(A) = \mu ^{*} (A \cap E) + \mu ^{*} (A \cap E ^{c})$ với mọi $A \in \mathfrak{B}$
> 2. $\mu ^{*} (V) = \mu ^{*} (V \cap E) + \mu ^{*} (V \cap E ^{c})$ với mơi $V \in \mathfrak{V}$

> [!prf]
> Ta chứng minh 2. suy ra 1. Lấy $E \in \mathfrak{B}(X)$. Với tùy ý $A \in \mathfrak{B}(X)$,  lấy $(V_{n}: n \in \mathbb{N})$ trong $\mathfrak{V}$ là dãy phủ A: ${} \bigcup_{n \in \mathbb{N}}V_{n} \supset A {}$
> 
> 

$\pi$