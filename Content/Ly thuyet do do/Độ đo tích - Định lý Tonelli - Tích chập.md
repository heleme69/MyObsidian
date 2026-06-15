# I. Độ Đo Tích

## 1. Xây dựng đại số sinh và $\sigma$-đại số tích

> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1) 
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> 
> **Chứa toàn phần:** $X \in \mathcal{F},, Y \in \mathcal{G}$ nên $X \times Y \in \mathcal{R}$.
> **Đóng với phần bù:** $(A \times B)^c = (A^c \times Y) \cup (A \times B^c)$ là hợp rời nhau của hai hình chữ nhật đo được, nên thuộc $\mathcal{R}$. Phần bù của hợp hữu hạn cũng thuộc $\mathcal{R}$ nhờ tính phân phối.
> **Đóng với hợp hữu hạn:** $E_1 \cup E_2 = E_1 \cup (E_2 \cap E_1^c)$. Vì $\mathcal{R}$ đóng với phần bù và giao (giao của hai phần tử trong $\mathcal{R}$ phân rã được thành các hình chữ nhật rời nhau), nên hợp này thuộc $\mathcal{R}$.

> [!def] ($\sigma$-đại số tích) 
> $\mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{R}$. Không gian tích là $(X \times Y, \mathcal{F} \otimes \mathcal{G})$.

## 2. Tập mặt cắt 

> [!def] (Không gian $\sigma$-hữu hạn)
> $(X, \mathcal{A}, \mu)$ là $\sigma$-hữu hạn nếu tồn tại ${X_n} \subset \mathcal{A}$ sao cho $X = \bigcup_{n=1}^\infty X_n$ và $\mu(X_n) < \infty$ với mọi $n$. Tương đương, tồn tại dãy tăng $E_n \uparrow X$ với $\mu(E_n) < \infty$.
> 
> _Ví dụ:_ $(\mathbb{R}, \mu_L)$ là $\sigma$-hữu hạn vì $\mathbb{R} = \bigcup_{n=1}^\infty [-n,n]$ với $\mu_L([-n,n]) = 2n < \infty$.

> [!thm] (Mệnh đề 2) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. $E_x := {y \in Y : (x,y) \in E} \in \mathcal{G}$ và $E^y := {x \in X : (x,y) \in E} \in \mathcal{F}$.
> 2. Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được, $y \mapsto \mu(E^y)$ là $\nu$-đo được, và: $$\int_X \nu(E_x), d\mu = \int_Y \mu(E^y), d\nu \tag{1}$$

> [!def] (Lớp đơn điệu) 
> $\mathcal{M}$ là lớp đơn điệu nếu: $E_n \uparrow E \implies E \in \mathcal{M}$ và $F_n \downarrow F \implies F \in \mathcal{M}$.

> [!thm] (Định lý Halmos) 
> Nếu $\mathcal{M}$ là lớp đơn điệu chứa đại số $\mathcal{R}$, thì $\sigma(\mathcal{R}) \subset \mathcal{M}$.

Dựa vào công cụ trên, ta có sơ đồ chiến lược chứng minh cho Mệnh đề 2 như sau:

> [!obs] (Sơ đồ chứng minh Mệnh đề 2)
> 
> **Bước 1.** Kiểm tra trực tiếp cho $E \in \mathcal{R}$.
> 
> Mở rộng lên không gian $E \in \sigma(\mathcal{R})$ bằng cách lập các "tập hợp tốt":
> 
> **Bước 2.1.** Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 1)}\}$. Đi chứng minh $\mathcal{E}$ là một $\sigma$-đại số. Kết hợp với $\mathcal{R} \subset \mathcal{E}$, ta suy ra $\mathcal{E} = \sigma(\mathcal{R})$.
> 
> **Bước 2.2.** Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 2)}\}$. Đi chứng minh $\mathcal{M}$ là một lớp đơn điệu. Kết hợp với Định lý Halmos, ta suy ra $\mathcal{M} = \sigma(\mathcal{R})$.

**Giải thích:**
Thay vì đi kiểm tra từng tập hợp $E$ phức tạp, ta gom tất cả các tập thỏa mãn tính chất cần chứng minh vào một lớp $\mathcal{E}$ (hoặc $\mathcal{M}$). Bằng cách dùng Bước 1 để chứng minh lõi $\mathcal{R}$ nằm trong các lớp này, việc còn lại chỉ là chứng minh cấu trúc của $\mathcal{E}$ là một $\sigma$-đại số (hoặc $\mathcal{M}$ là lớp đơn điệu). Vì $\sigma(\mathcal{R})$ là cấu trúc nhỏ nhất chứa $\mathcal{R}$, sự bao hàm $\sigma(\mathcal{R}) \subset \mathcal{E}$ và $\sigma(\mathcal{R}) \subset \mathcal{M}$ sẽ tự động có.

> [!prf] 
> **Bước 1.** Xét $E = \bigcup_{i=1}^n A_i \times B_i \in \mathcal{R}$
> 
> Tập mặt cắt: $(A_i \times B_i)_x = B_i \cdot \chi_{A_i}(x)$, nên $E_x = \bigcup_{i=1}^n (A_i \times B_i)_x \in \mathcal{G}$. Tương tự $E^y \in \mathcal{F}$. Tính chất 1) thỏa.
> 
> Độ đo mặt cắt: $\nu(E_x) = \nu\left(\bigcup_{i=1}^n (A_i \times B_i)_x\right) = \sum_{i=1}^n \nu((A_i \times B_i)_x) = \sum_{i=1}^n \chi_{A_i}(x)\nu(B_i)$, là tổ hợp tuyến tính của các hàm đo được, nên $\mu$-đo được. Lấy tích phân: $$\int_X \nu(E_x), d\mu = \sum_{i=1}^n \mu(A_i)\nu(B_i) = \int_Y \mu(E^y), d\nu$$ Tính chất 2) thỏa.
> 
> **Bước 2.1.** Chứng minh $\mathcal{E}$ là $\sigma$-đại số
> 
> - $X \times Y \in \mathcal{E}$ hiển nhiên.
> - Phần bù: $(E^c)_x = (E_x)^c \in \mathcal{G}$ và $(E^c)^y = (E^y)^c \in \mathcal{F}$ (do $\mathcal{F}, \mathcal{G}$ là $\sigma$-đại số) $\implies E^c \in \mathcal{E}$.
> - Hợp đếm được: $(\bigcup_n E_n)_x = \bigcup_n (E_n)_x \in \mathcal{G}$ $\implies \bigcup_n E_n \in \mathcal{E}$.
> 
> Từ B1 có $\mathcal{R} \subset \mathcal{E}$, và $\mathcal{E}$ là $\sigma$-đại số, nên $\sigma(\mathcal{R}) \subset \mathcal{E}$. Tính chất 1) đúng với mọi $E \in \sigma(\mathcal{R})$.
> 
> **Bước 2.2.** Chứng minh $\mathcal{M}$ là lớp đơn điệu
> 
> _Trường hợp A: $\mu, \nu$ hữu hạn_
> 
> - i. $E_n \uparrow E$: $(E_n)_x \uparrow E_x$ nên $\nu((E_n)_x) \uparrow \nu(E_x)$. Giới hạn tăng của hàm đo được là đo được, nên $x \mapsto \nu(E_x)$ là $\mu$-đo được. Áp dụng MCT: $$\int_X \nu(E_x), d\mu = \lim_n \int_X \nu((E_n)_x), d\mu = \lim_n \int_Y \mu((E_n)^y), d\nu = \int_Y \mu(E^y), d\nu$$ Suy ra $E \in \mathcal{M}$.
>     
> - ii. $E_n \downarrow E$: Tương tự, $\nu((E_n)_x) \downarrow \nu(E_x)$. Vì $\mu, \nu$ hữu hạn nên $\nu((E_n)_x) \le \nu(Y) < \infty$, đủ điều kiện áp dụng BCT. Lập luận tương tự cho ra $E \in \mathcal{M}$.
>     
> 
> _Trường hợp B: $\mu, \nu$ là $\sigma$-hữu hạn_
> 
> Vì các không gian $\sigma$-hữu hạn, tồn tại $X_k \uparrow X$, $Y_k \uparrow Y$ với $\mu(X_k), \nu(Y_k) < \infty$.
> 
> - i. Độ đo thu hẹp: Định nghĩa $\mu_k(A) = \mu(X_k \cap A)$ và $\nu_k(B) = \nu(Y_k \cap B)$. Các độ đo này hữu hạn, nên Trường hợp A áp dụng được, cho đẳng thức trên "khối nhỏ": $$\int_X \nu_k(E_x), d\mu_k = \int_Y \mu_k(E^y), d\nu_k \tag{$*$}$$
>     
> - ii. Viết lại qua độ đo gốc: $(*)$ tương đương: $$\int_X \nu(Y_k \cap E_x)\cdot\chi_{X_k}(x), d\mu = \int_Y \mu(X_k \cap E^y)\cdot\chi_{Y_k}(y), d\nu$$ Dãy hàm $f_k(x) = \nu(Y_k \cap E_x)\cdot\chi_{X_k}(x)$ là $\mu$-đo được với mọi $k$ (từ Trường hợp A).
>     
> - iii. Lấy giới hạn qua MCT: Khi $k \to \infty$: $Y_k \uparrow Y$ nên $\nu(Y_k \cap E_x) \uparrow \nu(E_x)$; $\chi_{X_k}(x) \uparrow 1$. Do đó $f_k(x) \uparrow \nu(E_x)$, và giới hạn tăng của hàm đo được là đo được. Áp dụng MCT cho cả hai vế: $$\int_X \nu(E_x), d\mu = \lim_k \int_X f_k, d\mu \stackrel{(*)}{=} \lim_k \int_Y g_k, d\nu = \int_Y \mu(E^y), d\nu$$ (với $g_k(y) = \mu(X_k \cap E^y)\cdot\chi_{Y_k}(y) \uparrow \mu(E^y)$ tương tự). Suy ra $E \in \mathcal{M}$.
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
> - $(\mu \times \nu)(\emptyset) = \int_X \nu(\emptyset), d\mu = 0$.
> - $\sigma$-cộng tính: Với $E = \bigsqcup_n E_n$, các mặt cắt $(E_n)_x$ rời nhau nên $\nu(E_x) = \sum_n \nu((E_n)_x)$. Áp dụng MCT: $$(\mu \times \nu)(E) = \int_X \sum_n \nu((E_n)_x), d\mu = \sum_n \int_X \nu((E_n)_x), d\mu = \sum_n (\mu \times \nu)(E_n)$$
> 
> **Tính $\sigma$-hữu hạn:** $X_n \times Y_n \uparrow X \times Y$ và $(\mu \times \nu)(X_n \times Y_n) = \mu(X_n)\nu(Y_n) < \infty$.
> 
> **Tính duy nhất:** Mọi độ đo $\lambda$ thỏa $\lambda(A \times B) = \mu(A)\nu(B)$ trùng với $\mu \times \nu$ trên $\mathcal{R}$. Cả hai đều $\sigma$-hữu hạn, nên theo Định lý mở rộng Carathéodory, chúng trùng nhau trên $\sigma(\mathcal{R}) = \mathcal{F} \otimes \mathcal{G}$.

# II. Định Lý Tonelli – Fubini và ứng dụng

## 1. Định lý Tonelli (Hàm đo được không âm)

> [!thm] (Định lý Tonelli) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $F: X \times Y \to [0,\infty]$ đo được tích. Khi đó:
> 
> 1. Với mọi $x \in X$: $y \mapsto F(x,y)$ là $\nu$-đo được. Với mọi $y \in Y$: $x \mapsto F(x,y)$ là $\mu$-đo được.
> 2. Hàm $x \mapsto \int_Y F(x,y), d\nu$ là $\mu$-đo được; $y \mapsto \int_X F(x,y), d\mu$ là $\nu$-đo được.
> 3. $$\int_{X \times Y} F, d(\mu \times \nu) = \int_X \left(\int_Y F(x,y), d\nu\right) d\mu = \int_Y \left(\int_X F(x,y), d\mu\right) d\nu$$

> [!obs] (Sơ đồ chứng minh) 
> **Bước 1.** $F = \chi_E$ (hàm đặc trưng, dùng Mệnh đề 2) $\longrightarrow$ **Bước 2.** $F$ là hàm đơn giản không âm (tuyến tính) $\longrightarrow$ **Bước 3.** $F \ge 0$ tổng quát (xấp xỉ $s_n \uparrow F$, dùng MCT).

> [!prf] 
> **Bước 1.** $F = \chi_E$, $E \in \mathcal{F} \otimes \mathcal{G}$
> 
> Nhận xét: $F(x, \cdot) = \chi_{E_x}$ và $\int_Y \chi_{E_x}, d\nu = \nu(E_x)$. Theo Mệnh đề 2, $E_x \in \mathcal{G}$ (tính chất 1) và $x \mapsto \nu(E_x)$ là $\mu$-đo được (tính chất 2). Đẳng thức 3) chính là $(1)$ của Mệnh đề 2.
> 
> **Bước 2.** $s = \sum_{i=1}^m c_i \chi_{E_i}$, $c_i \ge 0$, $E_i \in \mathcal{F} \otimes \mathcal{G}$
> 
> Do tính tuyến tính của tích phân và B1, ba tính chất lần lượt truyền sang $s$ bằng phép cộng.
> 
> **Bước 3.** $F \ge 0$ tổng quát, $s_n \uparrow F$
> - _Tính chất 1):_ Cố định $x$, $s_n(x,\cdot) \uparrow F(x,\cdot)$. Giới hạn tăng của hàm đo được là đo được $\implies y \mapsto F(x,y)$ là $\nu$-đo được.
> - _Tính chất 2) và 3):_ Đặt $f_n(x) = \int_Y s_n(x,y), d\nu \uparrow g(x) = \int_Y F(x,y), d\nu$ (MCT trên $Y$). Từng $f_n$ đo được (B2) nên giới hạn $g$ là $\mu$-đo được. Áp dụng MCT trên $X$ rồi trên $X \times Y$: $$\int_X g, d\mu = \lim_{n \to \infty} \int_X f_n, d\mu = \lim_{n \to \infty} \int_{X\times Y} s_n, d(\mu\times\nu) = \int_{X\times Y} F, d(\mu\times\nu)$$ Trường hợp đổi thứ tự tích phân lặp chứng minh tương tự. Định lý Tonelli được chứng minh hoàn tất.

> [!exm] (Áp dụng tính giá trị tích phân)
> Chứng minh rằng hàm số $f(x) = \frac{x}{e^x - 1}$ khả tích Lebesgue trên khoảng $(0, \infty)$ và tính giá trị chính xác của tích phân:
> $$I = \int_{(0, \infty)} \frac{x}{e^x - 1} \, d\mu_L$$

> [!ans] 
> Nhận thấy với mọi $x \in (0, \infty)$, ta có $x > 0$ và $e^x > 1 \implies e^x - 1 > 0$. Do đó, hàm số $f(x)$ luôn liên tục và không âm trên miền xác định. 
> 
>Chia cả tử và mẫu cho số hạng $e^x$:
> $$f(x) = \frac{x \cdot e^{-x}}{(e^x - 1) \cdot e^{-x}} = \frac{x e^{-x}}{1 - e^{-x}}$$
> 
> Xét $y = e^{-x}$. Vì $x > 0 \implies 0 < e^{-x} < 1$, nhận thấy mẫu số thỏa mãn chuỗi cấp số nhân lùi vô hạn. Ta khai triển:
> $$\frac{1}{1 - e^{-x}} = \sum_{n=0}^\infty (e^{-x})^n = \sum_{n=0}^\infty e^{-nx}$$
> 
> Nhân $x e^{-x}$ ở tử số vào bên trong tổng:
> $$f(x) = x e^{-x} \sum_{n=0}^\infty e^{-nx} = \sum_{n=0}^\infty x e^{-(n+1)x} = \sum_{n=1}^\infty x e^{-nx}$$
> 
> Vì mọi số hạng trong tổng đều không âm trên $(0, \infty)$, áp dụng Định lý Tonelli, ta hoán đổi dấu tích phân và tổng chuỗi vô hạn (không cần kiểm tra sự khả tích trước):
> $$I = \int_0^\infty \left( \sum_{n=1}^\infty x e^{-nx} \right) dx \stackrel{\text{Tonelli}}{=} \sum_{n=1}^\infty \int_0^\infty x e^{-nx} \, dx$$
> 
> Ta tính $K = \int_0^\infty x e^{-nx} \, dx$ bằng tích phân từng phần. Đặt $u = x \implies du = dx$ và $dv = e^{-nx}dx \implies v = -\frac{1}{n}e^{-nx}$:
> $$K = \left[ -\frac{x}{n}e^{-nx} \right]_0^\infty + \frac{1}{n} \int_0^\infty e^{-nx} \, dx$$
> 
> Giới hạn $\lim_{x\to\infty} \frac{x}{n e^{nx}} = 0$ do hàm mũ tăng nhanh hơn hàm đa thức, và giá trị tại cận 0 bằng 0. Ta có:
> $$K = 0 + \frac{1}{n} \left[ -\frac{1}{n}e^{-nx} \right]_0^\infty = \frac{1}{n^2}$$
> 
> Thay giá trị của tích phân vào tổng ban đầu, ta được:
> $$I = \sum_{n=1}^\infty \frac{1}{n^2}$$
> 
> Ta được chuỗi p-series với $p=2$, tổng vô hạn này hội tụ:
> $$I = \frac{\pi^2}{6} < \infty$$
> 
> Vì tích phân Tonelli của hàm không âm ra giá trị hữu hạn, ta kết luận: Hàm số $f(x) = \frac{x}{e^x - 1}$ khả tích Lebesgue trên $(0, \infty)$ (tức là $f \in L^1$), và ước lượng chính xác của tích phân bằng $\frac{\pi^2}{6}$.

> [!prob]  (Prob 9.50)
> Cho $f$ là hàm đo được Lebesgue và nhận giá trị thực mở rộng trên $(0, \infty)$, cho bởi: 
> $$
> f(x) = \frac{1}{1 + x^2} \ln(1 - e^{-x}), \quad x \in (0, \infty).
> $$  
> Chứng minh rằng $f$ khả tích đối với $\mu_{L}$ và đưa ra đánh giá cho $\int_{(0,\infty)} f \, d\mu_L$

> [!ans] 
> Ta có $0 < e^{-x} < 1$, dẫn đến $0 < 1 - e^{-x} < 1$ dẫn tới $\ln(1 - e^{-x}) < 0$ . Vì $\frac{1}{1+x^{2}} > 0$, nên $f(x)$ không đổi dấu và luôn âm ($f < 0$), ta xét hàm trị tuyệt đối :
> $$|f(x)| = -\frac{1}{1 + x^2} \ln(1 - e^{-x})$$
> 
> Ta áp dụng khai triển Taylor cho hàm $\ln(1 - y) = -\sum_{n=1}^\infty \frac{y^n}{n}$ với $|y| < 1$. Đồng nhất $y = e^{-x}$ (thỏa mãn $0 < e^{-x} < 1$), ta thu được dạng chuỗi vô hạn:
> $$|f(x)| = -\frac{1}{1 + x^2} \left( -\sum_{n=1}^\infty \frac{e^{-nx}}{n} \right) = \sum_{n=1}^\infty \frac{e^{-nx}}{n(1 + x^2)}$$
> 
> Vì mọi số hạng trong tổng đều liên tục và không âm trên $(0, \infty)$, áp dụng Định lý Tonelli, ta hoán đổi dấu tích phân và tổng chuỗi vô hạn (không cần kiểm tra sự khả tích trước):
> $$\int_{(0, \infty)} |f| \, d\mu_L = \int_0^\infty \left( \sum_{n=1}^\infty \frac{e^{-nx}}{n(1 + x^2)} \right) dx \stackrel{\text{Tonelli}}{=} \sum_{n=1}^\infty \frac{1}{n} \int_0^\infty \frac{e^{-nx}}{1 + x^2} \, dx$$
> 
> Ta sử dụng bất đẳng thức $1 + x^2 \ge 1 \implies \frac{1}{1 + x^2} \le 1$. Áp dụng tính đơn điệu của tích phân:
> $$\int_0^\infty \frac{e^{-nx}}{1 + x^2} \, dx < \int_0^\infty e^{-nx} \, dx = \left[ -\frac{1}{n} e^{-nx} \right]_0^\infty = \frac{1}{n}$$
> 
> Thay thế kết quả ước lượng của tích phân vào tổng chuỗi ở trên:
> $$\int_{(0, \infty)} |f| \, d\mu_L < \sum_{n=1}^\infty \frac{1}{n} \cdot \frac{1}{n} = \sum_{n=1}^\infty \frac{1}{n^2}$$
> 
> Ta được chuỗi số $p$-series ($p=2$), là chuỗi vô hạn hội tụ về $\frac{\pi ^{2}}{6}$. Vậy tích phân cần đánh giá:
> $$\int_{(0, \infty)} |f| \, d\mu_L < \frac{\pi^2}{6} < \infty$$
> 
> Vì $\int |f| \, d\mu_L$ hữu hạn, hàm số $f$ khả tích trên $(0, \infty)$ đối với $\mu_{L}$ ($f \in L^1$). 
> 
> Vì tích phân của hàm âm luôn nhỏ hơn 0, ta thu được ước lượng cho tích phân:
> $$-\frac{\pi^2}{6} < \int_{(0, \infty)} f \, d\mu_L < 0$$

## 2. Định lý Fubini (Hàm khả tích)

> [!thm] (Định lý Fubini) 
> Cho $F \in \mathcal{L}^1(\mu \times \nu)$. Khi đó:
> 
> 1. Với $\mu$-a.e $x$: $y \mapsto F(x,y)$ khả tích trên $Y$. Với $\nu$-a.e $y$: $x \mapsto F(x,y)$ khả tích trên $X$.
> 2. Hàm $x \mapsto \int_Y F(x,y), d\nu$ khả tích trên $X$; $y \mapsto \int_X F(x,y), d\mu$ khả tích trên $Y$.
> 3. $$\int_{X \times Y} F, d(\mu \times \nu) = \int_X \left(\int_Y F(x,y), d\nu\right) d\mu = \int_Y \left(\int_X F(x,y), d\mu\right) d\nu$$

> [!prf] 
> **Bước 1.** Phân rã $F = F^+ - F^-$
> 
> Vì $F \in \mathcal{L}^1(\mu \times \nu)$, ta có $\int |F|, d(\mu\times\nu) < \infty$. Do $F^\pm \le |F|$, cả $F^+$ và $F^-$ đều không âm, đo được, và có tích phân hữu hạn. Định lý Tonelli áp dụng được cho cả hai.
> 
> **Bước 2.** Chứn minh Tính chất 1)
> 
> Áp dụng Tonelli cho $F^+$: $\int_X \left(\int_Y F^+, d\nu\right) d\mu < \infty$. Suy ra $\int_Y F^+(x,y), d\nu < \infty$ với $\mu$-a.ex$, tức là $y \mapsto F^+(x,y)$ khả tích a.e. Lập luận tương tự cho $F^-$. Do đó $y \mapsto F(x,y) = F^+(x,y) - F^-(x,y)$ khả tích với $\mu$-a.e $x$.
> 
> **Bước 3.** Chứng minh Tính chất 2) và 3)
> 
> Hai hàm $x \mapsto \int_Y F^\pm(x,y), d\nu$ đều khả tích trên $X$ (tích phân của chúng hữu hạn). Bằng tuyến tính: $$x \mapsto \int_Y F, d\nu = \int_Y F^+, d\nu - \int_Y F^-, d\nu$$ là hiệu của hai hàm khả tích, nên khả tích. Tính chất 2) thỏa.
> 
> Lấy tích phân và dùng Tonelli cho $F^\pm$: $$\int_X\left(\int_Y F, d\nu\right) d\mu = \int_{X\times Y} F^+, d(\mu\times\nu) - \int_{X\times Y} F^-, d(\mu\times\nu) = \int_{X\times Y} F, d(\mu\times\nu)$$ Trường hợp đổi thứ tự tích phân lặp chứng minh tương tự. Định lý Fubini được chứng minh hoàn tất.

## 3. Tích chập (Convolution)

Một trong những ứng dụng kinh điển nhất của Định lý Tonelli và Fubini là chứng minh sự tồn tại và tính khả tích của hàm Tích chập.

> [!def] (Tích chập) 
> Với $f, g \in \mathcal{L}^1(\mathbb{R}^N)$, tích chập được định nghĩa bởi: $$(f * g)(x) = \int_{\mathbb{R}^N} f(x-y)g(y), dy$$

> [!thm] (Tính chất) 
> Với a.e $x \in \mathbb{R}^N$, hàm $y \mapsto f(x-y)g(y)$ khả tích, và $(f*g) \in \mathcal{L}^1(\mathbb{R}^N)$.

> [!prf] 
> Đặt $F(x,y) = f(x-y)g(y)$. Áp dụng Tonelli cho $|F|$: $$\iint |f(x-y)g(y)|, dx, dy = \int_{\mathbb{R}^N} |g(y)| \left(\int_{\mathbb{R}^N} |f(x-y)|, dx\right) dy$$ Theo tính bất biến tịnh tiến của độ đo Lebesgue: $\int |f(x-y)|, dx = |f|_{\mathcal{L}^1}$. Do đó: $$\iint |F|, dx, dy = |f|_{\mathcal{L}^1} \cdot |g|_{\mathcal{L}^1} < \infty$$ Suy ra $F \in \mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$. Áp dụng Fubini: với a.e $x$, lát cắt $y \mapsto f(x-y)g(y)$ khả tích (Tính chất 1); và hàm $(f*g)(x) = \int F(x,\cdot), dy$ khả tích trên $\mathbb{R}^N$ (Tính chất 2).