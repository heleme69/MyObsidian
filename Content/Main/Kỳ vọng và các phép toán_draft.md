
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
> 2. Nếu $s(x) = \alpha \mathbf{1}_B(x)$ với $B \in \mathcal{E}$ và $\alpha \ge 0$, thì với mọi $A \in \mathcal{E}$:
>    $$\int_A s(x) \, d\mu = \alpha \, \mu(A \cap B)$$
> 
> 3. Với mọi hàm đơn không âm $s$ và mọi $A \in \mathcal{E}$, tích phân trên tập $A$ tương đương với tích phân của hàm chỉ thị trên không gian mẫu $E$:
>    $$\int_A s(x) \, d\mu = \int_E s(x) \mathbf{1}_A(x) \, d\mu$$

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
> Giả sử biểu diễn chuẩn tắc của hàm đơn $s$ là $s(x) = \sum_{i=1}^n \alpha_i \mathbf{1}_{A_i}(x)$, trong đó các tập $A_i = s^{-1}(\{\alpha_i\})$ rời nhau từng đôi một và $\bigcup_{i=1}^n A_i = E$.
> Khi đó:
> $$s(x)\mathbf{1}_A(x) = \left(\sum_{i=1}^n \alpha_i \mathbf{1}_{A_i}(x)\right) \mathbf{1}_A(x) = \sum_{i=1}^n \alpha_i \mathbf{1}_{A \cap A_i}(x)$$
> Các tập $A \cap A_i$ đôi một rời nhau và hàm nhận giá trị $\alpha_i$ trên $A \cap A_i$, nhận giá trị $0$ trên phần bù của $\bigcup_{i=1}^n (A \cap A_i)$.
> Theo định nghĩa tích phân của hàm đơn $s \mathbf{1}_A$ trên toàn không gian $E$:
> $$\int_E s(x)\mathbf{1}_A(x) \, d\mu = \sum_{i=1}^n \alpha_i \, \mu\left(E \cap (A \cap A_i)\right) = \sum_{i=1}^n \alpha_i \, \mu(A \cap A_i)$$
> Mặt khác, theo định nghĩa tích phân của $s$ trên tập $A$:
> $$\int_A s(x) \, d\mu = \sum_{i=1}^n \alpha_i \, \mu(A \cap s^{-1}(\{\alpha_i\})) = \sum_{i=1}^n \alpha_i \, \mu(A \cap A_i)$$
> Vậy:
> $$\int_A s(x) \, d\mu = \int_E s(x) \mathbf{1}_A(x) \, d\mu$$

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
> $$s = \sum_{i=1}^n \alpha_i \mathbf{1}_{E_i}, \quad t = \sum_{j=1}^m \beta_j \mathbf{1}_{F_j}$$
> trong đó $\{E_i\}_{i=1}^n$ và $\{F_j\}_{j=1}^m$ là các phân hoạch đo được của $E$. Khi đó $\{E_i \cap F_j\}_{i, j}$ tạo thành một phân hoạch mịn hơn của $E$.
> 
> **Chứng minh tính chất 1:**
> Vì $s(\omega) = t(\omega)$ với mọi $\omega \in A$, nên với mỗi cặp $(i, j)$ mà $A \cap E_i \cap F_j \neq \emptyset$, ta có $\alpha_i = \beta_j$. Do đó:
> $$\begin{aligned}
> \int_A s \, d\mu &= \sum_{i=1}^n \alpha_i \, \mu(A \cap E_i) = \sum_{i=1}^n \sum_{j=1}^m \alpha_i \, \mu(A \cap E_i \cap F_j) \\
> &= \sum_{i=1}^n \sum_{j=1}^m \beta_j \, \mu(A \cap E_i \cap F_j) = \sum_{j=1}^m \beta_j \, \mu(A \cap F_j) = \int_A t \, d\mu
> \end{aligned}$$
> 
> **Chứng minh tính chất 2:**
> Trên mỗi tập $E_i \cap F_j$, hàm $s + t$ nhận giá trị không đổi là $\alpha_i + \beta_j$. Ta có:
> $$\begin{aligned}
> \int_A (s + t) \, d\mu &= \sum_{i=1}^n \sum_{j=1}^m (\alpha_i + \beta_j) \, \mu(A \cap E_i \cap F_j) \\
> &= \sum_{i=1}^n \alpha_i \sum_{j=1}^m \mu(A \cap E_i \cap F_j) + \sum_{j=1}^m \beta_j \sum_{i=1}^n \mu(A \cap E_i \cap F_j) \\
> &= \sum_{i=1}^n \alpha_i \, \mu(A \cap E_i) + \sum_{j=1}^m \beta_j \, \mu(A \cap F_j) \\
> &= \int_A s \, d\mu + \int_A t \, d\mu
> \end{aligned}$$
> 
> **Chứng minh tính chất 3:**
> Hàm $c s$ nhận các giá trị $c \alpha_i$ trên các tập $E_i$. Theo định nghĩa:
> $$\int_A c s \, d\mu = \sum_{i=1}^n (c \alpha_i) \, \mu(A \cap E_i) = c \sum_{i=1}^n \alpha_i \, \mu(A \cap E_i) = c \int_A s \, d\mu$$
> 
> **Chứng minh tính chất 4:**
> Vì $s \ge t \ge 0$ trên $A$, đặt $u = (s - t)\mathbf{1}_A \ge 0$. Khi đó $u$ là một hàm đơn không âm và $s\mathbf{1}_A = t\mathbf{1}_A + u$.
> Áp dụng tính cộng tính và tính chất của hàm không âm:
> $$\int_A s \, d\mu = \int_A t \, d\mu + \int_A u \, d\mu$$
> Do $u \ge 0$, ta có $\int_A u \, d\mu \ge 0$, suy ra:
> $$\int_A s(\omega) \, d\mu \ge \int_A t(\omega) \, d\mu$$

> [!cor] Hệ quả
> Nếu $s(\omega) = \sum_{j=1}^m \beta_j \mathbf{1}_{A_j}(\omega)$ với $\beta_j \ge 0$ và $A_j \in \mathcal{E}$, thì với mọi $A \in \mathcal{E}$:
> 
> $$\int_A s(\omega) \, d\mu = \sum_{j=1}^m \beta_j \, \mu(A_j \cap A)$$

> [!prf]
> Sử dụng tính chất tuyến tính của tích phân hàm đơn (tính chất cộng tính và thuần nhất đối với hằng số không âm), ta có:
> 
> $$\int_A s(\omega) \, d\mu = \int_A \left( \sum_{j=1}^m \beta_j \mathbf{1}_{A_j}(\omega) \right) d\mu = \sum_{j=1}^m \beta_j \int_A \mathbf{1}_{A_j}(\omega) \, d\mu$$
> 
> Áp dụng tính chất tích phân của hàm chỉ thị trên tập $A$:
> 
> $$\int_A \mathbf{1}_{A_j}(\omega) \, d\mu = \mu(A_j \cap A)$$
> 
> Thay vào biểu thức trên, ta được:
> 
> $$\int_A s(\omega) \, d\mu = \sum_{j=1}^m \beta_j \, \mu(A_j \cap A)$$

> [!def] Biến ngẫu nhiên đơn và Kỳ vọng
> Cho không gian xác suất $(\Omega, \mathcal{A}, P)$.
> 
> 1. Một biến ngẫu nhiên $X: \Omega \to \mathbb{R}$ được gọi là **đơn giản** (simple random variable) nếu tập giá trị của nó là hữu hạn. Khi đó, $X$ luôn có thể biểu diễn dưới dạng:
>    $$X = \sum_{i=1}^n a_i \mathbf{1}_{A_i}$$
>    trong đó $a_i \in \mathbb{R}$ và các biến cố $A_i \in \mathcal{A}$ ($1 \le i \le n$).
> 
> 2. **Kỳ vọng** (expectation hay tích phân theo độ đo $P$) của biến ngẫu nhiên đơn $X$ được định nghĩa là:
>    $$E[X] = \int_\Omega X \, dP = \sum_{i=1}^n a_i P(A_i)$$

> [!rem] Tính xác định tốt (Well-definedness)
> Một biến ngẫu nhiên đơn $X$ có vô số cách biểu diễn dạng tổ hợp tuyến tính của các hàm chỉ thị $X = \sum_{i=1}^n a_i \mathbf{1}_{A_i}$, trong đó các tập $\{A_i\}_{i=1}^n$ không nhất thiết phải rời nhau và các hệ số $\{a_i\}_{i=1}^n$ không nhất thiết phải phân biệt.
> 
> Định nghĩa kỳ vọng trên là xác định tốt vì giá trị của $E[X]$ hoàn toàn độc lập với cách chọn biểu diễn:
> - **Biểu diễn chuẩn tắc:** Nếu xét tập giá trị thực tế phân biệt $X(\Omega) = \{x_1, x_2, \dots, x_k\}$ với các tập biến cố rời nhau $B_j = \{X = x_j\} = X^{-1}(\{x_j\})$, ta có biểu diễn chuẩn tắc duy nhất $X = \sum_{j=1}^k x_j \mathbf{1}_{B_j}$ và $E[X] = \sum_{j=1}^k x_j P(B_j)$.
> - **Tính độc lập:** Với mọi biểu diễn tùy ý $X = \sum_{i=1}^n a_i \mathbf{1}_{A_i}$, bằng cách phân hoạch không gian mẫu qua các giao $A_i \cap B_j$, phép biến đổi tuyến tính của tích phân/độ đo chứng minh rằng:
>   $$\sum_{i=1}^n a_i P(A_i) = \sum_{j=1}^k x_j P(B_j)$$
> Do đó, ta có thể tự do tính $E[X]$ từ bất kỳ biểu diễn dạng tổng các hàm chỉ thị nào mà không làm thay đổi giá trị kỳ vọng.

> [!prp] Tích phân trên tập có độ đo bằng 0
> Cho $(E, \mathcal{E}, \mu)$ là một không gian độ đo và $s: E \to [0, +\infty)$ là một hàm đơn không âm. Nếu $A \in \mathcal{E}$ thỏa mãn $\mu(A) = 0$, thì:
> 
> $$\int_A s \, d\mu = 0$$

> [!prf]
> Giả sử biểu diễn chuẩn tắc của hàm đơn $s$ là:
> 
> $$s = \sum_{i=1}^n \alpha_i \mathbf{1}_{A_i}$$
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

> [!def] Hầu khắp nơi (Almost Everywhere - a.e.)
> Cho không gian độ đo $(E, \mathcal{E}, \mu)$. Một tính chất $P(x)$ được gọi là nghiệm đúng **hầu khắp nơi theo độ đo $\mu$** (viết tắt là $\mu\text{-a.e.}$ hay **h.k.n.**), nếu tập hợp các điểm mà tại đó tính chất không đúng có độ đo bằng $0$:
> 
> $$\mu\left( \{x \in E \mid P(x) \text{ sai}\} \right) = 0$$
> 
> Trong lý thuyết xác suất $(\Omega, \mathcal{A}, P)$, khái niệm này được gọi là **hầu chắc chắn** (almost surely - $\text{a.s.}$):
> 
> $$P\left( \{\omega \in \Omega \mid P(\omega) \text{ đúng}\} \right) = 1$$

> [!prp] Tích phân của các hàm bằng nhau hầu khắp nơi
> Cho $(E, \mathcal{E}, \mu)$ là không gian độ đo và $f, g: E \to [0, +\infty]$ là các hàm đo được không âm.
> 
> Nếu $f = g$ hầu khắp nơi trên $E$ ($f = g \text{ a.e.}$), thì:
> 
> $$\int_E f \, d\mu = \int_E g \, d\mu$$

> [!prf]
> Đặt $N = \{x \in E \mid f(x) \neq g(x)\}$. Vì $f = g \text{ a.e.}$, ta có $\mu(N) = 0$.
> 
> Phân chia không gian $E$ thành hai phần rời nhau $E = (E \setminus N) \cup N$:
> 
> $$\int_E f \, d\mu = \int_{E \setminus N} f \, d\mu + \int_N f \, d\mu$$
> 
> Do $\mu(N) = 0$, tích phân của hàm không âm trên tập có độ đo bằng $0$ triệt tiêu:
> 
> $$\int_N f \, d\mu = 0 \quad \text{và} \quad \int_N g \, d\mu = 0$$
> 
> Trên tập $E \setminus N$, ta có $f(x) = g(x)$ với mọi $x$, do đó:
> 
> $$\int_{E \setminus N} f \, d\mu = \int_{E \setminus N} g \, d\mu$$
> 
> Từ đó suy ra:
> 
> $$\int_E f \, d\mu = \int_{E \setminus N} g \, d\mu + \int_N g \, d\mu = \int_E g \, d\mu$$