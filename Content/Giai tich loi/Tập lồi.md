
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
Một tập $M \subset X$ được gọi là đa tạp affine, hay đơn giản là tập affine, nếu với mọi cặp điểm x,y ∈ M ta có $L(x,y) \subset M$, nghĩa là nếu cứ hai điểm thì mọi đường thẳng qua hai điểm cũng nằm trong tập.

> [!prp] (Tính chất tập affine)
> a) Giao của một họ bất kỳ các đa tạp affine là một đa tạp affine
> 
> b) Đặt $\text{Aff}(A)$ là giao của tất cả các đa tạp affine chứa $A$: 
> $$
> \text{Aff}(A) := \bigcap_{\substack{M \supseteq A \\ M \text{ là đa tạp affine}}} M
> $$ 
> khi đó $\text{Aff}(A) = S$, với $S = \left\{ \sum_{i=1}^m \lambda_i a_i\;\middle\vert{}\; m \ge 1, a_i \in A, \sum_{i=1}^m \lambda_i = 1 \right\}$
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
> Giả sử $\{M_i\}_{i \in I}$ là một họ các đa tạp affine bất kỳ trong không gian vectơ $X$. Đặt $M = \bigcap_{i \in I} M_i$.
> 
> Nếu $M = \emptyset$, theo quy ước tập rỗng là một đa tạp affine. 
> 
> Nếu $M \neq \emptyset$, lấy hai điểm tùy ý $x, y \in M$ và số vô hướng bất kỳ $\lambda \in \mathbb{R}$. Với mọi $i \in I$, vì $x, y \in M$ nên $x, y \in M_i$: 
> $$
> \lambda x + (1 - \lambda)y \in M_i, \quad \forall i \in I
> $$
> Từ đó suy ra $\lambda x + (1 - \lambda)y \in \bigcap_{i \in I} M_i = M$ nên $M$ là một đa tạp affine.
> 
> b)
> **Bước 1: Chứng minh $S \subseteq \text{Aff}(A)$** 
> Lấy $M$ là một tập affine bất kỳ, ta sẽ chỉ ra $S \subseteq M$. Ta sẽ đi chứng minh bổ đề: Nếu $M$ là tập affine thì với mọi $m \ge 1$, $x_1, \dots, x_m \in M$ và các số $\lambda_1, \dots, \lambda_m \in \mathbb{R}$ thỏa mãn $\sum_{i=1}^m \lambda_i = 1$, ta luôn có: 
> $$
> \sum_{i=1}^m \lambda_i x_i \in M
> $$
> Với $m = 1$: $\lambda_1 = 1$, hiển nhiên $1 \cdot x_1 = x_1 \in M$.
> 
> Với $m = 2$: $\lambda_1 + \lambda_2 = 1 \implies \lambda_2 = 1 - \lambda_1$. Biểu thức có dạng $\lambda_1 x_1 + (1 - \lambda_1) x_2$. Theo đúng định nghĩa tập affine, đường thẳng nối hai điểm thuộc $M$ phải nằm trong $M$, nên phần tử này thuộc $M$.
> Giả sử mệnh đề đúng cho $m - 1$ điểm ($m \ge 3$). Xét tổ hợp của $m$ điểm: 
> $$
> x = \sum_{i=1}^m \lambda_i x_i \quad \text{với } \sum_{i=1}^m \lambda_i = 1
> $$
> Vì $m \ge 3$ và $\sum_{i=1}^m \lambda_i = 1$, các hệ số không thể đồng thời bằng $1$. Ta luôn chọn được một hệ số khác $1$, không mất tính tổng quát giả sử $\lambda_m \neq 1$. Khi đó $1 - \lambda_m \neq 0$, ta nhóm lại: 
> $$
> x = (1 - \lambda_m) \underbrace{\left( \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} x_i \right)}_{y} + \lambda_m x_m
> $$
> Tổng các hệ số bên trong ngoặc là: 
> $$
> \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} = \frac{1}{1 - \lambda_m} \sum_{i=1}^{m-1} \lambda_i = \frac{1 - \lambda_m}{1 - \lambda_m} = 1
> $$
> Theo giả thiết quy nạp, điểm $y = \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} x_i \in M$. Khi đó $x = (1 - \lambda_m)y + \lambda_m x_m$ là tổ hợp affine của 2 điểm $y, x_m \in M$. Theo trường hợp $m = 2$, ta có $x \in M$. Vậy bổ đề đã được chứng minh.
> Áp dụng bổ đề: Vì $A \subseteq M$, mọi phần tử $a_i \in A$ đều thuộc $M$. Do đó mọi tổ hợp dạng $\sum_{i=1}^m \lambda_i a_i \in M$, tức $S \subseteq M$.
>
> Lấy giao trên mọi tập affine $M \supseteq A$, ta được: 
> $$
> S \subseteq \bigcap_{\substack{M \supseteq A \\ M \text{ affine}}} M = \operatorname{Aff}(A)
> $$










$\xi$