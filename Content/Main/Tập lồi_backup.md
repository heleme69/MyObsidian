
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

> [!def] (Không gian con chỉ phương và Siêu phẳng)
> a)
> Cho $M \subset \mathbb{R}^n$ là một tập affine khác rỗng. Khi đó tồn tại duy nhất một không gian con vectơ $L \subset \mathbb{R}^n$ và một điểm $a \in M$ sao cho:
> $$M = a + L = \{a + v \mid v \in L\}$$
> Không gian con vectơ $L$ đó được gọi là **không gian con chỉ phương** của tập affine $M$.
> 
> Tương đương, $L$ được xác định bởi hiệu của hai điểm bất kỳ thuộc $M$:
> $$L = M - M = \{x - y \mid x, y \in M\}$$
> 
> b)
> Một tập con $H \subset \mathbb{R}^n$ được gọi là một **siêu phẳng** nếu nó là một tập affine có số chiều bằng $n - 1$ (tức là có đối chiều bằng $1$).
> 
> Tương đương, $H$ là tập nghiệm của một phương trình tuyến tính không tầm thường:
> $$H = \{x \in \mathbb{R}^n \mid \langle c, x \rangle = \alpha\}$$
> trong đó $c \in \mathbb{R}^n \setminus \{0\}$ là vectơ pháp tuyến và $\alpha \in \mathbb{R}$ là một hằng số.

> [!prp] (Tính chất Tập Affine)
> a) Giao của một họ bất kỳ các đa tạp affine là một đa tạp affine
> 
> b) Đặt $\text{Aff}(A)$ (gọi là bao affine) là giao của tất cả các đa tạp affine chứa $A$: 
> $$
> \text{Aff}(A) := \bigcap_{\substack{M \supseteq A \\ M \text{ là đa tạp affine}}} M
> $$ 
> khi đó $\text{Aff}(A) = S$, với $S = \left\{ \sum_{i=1}^m \lambda_i a_i\;\middle\vert{}\; m \ge 1, a_i \in A, \sum_{i=1}^m \lambda_i = 1 \right\}$
> 
> c) $A$ là đa tạp affine $\iff A = \text{Aff}(A)$
> 
> d) Cho $M \neq \emptyset \subset X$. Khi đó, $M$ là một đa tạp affine khi và chỉ khi với mọi $m \in M$, tập $M - m$ là một không gian con của $X$ (tức $M = m + V$ với $V \le X$). Hơn nữa, không gian con $V = M - m = M - M$ là **duy nhất** và được gọi là **không gian con chỉ phương** của $M$. Ta định nghĩa:
> $$\dim M := \dim V, \quad \text{codim} M := \text{codim} V$$
> Khi $\text{codim} M = 1$, $M$ được gọi là một siêu phẳng.
> 
> e)  Bây giờ nếu Y cũng là một không gian vectơ, ta ký hiệu $L(X,Y)$ là không gian các ánh xạ tuyến tính từ $X$ vào $Y$. Đặc biệt nếu Y = $\mathbb{R}$, ta đặt $X^\# := L(X,R)$, là không gian các phiếm hàm tuyến tính trên X. Ta có:
> 
>  $$
>  M \subset X \text{ là siêu phẳng} \iff \exists f \in X^\# \setminus \{0\}, \;\alpha \in \mathbb{R} \text{ sao cho } M = f^{-1}(\alpha) = \{x \in X \mid f(x) = \alpha\}
> $$
> 
> f) Nếu $\text{codim} M = k \in \mathbb{N}$ thì tồn tại các siêu phẳng $M_1, \dots, M_k$ sao cho $M = \bigcap_{i=1}^k M_i$. Hệ quả (đối với không gian $\mathbb{R}^n$): Một tập con khác rỗng $S \subset \mathbb{R}^n$ là một đa tạp affine có đối chiều $k$ khi và chỉ khi tồn tại một ma trận $A \in \mathbb{R}^{k \times n}$ với $\text{rank}(A) = k$ và một vectơ $b \in \mathbb{R}^k$ sao cho $S = \{x \in \mathbb{R}^n \mid Ax = b\}$.

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
> - Với $m = 1$: $\lambda_1 = 1$, hiển nhiên $1 \cdot x_1 = x_1 \in M$.
> 
> - Với $m = 2$: $\lambda_1 + \lambda_2 = 1 \implies \lambda_2 = 1 - \lambda_1$. Biểu thức có dạng $\lambda_1 x_1 + (1 - \lambda_1) x_2$. Theo đúng định nghĩa tập affine, đường thẳng nối hai điểm thuộc $M$ phải nằm trong $M$, nên phần tử này thuộc $M$.
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
> 
> Áp dụng bổ đề: Vì $A \subseteq M$, mọi phần tử $a_i \in A$ đều thuộc $M$. Do đó mọi tổ hợp dạng $\sum_{i=1}^m \lambda_i a_i \in M$, tức $S \subseteq M$.
>
> Lấy giao trên mọi tập affine $M \supseteq A$, ta được: 
> $$
> S \subseteq \bigcap_{\substack{M \supseteq A \\ M \text{ affine}}} M = \text{Aff}(A)
> $$
> **Bước 2: Chứng minh $\text{Aff}(A) \subseteq S$**
> Ta sẽ chỉ ra $S$ là một tập affine chứa $A$. Ta nhận thấy với mỗi $a \in A$, ta chọn $m = 1, a_1 = a, \lambda_1 = 1$. Khi đó $a = 1 \cdot a \in S$. Do đó $A \subseteq S$.
> 
> Ta sẽ đi chứng minh $S$ là tập affine. Lấy hai điểm tùy ý $u, v \in S$ và số vô hướng bất kỳ $\alpha \in \mathbb{R}$. Cần chứng minh $\alpha u + (1 - \alpha) v \in S$.
> Vì $u \in S$, tồn tại $p \in \mathbb{N}^*$, các điểm $x_1, \dots, x_p \in A$ và các số $\beta_1, \dots, \beta_p$ sao cho: 
> $$
> u = \sum_{i=1}^p \beta_i x_i \quad \text{với } \sum_{i=1}^p \beta_i = 1
> $$
> Vì $v \in S$, tồn tại $q \in \mathbb{N}^*$, các điểm $y_1, \dots, y_q \in A$ và các số $\gamma_1, \dots, \gamma_q$ sao cho: 
> $$
> v = \sum_{j=1}^q \gamma_j y_j \quad \text{với } \sum_{j=1}^q \gamma_j = 1
> $$
> Xét điểm: 
> $$
> \alpha u + (1 - \alpha) v = \sum_{i=1}^p (\alpha \beta_i) x_i + \sum_{j=1}^q \big((1 - \alpha)\gamma_j\big) y_j
> $$
> Biểu thức này là một tổ hợp hữu hạn gồm $p + q$ phần tử thuộc $A$. Tổng tất cả các hệ số là:
> $$
> \sum_{i=1}^p \alpha \beta_i + \sum_{j=1}^q (1 - \alpha)\gamma_j = \alpha \underbrace{\left(\sum_{i=1}^p \beta_i\right)}_{=1} + (1 - \alpha)\underbrace{\left(\sum_{j=1}^q \gamma_j\right)}_{=1} = \alpha + (1 - \alpha) = 1
> $$
> Vậy $\alpha u + (1 - \alpha) v$ thỏa mãn đầy đủ tiêu chuẩn của tập $S \implies \alpha u + (1 - \alpha) v \in S$. Suy ra $S$ là một tập affine.
> Vì $S$ là một tập affine chứa $A$, nên $S$ là một trong các tập tham gia vào phép giao định nghĩa $\text{Aff}(A)$:
> $$
> \text{Aff}(A) = \bigcap_{\substack{M \supseteq A \\ M \text{ affine}}} M \subseteq S
> $$
> **Kết luận**: Từ hai chiều bao hàm $S \subseteq \text{Aff}(A)$ và $\text{Aff}(A) \subseteq S$, ta kết luận $\text{Aff}(A) = S$.
> 
> c)
> **Chiều $(\implies)$:** Nếu $A$ là một đa tạp affine, thì $A$ là một phần tử trong họ các đa tạp affine chứa chính nó. Do $\text{Aff}(A)$ là giao của tất cả các đa tạp affine chứa $A$, ta có $\text{Aff}(A) \subseteq A$. Mặt khác hiển nhiên $A \subseteq \text{Aff}(A)$, do đó $A = \text{Aff}(A)$.
> 
> **Chiều $(\impliedby)$:** Vì $\text{Aff}(A)$ luôn là một đa tạp affine (theo tính chất a), nếu $A = \text{Aff}(A)$ thì $A$ hiển nhiên là đa tạp affine.
> 
> d)
> Cố định một điểm $m_0 \in M$ bất kỳ. Đặt $V = M - m_0 = \{x - m_0 \mid x \in M\}$
> **Chiều $(\implies)$:** Giả sử $M$ là đa tạp affine. Ta chứng minh $V$ là không gian con của $X$:
> - **Chứa 0:** $0 = m_{0} - m_{0} \in V$.
> - **Đóng kín với phép nhân vô hướng:** Lấy $v \in V \implies v = x - m_0$ với $x \in M$. Với mọi $k \in \mathbb{R}$: 
> $$
> k v = k(x - m_0) = \big(k x + (1 - k)m_0\big) - m_0
> $$
> Vì $M$ affine nên $k x + (1 - k)m_0 \in M$. Do đó $k v \in M - m_0 = V$. 
> - **Đóng kín với phép cộng:** Lấy $u, v \in V \implies u = x - m_0, v = y - m_0$ ($x, y \in M$). Xét: 
> $$
> u + v = (x - m_0) + (y - m_0) = 2 \left(\frac{1}{2} x + \frac{1}{2} y\right) - 2 m_0
> $$
> Vì $\frac{1}{2} x + \frac{1}{2} y \in M$ (do $M$ affine), nên $w = \frac{1}{2} x + \frac{1}{2} y - m_0 \in V$. Áp dụng tính chất đóng kín với phép nhân vô hướng vừa chứng minh ở trên: $u + v = 2w \in V$.
> 
> Suy ra $V \le X$.
>
> **Tính duy nhất của không gian con chỉ phương $V$:**
> Giả sử tồn tại một không gian con $V'$ và điểm $m_0' \in M$ sao cho $M = m_0' + V'$. Ta chứng minh cả $V$ và $V'$ đều bằng tập hiệu $M - M = \{x - y \mid x, y \in M\}$:
> - Với mọi $v \in V$, vì $m_0 + v \in M$ và $m_0 \in M$ nên $v = (m_0 + v) - m_0 \in M - M$. Do đó $V \subseteq M - M$.
> - Ngược lại, với mọi $x, y \in M$, tồn tại $v_1, v_2 \in V$ sao cho $x = m_0 + v_1$ và $y = m_0 + v_2$. Khi đó $x - y = v_1 - v_2 \in V$ (do $V$ là không gian con nên đóng với phép trừ). Do đó $M - M \subseteq V$.
>
> Suy ra $V = M - M$. Chứng minh tương tự với biểu diễn $M = m_0' + V'$, ta cũng thu được $V' = M - M$. Vậy $V = V' = M - M$, chứng tỏ không gian con $V$ được xác định duy nhất độc lập với điểm mốc được chọn.
> 
> **Chiều $(\impliedby)$:** Giả sử $M = m_0 + V$ với $V \le X$.
> Lấy hai điểm $x, y \in M$ và $\lambda \in \mathbb{R}$. Khi đó $x = m_0 + v_1, y = m_0 + v_2$ với $v_1, v_2 \in V$.
> $$
> \lambda x + (1 - \lambda)y = \lambda (m_0 + v_1) + (1 - \lambda)(m_0 + v_2) = m_0 + \underbrace{\big(\lambda v_1 + (1 - \lambda)v_2\big)}_{\in V \text{ (vì } V \text{ là KG con)}} \in m_0 + V = M
> $$
> **Kết luận:** Vậy $M$ là đa tạp affine.
> 
> e)
> **Chiều $(\implies)$:** Giả sử $M$ là siêu phẳng, ta cần tìm $f \in X ^{\#} \setminus \{ 0 \}$ và $\alpha \in \mathbb{R}$ sao cho $M = f^{-1}(\alpha)$.
> 
> Vì $M$ là siêu phẳng, theo định nghĩa, $M$ là một đa tạp affine có đối chiều bằng $1$. Tức là $M = m_0 + V$ với $m_0 \in M$, $V$ là một không gian con của $X$ và $\text{codim} V = \dim(X/V) = 1$.
> 
> Vì $\dim(X/V) = 1$, không gian thương $X/V$ sinh bởi một vec-tơ cơ sở duy nhất. Chọn một vec-tơ $e \in X \setminus V$. Khi đó lớp tương đương $\bar{e} = e + V$ là một cơ sở của $X/V$. Điều này có nghĩa là mọi vec-tơ $x \in X$ đều có thể được phân tích một cách duy nhất dưới dạng: 
> $$
> x = v + c e \quad \text{với } v \in V \text{ và } c \in \mathbb{R}
> $$
> Tức là không gian $X$ được phân tích thành tổng trực tiếp:
> $$
> X = V \oplus \text{span}(e)
> $$
> Xét ánh xạ $f: X \to \mathbb{R}$ xác định bởi $f(x) = c$, với $c$ là hệ số duy nhất trong phân tích trên.
> - **$f$ là tuyến tính:** Lấy $x_1 = v_1 + c_1 e$ và $x_2 = v_2 + c_2 e$, với mọi $\lambda \in \mathbb{R}$:
> $$
> \lambda x_1 + x_2 = (\lambda v_1 + v_2) + (\lambda c_1 + c_2)e
> $$
> Suy ra $f(\lambda x_1 + x_2) = \lambda c_1 + c_2 = \lambda f(x_1) + f(x_2)$. Do đó $f \in X^\#$.
> - **$f \neq 0$:** Ta có $f(e) = 1 \neq 0$.
> - **Hạt nhân của $f$:** $x \in \ker f \iff f(x) = 0 \iff c = 0 \iff x = v \in V$. Do đó $\ker f = V$.
> 
> Bây giờ ta xác định hằng số $\alpha$. Đặt $\alpha = f(m_0)$. Với mọi $x \in M$, do $M = m_0 + V$, ta có $x = m_0 + v$ với $v \in V = \ker f$. Đánh giá giá trị của $f(x)$: 
> $$
> f(x) = f(m_0 + v) = f(m_0) + f(v) = \alpha + 0 = \alpha 
> $$
> Suy ra $M \subseteq f^{-1}(\alpha)$.
> Ngược lại, lấy bất kỳ $x \in f^{-1}(\alpha)$, ta có $f(x) = \alpha$. Khi đó:
> $$
> f(x - m_0) = f(x) - f(m_0) = \alpha - \alpha = 0
> $$
> Điều này dẫn đến $x - m_0 \in \ker f = V$. Do đó $x = m_0 + (x - m_0) \in m_0 + V = M$.  
> Suy ra $f^{-1}(\alpha) \subseteq M$.  
> 
> **Kết luận:** $M = f^{-1}(\alpha)$.  
> 
> **Chiều ($\impliedby$):** Giả sử tồn tại $f \in X^\# \setminus \{0\}$ và $\alpha \in \mathbb{R}$ sao cho $M = \{x \in X \mid f(x) = \alpha\}$. Ta cần chứng minh $M$ là một siêu phẳng.  
> 
> Vì $f \neq 0$, tồn tại ít nhất một vec-tơ $y \in X$ sao cho $f(y) \neq 0$. Chọn vec-tơ $m_0 = \frac{\alpha}{f(y)} y$. Áp dụng tính tuyến tính của $f$, ta có:  
> 
> $$  
> f(m_0) = f\left(\frac{\alpha}{f(y)} y\right) = \frac{\alpha}{f(y)} f(y) = \alpha  
> $$  
> Như vậy $m_0 \in M$, chứng tỏ tập $M$ không rỗng.  
> 
> Với mọi $x \in X$, ta có chuỗi biến đổi tương đương sau:  
> 
> $$  
> x \in M \iff f(x) = \alpha \iff f(x) - f(m_0) = 0 \iff f(x - m_0) = 0 \iff x - m_0 \in \ker f  
> $$  
> Từ đó suy ra $x \in m_0 + \ker f$. Vậy $M$ thực chất là một đa tạp affine có dạng $M = m_0 + V$ với không gian con $V = \ker f$.  
> 
> Để chứng minh $M$ là siêu phẳng, ta chỉ cần chỉ ra đối chiều của $V$ bằng $1$, tức là $\dim(X/\ker f) = 1$.  
> 
> Theo Định lý đẳng cấu thứ nhất (First Isomorphism Theorem) đối với không gian vector:  
> $$  
> X / \ker f \cong \text{Im} f  
> $$  
> Vì $f: X \to \mathbb{R}$ là một phiếm hàm tuyến tính khác $0$, ảnh của nó ${} \text{Im} f {}$ phải là một không gian con khác $\{0\}$ của $\mathbb{R}$. Không gian $\mathbb{R}$ chỉ có đúng hai không gian con là $\{0\}$ và chính nó. Do đó:  
> $$  
> \text{Im} f = \mathbb{R}  
> $$  
> Suy ra $\dim(X / \ker f) = \dim(\mathbb{R}) = 1$. Vậy ${} \text{codim} V = 1 {}$, chứng minh hoàn tất $M$ là một siêu phẳng.  
> 
> f) 
> Giả sử $M$ là một đa tạp affine có đối chiều bằng $k$. Theo định nghĩa, ta có thể viết $M = m_0 + V$, trong đó $m_0 \in M$ và $V$ là không gian con chỉ phương của $M$ thỏa mãn $\text{codim} V = \dim(X/V) = k$.  
> 
> **Bước 1: Xây dựng các phiếm hàm tuyến tính trên $X$**  
> Vì không gian thương $X/V$ có số chiều bằng $k$, ta có thể chọn một cơ sở cho không gian đối ngẫu $(X/V)^\#$ gồm $k$ phiếm hàm tuyến tính độc lập tuyến tính, ký hiệu là $\{\bar{f}_1, \bar{f}_2, \dots, \bar{f}_k\}$.  
> 
> Gọi $\pi: X \to X/V$ là phép chiếu chính tắc xác định bởi $\pi(x) = x + V$. Phép chiếu này là một ánh xạ tuyến tính.  
> Với mỗi $i \in \{1, \dots, k\}$, ta định nghĩa ánh xạ $f_i: X \to \mathbb{R}$ như sau:  
> $$  
> f_i = \bar{f}_i \circ \pi \implies f_i(x) = \bar{f}_i(x + V)  
> $$  
> Vì $\bar{f}_i$ và $\pi$ đều tuyến tính, các $f_i$ là các phiếm hàm tuyến tính trên $X$ ($f_i \in X^\#$). Hơn nữa, vì các $\bar{f}_i$ độc lập tuyến tính và $\pi$ toàn ánh, nên các $f_i$ cũng độc lập tuyến tính và khác không ($f_i \neq 0$).  
> 
> **Bước 2: Biểu diễn $V$ qua giao các hạt nhân**  
> Một vectơ $x$ thuộc $V$ khi và chỉ khi $\pi(x) = 0_{X/V}$.  
> Điều này tương đương với việc mọi phiếm hàm trong cơ sở của $(X/V)^\#$ đều triệt tiêu tại $\pi(x)$:  
> $$  
> x \in V \iff \bar{f}_i(\pi(x)) = 0 \quad (\forall i = 1, \dots, k)  
> $$  
> $$  
> x \in V \iff f_i(x) = 0 \quad (\forall i = 1, \dots, k)  
> $$  
> Điều này chứng tỏ $V$ chính là giao của các hạt nhân của $f_i$:  
> $$  
> V = \bigcap_{i=1}^k \ker f_i  
> $$  
> 
> **Bước 3: Dịch chuyển về điểm mốc $m_0$ để tạo siêu phẳng**  
> Với mỗi $i \in \{1, \dots, k\}$, đặt hằng số $\alpha_i = f_i(m_0)$.  
> Ta định nghĩa các tập hợp:  
> $$  
> M_i = \{x \in X \mid f_i(x) = \alpha_i\}  
> $$  
> Vì $f_i \in X^\# \setminus \{0\}$, theo tính chất e), mỗi $M_i$ là một siêu phẳng. Hơn nữa, $M_i = m_0 + \ker f_i$. 
> 
> Xét giao của $k$ siêu phẳng này:  
> $$  
> \bigcap_{i=1}^k M_i = \bigcap_{i=1}^k (m_0 + \ker f_i) = m_0 + \left( \bigcap_{i=1}^k \ker f_i \right) = m_0 + V = M  
> $$  
> Mệnh đề được chứng minh.  
> 
> **Chứng minh Hệ quả trong $\mathbb{R}^n$:**  
> 
> **Chiều ($\implies$):** Giả sử $S$ là một đa tạp affine trong $\mathbb{R}^n$ có đối chiều $k$. Ta cần tìm ma trận $A$ có hạng bằng $k$ và vector $b \in \mathbb{R}^k$ sao cho $Ax = b$, 
>   
> Áp dụng trực tiếp Mệnh đề f) vừa chứng minh, tồn tại $k$ siêu phẳng $S_1, \dots, S_k$ sao cho $S = \bigcap_{i=1}^k S_i$.  
> Mỗi siêu phẳng $S_i$ được định nghĩa bởi một phương trình dạng $f_i(x) = b_i$, với $f_i$ là phiếm hàm tuyến tính khác $0$.  
> 
> Trong không gian $\mathbb{R}^n$, mọi phiếm hàm tuyến tính $f_i(x)$ đều có thể biểu diễn dưới dạng tích vô hướng của một vectơ pháp tuyến cột $a_i \in \mathbb{R}^n$ với vectơ $x$:  
> $$  
> f_i(x) = a_i^T x  
> $$  
> Do đó, điểm $x \in S$ khi và chỉ khi nó thỏa mãn đồng thời $k$ phương trình:  
> $$  
> a_i^T x = b_i \quad (\forall i = 1, \dots, k)  
> $$  
> 
> Xây dựng ma trận $A \in \mathbb{R}^{k \times n}$ bằng cách xếp các vectơ $a_1^T, \dots, a_k^T$ thành $k$ hàng của ma trận. Đặt vectơ cột $b = (b_1, \dots, b_k)^T \in \mathbb{R}^k$. Khi đó hệ $k$ phương trình trên được viết gộp lại thành:  
> $$  
> Ax = b  
> $$  
> Vì các phiếm hàm $f_i$ trong chứng minh mệnh đề f) được xây dựng từ một cơ sở nên chúng độc lập tuyến tính. Suy ra $k$ hàng của ma trận $A$ độc lập tuyến tính, dẫn đến ${} \text{rank}(A) = k {}$.  
> 
> **Chiều ($\impliedby$):** Giả sử $S = \{x \in \mathbb{R}^n \mid Ax = b\}$ khác rỗng. Lấy hai điểm tùy ý $x, y \in S$, ta có:  
> $$  
> Ax = b \quad \text{và} \quad Ay = b  
> $$  
> Xét điểm $z = \lambda x + (1 - \lambda)y$ với $\lambda \in \mathbb{R}$ bất kỳ. Tác động ma trận $A$ lên $z$:  
> $$  
> Az = A(\lambda x + (1 - \lambda)y) = \lambda(Ax) + (1 - \lambda)(Ay)  
> $$  
> Thay $Ax = b$ và $Ay = b$ vào:  
> $$  
> Az = \lambda b + (1 - \lambda)b = (\lambda + 1 - \lambda)b = b  
> $$  
> Vì $Az = b$, nên $z \in S$. Do đó đường thẳng nối $x, y$ nằm hoàn toàn trong $S$, suy ra $S$ là đa tạp affine.  
> 
> **Kiểm tra đối chiều:**  
> Cố định một nghiệm $x_0 \in S$ (suy ra $Ax_0 = b$). Với mọi $x \in S$, đặt $v = x - x_0$, ta có:
> $$
> Av = A(x - x_0) = Ax - Ax_0 = b - b = 0 \implies v \in \ker A
> $$
> Suy ra $S \subseteq x_0 + \ker A$. Ngược lại, với mọi $v \in \ker A$, ta có $A(x_0 + v) = Ax_0 + Av = b + 0 = b$, nên $x_0 + \ker A \subseteq S$. Do đó $S = x_0 + \ker A$.
>
> Theo tính chất d), không gian con chỉ phương với biểu diễn của một đa tạp affine là duy nhất và bằng $S - S$. Do đó, không gian con chỉ phương của $S$ bắt buộc phải là $V = \ker A$.
>
> Áp dụng định lý Rank-Nullity (Định lý về hạng và số chiều không gian hạt nhân):  
> $$  
> \dim V = \dim(\ker A) = n - \text{rank}(A) = n - k  
> $$  
> Vậy đối chiều của $S$ là $\text{codim} V = n - \dim V = k$. Hệ quả được chứng minh hoàn toàn.

> [!def] (Tính Độc lập Affine)
> Các điểm $x^0, x^1, \dots, x^k$ trong $\mathbb{R}^n$ được gọi là **độc lập affine** nếu bao affine của chúng có số chiều bằng $k$, tức là:
> $$\dim \text{Aff}(x^0, x^1, \dots, x^k) = k$$

> [!prp] (Tính chất Đặc trưng của Hệ Độc lập Affine)
> Cho các điểm $x^0, x^1, \dots, x^k \in \mathbb{R}^n$. Các điều sau đây là tương đương:
> 
> (i) Các điểm $x^0, x^1, \dots, x^k$ độc lập affine.
> 
> (ii) Với mỗi chỉ số $i \in \{0, 1, \dots, k\}$, hệ gồm $k$ vectơ $\{x^j - x^i \mid j \in \{0, 1, \dots, k\}, j \neq i\}$ độc lập tuyến tính trong $\mathbb{R}^n$.
> 
> (iii) Các vectơ $(x^j, 1) \in \mathbb{R}^{n+1}$ ($j = 0, 1, \dots, k$) độc lập tuyến tính trong $\mathbb{R}^{n+1}$.

> [!prf] 
> Đặt $S = \{x^0, x^1, \dots, x^k\} \subset \mathbb{R}^n$. Gọi $L$ là không gian con chỉ phương của tập affine $\text{aff} S$.
> 
> Không giảm tổng quát, chọn chỉ số mốc $i = 0$. Đặt $y^j = x^j - x^0$ với $j = 1, \dots, k$.
> 
> Lấy $x \in \text{aff} S$ bất kỳ. Khi đó $x$ là một tổ hợp affine của $S$:
> $$x = \sum_{j=0}^k \mu_j x^j \quad \text{với } \sum_{j=0}^k \mu_j = 1$$
> Do $\mu_0 = 1 - \sum_{j=1}^k \mu_j$, ta biến đổi:
> $$x = \left(1 - \sum_{j=1}^k \mu_j\right)x^0 + \sum_{j=1}^k \mu_j x^j = x^0 + \sum_{j=1}^k \mu_j(x^j - x^0) = x^0 + \sum_{j=1}^k \mu_j y^j$$
> Suy ra:
> $$\text{aff} S = x^0 + \text{span}\{y^1, \dots, y^k\}$$
> Theo tính duy nhất của không gian con chỉ phương trong biểu diễn tập affine, ta có:
> $$L = \text{span}\{y^1, \dots, y^k\}$$
> Do đó, $\dim(\text{aff} S) = \dim L = k$ khi và chỉ khi hệ $k$ vectơ $\{y^1, \dots, y^k\}$ độc lập tuyến tính trong $\mathbb{R}^n$. Chứng tỏ $\text{(i)}$ và ${} \text{(ii)} {}$ tương đương.
> 
> Tiếp theo, xét phương trình tổ hợp tuyến tính trong $\mathbb{R}^{n+1}$:
> $$\sum_{j=0}^k c_j \begin{pmatrix} x^j \\ 1 \end{pmatrix} = \begin{pmatrix} 0_{\mathbb{R}^n} \\ 0 \end{pmatrix} \iff \begin{cases} \displaystyle \sum_{j=0}^k c_j x^j = 0_{\mathbb{R}^n} \\ \displaystyle \sum_{j=0}^k c_j = 0 \end{cases}
> $$
> Thay $c_0 = -\sum_{j=1}^k c_j$ vào phương trình trên:
> $$\sum_{j=1}^k c_j (x^j - x^0) = 0_{\mathbb{R}^n} \iff \sum_{j=1}^k c_j y^j = 0_{\mathbb{R}^n}$$
> 
> Nếu $\{y^1, \dots, y^k\}$ độc lập tuyến tính, thì $c_1 = \dots = c_k = 0$, kéo theo $c_0 = 0$. Suy ra $\{(x^j, 1)\}_{j=0}^k$ độc lập tuyến tính.
> 
> Ngược lại, nếu $\{(x^j, 1)\}_{j=0}^k$ độc lập tuyến tính, thì từ $\sum_{j=1}^k c_j y^j = 0$ (khi đặt thêm $c_0 = -\sum_{j=1}^k c_j$) ta lập tức có $c_1 = \dots = c_k = 0$. Suy ra $\{y^1, \dots, y^k\}$ độc lập tuyến tính.
> 
> Vậy $\text{(ii)}$ và $\text{(iii)}$ tương đương.

> [!def] (Tập lồi) 
> Một tập $C \subset X$ được gọi là lồi nếu với mọi cặp điểm $x, y \in C$, ta có $(x,y) \subset C$.

> [!prp] Tính chất Tập Lồi
> Cho $X$ là một không gian vectơ trên $\mathbb{R}$.
> 
> a) Giao của một họ bất kỳ các tập lồi là một tập lồi.
> 
> b) Đặt $\text{co}(A)$ (gọi là bao lồi) là giao của tất cả các tập lồi chứa $A$:
> $$\text{co}(A) := \bigcap_{\substack{C \supseteq A \\ C \text{ là tập lồi}}} C$$
> khi đó $\text{co}(A) = S$, với $S = \left\{\sum_{i=1}^m \lambda_i a_i \;\middle|\; m \ge 1, a_i \in A, \lambda_i \ge 0, \sum_{i=1}^m \lambda_i = 1\right\}$.
> 
> c) $A$ là tập lồi $\iff A = \text{co}(A)$.
> 
> d) Nếu $A, B \subset X$ là các tập lồi và $\alpha \in \mathbb{R}$, thì các tập $A + B$ và $\alpha A$ cũng là các tập lồi.  
> 
> e) Nếu $C \subset X$ là một tập lồi, ta định nghĩa số chiều của $C$ chính là số chiều của bao affine của nó: 
> 
> $$\dim C := \dim \text{Aff}(C)$$ 
> Lúc đó, $\dim C = \dim V$, trong đó $V = \text{Aff}(C) - c_0$ (với $c_0 \in C$) là không gian con chỉ phương duy nhất của $\text{Aff}(C)$.

> [!prf]
> a)
> Giả sử $\{C_i\}_{i \in I}$ là một họ các tập lồi bất kỳ trong không gian vectơ $X$. Đặt $C = \bigcap_{i \in I} C_i$.
> 
> Nếu $C = \emptyset$, theo quy ước tập rỗng là một tập lồi.
> 
> Nếu $C \neq \emptyset$, lấy hai điểm tùy ý $x, y \in C$ và số thực $\lambda \in [0, 1]$. Với mọi $i \in I$, vì $x, y \in C$ nên $x, y \in C_i$. Do mỗi $C_i$ là tập lồi, ta có:
> $$
> \lambda x + (1 - \lambda)y \in C_i, \quad \forall i \in I
> $$
> Từ đó suy ra $\lambda x + (1 - \lambda)y \in \bigcap_{i \in I} C_i = C$. Vậy $C$ là một tập lồi.
> 
> b)
> **Bước 1: Chứng minh $S \subseteq \text{co}(A)$**
> 
> Lấy $C$ là một tập lồi bất kỳ chứa $A$, ta sẽ chỉ ra $S \subseteq C$. Ta chứng minh bổ đề bằng quy nạp theo $m$: Nếu $C$ là tập lồi thì với mọi $m \ge 1$, $x_1, \dots, x_m \in C$ và các số $\lambda_1, \dots, \lambda_m \ge 0$ thỏa mãn $\sum_{i=1}^m \lambda_i = 1$, ta luôn có:
> $$
> \sum_{i=1}^m \lambda_i x_i \in C
> $$
> - Với $m = 1$: $\lambda_1 = 1$, hiển nhiên $1 \cdot x_1 = x_1 \in C$.
> - Với $m = 2$: $\lambda_1, \lambda_2 \ge 0$ và $\lambda_1 + \lambda_2 = 1 \implies \lambda_2 = 1 - \lambda_1$ với $\lambda_1 \in [0, 1]$. Biểu thức có dạng $\lambda_1 x_1 + (1 - \lambda_1) x_2$. Theo định nghĩa tập lồi, đoạn thẳng nối hai điểm thuộc $C$ nằm trong $C$, nên phần tử này thuộc $C$.
> - Giả sử bổ đề đúng cho $m - 1$ điểm ($m \ge 3$). Xét tổ hợp lồi của $m$ điểm:
> $$
> x = \sum_{i=1}^m \lambda_i x_i \quad \text{với } \lambda_i \ge 0, \sum_{i=1}^m \lambda_i = 1
> $$
> Nếu $\lambda_m = 1$, thì do $\sum_{i=1}^m \lambda_i = 1$ và $\lambda_i \ge 0$, ta có $\lambda_1 = \dots = \lambda_{m-1} = 0$, khi đó $x = x_m \in C$.
> Nếu $\lambda_m < 1$, ta có $1 - \lambda_m > 0$. Biến đổi $x$ thành:
> $$
> x = (1 - \lambda_m) \underbrace{\left( \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} x_i \right)}_{y} + \lambda_m x_m
> $$
> Đặt $\mu_i = \frac{\lambda_i}{1 - \lambda_m}$. Vì $\lambda_i \ge 0$ và $1 - \lambda_m > 0$ nên $\mu_i \ge 0$ với mọi $i = 1, \dots, m-1$. Tổng các hệ số là:
> $$
> \sum_{i=1}^{m-1} \mu_i = \frac{1}{1 - \lambda_m} \sum_{i=1}^{m-1} \lambda_i = \frac{1 - \lambda_m}{1 - \lambda_m} = 1
> $$
> Theo giả thiết quy nạp cho $m - 1$ điểm, điểm $y = \sum_{i=1}^{m-1} \mu_i x_i \in C$. Khi đó $x = (1 - \lambda_m)y + \lambda_m x_m$ với $y, x_m \in C$ và $\lambda_m \in [0, 1)$. Theo trường hợp $m = 2$, ta có $x \in C$. Vậy bổ đề được chứng minh.
> 
> Áp dụng bổ đề: Vì $A \subseteq C$, mọi phần tử $a_i \in A$ đều thuộc $C$. Do đó mọi tổ hợp lồi dạng $\sum_{i=1}^m \lambda_i a_i \in C$, tức $S \subseteq C$.
> 
> Lấy giao trên mọi tập lồi $C \supseteq A$, ta được:
> $$
> S \subseteq \bigcap_{\substack{C \supseteq A \\ C \text{ là tập lồi}}} C = \text{co}(A)
> $$
> 
> **Bước 2: Chứng minh $\text{co}(A) \subseteq S$**
> 
> Trước hết, với mỗi $a \in A$, chọn $m = 1, a_1 = a, \lambda_1 = 1 \ge 0$. Khi đó $a = 1 \cdot a \in S$. Do đó $A \subseteq S$.
> 
> Tiếp theo, ta chứng minh $S$ là một tập lồi. Lấy hai điểm tùy ý $u, v \in S$ và số thực $\alpha \in [0, 1]$. Cần chứng minh $\alpha u + (1 - \alpha) v \in S$.
> Vì $u \in S$, tồn tại $p \in \mathbb{N}^*$, các điểm $x_1, \dots, x_p \in A$ và các số $\beta_1, \dots, \beta_p \ge 0$ sao cho:
> $$
> u = \sum_{i=1}^p \beta_i x_i \quad \text{với } \sum_{i=1}^p \beta_i = 1
> $$
> Vì $v \in S$, tồn tại $q \in \mathbb{N}^*$, các điểm $y_1, \dots, y_q \in A$ và các số $\gamma_1, \dots, \gamma_q \ge 0$ sao cho:
> $$
> v = \sum_{j=1}^q \gamma_j y_j \quad \text{với } \sum_{j=1}^q \gamma_j = 1
> $$
> Xét điểm:
> $$
> \alpha u + (1 - \alpha) v = \sum_{i=1}^p (\alpha \beta_i) x_i + \sum_{j=1}^q \big((1 - \alpha)\gamma_j\big) y_j
> $$
> Vì $\alpha \in [0, 1]$, $\beta_i \ge 0$, $\gamma_j \ge 0$ nên tất cả các hệ số $\alpha \beta_i \ge 0$ và $(1 - \alpha)\gamma_j \ge 0$. Tổng các hệ số là:
> $$
> \sum_{i=1}^p \alpha \beta_i + \sum_{j=1}^q (1 - \alpha)\gamma_j = \alpha \underbrace{\left(\sum_{i=1}^p \beta_i\right)}_{=1} + (1 - \alpha)\underbrace{\left(\sum_{j=1}^q \gamma_j\right)}_{=1} = \alpha + (1 - \alpha) = 1
> $$
> Như vậy $\alpha u + (1 - \alpha) v$ là một tổ hợp lồi hữu hạn của các điểm thuộc $A$, suy ra $\alpha u + (1 - \alpha) v \in S$. Do đó $S$ là một tập lồi.
> 
> Vì $S$ là một tập lồi chứa $A$, nên $S$ là một phần tử tham gia vào phép giao định nghĩa $\text{co}(A)$:
> $$
> \text{co}(A) = \bigcap_{\substack{C \supseteq A \\ C \text{ là tập lồi}}} C \subseteq S
> $$
> 
> Từ hai chiều bao hàm $S \subseteq \text{co}(A)$ và $\text{co}(A) \subseteq S$, ta kết luận $\text{co}(A) = S$.
> 
> c)
> **Chiều $(\implies)$:** Nếu $A$ là tập lồi, thì $A$ là một phần tử trong họ các tập lồi chứa chính nó. Do $\text{co}(A)$ là giao của tất cả các tập lồi chứa $A$, ta có $\text{co}(A) \subseteq A$. Mặt khác hiển nhiên $A \subseteq \text{co}(A)$, do đó $A = \text{co}(A)$.
> 
> **Chiều $(\impliedby)$:** Vì $\text{co}(A)$ là giao của một họ các tập lồi nên $\text{co}(A)$ luôn là một tập lồi (theo tính chất a). Do đó, nếu $A = \text{co}(A)$ thì $A$ hiển nhiên là một tập lồi.
> 
> d)  
> **Chứng minh $A + B$ là tập lồi:**
> Lấy tùy ý hai điểm $x, y \in A + B$ và số thực $\lambda \in [0, 1]$.  
> Theo định nghĩa tổng Minkowski của hai tập hợp, tồn tại $a_1, a_2 \in A$ và $b_1, b_2 \in B$ sao cho:  
> 
> $$
> x = a_1 + b_1 \quad \text{và} \quad y = a_2 + b_2  
> $$
> Xét tổ hợp lồi của $x$ và $y$:  
> 
> $$
> \lambda x + (1 - \lambda)y = \lambda(a_1 + b_1) + (1 - \lambda)(a_2 + b_2) = \big(\lambda a_1 + (1 - \lambda)a_2\big) + \big(\lambda b_1 + (1 - \lambda)b_2\big)  
> $$
> Do $A$ là tập lồi và $a_1, a_2 \in A$, $\lambda \in [0, 1]$ nên:  
> 
> $$
> u = \lambda a_1 + (1 - \lambda)a_2 \in A  
> $$
> Tương tự, do $B$ là tập lồi và $b_1, b_2 \in B$, $\lambda \in [0, 1]$ nên:  
> 
> $$
> v = \lambda b_1 + (1 - \lambda)b_2 \in B  
> $$
> Do đó, $\lambda x + (1 - \lambda)y = u + v \in A + B$. Vậy $A + B$ là một tập lồi.  
> 
> **Chứng minh $\alpha A$ là tập lồi:**
> Xét $\alpha \in \mathbb{R}$ tùy ý.  
> - Nếu $\alpha = 0$: $\alpha A = \{0\}$ (nếu $A \neq \emptyset$) hoặc $\alpha A = \emptyset$ (nếu $A = \emptyset$). Cả hai trường hợp này đều là tập lồi.
> - Nếu $\alpha \neq 0$: Lấy tùy ý $u, v \in \alpha A$ và $\lambda \in [0, 1]$. Tồn tại $a_1, a_2 \in A$ sao cho $u = \alpha a_1$ và $v = \alpha a_2$. Khi đó:
> 
> $$
> \lambda u + (1 - \lambda)v = \lambda(\alpha a_1) + (1 - \lambda)(\alpha a_2) = \alpha\big(\lambda a_1 + (1 - \lambda)a_2\big)  
> $$
> Vì $A$ là tập lồi nên $\lambda a_1 + (1 - \lambda)a_2 \in A$. Suy ra $\lambda u + (1 - \lambda)v \in \alpha A$. Vậy $\alpha A$ là tập lồi.  
> 
> e)  
> Giả sử $C \subset X$ là tập lồi khác rỗng.  
> Bao affine $\text{Aff}(C)$ là một đa tạp affine khác rỗng chứa $C$. Cố định một điểm $c_0 \in C \subseteq \text{Aff}(C)$.  
> Theo tính chất của đa tạp affine, tồn tại duy nhất một không gian con vectơ $V \le X$ (không gian con chỉ phương) sao cho:  
> 
> $$
> \text{Aff}(C) = c_0 + V  
> $$
> trong đó $V = \text{Aff}(C) - c_0 = \text{Aff}(C) - \text{Aff}(C)$.  
> Số chiều của một đa tạp affine được định nghĩa duy nhất thông qua số chiều của không gian con chỉ phương của nó:  
> 
> $$
> \dim \text{Aff}(C) = \dim V  
> $$
> Do đó, số chiều của tập lồi $C$ được xác định nhất quán và duy nhất bởi:  
> 
> $$
> \dim C := \dim \text{Aff}(C) = \dim V  
> $$
> Định nghĩa này hoàn toàn độc lập với việc chọn điểm mốc $c_0 \in C$ nhờ tính duy nhất của không gian con chỉ phương $V$.  


> [!def] Nón lồi và Bao nón lồi
> Một tập $K \subset X$ được gọi là **nón** nếu với mọi điểm $k \in K$ và $\lambda > 0$, ta có $\lambda k \in K$. Nếu hơn nữa, $K$ là tập lồi thì nó sẽ được gọi là **nón lồi**.

> [!prp] Tính chất Nón Lồi và Bao Nón Lồi
> Cho $X$ là một không gian vectơ trên $\mathbb{R}$.
> 
> a) Giao của một họ bất kỳ các nón lồi là một nón lồi.
> 
> b) Đặt $\text{con\,co}(A)$ (gọi là bao nón lồi) là giao của tất cả các nón lồi chứa $A$:
> $$\text{con\,co}(A) := \bigcap_{\substack{K \supseteq A \\ K \text{ là nón lồi}}} K$$
> Khi đó $\text{con\,co}(A) = S$, với $S = \left\{\sum_{i=1}^m \lambda_i a_i \;\middle|\; m \ge 1, a_i \in A, \lambda_i \ge 0, \sum_{i=1}^m \lambda_i > 0\right\}$.
> 
> c) $K$ là nón lồi $\iff K = \text{con\,co}(K)$.
> 
> d) Nếu $K_1, K_2 \subset X$ là các nón lồi chứa gốc tọa độ $0$, thì:
> $$K_1 + K_2 = \text{co}(K_1 \cup K_2)$$

> [!prf]
> a)
> Giả sử $\{K_i\}_{i \in I}$ là một họ các nón lồi bất kỳ trong $X$. Đặt $K = \bigcap_{i \in I} K_i$.
> 
> Nếu $K = \emptyset$, theo quy ước tập rỗng là một nón lồi.
> 
> Nếu $K \neq \emptyset$:
> - **Kiểm tra tính nón:** Lấy $x \in K$ và $\lambda > 0$ tùy ý. Với mọi $i \in I$, do $x \in K \subseteq K_i$ và $K_i$ là nón nên $\lambda x \in K_i$. Suy ra $\lambda x \in \bigcap_{i \in I} K_i = K$. Do đó $K$ là một nón.
> - **Kiểm tra tính lồi:** Lấy $x, y \in K$ và $\alpha \in [0, 1]$ tùy ý. Với mọi $i \in I$, vì $K_i$ là tập lồi nên $\alpha x + (1 - \alpha)y \in K_i$. Suy ra $\alpha x + (1 - \alpha)y \in \bigcap_{i \in I} K_i = K$. Do đó $K$ là tập lồi.
> 
> Kết luận: $K$ là một nón lồi.
> 
> b)
> **Bước 1: Chứng minh $S \subseteq \text{con\,co}(A)$**
> 
> Giả sử $K$ là một nón lồi bất kỳ chứa $A$. Ta sẽ chứng minh $S \subseteq K$ bằng cách chỉ ra mọi tổ hợp dương không tầm thường của các phần tử thuộc $K$ đều nằm trong $K$.
> 
> Xét $x = \sum_{i=1}^m \lambda_i a_i$ với $a_i \in A \subseteq K$, $\lambda_i \ge 0$ và $s = \sum_{i=1}^m \lambda_i > 0$. Ta có thể biến đổi:
> $$x = s \sum_{i=1}^m \frac{\lambda_i}{s} a_i$$
> Đặt $\mu_i = \frac{\lambda_i}{s}$. Vì $\lambda_i \ge 0$ và $s > 0$ nên $\mu_i \ge 0$ với mọi $i = 1, \dots, m$, đồng thời:
> $$\sum_{i=1}^m \mu_i = \sum_{i=1}^m \frac{\lambda_i}{s} = \frac{1}{s}\sum_{i=1}^m \lambda_i = \frac{s}{s} = 1$$
> Do đó, điểm $y = \sum_{i=1}^m \mu_i a_i$ là một tổ hợp lồi của các phần tử $a_i \in K$. Vì $K$ là tập lồi, ta suy ra $y \in K$.
> 
> Hơn nữa, vì $K$ là một nón và $s > 0$, ta có $x = s y \in K$.
> 
> Do $x \in K$ đúng với mọi $x \in S$, ta có $S \subseteq K$. Lấy giao trên tất cả các nón lồi $K \supseteq A$, ta được:
> $$S \subseteq \bigcap_{\substack{K \supseteq A \\ K \text{ là nón lồi}}} K = \text{con\,co}(A)$$
> 
> **Bước 2: Chứng minh $\text{con\,co}(A) \subseteq S$**
> 
> - *Chứa $A$:* Với mỗi $a \in A$, chọn $m = 1, a_1 = a, \lambda_1 = 1 > 0$. Khi đó $a = 1 \cdot a \in S$. Vậy $A \subseteq S$.
> - *Tính nón:* Lấy $x \in S$ và $\alpha > 0$. Tồn tại $m \ge 1, a_i \in A, \lambda_i \ge 0$ với $\sum_{i=1}^m \lambda_i > 0$ sao cho $x = \sum_{i=1}^m \lambda_i a_i$. Khi đó:
> $$\alpha x = \sum_{i=1}^m (\alpha \lambda_i) a_i$$
> Vì $\alpha > 0$ và $\lambda_i \ge 0$ nên $\alpha \lambda_i \ge 0$, và $\sum_{i=1}^m (\alpha \lambda_i) = \alpha \sum_{i=1}^m \lambda_i > 0$. Suy ra $\alpha x \in S$, do đó $S$ là một nón.
> - *Tính lồi:* Lấy $u, v \in S$ và $t \in [0, 1]$.
> Nếu $t = 0$ thì $t u + (1 - t) v = v \in S$. Nếu $t = 1$ thì $t u + (1 - t) v = u \in S$.
> Xét $0 < t < 1$: Tồn tại các biểu diễn $u = \sum_{i=1}^p \beta_i x_i$ ($\beta_i \ge 0, \sum \beta_i > 0, x_i \in A$) và $v = \sum_{j=1}^q \gamma_j y_j$ ($\gamma_j \ge 0, \sum \gamma_j > 0, y_j \in A$). Khi đó:
> $$t u + (1 - t) v = \sum_{i=1}^p (t \beta_i) x_i + \sum_{j=1}^q \big((1 - t)\gamma_j\big) y_j$$
> Các hệ số $t \beta_i \ge 0$, $(1 - t)\gamma_j \ge 0$ và tổng các hệ số:
> $$\sum_{i=1}^p t \beta_i + \sum_{j=1}^q (1 - t)\gamma_j = t \sum_{i=1}^p \beta_i + (1 - t)\sum_{j=1}^q \gamma_j > 0$$
> Do đó $t u + (1 - t) v \in S$, tức $S$ là tập lồi.
> 
> Vì $S$ là một nón lồi chứa $A$, theo định nghĩa bao nón lồi ta có:
> $$\text{con\,co}(A) = \bigcap_{\substack{K \supseteq A \\ K \text{ là nón lồi}}} K \subseteq S$$
> 
> Từ hai chiều bao hàm, ta kết luận $\text{con\,co}(A) = S$.
> 
> c)
> **Chiều $(\implies)$:** Nếu $K$ là nón lồi thì $K$ là một phần tử trong họ các nón lồi chứa chính nó. Do $\text{con\,co}(K)$ là giao của tất cả các nón lồi chứa $K$, ta có $\text{con\,co}(K) \subseteq K$. Mặt khác hiển nhiên $K \subseteq \text{con\,co}(K)$, do đó $K = \text{con\,co}(K)$.
> 
> **Chiều $(\impliedby)$:** Vì $\text{con\,co}(K)$ là giao của một họ các nón lồi nên theo tính chất a), $\text{con\,co}(K)$ luôn là một nón lồi. Do đó, nếu $K = \text{con\,co}(K)$ thì $K$ hiển nhiên là một nón lồi.
> 
> d)
> **Bước 1: Chứng minh $K_1 + K_2 \subseteq \text{co}(K_1 \cup K_2)$**
> Lấy $x \in K_1 + K_2$, tức là $x = k_1 + k_2$ với $k_1 \in K_1, k_2 \in K_2$.
> Vì $K_1, K_2$ là các nón chứa $0$, ta có $2 k_1 \in K_1$ và $2 k_2 \in K_2$. Do đó $2 k_1, 2 k_2 \in K_1 \cup K_2$.
> Biểu diễn $x$ dưới dạng:
> $$x = \frac{1}{2}(2 k_1) + \frac{1}{2}(2 k_2)$$
> Đây là một tổ hợp lồi của hai điểm thuộc $K_1 \cup K_2$. Do đó $x \in \text{co}(K_1 \cup K_2)$. Suy ra $K_1 + K_2 \subseteq \text{co}(K_1 \cup K_2)$.
> 
> **Bước 2: Chứng minh $\text{co}(K_1 \cup K_2) \subseteq K_1 + K_2$**
> - *Chứa tập hợp:* Do $0 \in K_2$, với mọi $k_1 \in K_1$ ta có $k_1 = k_1 + 0 \in K_1 + K_2$, suy ra $K_1 \subseteq K_1 + K_2$. Tương tự, $K_2 \subseteq K_1 + K_2$. Do đó:
> $$K_1 \cup K_2 \subseteq K_1 + K_2$$
> - *Tính lồi của $K_1 + K_2$:* Vì $K_1$ và $K_2$ là các tập lồi, theo tính chất tổng hai tập lồi, $K_1 + K_2$ cũng là một tập lồi.
> 
> Vì $\text{co}(K_1 \cup K_2)$ là tập lồi nhỏ nhất chứa $K_1 \cup K_2$, ta suy ra:
> $$\text{co}(K_1 \cup K_2) \subseteq K_1 + K_2$$
> 
> Từ hai chiều bao hàm, ta kết luận $K_1 + K_2 = \text{co}(K_1 \cup K_2)$.

> [!lem] (Biểu diễn nón qua hệ độc lập tuyến tính)
> Cho $A \subset X$. Lúc đó, với mọi $k \in \operatorname{con\,co} A \setminus \{0\}$, tồn tại hệ độc lập tuyến tính $\{a_1, a_2, \dots, a_m\} \subset A$ và các số dương $\lambda_1, \dots, \lambda_m > 0$ sao cho:
> $$k = \sum_{i=1}^m \lambda_i a_i$$

> [!prf]
> Giả sử $k \in \operatorname{con\,co} A \setminus \{0\}$. Theo định nghĩa bao nón lồi, $k$ biểu diễn được dưới dạng tổ hợp dương không tầm thường của các phần tử thuộc $A$. Bằng cách bỏ đi các số hạng có hệ số bằng 0, ta có thể viết:
> $$k = \sum_{i=1}^m \lambda_i a_i \quad \text{với } a_i \in A, \, \lambda_i > 0 \, (\forall i = 1, \dots, m)$$
> Trong các biểu diễn dạng này của $k$, ta chọn một biểu diễn có số lượng số hạng $m$ là **nhỏ nhất**. Ta sẽ chứng minh hệ $\{a_1, a_2, \dots, a_m\}$ độc lập tuyến tính.
> 
> Giả sử phản chứng hệ $\{a_1, a_2, \dots, a_m\}$ phụ thuộc tuyến tính. Khi đó, tồn tại bộ hệ số $(\mu_1, \dots, \mu_m)$ không đồng thời bằng 0 sao cho:
> $$\sum_{i=1}^m \mu_i a_i = 0$$
> Không mất tính tổng quát, ta có thể giả sử tồn tại ít nhất một chỉ số $j$ sao cho $\mu_j > 0$ (nếu mọi $\mu_i \le 0$, ta nhân hai vế với $-1$).
> 
> Bây giờ, xét giá trị cực tiểu:
> $$t_0 = \min \left\{ \frac{\lambda_j}{\mu_j} \;\middle|\; \mu_j > 0 \right\} = \frac{\lambda_s}{\mu_s} > 0$$
> với $s \in \{1, \dots, m\}$ là chỉ số đạt giá trị nhỏ nhất.
> 
> Đặt các hệ số mới:
> $$\bar{\lambda}_i := \lambda_i - t_0 \mu_i \quad (1 \le i \le m)$$
> - Nếu $\mu_i > 0$: Do $t_0 \le \frac{\lambda_i}{\mu_i}$ nên $\bar{\lambda}_i = \lambda_i - t_0 \mu_i \ge 0$. Đặc biệt, tại $i = s$ ta có $\bar{\lambda}_s = \lambda_s - \frac{\lambda_s}{\mu_s} \mu_s = 0$.
> - Nếu $\mu_i \le 0$: Do $\lambda_i > 0$ và $t_0 > 0$ nên $-t_0 \mu_i \ge 0$, dẫn đến $\bar{\lambda}_i = \lambda_i - t_0 \mu_i > 0$.
> 
> Do đó, $\bar{\lambda}_i \ge 0$ với mọi $i = 1, \dots, m$ và $\bar{\lambda}_s = 0$.
> 
> Khi đó:
> $$k = k - t_0 \cdot 0 = \sum_{i=1}^m \lambda_i a_i - t_0 \sum_{i=1}^m \mu_i a_i = \sum_{i=1}^m (\lambda_i - t_0 \mu_i) a_i = \sum_{i=1}^m \bar{\lambda}_i a_i = \sum_{i \neq s} \bar{\lambda}_i a_i$$
> Vì $k \neq 0$ nên các hệ số $\bar{\lambda}_i$ còn lại không thể đồng thời bằng 0. Biểu thức trên cho ta một biểu diễn của $k$ dưới dạng tổ hợp dương từ tập $A$ chỉ với nhiều nhất $m - 1$ phần tử. Điều này mâu thuẫn với tính nhỏ nhất của $m$.
> 
> Vậy hệ $\{a_1, \dots, a_m\}$ bắt buộc phải độc lập tuyến tính.

> [!thm] (Carathéodory)
> Giả sử $\dim X = n < \infty$ và $A \subset X$. Lúc đó, với mọi $x \in \operatorname{co} A$, $x$ là tổ hợp lồi của một họ không quá $n + 1$ vectơ thuộc $A$. Tức là, tồn tại hệ $\{a_0, a_1, \dots, a_m\} \subset A$ và các số $\lambda_0, \dots, \lambda_m \ge 0$ với $m \le n$ sao cho:
> $$\sum_{i=0}^m \lambda_i = 1 \quad \text{và} \quad x = \sum_{i=0}^m \lambda_i a_i$$

> [!prf]
> Xét không gian vectơ tích $Y = X \times \mathbb{R}$. Khi đó $\dim Y = \dim X + 1 = n + 1$.
> 
> Đặt $B = \{(a, 1) \mid a \in A\} \subset Y$. Dễ thấy:
> $$\operatorname{co} B = \operatorname{co} A \times \{1\}$$
> Do đó, với mọi $x \in \operatorname{co} A$, ta có điểm $y = (x, 1) \in \operatorname{co} B \subset \operatorname{con\,co} B$. Vì $y = (x, 1) \neq (0_X, 0)$, nên $y \in \operatorname{con\,co} B \setminus \{0\}$.
> 
> Áp dụng Bổ đề Biểu diễn nón qua hệ độc lập tuyến tính cho tập $B \subset Y$, tồn tại một hệ các vectơ độc lập tuyến tính trong $Y$:
> $$\{(a_0, 1), (a_1, 1), \dots, (a_m, 1)\} \subset B$$
> và các số dương $\lambda_0, \lambda_1, \dots, \lambda_m > 0$ sao cho:
> $$(x, 1) = \sum_{i=0}^m \lambda_i (a_i, 1)$$
> Tách theo hai thành phần tọa độ của $Y = X \times \mathbb{R}$, đẳng thức trên tương đương với:
> $$x = \sum_{i=0}^m \lambda_i a_i \quad \text{và} \quad \sum_{i=0}^m \lambda_i = 1$$
> Mặt khác, do hệ $\{(a_0, 1), (a_1, 1), \dots, (a_m, 1)\}$ gồm $m + 1$ vectơ độc lập tuyến tính trong không gian $Y$ có số chiều $\dim Y = n + 1$, số lượng vectơ độc lập tuyến tính không thể vượt quá số chiều không gian:
> $$m + 1 \le \dim Y = n + 1 \implies m \le n$$
> Vậy $x$ được biểu diễn dưới dạng tổ hợp lồi của $m + 1 \le n + 1$ vectơ thuộc $A$. Định lý đã được chứng minh hoàn toàn.

> [!prp] Tính chất Tôpô của Tập Lồi: Phần Trong, Bao Đóng và Biên
> Cho $C$ là một tập lồi trong không gian định chuẩn $X$ (hoặc $\mathbb{R}^n$).
> 
> a) Bao đóng $\overline{C}$ là một tập lồi.
> 
> b) (Accessibility Lemma) 
> Nếu $x \in \operatorname{int} C$ và $y \in \overline{C}$, thì mọi điểm nằm trên nửa khoảng nối từ $x$ đến $y$ (không bao gồm $y$) đều thuộc phần trong của $C$:
> $$(1 - \lambda)x + \lambda y \in \operatorname{int} C, \quad \forall \lambda \in [0, 1)$$
> 
> c) Phần trong $\operatorname{int} C$ là một tập lồi.
> 
> d) Nếu $\operatorname{int} C \neq \emptyset$, thì:
> $$\operatorname{int} \overline{C} = \operatorname{int} C \quad \text{và} \quad \overline{\operatorname{int} C} = \overline{C}$$
> 
> e) Nếu $\operatorname{int} C \neq \emptyset$, biên $\operatorname{bd} C = \overline{C} \setminus \operatorname{int} C$ không chứa bất kỳ điểm trong nào và thỏa mãn:
> $$\operatorname{bd} C = \operatorname{bd} \overline{C} = \operatorname{bd}(\operatorname{int} C)$$

> [!prf]
> a) 
> Lấy $u, v \in \overline{C}$ và $\lambda \in [0, 1]$.
> Theo định nghĩa bao đóng, tồn tại hai dãy $\{u_k\}, \{v_k\} \subset C$ sao cho:
> $$\lim_{k \to \infty} u_k = u \quad \text{và} \quad \lim_{k \to \infty} v_k = v$$
> Vì $C$ là tập lồi nên với mọi $k$, ta có:
> $$w_k := (1 - \lambda)u_k + \lambda v_k \in C$$
> Do các phép toán không gian vectơ là liên tục đối với tôpô chuẩn:
> $$\lim_{k \to \infty} w_k = (1 - \lambda)u + \lambda v$$
> Dãy $\{w_k\} \subset C$ hội tụ về $(1 - \lambda)u + \lambda v$, do đó $(1 - \lambda)u + \lambda v \in \overline{C}$. Vậy $\overline{C}$ là tập lồi.
> 
> b)
> Cố định $\lambda \in [0, 1)$. Đặt $z = (1 - \lambda)x + \lambda y$. Ta cần chỉ ra tồn tại bán kính $r > 0$ sao cho hình cầu mở $B(z, r) \subset C$.
> 
> Vì $x \in \operatorname{int} C$, tồn tại $\varepsilon > 0$ sao cho hình cầu mở $B(x, \varepsilon) \subset C$.
> Do $y \in \overline{C}$, theo định nghĩa bao đóng, tồn tại $y' \in C$ đủ gần $y$ sao cho:
> $$\|y' - y\| < \frac{1 - \lambda}{\lambda} \cdot \frac{\varepsilon}{2} \quad (\text{với } \lambda > 0; \text{ nếu } \lambda = 0 \text{ thì } z = x \in \operatorname{int} C \text{ hiển nhiên})$$
> 
> Xét bán kính $r = (1 - \lambda)\frac{\varepsilon}{2} > 0$. Lấy một điểm tùy ý $w \in B(z, r)$, tức $\|w - z\| < r$.
> Ta phân tích $w$ dưới dạng tổ hợp:
> $$w = (1 - \lambda)x' + \lambda y'$$
> Đẳng thức này tương đương với:
> $$x' = \frac{w - \lambda y'}{1 - \lambda}$$
> Ta ước lượng khoảng cách từ $x'$ đến $x$:
> $$x' - x = \frac{w - \lambda y' - (1 - \lambda)x}{1 - \lambda} = \frac{w - \big((1 - \lambda)x + \lambda y\big) + \lambda(y - y')}{1 - \lambda} = \frac{(w - z) + \lambda(y - y')}{1 - \lambda}$$
> Sử dụng bất đẳng thức tam giác:
> $$\|x' - x\| \le \frac{\|w - z\| + \lambda \|y - y'\|}{1 - \lambda} < \frac{r + \lambda \cdot \frac{1 - \lambda}{\lambda}\frac{\varepsilon}{2}}{1 - \lambda} = \frac{(1 - \lambda)\frac{\varepsilon}{2} + (1 - \lambda)\frac{\varepsilon}{2}}{1 - \lambda} = \varepsilon$$
> Suy ra $x' \in B(x, \varepsilon) \subset C$.
> Vì $x' \in C$, $y' \in C$ và $C$ là tập lồi, ta có:
> $$w = (1 - \lambda)x' + \lambda y' \in C$$
> Như vậy, $B(z, r) \subset C$, kéo theo $z \in \operatorname{int} C$.
> 
> c)
> Nếu $\operatorname{int} C = \emptyset$, tập rỗng hiển nhiên là tập lồi.
> Nếu $\operatorname{int} C \neq \emptyset$, lấy $u, v \in \operatorname{int} C$ và $\lambda \in [0, 1]$.
> - Nếu $\lambda = 0$: $(1 - \lambda)u + \lambda v = u \in \operatorname{int} C$.
> - Nếu $\lambda = 1$: $(1 - \lambda)u + \lambda v = v \in \operatorname{int} C$.
> - Nếu $\lambda \in (0, 1)$: Vì $v \in \operatorname{int} C \subset \overline{C}$ và $u \in \operatorname{int} C$, áp dụng bổ đề đoạn thẳng ở câu b) với điểm đầu $u$ và điểm đích $v \in \overline{C}$, ta có ngay:
> $$(1 - \lambda)u + \lambda v \in \operatorname{int} C$$
> Vậy $\operatorname{int} C$ là một tập lồi.
> 
> d)
> Giả sử $\operatorname{int} C \neq \emptyset$.
> 
> **1. Chứng minh $\operatorname{int} \overline{C} = \operatorname{int} C$:**
> Hiển nhiên $C \subset \overline{C} \implies \operatorname{int} C \subset \operatorname{int} \overline{C}$.
> Ngược lại, lấy $y \in \operatorname{int} \overline{C}$. Ta sẽ chỉ ra $y \in \operatorname{int} C$.
> Vì $\operatorname{int} C \neq \emptyset$, chọn một điểm $x \in \operatorname{int} C \subset \overline{C}$.
> Do $y \in \operatorname{int} \overline{C}$, tồn tại một khoảng đủ nhỏ để ta kéo dài đoạn thẳng qua khỏi $y$: tồn tại $\mu > 1$ sao cho:
> $$z = (1 - \mu)x + \mu y \in \overline{C}$$
> Biến đổi biểu thức trên, ta biểu diễn lại $y$ qua $x$ và $z$:
> $$y = \frac{\mu - 1}{\mu} x + \frac{1}{\mu} z = (1 - \lambda)x + \lambda z \quad \text{với } \lambda = \frac{1}{\mu} \in (0, 1)$$
> Vì $x \in \operatorname{int} C$ và $z \in \overline{C}$, áp dụng bổ đề đoạn thẳng ở câu b), ta suy ra:
> $$y = (1 - \lambda)x + \lambda z \in \operatorname{int} C$$
> Do đó $\operatorname{int} \overline{C} \subset \operatorname{int} C$. Vậy $\operatorname{int} \overline{C} = \operatorname{int} C$.
> 
> **2. Chứng minh $\overline{\operatorname{int} C} = \overline{C}$:**
> Hiển nhiên $\operatorname{int} C \subset C \implies \overline{\operatorname{int} C} \subset \overline{C}$.
> Ngược lại, lấy $y \in \overline{C}$ tùy ý và cố định một điểm $x \in \operatorname{int} C$.
> Xét dãy điểm:
> $$y_k = \left(1 - \frac{1}{k}\right) y + \frac{1}{k} x \quad (k \ge 2)$$
> Theo bổ đề đoạn thẳng câu b), mỗi $y_k \in \operatorname{int} C$.
> Khi cho $k \to \infty$, ta có $\lim_{k \to \infty} y_k = y$.
> Vì $y$ là giới hạn của một dãy điểm nằm trong $\operatorname{int} C$, ta có $y \in \overline{\operatorname{int} C}$.
> Do đó $\overline{C} \subset \overline{\operatorname{int} C}$. Vậy $\overline{\operatorname{int} C} = \overline{C}$.
> 
> e)
> Theo định nghĩa tôpô học của biên một tập hợp $A$:
> $$\operatorname{bd} A = \overline{A} \setminus \operatorname{int} A$$
> Áp dụng trực tiếp hai đẳng thức đã chứng minh ở câu d):
> - Với tập $\overline{C}$:
>   $$\operatorname{bd} \overline{C} = \overline{\overline{C}} \setminus \operatorname{int}\overline{C} = \overline{C} \setminus \operatorname{int} C = \operatorname{bd} C$$
> - Với tập $\operatorname{int} C$:
>   $$\operatorname{bd}(\operatorname{int} C) = \overline{\operatorname{int} C} \setminus \operatorname{int}(\operatorname{int} C) = \overline{C} \setminus \operatorname{int} C = \operatorname{bd} C$$
> Vậy $\operatorname{bd} C = \operatorname{bd} \overline{C} = \operatorname{bd}(\operatorname{int} C)$.

> [!def] Phần trong Tương đối và Biên Tương đối 
> Cho $C$ là một tập lồi trong không gian $\mathbb{R}^n$ (hoặc không gian định chuẩn $X$).
> 
> a) Phần trong tương đối (Relative Interior):
> Phần trong tương đối của $C$, ký hiệu là $\operatorname{ri} C$, được định nghĩa là phần trong của $C$ xét trong tôpô cảm ứng của bao affine $\operatorname{aff} C$:
> $$\operatorname{ri} C := \{ x \in C \mid \exists \varepsilon > 0, \, B(x, \varepsilon) \cap \operatorname{aff} C \subset C \}$$
> trong đó $B(x, \varepsilon) = \{y \in X \mid \|y - x\| < \varepsilon\}$ là hình cầu mở trong không gian toàn phần.
> 
> *Quy ước:* Nếu $C = \{x_0\}$ là tập gồm một điểm duy nhất, thì $\operatorname{aff} C = \{x_0\}$ và $\operatorname{ri} C = \{x_0\}$. Nếu $C = \emptyset$, thì $\operatorname{ri} \emptyset = \emptyset$.
> 
> b) Biên tương đối (Relative Boundary):
> Biên tương đối của $C$, ký hiệu là $\operatorname{rbd} C$ (hoặc $\operatorname{rel\,bd} C$), là tập hợp các điểm thuộc bao đóng của $C$ nhưng không thuộc phần trong tương đối của nó:
> $$\operatorname{rbd} C := \overline{C} \setminus \operatorname{ri} C$$

> [!prp] Tính chất Tôpô của Tập Lồi: Phần Trong Tương Đối và Biên Tương Đối
> Cho $C$ là một tập lồi trong không gian $\mathbb{R}^n$ (hoặc không gian định chuẩn $X$).
> 
> a) Nếu $C \subset \mathbb{R}^n$ và $C \neq \emptyset$, thì:
> $$\operatorname{ri} C \neq \emptyset$$
> 
> b) (Relative Accessibility Lemma) 
> Nếu $x \in \operatorname{ri} C$ và $y \in \overline{C}$, thì:
> $$(1 - \lambda)x + \lambda y \in \operatorname{ri} C, \quad \forall \lambda \in [0, 1)$$
> 
> c) Phần trong tương đối $\operatorname{ri} C$ là một tập lồi.
> 
> d) Nếu $C \neq \emptyset$, thì:
> $$\operatorname{ri} \overline{C} = \operatorname{ri} C \quad \text{và} \quad \overline{\operatorname{ri} C} = \overline{C}$$
> 
> e) Bảo toàn bao affine:
> $$\operatorname{aff}(\operatorname{ri} C) = \operatorname{aff} C = \operatorname{aff}(\overline{C})$$
> 
> f) Nếu $C \neq \emptyset$, biên tương đối $\operatorname{rbd} C = \overline{C} \setminus \operatorname{ri} C$ thỏa mãn:
> $$\operatorname{rbd} C = \operatorname{rbd} \overline{C} = \operatorname{rbd}(\operatorname{ri} C)$$

> [!prf]
> Đặt $M = \operatorname{aff} C$. Bằng một phép tịnh tiến vectơ thích hợp, ta có thể giả sử $0 \in C$, do đó $M$ là một không gian con tuyến tính của $\mathbb{R}^n$ với $\dim M = k \le n$. Tôpô cảm ứng trên $M$ đẳng cự với không gian Euclid $\mathbb{R}^k$. Khi đó, $\operatorname{ri} C$ chính là phần trong của $C$ xét trong không gian metric $M$, và $\operatorname{rbd} C$ chính là biên của $C$ xét trong $M$.
> 
> a)
> Vì $C \neq \emptyset$, gọi $k = \dim C = \dim M$. Khi đó tồn tại $k + 1$ điểm $\{a_0, a_1, \dots, a_k\} \subset C$ độc lập affine.
> Xét đơn giác $S = \operatorname{co}\{a_0, a_1, \dots, a_k\} \subset C$.
> Điểm trọng tâm của đơn giác:
> $$x_0 = \frac{1}{k + 1}\sum_{i=0}^k a_i$$
> là một điểm thuộc phần trong của $S$ xét trong tôpô cảm ứng của $\operatorname{aff} S = M$. Do $S \subset C$, ta suy ra tồn tại $\varepsilon > 0$ sao cho:
> $$B(x_0, \varepsilon) \cap M \subset S \subset C$$
> Theo định nghĩa phần trong tương đối, điều này có nghĩa là $x_0 \in \operatorname{ri} C$. Vậy $\operatorname{ri} C \neq \emptyset$.
> 
> b)
> Vì $\operatorname{ri} C$ và $\overline{C}$ lần lượt chính là phần trong và bao đóng của tập lồi $C$ khi thu hẹp xét hoàn toàn trong không gian con affine $M$, khẳng định này suy ra trực tiếp từ Bổ đề đoạn thẳng (Accessibility Lemma) thông thường áp dụng cho không gian $M$.
> Cụ thể, với $x \in \operatorname{ri} C$, tồn tại quả cầu mở tương đối $B_M(x, \varepsilon) = B(x, \varepsilon) \cap M \subset C$.
> Với $y \in \overline{C}$ và $\lambda \in [0, 1)$, điểm $z = (1 - \lambda)x + \lambda y$ thỏa mãn:
> $$B_M(z, (1 - \lambda)\varepsilon) \subset C$$
> Do đó $z \in \operatorname{ri} C$.
> 
> c)
> Lấy $u, v \in \operatorname{ri} C$ và $\lambda \in [0, 1]$.
> Nếu $\lambda = 0$ hoặc $\lambda = 1$, khẳng định hiển nhiên.
> Nếu $\lambda \in (0, 1)$, vì $v \in \operatorname{ri} C \subset \overline{C}$ và $u \in \operatorname{ri} C$, áp dụng kết quả câu b với điểm đầu $u$ và điểm đích $v \in \overline{C}$, ta được ngay $(1 - \lambda)u + \lambda v \in \operatorname{ri} C$.
> Vậy $\operatorname{ri} C$ là một tập lồi.
> 
> d)
> Áp dụng tính chất bảo toàn phần trong và bao đóng của tập lồi trong không gian $M$ (khi phần trong tương đối khác rỗng theo câu a):
> 1. $\operatorname{ri} C \subset \operatorname{ri} \overline{C}$ là hiển nhiên vì $C \subset \overline{C}$. Ngược lại, lấy $y \in \operatorname{ri} \overline{C}$. Do $\operatorname{ri} C \neq \emptyset$, chọn $x \in \operatorname{ri} C \subset \overline{C}$. Vì $y$ thuộc phần trong tương đối của $\overline{C}$, ta có thể kéo dài đoạn thẳng qua khỏi $y$ trong $M$: tồn tại $\mu > 1$ sao cho $w = (1 - \mu)x + \mu y \in \overline{C}$. Biểu diễn lại $y = (1 - \frac{1}{\mu})x + \frac{1}{\mu}w$. Áp dụng câu b với $x \in \operatorname{ri} C$ và $w \in \overline{C}$, ta có $y \in \operatorname{ri} C$. Vậy $\operatorname{ri} \overline{C} = \operatorname{ri} C$.
> 2. Lấy $y \in \overline{C}$ và cố định $x \in \operatorname{ri} C$. Dãy điểm $y_k = (1 - \frac{1}{k})y + \frac{1}{k}x$ thuộc $\operatorname{ri} C$ theo câu b với mọi $k \ge 2$, và $\lim_{k \to \infty} y_k = y$. Suy ra $y \in \overline{\operatorname{ri} C}$, tức $\overline{C} \subset \overline{\operatorname{ri} C}$. Kết hợp với chiều hiển nhiên $\operatorname{ri} C \subset C \implies \overline{\operatorname{ri} C} \subset \overline{C}$, ta được $\overline{\operatorname{ri} C} = \overline{C}$.
> 
> e)
> Vì $\operatorname{ri} C \subset C \subset \overline{C}$, ta có ngay chuỗi bao hàm thức $\operatorname{aff}(\operatorname{ri} C) \subset \operatorname{aff} C \subset \operatorname{aff}(\overline{C})$.
> Theo chứng minh ở câu a, $\operatorname{ri} C$ chứa một đơn giác $S$ có $k + 1$ đỉnh độc lập affine của $C$. Do đó:
> $$\dim(\operatorname{aff}(\operatorname{ri} C)) \ge \dim(\operatorname{aff} S) = k = \dim(\operatorname{aff} C)$$
> Vì $\operatorname{aff}(\operatorname{ri} C) \subset \operatorname{aff} C$ và hai không gian affine này có cùng số chiều hữu hạn, ta có $\operatorname{aff}(\operatorname{ri} C) = \operatorname{aff} C$.
> Tương tự, vì $C \subset \overline{C} \subset \operatorname{aff} C$, lấy bao affine hai vế ta được $\operatorname{aff}(\overline{C}) \subset \operatorname{aff}(\operatorname{aff} C) = \operatorname{aff} C$.
> Vậy $\operatorname{aff}(\operatorname{ri} C) = \operatorname{aff} C = \operatorname{aff}(\overline{C})$.
> 
> f)
> Theo định nghĩa biên tương đối: $\operatorname{rbd} A = \overline{A} \setminus \operatorname{ri} A$.
> Sử dụng các đẳng thức đã chứng minh ở câu d:
> Với tập $\overline{C}$:
> $$\operatorname{rbd} \overline{C} = \overline{\overline{C}} \setminus \operatorname{ri} \overline{C} = \overline{C} \setminus \operatorname{ri} C = \operatorname{rbd} C$$
> Với tập $\operatorname{ri} C$:
> $$\operatorname{rbd}(\operatorname{ri} C) = \overline{\operatorname{ri} C} \setminus \operatorname{ri}(\operatorname{ri} C) = \overline{C} \setminus \operatorname{ri} C = \operatorname{rbd} C$$
> Vậy $\operatorname{rbd} C = \operatorname{rbd} \overline{C} = \operatorname{rbd}(\operatorname{ri} C)$.

> [!lem] Bổ đề Siêu phẳng Tách Điểm Cực tiểu Khoảng cách
> Cho $S \subset X$ là tập hợp lồi của không gian Euclid $X$ và các điểm $x \in X$, $y \in S$ thỏa mãn $x \neq y$ và $d(x, S) = d(x, y)$. Gọi $H$ là siêu phẳng đi qua $y$ và trực giao với $\vec{xy}$. Thế thì nửa không gian đóng xác định bởi siêu phẳng $H$ và không chứa $x$ thì sẽ chứa $S$. Hơn nữa, khẳng định trên vẫn đúng nếu $S$ là tập sao đối với $y$.

> [!prf]
> Nhắc lại định nghĩa chuẩn của khoảng cách từ một điểm $x$ đến tập hợp $S$:
> $$d(x, S) := \inf_{u \in S} d(x, u)$$
> Do giả thiết $d(x, y) = d(x, S)$, theo định nghĩa của cận dưới đúng (infimum), ta có bất đẳng thức:
> $$d(x, y) \le d(x, u), \quad \forall u \in S$$
> 
> Vectơ pháp tuyến của siêu phẳng $H$ hướng từ $y$ về $x$ là $x - y \neq 0$. Siêu phẳng $H$ đi qua $y$ được biểu diễn bởi:
> $$H = \{ z \in X \mid \langle x - y, z - y \rangle = 0 \}$$
> 
> Nửa không gian đóng xác định bởi $H$ và không chứa $x$ chính là:
> $$H^- = \{ z \in X \mid \langle x - y, z - y \rangle \le 0 \}$$
> 
> Ta cần chứng minh $S \subset H^-$, tức là với mọi $z \in S$:
> $$\langle x - y, z - y \rangle \le 0$$
> 
> Lấy tùy ý $z \in S$.
> Nếu $z = y$, ta có $\langle x - y, y - y \rangle = 0 \le 0$, bất đẳng thức hiển nhiên đúng.
> 
> Xét trường hợp $z \neq y$. Vì $S$ là tập lồi (hoặc tổng quát hơn, $S$ là tập sao đối với tâm $y$), đoạn thẳng nối $y$ và $z$ nằm trọn trong $S$:
> $$y_t := (1 - t)y + tz = y + t(z - y) \in S, \quad \forall t \in (0, 1]$$
> 
> Thay $u = y_t \in S$ vào bất đẳng thức khoảng cách ở trên:
> $$d(x, y) \le d(x, y_t) \iff \|x - y\|^2 \le \|x - y_t\|^2, \quad \forall t \in (0, 1]$$
> 
> Khai triển vế phải theo định nghĩa $y_t$:
> $$\|x - y_t\|^2 = \|(x - y) - t(z - y)\|^2 = \|x - y\|^2 - 2t \langle x - y, z - y \rangle + t^2 \|z - y\|^2$$
> 
> Thay vào bất đẳng thức khoảng cách:
> $$\|x - y\|^2 \le \|x - y\|^2 - 2t \langle x - y, z - y \rangle + t^2 \|z - y\|^2$$
> 
> Triệt tiêu $\|x - y\|^2$ ở cả hai vế:
> $$0 \le -2t \langle x - y, z - y \rangle + t^2 \|z - y\|^2$$
> 
> Chia cả hai vế cho $2t > 0$:
> $$\langle x - y, z - y \rangle \le \frac{t}{2} \|z - y\|^2$$
> 
> Cho $t \to 0^+$, ta thu được:
> $$\langle x - y, z - y \rangle \le 0$$
> 
> Điều này chứng tỏ $z \in H^-$. Do $z \in S$ là tùy ý, ta kết luận $S \subset H^-$.

> [!prp] Định lý Tính Duy nhất của Điểm Gần nhất
> Cho $S$ là tập hợp con lồi của không gian Euclid $X$ và $x \in X$. Khi đó tồn tại nhiều nhất một điểm $y \in S$ sao cho $d(x, y) = d(x, S)$.

> [!prf]
> Nếu $x \in S$, theo định nghĩa khoảng cách, $d(x, S) = 0$. Vì metric thỏa mãn $d(x, y) = 0 \iff y = x$, điểm thỏa mãn duy nhất là $y = x$.
> 
> Xét trường hợp $x \notin S$, tức $d(x, S) > 0$. Giả sử phản chứng tồn tại hai điểm phân biệt $y_1, y_2 \in S$ ($y_1 \neq y_2$) cùng đạt khoảng cách cực tiểu:
> $$d(x, y_1) = d(x, y_2) = d(x, S)$$
> Khi đó $x \neq y_1$ và $x \neq y_2$.
> 
> Áp dụng trực tiếp Bổ đề Siêu phẳng Tách Điểm Cực tiểu Khoảng cách:
> 1. Điểm $y_1$ là điểm cực tiểu và $y_2 \in S$, do đó $y_2$ thuộc nửa không gian $H^-$ tương ứng của $y_1$:
> $$\langle x - y_1, y_2 - y_1 \rangle \le 0 \quad (1)$$
> 
> 2. Đổi vai trò, điểm $y_2$ là điểm cực tiểu và $y_1 \in S$, do đó $y_1$ thuộc nửa không gian $H^-$ tương ứng của $y_2$:
> $$\langle x - y_2, y_1 - y_2 \rangle \le 0 \iff \langle y_2 - x, y_2 - y_1 \rangle \le 0 \quad (2)$$
> 
> Cộng hai bất đẳng thức (1) và (2) vế theo vế:
> $$\langle (x - y_1) + (y_2 - x), y_2 - y_1 \rangle \le 0 \iff \langle y_2 - y_1, y_2 - y_1 \rangle \le 0 \iff \|y_2 - y_1\|^2 \le 0$$
> 
> Chuẩn luôn không âm nên suy ra $\|y_2 - y_1\| = 0$, tức $y_1 = y_2$, mâu thuẫn với giả thiết $y_1 \neq y_2$.
> 
> Vậy tồn tại nhiều nhất một điểm $y \in S$ thỏa mãn $d(x, y) = d(x, S)$.

> [!thm] Định lý Hình chiếu Hilbert lên Tập Lồi Đóng 
> Cho $S$ là một tập con lồi, đóng, khác rỗng của không gian Euclid $X$ và điểm $y \notin S$. Khi đó tồn tại duy nhất một điểm $z \in S$ sao cho khoảng cách từ $y$ đến $z$ là ngắn nhất, tức là:
> $$d(y, z) = d(y, S) = \inf_{x \in S} d(y, x)$$

> [!prf]
> Đặt $d = d(y, S) = \inf_{x \in S} \|y - x\|$. Vì $S$ là tập đóng và $y \notin S$, ta có $d > 0$.
> 
> **Phần 1: Chứng minh Sự tồn tại**
> Cố định một điểm tùy ý $x_0 \in S$ và đặt $R = \|y - x_0\| \ge d$.
> Xét tập giao:
> $$S_0 = S \cap \bar{B}(y, R) = \{x \in S \mid \|y - x\| \le R\}$$
> Tập $S_0$ khác rỗng (vì chứa $x_0$). 
> Do $\bar{B}(y, R)$ là hình cầu đóng và bị chặn trong không gian Euclid hữu hạn chiều $X$, và $S$ là tập đóng, nên tập $S_0$ là tập con đóng và bị chặn trong $X$. Do đó, $S_0$ là tập compact.
> 
> Xét hàm khoảng cách $f: S_0 \to \mathbb{R}$ xác định bởi $f(x) = \|y - x\|$.
> Hàm $f$ là hàm liên tục trên tập compact $S_0$. Theo định lý Weierstrass về giá trị cực trị, hàm $f$ đạt giá trị nhỏ nhất trên $S_0$, nghĩa là tồn tại điểm $z \in S_0 \subset S$ thỏa mãn:
> $$\|y - z\| = \min_{x \in S_0} \|y - x\|$$
> 
> Với mọi $x \in S \setminus S_0$, theo định nghĩa của $S_0$, ta có:
> $$\|y - x\| > R \ge \|y - z\|$$
> Do đó, $\|y - z\| \le \|y - x\|$ với mọi $x \in S$. Điều này chứng minh sự tồn tại của điểm cực tiểu $z \in S$ đạt $d(y, z) = d(y, S)$.
> 
> **Phần 2: Chứng minh Tính duy nhất**
> Giả sử tồn tại hai điểm $z_1, z_2 \in S$ cùng thỏa mãn:
> $$d(y, z_1) = d(y, z_2) = d(y, S)$$
> Theo Định lý Tính Duy nhất của Điểm Gần nhất, tập lồi đóng $S$ chứa nhiều nhất một điểm đạt khoảng cách ngắn nhất đến $y$. Từ đó suy ra ngay:
> $$z_1 = z_2$$
> Vậy điểm $z \in S$ là duy nhất.

> [!thm] Định lý Đặc trưng Tính Lồi Motzkin
> Cho $S$ là tập hợp con đóng không rỗng của không gian Euclid $X$ sao cho với mọi $x \in X$, tồn tại một điểm duy nhất $y \in S$ thỏa mãn $d(x, y) = d(x, S)$. Khi đó $S$ là tập hợp lồi.

> [!prf]
> Giả sử phản chứng $S$ không lồi. Khi đó tồn tại hai điểm $x, y \in S$ sao cho đoạn thẳng nối chúng không nằm hoàn toàn trong $S$, tức là $[x, y] \not\subset S$.
> Do đó, tồn tại một điểm $z \in [x, y] \setminus S$, nghĩa là $z = \lambda x + (1 - \lambda)y$ với $\lambda \in (0, 1)$ và $z \notin S$.
> 
> Vì $S$ đóng và $z \notin S$, nên khoảng cách $d(z, S) > 0$. Do đó, tồn tại hình cầu đóng $B(z, r)$ (với tâm $z$ và bán kính $r > 0$) sao cho:
> $$S \cap B(z, r) = \emptyset$$
> 
> Xét họ $\mathcal{F}$ gồm tất cả các hình cầu đóng $B(w, t)$ trong $X$ thỏa mãn:
> 1. Chứa trọn hình cầu ban đầu: $B(z, r) \subset B(w, t)$, tương đương với $d(w, z) \le t - r$.
> 2. Phần trong của hình cầu không giao với $S$: $S \cap \operatorname{int} B(w, t) = \emptyset$, tương đương với $d(w, S) \ge t$.
> 
> Đặt $D = \{ (w, t) \in X \times \mathbb{R} \mid B(w, t) \in \mathcal{F} \}$.
> 
> **Bước 1: Chứng minh $D$ là tập compact**
> Hiển nhiên $D$ là tập đóng trong $X \times \mathbb{R}$ do được xác định bởi các bất đẳng thức liên tục không ngặt. Ta chứng minh $D$ bị chặn.
> 
> Lấy bất kỳ $(w, t) \in D$. Vì $x, y \in S$ và $d(w, S) \ge t$, ta có:
> $$d(x, w) = \|x - w\| \ge t \quad \text{và} \quad d(y, w) = \|y - w\| \ge t$$
> Đồng thời, do $d(z, w) \le t - r$, ta ước lượng:
> $$(t - r)^2 \ge \|z - w\|^2 = \|\lambda x + (1 - \lambda)y - w\|^2 = \|\lambda (x - w) + (1 - \lambda)(y - w)\|^2$$
> 
> Khai triển chuẩn theo tích vô hướng:
> $$\|\lambda (x - w) + (1 - \lambda)(y - w)\|^2 = \lambda^2 \|x - w\|^2 + (1 - \lambda)^2 \|y - w\|^2 + 2\lambda(1 - \lambda)\langle x - w, y - w \rangle$$
> 
> Sử dụng hằng đẳng thức $2\langle a, b \rangle = \|a\|^2 + \|b\|^2 - \|a - b\|^2$ cho hai vectơ $a = x - w$ và $b = y - w$:
> $$2\langle x - w, y - w \rangle = \|x - w\|^2 + \|y - w\|^2 - \|x - y\|^2$$
> 
> Thay vào biểu thức trên:
> $$\|z - w\|^2 = \lambda^2 \|x - w\|^2 + (1 - \lambda)^2 \|y - w\|^2 + \lambda(1 - \lambda)\big(\|x - w\|^2 + \|y - w\|^2 - \|x - y\|^2\big)$$
> $$= \big(\lambda^2 + \lambda(1 - \lambda)\big)\|x - w\|^2 + \big((1 - \lambda)^2 + \lambda(1 - \lambda)\big)\|y - w\|^2 - \lambda(1 - \lambda)\|x - y\|^2$$
> $$= \lambda \|x - w\|^2 + (1 - \lambda)\|y - w\|^2 - \lambda(1 - \lambda)\|x - y\|^2$$
> 
> Vì $\|x - w\| \ge t$ và $\|y - w\| \ge t$, ta được:
> $$(t - r)^2 \ge \lambda t^2 + (1 - \lambda)t^2 - \lambda(1 - \lambda)\|x - y\|^2 = t^2 - \lambda(1 - \lambda)\|x - y\|^2$$
> 
> Khai triển vế trái:
> $$t^2 - 2tr + r^2 \ge t^2 - \lambda(1 - \lambda)\|x - y\|^2$$
> $$-2tr + r^2 \ge -\lambda(1 - \lambda)\|x - y\|^2$$
> $$2tr \le \lambda(1 - \lambda)\|x - y\|^2 + r^2$$
> 
> Chia cả hai vế cho $2r > 0$:
> $$t \le \frac{1}{2} \left( \frac{\lambda(1 - \lambda)\|x - y\|^2}{r} + r \right)$$
> 
> Do đó bán kính $t$ bị chặn trên. Kéo theo từ bất đẳng thức $\|w - x\| \le \|w - z\| + \|z - x\| \le (t - r) + \|z - x\|$, tâm $w$ cũng bị chặn.
> Vậy $D$ bị chặn. Do $X$ là không gian hữu hạn chiều, $D$ đóng và bị chặn nên $D$ là tập compact.
> 
> **Bước 2: Tìm hình cầu cực đại và tạo mâu thuẫn**
> Vì hàm mục tiêu $(w, t) \mapsto t$ liên tục trên tập compact $D$, nó đạt giá trị lớn nhất tại một điểm $(w_0, t_0) \in D$:
> $$t_0 = \max \{ t \mid \exists w, (w, t) \in D \}$$
> 
> Xét hình cầu $B(w_0, t_0)$. Vì $t_0$ là giá trị lớn nhất, hình cầu này phải tiếp xúc với biên của $S$, tức là $B(w_0, t_0) \cap \operatorname{bd}(S) \neq \emptyset$.
> Theo giả thiết của định lý, điểm cực tiểu khoảng cách từ $w_0$ đến $S$ là **duy nhất**, nên hình cầu $B(w_0, t_0)$ chỉ tiếp xúc với tập $S$ tại đúng một điểm duy nhất $q \in \operatorname{bd}(S)$.
> 
> Xét hai mặt cầu $S(w_0, t_0)$ và $S(z, r)$:
> - Nếu $S(w_0, t_0) \cap S(z, r) = \emptyset$, ta đặt $p = z$.
> - Nếu $S(w_0, t_0) \cap S(z, r)$ tiếp xúc nhau tại một điểm, ta đặt giao điểm duy nhất đó là $p$.
> 
> Vì $q \neq p$ (do $q \in S$ còn $B(z, r) \cap S = \emptyset$), ta có vectơ $p - q \neq 0$.
> Khi đó, tồn tại một số vô cùng bé $\alpha > 0$ sao cho phép tịnh tiến hình cầu $B(w_0, t_0)$ theo hướng $p - q$:
> $$w^* = w_0 + \alpha(p - q)$$
> tạo thành hình cầu mới $B(w^*, t_0)$ dịch chuyển xa khỏi điểm tiếp xúc duy nhất $q$ mà vẫn đảm bảo chứa trọn $B(z, r)$. Do đó:
> $$S \cap B(w^*, t_0) = \emptyset \quad \text{và} \quad B(z, r) \subset B(w^*, t_0)$$
> 
> Vì $S$ đóng và hình cầu mới nằm cách rời hoàn toàn khỏi $S$, ta có thể mở rộng nhẹ bán kính $t_0$ lên thành $t_1 > t_0$ mà vẫn giữ nguyên điều kiện:
> $$B(z, r) \subset B(w_1, t_1) \quad \text{và} \quad S \cap \operatorname{int} B(w_1, t_1) = \emptyset$$
> với tâm $w_1$ được điều chỉnh thích hợp từ $w^*$.
> 
> Điều này suy ra tồn tại $(w_1, t_1) \in D$ với $t_1 > t_0$, mâu thuẫn trực tiếp với tính tối đại của bán kính $t_0$.
> 
> Mâu thuẫn này chứng tỏ giả thiết phản chứng là sai. Vậy $S$ phải là một tập hợp lồi.

> [!thm] Định lý Tách Nghiêm ngặt giữa Điểm và Tập Lồi Đóng
> Cho $S$ là một tập con lồi đóng của $\mathbb{R}^n$ và điểm $y \notin S$. Khi đó tồn tại vectơ $v \in \mathbb{R}^n \setminus \{0\}$ sao cho:
> $$\sup_{x \in S} \langle v, x \rangle < \langle v, y \rangle$$

> [!prf]
> Vì $S$ là tập lồi đóng khác rỗng và $y \notin S$, theo Định lý Hình chiếu lên Tập Lồi Đóng, tồn tại duy nhất hình chiếu của $y$ lên $S$:
> $$z := \operatorname{Pr}_S(y) \in S$$
> Đặt vectơ sai số là $v := y - z$. Vì $y \notin S$ nên $y \neq z$, suy ra $v \neq 0$.
> 
> Vì $z$ là điểm đạt khoảng cách cực tiểu từ $y$ đến $S$, áp dụng Bổ đề Siêu phẳng Tách Điểm Cực tiểu Khoảng cách, ta có:
> $$\langle y - z, x - z \rangle \le 0, \quad \forall x \in S$$
> Thay $y - z = v$ và $z = y - v$ vào bất đẳng thức trên:
> $$\langle v, x - (y - v) \rangle \le 0, \quad \forall x \in S$$
> Khai triển tích vô hướng:
> $$\langle v, x - y + v \rangle \le 0 \iff \langle v, x \rangle - \langle v, y \rangle + \|v\|^2 \le 0$$
> Suy ra:
> $$\langle v, x \rangle \le \langle v, y \rangle - \|v\|^2, \quad \forall x \in S$$
> Lấy cận trên đúng (supremum) trên toàn bộ $x \in S$ ở hai vế:
> $$\sup_{x \in S} \langle v, x \rangle \le \langle v, y \rangle - \|v\|^2$$
> Vì $v \neq 0$ nên $\|v\|^2 > 0$, từ đó:
> $$\sup_{x \in S} \langle v, x \rangle < \langle v, y \rangle$$
> Ta có điều phải chứng minh.

> [!thm] Định lý Tách Rộng Hai Tập Lồi Rời Nhau
> Cho $C, D \subset \mathbb{R}^n$ là hai tập lồi khác rỗng thỏa mãn $C \cap D = \emptyset$. Khi đó tồn tại vectơ $c \in \mathbb{R}^n \setminus \{0\}$ sao cho:
> $$\inf_{x \in C} \langle c, x \rangle \ge \sup_{y \in D} \langle c, y \rangle$$

> [!prf]
> Xét hiệu Minkowski của hai tập:
> $$S := C - D = \{ x - y \mid x \in C, \, y \in D \}$$
> 
> Vì $C$ và $D$ là các tập lồi, nên hiệu $S$ cũng là một tập lồi trong $\mathbb{R}^n$.
> Do $C \cap D = \emptyset$, không tồn tại cặp $(x, y) \in C \times D$ sao cho $x = y$, suy ra $0 \notin S$.
> 
> Xét phần trong tương đối $\operatorname{ri} S$:
> Vì $S$ là tập lồi khác rỗng trong $\mathbb{R}^n$, theo Tính chất Tôpô của Tập Lồi cho Phần trong Tương đối, ta có $\operatorname{ri} S \neq \emptyset$.
> 
> **Trường hợp 1: $0 \notin \overline{S}$.**
> Khi đó $\overline{S}$ là tập lồi đóng và $0 \notin \overline{S}$. Áp dụng trực tiếp Định lý Tách Nghiêm ngặt giữa Điểm và Tập Lồi Đóng cho điểm $0$ và tập $\overline{S}$, tồn tại vectơ $c \in \mathbb{R}^n \setminus \{0\}$ sao cho:
> $$\sup_{s \in \overline{S}} \langle -c, s \rangle < \langle -c, 0 \rangle = 0$$
> Suy ra:
> $$\langle c, s \rangle > 0, \quad \forall s \in S \subset \overline{S}$$
> Lấy $s = x - y$ với $x \in C, y \in D$:
> $$\langle c, x - y \rangle > 0 \implies \langle c, x \rangle > \langle c, y \rangle, \quad \forall x \in C, \, \forall y \in D$$
> Lấy infimum theo $x \in C$ và supremum theo $y \in D$, ta được $\inf_{x \in C} \langle c, x \rangle \ge \sup_{y \in D} \langle c, y \rangle$.
> 
> **Trường hợp 2: $0 \in \overline{S} \setminus \operatorname{ri} S$.**
> Chọn một dãy điểm $\{z_k\} \subset \mathbb{R}^n \setminus \overline{S}$ sao cho $\lim_{k \to \infty} z_k = 0$.
> Với mỗi $k$, vì $z_k \notin \overline{S}$ và $\overline{S}$ lồi đóng, áp dụng Định lý Tách Nghiêm ngặt giữa Điểm và Tập Lồi Đóng, tồn tại vectơ $c_k \neq 0$ sao cho:
> $$\langle c_k, s \rangle > \langle c_k, z_k \rangle, \quad \forall s \in S$$
> Chuẩn hóa các vectơ: đặt $u_k = \frac{c_k}{\|c_k\|}$, ta có $\|u_k\| = 1$ và:
> $$\langle u_k, s \rangle > \langle u_k, z_k \rangle, \quad \forall s \in S$$
> Dãy $\{u_k\}$ nằm trên mặt cầu đơn vị compact $S^{n-1} = \{u \in \mathbb{R}^n \mid \|u\| = 1\}$. Theo định lý Bolzano–Weierstrass, tồn tại dãy con $\{u_{k_j}\}$ hội tụ về một vectơ $c$ với $\|c\| = 1$, do đó $c \neq 0$.
> Cho $j \to \infty$:
> $$\lim_{j \to \infty} \langle u_{k_j}, s \rangle = \langle c, s \rangle$$
> $$\lim_{j \to \infty} \langle u_{k_j}, z_{k_j} \rangle = \langle c, 0 \rangle = 0$$
> Suy ra:
> $$\langle c, s \rangle \ge 0, \quad \forall s \in S$$
> Vì mỗi $s \in S$ có dạng $s = x - y$ với $x \in C$ và $y \in D$, bất đẳng thức trên tương đương với:
> $$\langle c, x - y \rangle \ge 0 \iff \langle c, x \rangle \ge \langle c, y \rangle, \quad \forall x \in C, \, \forall y \in D$$
> Do bất đẳng thức đúng với mọi $x \in C$ và $y \in D$, lấy infimum theo $x \in C$ ở vế trái và supremum theo $y \in D$ ở vế phải, ta thu được:
> $$\inf_{x \in C} \langle c, x \rangle \ge \sup_{y \in D} \langle c, y \rangle$$
> Vậy luôn tồn tại vectơ $c \neq 0$ thỏa mãn điều kiện tách.









$\xi$