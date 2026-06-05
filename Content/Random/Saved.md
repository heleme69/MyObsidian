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



$\xi$