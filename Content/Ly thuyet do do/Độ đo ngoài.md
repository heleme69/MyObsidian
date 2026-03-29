
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
> [!def] 
> Cho $\mu^{*}$ là độ đo ngoài, tập $E$ được gọi là đo được theo nghĩa $\mu^{*}$ nếu:
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
>     - Kết hợp $\text{Observation 1.}$ ta kết luận $A \cup B \in \mathfrak{M}$

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
> 	- Đặt $S_{n} = \bigcup_{k=1} ^{n} A_{k}$, khi đó 
> 

 



$\pi$