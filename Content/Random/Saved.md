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

> [!def] (Định nghĩa: Khả tích đều qua ngưỡng cắt (Truncation Definition))
> Dãy hàm $f_n \subset L^1(D, \mathfrak{A}, \mu)$ được gọi là khả tích đều nếu khối lượng ở phần chóp vượt ngưỡng $M$ của tất cả các hàm đều hội tụ về $0$ một cách đồng thời:
> $$\lim_{M \to \infty} \sup_{n} \int_{\{|f_n| > M\}} |f_n| d\mu = 0$$
> Ký hiệu viết gọn bằng hàm chỉ thị: $\int_D |f_n| \mathbf{1}_{\{|f_n| > M\}} d\mu < \varepsilon$.

> [!thm] (Định lý Tương đương của Tính khả tích đều)
> Cho không gian độ đo hữu hạn $\mu(D) < \infty$ và dãy $\{f_n\} \subset L^1$. Hai mệnh đề sau là tương đương:
> 1. Định nghĩa ngưỡng cắt: $\lim_{M \to \infty} \sup_{n} \int_{\{|f_n| > M\}} |f_n| = 0$.
> 2. Tính chất 1 + Bị chặn $L^1$: Dãy $f_n$ bị chặn đều trong $L^1$ (tức $\sup_n \int_D |f_n| < \infty$) và thỏa mãn Tính liên tục tuyệt đối đều ($\forall \varepsilon > 0, \exists \delta > 0 : \mu(A) < \delta \implies \sup_n \int_A |f_n| < \varepsilon$).

> [!prf] 
> **Chiều ($\implies$):**
> Với $\varepsilon > 0$, tồn tại $M > 0$ sao cho $\int_{\{|f_n| > M\}} |f_n| < \varepsilon, \forall n$.
> - *Chứng minh bị chặn $L^1$:* $$\int_D |f_n| = \int_{\{|f_n| \le M\}} |f_n| + \int_{\{|f_n| > M\}} |f_n| \le M \cdot \mu(D) + \varepsilon$$
>   Vì $\mu(D) < \infty$ nên giới hạn trên không phụ thuộc $n$, suy ra dãy bị chặn đều trong $L^1$.
> - *Chứng minh Tính chất 1:* Với mọi tập $A \in \mathcal{A}$:
>   $$\int_A |f_n| = \int_{A \cap \{|f_n| \le M\}} |f_n| + \int_{A \cap \{|f_n| > M\}} |f_n| \le M \cdot \mu(A) + \varepsilon$$
>   Ta chọn $\delta = \frac{\varepsilon}{M}$. Khi $\mu(A) < \delta$, ta có $\int_A |f_n| \le M \cdot \left(\frac{\varepsilon}{M}\right) + \varepsilon = 2\varepsilon$. 
>   Điều này chứng minh $(2)$.
> 
> **Chiều ($\impliedby$):**
> Giả sử dãy bị chặn đều bởi $\sup_n \int_D |f_n| = C < \infty$ và thỏa mãn Tính chất 1.
> - Theo Tính chất 1, với $\varepsilon > 0$ cho trước, tồn tại $\delta > 0$ sao cho $\mu(A) < \delta \Rightarrow \int_A |f_n| < \varepsilon, \forall n$.
> - Áp dụng Bất đẳng thức Markov, ta đánh giá độ đo của tập vượt ngưỡng:
>   $$\mu(\{|f_n| > M\}) \le \frac{1}{M} \int_D |f_n| \le \frac{C}{M}, \quad \forall n$$
> - Ta chọn $M$ đủ lớn sao cho $\frac{C}{M} < \delta$. 
>   Khi đó, đặt $A = \{|f_n| > M\}$, ta có $\mu(A) < \delta$. Theo giả thiết của Tính chất 1, ta lập tức có $\int_{\{|f_n| > M\}} |f_n| < \varepsilon, \forall n$. 
>   Điều này chứng minh $(1)$.

> [!thm] (Prob 8.17: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo. Cho $(f_n : n \in \mathbb{N})$ và $f$ là các hàm nhận giá trị thực mở rộng, $\mathcal{A}$-đo được trên $D \in \mathcal{A}$, và giả sử $f$ nhận giá trị thực hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương $(\varepsilon_n : n \in \mathbb{N})$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$;
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Xác định tập hợp "xấu" và áp dụng Bất đẳng thức Markov**
> Cố định một số thực $\delta > 0$ bất kỳ. Ta định nghĩa $A_n(\delta)$ là tập hợp các điểm mà tại đó hàm $f_n$ sai lệch so với $f$ từ mức $\delta$ trở lên:
> $$A_n(\delta) = \{x \in D : |f_n(x) - f(x)| \ge \delta\}$$
> 
> Nhận thấy rằng bất phương trình $|f_n(x) - f(x)| \ge \delta$ tương đương với $|f_n(x) - f(x)|^p \ge \delta^p$ (do $\delta > 0$ và $p > 0$).
> 
> Áp dụng Bất đẳng thức Markov cho hàm không âm $|f_n - f|^p$ với mức chặn là $\delta^p$, ta có đánh giá:
> $$\mu(A_n(\delta)) = \mu\left(\{x \in D : |f_n(x) - f(x)|^p \ge \delta^p\}\right) \le \frac{1}{\delta^p} \int_D |f_n - f|^p d\mu$$
> 
> Theo giả thiết thứ hai của đề bài, ta tiếp tục chặn trên độ đo này:
> $$\mu(A_n(\delta)) \le \frac{\varepsilon_n}{\delta^p}$$
> 
> **Bước 2: Áp dụng Bổ đề Borel-Cantelli**
> Lấy tổng độ đo của các tập $A_n(\delta)$ trên toàn bộ dãy $n \in \mathbb{N}$:
> $$\sum_{n=1}^\infty \mu(A_n(\delta)) \le \sum_{n=1}^\infty \frac{\varepsilon_n}{\delta^p} = \frac{1}{\delta^p} \sum_{n=1}^\infty \varepsilon_n$$
> 
> Theo giả thiết thứ nhất, chuỗi $\sum \varepsilon_n$ hội tụ (có tổng hữu hạn), dẫn đến:
> $$\sum_{n=1}^\infty \mu(A_n(\delta)) < \infty$$
> 
> Áp dụng Bổ đề Borel-Cantelli: vì tổng các độ đo hữu hạn, tập giới hạn trên (limsup) của chuỗi các biến cố này sẽ có độ đo bằng $0$. Đặt:
> $$B_\delta = \limsup_{n \to \infty} A_n(\delta) = \bigcap_{k=1}^\infty \bigcup_{n=k}^\infty A_n(\delta)$$
> Ý nghĩa của $B_\delta$ là tập hợp các điểm $x$ mà $|f_n(x) - f(x)| \ge \delta$ xảy ra vô số lần. Bổ đề Borel-Cantelli cho ta:
> $$\mu(B_\delta) = 0$$
> 
> **Bước 3: Lập luận đếm được để bao quát toàn miền hội tụ**
> Để dãy $f_n(x)$ không hội tụ về $f(x)$, chắc chắn phải tồn tại một khoảng mở $\delta > 0$ nào đó sao cho khoảng cách giữa chúng lớn hơn $\delta$ vô số lần. 
> Ta chọn $\delta$ chạy qua dãy các số hữu tỉ giảm dần $1/k$ với $k \in \mathbb{Z}^+$. Tập hợp các điểm phân kỳ (kí hiệu là $N$) sẽ nằm trọn trong hợp của các tập $B_{1/k}$:
> $$N = \left\{x \in D : f_n(x) \not\to f(x)\right\} \subset \bigcup_{k=1}^\infty B_{1/k}$$
> 
> Áp dụng tính $\sigma$-bán cộng tính của độ đo:
> $$\mu(N) \le \sum_{k=1}^\infty \mu\left(B_{1/k}\right) = \sum_{k=1}^\infty 0 = 0$$
> 
> Vậy tập các điểm mà $f_n$ không hội tụ về $f$ là một tập có độ đo $0$. Kết luận: $f_n \to f$ hầu khắp nơi trên $D$. 

> [!thm] ( Cách 2: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $(f_n)_{n \in \mathbb{N}}$ và $f$ là các hàm nhận giá trị thực mở rộng, đo được trên $D \in \mathfrak{A}$. Giả sử $f$ nhận giá trị thực hữu hạn hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương $(\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Lấy tổng các tích phân sai số**
> Từ giả thiết thứ hai, ta lấy tổng hai vế cho tất cả $n \in \mathbb{N}$. Kết hợp với giả thiết thứ nhất, ta có chuỗi các tích phân hội tụ:
> $$\sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) \le \sum_{n \in \mathbb{N}} \varepsilon_n < \infty$$
> 
> **Bước 2: Đổi chỗ tổng và tích phân**
> Vì $|f_n - f|^p \ge 0$ với mọi $n$, ta áp dụng tính $\sigma$-cộng tính của tích phân để hoán vị dấu tổng và dấu tích phân:
> $$\int_D \left( \sum_{n \in \mathbb{N}} |f_n - f|^p \right) d\mu = \sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) < \infty$$
> 
> **Bước 3: Tính hữu hạn a.e của tích phân hàm không âm**
> Đặt hàm số $g(x) = \sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p$. Nhận thấy $g(x)$ là một hàm đo được, không âm.
> Vì tích phân của $g(x)$ trên $D$ là hữu hạn, theo Bổ đề 8.2, hàm $g(x)$ bắt buộc phải nhận giá trị hữu hạn hầu khắp nơi trên $D$.
> 
> Mặt khác, theo giả thiết, $f(x)$ cũng nhận giá trị thực hữu hạn hầu khắp nơi. Gọi $N$ là tập hợp chứa các điểm làm cho $g(x) = \infty$ hoặc $f(x)$ vô hạn. Ta có $\mu(N) = 0$. 
> Với mọi $x \in D \setminus N$, ta có:
> $$\sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p < \infty$$
> 
> **Bước 4: Sử dụng điều kiện cần của chuỗi số hội tụ**
> Xét tại một điểm $x \in D \setminus N$ cố định, ta có một chuỗi số thực hội tụ. Theo tính chất cơ bản của chuỗi, nếu một chuỗi hội tụ thì số hạng tổng quát của nó phải tiến về $0$. Do đó:
> $$\lim_{n \to \infty} |f_n(x) - f(x)|^p = 0$$
> 
> **Bước 5: Kết luận**
> Vì $p \in (0, \infty)$ là một số dương cố định, $|f_n(x) - f(x)|^p \to 0$ hoàn toàn tương đương với:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> 
> Lập luận này đúng với mọi $x \in D \setminus N$ (nơi $\mu(N) = 0$). Vậy ta kết luận dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 










$\int_{E}f\ge 0$ $\forall E \subset D, E \in \mathfrak{A}$ $\implies$ $f\ge 0$ a.e trên $D$

> [!prp] Mệnh đề (Các tính chất cơ bản của tích phân đối với hàm đo được không âm)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và tập đo được $D \in \mathfrak{A}$. Giả sử $f, g$ là các hàm đo được không âm trên $D$. Khi đó tích phân Lebesgue thỏa mãn các tính chất sau:
> 
> (a) Tính đơn điệu (Monotonicity): Nếu $f \le g$ hầu khắp nơi (a.e.) trên $D$, thì $\int_D f \, d\mu \le \int_D g \, d\mu$.
> 
> (b) Tính tuyến tính (Linearity): 
> 1. $\int_D (f + g) \, d\mu = \int_D f \, d\mu + \int_D g \, d\mu$
> 2. $\int_D cf \, d\mu = c \int_D f \, d\mu$ với mọi hằng số không âm $c \ge 0$.
> 
> (c) Tính bất biến hầu khắp nơi: Nếu $f = g$ hầu khắp nơi (a.e.) trên $D$, thì $\int_D f \, d\mu = \int_D g \, d\mu$.
> 
> (d) Tính cộng tính hữu hạn của dãy hàm: Cho $(f_n)_{n=1}^N$ là một họ hữu hạn các hàm đo được không âm trên $D$, khi đó $\int_D \left( \sum_{n=1}^N f_n \right) d\mu = \sum_{n=1}^N \int_D f_n \, d\mu$.
> 
> (e) Tính cộng tính hữu hạn trên tập hợp rời nhau: Giả sử $(D_n)_{n=1}^N$ là một họ hữu hạn các tập đo được rời nhau đôi một sao cho $D = \bigcup_{n=1}^N D_n$, khi đó $\int_D f \, d\mu = \sum_{n=1}^N \int_{D_n} f \, d\mu$.
> 
> (g) Định lý Hội tụ Đơn điệu trên tập hợp: Nếu $(E_n)_{n=1}^{\infty}$ là một dãy tập đo được tăng dần tiến về $D$ (tức là $E_n \uparrow D$), khi đó $\lim_{n \to \infty} \int_{E_n} f \, d\mu = \int_D f \, d\mu$.
> 
> (h) Hệ quả $\sigma$-cộng tính của chuỗi hàm: Cho $(f_n)_{n=1}^{\infty}$ là một dãy đếm được các hàm đo được không âm trên $D$, khi đó $\int_D \left( \sum_{n=1}^{\infty} f_n \right) d\mu = \sum_{n=1}^{\infty} \int_D f_n \, d\mu$.

> [!prf] 
> **Chứng minh tính chất a:**
> Gọi $S_f = \{\varphi \text{ đơn giản} : 0 \le \varphi \le f \text{ a.e.}\}$ và $S_g = \{\psi \text{ đơn giản} : 0 \le \psi \le g \text{ a.e.}\}$. Vì $f \le g$ hầu khắp nơi trên $D$, nên bất kỳ hàm đơn giản nào thỏa mãn $\varphi \le f$ a.e. thì cũng thỏa mãn $\varphi \le g$ a.e. Do đó, ta có mối quan hệ bao hàm $S_f \subset S_g$. Lấy cận trên đúng (supremum) trên cả hai tập hợp theo định nghĩa tích phân, ta được:
> $$\int_D f \, d\mu = \sup_{\varphi \in S_f} \int_D \varphi \, d\mu \le \sup_{\psi \in S_g} \int_D \psi \, d\mu = \int_D g \, d\mu$$
> 
> **Chứng minh tính chất b:**
> 3. Theo Định lý xấp xỉ, tồn tại hai dãy hàm đơn giản không âm tăng dần $\varphi_n \uparrow f$ và $\psi_n \uparrow g$. Khi đó, dãy tổng $(\varphi_n + \psi_n)$ cũng là dãy các hàm đơn giản không âm tăng dần và hội tụ điểm về $f + g$. Áp dụng Định lý Hội tụ Đơn điệu (MCT) và tính tuyến tính của tích phân hàm đơn giản, ta có:
>    $$\int_D (f + g) \, d\mu = \lim_{n \to \infty} \int_D (\varphi_n + \psi_n) \, d\mu = \lim_{n \to \infty} \int_D \varphi_n \, d\mu + \lim_{n \to \infty} \int_D \psi_n \, d\mu = \int_D f \, d\mu + \int_D g \, d\mu$$
> 4. Nếu $c = 0$, đẳng thức hiển nhiên đúng theo quy ước $0 \cdot \infty = 0$. Nếu $c > 0$, với mọi hàm đơn giản $\varphi \le f \iff c\varphi \le cf$. Do tính tuyến tính của hàm đơn giản, lấy supremum hai vế ta rút ra $\int_D cf \, d\mu = c \int_D f \, d\mu$.
> 
> **Chứng minh tính chất c:**
> Từ giả thiết $f = g$ hầu khắp nơi trên $D$, ta suy ra đồng thời $f \le g$ a.e. và $g \le f$ a.e. Áp dụng hai lần tính chất đơn điệu (tính chất a) vừa chứng minh ở trên, ta thu được:
> $$\int_D f \, d\mu \le \int_D g \, d\mu \quad \text{và} \quad \int_D g \, d\mu \le \int_D f \, d\mu \implies \int_D f \, d\mu = \int_D g \, d\mu$$
> 
> **Chứng minh tính chất d:**
> Khẳng định này được chứng minh bằng phương pháp quy nạp toán học dựa trên kết quả cộng tính của hai hàm số trong tính chất b. Giả sử hệ thức đúng đến bước $N-1$, ta thực hiện phân rã:
> $$\int_D \left( \sum_{n=1}^N f_n \right) d\mu = \int_D \left( \sum_{n=1}^{N-1} f_n + f_N \right) d\mu = \int_D \left( \sum_{n=1}^{N-1} f_n \right) d\mu + \int_D f_N \, d\mu = \sum_{n=1}^{N-1} \int_D f_n \, d\mu + \int_D f_N \, d\mu = \sum_{n=1}^N \int_D f_n \, d\mu$$
> 
> **Chứng minh tính chất e:**
> Do các tập $D_n$ rời nhau đôi một và phủ miền $D$, ta có phân rã của hàm chỉ thị: $\chi_D = \sum_{n=1}^N \chi_{D_n}$. Nhân hai vế với hàm không âm $f$, ta được: $f \cdot \chi_D = \sum_{n=1}^N (f \cdot \chi_{D_n})$. Lấy tích phân trên toàn bộ không gian $X$, áp dụng tính cộng tính hữu hạn của dãy hàm (tính chất d) và định nghĩa tích phân trên tập con, ta thu được:
> $$\int_D f \, d\mu = \int_X f \cdot \chi_D \, d\mu = \int_X \left( \sum_{n=1}^N f \cdot \chi_{D_n} \right) d\mu = \sum_{n=1}^N \int_X f \cdot \chi_{D_n} \, d\mu = \sum_{n=1}^N \int_{D_n} f \, d\mu$$
> 
> **Chứng minh tính chất g:**
> Xét dãy hàm phụ $f_n(x) = f(x) \cdot \chi_{E_n}(x)$. 
> * Do dãy tập hợp $(E_n)$ tăng dần ($E_1 \subset E_2 \subset \dots$) nên dãy hàm chỉ thị $(\chi_{E_n})$ là dãy tăng không giảm. Vì $f \ge 0$, dãy hàm $(f_n)$ cũng tăng đơn điệu không giảm: $0 \le f_1 \le f_2 \le \dots$
> * Với mỗi $x \in D$, vì $\bigcup_{n=1}^\infty E_n = D$, luôn tồn tại một chỉ số $n_0$ đủ lớn sao cho $x \in E_n$ với mọi $n \ge n_0$. Khi đó $\chi_{E_n}(x) = 1$, dẫn đến giới hạn điểm: $\lim_{n \to \infty} f_n(x) = f(x)$.
> 
> Dãy $(f_n)$ thỏa mãn đầy đủ điều kiện của Định lý Hội tụ Đơn điệu (MCT) gốc trên không gian $X$. Tiến hành đẩy giới hạn qua dấu tích phân và thu gọn về miền tập con:
> $$\lim_{n \to \infty} \int_{E_n} f \, d\mu = \lim_{n \to \infty} \int_X f \cdot \chi_{E_n} \, d\mu = \int_X \left(\lim_{n \to \infty} f \cdot \chi_{E_n}\right) d\mu = \int_X f \cdot \chi_D \, d\mu = \int_D f \, d\mu$$
> 
> **Chứng minh tính chất h:**
> Đặt $g_N = \sum_{n=1}^N f_n$ là tổng riêng thứ $N$ của chuỗi hàm. Vì các số hạng $f_n \ge 0$, dãy tổng riêng $(g_N)_{N=1}^{\infty}$ là một dãy hàm đo được không âm tăng đơn điệu không giảm và hội tụ điểm về tổng vô hạn của chuỗi: $g_N \uparrow \sum_{n=1}^{\infty} f_n$ khi $N \to \infty$. 
> Lấy tích phân và áp dụng tính cộng tính hữu hạn (tính chất d) cho tổng riêng, ta có $\int_D g_N \, d\mu = \sum_{n=1}^N \int_D f_n \, d\mu$. Cho $N \to \infty$ ở cả hai vế. Ở vế trái, vì $g_N$ là dãy tăng, áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT) ta được:
> $$\lim_{N \to \infty} \int_D g_N \, d\mu = \int_D \left(\lim_{N \to \infty} g_N\right) d\mu = \int_D \left( \sum_{n=1}^{\infty} f_n \right) d\mu$$
> Vế phải là giới hạn của một dãy tổng riêng, theo định nghĩa chuỗi số thực mở rộng, chính là: $\sum_{n=1}^{\infty} \int_D f_n \, d\mu$. Cân bằng hai vế, ta có điều phải chứng minh. 

> [!thm] Problem 1 (Prob 8.11)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được, không âm trên $X$ sao cho $f$ hữu hạn $\mu$-hầu khắp nơi ($\mu$-a.e.) trên $X$. Định nghĩa dãy hàm $f_n$ trên $X$:
> $$f_n(x) = \begin{cases} f(x) & \text{nếu } f(x) \le n \\ 0 & \text{nếu } f(x) > n \end{cases}$$
> Chứng minh rằng $\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$.

> [!prf] Chứng minh
> **Bước 1: Chuyển đổi dãy hàm số qua cấu trúc hàm chỉ thị**
> Với mỗi $n \in \mathbb{N}^*$, định nghĩa tập đo được:
> $$E_n = \{x \in X : f(x) \le n\}$$
> Gọi $\chi_{E_n}$ là hàm chỉ thị của tập $E_n$. Khi đó, theo định nghĩa của bài toán, dãy hàm $f_n$ được biểu diễn một cách tường minh dưới dạng tích:
> $$f_n(x) = f(x) \cdot \chi_{E_n}(x)$$
> 
> **Bước 2: Kiểm tra các điều kiện của Định lý Hội tụ Đơn điệu (MCT)**
> Ta tiến hành đánh giá tính đơn điệu và giới hạn của dãy hàm phụ $(f_n)_{n=1}^{\infty}$:
> 
> * **Tính tăng đơn điệu:** Với mọi $n \in \mathbb{N}^*$, rõ ràng ta có mối quan hệ bao hàm của các tập mức: $E_n \subset E_{n+1}$ (vì nếu $f(x) \le n$ thì hiển nhiên $f(x) \le n+1$). 
>   Do đó, dãy các hàm chỉ thị tăng đơn điệu không giảm tại mọi điểm: $\chi_{E_1} \le \chi_{E_2} \le \dots \le \chi_{E_n} \le \dots$
>   Vì giả thiết $f(x) \ge 0$, nhân $f(x)$ vào các vế ta thu được tính đơn điệu của dãy hàm:
>   $$0 \le f_1(x) \le f_2(x) \le \dots \le f_n(x) \le \dots \quad \forall x \in X$$
> 
> * **Giới hạn hội tụ điểm hầu khắp nơi:** Gọi $N = \{x \in X : f(x) = \infty\}$ là tập các điểm mà tại đó hàm $f$ nhận giá trị vô hạn. Theo giả thiết, $f$ hữu hạn $\mu$-a.e. nên $\mu(N) = 0$. 
>   Xét điểm $x \in X \setminus N$ bất kỳ (tức là $f(x) < \infty$). Theo nguyên lý Archimedes, luôn tồn tại một chỉ số nguyên dương $n_0$ đủ lớn sao cho $n_0 \ge f(x)$. Khi đó, với mọi $n \ge n_0$, ta có $x \in E_n \implies \chi_{E_n}(x) = 1$. Suy ra:
>   $$\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} f(x) \cdot 1 = f(x) \quad \forall x \in X \setminus N$$
>   Vì $\mu(N) = 0$, ta kết luận dãy hàm hội tụ điểm về hàm $f$ hầu khắp nơi trên $X$:
>   $$\lim_{n \to \infty} f_n(x) = f(x) \quad \mu\text{-a.e. trên } X$$
> 
> **Bước 3: Áp dụng MCT và kết luận**
> Dãy các hàm số $(f_n)_{n=1}^{\infty}$ là dãy các hàm đo được không âm, tăng đơn điệu và tiến về $f$ hầu khắp nơi trên $X$. Áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT), ta được phép đẩy giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X \left( \lim_{n \to \infty} f_n \right) d\mu = \int_X f \, d\mu$$
> 
> Bài toán được chứng minh hoàn tất. 

> [!thm] (Phản ví dụ Hội tụ đơn điệu giảm)
> Định lý Hội tụ đơn điệu cho dãy giảm ($f_n \downarrow f$) bắt buộc phải có điều kiện tồn tại ít nhất một hàm khả tích chặn trên $\exists k, \int_D f_k d\mu < \infty$:
> 
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ với miền $D = [0, \infty)$ có $\mu_L(D) = \infty$.
> 
> Xét dãy hàm đặc trưng (khối lượng trượt):
> $$f_n(x) = \chi_{[n, \infty)}(x)$$
> Dãy $f_n$ là dãy giảm ($f_{n+1} \le f_n$) và hội tụ điểm về hàm $f(x) = 0$ trên $D$. (Vì với mọi $x \in D$, chọn $N > x$, ta có $x \notin [n, \infty) \implies f_n(x) = 0$ với mọi $n \ge N$).
> 
> Tuy nhiên, $f_n$ không bảo toàn giới hạn khi đi qua dấu tích phân.

> [!prf]
> Giả sử phản chứng: Định lý hội tụ đơn điệu giảm vẫn đúng cho dãy $f_n$, tức là ta được phép hoán đổi vị trí của giới hạn và tích phân:
> $$\lim_{n \to \infty} \int_D f_n d\mu_L = \int_D \left( \lim_{n \to \infty} f_n \right) d\mu_L$$
> 
> Xét vế phải (tích phân của giới hạn), vì $f_n$ hội tụ điểm về hàm $0$, ta có:
> $$\int_D 0 d\mu_L = 0$$
> 
> Xét vế trái (giới hạn của tích phân). Theo định nghĩa của hàm đặc trưng, tích phân của $f_n$ chính là độ đo Lebesgue của miền tương ứng:
> $$\int_D f_n d\mu_L = \mu_L([n, \infty)) = \infty \quad \forall n \in \mathbb{N}$$
> Do giá trị tích phân của mọi hàm trong dãy đều bằng $\infty$, giới hạn của dãy tích phân là:
> $$\lim_{n \to \infty} \int_D f_n d\mu_L = \lim_{n \to \infty} \infty = \infty$$
> 
> Thế hai kết quả này vào đẳng thức giới hạn ban đầu, ta thu được điều vô lý:
> $$\infty = 0$$
> 
> Điều chứng tỏ định lý hội tụ đơn điệu là sai nếu thiếu đi điều kiện $\int_D f_k d\mu_L < \infty$.

# Độ đo tích – Fubini

Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu) \xrightarrow{?}$ Xây dựng độ đo tích trên không gian $X \times Y$.

Đặt $\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F}, B_i \in \mathcal{G}, \text{ đôi một rời nhau} \right\}$

> [!prp] Mệnh đề 1
> $\mathcal{R}$ là một đại số trên $X \times Y$.
> 
> **Chứng minh nhanh:**
> - $X \times Y \in \mathcal{R} \quad \checkmark$
> - $E \in \mathcal{R} \implies E^c \in \mathcal{R} \quad \checkmark$
> - $\{E_i\}_{i=1,\dots,m} \subset \mathcal{R} \implies \bigcup_{i=1}^m E_i \in \mathcal{R}$ (Bản tập)

> [!def] Định nghĩa: $\sigma$-đại số tích
> Không gian tích $(X \times Y, \mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R}))$.
> Trong đó $\sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{R}$.

**Mục tiêu tiếp theo:** Định nghĩa độ đo tích: $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]\,?$

---

## Mệnh đề: Thiết diện và Tích phân (Chuẩn bị cho Fubini)

> [!prp] Mệnh đề 2
> Cho $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$ là các không gian $\sigma$-hữu hạn ($\sigma$-finite). Cho $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. Tính đo được của thiết diện:
>    - $E_x = \{ y \in Y : (x, y) \in E \} \in \mathcal{G} \quad \forall x \in X$
>    - $E^y = \{ x \in X : (x, y) \in E \} \in \mathcal{F} \quad \forall y \in Y$
> 
> 2. Tính đo được của hàm độ đo thiết diện và Đẳng thức tích phân:
>    Các hàm số $(X \to \overline{\mathbb{R}})$:
>    - Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được.
>    - Hàm $y \mapsto \mu(E^y)$ là $\nu$-đo được.
> 
>    Và ta có đẳng thức:
>    $$\int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu$$

> [!prf] Chứng minh Mệnh đề 2
> 
> ### Bước 1 (B1): Xét $E \in \mathcal{R}$
> Giả sử $E = \bigcup_{i=1}^n A_i \times B_i$ (với các $A_i \times B_i$ rời nhau).
> Khi đó các thiết diện có dạng:
> - $E_x = \bigcup_{i=1}^n (A_i \times B_i)_x$
> - $E^y = \bigcup_{i=1}^n (A_i \times B_i)^y$
> 
> Trong đó:
> $$(A_i \times B_i)_x = \begin{cases} B_i & x \in A_i \\ \emptyset & x \notin A_i \end{cases} \quad ; \quad (A_i \times B_i)^y = \begin{cases} A_i & y \in B_i \\ \emptyset & y \notin B_i \end{cases}$$
> 
> Tính độ đo của thiết diện:
> $$\nu(E_x) = \nu\left(\bigcup_{i=1}^n (A_i \times B_i)_x\right) = \sum_{i=1}^n \nu((A_i \times B_i)_x) = \sum_{i=1}^n \chi_{A_i}(x) \cdot \nu(B_i)$$
> 
> Vì hàm đặc trưng $\chi_{A_i}$ là đo được nên hàm $x \mapsto \nu(E_x)$ cũng đo được.
> Tương tự cho $E^y$:
> $$\mu(E^y) = \sum_{i=1}^n \chi_{B_i}(y) \cdot \mu(A_i)$$
> 
> Lấy tích phân hai vế, ta được:
> - $\int_X \nu(E_x) d\mu = \sum_{i=1}^n \int_X \chi_{A_i}(x) \nu(B_i) d\mu = \sum_{i=1}^n \mu(A_i)\nu(B_i)$
> - $\int_Y \mu(E^y) d\nu = \sum_{i=1}^n \mu(A_i)\nu(B_i)$
> 
> Suy ra $\int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu$. Mệnh đề đúng cho mọi $E \in \mathcal{R}$.
> 
> ### Bước 2 (B2): Xét $E \in \sigma(\mathcal{R}) := \mathcal{F} \otimes \mathcal{G}$
> 
> **Bước 2.1 (B2.1):** Chứng minh $E \in \sigma(\mathcal{R})$ thỏa mãn điều kiện 1.
> - Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa mãn đk 1}\}$.
> - Mục tiêu: Chứng minh $\mathcal{E}$ là một $\sigma$-đại số trên $X \times Y$.
>   - $X \times Y \in \mathcal{E} \quad \checkmark$
>   - Phần bù: Lấy $E \in \mathcal{E} \implies E_x \in \mathcal{G}, E^y \in \mathcal{F}$. Xét phần bù $E^c$:
>     $(E^c)_x = (E_x)^c \in \mathcal{G}$ (vì $\mathcal{G}$ là $\sigma$-đại số).
>     $(E^c)^y = (E^y)^c \in \mathcal{F}$ (vì $\mathcal{F}$ là $\sigma$-đại số).
>     Do đó $E^c \in \mathcal{E}$.
>   - Phép hợp đếm được: Kiểm tra $\bigcup_{n=1}^\infty E_n \in \mathcal{E} \quad \checkmark$
> - Vì $\mathcal{E}$ là $\sigma$-đại số chứa $\mathcal{R}$ (kết quả từ B1), ta suy ra $\sigma(\mathcal{R}) \subset \mathcal{E}$. Do đó $\mathcal{E} = \sigma(\mathcal{R})$.
> 
> **Bước 2.2 (B2.2):** Chứng minh $E \in \sigma(\mathcal{R})$ thỏa mãn điều kiện 2.
> *(Nội dung sẽ tiếp tục được triển khai ở phần sau)*

$\xi$