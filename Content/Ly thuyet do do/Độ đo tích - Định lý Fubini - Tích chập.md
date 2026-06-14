# I. Độ Đo Tích

## 1. Xây dựng đại số sinh và $\sigma$-đại số tích

> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1) 
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> 
> - **Chứa toàn phần:** $X \in \mathcal{F},, Y \in \mathcal{G}$ nên $X \times Y \in \mathcal{R}$.
> - **Đóng với phần bù:** $(A \times B)^c = (A^c \times Y) \cup (A \times B^c)$ là hợp rời nhau của hai hình chữ nhật đo được, nên thuộc $\mathcal{R}$. Phần bù của hợp hữu hạn cũng thuộc $\mathcal{R}$ nhờ tính phân phối.
> - **Đóng với hợp hữu hạn:** $E_1 \cup E_2 = E_1 \cup (E_2 \cap E_1^c)$. Vì $\mathcal{R}$ đóng với phần bù và giao (giao của hai phần tử trong $\mathcal{R}$ phân rã được thành các hình chữ nhật rời nhau), nên hợp này thuộc $\mathcal{R}$.

> [!def] ($\sigma$-đại số tích) 
> $\mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{R}$. Không gian tích là $(X \times Y, \mathcal{F} \otimes \mathcal{G})$.

## 2. Tập mặt cắt (Tiền đề Fubini)

> [!def] (Không gian $\sigma$-hữu hạn)
> $(X, \mathcal{A}, \mu)$ là $\sigma$-hữu hạn nếu tồn tại ${X_n} \subset \mathcal{A}$ sao cho $X = \bigcup_{n=1}^\infty X_n$ và $\mu(X_n) < \infty$ với mọi $n$. Tương đương, tồn tại dãy tăng $E_n \uparrow X$ với $\mu(E_n) < \infty$.
> 
> _Ví dụ:_ $(\mathbb{R}, \mu_L)$ là $\sigma$-hữu hạn vì $\mathbb{R} = \bigcup_{n=1}^\infty [-n,n]$ với $\mu_L([-n,n]) = 2n < \infty$.

> [!thm] (Mệnh đề 2 — Tiền đề Fubini) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. $E_x := {y \in Y : (x,y) \in E} \in \mathcal{G}$ và $E^y := {x \in X : (x,y) \in E} \in \mathcal{F}$.
> 2. Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được, $y \mapsto \mu(E^y)$ là $\nu$-đo được, và: $$\int_X \nu(E_x), d\mu = \int_Y \mu(E^y), d\nu \tag{1}$$

> [!def] (Lớp đơn điệu) 
> $\mathcal{M}$ là lớp đơn điệu nếu: $E_n \uparrow E \Rightarrow E \in \mathcal{M}$ và $F_n \downarrow F \Rightarrow F \in \mathcal{M}$.

> [!thm] (Định lý Halmos) 
> Nếu $\mathcal{M}$ là lớp đơn điệu chứa đại số $\mathcal{R}$, thì $\sigma(\mathcal{R}) \subset \mathcal{M}$.

> [!obs] (Sơ đồ chứng minh Mệnh đề 2)
> 
> - **B1:** Kiểm tra trực tiếp cho $E \in \mathcal{R}$.
> - **B2.1:** Đặt $\mathcal{E} = {E \in \sigma(\mathcal{R}) : \text{thỏa 1)}}$. Chứng minh $\mathcal{E}$ là $\sigma$-đại số $\Rightarrow \sigma(\mathcal{R}) \subset \mathcal{E}$.
> - **B2.2:** Đặt $\mathcal{M} = {E \in \sigma(\mathcal{R}) : \text{thỏa 2)}}$. Chứng minh $\mathcal{M}$ là lớp đơn điệu, dùng Halmos $\Rightarrow \sigma(\mathcal{R}) \subset \mathcal{M}$.

> [!prf] 
> **B1: Xét $E = \bigcup_{i=1}^n A_i \times B_i \in \mathcal{R}$**
> 
> Tập mặt cắt: $(A_i \times B_i)_x = B_i \cdot \chi_{A_i}(x)$, nên $E_x = \bigcup_{i=1}^n (A_i \times B_i)_x \in \mathcal{G}$. Tương tự $E^y \in \mathcal{F}$. Tính chất 1) thỏa.
> 
> Độ đo mặt cắt: $\nu(E_x) = \sum_{i=1}^n \chi_{A_i}(x)\nu(B_i)$, là tổ hợp tuyến tính của các hàm đo được, nên $\mu$-đo được. Lấy tích phân: $$\int_X \nu(E_x), d\mu = \sum_{i=1}^n \mu(A_i)\nu(B_i) = \int_Y \mu(E^y), d\nu$$ Tính chất 2) thỏa.
> 
> **B2.1: Chứng minh $\mathcal{E}$ là $\sigma$-đại số**
> 
> - $X \times Y \in \mathcal{E}$ hiển nhiên.
> - Phần bù: $(E^c)_x = (E_x)^c \in \mathcal{G}$ và $(E^c)^y = (E^y)^c \in \mathcal{F}$ (do $\mathcal{F}, \mathcal{G}$ là $\sigma$-đại số) $\Rightarrow E^c \in \mathcal{E}$.
> - Hợp đếm được: $(\bigcup_n E_n)_x = \bigcup_n (E_n)_x \in \mathcal{G}$ $\Rightarrow \bigcup_n E_n \in \mathcal{E}$.
> 
> Từ B1 có $\mathcal{R} \subset \mathcal{E}$, và $\mathcal{E}$ là $\sigma$-đại số, nên $\sigma(\mathcal{R}) \subset \mathcal{E}$. Tính chất 1) đúng với mọi $E \in \sigma(\mathcal{R})$.
> 
> **B2.2: Chứng minh $\mathcal{M}$ là lớp đơn điệu**
> 
> _Trường hợp A: $\mu, \nu$ hữu hạn_
> 
> - **$E_n \uparrow E$:** $(E_n)_x \uparrow E_x$ nên $\nu((E_n)_x) \uparrow \nu(E_x)$. Giới hạn tăng của hàm đo được là đo được, nên $x \mapsto \nu(E_x)$ là $\mu$-đo được. Áp dụng MCT: $$\int_X \nu(E_x), d\mu = \lim_n \int_X \nu((E_n)_x), d\mu = \lim_n \int_Y \mu((E_n)^y), d\nu = \int_Y \mu(E^y), d\nu$$ Suy ra $E \in \mathcal{M}$.
>     
> - **$E_n \downarrow E$:** Tương tự, $\nu((E_n)_x) \downarrow \nu(E_x)$. Vì $\mu, \nu$ hữu hạn nên $\nu((E_n)_x) \le \nu(Y) < \infty$, đủ điều kiện áp dụng BCT. Lập luận tương tự cho ra $E \in \mathcal{M}$.
>     
> 
> _Trường hợp B: $\mu, \nu$ là $\sigma$-hữu hạn_
> 
> Vì các không gian $\sigma$-hữu hạn, tồn tại $X_k \uparrow X$, $Y_k \uparrow Y$ với $\mu(X_k), \nu(Y_k) < \infty$.
> 
> - **Bước i — Độ đo thu hẹp:** Định nghĩa $\mu_k(A) = \mu(X_k \cap A)$ và $\nu_k(B) = \nu(Y_k \cap B)$. Các độ đo này hữu hạn, nên Trường hợp A áp dụng được, cho đẳng thức trên "khối nhỏ": $$\int_X \nu_k(E_x), d\mu_k = \int_Y \mu_k(E^y), d\nu_k \tag{$*$}$$
>     
> - **Bước ii — Viết lại qua độ đo gốc:** $(*)$ tương đương: $$\int_X \nu(Y_k \cap E_x)\cdot\chi_{X_k}(x), d\mu = \int_Y \mu(X_k \cap E^y)\cdot\chi_{Y_k}(y), d\nu$$ Dãy hàm $f_k(x) = \nu(Y_k \cap E_x)\cdot\chi_{X_k}(x)$ là $\mu$-đo được với mọi $k$ (từ Trường hợp A).
>     
> - **Bước iii — Lấy giới hạn qua MCT:** Khi $k \to \infty$: $Y_k \uparrow Y$ nên $\nu(Y_k \cap E_x) \uparrow \nu(E_x)$; $\chi_{X_k}(x) \uparrow 1$. Do đó $f_k(x) \uparrow \nu(E_x)$, và giới hạn tăng của hàm đo được là đo được. Áp dụng MCT cho cả hai vế: $$\int_X \nu(E_x), d\mu = \lim_k \int_X f_k, d\mu \stackrel{(*)}{=} \lim_k \int_Y g_k, d\nu = \int_Y \mu(E^y), d\nu$$ (với $g_k(y) = \mu(X_k \cap E^y)\cdot\chi_{Y_k}(y) \uparrow \mu(E^y)$ tương tự). Suy ra $E \in \mathcal{M}$.
>     
> 
> Vậy $\mathcal{M}$ là lớp đơn điệu. Từ B1 có $\mathcal{R} \subset \mathcal{M}$, theo Halmos $\sigma(\mathcal{R}) \subset \mathcal{M}$. Mệnh đề được chứng minh hoàn tất.

## 3. Độ đo tích

> [!thm] (Định lý - Định nghĩa Độ đo tích) 
> Ánh xạ $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]$ định nghĩa bởi: $$(\mu \times \nu)(E) = \int_X \nu(E_x), d\mu = \int_Y \mu(E^y), d\nu$$ là một độ đo $\sigma$-hữu hạn trên $(X \times Y, \mathcal{F} \otimes \mathcal{G})$, và là độ đo duy nhất thỏa $(\mu \times \nu)(A \times B) = \mu(A)\nu(B)$ với mọi $A \in \mathcal{F},, B \in \mathcal{G}$.

> [!prf] 
> **Định nghĩa tốt:** Theo Mệnh đề 2, hai tích phân tồn tại trong $[0,\infty]$ và bằng nhau, nên $(\mu \times \nu)(E)$ xác định duy nhất.
> 
> **Tính độ đo:**
> 
> - $(\mu \times \nu)(\emptyset) = \int_X \nu(\emptyset), d\mu = 0$.
> - $\sigma$-cộng tính: Với $E = \bigsqcup_n E_n$, các mặt cắt $(E_n)_x$ rời nhau nên $\nu(E_x) = \sum_n \nu((E_n)_x)$. Áp dụng MCT: $$(\mu \times \nu)(E) = \int_X \sum_n \nu((E_n)_x), d\mu = \sum_n \int_X \nu((E_n)_x), d\mu = \sum_n (\mu \times \nu)(E_n)$$
> 
> **$\sigma$-hữu hạn:** $X_n \times Y_n \uparrow X \times Y$ và $(\mu \times \nu)(X_n \times Y_n) = \mu(X_n)\nu(Y_n) < \infty$.
> 
> **Duy nhất:** Mọi độ đo $\lambda$ thỏa $\lambda(A \times B) = \mu(A)\nu(B)$ trùng với $\mu \times \nu$ trên $\mathcal{R}$. Cả hai đều $\sigma$-hữu hạn, nên theo Định lý mở rộng Carathéodory, chúng trùng nhau trên $\sigma(\mathcal{R}) = \mathcal{F} \otimes \mathcal{G}$.

# II. Định Lý Tonelli – Fubini và ứng dụng

## 1. Định lý Tonelli (Hàm đo được không âm)

> [!thm] (Định lý Tonelli) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $F: X \times Y \to [0,\infty]$ đo được tích. Khi đó:
> 
> 1. Với mọi $x \in X$: $y \mapsto F(x,y)$ là $\nu$-đo được. Với mọi $y \in Y$: $x \mapsto F(x,y)$ là $\mu$-đo được.
> 2. Hàm $x \mapsto \int_Y F(x,y), d\nu$ là $\mu$-đo được; $y \mapsto \int_X F(x,y), d\mu$ là $\nu$-đo được.
> 3. $$\int_{X \times Y} F, d(\mu \times \nu) = \int_X \left(\int_Y F(x,y), d\nu\right) d\mu = \int_Y \left(\int_X F(x,y), d\mu\right) d\nu$$

> [!obs] (Sơ đồ chứng minh) 
> **B1:** $F = \chi_E$ (hàm đặc trưng, dùng Mệnh đề 2) $\longrightarrow$ **B2:** $F$ là hàm đơn giản không âm (tuyến tính) $\longrightarrow$ **B3:** $F \ge 0$ tổng quát (xấp xỉ $s_n \uparrow F$, dùng MCT).

> [!prf] 
> **B1: $F = \chi_E$, $E \in \mathcal{F} \otimes \mathcal{G}$**
> 
> Nhận xét: $F(x, \cdot) = \chi_{E_x}$ và $\int_Y \chi_{E_x}, d\nu = \nu(E_x)$. Theo Mệnh đề 2, $E_x \in \mathcal{G}$ (tính chất 1) và $x \mapsto \nu(E_x)$ là $\mu$-đo được (tính chất 2). Đẳng thức 3) chính là $(1)$ của Mệnh đề 2.
> 
> **B2: $s = \sum_{i=1}^m c_i \chi_{E_i}$, $c_i \ge 0$, $E_i \in \mathcal{F} \otimes \mathcal{G}$**
> 
> Do tính tuyến tính của tích phân và B1, ba tính chất lần lượt truyền sang $s$ bằng phép cộng.
> 
> **B3: $F \ge 0$ tổng quát, $s_n \uparrow F$**
> 
> - _Tính chất 1):_ Cố định $x$, $s_n(x,\cdot) \uparrow F(x,\cdot)$. Giới hạn tăng của hàm đo được là đo được $\Rightarrow y \mapsto F(x,y)$ là $\nu$-đo được.
> - _Tính chất 2) và 3):_ Đặt $f_n(x) = \int_Y s_n(x,y), d\nu \uparrow g(x) = \int_Y F(x,y), d\nu$ (MCT trên $Y$). Từng $f_n$ đo được (B2) nên giới hạn $g$ là $\mu$-đo được. Áp dụng MCT trên $X$ rồi trên $X \times Y$: $$\int_X g, d\mu = \lim_n \int_X f_n, d\mu = \lim_n \int_{X\times Y} s_n, d(\mu\times\nu) = \int_{X\times Y} F, d(\mu\times\nu)$$ Trường hợp đổi thứ tự tích phân lặp chứng minh tương tự. Định lý Tonelli được chứng minh hoàn tất.

## 2. Định lý Fubini (Hàm khả tích)

> [!thm] (Định lý Fubini) 
> Cho $F \in \mathcal{L}^1(\mu \times \nu)$. Khi đó:
> 
> 1. Với $\mu$-a.e $x$: $y \mapsto F(x,y)$ khả tích trên $Y$. Với $\nu$-a.e $y$: $x \mapsto F(x,y)$ khả tích trên $X$.
> 2. Hàm $x \mapsto \int_Y F(x,y), d\nu$ khả tích trên $X$; $y \mapsto \int_X F(x,y), d\mu$ khả tích trên $Y$.
> 3. $$\int_{X \times Y} F, d(\mu \times \nu) = \int_X \left(\int_Y F(x,y), d\nu\right) d\mu = \int_Y \left(\int_X F(x,y), d\mu\right) d\nu$$

> [!prf] 
> **B1: Phân rã $F = F^+ - F^-$**
> 
> Vì $F \in \mathcal{L}^1(\mu \times \nu)$, ta có $\int |F|, d(\mu\times\nu) < \infty$. Do $F^\pm \le |F|$, cả $F^+$ và $F^-$ đều không âm, đo được, và có tích phân hữu hạn. Định lý Tonelli áp dụng được cho cả hai.
> 
> **B2: Tính chất 1)**
> 
> Áp dụng Tonelli cho $F^+$: $\int_X \left(\int_Y F^+, d\nu\right) d\mu < \infty$. Suy ra $\int_Y F^+(x,y), d\nu < \infty$ với $\mu$-a.ex$, tức là $y \mapsto F^+(x,y)$ khả tích a.e. Lập luận tương tự cho $F^-$. Do đó $y \mapsto F(x,y) = F^+(x,y) - F^-(x,y)$ khả tích với $\mu$-a.e $x$.
> 
> **B3: Tính chất 2) và 3)**
> 
> Hai hàm $x \mapsto \int_Y F^\pm(x,y), d\nu$ đều khả tích trên $X$ (tích phân của chúng hữu hạn). Bằng tuyến tính: $$x \mapsto \int_Y F, d\nu = \int_Y F^+, d\nu - \int_Y F^-, d\nu$$ là hiệu của hai hàm khả tích, nên khả tích. Tính chất 2) thỏa.
> 
> Lấy tích phân và dùng Tonelli cho $F^\pm$: $$\int_X\left(\int_Y F, d\nu\right) d\mu = \int_{X\times Y} F^+, d(\mu\times\nu) - \int_{X\times Y} F^-, d(\mu\times\nu) = \int_{X\times Y} F, d(\mu\times\nu)$$ Trường hợp đổi thứ tự tích phân lặp chứng minh tương tự. Định lý Fubini được chứng minh hoàn tất.

## 3. Tích chập (Convolution)

> [!def] (Tích chập) 
> Với $f, g \in \mathcal{L}^1(\mathbb{R}^N)$, tích chập được định nghĩa bởi: $$(f * g)(x) = \int_{\mathbb{R}^N} f(x-y)g(y), dy$$

> [!thm] (Tính chất) 
> Với a.e $x \in \mathbb{R}^N$, hàm $y \mapsto f(x-y)g(y)$ khả tích, và $(f*g) \in \mathcal{L}^1(\mathbb{R}^N)$.

> [!prf] 
> Đặt $F(x,y) = f(x-y)g(y)$. Áp dụng Tonelli cho $|F|$: $$\iint |f(x-y)g(y)|, dx, dy = \int_{\mathbb{R}^N} |g(y)| \left(\int_{\mathbb{R}^N} |f(x-y)|, dx\right) dy$$ Theo tính bất biến tịnh tiến của độ đo Lebesgue: $\int |f(x-y)|, dx = |f|_{\mathcal{L}^1}$. Do đó: $$\iint |F|, dx, dy = |f|_{\mathcal{L}^1} \cdot |g|_{\mathcal{L}^1} < \infty$$ Suy ra $F \in \mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$. Áp dụng Fubini: với a.e $x$, lát cắt $y \mapsto f(x-y)g(y)$ khả tích (Tính chất 1); và hàm $(f*g)(x) = \int F(x,\cdot), dy$ khả tích trên $\mathbb{R}^N$ (Tính chất 2).