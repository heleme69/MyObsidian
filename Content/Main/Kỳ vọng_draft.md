
# Hàm đơn giản

> [!def] Tích phân cho hàm đơn
> Cho $s$ là hàm đơn không âm $s: (E, \mathcal{E}) \to (\mathbb{R}, \mathcal{B})$ và $\mu$ là một độ đo trên $\mathcal{E}$.  
> 
> Giả sử tập giá trị của $s$ là $s(E) = \{\alpha_1, \alpha_2, \dots, \alpha_n\}$. Với mỗi tập đo được $A \in \mathcal{E}$, tích phân của $s$ trên $A$ theo độ đo $\mu$ được định nghĩa là:  
> $$
> \int_A s(x) \, d\mu = \sum_{i=1}^n \alpha_i \, \mu\left(A \cap s^{-1}(\{\alpha_i\})\right)  
> $$


> [!prp] Các tính chất
> 1. Ánh xạ $\nu: \mathcal{E} \to [0, +\infty]$ xác định bởi
>    $$\nu(A) = \int_A s(x) \, d\mu, \quad \forall A \in \mathcal{E}$$
>    là một độ đo trên $(E, \mathcal{E})$.
> 
> 2. Nếu $s(x) = \alpha \mathbb{1}_B(x)$ với $B \in \mathcal{E}$ và $\alpha \ge 0$, thì với mọi $A \in \mathcal{E}$:
>    $$\int_A s(x) \, d\mu = \alpha \, \mu(A \cap B)$$
> 
> 3. Với mọi hàm đơn không âm $s$ và mọi $A \in \mathcal{E}$, tích phân trên tập $A$ tương đương với tích phân của hàm chỉ thị trên không gian mẫu $E$:
>    $$\int_A s(x) \, d\mu = \int_E s(x) \mathbb{1}_A(x) \, d\mu$$

> [!prf]
> **Chứng minh tính chất 1:**
> - Với tập rỗng $\emptyset$:
>   $$\nu(\emptyset) = \sum_{i=1}^n \alpha_i \, \mu\left(\emptyset \cap s^{-1}(\{\alpha_i\})\right) = \sum_{i=1}^n \alpha_i \, \mu(\emptyset) = 0$$
> - Tính cộng đếm được: Cho họ các tập đôi một rời nhau $\{A_k\}_{k=1}^\infty \subset \mathcal{E}$, đặt $A = \bigcup_{k=1}^\infty A_k$:
>   $$\begin{aligned}
>   \nu(A) &= \sum_{i=1}^n \alpha_i \, \mu\left(\left(\bigcup_{k=1}^\infty A_k\right) \cap s^{-1}(\{\alpha_i\})\right) \\
>   &= \sum_{i=1}^n \alpha_i \, \mu\left(\bigcup_{k=1}^\infty \left(A_k \cap s^{-1}(\{\alpha_i\})\right)\right) \\
>   &= \sum_{i=1}^n \alpha_i \sum_{k=1}^\infty \mu\left(A_k \cap s^{-1}(\{\alpha_i\})\right) \\
>   &= \sum_{k=1}^\infty \sum_{i=1}^n \alpha_i \, \mu\left(A_k \cap s^{-1}(\{\alpha_i\})\right) = \sum_{k=1}^\infty \nu(A_k)
>   \end{aligned}$$
> Do đó, $\nu$ là một độ đo trên $(E, \mathcal{E})$.
> 
> **Chứng minh tính chất 2:**
> Hàm $s$ nhận giá trị $\alpha$ trên $B$ và $0$ trên $B^c = E \setminus B$. Theo định nghĩa tích phân hàm đơn:
> $$\int_A s(x) \, d\mu = \alpha \cdot \mu(A \cap B) + 0 \cdot \mu(A \cap B^c) = \alpha \, \mu(A \cap B)$$
> 
> **Chứng minh tính chất 3:**
> Giả sử biểu diễn chuẩn tắc của hàm đơn $s$ là $s(x) = \sum_{i=1}^n \alpha_i \mathbb{1}_{A_i}(x)$, trong đó các tập $A_i = s^{-1}(\{\alpha_i\})$ rời nhau từng đôi một và $\bigcup_{i=1}^n A_i = E$.
> Khi đó:
> $$s(x)\mathbb{1}_A(x) = \left(\sum_{i=1}^n \alpha_i \mathbb{1}_{A_i}(x)\right) \mathbb{1}_A(x) = \sum_{i=1}^n \alpha_i \mathbb{1}_{A \cap A_i}(x)$$
> Các tập $A \cap A_i$ đôi một rời nhau và hàm nhận giá trị $\alpha_i$ trên $A \cap A_i$, nhận giá trị $0$ trên phần bù của $\bigcup_{i=1}^n (A \cap A_i)$.
> Theo định nghĩa tích phân của hàm đơn $s \mathbb{1}_A$ trên toàn không gian $E$:
> $$\int_E s(x)\mathbb{1}_A(x) \, d\mu = \sum_{i=1}^n \alpha_i \, \mu\left(E \cap (A \cap A_i)\right) = \sum_{i=1}^n \alpha_i \, \mu(A \cap A_i)$$
> Mặt khác, theo định nghĩa tích phân của $s$ trên tập $A$:
> $$\int_A s(x) \, d\mu = \sum_{i=1}^n \alpha_i \, \mu(A \cap s^{-1}(\{\alpha_i\})) = \sum_{i=1}^n \alpha_i \, \mu(A \cap A_i)$$
> Vậy:
> $$\int_A s(x) \, d\mu = \int_E s(x) \mathbb{1}_A(x) \, d\mu$$

> [!prp] (Các tính chất của tích phân cho hàm đơn)
> Cho không gian đo được $(E, \mathcal{E}, \mu)$ và $A \in \mathcal{E}$. Giả sử $s, t: E \to \mathbb{R}$ là hai hàm đơn đo được không âm. Khi đó:
> 
> 1. Nếu $s(\omega) = t(\omega)$ với mọi $\omega \in A$, thì:
>    $$\int_A s(\omega) \, d\mu = \int_A t(\omega) \, d\mu$$
> 
> 2. Tính tuyến tính với phép cộng:
>    $$\int_A (s + t) \, d\mu = \int_A s \, d\mu + \int_A t \, d\mu$$
> 
> 3. Tính thuần nhất với hằng số $c > 0$:
>    $$\int_A c s \, d\mu = c \int_A s \, d\mu$$
> 
> 4. Tính đơn điệu: Nếu $s \ge t \ge 0$ trên $A$, thì:
>    $$\int_A s(\omega) \, d\mu \ge \int_A t(\omega) \, d\mu$$

> [!prf]
> Giả sử biểu diễn chuẩn tắc của $s$ và $t$ lần lượt là:
> $$s = \sum_{i=1}^n \alpha_i \mathbb{1}_{E_i}, \quad t = \sum_{j=1}^m \beta_j \mathbb{1}_{F_j}$$
> trong đó $\{E_i\}_{i=1}^n$ và $\{F_j\}_{j=1}^m$ là các phân hoạch đo được của $E$. Khi đó $\{E_i \cap F_j\}_{i, j}$ tạo thành một phân hoạch mịn hơn của $E$.
> 
> **Chứng minh (1):**
> Vì $s(\omega) = t(\omega)$ với mọi $\omega \in A$, nên với mỗi cặp $(i, j)$ mà $A \cap E_i \cap F_j \neq \emptyset$, ta có $\alpha_i = \beta_j$. Do đó:
> $$\begin{aligned}
> \int_A s \, d\mu &= \sum_{i=1}^n \alpha_i \, \mu(A \cap E_i) = \sum_{i=1}^n \sum_{j=1}^m \alpha_i \, \mu(A \cap E_i \cap F_j) \\
> &= \sum_{i=1}^n \sum_{j=1}^m \beta_j \, \mu(A \cap E_i \cap F_j) = \sum_{j=1}^m \beta_j \, \mu(A \cap F_j) = \int_A t \, d\mu
> \end{aligned}$$
> 
> **Chứng minh (2):**
> Trên mỗi tập $E_i \cap F_j$, hàm $s + t$ nhận giá trị không đổi là $\alpha_i + \beta_j$. Ta có:
> $$\begin{aligned}
> \int_A (s + t) \, d\mu &= \sum_{i=1}^n \sum_{j=1}^m (\alpha_i + \beta_j) \, \mu(A \cap E_i \cap F_j) \\
> &= \sum_{i=1}^n \alpha_i \sum_{j=1}^m \mu(A \cap E_i \cap F_j) + \sum_{j=1}^m \beta_j \sum_{i=1}^n \mu(A \cap E_i \cap F_j) \\
> &= \sum_{i=1}^n \alpha_i \, \mu(A \cap E_i) + \sum_{j=1}^m \beta_j \, \mu(A \cap F_j) \\
> &= \int_A s \, d\mu + \int_A t \, d\mu
> \end{aligned}$$
> 
> **Chứng minh (3):**
> Hàm $c s$ nhận các giá trị $c \alpha_i$ trên các tập $E_i$. Theo định nghĩa:
> $$\int_A c s \, d\mu = \sum_{i=1}^n (c \alpha_i) \, \mu(A \cap E_i) = c \sum_{i=1}^n \alpha_i \, \mu(A \cap E_i) = c \int_A s \, d\mu$$
> 
> **Chứng minh (4):**
> Vì $s \ge t \ge 0$ trên $A$, đặt $u = (s - t)\mathbb{1}_A \ge 0$. Khi đó $u$ là một hàm đơn không âm và $s\mathbb{1}_A = t\mathbb{1}_A + u$.
> Áp dụng tính cộng tính và tính chất của hàm không âm:
> $$\int_A s \, d\mu = \int_A t \, d\mu + \int_A u \, d\mu$$
> Do $u \ge 0$, ta có $\int_A u \, d\mu \ge 0$, suy ra:
> $$\int_A s(\omega) \, d\mu \ge \int_A t(\omega) \, d\mu$$

> [!cor] Hệ quả
> Nếu $s(\omega) = \sum_{j=1}^m \beta_j \mathbb{1}_{A_j}(\omega)$ với $\beta_j \ge 0$ và $A_j \in \mathcal{E}$, thì với mọi $A \in \mathcal{E}$:
> 
> $$\int_A s(\omega) \, d\mu = \sum_{j=1}^m \beta_j \, \mu(A_j \cap A)$$

> [!prf]
> Sử dụng tính chất tuyến tính của tích phân hàm đơn (tính chất cộng tính và thuần nhất đối với hằng số không âm), ta có:
> 
> $$\int_A s(\omega) \, d\mu = \int_A \left( \sum_{j=1}^m \beta_j \mathbb{1}_{A_j}(\omega) \right) d\mu = \sum_{j=1}^m \beta_j \int_A \mathbb{1}_{A_j}(\omega) \, d\mu$$
> 
> Áp dụng tính chất tích phân của hàm chỉ thị trên tập $A$:
> 
> $$\int_A \mathbb{1}_{A_j}(\omega) \, d\mu = \mu(A_j \cap A)$$
> 
> Thay vào biểu thức trên, ta được:
> 
> $$\int_A s(\omega) \, d\mu = \sum_{j=1}^m \beta_j \, \mu(A_j \cap A)$$

> [!def] Biến ngẫu nhiên đơn và Kỳ vọng
> Cho không gian xác suất $(\Omega, \mathcal{A}, P)$.
> 
> 1. Một biến ngẫu nhiên $X: \Omega \to \mathbb{R}$ được gọi là **đơn giản** (simple random variable) nếu tập giá trị của nó là hữu hạn. Khi đó, $X$ luôn có thể biểu diễn dưới dạng:
>    $$X = \sum_{i=1}^n a_i \mathbb{1}_{A_i}$$
>    trong đó $a_i \in \mathbb{R}$ và các biến cố $A_i \in \mathcal{A}$ ($1 \le i \le n$).
> 
> 2. **Kỳ vọng** (expectation hay tích phân theo độ đo $P$) của biến ngẫu nhiên đơn $X$ được định nghĩa là:
>    $$E[X] = \int_\Omega X \, dP = \sum_{i=1}^n a_i P(A_i)$$

> [!obs] Tính xác định tốt (Well-definedness)
> Một biến ngẫu nhiên đơn $X$ có vô số cách biểu diễn dạng tổ hợp tuyến tính của các hàm chỉ thị $X = \sum_{i=1}^n a_i \mathbb{1}_{A_i}$, trong đó các tập $\{A_i\}_{i=1}^n$ không nhất thiết phải rời nhau và các hệ số $\{a_i\}_{i=1}^n$ không nhất thiết phải phân biệt.
> 
> Định nghĩa kỳ vọng trên là xác định tốt vì giá trị của $E[X]$ hoàn toàn độc lập với cách chọn biểu diễn:
> - **Biểu diễn chuẩn tắc:** Nếu xét tập giá trị thực tế phân biệt $X(\Omega) = \{x_1, x_2, \dots, x_k\}$ với các tập biến cố rời nhau $B_j = \{X = x_j\} = X^{-1}(\{x_j\})$, ta có biểu diễn chuẩn tắc duy nhất $X = \sum_{j=1}^k x_j \mathbb{1}_{B_j}$ và $E[X] = \sum_{j=1}^k x_j P(B_j)$.
> - **Tính độc lập:** Với mọi biểu diễn tùy ý $X = \sum_{i=1}^n a_i \mathbb{1}_{A_i}$, bằng cách phân hoạch không gian mẫu qua các giao $A_i \cap B_j$, phép biến đổi tuyến tính của tích phân/độ đo chứng minh rằng:
>   $$\sum_{i=1}^n a_i P(A_i) = \sum_{j=1}^k x_j P(B_j)$$
> Do đó, ta có thể tự do tính $E[X]$ từ bất kỳ biểu diễn dạng tổng các hàm chỉ thị nào mà không làm thay đổi giá trị kỳ vọng.

# Tính hầu khắp nơi

> [!prp] Tích phân trên tập có độ đo bằng 0
> Cho $(E, \mathcal{E}, \mu)$ là một không gian độ đo và $s: E \to [0, +\infty)$ là một hàm đơn không âm. Nếu $A \in \mathcal{E}$ thỏa mãn $\mu(A) = 0$, thì:
> 
> $$\int_A s \, d\mu = 0$$

> [!prf]
> Giả sử biểu diễn chuẩn tắc của hàm đơn $s$ là:
> 
> $$s = \sum_{i=1}^n \alpha_i \mathbb{1}_{A_i}$$
> 
> trong đó $\alpha_i \ge 0$ và $\{A_i\}_{i=1}^n$ là một phân hoạch đo được của $E$ (với $A_i = s^{-1}(\{\alpha_i\})$).
> 
> Theo định nghĩa tích phân cho hàm đơn trên tập $A$:
> 
> $$\int_A s \, d\mu = \sum_{i=1}^n \alpha_i \, \mu(A \cap A_i)$$
> 
> Vì $A \cap A_i \subseteq A$ và $\mu$ là một độ đo, theo tính đơn điệu của độ đo ta có:
> 
> $$0 \le \mu(A \cap A_i) \le \mu(A)$$
> 
> Do $\mu(A) = 0$, suy ra $\mu(A \cap A_i) = 0$ với mọi $i = 1, \dots, n$.
> 
> Thay vào công thức tích phân, ta được:
> 
> $$\int_A s \, d\mu = \sum_{i=1}^n \alpha_i \cdot 0 = 0$$

> [!def] Hầu khắp nơi (Almost Everywhere - a.e)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$. Một tính chất $P(x)$ được gọi là nghiệm đúng **hầu khắp nơi theo độ đo $\mu$** trên tập $A \in \mathcal{E}$ (ký hiệu là $\mu\text{-a.e}$), nếu tập hợp các điểm trong $A$ mà tại đó tính chất không thỏa mãn có độ đo bằng $0$:
> 
> $$\mu\left(\{x \in A \mid P(x) \text{ sai}\}\right) = 0$$
> 
> Trong lý thuyết xác suất $(\Omega, \mathcal{A}, P)$, khái niệm này tương ứng với **hầu chắc chắn** (almost surely - $\text{a.s.}$):
> 
> $$P\left(\{\omega \in \Omega \mid P(\omega) \text{ đúng}\}\right) = 1$$

> [!prp] (Phát biểu tương đương của tập có tính hầu khắp nơi)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và tập đo được $A \in \mathcal{E}$. Cho tính chất $P(x)$ với $x \in A$. Hai phát biểu sau là tương đương:
>
> (a) $P(x)$ nghiệm đúng $\mu$-a.e trên $A$.
>
> (b) Tồn tại tập $N \in \mathcal{E}$ sao cho $\mu(N) = 0$ và $P(x)$ đúng với mọi $x \in A \setminus N$.

> [!prf] 
> Đặt $N_0 = \{x \in A \mid P(x) \text{ sai}\}$.
>
> Chiều ${} (\implies) {}$: Giả sử (a) đúng, tức là $\mu(N_0) = 0$. Chọn ngay $N = N_0 \in \mathcal{E}$. Khi đó $\mu(N) = 0$, và hiển nhiên $P(x)$ nghiệm đúng với mọi $x \in A \setminus N$.
>
> Chiều ($\impliedby$): Giả sử tồn tại $N \in \mathcal{E}$ thỏa mãn $\mu(N) = 0$ và $P(x)$ đúng với mọi $x \in A \setminus N$. Khi đó ta có ngay quan hệ bao hàm $N_0 \subset N$. Theo tính đơn điệu của độ đo:
> $$0 \le \mu(N_0) \le \mu(N) = 0 \implies \mu(N_0) = 0$$
> Vậy $P(x)$ nghiệm đúng $\mu$-a.e trên $A$.

> [!prp] (Tính chất hay dùng của các tập có độ đo không)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$. Giả sử $A, B \in \mathcal{E}$ và $A_n \in \mathcal{E}$ với mọi $n \in \mathbb{N}^*$. Khi đó:
>
> (1) Nếu $B \subset A$ và $\mu(A) = 0$ thì $\mu(B) = 0$.
>
> (2) Nếu $\mu(A_n) = 0$ với mọi $n \in \mathbb{N}^*$ thì:
> $$\mu\left(\bigcup_{n=1}^\infty A_n\right) = 0$$

> [!prf] 
> **Chứng minh (1):**
>
> Do $B \in \mathcal{E}$ và $B \subset A$, theo tính đơn điệu của độ đo không âm, ta có:
> $$0 \le \mu(B) \le \mu(A)$$
>
> Kết hợp với giả thiết $\mu(A) = 0$, ta suy ra:
> $$\mu(B) = 0$$
>
> **Chứng minh (2):**
>
> Do các tập $A_n \in \mathcal{E}$, theo tính dưới cộng tính đếm được của độ đo, ta có:
> $$0 \le \mu\left(\bigcup_{n=1}^\infty A_n\right) \le \sum_{n=1}^\infty \mu(A_n)$$
>
> Vì $\mu(A_n) = 0$ với mọi $n \in \mathbb{N}^*$, tổng chuỗi số thực hiển nhiên triệt tiêu:
> $$\sum_{n=1}^\infty \mu(A_n) = \sum_{n=1}^\infty 0 = 0$$
>
> Theo nguyên lý kẹp, ta thu được:
> $$\mu\left(\bigcup_{n=1}^\infty A_n\right) = 0$$

# Tích phân hàm không âm

> [!def] Định nghĩa (Tích phân của hàm đo được không âm)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$, hàm số $f: E \to [0, \infty]$ đo được không âm, và tập đo được $A \in \mathcal{E}$. Tích phân của $f$ trên $A$ theo độ đo $\mu$ được định nghĩa bởi:
> $$\int_A f \, d\mu = \sup_{0 \le s \le f, \, s \text{ đơn giản}} \left( \int_A s \, d\mu \right)$$

> [!prp] Mệnh đề (Các tính chất của tích phân cho hàm đo được không âm)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và hàm số $f: E \to [0, \infty]$ đo được không âm. Khi đó:
>
> 1. Tính đơn điệu theo miền lấy tích phân: Với mọi $A, B \in \mathcal{E}$ thỏa mãn $A \subset B$, ta có:
> $$\int_A f \, d\mu \le \int_B f \, d\mu$$
>
> 2. Biểu diễn qua hàm chỉ thị: Với mọi $A \in \mathcal{E}$, ta có:
> $$\int_A f \, d\mu = \int_E f \cdot \mathbb{1}_A \, d\mu$$
> trong đó:
> $$\mathbb{1}_A(x) = \begin{cases} 1, & x \in A \\ 0, & x \notin A \end{cases}$$
>
> 3. Tích phân của hàm hằng trên một tập: Nếu $f(x) = c \ge 0$ trên tập $A \in \mathcal{E}$, thì:
> $$\int_A f \, d\mu = c \cdot \mu(A)$$
>
> 4. Tính triệt tiêu hầu khắp nơi: Nếu $\int_E f \, d\mu = 0$ (với $f \ge 0$), thì:
> $$f = 0 \text{ hầu khắp nơi (a.e.) trên } E$$

> [!lem] Bổ đề 1 (Xấp xỉ hàm đo được không âm bằng dãy hàm đơn giản tăng)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và hàm đo được không âm $f: E \to [0, \infty]$ trên tập $A \in \mathcal{E}$. Khi đó tồn tại một dãy hàm đơn giản không âm $(s_n)_{n \ge 1}$ tăng dần về $f$ trên $A$ khi $n \to \infty$ ($s_n \nearrow f$). Một dãy cụ thể được xác định bởi:
> $$s_n(x) = \sum_{k=0}^{n2^n - 1} \frac{k}{2^n} \mathbb{1}_{\left\{x \in A : \frac{k}{2^n} \le f(x) < \frac{k+1}{2^n}\right\}}(x) + n \mathbb{1}_{\{x \in A : f(x) \ge n\}}(x)$$

> [!lem] Bổ đề 2 (Sự hội tụ của tích phân theo dãy hàm đơn giản tăng)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và hàm đo được không âm $f: E \to [0, \infty]$ trên tập $A \in \mathcal{E}$. Nếu $(s_n)_{n \ge 1}$ là bất kỳ dãy hàm đơn giản không âm nào tăng dần về $f$ trên $A$ ($s_n \nearrow f$), thì dãy tích phân tương ứng tăng dần về tích phân của $f$:
> $$\lim_{n \to \infty} \int_A s_n \, d\mu = \int_A f \, d\mu$$

> [!lem] Bổ đề 3 (Bổ đề Fatou theo phương pháp Beppo Levi)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và tập đo được $A \in \mathcal{E}$. Giả sử $(f_n)_{n \ge 1}$ là một dãy hàm đo được không âm trên tập $A$ ($f_n \ge 0$). Khi đó:
> $$\int_A \liminf_{n \to \infty} f_n \, d\mu \le \liminf_{n \to \infty} \int_A f_n \, d\mu$$

> [!prf]
> Đặt $L = \liminf_{n \to \infty} \int_A f_n \, d\mu \in [0, +\infty]$.
>
> **Trường hợp 1:** Nếu $L = +\infty$, bất đẳng thức hiển nhiên nghiệm đúng.
>
> **Trường hợp 2:** Nếu $L < +\infty$.
>
> **Bước 1: Trích dãy con đạt giới hạn tích phân**
> Theo tính chất của giới hạn dưới của dãy số thực, tồn tại một **dãy con** $(f_{n_k})_{k \ge 1}$ sao cho:
> $$\lim_{k \to \infty} \int_A f_{n_k} \, d\mu = L$$
>
> **Bước 2: Xây dựng dãy hàm tăng**
> Với mỗi $k \ge 1$, đặt:
> $$g_k = \inf_{j \ge k} f_{n_j}$$
> Khi đó $g_k$ là hàm đo được không âm, $g_k \le f_{n_k}$, và dãy $(g_k)_{k \ge 1}$ là một dãy tăng đơn điệu:
> $$0 \le g_1 \le g_2 \le \dots \le g_k \le g_{k+1} \le \dots$$
> Dãy $(g_k)$ hội tụ từng điểm về:
> $$g = \lim_{k \to \infty} g_k = \liminf_{k \to \infty} f_{n_k} \ge \liminf_{n \to \infty} f_n$$
> *Nhận xét:* Nếu mỗi $g_k$ là hàm đơn giản, theo **Bổ đề 2** ta có ngay $\lim_{k \to \infty} \int_A g_k \, d\mu = \int_A g \, d\mu \le L$. Tuy nhiên, infimum vô hạn của hàm đo được nói chung không đơn giản.
> 
> **Bước 3: Chéo hóa các hàm đơn giản theo phương pháp Beppo Levi**
> Áp dụng Bổ đề 1, với mỗi chỉ số $k \ge 1$, do $g_k \ge 0$ đo được nên tồn tại một dãy hàm đơn giản không âm $(s_{k, m})_{m \ge 1}$ tăng dần về $g_k$ khi $m \to \infty$ ($s_{k, m} \nearrow g_k$).
>
> Với mỗi $m \ge 1$, ta thiết lập hàm đơn giản cực đại:
> $$t_m = \max_{1 \le k \le m} s_{k, m}$$
> Vì là cực đại của hữu hạn hàm đơn giản không âm, $t_m$ là một hàm đơn giản không âm. Hơn nữa:
> * Tính đơn điệu: Do $s_{k, m} \le s_{k, m+1}$, ta có $t_m \le t_{m+1}$ với mọi $m \ge 1$.
> * Quan hệ kẹp giới hạn: Với mỗi $k \le m$ cố định, ta có:
> $$s_{k, m} \le t_m \le \max_{1 \le k \le m} g_k = g_m \le g$$
> Cho $m \to \infty$ ở bất đẳng thức $s_{k, m} \le t_m$, ta được $g_k \le \lim_{m \to \infty} t_m \le g$ với mọi $k \ge 1$.
> Tiếp tục cho $k \to \infty$, ta thu được $\lim_{m \to \infty} t_m = g$.
>
> Như vậy, $(t_m)_{m \ge 1}$ là một dãy các hàm đơn giản không âm tăng dần về $g$ trên $A$ ($t_m \nearrow g$).
>
> **Bước 4: Kết luận bằng Bổ đề 2**
> Áp dụng trực tiếp Bổ đề 2 cho hàm $g$ và dãy hàm đơn giản tăng xấp xỉ $(t_m)_{m \ge 1}$:
> $$\int_A g \, d\mu = \lim_{m \to \infty} \int_A t_m \, d\mu$$
>
> Mặt khác, do $t_m \le g_m \le f_{n_m}$ với mọi $m \ge 1$, theo tính đơn điệu của tích phân hàm đơn:
> $$\int_A t_m \, d\mu \le \int_A f_{n_m} \, d\mu$$
>
> Lấy giới hạn hai vế khi $m \to \infty$:
> $$\int_A g \, d\mu = \lim_{m \to \infty} \int_A t_m \, d\mu \le \lim_{m \to \infty} \int_A f_{n_m} \, d\mu = L$$
>
> Vì $\liminf_{n \to \infty} f_n \le g$ trên $A$, tính đơn điệu của tích phân cho ta:
> $$\int_A \liminf_{n \to \infty} f_n \, d\mu \le \int_A g \, d\mu \le L = \liminf_{n \to \infty} \int_A f_n \, d\mu$$

> [!cor] (Tính tuyến tính của tích phân hàm đo được không âm)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và tập đo được $A \in \mathcal{E}$. Giả sử $f, g: E \to [0, \infty]$ là các hàm đo được không âm. Khi đó:
>
> 1. Tính tuyến tính với phép cộng:
> $$\int_A (f + g) \, d\mu = \int_A f \, d\mu + \int_A g \, d\mu$$
>
> 2. Tính thuần nhất với hằng số $c > 0$:
> $$\int_A c \cdot f \, d\mu = c \int_A f \, d\mu \quad (c \ge 0)$$

> [!prf] 
> **Chứng minh (1):**
>
> Áp dụng Bổ đề 1 cho hai hàm đo được không âm $f$ và $g$ trên tập $A$, tồn tại các dãy hàm đơn giản không âm $(s_n)_{n \ge 1}$ và $(t_n)_{n \ge 1}$ sao cho:
> $$s_n \nearrow f \quad \text{và} \quad t_n \nearrow g \quad \text{khi } n \to \infty$$
>
> Do tổng của hai hàm đơn giản là một hàm đơn giản và tổng hai dãy tăng là một dãy tăng, ta suy ra:
> $$(s_n + t_n) \nearrow (f + g) \quad \text{khi } n \to \infty$$
>
> Áp dụng Bổ đề 2 cho hàm $(f + g)$ và dãy hàm đơn giản xấp xỉ $(s_n + t_n)$ trên $A$:
> $$\lim_{n \to \infty} \int_A (s_n + t_n) \, d\mu = \int_A (f + g) \, d\mu$$
>
> Mặt khác, theo tính cộng tính của tích phân đối với hàm đơn giản không âm:
> $$\int_A (s_n + t_n) \, d\mu = \int_A s_n \, d\mu + \int_A t_n \, d\mu$$
>
> Lấy giới hạn hai vế khi $n \to \infty$, đồng thời áp dụng Bổ đề 2 riêng cho từng dãy $s_n \nearrow f$ và $t_n \nearrow g$:
> $$\lim_{n \to \infty} \left( \int_A s_n \, d\mu + \int_A t_n \, d\mu \right) = \lim_{n \to \infty} \int_A s_n \, d\mu + \lim_{n \to \infty} \int_A t_n \, d\mu = \int_A f \, d\mu + \int_A g \, d\mu$$
>
> Từ đó ta kết luận:
> $$\int_A (f + g) \, d\mu = \int_A f \, d\mu + \int_A g \, d\mu$$
>
> **Chứng minh (2):**
>
> Nếu $c = 0$, hai vế hiển nhiên bằng $0$.
>
> Nếu $c > 0$, lấy dãy hàm đơn giản không âm $s_n \nearrow f$ từ Bổ đề 1. Khi đó dãy $(c \cdot s_n)_{n \ge 1}$ cũng là một dãy hàm đơn giản không âm tăng dần về $c \cdot f$ trên $A$.
>
> Áp dụng Bổ đề 2 cho hàm $c \cdot f$ và dãy xấp xỉ $c \cdot s_n$:
> $$\int_A c \cdot f \, d\mu = \lim_{n \to \infty} \int_A (c \cdot s_n) \, d\mu$$
>
> Theo tính chất của tích phân trên hàm đơn giản:
> $$\int_A (c \cdot s_n) \, d\mu = c \int_A s_n \, d\mu$$
>
> Lấy giới hạn khi $n \to \infty$ và áp dụng Bổ đề 2 cho dãy $s_n \nearrow f$:
> $$\int_A c \cdot f \, d\mu = \lim_{n \to \infty} \left( c \int_A s_n \, d\mu \right) = c \lim_{n \to \infty} \int_A s_n \, d\mu = c \int_A f \, d\mu$$

# Tích phân hàm có dấu bất kỳ

> [!def] Phân rã chính tắc và Định nghĩa tích phân
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và tập đo được $A \in \mathcal{E}$. Cho hàm số đo được $f: E \to [-\infty, +\infty]$.
>
> 1. Phân rã chính tắc: Ta định nghĩa **phần dương** $f^+$ và **phần âm** $f^-$ của $f$ bởi:
> $$f^+(x) = \max(f(x), 0) = f(x) \vee 0, \quad f^-(x) = \max(-f(x), 0) = -(f(x) \wedge 0)$$
> Khi đó $f^+$ và $f^-$ là các hàm đo được không âm trên $E$, thỏa mãn:
> $$f = f^+ - f^-, \quad |f| = f^+ + f^-$$
>
> 2. Hàm khả tích: Hàm số $f$ được gọi là **khả tích** (integrable) trên $A$ theo độ đo $\mu$ nếu cả hai tích phân thành phần đều hữu hạn:
> $$\int_A f^+ \, d\mu < \infty \quad \text{và} \quad \int_A f^- \, d\mu < \infty$$
> Khi đó, **tích phân Lebesgue** của $f$ trên $A$ được định nghĩa là:
> $$\int_A f \, d\mu = \int_A f^+ \, d\mu - \int_A f^- \, d\mu$$
> Không gian tất cả các hàm khả tích trên $E$ được ký hiệu là $\mathcal{L}^1(E, \mathcal{E}, \mu)$.
>
> 3. Ta quy ước: Nếu có nhiều nhất một trong hai đại lượng $\int_A f^+ \, d\mu$ hoặc $\int_A f^- \, d\mu$ bằng $+\infty$, tích phân $\int_A f \, d\mu$ vẫn được xác định trong $[-\infty, +\infty]$ theo cùng công thức hiệu số trên (với quy ước $+\infty - c = +\infty$ và $c - \infty = -\infty$ với $c \in \mathbb{R}$). Nếu cả hai tích phân đều bằng $+\infty$, tích phân của $f$ không tồn tại.

> [!prp] Các tính chất cơ bản của tích phân hàm khả tích
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$, tập đo được $A \in \mathcal{E}$, và $f, g \in \mathcal{L}^1(E, \mathcal{E}, \mu)$. Khi đó:
>
> 4. Tiêu chuẩn khả tích tuyệt đối và Bất đẳng thức tam giác: Ta có $f \in \mathcal{L}^1(E, \mathcal{E}, \mu)$ khi và chỉ khi $|f| \in \mathcal{L}^1(E, \mathcal{E}, \mu)$. Trong trường hợp đó:
> $$\left| \int_A f \, d\mu \right| \le \int_A |f| \, d\mu$$
>
> 5. Tính tuyến tính: Không gian $\mathcal{L}^1(E, \mathcal{E}, \mu)$ là một không gian vectơ thực, và với mọi $\alpha, \beta \in \mathbb{R}$:
> $$\int_A (\alpha f + \beta g) \, d\mu = \alpha \int_A f \, d\mu + \beta \int_A g \, d\mu$$
>
> 6. Tính bảo toàn thứ tự: Nếu $f \le g$ $\mu$-a.e trên $A$, thì:
> $$\int_A f \, d\mu \le \int_A g \, d\mu$$
>
> 7. Tính bất biến hầu khắp nơi: Nếu $f = g$ $\mu$-a.e trên $A$, thì:
> $$\int_A f \, d\mu = \int_A g \, d\mu$$

> [!prf]
> **Chứng minh tiêu chuẩn khả tích tuyệt đối:**
> Do $|f| = f^+ + f^-$ và $f^+, f^-$ là các hàm đo được không âm, áp dụng tính tuyến tính của tích phân hàm không âm ta có:
> $$\int_A |f| \, d\mu = \int_A f^+ \, d\mu + \int_A f^- \, d\mu$$
> Do đó $\int_A |f| \, d\mu < \infty$ khi và chỉ khi cả $\int_A f^+ \, d\mu < \infty$ và $\int_A f^- \, d\mu < \infty$, tức $f \in \mathcal{L}^1(E, \mathcal{E}, \mu)$.
> 
> Áp dụng bất đẳng thức tam giác cho các số thực:
> $$\left| \int_A f \, d\mu \right| = \left| \int_A f^+ \, d\mu - \int_A f^- \, d\mu \right| \le \int_A f^+ \, d\mu + \int_A f^- \, d\mu = \int_A |f| \, d\mu$$
>
> **Chứng minh tính tuyến tính:**
> Với $f, g \in \mathcal{L}^1(E, \mathcal{E}, \mu)$, ta có $|f + g| \le |f| + |g|$. Theo tính đơn điệu và cộng tính của tích phân không âm:
> $$\int_A |f + g| \, d\mu \le \int_A |f| \, d\mu + \int_A |g| \, d\mu < \infty$$
> Do đó $f + g \in \mathcal{L}^1(E, \mathcal{E}, \mu)$. Tương tự với mọi $\alpha \in \mathbb{R}$, $|\alpha f| = |\alpha| |f| \in \mathcal{L}^1(E, \mathcal{E}, \mu)$, nên $\mathcal{L}^1(E, \mathcal{E}, \mu)$ là một không gian vectơ.
>
> Để chứng minh tính cộng tính, đặt $h = f + g$. Ta biểu diễn:
> $$h^+ - h^- = (f^+ - f^-) + (g^+ - g^-) \iff h^+ + f^- + g^- = h^- + f^+ + g^+$$
> Hai vế đều là tổng của các hàm đo được không âm. Áp dụng tính chất cộng tính của tích phân hàm không âm:
> $$\int_A h^+ \, d\mu + \int_A f^- \, d\mu + \int_A g^- \, d\mu = \int_A h^- \, d\mu + \int_A f^+ \, d\mu + \int_A g^+ \, d\mu$$
> Vì tất cả các tích phân trên đều hữu hạn, ta chuyển vế:
> $$\int_A h^+ \, d\mu - \int_A h^- \, d\mu = \left(\int_A f^+ \, d\mu - \int_A f^- \, d\mu\right) + \left(\int_A g^+ \, d\mu - \int_A g^- \, d\mu\right)$$
> Suy ra $\int_A (f + g) \, d\mu = \int_A f \, d\mu + \int_A g \, d\mu$.
>
> Với $\alpha \ge 0$, ta có $(\alpha f)^+ = \alpha f^+$ và $(\alpha f)^- = \alpha f^-$, nên $\int_A \alpha f \, d\mu = \alpha \int_A f \, d\mu$.
> Với $\alpha = -1$, $(-f)^+ = f^-$ và $(-f)^- = f^+$, nên:
> $$\int_A (-f) \, d\mu = \int_A f^- \, d\mu - \int_A f^+ \, d\mu = -\int_A f \, d\mu$$
> Kết hợp hai trường hợp trên ta thu được $\int_A (\alpha f) \, d\mu = \alpha \int_A f \, d\mu$ với mọi $\alpha \in \mathbb{R}$.
>
> **Chứng minh tính bảo toàn thứ tự:**
> Vì $g \ge f$ $\mu$-a.e trên $A$, hàm số $h = g - f$ thỏa mãn $h \ge 0$ $\mu$-a.e trên $A$. Theo tính chất của tích phân hàm không âm, $\int_A (g - f) \, d\mu \ge 0$.
> Áp dụng tính tuyến tính vừa chứng minh:
> $$\int_A g \, d\mu - \int_A f \, d\mu = \int_A (g - f) \, d\mu \ge 0 \implies \int_A f \, d\mu \le \int_A g \, d\mu$$
>
> **Chứng minh tính bất biến hầu khắp nơi:**
> Do $f = g$ $\mu$-a.e trên $A$, ta có đồng thời $f \le g$ $\mu$-a.e và $g \le f$ $\mu$-a.e trên $A$. Áp dụng tính bảo toàn thứ tự:
> $$\int_A f \, d\mu \le \int_A g \, d\mu \quad \text{và} \quad \int_A g \, d\mu \le \int_A f \, d\mu$$
> Suy ra $\int_A f \, d\mu = \int_A g \, d\mu$.

> [!obs] Không gian thương L1
> Quan hệ bằng nhau hầu khắp nơi ($f \sim g \iff f = g \text{ a.e.}$) là một quan hệ tương đương tương thích với các phép toán vectơ.
>
> Ta định nghĩa không gian thương:
> $$L^1(E, \mathcal{E}, \mu) = \mathcal{L}^1(E, \mathcal{E}, \mu) / \sim$$
> Trên $L^1(E, \mathcal{E}, \mu)$, đại lượng:
> $$\|f\|_{L^1} = \int_E |f| \, d\mu$$
> xác định một **chuẩn** (norm) thực sự, biến $L^1(E, \mathcal{E}, \mu)$ thành một không gian Banach. Ta quy ước đồng nhất mỗi hàm $f \in \mathcal{L}^1$ với lớp tương đương của nó trong $L^1$.

# Kỳ vọng

> [!def] Định nghĩa (Kỳ vọng)
> Cho $(\Omega, \mathcal{A}, \mathbb{P})$ là một không gian xác suất. Đối với một biến ngẫu nhiên thực $X: \Omega \to \mathbb{R}$, nếu $X \ge 0$ hầu chắc chắn hoặc $X$ khả tích, ta định nghĩa giá trị kỳ vọng $\mathbb{E}X$ là tích phân Lebesgue của $X$ trên $\Omega$ theo độ đo $\mathbb{P}$:
> $$\mathbb{E}X := \int_{\Omega} X(\omega) \, d\mathbb{P}(\omega) = \int_{\Omega} X(\omega) \, \mathbb{P}(d\omega)$$

> [!def] Định nghĩa (Phân phối xác suất & Hàm kéo về)
> Cho không gian xác suất $(\Omega, \mathcal{A}, \mathbb{P})$, không gian đo được $(E, \mathcal{E})$ và $X: \Omega \to E$ là một biến ngẫu nhiên đo được.
>
> 1. Phân phối xác suất: Ánh xạ $X$ cảm sinh một độ đo xác suất $\mathbb{P}^X$ trên $(E, \mathcal{E})$, định nghĩa bởi:
> $$\mathbb{P}^X(B) := \mathbb{P}(X^{-1}(B)) = \mathbb{P}(X \in B), \quad \forall B \in \mathcal{E}$$
> Độ đo $\mathbb{P}^X$ được gọi là phân phối (hay luật) của biến ngẫu nhiên $X$.
>
> 2. Hàm kéo về: Cho hàm đo được $h: (E, \mathcal{E}) \to (\mathbb{R}, \mathcal{B})$. Phép toán kéo về của $h$ qua $X$, ký hiệu là $X^*h: \Omega \to \mathbb{R}$, xác định bởi ánh xạ hợp thành:
> $$(X^*h)(\omega) := (h \circ X)(\omega) = h(X(\omega))$$
> Do hợp của các hàm đo được là một hàm đo được, $X^*h = h(X)$ tạo thành một biến ngẫu nhiên thực trên $\Omega$.

> [!lem] Quy tắc kỳ vọng (LOTUS: Law of the Unconscious Statistician)
> Cho biến ngẫu nhiên $X: (\Omega, \mathcal{A}) \to (E, \mathcal{E})$ có phân phối $\mathbb{P}^X$, và hàm đo được $h: (E, \mathcal{E}) \to (\mathbb{R}, \mathcal{B})$. Khi đó:
>
> (a) Ta có $h(X) \in \mathcal{L}^1(\Omega, \mathcal{A}, \mathbb{P})$ khi và chỉ khi $h \in \mathcal{L}^1(E, \mathcal{E}, \mathbb{P}^X)$.
>
> (b) Nếu $h \ge 0$ hoặc $h$ thỏa mãn điều kiện khả tích ở mục (a), ta có:
> $$\mathbb{E}\{h(X)\} = \int_{\Omega} h(X(\omega)) \, d\mathbb{P}(\omega) = \int_E h(x) \, d\mathbb{P}^X(x)$$

> [!prf]
> Ta chứng minh đẳng thức tích phân qua các bước xấp xỉ của hàm đo được:
>
> Bước 1: Hàm chỉ thị
> Xét $h = \mathbb{1}_B$ với $B \in \mathcal{E}$ bất kỳ.
> Đối với vế trái:
> $$(X^*\mathbb{1}_B)(\omega) = \mathbb{1}_B(X(\omega)) = \mathbb{1}_{X^{-1}(B)}(\omega)$$
> Tích phân trên $\Omega$ cho ta:
> $$\int_{\Omega} \mathbb{1}_B(X(\omega)) \, d\mathbb{P}(\omega) = \int_{\Omega} \mathbb{1}_{X^{-1}(B)}(\omega) \, d\mathbb{P}(\omega) = \mathbb{P}(X^{-1}(B))$$
> Đối với vế phải, theo định nghĩa tích phân của hàm chỉ thị và định nghĩa phân phối $\mathbb{P}^X$:
> $$\int_E \mathbb{1}_B(x) \, d\mathbb{P}^X(x) = \mathbb{P}^X(B) = \mathbb{P}(X^{-1}(B))$$
> Đẳng thức đúng với mọi hàm chỉ thị $h = \mathbb{1}_B$.
>
> Bước 2: Hàm đơn giản
> Xét hàm đơn giản không âm $s = \sum_{i=1}^n c_i \mathbb{1}_{B_i}$ với $c_i \ge 0$ và $B_i \in \mathcal{E}$.
> Áp dụng tính tuyến tính của tích phân đối với hàm đơn giản và kết quả ở Bước 1:
> $$\int_{\Omega} s(X(\omega)) \, d\mathbb{P}(\omega) = \sum_{i=1}^n c_i \int_{\Omega} \mathbb{1}_{B_i}(X(\omega)) \, d\mathbb{P}(\omega) = \sum_{i=1}^n c_i \int_E \mathbb{1}_{B_i}(x) \, d\mathbb{P}^X(x) = \int_E s(x) \, d\mathbb{P}^X(x)$$
>
> Bước 3: Hàm đo được không âm ($h \ge 0$)
> Giả sử $h: E \to [0, \infty]$ đo được. Theo Bổ đề xấp xỉ hàm đơn giản tăng, tồn tại một dãy hàm đơn giản không âm $(s_n)_{n \ge 1}$ sao cho $s_n \nearrow h$ trên $E$.
> Khi đó, dãy kéo về $(s_n \circ X)(\omega) = s_n(X(\omega))$ cũng là một dãy hàm đơn giản không âm tăng dần về $h(X(\omega))$ trên $\Omega$.
> Áp dụng Bổ đề hội tụ của tích phân theo dãy hàm đơn giản tăng cho cả hai không gian:
> $$\int_{\Omega} h(X(\omega)) \, d\mathbb{P}(\omega) = \lim_{n \to \infty} \int_{\Omega} s_n(X(\omega)) \, d\mathbb{P}(\omega)$$
> và
> $$\int_E h(x) \, d\mathbb{P}^X(x) = \lim_{n \to \infty} \int_E s_n(x) \, d\mathbb{P}^X(x)$$
> Kết hợp với đẳng thức ở Bước 2 đối với mỗi hàm đơn giản $s_n$:
> $$\int_{\Omega} h(X(\omega)) \, d\mathbb{P}(\omega) = \int_E h(x) \, d\mathbb{P}^X(x)$$
>
> Bước 4: Hàm khả tích bất kỳ
> Phân tích $h = h^+ - h^-$, trong đó $h^+ = \max(h, 0)$ và $h^- = \max(-h, 0)$ là các hàm đo được không âm.
> Do $|h| = h^+ + h^-$, áp dụng kết quả Bước 3 cho $|h|$:
> $$\int_{\Omega} |h(X(\omega))| \, d\mathbb{P}(\omega) = \int_E |h(x)| \, d\mathbb{P}^X(x)$$
> Điều này chứng minh trực tiếp mệnh đề (a): $h(X) \in \mathcal{L}^1(\Omega, \mathcal{A}, \mathbb{P})$ khi và chỉ khi $h \in \mathcal{L}^1(E, \mathcal{E}, \mathbb{P}^X)$.
> Khi các tích phân hữu hạn, áp dụng kết quả Bước 3 cho từng thành phần $h^+$ và $h^-$, sau đó trừ hai vế theo tính tuyến tính, ta thu được:
> $$\int_{\Omega} h(X(\omega)) \, d\mathbb{P}(\omega) = \int_E h(x) \, d\mathbb{P}^X(x)$$

> [!obs] Kỳ vọng dạng thông thường
> Khi $E = \mathbb{R}$ và xét hàm đồng nhất $h(x) = x$, ta thu được các trường hợp cụ thể:
>
> 1. Trường hợp rời rạc: Nếu $X$ có tập giá trị rời rạc với hàm khối lượng xác suất $p(x) = \mathbb{P}(X = x)$, phân phối tương ứng là $\mathbb{P}^X = \sum_x p(x) \delta_x$, công thức trở thành:
> $$\mathbb{E}X = \sum_{x} x \, p(x)$$
>
> 2. Trường hợp liên tục: Nếu phân phối $\mathbb{P}^X$ tuyệt đối liên tục đối với độ đo Lebesgue $m_k$, tức là $d\mathbb{P}^X(x) = f_X(x) \, dm_k(x)$ với hàm mật độ xác suất $f_X$, công thức trở thành:
> $$\mathbb{E}X = \int_{\mathbb{R}} x \, f_X(x) \, dx$$

> [!prp] (Tính chất liên hợp của hàm kéo về và phân phối xác suất)
> Cho biến ngẫu nhiên $X: (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ và hàm đo được $h: E \to \mathbb{R}$ thỏa mãn $h \ge 0$ hoặc $h \in \mathcal{L}^1(E, \mathcal{E}, \mathbb{P}^X)$. Phép toán kéo về $X^*$ và phép lấy phân phối $\mathbb{P}^X$ thỏa mãn tính liên hợp:
> $$\langle X^*h, \mathbb{P} \rangle_{\Omega} = \langle h, \mathbb{P}^X \rangle_E$$
> hay dưới dạng tích phân:
> $$\int_{\Omega} (X^*h)(\omega) \, d\mathbb{P}(\omega) = \int_E h(x) \, d\mathbb{P}^X(x)$$

> [!prf]
> Xét cặp ghép đối ngẫu giữa hàm và độ đo qua tích phân Lebesgue:
>
> Khai triển vế trái trên không gian mẫu $\Omega$:
> $$\langle X^*h, \mathbb{P} \rangle_{\Omega} := \int_{\Omega} (X^*h)(\omega) \, d\mathbb{P}(\omega) = \int_{\Omega} h(X(\omega)) \, d\mathbb{P}(\omega)$$
>
> Khai triển vế phải trên không gian giá trị $E$:
> $$\langle h, \mathbb{P}^X \rangle_E := \int_E h(x) \, d\mathbb{P}^X(x)$$
>
> Theo Quy tắc kỳ vọng (LOTUS), khi $h \ge 0$ hoặc $h \in \mathcal{L}^1(E, \mathcal{E}, \mathbb{P}^X)$, hai tích phân trên bằng nhau:
> $$\int_{\Omega} h(X(\omega)) \, d\mathbb{P}(\omega) = \int_E h(x) \, d\mathbb{P}^X(x)$$
>
> Do đó:
> $$\langle X^*h, \mathbb{P} \rangle_{\Omega} = \langle h, \mathbb{P}^X \rangle_E$$
> Đẳng thức khẳng định toán tử kéo về hàm số và toán tử cảm sinh phân phối xác suất là hai toán tử liên hợp của nhau qua phép tích phân.