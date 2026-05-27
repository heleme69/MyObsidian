> [!thm] (Obs 7.5)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$. Giả sử $\varphi$ là một hàm đơn giản không âm ($\varphi \ge 0$) trên $D$. Khi đó, $\int_D \varphi \, d\mu = 0$ khi và chỉ khi:
> $$\mu(\{x \in D : \varphi(x) \neq 0\}) = 0$$

> [!prf] 
> Giả sử biểu diễn chính tắc của hàm đơn giản không âm $\varphi$ trên tập $D$ là:
> $$\varphi = \sum_{i=1}^n a_i \chi_{D_i}$$
> với các $D_i \in \mathfrak{A}$ rời nhau đôi một, $\bigcup_{i=1}^n D_i = D$, và vì $\varphi \ge 0$ nên tất cả các hệ số $a_i \ge 0$.
> 
> Gọi $I = \{i \in \{1, \dots, n\} : a_i > 0\}$ là tập các chỉ số ứng với các hệ số thực sự dương.
> Khi đó, tập các điểm mà $\varphi(x) \neq 0$ chính là $\bigcup_{i \in I} D_i$. Do các tập $D_i$ rời nhau, độ đo của tập này là:
>   $$\mu(\{x \in D : \varphi(x) \neq 0\}) = \sum_{i \in I} \mu(D_i) \quad (1)$$
> Mặt khác, theo định nghĩa tích phân của hàm đơn giản và quy ước $0 \cdot \infty = 0$, các số hạng có $a_i = 0$ sẽ triệt tiêu. Do đó:
>   $$\int_D \varphi \, d\mu = \sum_{i \in I} a_i \mu(D_i) \quad (2)$$
> 
> Từ $(1)$ và $(2)$, vì mọi hệ số $a_i$ ($i \in I$) đều là các số thực dương ($a_i > 0$), và các độ đo $\mu(D_i) \ge 0$, ta có chuỗi lập luận tương đương:
> $$\int_D \varphi \, d\mu = 0 \iff \sum_{i \in I} a_i \mu(D_i) = 0$$
> Vì đây là tổng các đại lượng không âm, một tổng bằng $0$ khi và chỉ khi từng số hạng bằng $0$. Do $a_i > 0$, điều này tương đương với:
> $$
> \begin{align}
> &\iff \mu(D_i) = 0 \text{ với mọi } i \in I \\
> &\iff \sum_{i \in I} \mu(D_i) = 0 \\
> &\iff \mu(\{x \in D : \varphi(x) \neq 0\}) = 0
> \end{align}
> $$

> [!prp] (Bổ đề 8.2)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Giả sử $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f: D \to [0, \infty]$). Chứng minh rằng: Nếu $f > 0$ a.e. trên $D$ và $\int_D f d\mu = 0$, thì $\mu(D) = 0$.

> [!prf]
> Theo định nghĩa, điều này có nghĩa là tập hợp các điểm mà $f(x) \neq 0$ có độ đo bằng $0$. Vì $f \ge 0$, ta có:
> $$\mu(\{x \in D : f(x) > 0\}) = 0 \tag{1}$$
> 
> Mặt khác, giả thiết cũng cho $f > 0$ hầu khắp nơi trên $D$. Điều này có nghĩa là tập hợp các điểm mà mệnh đề này sai có độ đo bằng $0$:
> $$\mu(\{x \in D : f(x) \le 0\}) = 0 \tag{2}$$
> 
> Chú ý rằng toàn bộ không gian nền $D$ có thể được phân hoạch thành hai tập hợp rời nhau dựa trên giá trị của $f$:
> $$D = \{x \in D : f(x) > 0\} \cup \{x \in D : f(x) \le 0\}$$
> 
> Áp dụng tính cộng tính hữu hạn của độ đo $\mu$ trên các tập rời nhau, kết hợp với $(1)$ và $(2)$, ta có:
> $$\mu(D) = \mu(\{x \in D : f(x) > 0\}) + \mu(\{x \in D : f(x) \le 0\}) = 0 + 0 = 0$$
> Vậy $\mu(D) = 0$.

> [!thm] 
> Cho $(X, \mathfrak{A},\mu)$ là một không gian đo, $D \in \mathfrak{A}$ và $f:D \to [0, \infty]$ là một hàm $\mathfrak{A}$-đo được không âm. Chứng minh rằng:
> $$
> \int_{D}f d\mu  = \int_{0}^{\infty} \mu(\{ x \in D: f(x) >t\})dt
> $$

> [!prf]
> Giả sử $\varphi$ là một hàm đơn giản đo được, không âm có biểu diễn chuẩn tắc:
> $$\varphi(x) = \sum_{i=1}^n c_i \chi_{E_i}(x)$$
> với $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập $E_i$ rời nhau, $\bigcup_{i=1}^n E_i = D$.
> Do $\varphi \le f$ và $f$ khả tích, $\varphi$ cũng khả tích (Tính đơn điệu của tích phân). Suy ra ${} \int_D \varphi d\mu = \sum_{i=1}^n c_i \mu(E_i) < \infty {}$, dẫn đến $\mu(E_i) < \infty$ với mọi $i \ge 1$.
> 
> Xét hàm $g_\varphi(t) = \mu(\{x: \varphi(x) > t\})$. Nếu $t \in [c_{i-1}, c_i)$, điều kiện $\varphi(x) > t$ tương đương với $x \in \bigcup_{j=i}^n E_j$.
> Áp dụng tính cộng tính của độ đo $\mu$ trên các tập rời nhau, ta có:
> $$g_\varphi(t) = \sum_{j=i}^n \mu(E_j) \quad \text{với } t \in [c_{i-1}, c_i)$$
> Và $g_\varphi(t) = 0$ với mọi $t \ge c_n$. Hàm $g_\varphi(t)$ là một hàm bậc thang (nhận giá trị hữu hạn).
> 
> Ta tính tích phân Lebesgue của $g_\varphi(t)$ trên $[0, \infty)$. Bằng cách phân hoạch $[0, \infty)$ thành các khoảng rời nhau $[c_{i-1}, c_i)$ và áp dụng tính cộng tính hữu hạn trên miền tích phân, ta tách được:
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \sum_{i=1}^n \int_{[c_{i-1}, c_i)} \left( \sum_{j=i}^n \mu(E_j) \right) dt$$
> Bên trong dấu tích phân, biểu thức $\sum_{j=i}^n \mu(E_j)$ là một hằng số đối với biến $t$. Áp dụng tính thuần nhất của tích phân (đưa hằng số ra ngoài):
> $$
> \begin{align}
>     \int_{[0, \infty)} g_\varphi(t) \mu_L(dt) &= \sum_{i=1}^n \left( \sum_{j=i}^n \mu(E_j) \right) \int_{[c_{i-1}, c_i)} 1 \, dt \\
>     &= \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(E_j)
> \end{align}
> $$
>
> Đảo thứ tự lấy tổng (nhóm các hệ số theo $\mu(E_j)$):
> $$\sum_{j=1}^n \mu(E_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(E_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(E_j)$$
> Nhận thấy vế phải chính là định nghĩa tích phân của hàm đơn giản $\varphi$. Vậy:
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \int_D \varphi d\mu$$
> Đẳng thức đúng cho mọi hàm đơn giản khả tích.



$\xi$