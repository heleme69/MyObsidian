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
> Cho không gian độ đo Lebesgue $(\mathbb{R}^N, \mathcal{A}, \mu)$ và hàm $f: \mathbb{R}^N \to \mathbb{R}$ đo được.
> 
> Giả sử tồn tại một tập $A \in \mathcal{A}$ sao cho $\mu(A) < \infty$ và $f(x) = 0$ với mọi $x \in A^c$.
> 
> Khi đó, với mọi $\varepsilon > 0$, tồn tại hàm liên tục có giá compact $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn:
> (1) $\mu(\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\}) < \varepsilon$.
> (2) $\sup_{x \in \mathbb{R}^N} |f_\varepsilon(x)| \le \sup_{x \in \mathbb{R}^N} |f(x)|$.

> [!prf] Chứng minh
> 
> **Phần 1: Chứng minh tính chất (1)**
> (Mục tiêu: Xây dựng hàm liên tục $f_\varepsilon$ xấp xỉ hàm $f$ theo nghĩa độ đo)
> 
> Trước tiên, giả sử $f \ge 0$. Theo định lý xấp xỉ, hàm đo được $f$ có thể được xấp xỉ bởi một dãy hàm đơn giản không âm tăng dần $f_n \uparrow f$.
> 
> Cụ thể, hàm $f_n$ được định nghĩa qua các tập $A_n$ và có dạng biểu diễn:
> $$f_n(x) = \sum_{k=1}^n \frac{1}{2^k} \chi_{A_k}(x)$$
> 
> Theo tính chính quy của độ đo Lebesgue, với mỗi tập đo được $A_n$, tồn tại một tập compact $K_n$ và một tập mở $V_n$ bao nhau sao cho $K_n \subset A_n \subset V_n$.
> 
> Ta hoàn toàn có thể chọn các tập này sao cho phần dư bị chặn bởi:
> $$\mu(V_n \setminus K_n) < \frac{\varepsilon}{2^n}$$
> 
> Để chuyển từ hàm chỉ thị sang hàm liên tục, ta xây dựng một hàm khoảng cách $g_n(x)$ dựa trên metric trên tập $A$:
> $$g_n(x) = \frac{d(x, V_n^c)}{d(x, K_n) + d(x, V_n^c)}$$
> 
> Hàm $g_n$ là hàm liên tục, nhận giá trị trong $[0, 1]$.
> 
> Quan trọng hơn, $g_n = 1$ trên $K_n$ và $g_n = 0$ trên $V_n^c$. Do đó, $g_n$ xấp xỉ chính xác hàm chỉ thị $\chi_{A_n}$ ngoại trừ vùng sai số $V_n \setminus K_n$.
> 
> Đặt $f_\varepsilon(x) = \sum_{n=1}^\infty \frac{1}{2^n} g_n(x)$. Vì chuỗi hàm này hội tụ đều, $f_\varepsilon$ là một hàm liên tục.
> 
> Tập hợp các điểm mà $f_\varepsilon \neq f$ nằm trong hợp của các miền sai số của từng bước. Áp dụng tính đơn điệu, ta có:
> $$\mu(\{f_\varepsilon \neq f\}) \le \sum_{n=1}^\infty \mu(V_n \setminus K_n) < \sum_{n=1}^\infty \frac{\varepsilon}{2^n} = \varepsilon$$
> 
> Vậy tính chất (1) đã được thỏa mãn.
> 
> **Phần 2: Chứng minh tính chất (2)**
> (Mục tiêu: Đảm bảo cận supremum được bảo toàn qua các trường hợp từ yếu đến mạnh)
> 
> Bước 1: Xét $A$ là tập compact và $0 \le f < 1$.
> 
> Theo cách xây dựng ở Phần 1, ta đã có $f_\varepsilon = \sum_{n=1}^\infty \frac{1}{2^n} g_n(x)$.
> 
> Vì $0 \le g_n \le 1$, ta dễ dàng đánh giá được $\sup |f_\varepsilon| \le \sum_{n=1}^\infty \frac{1}{2^n} = 1$.
> 
> Do điều kiện ban đầu $\sup |f| \le 1$, bất đẳng thức về cận được thỏa mãn.
> 
> Bước 2: Xét $A$ là tập compact và $f$ bị chặn.
> 
> Giả sử tồn tại số $M > 0$ sao cho $|f| \le M$. Ta chuẩn hóa $f$ bằng cách xét hàm $f/M$.
> 
> Phân tích hàm này thành phần dương và phần âm: $\frac{f}{M} = \left(\frac{f}{M}\right)^+ - \left(\frac{f}{M}\right)^-$.
> 
> Cả hai thành phần này đều không âm và bị chặn bởi 1, đưa bài toán về đúng giả thiết của Bước 1.
> 
> Áp dụng Bước 1 cho từng thành phần rồi nhân ngược lại với hằng số $M$, ta thu được hàm $f_\varepsilon$. Quá trình nhân tuyến tính này giữ nguyên tính liên tục và đảm bảo $\sup |f_\varepsilon| \le M = \sup |f|$.
> 
> Bước 3: Xét $A$ là tập bất kỳ có $\mu(A) < \infty$ và $f$ bị chặn.
> 
> Tồn tại một tập compact $K \subset A$ sao cho $\mu(A \setminus K) < \varepsilon/2$.
> 
> Đặt hàm phụ $\bar{f} = f \cdot \chi_K$. Hàm này bị chặn và có miền mang (support) là tập compact $K$.
> 
> Áp dụng Bước 2 cho hàm $\bar{f}$, tồn tại $\bar{f}_\varepsilon$ xấp xỉ $\bar{f}$ với sai số độ đo $\varepsilon/2$ và bảo toàn được cận supremum.
> 
> Tập sai lệch tổng cộng $\{f \neq \bar{f}_\varepsilon\}$ là hợp của phần $\{\bar{f} \neq \bar{f}_\varepsilon\}$ và phần bị bỏ đi $A \setminus K$. Tổng độ đo này nhỏ hơn $\varepsilon/2 + \varepsilon/2 = \varepsilon$.
> 
> Bước 4: Xét $f$ đo được bất kỳ.
> 
> Nếu $f$ không bị chặn, ta định nghĩa hàm cắt cụt $f_N(x) = f(x)$ nếu $|f(x)| \le N$, và bằng $0$ nếu $|f(x)| > N$.
> 
> Vì $\mu(A) < \infty$, khi chọn số nguyên $N$ đủ lớn, tập các điểm $|f(x)| > N$ sẽ có độ đo bé hơn $\varepsilon/2$.
> 
> Hàm $f_N$ lúc này đã bị chặn. Lặp lại logic ở Bước 3 cho $f_N$, ta thu được hàm $f_\varepsilon$ xấp xỉ $f_N$ và dĩ nhiên xấp xỉ luôn $f$ với tổng sai số độ đo nhỏ hơn $\varepsilon$.
> 
> Bước 5: Hoàn tất.
> 
> Qua mọi phép thu phóng, phân tách và cắt cụt từ Bước 1 đến Bước 4, ta luôn duy trì được tính chất $\sup |f_\varepsilon| \le \sup |f|$ tại mỗi khâu.
> 
> Kết hợp cùng kết quả ở Phần 1, cả hai tính chất (1) và (2) của Định lý Lusin đã được chứng minh trọn vẹn.