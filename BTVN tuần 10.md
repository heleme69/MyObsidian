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





$\xi$