# Tính đo được

> [!def] ($\mathfrak{A}$-measureable)
> Let $(X,\mathfrak{A})$ be an arbitrary measureable space and let $D \in \mathfrak{A}$. An extended real-valued function $f$ defined on $D$ is said to be $\mathfrak{A}$-measureable on $D$ if it satisfies the condition that $\{ x \in D: f(x) \le \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([-\infty, \alpha]) \in \mathfrak{A}$ for every $\alpha \in \mathbb{R}$.

> [!def] ($\mathfrak{A /B}$-measureable)
> Let $(X, \mathfrak{A})$ and $(Y, \mathfrak{B})$ be measureable spaces. A mapping $f$ of a set $D \subset X$ into $Y$ is $\mathfrak{A}/\mathfrak{B}$-measureable if $f^{-1}(\mathfrak{B})\subset \mathfrak{A}$. This implies that $D = f^{-1}(Y) \in \mathfrak{A}$. 

> [!rem] (Core properties of $\sigma$-algebra)
> 1. Closure under complementation: If $A \in \mathfrak{A}$, then its complement $D \setminus A \in \mathfrak{A}$.
> 2. Closure under countable intersection: If a sequence $A_{n} \in \mathfrak{A}$, then their countable intersection $\bigcap_{n \in \mathbb{N}} A_{n} \in \mathfrak{A}$.

> [!lem] (Bổ đề 4.4)
>Let $(X, \mathfrak{A})$ be a measurable space and $f$ be an extended real-valued function defined on $D \in \mathfrak{A}$. Then the following conditions are all equivalent: 
>
> (i) $\{x \in D : f(x) \le \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([-\infty, \alpha]) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$,
> (ii) $\{x \in D : f(x) > \alpha\} \in \mathfrak{A}$, that is, $f^{-1}((\alpha, \infty]) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$,
> (iii) $\{x \in D : f(x) \ge \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([\alpha, \infty]) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$,
> (iv) $\{x \in D : f(x) < \alpha\} \in \mathfrak{A}$, that is, $f^{-1}([-\infty, \alpha)) \in \mathfrak{A}$, for every $\alpha \in \mathbb{R}$.

> [!prf] 
> Ta sẽ chứng minh 4 điều kiện này tương đương theo sơ đồ sau:
> (iv) $\implies$ (i) $\iff$ (ii) $\implies$ (iii) $\iff$ (iv)
> 
> Cố định một số thực $\alpha \in \mathbb{R}$ bất kỳ. Toàn bộ chứng minh chỉ xoay quanh 2 tính chất cốt lõi của $\sigma$-đại số:
> 
> Nhóm dùng phần bù (Mệnh đề 1 & 2):
> Vì tập nguồn $D \in \mathfrak{A}$, phần bù của một tập hợp trong $\mathfrak{A}$ cũng phải nằm trong $\mathfrak{A}$.
> 
> - (i) $\iff$ (ii) : Tập $\{f \le \alpha\}$ và tập $\{f > \alpha\}$ là phần bù của nhau trong $D$. Có cái này thì tự động có cái kia.
> - (iii) $\iff$ (iv) : Tập $\{f \ge \alpha\}$ và tập $\{f < \alpha\}$ là phần bù của nhau trong $D$. Tương tự như trên.
> 
> Nhóm dùng giao đếm được (Mệnh đề 3 & 4):
> 
> - (iv) $\implies$ (i) :
>     $$\{x \in D: f(x) \le \alpha\} = \bigcap_{n \in \mathbb{N}} \left\{x \in D: f(x) < \alpha + \frac{1}{n}\right\}$$
>     Theo giả thiết (iv), mỗi tập $\left\{f < \alpha + \frac{1}{n}\right\} \in \mathfrak{A}$. Do giao đếm được của các tập trong $\mathfrak{A}$ cũng thuộc $\mathfrak{A}$, ta suy ra $\{f \le \alpha\} \in \mathfrak{A}$ (tức là (i) đúng).
> 
> - (ii) $\implies$ (iii) :
>     $$\{x \in D: f(x) \ge \alpha\} = \bigcap_{n \in \mathbb{N}} \left\{x \in D: f(x) > \alpha - \frac{1}{n}\right\}$$
>     Mỗi tập ở vế phải đều thuộc $\mathfrak{A}$ theo giả thiết (ii), nên giao đếm được của chúng là tập $\{f \ge \alpha\}$ cũng thuộc $\mathfrak{A}$ (tức là (iii) đúng).

> [!cor] Corollary 4.5
> Let $(X, \mathfrak{A})$ be a measurable space and let $f$ be an extended real-valued $\mathfrak{A}$-measurable function defined on $D \in \mathfrak{A}$. Then:
> (a) $\{x \in D : f(x) = \alpha\} \in \mathfrak{A}$ for every $\alpha \in \overline{\mathbb{R}}$.
> (b) $\{x \in D : f(x) \in \mathbb{R}\} \in \mathfrak{A}$.

> [!prf] 
> 1. Ta xét 3 trường hợp của $\alpha \in \overline{\mathbb{R}}$.
> 
> - Trường hợp 1: $\alpha$ là số thực hữu hạn ($\alpha \in \mathbb{R}$)
>     $$\{f = \alpha\} = \{f \le \alpha\} \setminus \{f < \alpha\}$$
>     Vì $f$ đo được, theo Bổ đề 4.4 (i) và (iv), cả hai tập ở vế phải đều thuộc $\mathfrak{A}$. Hiệu của chúng cũng phải thuộc $\mathfrak{A}$.
> 
> - Trường hợp 2: $\alpha = \infty$
>     Tập các điểm $f(x) = \infty$ bằng toàn bộ tập $D$ trừ đi các điểm mà $f(x)$ hữu hạn ($f(x) < \infty$). 
>     Mà $f(x) < \infty \iff f(x) \le n$ với một số nguyên dương $n$ nào đó.
>     $$\{f = \infty\} = D \setminus \{f < \infty\} = D \setminus \bigcup_{n \in \mathbb{N}} \{f \le n\}$$
>     Do $\{f \le n\} \in \mathfrak{A}$, hợp đếm được của chúng thuộc $\mathfrak{A}$. Lấy phần bù trong $D$ cũng thuộc $\mathfrak{A}$.
> 
> - Trường hợp 3: $\alpha = -\infty$
>     Tương tự, tập $f(x) = -\infty$ bằng tập $D$ trừ đi các điểm $f(x) > -\infty$.
>     $$\{f = -\infty\} = D \setminus \{f > -\infty\} = D \setminus \bigcup_{n \in \mathbb{N}} \{f \ge -n\}$$
>     Bằng lập luận tương tự, tập này thuộc $\mathfrak{A}$.
> 
> 2.
> Tập các điểm mà hàm $f$ nhận giá trị thực hữu hạn ($f \in \mathbb{R}$) chính là tập $D$ bỏ đi hai điểm vô cực.
> $$\{f \in \mathbb{R}\} = D \setminus \Big(\{f = \infty\} \cup \{f = -\infty\}\Big)$$
> Theo kết quả ở phần (a), hai tập vô cực đều thuộc $\mathfrak{A}$. Do đó hợp của chúng thuộc $\mathfrak{A}$, nên phần bù của chúng trong $D$ cũng thuộc $\mathfrak{A}$. 

> [!obs] 
> Kết quả (a) của Hệ quả 4.5 chỉ là điều kiện cần, không phải điều kiện đủ để một hàm số là đo được.
> - Đúng: Nếu $f$ đo được $\implies \{f = \alpha\} \in \mathfrak{A}$.
> - Sai: Nếu mọi tập $\{f = \alpha\} \in \mathfrak{A} \implies f$ đo được. 

> [!thm] (Định lý 4.6a)
> Let $(X,\mathfrak{A})$ be a measure space and let $f$ be a real-valued function on a set $D \in \mathfrak{A}$. Consider the measureable space ${} (\mathbb{R}, \mathcal{B}(\mathbb{R})) {}$ :
> $f: D \to \mathbb{R}$ is $\mathfrak{A}$-measureable on $D$ if and only if $f$ is a ${} \mathfrak{A} /\mathcal{B}(\mathbb{R}) {}$-measureable mapping of $D$ into $\mathbb{R}$, that is, $f^{-1}(\mathcal{B}(\mathbb{R}))\subset \mathfrak{A}$.

> [!prf] 
> Bước 1:
> 
> Gọi $\mathfrak{I}$ là họ tất cả các khoảng mở trong $\mathbb{R}$. Bài trước, ta đã chứng minh được $\sigma$-đại số Borel được sinh bởi họ các khoảng mở, tức là: $\sigma(\mathfrak{I}) = \mathcal{B}{(\mathbb{R})}$.
> 
> Bước 2: ($\implies$)
> Giả thiết: $f^{-1}((-\infty, \alpha]) \in \mathfrak{A}$ (hay $f$ đo được theo định nghĩa).
> Cần chứng minh: $f^{-1}(I) \in \mathfrak{A}$ với $I \in \mathfrak{I}$ là một khoảng mở bất kỳ.
> 
> Ta chia $I$ thành các trường hợp nhỏ:
> - Nếu $I$ là khoảng mở hữu hạn $(\alpha, \beta)$:
>   Ta biểu diễn $f^{-1}((\alpha, \beta)) = f^{-1}((-\infty, \beta)) \setminus f^{-1}((-\infty, \alpha])$.
>   Theo Bổ đề 4.4, hai tập ở vế phải đều thuộc $\mathfrak{A}$, nên hiệu của chúng thuộc $\mathfrak{A}$.
> 
> - Nếu $I$ là khoảng mở vô hạn dạng $(-\infty, \beta)$:
>   Ảnh ngược $f^{-1}((-\infty, \beta))$ thuộc $\mathfrak{A}$ theo kết quả trực tiếp từ Bổ đề 4.4 (iv).
> 
> - Nếu $I$ là khoảng mở vô hạn dạng $(\alpha, \infty)$:
>   Ảnh ngược $f^{-1}((\alpha, \infty))$ thuộc $\mathfrak{A}$ theo kết quả trực tiếp từ Bổ đề 4.4 (ii).
> 
> Từ các trường hợp trên, ta suy ra ảnh ngược của mọi khoảng mở đều thuộc $\mathfrak{A}$, tức là $f^{-1}(\mathfrak{I}) \subset \mathfrak{A}$.
> Áp dụng định lý giao hoán tập sinh:
> $$f^{-1}(\mathcal{B}{(\mathbb{R}}) = f^{-1}(\sigma(\mathfrak{I})) = \sigma(f^{-1}(\mathfrak{I}))$$
> Vì $f^{-1}(\mathfrak{I}) \subset \mathfrak{A}$ nên $\sigma(f^{-1}(\mathfrak{I})) \subset \sigma(\mathfrak{A}) = \mathfrak{A}$.
> 
> Bước 3: ($\impliedby$)
> Giả thiết: $f^{-1}(\mathcal{B}{(\mathbb{R})}) \subset \mathfrak{A}$.
> Cần chứng minh: $f$ là hàm $\mathfrak{A}$-đo được.
> 
> Vì $(-\infty, \alpha] \in \mathcal{B}{(\mathbb{R})}$, áp dụng giả thiết ta có ngay $f^{-1}((-\infty, \alpha]) \in \mathfrak{A}$. 
> Theo định nghĩa, điều này chứng tỏ $f$ là hàm $\mathfrak{A}$-đo được. 









$\pi$
