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
> 

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

> [!lem] Bổ đề 4.7
> Let $(X, \mathfrak{A})$ be a measurable space.
> (a) If $f$ is an extended real-valued $\mathcal{A}$-measurable function on a set ${} D \in \mathfrak{A} {}$, then for every $D_0 \subset D$ such that ${} D_0 \in \mathfrak{A} {}$, the restriction of $f$ to $D_0$ is a ${} \mathfrak{A} {}$-measurable function on $D_0$.
> (b) Let $(D_n : n \in \mathbb{N})$ be a sequence in ${} \mathfrak{A} {}$ and let $D = \bigcup_{n \in \mathbb{N}} D_n$. Let $f$ be an extended real-valued function on $D$. If the restriction of $f$ to $D_n$ is ${} \mathfrak{A} {}$-measurable on $D_n$ for every $n \in \mathbb{N}$, then $f$ is ${} \mathfrak{A} {}$-measurable on $D$.

> [!prf] 
> 1. 
> Ta cần chứng minh ảnh ngược của $(-\infty, \alpha]$ qua hàm $f$ khi thu hẹp trên $D_0$ vẫn thuộc $\mathfrak{A}$.
> Ta có thể viết đẳng thức tập hợp sau: 
> $$\{x \in D_0 : f(x) \le \alpha\} = \{x \in D : f(x) \le \alpha\} \cap D_0$$
> Theo giả thiết, $f$ đo được trên $D$ nên tập $\{x \in D : f(x) \le \alpha\} \in \mathfrak{A}$.
> Ta cũng có sẵn $D_0 \in \mathfrak{A}$, và vì $\mathfrak{A}$ là một $\sigma$-đại số, giao của hai tập thuộc $\mathfrak{A}$ cũng phải thuộc $\mathfrak{A}$ nên thu hẹp của $f$ trên $D_0$ là hàm đo được.
> 
> 2. 
> Ta cần chứng minh ảnh ngược $\{x \in D : f(x) \le \alpha\}$ trên toàn miền thuộc $\mathfrak{A}$.
> Ta có thể chia nhỏ tập này thành hợp của các phần tử tương ứng trên từng miền $D_n$:
> $$\{x \in D : f(x) \le \alpha\} = \bigcup_{n \in \mathbb{N}} \{x \in D_n : f(x) \le \alpha\}$$
> Theo giả thiết, $f$ đo được trên từng $D_n$, nên mỗi tập $\{x \in D_n : f(x) \le \alpha\}$ đều thuộc $\mathfrak{A}$ với mọi $n \in \mathbb{N}$.
> Vì $\mathfrak{A}$ là một $\sigma$-đại số đóng kín với phép hợp vô hạn đếm được, ta có $f$ đo được trên toàn miền $D$. 

# Phép toán với hàm đo được

> [!prp] Các phép toán trên hàm đo được
> Giả thiết: Cho không gian đo được $(X, \mathfrak{A})$ và tập $D \in \mathfrak{A}$. Cho $f, g: D \to \overline{\mathbb{R}}$ là các hàm $\mathfrak{A}$-đo được.
> 
> (a) Với $c \in \mathbb{R}$, tập xác định $\mathfrak{D}(cf) \in \mathfrak{A}$ và hàm $cf: \mathfrak{D}(cf) \subset D \to \overline{\mathbb{R}}$ là hàm $\mathfrak{A}$-đo được trên miền $\mathfrak{D}(cf)$.
> (b) Tập xác định $\mathfrak{D}(f+g) \in \mathfrak{A}$ và hàm tổng $f+g: \mathfrak{D}(f+g) \to \overline{\mathbb{R}}$ là hàm $\mathfrak{A}$-đo được.
> (c) Tập xác định $\mathfrak{D}(fg) \in \mathfrak{A}$ và hàm tích $fg: \mathfrak{D}(fg) \to \overline{\mathbb{R}}$ là hàm $\mathfrak{A}$-đo được.

> [!prf] 
> 1. Ý a)
>    
> Phần 1: Kiểm tra tính đo được của $\mathfrak{D}(cf)$
> - Nếu $c \neq 0 \implies \mathfrak{D}(cf) = D \in \mathfrak{A}$ (theo giả thiết).
> - Nếu $c = 0 \implies \mathfrak{D}(cf) = \{x \in D : f(x) \in \mathbb{R}\}$. Dựa vào Hệ quả 4.5(b) đã chứng minh trước đó, tập này cũng thuộc $\mathfrak{A}$.
> 
> Phần 2: Kiểm tra tính đo được của hàm $cf$
> Để chứng minh $cf$ đo được, ta xét tập $\{x \in \mathfrak{D}(cf) : cf(x) < \alpha\}$. Ta chia trường hợp, chuyển điều kiện của $cf$ về hàm $f$:
> - Nếu $c > 0$, ta có $\{cf < \alpha\} = \{f < \frac{\alpha}{c}\}$. Vì $f$ đo được, tập này thuộc $\mathfrak{A}$.
> - Nếu $c < 0$, bất đẳng thức đổi chiều: $\{cf < \alpha\} = \{f > \frac{\alpha}{c}\}$. Áp dụng Bổ đề 4.4, tập này cũng thuộc $\mathfrak{A}$.
> - Nếu $c = 0$, $cf(x) = 0$ là hàm hằng trên miền đo được $\mathfrak{D}(cf)$ thì ta luôn có đo được.
>   
> 2. Ý b)
>    
> Phần 1: Tìm miền xác định $\mathfrak{D}(f+g)$
> 
> Phép cộng $f+g$ xác định tại mọi điểm trừ các điểm rơi vào dạng vô định $\infty - \infty$ hoặc $-\infty + \infty$. 
> Do đó, miền xác định $\mathfrak{D}(f+g)$ bằng tập $D$ trừ đi hai tập sau:
> $\{x \in D : f = \infty\} \cap \{x \in D : g = -\infty\}$
> $\{x \in D : f = -\infty\} \cap \{x \in D : g = \infty\}$
> Vì $f, g$ đo được, theo Hệ quả 4.5, các tập bằng vô cực này đều thuộc $\mathfrak{A}$, có phép giao và phần bù giữ nguyên tính đo được nên $\mathfrak{D}(f+g) \in \mathfrak{A}$.
> 
> Phần 2: Chứng minh $f+g$ đo được trên $\mathfrak{D}(f+g)$
> 
> Ta có thể chia $\mathfrak{D}(f+g)$ thành các phần rời nhau, và chỉ cần chứng minh hàm đo được trên từng phần, khi hợp lại ta sẽ có tính đo được của toàn miền (Bổ đề 4.7):
> 
> Trường hợp 1: Trên các tập mà $f$ hoặc $g$ nhận giá trị vô cực.
> Lúc này hàm tổng $f+g$ nhận giá trị hằng số (bằng $\infty$ hoặc $-\infty$) nên là hàm đo được.
> 
> Trường hợp 2: Trên tập $D_0$ nơi cả $f$ và $g$ đều nhận giá trị thực hữu hạn.
> Xét tập $\{x \in D_0 : f(x) + g(x) < \alpha\} = \{x \in D_0 : f(x) < \alpha - g(x)\}$.
> Lợi dụng tính trù mật của tập số hữu tỉ $\mathbb{Q}$. Giữa hai số thực bất kỳ $f(x)$ và $\alpha - g(x)$ luôn tồn tại một số hữu tỉ $r$. Ta chèn $r$ vào giữa, ta biểu diễn được: 
> $$
> f(x) < r < \alpha - g(x)
> $$
> $$\{x \in D_0 : f + g < \alpha\} = \bigcup_{r \in \mathbb{Q}} \Big( \{x \in D_0 : f(x) < r\} \cap \{x \in D_0 : g(x) < \alpha - r\} \Big)$$
> Vì $f$ và $g$ là các hàm đo được, các tập $\{f < r\}$ và $\{g < \alpha - r\}$ đều thuộc $\mathfrak{A}$ nên giao của chúng thuộc $\mathfrak{A}$. 
> Vì $\mathbb{Q}$ là tập đếm được, hợp vô hạn đếm được của các giao này cũng thuộc $\mathfrak{A}$. 
> Điều này chứng tỏ thu hẹp của $f+g$ trên $D_0$ là hàm đo được.
> 
> Ta kết luận $f+g$ là hàm đo được trên toàn bộ miền xác định $\mathfrak{D}(f+g)$. 
>
> 3. Ý c)
>    
> Phần 1: Tìm miền xác định $\mathfrak{D}(fg)$
> Phép nhân $fg$ xác định tại mọi điểm trừ các điểm rơi vào dạng vô định $0 \cdot \infty$ hoặc $0 \cdot (-\infty)$.
> Ta có thể viết tập các điểm vô định này là hợp của các giao tập hợp:
> $(\{f=0\} \cap \{g=\infty\}) \cup (\{f=0\} \cap \{g=-\infty\}) \cup ...$ (và đổi vai trò $f, g$).
> Vì $f, g$ đo được, tất cả các tập thành phần này đều thuộc $\mathfrak{A}$. Loại bỏ chúng khỏi tập $D$, ta có miền xác định $\mathfrak{D}(fg) \in \mathfrak{A}$.
> 
> Phần 2: Chứng minh $fg$ đo được trên $\mathfrak{D}(fg)$
> Ta chia $\mathfrak{D}(fg)$ thành các tập rời nhau và chứng minh hàm đo được trên từng phần: 
> 
> Trường hợp 1: Trên các tập mà hàm nhận giá trị vô cực hoặc bằng 0. 
> Khi $f$ hoặc $g$ nhận giá trị vô cực (và hàm kia khác 0), hoặc khi $f=0$ hay $g=0$, hàm tích $fg$ sẽ nhận giá trị hằng số (là $\infty, -\infty$ hoặc $0$) nên là hàm đo được.
> 
> Trường hợp 2: Xét trên tập $E$ mà cả $f$ và $g$ đều là số hữu hạn, và giả sử $g > 0$.
> Xét tập $\{x \in E : f(x)g(x) < \alpha\}$. Vì $g > 0$, chia hai vế cho $g$ và áp dụng chèn số hữu tỉ $r \in \mathbb{Q}$, ta biểu diễn được:
> $$\{x \in E : fg < \alpha\} = \bigcup_{r \in \mathbb{Q}} \Big( \{x \in E : f < r\} \cap \{x \in E : rg < \alpha\} \Big)$$
> Theo giả thiết $f$ đo được nên tập $\{f < r\} \in \mathfrak{A}$. 
> Theo chứng minh ở ý (a) (nhân với hằng số $r$), hàm $rg$ đo được nên tập $\{rg < \alpha\} \in \mathfrak{A}$, giao của chúng thuộc $\mathfrak{A}$, và hợp vô hạn đếm được theo $r \in \mathbb{Q}$ cũng thuộc $\mathfrak{A}$.
> 
> Trường hợp 3: Xét trên tập $E'$ mà cả $f$ và $g$ hữu hạn, nhưng $g < 0$.
> Hoàn toàn tương tự, khi chia cho $g$, bất đẳng thức đổi chiều thành $f > \frac{\alpha}{g}$. Ta lại chèn $r$ vào giữa: $f > r > \frac{\alpha}{g}$, dẫn đến $f > r$ và $rg < \alpha$. Các tập này đều thuộc $\mathfrak{A}$ theo Bổ đề 4.4, nên hợp đếm được của chúng cũng thuộc $\mathfrak{A}$.
> 
> Ta kết luận $fg$ là hàm đo được trên toàn bộ miền xác định $\mathfrak{D}(fg)$. 





$\pi$
