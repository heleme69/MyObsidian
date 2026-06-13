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


$\xi$