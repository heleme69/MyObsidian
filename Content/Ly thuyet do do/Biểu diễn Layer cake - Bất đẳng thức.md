
> [!thm] (Định lý 8.24: Biểu diễn Layer Cake)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được, không âm và khả tích trên $X$.
> 
> (a) Định nghĩa hàm $g$ trên $[0, \infty)$ bởi $g(t) = \mu(\{x \in X : f(x) > t\})$. Khi đó:
> $$\int_X f d\mu = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \mu_L(dt)$$
> 
> (b) Định nghĩa hàm $h$ trên $[0, \infty)$ bởi $h(t) = \mu(\{x \in X : f(x) \ge t\})$. Khi đó:
> $$\int_X f d\mu = \int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) \ge t\}) \mu_L(dt)$$
> *(Trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).*

> [!prf] Chứng minh
> **Phần (a): 
> 
> **Bước 1: Chứng minh đẳng thức đúng cho hàm đơn giản**
> Giả sử $\varphi$ là một hàm đơn giản đo được không âm có biểu diễn chuẩn tắc:
> $$\varphi(x) = \sum_{i=1}^n c_i \chi_{E_i}(x)$$
> với $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập $E_i$ rời nhau, $\bigcup_{i=1}^n E_i = X$.
> 
> Hàm $g_\varphi(t) = \mu(\{x: \varphi(x) > t\})$ sẽ là một hàm bậc thang trên trục $t$. Cụ thể, nếu $t \in [c_{i-1}, c_i)$ thì điều kiện $\varphi(x) > t$ tương đương với việc $x$ phải nằm trong các tập từ $E_i$ trở đi. Do đó:
> $$g_\varphi(t) = \sum_{j=i}^n \mu(E_j) \quad \text{với } t \in [c_{i-1}, c_i)$$
> Và $g_\varphi(t) = 0$ với mọi $t \ge c_n$. 
> 
> Tích phân Lebesgue của $g_\varphi(t)$ trên $[0, \infty)$ là tổng diện tích các hình chữ nhật:
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \sum_{i=1}^n \int_{c_{i-1}}^{c_i} \left( \sum_{j=i}^n \mu(E_j) \right) dt = \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(E_j)$$
> 
> Nhóm các số hạng theo $\mu(E_j)$, hệ số của $\mu(E_j)$ sẽ là tổng các khoảng từ $c_0$ đến $c_j$:
> $$(c_1 - c_0) + (c_2 - c_1) + \dots + (c_j - c_{j-1}) = c_j - c_0 = c_j$$
> Suy ra:
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \sum_{j=1}^n c_j \mu(E_j) = \int_X \varphi d\mu$$
> Vậy đẳng thức đúng cho mọi hàm đơn giản.
> 
> **Bước 2: Dùng MCT nâng lên thành hàm $f$ tổng quát**
> Vì $f$ đo được không âm, theo Định lý xấp xỉ (Lemma 8.6), tồn tại dãy hàm đơn giản không âm $\varphi_n \uparrow f$.
> 
> Đặt $g_n(t) = \mu(\{\varphi_n > t\})$. Do $\varphi_n \le \varphi_{n+1} \le f$, ta có chuỗi bao hàm thức:
> $$\{\varphi_n > t\} \subset \{\varphi_{n+1} > t\} \subset \{f > t\}$$
> Nghĩa là dãy tập hợp $A_n = \{\varphi_n > t\}$ là một dãy tăng.
> Hơn nữa, nếu $f(x) > t$, vì $\varphi_n(x) \to f(x)$, tồn tại $N$ đủ lớn để $\varphi_n(x) > t$ với mọi $n \ge N$. Tức là $\bigcup_{n=1}^\infty A_n = \{f > t\}$. 
> 
> Áp dụng tính liên tục từ dưới của độ đo $\mu$, ta có:
> $$\lim_{n \to \infty} g_n(t) = \lim_{n \to \infty} \mu(A_n) = \mu(\{f > t\}) = g(t) \quad (\forall t \ge 0)$$
> Như vậy, $g_n(t) \uparrow g(t)$. Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho cả hai không gian tích phân, ta thu được:
> $$\int_X f d\mu \stackrel{(MCT)}{=} \lim_{n \to \infty} \int_X \varphi_n d\mu \stackrel{(B1)}{=} \lim_{n \to \infty} \int_{[0, \infty)} g_n(t) \mu_L(dt) \stackrel{(MCT)}{=} \int_{[0, \infty)} g(t) \mu_L(dt)$$
> Ý (a) được chứng minh hoàn tất.
> 
> **Phần (b): Mở rộng cho dấu $\ge$**
> Xét hai hàm $g(t) = \mu(\{f > t\})$ và $h(t) = \mu(\{f \ge t\})$. Rõ ràng $\{f > t\} \subset \{f \ge t\}$ nên $g(t) \le h(t)$. 
> 
> Tập hợp các điểm làm cho $g(t)$ và $h(t)$ khác biệt chính là phần biên:
> $$\{f \ge t\} \setminus \{f > t\} = \{f = t\}$$
> Nghĩa là $h(t) - g(t) = \mu(\{f = t\})$. 
> 
> Vì $f$ là hàm khả tích ($\int_X f d\mu < \infty$), tập hợp những mức $t$ mà $\mu(\{f = t\}) > 0$ nhiều nhất chỉ là một tập đếm được (vì tổng các độ đo này phải bị chặn hữu hạn). Một tập đếm được thì có số đo Lebesgue $\mu_L$ bằng $0$.
> Do đó, $g(t) = h(t)$ hầu khắp nơi (a.e.) đối với độ đo Lebesgue $\mu_L$ trên $[0, \infty)$. 
> 
> Áp dụng tính chất "hai hàm bằng nhau hầu khắp nơi thì có cùng giá trị tích phân", ta có ngay:
> $$\int_{[0, \infty)} g(t) \mu_L(dt) = \int_{[0, \infty)} h(t) \mu_L(dt) = \int_X f d\mu$$
