
> [!thm] (Bất đẳng thức Markov)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được không âm, khả tích Lebesgue trên $X$. Khi đó, với mọi hằng số $a > 0$, ta luôn có bất đẳng thức:
> $$\mu(\{x \in X : f(x) \ge a\}) \le \frac{1}{a} \int_X f d\mu$$

> [!prf] 
> Đặt $E_a = \{x \in X : f(x) \ge a\}$ là tập mức cần đánh giá độ đo. Vì $f$ là hàm đo được nên tập $E_a$ là tập đo được thuộc $\mathfrak{A}$.
> 
> Ta xây dựng một hàm đơn giản trung gian dựa trên hàm chỉ tiêu $\chi_{E_a}$ như sau:
> $$g(x) = a \cdot \chi_{E_a}(x) = \begin{cases} 
> a & \text{nếu } x \in E_a \\ 
> 0 & \text{nếu } x \notin E_a 
> \end{cases}$$
> 
> Tiến hành so sánh giá trị của hàm số $g(x)$ và $f(x)$ trên toàn không gian $X$:
> - Với mọi $x \in E_a$: theo định nghĩa của tập mức $E_a$, ta có $f(x) \ge a = g(x)$.
> - Với mọi $x \notin E_a$: do $f$ là hàm không âm trên $X$, ta có $f(x) \ge 0 = g(x)$.
> 
> Từ hai trường hợp trên, ta suy ra bất đẳng thức $g(x) \le f(x)$ đúng với mọi $x \in X$.
> 
> Áp dụng tính đơn điệu của tích phân hàm đo được không âm, lấy tích phân Lebesgue hai vế trên miền $X$ ta thu được:
> $$\int_X g d\mu \le \int_X f d\mu$$
> $$\implies \int_X a \cdot \chi_{E_a} d\mu \le \int_X f d\mu$$
> 
> Tiếp tục áp dụng tính thuần nhất của tích phân, ta đưa hằng số số thực $a > 0$ ra ngoài dấu tích phân ở vế trái:
> $$a \int_X \chi_{E_a} d\mu \le \int_X f d\mu$$
> 
> Theo định nghĩa tích phân của hàm chỉ thị, ta có $\int_X \chi_{E_a} d\mu = \mu(E_a)$. Thay thế vào hệ thức trên:
> $$a \cdot \mu(E_a) \le \int_X f d\mu$$
> 
> Vì hằng số $a > 0$, ta chia cả hai vế cho $a$ mà không làm đảo chiều bất đẳng thức:
> $$\mu(E_a) \le \frac{1}{a} \int_X f d\mu$$
> 
> Thay ngược trở lại $E_a = \{x \in X : f(x) \ge a\}$, ta có điều phải chứng minh:
> $$\mu(\{x \in X : f(x) \ge a\}) \le \frac{1}{a} \int_X f d\mu$$
> Chứng minh hoàn tất. 

> [!thm] (Ứng dụng Markov 1)
> Cho hàm số $f$ khả tích Lebesgue trên không gian độ đo $(X, \mathfrak{A}, \mu)$. 
> Nếu $\int_X |f| d\mu = 0$ thì $f = 0$ hầu khắp nơi (a.e.) trên $X$.

> [!prf] 
> Đặt $g(x) = |f(x)|$. Do $f$ đo được nên $g$ là hàm đo được không âm trên $X$. Theo giả thiết, ta có $\int_X g d\mu = 0$.
> 
> Để chứng minh $f = 0$ hầu khắp nơi (a.e.), ta cần chứng minh tập hợp các điểm làm cho $f(x) \neq 0$ có độ đo bằng $0$. Đặt tập hợp này là $A$:
> $$A = \{x \in X : f(x) \neq 0\} = \{x \in X : |f(x)| > 0\}$$
> 
> Với mỗi số nguyên dương $n \in \mathbb{Z}^+$, ta định nghĩa các tập mức tăng dần:
> $$A_n = \left\{x \in X : |f(x)| \ge \frac{1}{n}\right\}$$
> 
> Áp dụng Bất đẳng thức Markov cho hàm không âm $g = |f|$ với hằng số $a = \frac{1}{n} > 0$, ta có:
> $$\mu(A_n) \le \frac{1}{\frac{1}{n}} \int_X |f| d\mu = n \cdot \int_X |f| d\mu$$
> 
> Do giả thiết $\int_X |f| d\mu = 0$, vế phải luôn bằng $0$ với mọi $n$:
> $$\mu(A_n) \le n \cdot 0 = 0 \implies \mu(A_n) = 0 $$
> 
> Mặt khác, nhận thấy rằng nếu một điểm $x \in A$ (tức là $|f(x)| > 0$), theo tính chất Archimedes, luôn tồn tại một số nguyên dương $n$ đủ lớn sao cho $|f(x)| \ge \frac{1}{n}$, nghĩa là $x \in A_n$. Do đó, ta có biểu diễn tập hợp $A$ dưới dạng hợp của dãy tập tăng $A_n$:
> $$A = \bigcup_{n=1}^\infty A_n$$
> 
> Áp dụng tính chất $\sigma$-dưới cộng tính của độ đo $\mu$, ta đánh giá độ đo của tập $A$:
> $$0 \le \mu(A) = \mu\left(\bigcup_{n=1}^\infty A_n\right) \le \sum_{n=1}^\infty \mu(A_n) = \sum_{n=1}^\infty 0 = 0$$
> 
> Suy ra $\mu(A) = \mu(\{x \in X : f(x) \neq 0\}) = 0$. 
> 
> Theo định nghĩa, điều này khẳng định $f = 0$ hầu khắp nơi (a.e.) trên $X$. Chứng minh hoàn tất. 

> [!thm] (Bổ đề 9.3: Ứng dụng Markov 2)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$. 
> Nếu $\int_E f d\mu$ tồn tại và $\int_E f d\mu \ge 0$ với mọi tập con đo được $E$ của $D$, thì $f \ge 0$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> Để chứng minh $f \ge 0$ hầu khắp nơi, ta cần chứng minh tập hợp các điểm làm cho $f(x) < 0$ có độ đo bằng $0$. Đặt tập hợp này là $A$:
> $$A = \{x \in D : f(x) < 0\}$$
> 
> Tương tự như kỹ thuật Markov, với mỗi số nguyên dương $n \in \mathbb{Z}^+$, ta định nghĩa các tập mức cắt phần âm của hàm số:
> $$A_n = \left\{x \in D : f(x) \le -\frac{1}{n}\right\}$$
> 
> Xét trên tập $A_n$, ta luôn có $f(x) \le -\frac{1}{n}$. Nhân hai vế với $-1$ và lấy tích phân hai vế trên miền $A_n$.
> Áp dụng bất đẳng thức Markov cho hàm dương $-f$ và đổi chiều bất đẳng thức:
> $$\int_{A_n} f d\mu \le \int_{A_n} \left(-\frac{1}{n}\right) d\mu = -\frac{1}{n} \mu(A_n)$$
> 
> Mặt khác, theo giả thiết của bổ đề, tích phân của $f$ trên bất kỳ tập con đo được nào của $D$ cũng đều không âm. Vì $A_n \subset D$ là một tập đo được, ta phải có:
> $$\int_{A_n} f d\mu \ge 0$$
> 
> Kết hợp hai điều kiện trên, ta thu được chuỗi bất đẳng thức:
> $$0 \le \int_{A_n} f d\mu \le -\frac{1}{n} \mu(A_n)$$
> $$\implies \frac{1}{n} \mu(A_n) \le 0$$
> 
> Vì độ đo $\mu(A_n)$ luôn không âm và $n > 0$, bất đẳng thức trên chỉ có thể xảy ra khi:
> $$\mu(A_n) = 0 \quad (\forall n \in \mathbb{Z}^+)$$
> 
> Theo tính chất Archimedes, nếu $f(x) < 0$ thì luôn tồn tại một số nguyên dương $n$ đủ lớn sao cho $f(x) \le -\frac{1}{n}$. Do đó, tập $A$ là hợp của tất cả các tập $A_n$:
> $$A = \bigcup_{n=1}^\infty A_n$$
> 
> Áp dụng tính chất $\sigma$-bán cộng tính của độ đo:
> $$0 \le \mu(A) = \mu\left(\bigcup_{n=1}^\infty A_n\right) \le \sum_{n=1}^\infty \mu(A_n) = \sum_{n=1}^\infty 0 = 0$$
> 
> Suy ra $\mu(A) = \mu(\{x \in D : f(x) < 0\}) = 0$. Điều này khẳng định $f \ge 0$ hầu khắp nơi (a.e.) trên $D$. 

> [!thm] (Bổ đề 8.2a)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là hàm khả tích trên $X$ (tức là $\int_{X} fd\mu < \infty$). Đặt $A = \{ x \in X: f(x)< \infty\}$. Chứng minh rằng $\mu(X \setminus A) = 0$.

> [!prf]
> Tập hợp cần chứng minh có độ đo bằng $0$ là phần bù của $A$, ký hiệu là $E$: 
> $$E = X \setminus A = \{x \in X : f(x) = \infty\}$$
> 
> Với mỗi số nguyên dương $n \in \mathbb{N}^*$, ta định nghĩa tập mức $E_n$ như sau:
> $$E_n = \{x \in X : f(x) \ge n\}$$
> 
> Vì mỗi điểm $x \in E$, tức là $f(x) = \infty$, thì giá trị $f(x)$ luôn lớn hơn mọi số nguyên $n$. Do đó, ta có quan hệ bao hàm:
> $$E \subseteq E_n $$
> Áp dụng tính đơn điệu của độ đo:
> $$\mu(E) \le \mu(E_n) \quad (\forall n \in \mathbb{N}^*)$$
>
> Áp dụng bất đẳng thức Markov cho hàm $f$ không âm, ta có:
> $$\mu(E_n) \le \frac{1}{n} \int_X f d\mu$$
> Theo giả thiết, hàm $f$ khả tích nên tích phân của nó trên $X$ là một hằng số thực hữu hạn. Ta đặt $M = \int_X f d\mu < \infty$, bất đẳng thức trên trở thành:
> $$\mu(E_n) \le \frac{M}{n}$$
> 
> Tổng hợp lại, ta thu được chuỗi bất đẳng thức:
> $$0 \le \mu(E) \le \mu(E_n) \le \frac{M}{n}$$
> Cho $n \to \infty$, vì $M$ là một hằng số hữu hạn nên giới hạn của vế phải $\lim_{n \to \infty} \frac{M}{n} = 0$.
> Vậy ta kết luận $\mu(E) = \mu(X \setminus A) = 0$.

> [!thm] (Định lý 8.24: Biểu diễn Layer Cake)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được, không âm và khả tích trên $X$.
> 
> (a) Định nghĩa hàm $g$ trên $[0, \infty)$ bởi $g(t) = \mu(\{x \in X : f(x) > t\})$. Khi đó:
> $$\int_X f d\mu = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \mu_L(dt)$$
> 
> (b) Định nghĩa hàm $h$ trên $[0, \infty)$ bởi $h(t) = \mu(\{x \in X : f(x) \ge t\})$. Khi đó:
> $$\int_X f d\mu = \int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) \ge t\}) \mu_L(dt)$$
> *(Trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).*

> [!prf] 
> **Phần (a):**
> Cho $f$ là hàm đo được, không âm và khả tích trên $X$, tức là $\int_X f d\mu < \infty$. Ta cần chứng minh:
> $$\int_X f d\mu = \int_{[0, \infty)} g(t) \mu_L(dt)$$
> với $g(t) = \mu(\{x \in X : f(x) > t\})$.
> 
> Lưu ý về tính hữu hạn của $g(t)$: Vì $f$ khả tích, theo Bất đẳng thức Markov, với mọi $t > 0$ ta có:
> $$t \cdot \mu(\{f > t\}) \le \int_{\{f > t\}} f d\mu \le \int_X f d\mu < \infty$$
> Suy ra $g(t) \le \frac{1}{t} \int_X f d\mu < \infty$. Do đó, $g(t)$ là một số thực hữu hạn với mọi $t > 0$. Hàm $g(t)$ chỉ có thể nhận giá trị vô cùng tại $t = 0$, mà điểm $t=0$ có độ đo Lebesgue bằng $0$ nên không ảnh hưởng đến tính xác định của tích phân.
> 
> **Bước 1: Chứng minh định lý đúng cho hàm đơn giản**
> 
> Giả sử $\varphi$ là một hàm đơn giản đo được, không âm có biểu diễn chuẩn tắc:
> $$\varphi(x) = \sum_{i=1}^n c_i \chi_{E_i}(x)$$
> với $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập $E_i$ rời nhau, $\bigcup_{i=1}^n E_i = X$.
> Do $\varphi \le f$ và $f$ khả tích, $\varphi$ cũng khả tích (Tính đơn điệu của tích phân). Suy ra $\int_X \varphi d\mu = \sum_{i=1}^n c_i \mu(E_i) < \infty$, dẫn đến $\mu(E_i) < \infty$ với mọi $i \ge 1$.
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
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \int_X \varphi d\mu$$
> Đẳng thức đúng cho mọi hàm đơn giản khả tích.
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
> **Phần (b): Mở rộng định lý cho dấu $\ge$**
> Ta xét hai hàm số $g(t) = \mu(\{f > t\})$ và $h(t) = \mu(\{f \ge t\})$ trên miền $[0, \infty)$. Ta cần chứng minh:
> $$\int_{[0, \infty)} h(t) \mu_L(dt) = \int_X f d\mu$$
> 
> Do bao hàm thức $\{f > t\} \subset \{f \ge t\}$, theo tính đơn điệu của độ đo $\mu$, ta có $g(t) \le h(t)$. Hiệu số giữa hai hàm tại mỗi điểm $t$ chính là độ đo của phần biên sai khác:
> $$h(t) - g(t) = \mu(\{f \ge t\} \setminus \{f > t\}) = \mu(\{f = t\})$$
> 
> Xét tập hợp $T$ chứa tất cả các mức $t$ mà tại đó $h(t) \neq g(t)$, tức là:
> $$T = \{t \in [0, \infty) : \mu(\{f = t\}) > 0\}$$
> 
> Nhận thấy rằng các tập mức $\{f = t\}$ với $t \in T$ là một họ các tập hợp rời nhau đôi một trong $X$. Dựa theo: Bổ đề về tính đếm được của họ tập rời nhau có độ đo dương, ta suy ra tập chỉ số $T$ bắt buộc phải là một tập hợp đếm được.
> 
> Vì mọi tập con đếm được trên trục thực đều là tập có độ đo Lebesgue bằng không (tập null), ta có $\mu_L(T) = 0$. Điều này khẳng định rằng:
> $$h(t) = g(t) \quad \text{hầu khắp nơi (a.e.) trên } [0, \infty) \text{ đối với độ đo } \mu_L$$
> 
> Áp dụng tính chất bằng nhau hầu khắp nơi của tích phân Lebesgue, kết hợp với kết quả của ý (a), ta thu được đẳng thức cần chứng minh:
> $$\int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_X f d\mu$$
> 
> Định lý được chứng minh hoàn tất. 
