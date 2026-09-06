
> [!def] (Tập affine)
> Cho X là một không gian vectơ, ta ký hiệu $L(x,y), [x,y], (x,y), [x,y)$ lần lượt là đường thẳng đi qua x, y, đoạn thẳng, khoảng mở và nửa khoảng nối hai điểm x và y. Tức là:
> $$
> \begin{align}
> L(x,y) &=  {λx+(1−λ)y \;|\; λ ∈ R}, \\
> [x, y] &=  {λx +(1−λ)y \;|\; λ ∈ [0,1]}, \\
> (x, y) &=  {λx+(1−λ)y \;|\; λ ∈ (0,1)}, \\
> [x, y) &=  {λx+(1−λ)y \;|\; λ ∈ (0,1]}.
> \end{align}
> $$
Một tập $M \subset X$ được gọi là đa tạp affine, hay đơn giản là tập affine, nếu với mọi cặp điểm x,y ∈ M ta có $L(x,y) \subset M$.

> [!prp] (Tính chất tập affine)
> a) Giao của một họ bất kỳ các đa tạp affine là một đa tạp affine
> 
> b) Đặt $\text{Aff}(A) = \{ x \;|\; x \text{ là tổ hợp các vector thuộc }A \}$, khi đó $\text{Aff}(A) = S$, với $S = \left\{ \sum_{i=1}^m \lambda_i a_i\;\middle\vert{}\; m \ge 1, a_i \in A, \sum_{i=1}^m \lambda_i = 1 \right\}$
> 
> c) $A$ là đa tạp affine $\iff A = \text{Aff}(A)$
> 
> d) $M$ là đa tạp affine $\iff \forall m \in M: M - m \le X$ (tức $M = m + V$ với $V$ là không gian con của $X$). Lúc đó, ta gọi chiều và đối chiều của M chính là chiều và đối chiều của V: $\text{dim} M := \text{dim} V$, $\text{codim} M := \text{codim} V$
> 
> e) $M \subset X$ là siêu phẳng $\iff \exists f \in X^\# \setminus \{0\}, \;\alpha \in \mathbb{R}$ sao cho $M = f^{-1}(\alpha) = \{x \in X \mid f(x) = \alpha\}$
>
> _Ghi chú:_ Siêu phẳng được định nghĩa là đa tạp affine có $\text{codim} M = 1$, tức $\text{codim} V = \dim(X/V) = 1$.
> 
> f) Nếu $\text{codim} M = k \in \mathbb{N}$ thì tồn tại các siêu phẳng $M_1, \dots, M_k$ sao cho $M = \bigcap_{i=1}^k M_i$

> [!prf]
> a)








$\xi$