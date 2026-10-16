
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

> [!prp] Các tính chất của tích phân cho hàm đơn
> Cho không gian đo được $(E, \mathcal{E}, \mu)$ và $A \in \mathcal{E}$. Giả sử $s, t: E \to \mathbb{R}$ là hai hàm đơn đo được không âm. Khi đó:
> 
> 1. Nếu $s(\omega) = t(\omega)$ với mọi $\omega \in A$, thì:
>    $$\int_A s(\omega) \, d\mu = \int_A t(\omega) \, d\mu$$
> 
> 2. Tính cộng tính (tuyến tính với phép cộng):
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
> $$\int_A f \, d\mu = \int_E f \cdot \mathbf{1}_A \, d\mu$$
> trong đó:
> $$\mathbf{1}_A(x) = \begin{cases} 1, & x \in A \\ 0, & x \notin A \end{cases}$$
>
> 3. Tích phân của hàm hằng trên một tập: Nếu $f(x) = c \ge 0$ trên tập $A \in \mathcal{E}$, thì:
> $$\int_A f \, d\mu = c \cdot \mu(A)$$
>
> 4. Tính triệt tiêu hầu khắp nơi: Nếu $\int_E f \, d\mu = 0$ (với $f \ge 0$), thì:
> $$f = 0 \text{ hầu khắp nơi (a.e.) trên } E$$

> [!lem] Bổ đề 1 (Xấp xỉ hàm đo được không âm bằng dãy hàm đơn giản tăng)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và hàm đo được không âm $f: E \to [0, \infty]$ trên tập $A \in \mathcal{E}$. Khi đó tồn tại một dãy hàm đơn giản không âm $(s_n)_{n \ge 1}$ tăng dần về $f$ trên $A$ khi $n \to \infty$ ($s_n \nearrow f$). Một dãy cụ thể được xác định bởi:
> $$s_n(x) = \sum_{k=0}^{n2^n - 1} \frac{k}{2^n} \mathbf{1}_{\left\{x \in A : \frac{k}{2^n} \le f(x) < \frac{k+1}{2^n}\right\}}(x) + n \mathbf{1}_{\{x \in A : f(x) \ge n\}}(x)$$

> [!lem] Bổ đề 2 (Sự hội tụ của tích phân theo dãy hàm đơn giản tăng)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và hàm đo được không âm $f: E \to [0, \infty]$ trên tập $A \in \mathcal{E}$. Nếu $(s_n)_{n \ge 1}$ là bất kỳ dãy hàm đơn giản không âm nào tăng dần về $f$ trên $A$ ($s_n \nearrow f$), thì dãy tích phân tương ứng tăng dần về tích phân của $f$:
> $$\lim_{n \to \infty} \int_A s_n \, d\mu = \int_A f \, d\mu$$

> [!cor] (Tính tuyến tính của tích phân hàm đo được không âm)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$ và tập đo được $A \in \mathcal{E}$. Giả sử $f, g: E \to [0, \infty]$ là các hàm đo được không âm. Khi đó:
>
> 1. Đẳng thức cộng tính:
> $$\int_A (f + g) \, d\mu = \int_A f \, d\mu + \int_A g \, d\mu$$
>
> 2. Đẳng thức nhân với hằng số:
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
> 
# Kỳ vọng

> [!def] (Kỳ vọng)
> Cho $(\Omega, \mathcal{F}, P)$ là một không gian xác suất. Đối với một biến ngẫu nhiên thực $X: \Omega \to \mathbb{R}$, giá trị kỳ vọng $\mathbb{E}X$ được định nghĩa là tích phân Lebesgue của $X$ trên $\Omega$ theo độ đo $P$:
> 
> $$\mathbb{E}X := \int_{\Omega} X(\omega) P(d\omega)$$

> [!def] (Push-forward Measure & Pull-back Function)
> Cho $(S, \mathcal{S})$ là một không gian đo được và $Y: \Omega \to S$ là một biến ngẫu nhiên (ánh xạ đo được).
> 
> 1. **Push-forward Measure (Độ đo đẩy tiến / Phân phối):** Ánh xạ $Y$ cảm sinh (induces) một độ đo xác suất $\mu = Y_*P$ trên $(S, \mathcal{S})$, ký hiệu và định nghĩa bởi:
> 
>    $$Y_*P(A) := P(Y^{-1}(A)) = P(Y \in A), \quad \forall A \in \mathcal{S}$$
> 
>    Độ đo $\mu = Y_*P$ được gọi là phân phối / luật (law) / độ đo push-forward của $Y$.
> 
> 2. **Pull-back Function (Hàm kéo về):** Cho hàm đo được $g: S \to \mathbb{R}$. Phép toán pull-back của $g$ qua $Y$, ký hiệu là $Y^*g: \Omega \to \mathbb{R}$, định nghĩa hợp thành:
> 
>    $$(Y^*g)(\omega) := (g \circ Y)(\omega) = g(Y(\omega))$$
> 
>    Vì hợp của các hàm đo được là một hàm đo được, $Y^*g = g(Y)$ tạo thành một biến ngẫu nhiên thực trên $\Omega$.

> [!lem] (LOTUS: Law of the Unconscious Statistician)
> Cho biến ngẫu nhiên $Y: \Omega \to S$ có phân phối $\mu = Y_*P$. Nếu $g: S \to \mathbb{R}$ đo được sao cho $\mathbb{E}g(Y)$ được xác định rõ (hoặc $g \ge 0$, hoặc $g \in L^1(S, \mathcal{S}, \mu)$), thì:
> 
> $$\mathbb{E}g(Y) = \int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) \mu(dy)$$

> [!prf] (Chứng minh chi tiết LOTUS theo Standard Machine)
> Ta chứng minh đẳng thức tích phân qua các bước xấp xỉ chuẩn của lý thuyết độ đo.
> 
> **Bước 1: Hàm chỉ thị (Indicator Functions)**
> Xét $g = \mathbf{1}_A$ với $A \in \mathcal{S}$ bất kỳ.
> - Vế trái (Tích phân trên $\Omega$ theo pull-back):
>   Nhận thấy $(Y^*\mathbf{1}_A)(\omega) = \mathbf{1}_A(Y(\omega))$. Ta có $Y(\omega) \in A \iff \omega \in Y^{-1}(A)$, do đó $Y^*\mathbf{1}_A = \mathbf{1}_{Y^{-1}(A)}$.
>   
>   $$\int_{\Omega} (Y^*\mathbf{1}_A)(\omega) P(d\omega) = \int_{\Omega} \mathbf{1}_{Y^{-1}(A)}(\omega) P(d\omega) = P(Y^{-1}(A))$$
> 
> - Vế phải (Tích phân trên $S$ theo push-forward):
>   Theo định nghĩa tích phân Lebesgue của hàm chỉ thị và định nghĩa của $\mu = Y_*P$:
>   
>   $$\int_{S} \mathbf{1}_A(y) \mu(dy) = \mu(A) = P(Y^{-1}(A))$$
> 
> Đẳng thức đúng với mọi hàm chỉ thị $g = \mathbf{1}_A$.
> 
> **Bước 2: Hàm đơn giản (Simple Functions)**
> Xét hàm đơn giản không âm $g = \sum_{i=1}^n c_i \mathbf{1}_{A_i}$, với $c_i \ge 0$ và $A_i \in \mathcal{S}$.
> Do tính tuyến tính của phép lấy pull-back $Y^*(\sum c_i g_i) = \sum c_i Y^*g_i$ và tính tuyến tính của tích phân Lebesgue:
> 
> $$\begin{aligned}
> \int_{\Omega} (Y^*g)(\omega) P(d\omega) &= \int_{\Omega} Y^*\left( \sum_{i=1}^n c_i \mathbf{1}_{A_i} \right)(\omega) P(d\omega) \\
> &= \sum_{i=1}^n c_i \int_{\Omega} (Y^*\mathbf{1}_{A_i})(\omega) P(d\omega) \\
> &= \sum_{i=1}^n c_i \int_{S} \mathbf{1}_{A_i}(y) \mu(dy) \quad \text{(áp dụng Bước 1)} \\
> &= \int_{S} \left( \sum_{i=1}^n c_i \mathbf{1}_{A_i}(y) \right) \mu(dy) = \int_{S} g(y) \mu(dy)
> \end{aligned}$$
> 
> **Bước 3: Hàm đo được không âm ($g \ge 0$)**
> Cho $g: S \to [0, \infty]$ đo được bất kỳ. Tồn tại dãy các hàm đơn giản không âm $\{g_n\}_{n=1}^{\infty}$ sao cho $g_n \uparrow g$ điểm-theo-điểm trên $S$.
> Khi đó, dãy pull-back $(Y^*g_n)(\omega) = g_n(Y(\omega))$ cũng tăng đơn điệu tới $(Y^*g)(\omega) = g(Y(\omega))$ trên $\Omega$.
> Áp dụng Định lý Hội tụ Đơn điệu (Monotone Convergence Theorem - MCT) cho cả hai phía:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \lim_{n \to \infty} \int_{\Omega} (Y^*g_n)(\omega) P(d\omega) = \lim_{n \to \infty} \int_{S} g_n(y) \mu(dy) = \int_{S} g(y) \mu(dy)$$
> 
> **Bước 4: Hàm khả tích bất kỳ ($g \in L^1(S, \mathcal{S}, \mu)$)**
> Tách $g = g^+ - g^-$, trong đó $g^+ = \max(g, 0)$ và $g^- = \max(-g, 0)$ là các hàm không âm.
> Áp dụng kết quả Bước 3 cho $g^+$ và $g^-$ và dùng tính tuyến tính của tích phân, ta thu được:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) \mu(dy)$$
> 
> Chứng minh hoàn tất.

> [!obs]
> Khi $g(y) = y$ và $Y$ nhận giá trị thực, ta có:
> 1. Nếu $Y$ rời rạc với hàm khối lượng xác suất $f(y)$, độ đo đẩy tới là $\mu = \sum_y f(y) \delta_y$, phương trình rút gọn thành:
>    $$\mathbb{E}Y = \sum_{y} y f(y)$$
> 2. Nếu $Y$ liên tục với hàm mật độ $f(y)$ đối với độ đo Lebesgue $m$, tức là $\mu = Y_*P \ll m$ với đạo hàm Radon-Nikodym $\frac{d\mu}{dm} = f$, phương trình rút gọn thành:
>    $$\mathbb{E}Y = \int_{\mathbb{R}} y f(y) dy$$

Các phép toán push-forward $Y_*$ (tác động lên độ đo) và pull-back $Y^*$ (tác động lên hàm) có mối quan hệ đối ngẫu chặt chẽ thông qua phép ghép tích phân.

> [!prp] (Tính chất liên hợp của Pull-back và Push-forward)
> Cho $Y: (\Omega, \mathcal{F}, P) \to (S, \mathcal{S})$ và hàm $g: S \to \mathbb{R}$ đo được không âm ($g \ge 0$) hoặc khả tích theo $Y_*P$. Phép toán pull-back $Y^*$ và push-forward $Y_*$ thỏa mãn tính liên hợp:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \langle g, Y_*P \rangle_{S}$$
> 
> hay dưới dạng tích phân:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) (Y_*P)(dy)$$

> [!prf] 
> Để chứng minh tính chất liên hợp:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \langle g, Y_*P \rangle_{S}$$
> 
> ta khai triển hai phía của đẳng thức dựa trên các định nghĩa đại số/hình học và kết quả của Định lý LOTUS:
> 
> **1. Khai triển vế trái $\langle Y^*g, P \rangle_{\Omega}$:**
> Theo định nghĩa của cặp ghép đối ngẫu (duality pairing) trên không gian mẫu $\Omega$, tích trong $\langle \cdot, \cdot \rangle_{\Omega}$ giữa một hàm và một độ đo chính là tích phân Lebesgue của hàm đó theo độ đo tương ứng:
> 
> $$\langle Y^*g, P \rangle_{\Omega} := \int_{\Omega} (Y^*g)(\omega) P(d\omega)$$
> 
> Thay định nghĩa của hàm pull-back $(Y^*g)(\omega) = (g \circ Y)(\omega) = g(Y(\omega))$, ta có:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \int_{\Omega} g(Y(\omega)) P(d\omega)$$
> 
> **2. Khai triển vế phải $\langle g, Y_*P \rangle_{S}$:**
> Tương tự, theo định nghĩa của cặp ghép đối ngẫu trên không gian đích $S$ với độ đo push-forward $\mu = Y_*P$:
> 
> $$\langle g, Y_*P \rangle_{S} := \int_{S} g(y) (Y_*P)(dy) = \int_{S} g(y) \mu(dy)$$
> 
> **3. Thiết lập đẳng thức nhờ LOTUS:**
> Theo Định lý LOTUS (Tính chất 3), với $g \ge 0$ hoặc $g \in L^1(S, \mathcal{S}, Y_*P)$, công thức đổi biến độ đo cho ta:
> 
> $$\int_{\Omega} g(Y(\omega)) P(d\omega) = \int_{S} g(y) \mu(dy)$$
> 
> Tương đương với:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) (Y_*P)(dy)$$
> 
> Do đó:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \langle g, Y_*P \rangle_{S}$$
> 
> Mối quan hệ này khẳng định toán tử pull-back $Y^*$ (trên không gian các hàm) và toán tử push-forward $Y_*$ (trên không gian các độ đo) chính là hai toán tử liên hợp (adjoint operators) của nhau qua tích phân Lebesgue.
