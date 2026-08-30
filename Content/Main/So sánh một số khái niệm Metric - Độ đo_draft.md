
# 1. Cấu trúc một hàm đơn lẻ: Khống chế Giá trị vs. Khống chế Khối lượng

> [!def] (Không gian Tô-pô: Liên tục đều / Uniform Continuity)
> Cho không gian metric $(X, d)$. Hàm $f: X \to \mathbb{R}$ được gọi là liên tục đều nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall x, y \in X, \ d(x, y) < \delta \implies |f(x) - f(y)| < \varepsilon.$$
> **Bản chất:** Khống chế sự dao động của giá trị hàm số thông qua khoảng cách hình học. Hằng số $\delta$ dùng chung cho toàn miền, độc lập với vị trí điểm $x$.

> [!def] (Không gian Độ đo: Liên tục tuyệt đối / Absolute Continuity)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ và $f \in L^1(D, \mu)$. Tích phân của $f$ luôn tự động thỏa mãn tính liên tục tuyệt đối:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall A \in \mathfrak{A}, \ \mu(A) < \delta \implies \int_A |f| \, d\mu < \varepsilon.$$
> **Bản chất:** Khống chế tổng khối lượng tích phân thông qua kích thước độ đo của tập con.

> [!prf] Chứng minh Tính Liên tục Tuyệt đối của một hàm Khả tích
> Cho $f \in L^1(D, \mu)$ và $\varepsilon > 0$. Với mỗi $n \in \mathbb{N}^*$, xét hàm cắt cụt:
> $$f_n(x) = \min(|f(x)|, n) = |f(x)| \mathbf{1}_{\{|f| < n\}} + n \mathbf{1}_{\{|f| \ge n\}}.$$
> Dãy $\{f_n\}$ là dãy các hàm đo được, không âm, thỏa mãn $0 \le f_n(x) \le f_{n+1}(x)$ và hội tụ từng điểm:
> $$\lim_{n \to \infty} f_n(x) = |f(x)|, \quad \forall x \in D.$$
> 
> Theo Định lý Hội tụ Đơn điệu (Monotone Convergence Theorem - MCT):
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D |f| \, d\mu.$$
> Do $\int_D |f| \, d\mu < \infty$, ta có:
> $$\lim_{n \to \infty} \int_D (|f| - f_n) \, d\mu = \int_D |f| \, d\mu - \lim_{n \to \infty} \int_D f_n \, d\mu = 0.$$
> 
> Do đó, tồn tại một số nguyên dương $N \in \mathbb{N}^*$ đủ lớn sao cho:
> $$\int_D (|f| - f_N) \, d\mu < \frac{\varepsilon}{2}.$$
> 
> Đặt $\delta = \frac{\varepsilon}{2N} > 0$. Với mọi tập đo được $A \in \mathfrak{A}$ thỏa mãn $\mu(A) < \delta$, ta tách tích phân:
> $$\begin{aligned}
> \int_A |f| \, d\mu &= \int_A (|f| - f_N) \, d\mu + \int_A f_N \, d\mu \\
> &\le \int_D (|f| - f_N) \, d\mu + \int_A N \, d\mu \\
> &< \frac{\varepsilon}{2} + N \cdot \mu(A) \\
> &< \frac{\varepsilon}{2} + N \cdot \left(\frac{\varepsilon}{2N}\right) = \varepsilon.
> \end{aligned}$$
> Chứng minh hoàn tất.

# 2. Cấu trúc một họ hàm: Lá chắn đồng thời

> [!def] (Không gian Tô-pô: Đồng liên tục / Equicontinuity)
> Cho không gian metric $(X, d)$ và họ hàm $\mathcal{F} \subset C(X)$. Họ $\mathcal{F}$ được gọi là đồng liên tục nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall f \in \mathcal{F}, \, \forall x, y \in X, \ d(x, y) < \delta \implies |f(x) - f(y)| < \varepsilon.$$

> [!def] (Không gian Độ đo: Liên tục tuyệt đối đều / UAC)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ và họ hàm $\Lambda \subset L^1(D, \mu)$. Họ $\Lambda$ thỏa mãn Liên tục tuyệt đối đều nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall A \in \mathfrak{A}, \ \mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon.$$

## 3. Sự nâng cấp hội tụ: Định lý Dini vs. Định lý Egorov

> [!thm] (Không gian Tô-pô: Định lý Dini)
> Cho $K$ là một **không gian metric compact** và dãy hàm liên tục $f_n: K \to \mathbb{R}$.
> Giả sử dãy $\{f_n\}$ đơn điệu giảm từng điểm về một hàm liên tục $f: K \to \mathbb{R}$, tức là:
> $$f_{n+1}(x) \le f_n(x), \quad \forall x \in K, \ \forall n \ge 1 \quad \text{và} \quad \lim_{n \to \infty} f_n(x) = f(x), \quad \forall x \in K.$$
> Khi đó, dãy $\{f_n\}$ hội tụ **đều** về $f$ trên $K$:
> $$\lim_{n \to \infty} \sup_{x \in K} |f_n(x) - f(x)| = 0.$$

> [!prf] Chứng minh Định lý Dini
> Đặt $g_n(x) = f_n(x) - f(x)$. Vì $f_n$ và $f$ liên tục nên $g_n$ liên tục trên $K$. 
> Giả thiết bài toán tương đương với: $g_n(x) \ge g_{n+1}(x) \ge 0$ với mọi $x \in K$, và $\lim_{n \to \infty} g_n(x) = 0$ từng điểm trên $K$. Ta cần chứng minh $g_n \xrightarrow{\text{đều}} 0$ trên $K$.
> 
> Cố định $\varepsilon > 0$. Với mỗi $n \in \mathbb{N}^*$, xét tập:
> $$U_n = \{x \in K : g_n(x) < \varepsilon\} = g_n^{-1}((-\infty, \varepsilon)).$$
> 
> 1. **Tính chất mở của $U_n$:** Vì $g_n$ là hàm liên tục và khoảng $(-\infty, \varepsilon)$ là tập mở trong $\mathbb{R}$, nên tạo ảnh $U_n$ là một tập con mở trong $K$.
> 2. **Tính đơn điệu của dãy tập:** Do dãy số $\{g_n(x)\}$ giảm đơn điệu theo $n$, nếu $g_n(x) < \varepsilon$ thì $g_{n+1}(x) \le g_n(x) < \varepsilon$. Suy ra:
>    $$U_n \subseteq U_{n+1}, \quad \forall n \ge 1.$$
> 3. **Phủ toàn bộ không gian compact:** Với bất kỳ điểm $x \in K$, do $\lim_{n \to \infty} g_n(x) = 0 < \varepsilon$, tồn tại một chỉ số $n_x$ sao cho $g_{n_x}(x) < \varepsilon$, kéo theo $x \in U_{n_x}$. Do đó:
>    $$K = \bigcup_{n=1}^\infty U_n.$$
> 
> Họ các tập mở $\{U_n\}_{n=1}^\infty$ lập thành một phủ mở của không gian compact $K$. Theo tính chất compact, tồn tại một phủ con hữu hạn $\{U_{n_1}, U_{n_2}, \dots, U_{n_k}\}$.
> 
> Đặt $N = \max\{n_1, n_2, \dots, n_k\}$. Do tính lồng nhau $U_1 \subseteq U_2 \subseteq \dots \subseteq U_N$, ta có:
> $$K \subseteq \bigcup_{j=1}^k U_{n_j} = U_N.$$
> 
> Điều này có nghĩa là với mọi $x \in K$, $x \in U_N$, tức là $0 \le g_N(x) < \varepsilon$.
> Kết hợp với tính giảm đơn điệu của dãy, với mọi $n \ge N$ và mọi $x \in K$:
> $$0 \le g_n(x) \le g_N(x) < \varepsilon.$$
> Suy ra:
> $$\sup_{x \in K} |f_n(x) - f(x)| = \sup_{x \in K} g_n(x) \le \varepsilon, \quad \forall n \ge N.$$
> Vậy dãy $\{f_n\}$ hội tụ đều về $f$ trên $K$.

> [!thm] (Không gian Độ đo: Định lý Egorov)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ thỏa mãn **$\mu(D) < \infty$**.
> Cho các hàm đo được $f_n, f: D \to \mathbb{R}$ nhận giá trị hữu hạn hầu khắp nơi.
> Nếu $f_n \xrightarrow{\text{a.e.}} f$ trên $D$, thì với mọi $\varepsilon > 0$, tồn tại một tập đo được $A_\varepsilon \in \mathfrak{A}$ thỏa mãn $\mu(A_\varepsilon) < \varepsilon$ sao cho:
> $$f_n \xrightarrow{\text{đều}} f \quad \text{trên} \quad D \setminus A_\varepsilon.$$

> [!prf] Chứng minh Định lý Egorov
> Không mất tính tổng quát, giả sử $f_n(x) \to f(x)$ với mọi $x \in D$ (nếu chỉ đúng hầu khắp nơi, ta loại bỏ tập không đo được có độ đo $0$, không làm thay đổi các ước lượng độ đo bên dưới).
> 
> Với mỗi cặp số nguyên dương $k, m \in \mathbb{N}^*$, xét tập các điểm mà hàm $f_n$ dao động cách $f$ từ $\frac{1}{k}$ trở lên tại một bước $n \ge m$:
> $$E_{k, m} = \bigcup_{n=m}^\infty \left\{ x \in D : |f_n(x) - f(x)| \ge \frac{1}{k} \right\}.$$
> 
> 4. **Tính chất của $E_{k, m}$:**
>    - Các hàm $f_n, f$ đo được nên tập $\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{k}\} \in \mathfrak{A}$, do đó hợp đếm được $E_{k, m} \in \mathfrak{A}$.
>    - Cố định $k \in \mathbb{N}^*$, khi $m$ tăng thì số lượng phần tử trong phép hợp giảm đi, nên $\{E_{k, m}\}_{m=1}^\infty$ là một dãy tập giảm đơn điệu:
>      $$E_{k, m+1} \subseteq E_{k, m}, \quad \forall m \ge 1.$$
> 5. **Tính hội tụ về tập rỗng:**
>    Xét giao đếm được $\bigcap_{m=1}^\infty E_{k, m}$. Nếu $x \in \bigcap_{m=1}^\infty E_{k, m}$, thì với mọi $m \ge 1$, tồn tại $n \ge m$ sao cho $|f_n(x) - f(x)| \ge \frac{1}{k}$. Điều này mâu thuẫn với giả thiết $\lim_{n \to \infty} f_n(x) = f(x)$. 
>    Do đó:
>    $$\bigcap_{m=1}^\infty E_{k, m} = \emptyset.$$
> 6. **Liên tục của độ đo từ trên:**
>    Do $\mu(E_{k, 1}) \le \mu(D) < \infty$, theo tính chất liên tục của độ đo:
>    $$\lim_{m \to \infty} \mu(E_{k, m}) = \mu\left(\bigcap_{m=1}^\infty E_{k, m}\right) = \mu(\emptyset) = 0.$$
> 
> 7. **Xây dựng tập ngoại lai $A_\varepsilon$:**
>    Cố định $\varepsilon > 0$. Với mỗi $k \in \mathbb{N}^*$, do $\lim_{m \to \infty} \mu(E_{k, m}) = 0$, ta luôn chọn được một số nguyên dương $m_k \in \mathbb{N}^*$ đủ lớn sao cho:
>    $$\mu(E_{k, m_k}) < \frac{\varepsilon}{2^k}.$$
>    Đặt tập ngoại lai:
>    $$A_\varepsilon = \bigcup_{k=1}^\infty E_{k, m_k} \in \mathfrak{A}.$$
>    Độ đo của $A_\varepsilon$ thỏa mãn tính bán cộng đếm được:
>    $$\mu(A_\varepsilon) \le \sum_{k=1}^\infty \mu(E_{k, m_k}) < \sum_{k=1}^\infty \frac{\varepsilon}{2^k} = \varepsilon.$$
> 
> 8. **Kiểm tra sự hội tụ đều trên $D \setminus A_\varepsilon$:**
>    Lấy một số $\eta > 0$ bất kỳ. Chọn $k_0 \in \mathbb{N}^*$ đủ lớn sao cho $\frac{1}{k_0} < \eta$.
>    Nếu $x \in D \setminus A_\varepsilon$, thì $x \notin E_{k_0, m_{k_0}}$.
>    Theo định nghĩa của $E_{k_0, m_{k_0}}$, ta có:
>    $$x \notin \bigcup_{n=m_{k_0}}^\infty \left\{ t \in D : |f_n(t) - f(t)| \ge \frac{1}{k_0} \right\} \implies |f_n(x) - f(x)| < \frac{1}{k_0} < \eta, \quad \forall n \ge m_{k_0}.$$
>    Bất đẳng thức trên đúng với mọi $x \in D \setminus A_\varepsilon$ và chỉ số $m_{k_0}$ hoàn toàn không phụ thuộc vào $x$.
>    Suy ra:
>    $$\sup_{x \in D \setminus A_\varepsilon} |f_n(x) - f(x)| \le \frac{1}{k_0} < \eta, \quad \forall n \ge m_{k_0}.$$
>    Điều này chứng minh $f_n \xrightarrow{\text{đều}} f$ trên miền $D \setminus A_\varepsilon$.

> [!prp] (So sánh Đối ngẫu Dini - Egorov)
> - **Cấu trúc Không gian Nền:** Dini vận hành trên tính Compact (hữu hạn về phủ mở), trong khi Egorov vận hành trên $\mu(D) < \infty$ (hữu hạn về khối lượng).
> - **Đặc tính Kỹ thuật:**
>   - Dini: Đòi hỏi tính liên tục và đơn điệu khắt khe để thu được hội tụ đều hoàn toàn trên toàn bộ $K$.
>   - Egorov: Không cần hàm liên tục hay dãy đơn điệu; chỉ cần tính đo được để thu được hội tụ gần đều thông qua việc loại bỏ một tập ngoại lai $A_\varepsilon$ có độ đo bé tùy ý.

## 1. Cặp Định lý Phân tách: Heine–Borel vs. Bổ đề Phân hoạch Độ đo

Cặp này so sánh trực tiếp cách "bẻ nhỏ" một không gian hữu hạn để khống chế các tính chất cục bộ.

> [!thm] (Tô-pô: Định lý Heine–Borel / Tính Compact)
> Cho không gian metric $(K, d)$ compact. Khi đó từ mọi phủ mở tùy ý của $K$, luôn trích ra được một **phủ con hữu hạn**:
> $$K \subseteq \bigcup_{i=1}^n B(x_i, r_i).$$
> **Ý nghĩa:** Chuyển một tính chất cục bộ (đúng trên từng hình cầu bán kính nhỏ $r$) thành tính chất toàn cục trên toàn miền thông qua số hữu hạn mảnh $n < \infty$.

> [!thm] (Độ đo: Bổ đề Phân hoạch Không gian Đo Hữu hạn)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ không có nguyên tử thỏa mãn $\mu(D) < \infty$. 
> Khi đó với mọi $\delta > 0$, luôn tồn tại một **phân hoạch hữu hạn** các tập đo được rời nhau $D_1, D_2, \dots, D_k \in \mathfrak{A}$ sao cho:
> $$D = \bigcup_{i=1}^k D_i \quad \text{và} \quad \mu(D_i) < \delta, \quad \forall i = 1, \dots, k.$$
> **Ý nghĩa:** Chuyển tính chất tích phân trên các tập độ đo nhỏ (như UAC) thành đánh giá chặn trên toàn không gian $\int_D |f| \le \sum_{i=1}^k \int_{D_i} |f| < k \cdot 1 < \infty$.

> [!prp] (So sánh Bản chất)
> - **Heine–Borel:** Cắt không gian bằng **khoảng cách hình học** ($d(x, y) < r$) để khống chế độ dao động giá trị điểm.
> - **Phân hoạch Độ đo:** Cắt không gian bằng **dung lượng khối lượng** ($\mu(D_i) < \delta$) để khống chế tích phân.

## 2. Cặp Định lý Giao Lồng nhau: Cantor vs. Tính Liên tục của Độ đo

Cặp này so sánh cách thu hẹp một dãy tập giảm dần về điểm bất biến / tập rỗng.

> [!thm] (Metric: Định lý Giao Cantor)
> Cho không gian metric đầy đủ $(X, d)$ và dãy tập con đóng, khác rỗng, lồng nhau $F_1 \supseteq F_2 \supseteq F_3 \supseteq \dots$
> Nếu đường kính $\lim_{n \to \infty} \operatorname{diam}(F_n) = 0$, thì giao của chúng chứa **đúng một điểm duy nhất**:
> $$\bigcap_{n=1}^\infty F_n = \{x_0\}.$$

> [!thm] (Độ đo: Tính Liên tục từ Trên của Độ đo)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ và dãy tập đo được lồng nhau $E_1 \supseteq E_2 \supseteq E_3 \supseteq \dots$ với $\mu(E_1) < \infty$.
> Khi đó độ đo của tập giao đếm được bằng **giới hạn độ đo của dãy**:
> $$\mu\left(\bigcap_{n=1}^\infty E_n\right) = \lim_{n \to \infty} \mu(E_n).$$

> [!prp] (So sánh Bản chất)
> - **Cantor:** Ép kích thước hình học (đường kính metric $\operatorname{diam}(F_n) \to 0$) để bắt điểm hội tụ trong không gian đầy đủ.
> - **Liên tục Độ đo:** Ép kích thước thể tích ($\mu(E_n) \to 0$) để chứng minh phần khối lượng dư thừa biến mất hoàn toàn ở vô hạn.

## 3. Cặp Định lý Xấp xỉ Cơ bản: Stone–Weierstrass vs. Tính Trù mật của Hàm Đơn giản

Cặp này so sánh cách biểu diễn một đối tượng phức tạp thông qua các viên gạch cơ sở đơn giản nhất.

> [!thm] (Tô-pô: Định lý Stone–Weierstrass)
> Cho $K$ là không gian compact. Khi đó đại số các hàm đa thức (hoặc đại số phân tách điểm) là **trù mật** trong không gian các hàm liên tục $C(K, \mathbb{R})$ theo chuẩn đều $\|\cdot\|_\infty$:
> $$\forall f \in C(K), \forall \varepsilon > 0, \exists P \text{ (đa thức)} : \sup_{x \in K} |f(x) - P(x)| < \varepsilon.$$

> [!thm] (Độ đo: Định lý Xấp xỉ bằng Hàm Đơn giản)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$. Tập hợp các hàm đơn giản khả tích (kết hợp tuyến tính của các hàm chỉ thị $\sum_{i=1}^m c_i \mathbf{1}_{A_i}$) là **trù mật** trong $L^p(D, \mu)$ ($1 \le p < \infty$):
> $$\forall f \in L^p(D), \forall \varepsilon > 0, \exists \varphi \text{ (hàm đơn giản)} : \|f - \varphi\|_{L^p} < \varepsilon.$$

> [!prp] (So sánh Bản chất)
> - **Stone–Weierstrass:** Xấp xỉ hàm liên tục phức tạp bằng các hàm **trơn/đa thức** thông qua cấu trúc tô-pô.
> - **Xấp xỉ $L^p$:** Xấp xỉ hàm đo được bất kỳ bằng các hàm **bậc thang/hàm chỉ thị khối hộp** thông qua cấu trúc đại số tập hợp $\sigma$-đại số.
