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
> **Phần 1: Chứng minh tính chất (1) và xây dựng công cụ xấp xỉ cơ sở**
> 
> Mục tiêu của phần này là thiết lập nền tảng xấp xỉ hàm chỉ thị bằng một hàm liên tục thông qua khoảng cách metric, từ đó xấp xỉ hàm đo được tổng quát. Trước tiên, giả sử hàm số thỏa mãn $f \ge 0$. Theo định lý xấp xỉ hàm đo được, tồn tại một dãy hàm đơn giản không âm tăng dần $f_n \uparrow f$. Cụ thể, thông qua việc phân hoạch không gian ảnh, hàm đơn giản $f_n$ có thể được biểu diễn tuyến tính qua các hàm chỉ thị của các tập đo được $A_k$ dưới dạng công thức:
> $$f_n(x) = \sum_{k=1}^n \frac{1}{2^k} \chi_{A_k}(x)$$
> 
> Theo tính chính quy của độ đo Lebesgue đối với các tập đo được, với mỗi tập $A_k$, luôn tồn tại một tập compact $K_k$ và một tập mở $V_k$ bao nhau theo thứ tự $K_k \subset A_k \subset V_k$. Hơn nữa, ta hoàn toàn có thể kiểm soát độ đo của phần dư bằng cách chọn các tập này sao cho thỏa mãn bất đẳng thức:
> $$\mu(V_k \setminus K_k) < \frac{\varepsilon}{2^{k+1}}$$
> 
> Để làm trơn hàm chỉ thị, ta định nghĩa một hàm khoảng cách $g_k(x)$ sử dụng metric chuẩn trên không gian $\mathbb{R}^N$:
> $$g_k(x) = \frac{d(x, V_k^c)}{d(x, K_k) + d(x, V_k^c)}$$
> 
> Do hàm khoảng cách tới một tập hợp luôn là hàm liên tục, $g_k$ là một hàm liên tục trên $\mathbb{R}^N$. Tập giá trị của $g_k$ nằm gọn trong đoạn $[0, 1]$. Bằng cách thế trực tiếp, ta nhận thấy $g_k(x) = 1$ với mọi $x \in K_k$ và $g_k(x) = 0$ với mọi $x \in V_k^c$. Như vậy, hàm $g_k$ chính là một phiên bản liên tục xấp xỉ hoàn hảo hàm chỉ thị $\chi_{A_k}$, và sự sai khác giữa hai hàm này chỉ xảy ra duy nhất trên miền $V_k \setminus K_k$.
> 
> Tiếp theo, ta xây dựng hàm giới hạn $f_\varepsilon$ bằng cách thay thế toàn bộ hàm chỉ thị bằng hàm liên tục tương ứng:
> $$f_\varepsilon(x) = \sum_{k=1}^\infty \frac{1}{2^k} g_k(x)$$
> 
> Do $0 \le g_k \le 1$, chuỗi hàm này bị chặn trên bởi chuỗi số cấp số nhân hội tụ $\sum_{k=1}^\infty \frac{1}{2^k}$. Áp dụng tiêu chuẩn Weierstrass (M-test), chuỗi hàm hội tụ đều trên toàn không gian $\mathbb{R}^N$. Do tính hội tụ đều bảo toàn tính liên tục, ta kết luận $f_\varepsilon$ là một hàm liên tục. 
> 
> Cuối cùng, đánh giá độ đo của tập sai số. Tập hợp các điểm thỏa mãn $f_\varepsilon(x) \neq f(x)$ được chứa gọn trong hợp của toàn bộ các miền sai số ở từng bước phân tích. Do đó, ta thiết lập được quan hệ bao hàm:
> $$\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\} \subset \bigcup_{k=1}^\infty (V_k \setminus K_k)$$
> 
> Lấy độ đo hai vế và sử dụng tính đơn điệu của độ đo Lebesgue, ta thu được kết quả:
> $$\mu(\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\}) \le \sum_{k=1}^\infty \mu(V_k \setminus K_k) < \sum_{k=1}^\infty \frac{\varepsilon}{2^{k+1}} = \frac{\varepsilon}{2} < \varepsilon$$
> Tính chất (1) đã được chứng minh và công cụ $g_k$ sẵn sàng để áp dụng cho các bước mở rộng ở Phần 2.
> 
> **Phần 2: Chứng minh tính chất (2) qua các trường hợp từ yếu đến mạnh**
> 
> Mục tiêu của phần này là sử dụng các biến đổi giải tích và kỹ thuật chặtt cụt để đảm bảo cận $\sup |f_\varepsilon| \le \sup |f|$ không bị phá vỡ khi ta nới lỏng dần điều kiện của hàm số và tập hợp.
> 
> Bước 1: Xét điều kiện tập $A$ là tập compact và hàm số thỏa mãn $0 \le f(x) < 1$. Khai triển hàm $f$ thành chuỗi $f(x) = \sum_{k=1}^\infty \frac{1}{2^k}\chi_{A_k}(x)$. Sử dụng trực tiếp cấu trúc từ Phần 1, ta thu được hàm xấp xỉ liên tục $f_\varepsilon(x) = \sum_{k=1}^\infty \frac{1}{2^k} g_k(x)$. Vì tập $A$ là compact, miền mang của hàm này được chặn, dẫn đến $f_\varepsilon \in C_c(\mathbb{R}^N)$. Đánh giá cận trên, do tập giá trị của $g_k$ thuộc $[0, 1]$, ta thiết lập được bất đẳng thức:
> $$\sup_{x \in \mathbb{R}^N} |f_\varepsilon(x)| \le \sum_{k=1}^\infty \frac{1}{2^k} = 1$$
> Do giả thiết ban đầu giới hạn cận của hàm $f$ không vượt quá $1$, bất đẳng thức về cận supremum được bảo toàn.
> 
> Bước 2: Xét điều kiện tập $A$ là tập compact và hàm $f$ bị chặn. 
> Giả sử tồn tại hằng số $M = \sup_{x \in \mathbb{R}^N} |f(x)| < \infty$, suy ra $-M \le f(x) \le M$ với mọi $x \in A$. 
> Để đưa bài toán về đúng giả thiết không âm của Bước 1, ta tịnh tiến và chuẩn hóa hàm số bằng cách đặt:
> $$h(x) = \frac{f(x) + M}{2M + \delta}$$
> với một số $\delta > 0$ nhỏ tùy ý. 
> Lúc này, hàm $h$ hoàn toàn thỏa mãn điều kiện $0 \le h(x) < 1$ trên tập compact $A$.  
> Áp dụng kết quả ở Bước 1 cho hàm $h$ với sai số $\frac{\varepsilon}{2}$, tồn tại một hàm liên tục có giá compact $h_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn:
> $$\mu(\{x \in \mathbb{R}^N : h_\varepsilon(x) \neq h(x)\}) < \frac{\varepsilon}{2}$$
> Khôi phục lại hàm ban đầu qua phép biến đổi ngược:
> $$f_\varepsilon(x) = (2M + \delta)h_\varepsilon(x) - M$$
> Do $h_\varepsilon$ liên tục nên $f_\varepsilon$ chắc chắn liên tục, đồng thời tập sai số được bảo toàn tính chất:
> $$\mu(\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\}) = \mu(\{x \in \mathbb{R}^N : h_\varepsilon(x) \neq h(x)\}) < \frac{\varepsilon}{2}$$
> 
> 
> Bước 3: Xét điều kiện tập $A$ là tập đo được bất kỳ với $\mu(A) < \infty$ và hàm $f$ bị chặn. Theo tính chính quy của độ đo Lebesgue, tồn tại một tập compact $K \subset A$ sao cho độ đo phần dư thỏa mãn $\mu(A \setminus K) < \frac{\varepsilon}{3}$. Ta định nghĩa một hàm phụ:
> $$\bar{f}(x) = f(x) \cdot \chi_K(x)$$
> Hàm $\bar{f}$ triệt tiêu hoàn toàn bên ngoài tập compact $K$ và bảo toàn tính bị chặn của $f$. Áp dụng Bước 2 cho hàm $\bar{f}$, tồn tại hàm $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn $\mu(\{f_\varepsilon \neq \bar{f}\}) < \frac{\varepsilon}{3}$. Đánh giá độ đo tập sai lệch tổng quát so với hàm nguyên gốc, ta có bao hàm thức:
> $$\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\} \subset \{x \in \mathbb{R}^N : f_\varepsilon(x) \neq \bar{f}(x)\} \cup (A \setminus K)$$
> Lấy độ đo hai vế, ta thu được kết quả $\mu(\{f_\varepsilon \neq f\}) \le \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \frac{2\varepsilon}{3} < \varepsilon$.
> 
> Bước 4: Loại bỏ điều kiện bị chặn đối với hàm $f$ đo được tổng quát. Định nghĩa dãy tập hợp $B_n$ đo lường sự phân bố vô cực của hàm số:
> $$B_n = \{x \in A : |f(x)| \ge n\} \quad \text{với mọi } n \in \mathbb{N}^*$$
> Rõ ràng theo định nghĩa, ta có một dãy tập hợp giảm dần, tức là $B_1 \supset B_2 \supset \dots \supset B_n$. Do hàm số $f$ nhận giá trị thực (tức là hữu hạn hầu khắp nơi trên không gian), giới hạn giao của toàn bộ dãy tập hợp này bắt buộc phải là tập rỗng, được viết dưới dạng ký hiệu là:
> $$B_n \downarrow \bigcap_{n=1}^\infty B_n = \emptyset$$
> Vì hàm $f$ được xét trên tập $A$ có độ đo hữu hạn, ta có $\mu(B_1) \le \mu(A) < \infty$. Áp dụng định lý về tính liên tục từ trên của độ đo Lebesgue đối với dãy tập hợp giảm có độ đo hữu hạn, ta thu được phương trình giới hạn:
> $$\lim_{n \to \infty} \mu(B_n) = \mu(\emptyset) = 0$$
> Dựa vào định nghĩa của giới hạn dãy số, tồn tại một chỉ số nguyên $n_0$ đủ lớn sao cho $\mu(B_{n_0}) < \frac{\varepsilon}{3}$. Lúc này, ta thiết lập hàm chặt cụt để tạo ra một hàm bị chặn:
> $$\bar{f}(x) = (1 - \chi_{B_{n_0}}(x)) \cdot f(x) = f(x) \cdot \chi_{A \setminus B_{n_0}}(x)$$
> Do $\bar{f}$ triệt tiêu trên $B_{n_0}$, ta có $|\bar{f}(x)| < n_0$ với mọi $x$, chứng minh rằng $\bar{f}$ bị chặn. Lặp lại logic ở Bước 3 cho hàm $\bar{f}$ với ngưỡng sai số $\frac{\varepsilon}{3}$, tồn tại hàm $f_\varepsilon \in C_c(\mathbb{R}^N)$ sao cho $\mu(\{f_\varepsilon \neq \bar{f}\}) < \frac{\varepsilon}{3}$. Tiến hành kiểm tra sai số phân kì so với hàm $f$ ban đầu bằng quan hệ bao hàm:
> $$\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\} \subset \{x \in \mathbb{R}^N : f_\varepsilon(x) \neq \bar{f}(x)\} \cup B_{n_0}$$
> Kéo theo hệ quả tính toán $\mu(\{f_\varepsilon \neq f\}) \le \mu(\{f_\varepsilon \neq \bar{f}\}) + \mu(B_{n_0}) < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \frac{2\varepsilon}{3} < \varepsilon$.
> 
> Bước 5: Hoàn tất chứng minh với kỹ thuật hàm chặt cụt liên tục $\Theta_M$. Gọi $M = \sup_{x \in \mathbb{R}^N} |f(x)|$. Trong trường hợp $M = \infty$, điều kiện về bảo toàn cận hiển nhiên luôn đúng mà không cần biến đổi thêm. Xét trường hợp phi thường $M < \infty$, để đảm bảo hàm $f_\varepsilon$ thu được từ các chuỗi xấp xỉ trước không vượt quá giới hạn $M$ tại các biên sai số, ta thiết lập một hàm chặt cụt (truncation function) $\Theta_M: \mathbb{R} \to \mathbb{R}$ xác định bởi hệ thức:
> $$\Theta_M(t) = \begin{cases} M & \text{khi } t > M \\ t & \text{khi } |t| \le M \\ -M & \text{khi } t < -M \end{cases}$$
> Dễ dàng chứng minh $\Theta_M$ là một hàm liên tục trên $\mathbb{R}$. Ta định nghĩa hàm xấp xỉ cuối cùng là hàm hợp của hàm chặt cụt và hàm liên tục ở bước trước:
> $$\bar{f}_\varepsilon(x) = (\Theta_M \circ f_\varepsilon)(x)$$
> Do $f_\varepsilon \in C_c(\mathbb{R}^N)$ và hàm $\Theta_M$ thỏa mãn $\Theta_M(0) = 0$, quá trình hợp hàm không sinh thêm giá trị khác không tại các miền triệt tiêu, do đó hàm $\bar{f}_\varepsilon$ vẫn duy trì tính liên tục và có giá compact, tức là $\bar{f}_\varepsilon \in C_c(\mathbb{R}^N)$. Về mặt độ lớn, dựa vào định nghĩa hàm $\Theta_M$, hệ thức sau hiển nhiên được thiết lập:
> $$\sup_{x \in \mathbb{R}^N} |\bar{f}_\varepsilon(x)| \le M = \sup_{x \in \mathbb{R}^N} |f(x)|$$
> Cuối cùng, tại tất cả những điểm $x$ mà xấp xỉ đã chính xác tức là $f_\varepsilon(x) = f(x)$, do giá trị của $|f(x)|$ đã bị chặn bởi $M$, thao tác chặt cụt sẽ trả về đúng giá trị gốc $\bar{f}_\varepsilon(x) = \Theta_M(f(x)) = f(x)$. Hệ quả giải tích của lập luận này là:
> $$\{x \in \mathbb{R}^N : \bar{f}_\varepsilon(x) \neq f(x)\} \subset \{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\}$$
> Bất đẳng thức tập hợp này lập tức dẫn đến $\mu(\{\bar{f}_\varepsilon \neq f\}) \le \mu(\{f_\varepsilon \neq f\}) < \varepsilon$. Tới đây, hàm $\bar{f}_\varepsilon$ đã thỏa mãn một cách chặt chẽ cả hai tính chất (1) và (2), hoàn tất chứng minh Định lý Lusin.