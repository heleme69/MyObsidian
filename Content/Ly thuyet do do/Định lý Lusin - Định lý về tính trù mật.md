> [!def] Định nghĩa: Lớp hàm $\mathcal{L}^1$ và không gian thương $L^1$
> Gọi $\mathcal{L}^1(\mathbb{R}^N)$ là tập hợp tất cả các hàm thực $f: \mathbb{R}^N \to \mathbb{R}$ đo được và khả tích trên $\mathbb{R}^N$ theo độ đo Lebesgue.
> Trên không gian này, ta định nghĩa một quan hệ tương đương $f \sim g$ nếu và chỉ nếu $f(x) = g(x)$ hầu khắp nơi (almost everywhere - a.e).
> Không gian $L^1(\mathbb{R}^N)$ được định nghĩa là không gian thương của $\mathcal{L}^1(\mathbb{R}^N)$ qua quan hệ tương đương này:
> $$L^1(\mathbb{R}^N) = \mathcal{L}^1(\mathbb{R}^N) / \sim$$
> Trên không gian $L^1(\mathbb{R}^N)$, ta trang bị một chuẩn được xác định bởi tích phân Lebesgue:
> $$\|f\|_1 = \int_{\mathbb{R}^N} |f(x)|dx$$
> Việc chuyển qua lớp tương đương đảm bảo tính chất $\|f\|_1 = 0 \iff f = 0$ trong không gian $L^1$, biến đổi nó thành một không gian vector định chuẩn thực sự.

> [!thm] Định lý: Tính đầy đủ của không gian $L^1$
> Không gian vector định chuẩn $(L^1(\mathbb{R}^N), \|\cdot\|_1)$ là một không gian Banach.

> [!prf] Chứng minh
> Để chứng minh $L^1$ là không gian Banach, ta cần chứng minh nó là một không gian đầy đủ, tức là mọi dãy Cauchy trong $L^1$ đều hội tụ về một phần tử thuộc chính không gian đó.
>
> Lấy một dãy Cauchy $\{f_n\}$ bất kỳ trong $L^1$. Theo định nghĩa dãy Cauchy, với mọi $\varepsilon > 0$, tồn tại số nguyên dương $N_0$ sao cho $\|f_m - f_n\|_1 < \varepsilon$ với mọi $m, n \ge N_0$.
> Một tính chất cơ bản của không gian định chuẩn là: một dãy Cauchy sẽ hội tụ nếu nó chứa một dãy con hội tụ. Do đó, bài toán quy về việc tìm và chứng minh một dãy con của $\{f_n\}$ hội tụ trong $L^1$.
>
> Bằng cách chọn $\varepsilon = 1/2^k$, ta có thể trích ra một dãy con $\{f_{n_k}\}_{k \in \mathbb{N}}$ với các chỉ số $n_1 < n_2 < \dots < n_k < \dots$ thỏa mãn điều kiện sai số giữa hai số hạng liên tiếp giảm rất nhanh:
> $$\|f_{n_{k+1}} - f_{n_k}\|_1 < \frac{1}{2^k}$$
>
> Xây dựng một dãy hàm phụ $g_K$ là tổng của các sai số tuyệt đối:
> $$g_K(x) = \sum_{i=1}^K |f_{n_{i+1}}(x) - f_{n_i}(x)|$$
> Rõ ràng $g_K(x) \ge 0$ và dãy $\{g_K\}$ là một dãy hàm tăng đơn điệu theo $K$.
> Đánh giá chuẩn của $g_K$, sử dụng bất đẳng thức tam giác cho chuẩn, ta có:
> $$\|g_K\|_1 \le \sum_{i=1}^K \|f_{n_{i+1}} - f_{n_i}\|_1 < \sum_{i=1}^K \frac{1}{2^i} < 1$$
>
> Gọi giới hạn điểm của dãy này là $g(x) = \sum_{i=1}^\infty |f_{n_{i+1}}(x) - f_{n_i}(x)|$. Vì $g_K \uparrow g$, áp dụng Định lý hội tụ đơn điệu (hoặc Bổ đề Fatou), giới hạn của tích phân bằng tích phân của giới hạn:
> $$\int_{\mathbb{R}^N} g(x)dx \le \liminf_{K \to \infty} \int_{\mathbb{R}^N} g_K(x)dx \le 1$$
>
> Điều này chứng tỏ $g \in L^1$, và do tích phân của $g$ hữu hạn, hàm $g(x)$ phải nhận giá trị hữu hạn hầu khắp nơi trên $\mathbb{R}^N$.
> Vì tổng các trị tuyệt đối hội tụ hầu khắp nơi, chuỗi $\sum_{i=1}^\infty (f_{n_{i+1}}(x) - f_{n_i}(x))$ hội tụ tuyệt đối hầu khắp nơi. Kéo theo đó, chuỗi ban đầu hội tụ thông thường hầu khắp nơi.
> Chú ý rằng tổng từng phần của chuỗi này chính là một dạng chuỗi lồng nhau (telescoping series):
> $$f_{n_1}(x) + \sum_{i=1}^K (f_{n_{i+1}}(x) - f_{n_i}(x)) = f_{n_{K+1}}(x)$$
> Từ sự hội tụ của chuỗi, dãy hàm $\{f_{n_K}(x)\}$ hội tụ điểm hầu khắp nơi về một hàm giới hạn $f(x)$ khi $K \to \infty$.
>
> Cuối cùng, ta chứng minh hàm giới hạn $f \in L^1$ và dãy con hội tụ về $f$ theo chuẩn $L^1$.
> Theo cấu trúc chuỗi, ta có $|f(x)| \le |f_{n_1}(x)| + g(x)$ hầu khắp nơi. Vì cả $f_{n_1}$ và $g$ đều thuộc $L^1$, hàm tổng của chúng thuộc $L^1$, suy ra $f \in L^1$.
> Đánh giá khoảng cách theo chuẩn:
> $$|f(x) - f_{n_K}(x)| \le \sum_{i=K}^\infty |f_{n_{i+1}}(x) - f_{n_i}(x)|$$
> Lấy tích phân hai vế, ta được đánh giá chặn trên cho sai số:
> $$\|f - f_{n_K}\|_1 \le \sum_{i=K}^\infty \frac{1}{2^i} = \frac{1}{2^{K-1}}$$
> Khi $K \to \infty$, đại lượng $\frac{1}{2^{K-1}}$ tiến về 0, chứng tỏ $\|f - f_{n_K}\|_1 \to 0$.
> Vậy dãy con $\{f_{n_K}\}$ hội tụ về $f$ trong không gian $L^1$. Như đã lập luận từ đầu, do $\{f_n\}$ là dãy Cauchy, sự hội tụ của một dãy con đảm bảo sự hội tụ của toàn bộ dãy ban đầu về cùng giới hạn $f$.
> Kết luận, $(L^1, \|\cdot\|_1)$ là một không gian Banach.

> [!def] Định nghĩa: Giá của hàm số (Support)
> Cho hàm số $f: \mathbb{R}^N \to \mathbb{R}$. Giá của hàm số $f$, ký hiệu là $\text{supp} f$, được định nghĩa là bao đóng của tập hợp tất cả các điểm trong không gian mà tại đó hàm số nhận giá trị khác không.
> Biểu diễn dưới dạng công thức toán học:
> $$\text{supp} f = \overline{\{x \in \mathbb{R}^N : f(x) \neq 0\}}$$

> [!def] Định nghĩa: Không gian $C_c(\mathbb{R}^N)$
> Không gian $C_c(\mathbb{R}^N)$ là tập hợp bao gồm tất cả các hàm số thực liên tục được xác định trên $\mathbb{R}^N$ sao cho giá của chúng là một tập hợp compact.
> Không gian này được viết dưới dạng tập hợp như sau:
> $$C_c(\mathbb{R}^N) = \{f: \mathbb{R}^N \to \mathbb{R} \mid f \text{ liên tục, } \text{supp} f \text{ compact}\}$$

> [!def] Định nghĩa: Khoảng cách từ một điểm đến tập hợp
> Cho một tập hợp $A \subset \mathbb{R}^N$ và một điểm $x \in \mathbb{R}^N$. Khoảng cách từ điểm $x$ đến tập $A$, ký hiệu là $d(x, A)$, được xác định bằng cận dưới đúng (infimum) của khoảng cách giữa $x$ và mọi điểm $y$ nằm trong $A$.
> Công thức tính khoảng cách này là:
> $$d(x, A) = \inf_{y \in A} \|x - y\|_2$$
> Khi tập $A$ cố định, ánh xạ $x \mapsto d(x, A)$ luôn luôn là một hàm liên tục trên toàn bộ không gian $\mathbb{R}^N$.

> [!thm] Định lý Lusin
> Cho không gian độ đo Lebesgue $(\mathbb{R}^N, \mathfrak{A}, \mu)$ và hàm $f: \mathbb{R}^N \to \mathbb{R}$ đo được.
> 
> Giả sử tồn tại một tập $A \in \mathfrak{A}$ sao cho $\mu(A) < \infty$ và $f(x) = 0$ với mọi $x \in A^c$.
> 
> Khi đó, với mọi $\varepsilon > 0$, tồn tại hàm liên tục có giá compact $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn:
> 
> (1) $\mu(\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\}) < \varepsilon$.
> 
> (2) $\sup_{x \in \mathbb{R}^N} |f_\varepsilon(x)| \le \sup_{x \in \mathbb{R}^N} |f(x)|$.

> [!prf] Chứng minh
> 
> **Phần 1: Tìm $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1)**
> 
> Ta xây dựng $f_\varepsilon$ thỏa mãn (1) trong bốn bước, mỗi bước nới lỏng dần điều kiện đặt ra cho $A$ và $f$.
> 
> Bước 1.1. _Giả thiết:_ $A$ compact, $f \ge 0$, $\sup|f| < 1$.
> 
> Theo định lý xấp xỉ hàm đo được, tồn tại dãy hàm đơn giản không âm $f_n \uparrow f$ với biểu diễn: $$f(x) = \sum_{k=1}^\infty \frac{1}{2^k} \chi_{A_k}(x), \quad A_k \in \mathfrak{A},; A_k \subset A.$$ Với mỗi $k$, theo tính chính quy của độ đo Lebesgue, ta tìm được compact $K_k$ và mở $V_k$ với $K_k \subset A_k \subset V_k$ và $\mu(V_k \setminus K_k) < \varepsilon / 2^{k+1}$. Định nghĩa: $$g_k(x) = \frac{d(x, V_k^c)}{d(x, K_k) + d(x, V_k^c)}.$$ Hàm $g_k$ liên tục, $g_k \in [0,1]$, bằng $1$ trên $K_k$ và bằng $0$ trên $V_k^c$; do đó $g_k$ và $\chi_{A_k}$ chỉ sai khác nhau trên $V_k \setminus K_k$. Đặt: $$f_\varepsilon(x) = \sum_{k=1}^\infty \frac{1}{2^k} g_k(x).$$ Chuỗi hội tụ đều theo tiêu chuẩn Weierstrass (chặn bởi $\sum 2^{-k} = 1$), nên $f_\varepsilon$ liên tục. Vì $A$ compact và $g_k = 0$ ngoài $V_k \supset A_k \subset A$, giá của $f_\varepsilon$ compact, tức $f_\varepsilon \in C_c(\mathbb{R}^N)$. Cuối cùng: $${f_\varepsilon \neq f} \subset \bigcup_{k=1}^\infty (V_k \setminus K_k) \implies \mu({f_\varepsilon \neq f}) \le \sum_{k=1}^\infty \frac{\varepsilon}{2^{k+1}} = \frac{\varepsilon}{2} < \varepsilon.$$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> Bước 1.2. _Giả thiết:_ $A$ compact, $f$ bị chặn tùy ý.
> 
> Đặt $M = \sup|f| < \infty$ (giả sử $M > 0$). Chuẩn hóa $h = f/M$, phân tích $h = h^+ - h^-$ với $h^\pm = \max(\pm h, 0)$. Khi đó $h^\pm \ge 0$, $\sup|h^\pm| \le 1$, và cả hai đều triệt tiêu ngoài $A$ compact. Áp dụng Bước 1.1 cho $h^+$ và $h^-$, mỗi hàm với ngưỡng $\varepsilon/2$: tồn tại $h_\varepsilon^+, h_\varepsilon^- \in C_c(\mathbb{R}^N)$ thỏa mãn $\mu({h_\varepsilon^\pm \neq h^\pm}) < \varepsilon/2$. Đặt $f_\varepsilon = M(h_\varepsilon^+ - h_\varepsilon^-)$. Khi đó $f_\varepsilon \in C_c(\mathbb{R}^N)$ và: $${f_\varepsilon \neq f} \subset {h_\varepsilon^+ \neq h^+} \cup {h_\varepsilon^- \neq h^-} \implies \mu({f_\varepsilon \neq f}) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> Bước 1.3. _Giả thiết:_ $A \in \mathfrak{A}$ với $\mu(A) < \infty$, $f$ bị chặn.
> 
> Theo tính chính quy của độ đo Lebesgue, chọn compact $K \subset A$ với $\mu(A \setminus K) < \varepsilon/2$. Đặt $\bar{f} = f \cdot \chi_K$; hàm này bị chặn, triệt tiêu ngoài $K$ compact. Áp dụng Bước 1.2 cho $\bar{f}$ với ngưỡng $\varepsilon/2$: tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ với $\mu({f_\varepsilon \neq \bar{f}}) < \varepsilon/2$. Từ bao hàm thức: $${f_\varepsilon \neq f} \subset {f_\varepsilon \neq \bar{f}} \cup (A \setminus K) \implies \mu({f_\varepsilon \neq f}) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> Bước 1.4. _Giả thiết:_ $A \in \mathfrak{A}$ với $\mu(A) < \infty$, $f$ đo được tùy ý.
> 
> Xét $B_n = {x \in A : |f(x)| \ge n}$. Vì $f$ hữu hạn $\mu$-hầu khắp nơi, $B_n \downarrow \emptyset \pmod{\mu}$, và $\mu(B_1) \le \mu(A) < \infty$ nên theo tính liên tục từ trên: $\mu(B_n) \to 0$. Chọn $n_0$ sao cho $\mu(B_{n_0}) < \varepsilon/2$. Đặt $\bar{f} = f \cdot \chi_{A \setminus B_{n_0}}$; khi đó $|\bar{f}| < n_0$ (tức $\bar{f}$ bị chặn). Áp dụng Bước 1.3 cho $\bar{f}$ với ngưỡng $\varepsilon/2$: tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ với $\mu({f_\varepsilon \neq \bar{f}}) < \varepsilon/2$. Từ bao hàm thức: $${f_\varepsilon \neq f} \subset {f_\varepsilon \neq \bar{f}} \cup B_{n_0} \implies \mu({f_\varepsilon \neq f}) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> **Phần 2: Hiệu chỉnh $f_\varepsilon$ để thỏa mãn thêm (2)**
> 
> _Giả thiết:_ $f_\varepsilon \in C_c(\mathbb{R}^N)$ đã thỏa mãn (1) từ Phần 1. Đặt $M = \sup|f|$.
> 
> Nếu $M = \infty$ thì (2) hiển nhiên đúng. Xét $M < \infty$. Định nghĩa hàm chặt cụt: $$\Theta_M(t) = \max!\bigl(-M,,\min(t,,M)\bigr),$$ và đặt $\bar{f}_\varepsilon = \Theta_M \circ f_\varepsilon$. Vì $\Theta_M$ liên tục và $\Theta_M(0) = 0$, hàm $\bar{f}_\varepsilon$ vẫn thuộc $C_c(\mathbb{R}^N)$.
> 
> - (2): Theo định nghĩa $\Theta_M$, hiển nhiên $|\bar{f}_\varepsilon(x)| \le M = \sup|f|$ với mọi $x$. $\checkmark$
>     
> - (1): Tại mọi điểm $x$ mà $f_\varepsilon(x) = f(x)$, do $|f(x)| \le M$, ta có $\Theta_M(f_\varepsilon(x)) = f_\varepsilon(x) = f(x)$, tức $\bar{f}_\varepsilon(x) = f(x)$. Do đó: $${\bar{f}_\varepsilon \neq f} \subset {f_\varepsilon \neq f} \implies \mu({\bar{f}_\varepsilon \neq f}) \le \mu({f_\varepsilon \neq f}) < \varepsilon. \checkmark$$     
> 
> Kết luận. Hàm $\bar{f}_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn đồng thời (1) và (2). 

> [!thm] Định lý trù mật của $C_c(\mathbb{R}^N)$ trong $L^1(\mathbb{R}^N)$
> Không gian các hàm liên tục có giá compact $C_c(\mathbb{R}^N)$ là trù mật trong không gian khả tích $L^1(\mathbb{R}^N)$.
> 
> Về mặt topo, bao đóng của $C_c(\mathbb{R}^N)$ theo chuẩn khoảng cách $\|\cdot\|_1$ chính là không gian $L^1(\mathbb{R}^N)$:
> $$\overline{C_c(\mathbb{R}^N)}^{\|\cdot\|_1} = L^1(\mathbb{R}^N)$$
> 
> Phát biểu tương đương dưới dạng xấp xỉ: Với mọi $\varepsilon > 0$ và với mọi hàm $f \in L^1(\mathbb{R}^N)$, luôn luôn tồn tại một hàm $f_\varepsilon \in C_c(\mathbb{R}^N)$ sao cho:
> $$\|f_\varepsilon - f\|_1 < \varepsilon$$

> [!prf] Chứng minh
> 
> Mục tiêu của chứng minh là xây dựng hàm xấp xỉ thông qua các bước nới lỏng điều kiện, đi từ hàm bị chặn có giá compact đến hàm khả tích tổng quát.
> 
> Bước 1. Xét hàm $f \in L^1(\mathbb{R}^N)$ bị chặn và có giá mang compact.
> 
> Giả sử tồn tại một hằng số $M > 0$ sao cho $|f(x)| \le M$ trên toàn bộ không gian và tồn tại một quả cầu đóng $\overline{B}(0, R)$ sao cho $f(x) = 0$ tại mọi điểm $x$ nằm ngoài quả cầu này.
> 
> Áp dụng trực tiếp Định lý Lusin cho hàm $f$ trên tập compact $\overline{B}(0, R)$, ta khẳng định sự tồn tại của một hàm liên tục có giá compact $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn độ đo tập sai lệch $\mu(\{f_\varepsilon \neq f\}) < \frac{\varepsilon}{2M}$. Đồng thời, hàm này bảo toàn được cận biên độ $\sup |f_\varepsilon| \le \sup |f| \le M$.
> 
> Ta đánh giá khoảng cách giữa hai hàm theo chuẩn $L^1$. Do hai hàm này trùng nhau hầu khắp nơi và chỉ sai khác đúng trên tập $\{f_\varepsilon \neq f\}$, miền tích phân được thu hẹp:
> $$\|f_\varepsilon - f\|_1 = \int_{\mathbb{R}^N} |f_\varepsilon(x) - f(x)| d\mu = \int_{\{f_\varepsilon \neq f\}} |f_\varepsilon(x) - f(x)| d\mu$$
> 
> Dùng bất đẳng thức tam giác cho tích phân và sử dụng cận chặn trên $M$ cho cả hai hàm:
> $$\|f_\varepsilon - f\|_1 \le \int_{\{f_\varepsilon \neq f\}} (|f_\varepsilon(x)| + |f(x)|) d\mu \le \int_{\{f_\varepsilon \neq f\}} 2M d\mu = 2M \mu(\{f_\varepsilon \neq f\})$$
> 
> Thế giá trị độ đo từ Định lý Lusin, ta thu được:
> $$\|f_\varepsilon - f\|_1 < 2M \left( \frac{\varepsilon}{2M} \right) = \varepsilon$$
> 
> Vậy định lý đúng cho các lớp hàm khả tích bị chặn có giá bị giới hạn.
> 
> Bước 2. Xét hàm $f \in L^1(\mathbb{R}^N)$ không âm tổng quát.
> 
> Ta từng bước loại bỏ dần hai ràng buộc: giá mang vô hạn và tính không bị chặn. Kỹ thuật được sử dụng là dùng dãy hàm chặt cụt cho không gian và chặt cụt ở biên độ.
> 
> Để xử lý phần giá mang vô hạn lan rộng, ta dùng dãy quả cầu mở  rộng $B(0, n)$ tâm O, bán kính $n$. Xét hàm $|f| \cdot \chi_{B(0, n)^c}$. Khi $n$ tiến ra vô cùng, dãy quả cầu bao toàn bộ $\mathbb{R}^N$, khiến dãy đuôi giảm dần về 0 hầu khắp nơi.
> 
> Vì $f \in L^1(\mathbb{R}^N)$, $|f|$ đóng vai trò là hàm trội khả tích độc lập với $n$. Áp dụng DCT, giới hạn tích phân của phần đuôi tiến về 0:
> $$\lim_{n \to \infty} \int_{\mathbb{R}^N} |f| \cdot \chi_{B(0, n)^c} d\mu = 0$$
> 
> Ý nghĩa: ta có thể tìm được một bán kính không gian $n_\varepsilon$ đủ lớn để cắt bỏ phần dư mà $\|f \cdot \chi_{B(0, n_\varepsilon)^c}\|_1 < \frac{\varepsilon}{3}$. Sau khi cắt, hàm $f \cdot \chi_{B(0, n_\varepsilon)}$ bị triệt tiêu bên ngoài quả cầu, tức sở hữu giá mang compact.
> 
> Để giải quyết vấn đề hàm có thể tiến ra vô cùng, ta thiết lập dãy hàm chặt cụt biên độ:
> $$f_k(x) = \min\{f(x) \cdot \chi_{B(0, n_\varepsilon)}(x), k\}$$
> 
> Dãy hàm $f_k$ là dãy không âm và tăng đơn điệu tới hàm $f \cdot \chi_{B(0, n_\varepsilon)}$. Áp dụng MCT:
> $$\lim_{k \to \infty} \int_{\mathbb{R}^N} f_k d\mu = \int_{\mathbb{R}^N} f \cdot \chi_{B(0, n_\varepsilon)} d\mu$$
> 
> Ý nghĩa: ta tìm được một ngưỡng cắt biên độ $k_\varepsilon$ để chặn sai số chuẩn $L^1$:
> $$\|f \cdot \chi_{B(0, n_\varepsilon)} - f_{k_\varepsilon}\|_1 < \frac{\varepsilon}{3}$$
> 
> Xét hàm $f_{k_\varepsilon}$ thỏa: có giá mang compact giới hạn trong $B(0, n_\varepsilon)$ và bị chặn bởi $k_\varepsilon$. Áp dụng Bước 1 cho hàm $f_{k_\varepsilon}$ với sai số $\frac{\varepsilon}{3}$, tồn tại hàm liên tục có giá compact $\psi_\varepsilon \in C_c(\mathbb{R}^N)$ sao cho:
> $$\|f_{k_\varepsilon} - \psi_\varepsilon\|_1 < \frac{\varepsilon}{3}$$
> 
> Sử dụng bất đẳng thức tam giác:
> $$\|f - \psi_\varepsilon\|_1 \le \|f - f \cdot \chi_{B(0, n_\varepsilon)}\|_1 + \|f \cdot \chi_{B(0, n_\varepsilon)} - f_{k_\varepsilon}\|_1 + \|f_{k_\varepsilon} - \psi_\varepsilon\|_1$$
> 
> Cộng dồn các sai số thành phần, ta thu được:
> $$\|f - \psi_\varepsilon\|_1 < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon$$
> 
> Chứng minh hoàn tất đối với hàm khả tích không âm.
> 
> Bước 3. Xét hàm $f \in L^1(\mathbb{R}^N)$ có dấu tùy ý.
> 
> Ta sử dụng phân tích $f = f^+ - f^-$ với $f^+ = \max(f, 0)$ và $f^- = \max(-f, 0)$. Do hàm ban đầu $f \in L^1(\mathbb{R}^N)$, hai thành phần $f^+$ và $f^-$ đều thuộc không gian $L^1(\mathbb{R}^N)$.
> 
> Áp dụng trực tiếp kết quả xấp xỉ từ Bước 2 cho $f^+$ và $f^-$ với sai số được cho $\frac{\varepsilon}{2}$, ta xây dựng được hai hàm liên tục có giá compact tương ứng là $f_\varepsilon^+, f_\varepsilon^- \in C_c(\mathbb{R}^N)$ thỏa:
> $$\|f^+ - f_\varepsilon^+\|_1 < \frac{\varepsilon}{2}$$
> $$\|f^- - f_\varepsilon^-\|_1 < \frac{\varepsilon}{2}$$
> 
> Thiết lập hàm xấp xỉ cho hàm $f$ ban đầu: $f_\varepsilon = f_\varepsilon^+ - f_\varepsilon^-$. Vì $C_c(\mathbb{R}^N)$ là một không gian vector, phép trừ tuyến tính bảo toàn tính liên tục và giá compact nên $f_\varepsilon \in C_c(\mathbb{R}^N)$. Đánh giá chuẩn $L^1$ bằng bất đẳng thức tam giác:
> $$\|f - f_\varepsilon\|_1 = \|(f^+ - f^-) - (f_\varepsilon^+ - f_\varepsilon^-)\|_1 \le \|f^+ - f_\varepsilon^+\|_1 + \|f^- - f_\varepsilon^-\|_1$$
> 
> Sử dụng các kết quả sai số hội tụ ở trên:
> $$\|f - f_\varepsilon\|_1 < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
> 
>  Kết luận: không gian $C_c(\mathbb{R}^N)$ trù mật trong không gian khả tích Lebesgue $L^1(\mathbb{R}^N)$.