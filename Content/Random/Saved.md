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

> [!thm] (Biểu diễn tích phân qua hàm đơn giản)
> Cho $f \ge 0$ là một hàm đo được trên $D$. Nhắc lại định nghĩa tích phân Lebesgue cho hàm đo được không âm:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu$$
> trong đó $s \in S(D)$ (lớp các hàm đơn giản đo được). 
> Khi đó, ta có đẳng thức:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> (Xem thêm Định lý 8.24: Biểu diễn Layer Cake)

> [!prf]
> Quá trình chứng minh được thực hiện qua 3 bước, đi từ hàm đơn giản lên hàm tổng quát.
> 
> **Bước 1: Chứng minh đẳng thức đúng cho hàm đơn giản $s \in S(D)$**
> Giả sử $s$ có dạng chuẩn tắc: $s(x) = \sum_{i=1}^n c_i \chi_{A_i}(x)$ với $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập $A_i$ rời nhau tạo thành phân hoạch của $D$.
> Hàm $h_s(t) = \mu(\{s \ge t\})$ là một hàm bậc thang. Khi $t \in (c_{i-1}, c_i]$, điều kiện $s(x) \ge t$ bắt buộc $x$ phải thuộc các tập từ $A_i$ trở đi. Do đó:
> $$h_s(t) = \sum_{j=i}^n \mu(A_j) \quad \text{với } t \in (c_{i-1}, c_i]$$
> Tích phân của $h_s(t)$ trên $[0, \infty)$ là:
> $$\int_0^\infty \mu(\{s \ge t\}) \, dt = \sum_{i=1}^n \int_{c_{i-1}}^{c_i} \left( \sum_{j=i}^n \mu(A_j) \right) dt = \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(A_j)$$
> Đổi thứ tự lấy tổng (gom nhóm theo $\mu(A_j)$):
> $$\sum_{j=1}^n \mu(A_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(A_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(A_j) = \int_D s \, d\mu$$
> Vậy với mọi hàm đơn giản $s \ge 0$, ta luôn có: $\int_D s \, d\mu = \int_0^\infty \mu(\{s \ge t\}) \, dt$.
> 
> **Bước 2: Chứng minh chiều bất đẳng thức $(\le)$ dựa vào định nghĩa $\sup$**
> Xét một hàm đơn giản bất kỳ $0 \le s \le f$. 
> Kéo theo đó, với mọi $t \ge 0$, ta có quan hệ bao hàm tập hợp:
> $$\{s \ge t\} \subset \{f \ge t\} \implies \mu(\{s \ge t\}) \le \mu(\{f \ge t\})$$
> Lấy tích phân hai vế theo biến $t$ trên $[0, \infty)$ và sử dụng kết quả Bước 1:
> $$\int_D s \, d\mu = \int_0^\infty \mu(\{s \ge t\}) \, dt \le \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> Bất đẳng thức này đúng với *mọi* hàm đơn giản $s \le f$. Lấy cận trên đúng ($\sup$) cho vế trái theo đúng định nghĩa tích phân, ta được:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu \le \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{1}$$
> 
> **Bước 3: Dùng Định lý xấp xỉ và MCT để được dấu bằng**
> Theo Định lý xấp xỉ bằng hàm đơn giản, tồn tại một dãy hàm đơn giản không âm $(\varphi_n)$ sao cho $\varphi_n \uparrow f$.
> Khi đó, các tập hợp $\{\varphi_n \ge t\}$ tạo thành một dãy tập tăng và hội tụ về $\{f \ge t\}$. Theo tính liên tục từ dưới của độ đo:
> $$\lim_{n \to \infty} \mu(\{\varphi_n \ge t\}) = \mu(\{f \ge t\}) \quad (\text{tăng dần})$$
> Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho tích phân Lebesgue trên $[0, \infty)$, ta có:
> $$\lim_{n \to \infty} \int_0^\infty \mu(\{\varphi_n \ge t\}) \, dt = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> Mặt khác, theo MCT áp dụng trên không gian $D$:
> $$\lim_{n \to \infty} \int_D \varphi_n \, d\mu = \int_D f \, d\mu$$
> Vì đẳng thức đã xảy ra ở Bước 1 đối với từng hàm đơn giản $\varphi_n$, hai giới hạn trên bắt buộc phải bằng nhau:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{2}$$
> 
> Kết hợp $(1)$ và $(2)$, ta có đẳng thức cần chứng minh. 
