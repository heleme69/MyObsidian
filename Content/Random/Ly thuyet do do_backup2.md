> [!exm] Bài toán 1: Sự sụp đổ của DCT khi hàm trội chỉ "khả tích địa phương"
> Xét không gian độ đo Lebesgue trên $\mathbb{R}$. Định nghĩa dãy hàm số:
> $$f_n(x) = \frac{1}{n} \chi_{[0, n]}(x)$$
> Hãy tìm giới hạn điểm của dãy hàm, tính giới hạn tích phân và giải thích tại sao Định lý Hội tụ Trội (DCT) thất bại dù dãy hàm bị chặn đều bởi hằng số $M = 1$.

> [!ans] 
> Khi cố định $x \in \mathbb{R}$ và cho $n \to \infty$, giá trị của $f_n(x)$ luôn bằng $\frac{1}{n}$ khi $n > x$, do đó dãy hàm hội tụ điểm về hàm giới hạn $f(x) = 0$ trên toàn bộ $\mathbb{R}$. Tích phân của hàm giới hạn bằng 0. 
> 
> Tuy nhiên, tích phân trực tiếp của từng hàm số trong dãy luôn là một hằng số:
> $$\int_{\mathbb{R}} f_n(x) \, dx = \int_0^n \frac{1}{n} \, dx = \frac{1}{n} \cdot n = 1 \implies \lim_{n\to\infty} \int_{\mathbb{R}} f_n(x) \, dx = 1 \neq 0$$
> 
> Sự bất đối xứng này xảy ra vì hàm trội nhỏ nhất bao phủ được dãy hàm là $g(x) = \sup_{n} f_n(x)$. Tại mỗi khoảng $[n, n+1]$, giá trị lớn nhất mà dãy hàm đạt được là $\frac{1}{n}$, dẫn đến hàm trội có dạng giảm chậm $g(x) \sim \frac{1}{x}$ khi $x \to \infty$. Hàm số này có tích phân bằng vô cực trên $\mathbb{R}$. Dù dãy hàm bị chặn bởi hằng số $M=1$ trên mọi đoạn compact (khả tích địa phương), nó không có hàm trội khả tích trên toàn không gian vô hạn, khiến DCT mất hiệu lực.

> [!exm] Bài toán 2: Bản chất của điều kiện "Không âm" trong Định lý Hội tụ Đơn điệu (MCT)
> Xét không gian độ đo Lebesgue trên khoảng đóng $[0, 1]$. Định nghĩa dãy hàm số đơn điệu tăng:
> $$f_n(x) = -\frac{1}{n} \cdot \frac{1}{x} \quad \text{với } x \in (0, 1]$$
> Hãy kiểm tra tính đơn điệu, tìm hàm giới hạn điểm và giải thích tại sao dấu giới hạn không hoán đổi được với dấu tích phân.

> [!ans] 
> Khi $n$ tăng, đại lượng $-\frac{1}{n}$ tăng dần về 0, do đó dãy hàm số này đơn điệu tăng tiến về hàm giới hạn $f(x) = 0$ trên $(0, 1]$. Tích phân của hàm giới hạn hiển nhiên bằng 0.
> 
> Xét tích phân của các hàm số thành phần, vì hàm $\frac{1}{x}$ kỳ dị tại điểm 0 nên tích phân của mọi hàm trong dãy đều bằng âm vô cùng:
> $$\int_0^1 f_n(x) \, dx = -\frac{1}{n} \int_0^1 \frac{1}{x} \, dx = -\infty \implies \lim_{n\to\infty} \int_0^1 f_n(x) \, dx = -\infty \neq 0$$
> 
> Kết quả hoán đổi bị sai lệch hoàn toàn do các hàm số trong dãy nhận giá trị âm. Điều kiện "không âm" ($f_n \ge 0$) trong MCT không đơn thuần là một ràng buộc kỹ thuật, mà nó giữ vai trò ngăn chặn các dạng vô định kiểu $[-\infty + \infty]$ xuất hiện trong quá trình xây dựng độ đo, đảm bảo tính đơn điệu của tích phân đi kèm với tính ổn định của giới hạn số.

> [!exm] Bài toán 3: Khi hội tụ hầu khắp nơi (a.e.) không đủ mạnh đối với BCT
> Xét không gian độ đo Lebesgue trên đoạn $[0, 1]$. Giả sử ta có một tập hợp đo được $E \subset [0, 1]$ sao cho độ đo của nó không xác định hoặc dãy tập $E_n$ dao động liên tục (ví dụ như dãy hàm kiểm tra của các tập phân mảnh dạng toán học Cantor). Xét dãy hàm số $f_n(x) = \chi_{E_n}(x)$ bị chặn đều bởi hằng số $M = 1$. 
> Nếu dãy hàm này hội tụ yếu hoặc dao động liên tục mà không có giới hạn điểm hầu khắp nơi, ta có thể kết luận gì về giới hạn tích phân?

> [!ans] 
> Bản chất câu hỏi này dẫn đến việc khảo sát dãy hàm phản ví dụ kinh điển liên quan đến "Hàm sóng dịch chuyển" (Typing ký hiệu là $f_n = \chi_{I_n}$ với $I_n$ là các khoảng có độ đo giảm dần nhưng quét đi quét lại liên tục trên đoạn $[0, 1]$).
> 
> Tại một điểm $x$ bất kỳ, giá trị $f_n(x)$ liên tục nhảy từ 0 lên 1 rồi lại về 0 vô hạn lần, nghĩa là dãy số $f_n(x)$ không hề hội tụ điểm tại bất kỳ đâu trên $[0, 1]$. Trong khi đó, tích phân của chúng lại hội tụ rất đẹp: $\int_0^1 f_n(x) \, dx = \mu_L(I_n) \to 0$. Bài toán này chỉ ra rằng, điều kiện hội tụ hầu khắp nơi (a.e.) là bắt buộc để xác định hàm mục tiêu cho dấu tích phân vế phải; nếu chỉ có sự hội tụ của diện tích (hội tụ theo độ đo hoặc hội tụ yếu) mà thiếu hội tụ điểm, Định lý Hội tụ Bị chặn (BCT) sẽ không thể phát biểu một cách tường minh.

> [!exm] Bài toán 4: Ranh giới giữa Hội tụ đều và Hội tụ Trội trên miền vô hạn
> Xét dãy hàm số $f_n(x) = \frac{1}{n} \cdot \chi_{[n, 2n]}(x)$ trên không gian độ đo Lebesgue $\mathbb{R}$. 
> Hãy chứng minh dãy hàm này hội tụ đều về 0 trên $\mathbb{R}$ nhưng dấu giới hạn và tích phân vẫn không thể hoán đổi.

> [!ans] 
> Cực trị của hàm số theo $x$ là $\sup_{x} |f_n(x) - 0| = \frac{1}{n}$. Khi $n \to \infty$, giới hạn này bằng 0, chứng tỏ dãy hàm hội tụ đều về hàm $f(x) = 0$ trên toàn bộ trục số. Tích phân hàm giới hạn bằng 0.
> 
> Tuy nhiên, tích phân trực tiếp của dãy hàm lại cho kết quả là hằng số:
> $$\int_{\mathbb{R}} f_n(x) \, dx = \int_n^{2n} \frac{1}{n} \, dx = \frac{1}{n} \cdot (2n - n) = 1 \implies \lim_{n\to\infty} \int_{\mathbb{R}} f_n(x) \, dx = 1 \neq 0$$
> 
> Phản ví dụ này rất đáng sợ vì trong giải tích cổ điển, hội tụ đều là "ông vua" bảo toàn mọi tính chất từ liên tục đến tích phân. Nhưng trên miền vô hạn của lý thuyết Lebesgue, hội tụ đều vẫn thất bại nếu khối lượng đồ thị bị dịch chuyển ra vô cực (escape to infinity). Nó chỉ ra rằng DCT đòi hỏi một sự kiểm soát toàn cục bằng hàm trội khả tích $g \in L^1$, và một dãy hàm hội tụ đều dù "mịn" đến đâu nhưng nếu trải dài vô tận thì vẫn có thể làm thoát năng lượng tích phân.

> [!problem] (Câu 15)  
> Cho dãy hàm đo được không âm $f_n$ trên $(X, \mathcal{A}, \mu)$ sao cho  
> $$f_n \to f \ \text{a.e.} \quad \text{và} \quad \int_X f_n \, d\mu \to \int_X f \, d\mu.$$  
> Chứng minh rằng với mọi $E \in \mathcal{A}$ ta có  
> $$\int_E f_n \, d\mu \to \int_E f \, d\mu.$$

> [!prf] Chứng minh Câu 15
> Phần 1: Áp dụng Bổ đề Fatou cho các tập con
> Vì $f_n \ge 0$ và $f_n \to f$ a.e. trên toàn không gian $X$, thì sự hội tụ này cũng đúng hầu khắp nơi trên mọi tập con của $X$.
> Áp dụng Bổ đề Fatou trên tập $E$:
> $$\liminf_{n \to \infty} \int_E f_n d\mu \ge \int_E \liminf_{n \to \infty} f_n d\mu = \int_E f d\mu \quad (1)$$
> 
> Áp dụng Bổ đề Fatou trên phần bù $X \setminus E$:
> $$\liminf_{n \to \infty} \int_{X \setminus E} f_n d\mu \ge \int_{X \setminus E} \liminf_{n \to \infty} f_n d\mu = \int_{X \setminus E} f d\mu \quad (2)$$
> 
> Phần 2: Đánh giá cận trên (limsup) qua phép bù
> Theo tính chất cộng tính của tích phân trên các miền rời nhau, ta luôn có:
> $$\int_E f_n d\mu = \int_X f_n d\mu - \int_{X \setminus E} f_n d\mu$$
> 
> Lấy $\limsup$ hai vế. Lưu ý rằng khi đưa dấu trừ ra ngoài một giới hạn, $\liminf$ sẽ biến thành $\limsup$ và ngược lại. Đồng thời do giả thiết $\lim \int_X f_n d\mu = \int_X f d\mu$ đã tồn tại một cách hữu hạn, ta có quyền tách giới hạn:
> $$\limsup_{n \to \infty} \int_E f_n d\mu = \limsup_{n \to \infty} \left( \int_X f_n d\mu - \int_{X \setminus E} f_n d\mu \right)$$
> $$\limsup_{n \to \infty} \int_E f_n d\mu = \lim_{n \to \infty} \int_X f_n d\mu - \liminf_{n \to \infty} \int_{X \setminus E} f_n d\mu$$
> 
> Thay giả thiết của đề bài vào số hạng đầu, và áp dụng bất đẳng thức (2) vào số hạng sau:
> $$\limsup_{n \to \infty} \int_E f_n d\mu \le \int_X f d\mu - \int_{X \setminus E} f d\mu$$
> 
> Dùng lại tính cộng tính của tích phân cho hàm $f$:
> $$\limsup_{n \to \infty} \int_E f_n d\mu \le \int_E f d\mu \quad (3)$$
> 
> Phần 3: Kết luận
> Kết hợp bất đẳng thức (1) và (3), ta thiết lập được chuỗi kẹp:
> $$\int_E f d\mu \le \liminf_{n \to \infty} \int_E f_n d\mu \le \limsup_{n \to \infty} \int_E f_n d\mu \le \int_E f d\mu$$
> 
> Vì cận dưới và cận trên bằng nhau, giới hạn bắt buộc phải tồn tại và hội tụ đúng về giá trị đó:
> $$\lim_{n \to \infty} \int_E f_n d\mu = \int_E f d\mu$$ 

> [!prf] Chứng minh
> 
> **Phần 1: Tìm $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1)**
> 
> Ta xây dựng $f_\varepsilon$ thỏa mãn (1) trong bốn bước, mỗi bước mở rộng dần điều kiện đặt ra cho $A$ và $f$.
> 
> Bước 1.1. _Giả thiết:_ $A$ compact, $f \ge 0$, $\sup|f| < 1$.
> 
> Theo định lý xấp xỉ hàm đo được, tồn tại dãy hàm đơn giản không âm $f_n \uparrow f$ với biểu diễn: $$f(x) = \sum_{k=1}^\infty \frac{1}{2^k} \chi_{A_k}(x), \quad A_k \in \mathfrak{A},; A_k \subset A.$$ Với mỗi $k$, theo tính chính quy của độ đo Lebesgue, chọn compact $K_k$ và mở $V_k$ với $K_k \subset A_k \subset V_k$ và $\mu(V_k \setminus K_k) < \varepsilon / 2^{k+1}$. Định nghĩa: $$g_k(x) = \frac{d(x, V_k^c)}{d(x, K_k) + d(x, V_k^c)}.$$ Hàm $g_k$ liên tục, $g_k \in [0,1]$, bằng $1$ trên $K_k$ và bằng $0$ trên $V_k^c$; do đó $g_k$ và $\chi_{A_k}$ chỉ sai khác nhau trên $V_k \setminus K_k$. Đặt: $$f_\varepsilon(x) = \sum_{k=1}^\infty \frac{1}{2^k} g_k(x).$$ Chuỗi hội tụ đều theo tiêu chuẩn Weierstrass (chặn bởi $\sum 2^{-k} = 1$), nên $f_\varepsilon$ liên tục. Vì $A$ compact và $g_k = 0$ ngoài $V_k \supset A_k \subset A$, giá của $f_\varepsilon$ compact, tức $f_\varepsilon \in C_c(\mathbb{R}^N)$. Cuối cùng: $${f_\varepsilon \neq f} \subset \bigcup_{k=1}^\infty (V_k \setminus K_k) \implies \mu({f_\varepsilon \neq f}) \le \sum_{k=1}^\infty \frac{\varepsilon}{2^{k+1}} = \frac{\varepsilon}{2} < \varepsilon.$$
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




$\xi$