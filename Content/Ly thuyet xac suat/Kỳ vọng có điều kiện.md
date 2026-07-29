
# Kỳ vọng Điều kiện trên một Sự kiện 

> [!def] (Xác suất có điều kiện và Kỳ vọng có điều kiện)
> Cho không gian xác suất $(\Omega, \mathcal{F}, P)$ và $A \in \mathcal{F}$ với $P(A) > 0$, ta có độ đo xác suất có điều kiện:
> 
> $$\mathbb{P}_A(B) = P(B \mid A) = \frac{P(A \cap B)}{P(A)}$$
> 
> Khi đó, chúng ta có thể lấy tích phân của các biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P}_A)$:
> 
> $$\mathbb{E}_A[X] = \mathbb{E}[X \mid A] = \int X d\mathbb{P}_A$$

> [!lem] (Tích phân theo Độ đo Xác suất Điều kiện)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ và biến cố $A \in \mathcal{F}$ thỏa mãn $\mathbb{P}(A) > 0$. 
> 
> Định nghĩa độ đo xác suất điều kiện $\mathbb{P}_A$ trên $(\Omega, \mathcal{F})$ bởi:
> $$\mathbb{P}_A(B) = \mathbb{P}(B \mid A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}, \quad \forall B \in \mathcal{F}$$
>
> Khi đó:
> 1. Một biến ngẫu nhiên $X$ thuộc $L^1(\mathbb{P})$ thì cũng thuộc $L^1(\mathbb{P}_A)$.
> 2. Với mọi $X \in L^1(\mathbb{P})$, kỳ vọng của $X$ theo độ đo $\mathbb{P}_A$ được tính bởi:
>    $$\mathbb{E}_A[X] \equiv \int_\Omega X \, d\mathbb{P}_A = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)} \quad \left(\text{ký hiệu khác: } \frac{\mathbb{E}[X | A]}{\mathbb{P}(A)}\right)$$

> [!prf] 
> **Bước 1: Trường hợp $X$ là hàm đơn giản (Simple function)**
> Giả sử $X$ có dạng biểu diễn hữu hạn:
> $$X = \sum_{j} \alpha_j \mathbb{1}_{B_j}$$
> trong đó $\alpha_j \in \mathbb{R}$ và các tập $B_j \in \mathcal{F}$ rời nhau đôi một.
>
> Theo định nghĩa tích phân Lebesgue cho hàm đơn giản theo độ đo $\mathbb{P}_A$:
> $$\int X \, d\mathbb{P}_A = \sum_{j} \alpha_j \mathbb{P}_A(B_j)$$
>
> Thay định nghĩa $\mathbb{P}_A(B_j) = \frac{\mathbb{P}(A \cap B_j)}{\mathbb{P}(A)}$ vào:
> $$\int X \, d\mathbb{P}_A = \sum_{j} \alpha_j \frac{\mathbb{P}(A \cap B_j)}{\mathbb{P}(A)} = \frac{1}{\mathbb{P}(A)} \sum_{j} \alpha_j \mathbb{P}(A \cap B_j)$$
>
> Nhận thấy rằng $\mathbb{P}(A \cap B_j) = \int \mathbb{1}_{B_j \cap A} \, d\mathbb{P} = \int \mathbb{1}_{B_j} \mathbb{1}_A \, d\mathbb{P}$. Do đó:
> $$\int X \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \int \underbrace{\left( \sum_{j} \alpha_j \mathbb{1}_{B_j} \right)}_{= X} \mathbb{1}_A \, d\mathbb{P} = \frac{\int X \mathbb{1}_A \, d\mathbb{P}}{\mathbb{P}(A)} = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}$$
>
> **Bước 2: Trường hợp $X$ tổng quát thuộc $L^1(\mathbb{P})$**
> Phân tích $X = X^+ - X^-$, trong đó $X^+ = \max(X, 0)$ và $X^- = \max(-X, 0)$ là các phần không âm.
>
> 1. **Tính khả tích:**
>    Vì $X \in L^1(\mathbb{P})$, ta có $|X| = X^+ + X^- \in L^1(\mathbb{P})$.
>    Tồn tại các dãy hàm đơn giản không âm $X_n^+ \uparrow X^+$ và $X_n^- \uparrow X^-$.
>    Khi đó, $X_n = X_n^+ - X_n^-$ thỏa mãn:
>    $$|X_n| = X_n^+ + X_n^- \le X^+ + X^- = |X| \in L^1(\mathbb{P})$$
>
> 2. **Áp dụng kết quả Bước 1 và lấy giới hạn:**
>    Do $X_n^+$ và $X_n^-$ là các hàm đơn giản không âm, theo Bước 1 ta có:
>    $$\int (X_n^+ - X_n^-) \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \left( \int X_n^+ \mathbb{1}_A \, d\mathbb{P} - \int X_n^- \mathbb{1}_A \, d\mathbb{P} \right)$$
>
>    Vì $0 \le X_n^{\pm} \mathbb{1}_A \uparrow X^{\pm} \mathbb{1}_A$, áp dụng Định lý Hội tụ Đơn điệu (MCT) khi $n \to \infty$:
>    * Vế trái: $\int (X_n^+ - X_n^-) \, d\mathbb{P}_A \longrightarrow \int (X^+ - X^-) \, d\mathbb{P}_A = \int X \, d\mathbb{P}_A = \mathbb{E}_A[X]$
>    * Vế phải: $\frac{1}{\mathbb{P}(A)} \int (X_n^+ - X_n^-) \mathbb{1}_A \, d\mathbb{P} \longrightarrow \frac{1}{\mathbb{P}(A)} \int (X^+ - X^-) \mathbb{1}_A \, d\mathbb{P} = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}$
>
> **Kết luận:** $\mathbb{E}_A[X] = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}$. 

# Kỳ vọng Điều kiện theo Phân hoạch và $\sigma$-Đại số sinh bởi phân hoạch

> [!def] (Conditioning on Partition)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là một không gian xác suất và $\{A_n\}_{n=1}^\infty \subset \mathcal{F}$ là một **phân hoạch đếm được** của không gian mẫu $\Omega$, tức là:
> 1. $A_i \cap A_j = \emptyset$ với mọi $i \neq j$.
> 2. $\bigsqcup_{n=1}^\infty A_n = \Omega$.
> 3. $\mathbb{P}(A_n) > 0$ với mọi $n \ge 1$.
> 
> Với mỗi biến cố $A_n$, ta đã có độ đo xác suất điều kiện $\mathbb{P}_{A_n}$ và phép tính kỳ vọng tương ứng $\mathbb{E}_{A_n}[X] = \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)}$. 
> 
> Ta có thể "ghép" (string together) các toán tử $\mathbb{E}_{A_n}$ này thành một **biến ngẫu nhiên duy nhất** duy nhất định nghĩa trên $\Omega$:
> 
> $$\mathbb{E}_{\{A_n\}_{n=1}^\infty}[X] \equiv \sum_{n=1}^\infty \mathbb{E}_{A_n}[X] \cdot \mathbb{1}_{A_n}$$
> 
> Nói cách khác, đây là một hàm $\Omega \to \mathbb{R}$ nhận giá trị hằng số trên mỗi tập $A_n$:
> $$\omega \mapsto \mathbb{E}_{A_n}[X] = \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \quad \text{khi } \omega \in A_n$$

> [!lem] (Cấu trúc của $\sigma$-đại số sinh bởi phân hoạch)
> Cho $\{A_n\}_{n=1}^\infty \subset \mathcal{F}$ là một phân hoạch đếm được của $\Omega$. Khi đó, $\sigma$-đại số sinh bởi phân hoạch này có dạng:
> $$\sigma(\{A_n\}_{n=1}^\infty) = \left\{ \bigsqcup_{n \in \Lambda} A_n \;\middle|\; \Lambda \subseteq \mathbb{N} \right\}$$
> Nói cách khác, mọi tập hợp thuộc $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$ đều là hợp của một họ con các tập trong phân hoạch ban đầu.

> [!prf] 
> Đặt $\mathcal{M} = \left\{ \bigsqcup_{n \in \Lambda} A_n \;\middle|\; \Lambda \subseteq \mathbb{N} \right\}$. Ta cần chứng minh $\sigma(\{A_n\}_{n=1}^\infty) = \mathcal{M}$.
>
> **Chiều 1: $\mathcal{M} \subseteq \sigma(\{A_n\}_{n=1}^\infty)$**
> Mọi tập $A_n \in \{A_n\}_{n=1}^\infty \subseteq \sigma(\{A_n\}_{n=1}^\infty)$. Do $\sigma$-đại số đóng đối với hợp đếm được, với mọi tập chỉ số $\Lambda \subseteq \mathbb{N}$, hợp $\bigsqcup_{n \in \Lambda} A_n$ cũng bắt buộc phải thuộc $\sigma(\{A_n\}_{n=1}^\infty)$. Vậy $\mathcal{M} \subseteq \sigma(\{A_n\}_{n=1}^\infty)$.
>
> **Chiều 2: $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$**
> Ta chỉ cần chứng minh bản thân $\mathcal{M}$ đã là một $\sigma$-đại số chứa $\{A_n\}_{n=1}^\infty$. Khi đó, theo tính tối tiểu của $\sigma$-đại số sinh, ta sẽ có $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$.
> 
> *   *Chứa các tập sinh:* Với $n_0 \in \mathbb{N}$, chọn $\Lambda = \{n_0\} \implies A_{n_0} = \bigsqcup_{n \in \{n_0\}} A_n \in \mathcal{M}$. Vậy $\{A_n\}_{n=1}^\infty \subseteq \mathcal{M}$.
> *   *Chứa tập rỗng và không gian toàn phần:* 
>     * Với $\Lambda = \emptyset$, $\bigsqcup_{n \in \emptyset} A_n = \emptyset \in \mathcal{M}$.
>     * Với $\Lambda = \mathbb{N}$, $\bigsqcup_{n \in \mathbb{N}} A_n = \Omega \in \mathcal{M}$.
> *   *Đóng đối với phép lấy bù:* Cho $E = \bigsqcup_{n \in \Lambda} A_n \in \mathcal{M}$. Do $\{A_n\}$ là phân hoạch của $\Omega$:
>     $$E^c = \Omega \setminus \left( \bigsqcup_{n \in \Lambda} A_n \right) = \bigsqcup_{n \in \mathbb{N} \setminus \Lambda} A_n \in \mathcal{M}$$
> *   *Đóng đối với hợp đếm được:* Cho dãy $\{E_k\}_{k=1}^\infty \subset \mathcal{M}$, trong đó $E_k = \bigsqcup_{n \in \Lambda_k} A_n$. Khi đó:
>     $$\bigcup_{k=1}^\infty E_k = \bigcup_{k=1}^\infty \left( \bigsqcup_{n \in \Lambda_k} A_n \right) = \bigsqcup_{n \in \bigcup_{k=1}^\infty \Lambda_k} A_n \in \mathcal{M}$$
>
> Do $\mathcal{M}$ là một $\sigma$-đại số chứa $\{A_n\}_{n=1}^\infty$, ta suy ra $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$.
> 
> Từ hai chiều, ta có $\sigma(\{A_n\}_{n=1}^\infty) = \mathcal{M}$.

Nhờ việc khôi phục được phân hoạch từ tập sinh: $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$, ta hoàn thiện định nghĩa biến ngẫu nhiên Kỳ vọng Điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ và chứng minh tính chất đặc trưng cơ bản của nó.

> [!prp] (Kỳ vọng Điều kiện theo $\sigma$-Đại số Phân hoạch)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\{A_n\}_{n=1}^\infty$ là một phân hoạch đếm được của $\Omega$ với $\mathbb{P}(A_n) > 0$. 
> Đặt $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$ và định nghĩa biến ngẫu nhiên $Y: \Omega \to \mathbb{R}$ bởi:
> $$Y(\omega) \equiv \sum_{n=1}^\infty \mathbb{E}_{A_n}[X] \cdot \mathbb{1}_{A_n}(\omega) = \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \cdot \mathbb{1}_{A_n}(\omega)$$
>
> Khi đó, $Y$ (ký hiệu là $\mathbb{E}[X \mid \mathcal{G}]$) thỏa mãn hai thuộc tính nền tảng của Kỳ vọng Điều kiện hiện đại:
> 1. Tính đo được ($\mathcal{G}$-measurability): $Y$ là biến ngẫu nhiên $\mathcal{G}$-đo được.
> 2. Tính chất Tích phân Trực giao (Partial Averaging Property): Với mọi $G \in \mathcal{G}$, ta có:
>    $$\int_G Y \, d\mathbb{P} = \int_G X \, d\mathbb{P} \quad \left(\text{tương đương } \mathbb{E}[Y \mathbb{1}_G] = \mathbb{E}[X \mathbb{1}_G]\right)$$

> [!prf]
> **Phần 1: Chứng minh $Y$ là $\mathcal{G}$-đo được**
> Hàm $Y$ là kết hợp tuyến tính (đếm được) của các hàm chỉ thị $\mathbb{1}_{A_n}$.
> Với mỗi $n \ge 1$, vì $A_n \in \{A_n\}_{n=1}^\infty \subset \mathcal{G}$, nên hàm chỉ thị $\mathbb{1}_{A_n}$ là $\mathcal{G}$-đo được.
>
> Tổng đếm được của các hàm $\mathcal{G}$-đo được là một hàm $\mathcal{G}$-đo được. Do đó, $Y$ đo được đối với $\mathcal{G}$.
>
> **Phần 2: Chứng minh tính chất tích phân trên mọi $G \in \mathcal{G}$**
> Theo bổ đề cấu trúc $\sigma$-đại số sinh bởi phân hoạch, mọi tập $G \in \mathcal{G}$ đều biểu diễn duy nhất dưới dạng $G = \bigsqcup_{n \in \Lambda} A_n$ với một tập chỉ số $\Lambda \subseteq \mathbb{N}$.
>
> Tính tích phân vế trái $\int_G Y \, d\mathbb{P} = \mathbb{E}[Y \mathbb{1}_G]$:
> $$\mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ \left( \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n} \right) \cdot \mathbb{1}_{\bigsqcup_{k \in \Lambda} A_k} \right]$$
>
> Do các tập $A_n$ rời nhau đôi một, ta có $\mathbb{1}_{A_n} \cdot \mathbb{1}_{\bigsqcup_{k \in \Lambda} A_k} = \mathbb{1}_{A_n}$ nếu $n \in \Lambda$, và bằng $0$ nếu $n \notin \Lambda$. Do đó:
> $$\mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ \sum_{n \in \Lambda} \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n} \right]$$
>
> Đổi chỗ tổng và kỳ vọng (áp dụng Fubini/DCT vì $X \in L^1$):
> $$\mathbb{E}[Y \mathbb{1}_G] = \sum_{n \in \Lambda} \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \underbrace{\mathbb{E}[\mathbb{1}_{A_n}]}_{=\mathbb{P}(A_n)} = \sum_{n \in \Lambda} \mathbb{E}[X \mathbb{1}_{A_n}]$$
>
> Tiếp tục đưa tổng vào trong kỳ vọng:
> $$\mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ X \sum_{n \in \Lambda} \mathbb{1}_{A_n} \right] = \mathbb{E} \left[ X \mathbb{1}_{\bigsqcup_{n \in \Lambda} A_n} \right] = \mathbb{E}[X \mathbb{1}_G]$$
>
> **Kết luận:** $\int_G Y \, d\mathbb{P} = \int_G X \, d\mathbb{P}$ với mọi $G \in \mathcal{G}$. 

> [!rem] (Đặc trưng thông tin của Kỳ vọng Điều kiện)
> Biến ngẫu nhiên kỳ vọng điều kiện $\mathbb{E}_{\mathcal{G}}[X] = \sum_{n=1}^\infty \mathbb{E}_{A_n}[X] \mathbb{1}_{A_n}$ là một hàm $\mathcal{G}$-đo được vì nó là tổ hợp tuyến tính đếm được của các hàm chỉ thị $\mathbb{1}_{A_n}$ với $A_n \in \mathcal{G}$.
>
> Đặc biệt, nếu các giá trị $\mathbb{E}_{A_n}[X]$ phân biệt giữa các tập $A_n$, thì $\sigma$-đại số do chính biến ngẫu nhiên này sinh ra trùng khớp hoàn toàn với $\mathcal{G}$:
> $$\sigma(\mathbb{E}_{\mathcal{G}}[X]) = \mathcal{G}$$
> Điều này khẳng định rằng biến ngẫu nhiên $\mathbb{E}_{\mathcal{G}}[X]$ mang trọn vẹn toàn bộ cấu trúc thông tin chứa trong $\sigma$-đại số $\mathcal{G}$.

> [!rem] (Khả năng Khôi phục Phân hoạch trong Thực tế)
> Mặc dù về mặt lý thuyết thuần túy, ta luôn có thể khôi phục lại phân hoạch $\{A_n\}_{n=1}^\infty$ từ $\sigma$-đại số $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$ bằng cách xét giao của các tập chứa từng điểm $\omega$, nhưng về mặt thực hành, điều này khó khả thi khi phân hoạch là vô hạn đếm được ($\infty$). 
>
> Ta chỉ có thể khôi phục thực tế được phân hoạch từ $\mathcal{G}$ khi $\mathcal{G}$ (và do đó phân hoạch ban đầu) là hữu hạn (finite).

> [!obs] Ý tưởng nối tiếp: 
> Bước đệm sang $\mathbb{E}[X \mid Z]$ (Conditioning on Random Variable)
> 1. Khi ta muốn tính kỳ vọng điều kiện của $X$ theo một biến ngẫu nhiên rời rạc $Z$ nhận các giá trị $\{z_n\}_{n=1}^\infty$, ta lập tức có phân hoạch $\Omega = \bigsqcup_{n=1}^\infty \{Z = z_n\}$. 
> 2. Khi đó, $\sigma$-đại số sinh bởi $Z$ chính là $\sigma(Z) = \sigma(\{Z = z_n\}_{n=1}^\infty)$.
> 3. Mệnh đề trên chứng tỏ rằng khái niệm xây dựng từ phân hoạch $\mathbb{E}[X \mid Z = z_n]$ khớp với định nghĩa theo $\sigma$-đại số $\mathbb{E}[X \mid \sigma(Z)]$. Đây chính là cầu nối để mở rộng định nghĩa Kỳ vọng điều kiện cho các biến ngẫu nhiên liên tục tổng quát bằng Định lý Radon-Nikodym!

# Phân tích Biến Ngẫu nhiên (Doob–Dynkin Representation)

Nếu $f: \mathbb{R}^d \to \mathbb{R}$ là một hàm đo được Borel và các biến ngẫu nhiên $X_1, \dots, X_d$ đo được $\mathcal{F}/\mathcal{B}(\mathbb{R})$, thì hàm hợp:
$$f(X_1, \dots, X_d) \text{ cũng đo được } \mathcal{F}/\mathcal{B}(\mathbb{R})$$

> [!lem] Đặc trưng hóa $\sigma$-đại số sinh bởi vectơ ngẫu nhiên
> Đặt $\mathbf{X} = \begin{bmatrix} X_1 \\ \vdots \\ X_d \end{bmatrix}: \Omega \to \mathbb{R}^d$. Khi đó, $\sigma$-đại số sinh bởi $(X_1, \dots, X_d)$, tức là $\sigma$-đại số nhỏ nhất trên $\Omega$ sao cho mọi $X_1, \dots, X_d$ đều đo được đối với $\mathcal{B}(\mathbb{R})$, được đặc trưng bởi:
> $$\sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) := \left\{ \mathbf{X}^{-1}(B) : B \in \mathcal{B}(\mathbb{R}^d) \right\}$$

> [!cor] (Doob–Dynkin Representation Theorem)
> Cho $(\Omega, \mathcal{F})$ là một không gian đo được. 
> Cho $X_1, \dots, X_d$ là các hàm đo được $\mathcal{F}/\mathcal{B}(\mathbb{R})$ và $Y: \Omega \to \mathbb{R}$ là một hàm đo được $\sigma(X_1, \dots, X_d)/\mathcal{B}(\mathbb{R})$.
> 
> Khi đó, tồn tại một hàm đo được Borel $f: \mathbb{R}^d \to \mathbb{R}$ sao cho:
> $$Y = f(X_1, \dots, X_d) = f(\mathbf{X})$$

> [!prf] 
> Áp dụng đặc trưng hóa ở **Lemma** trên, ta chứng minh định lý qua 3 bước:
>
> **Bước 1: $Y$ là Hàm chỉ thị (Indicator Function)**
> Giả sử $Y = \mathbf{1}_A$ với $A \in \sigma(X_1, \dots, X_d)$.
> 
> Do $A \in \sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$, tồn tại một tập Borel $B \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A = \mathbf{X}^{-1}(B)$.
> 
> Khi đó:
> $$\mathbf{1}_A = \mathbf{1}_{\mathbf{X}^{-1}(B)} = \mathbf{1}_B \circ \mathbf{X}$$
> 
> Chọn $f = \mathbf{1}_B$ (đo được Borel), ta có ngay $Y = f(\mathbf{X})$.
> 
> **Bước 2: $Y$ là Hàm đơn giản (Simple Function)**
> Giả sử $Y$ là tổ hợp tuyến tính hữu hạn của các hàm chỉ thị:
> $$Y = \sum_{j=1}^n \alpha_j \mathbf{1}_{A_j}$$
> với $\alpha_j \in \mathbb{R}$ và $A_j \in \sigma(X_1, \dots, X_d)$.
> 
> Do $A_j \in \sigma(X_1, \dots, X_d)$, với mỗi $j$ tồn tại tập Borel $B_j \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A_j = \mathbf{X}^{-1}(B_j)$. Do đó:
> $$Y = \sum_{j=1}^n \alpha_j \mathbf{1}_{\mathbf{X}^{-1}(B_j)} = \sum_{j=1}^n \alpha_j (\mathbf{1}_{B_j} \circ \mathbf{X}) = \left( \sum_{j=1}^n \alpha_j \mathbf{1}_{B_j} \right) \circ \mathbf{X}$$
> 
> Định nghĩa $f = \sum_{j=1}^n \alpha_j \mathbf{1}_{B_j}$ (đo được Borel), ta suy ra:
> $$Y = f(\mathbf{X})$$
> 
> **Bước 3: $Y$ là Hàm đo được tổng quát (General Case)**
> Trong trường hợp tổng quát, luôn tồn tại một dãy hàm đơn giản $(Y_n)_{n \ge 1}$ sao cho $Y_n \to Y$ (pointwise).
> 
> Theo Bước 2, với mỗi $n$, tồn tại hàm đo được Borel $f_n: \mathbb{R}^d \to \mathbb{R}$ sao cho $Y_n = f_n(\mathbf{X})$.
> 
> Ta định nghĩa hàm đo được Borel $f$ bằng giới hạn trên:
> $$f := \limsup_{n \to \infty} f_n$$
> 
> Khi đó:
> $$Y = \lim_{n \to \infty} Y_n = \limsup_{n \to \infty} Y_n = \limsup_{n \to \infty} f_n(\mathbf{X}) = f(\mathbf{X})$$

# Kỳ vọng Điều kiện theo $\sigma$-Đại số Tổng quát (Radon-Nikodym)

Từ quan sát ở phần trước, khi phân hoạch không còn đếm được (chẳng hạn khi điều kiện hóa theo biến ngẫu nhiên liên tục), xác suất của mỗi biến cố điều kiện có thể bằng 0 ($\mathbb{P}(Z = z) = 0$). Do đó, công thức Bayes element-wise bị phá vỡ. Để khắc phục, ta sử dụng lý thuyết độ đo hiện đại, thông qua **Định lý Radon-Nikodym**.

> [!lem] (Độ đo không âm cảm sinh bởi tích phân)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất, $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con, và $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ là biến ngẫu nhiên **không âm** ($X \ge 0$). 
>
> Định nghĩa một hàm tập hợp $\nu: \mathcal{G} \to [0, \infty)$ bởi:
> $$\nu(G) = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}$$
>
> Khi đó:
> 1. $\nu$ là một độ đo hữu hạn trên $(\Omega, \mathcal{G})$.
> 2. $\nu$ **liên tục tuyệt đối** đối với thu hẹp của $\mathbb{P}$ trên $\mathcal{G}$ (ký hiệu là $\nu \ll \mathbb{P}|_{\mathcal{G}}$), nghĩa là với mọi $G \in \mathcal{G}$, nếu $\mathbb{P}(G) = 0$ thì $\nu(G) = 0$.

> [!prf] 
> 1. **Chứng minh $\nu$ là một độ đo hữu hạn trên $(\Omega, \mathcal{G})$:**
>    * *Tính không âm và hữu hạn:* Do $X \ge 0$ và $X \in L^1(\mathbb{P})$, ta có $0 \le \nu(G) \le \int_\Omega X \, d\mathbb{P} < \infty$ với mọi $G \in \mathcal{G}$. Đặc biệt, $\nu(\emptyset) = \int_\emptyset X \, d\mathbb{P} = 0$.
>    * *Tính $\sigma$-cộng tính:* Cho dãy $\{G_n\}_{n=1}^\infty \subset \mathcal{G}$ rời nhau đôi một và $G = \bigsqcup_{n=1}^\infty G_n \in \mathcal{G}$. Khi đó $\mathbb{1}_G = \sum_{n=1}^\infty \mathbb{1}_{G_n}$. Do $X \ge 0$, theo Định lý Hội tụ Đơn điệu (MCT):
>      $$\nu(G) = \int_\Omega X \sum_{n=1}^\infty \mathbb{1}_{G_n} \, d\mathbb{P} = \sum_{n=1}^\infty \int_\Omega X \mathbb{1}_{G_n} \, d\mathbb{P} = \sum_{n=1}^\infty \nu(G_n)$$
>
> 2. **Chứng minh $\nu \ll \mathbb{P}|_{\mathcal{G}}$:**
>    * Giả sử $G \in \mathcal{G}$ thỏa mãn $\mathbb{P}(G) = 0$. Khi đó hàm chỉ thị $\mathbb{1}_G = 0$ hầu chắc chắn ($\mathbb{P}$-a.s.).
>    * Consequently, $X \mathbb{1}_G = 0$ ($\mathbb{P}$-a.s.), suy ra:
>      $$\nu(G) = \int_G X \, d\mathbb{P} = \int_\Omega X \mathbb{1}_G \, d\mathbb{P} = 0$$
>    * Vậy $\nu$ liên tục tuyệt đối đối với $\mathbb{P}|_{\mathcal{G}}$. 

> [!def] (Định lý Radon-Nikodym cho $\sigma$-đại số con)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất, $\mathcal{G} \subseteq \mathcal{F}$ là $\sigma$-đại số con và $\nu$ là độ đo hữu hạn trên $(\Omega, \mathcal{G})$ sao cho $\nu \ll \mathbb{P}|_{\mathcal{G}}$. 
>
> Khi đó, **tồn tại duy nhất** (theo nghĩa hầu chắc chắn $\mathbb{P}$-a.s.) một biến ngẫu nhiên $Y: \Omega \to [0, \infty)$ thỏa mãn:
> 1. **Tính đo được:** $Y$ là $\mathcal{G}$-đo được ($\mathcal{G}$-measurable).
> 2. **Tính khả tích:** $Y \in L^1(\Omega, \mathcal{G}, \mathbb{P}|_{\mathcal{G}})$.
> 3. **Công thức mật độ:** Với mọi $G \in \mathcal{G}$, ta có:
>    $$\nu(G) = \int_G Y \, d\mathbb{P}$$
> Biến ngẫu nhiên $Y$ được gọi là **đạo hàm Radon-Nikodym** của $\nu$ đối với $\mathbb{P}|_{\mathcal{G}}$, ký hiệu là $Y = \frac{d\nu}{d\mathbb{P}|_{\mathcal{G}}}$.

Từ kết quả trên, ta chính thức mở rộng định nghĩa Kỳ vọng điều kiện cho một biến ngẫu nhiên tổng quát trong $L^1(\mathbb{P})$.

> [!def] (Kỳ vọng Điều kiện theo $\sigma$-Đại số - Định nghĩa Kolmogorov)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con. 
>
> **Kỳ vọng điều kiện** của $X$ với điều kiện $\mathcal{G}$, ký hiệu là $\mathbb{E}[X \mid \mathcal{G}]$, là một biến ngẫu nhiên $\xi: \Omega \to \mathbb{R}$ thỏa mãn hai tiên đề:
> 1. **Tính đo được ($\mathcal{G}$-measurability):** $\xi$ là biến ngẫu nhiên $\mathcal{G}$-đo được.
> 2. **Tính chất Tích phân Trực giao (Partial Averaging Property):** Với mọi biến cố $G \in \mathcal{G}$, ta có:
>    $$\int_G \xi \, d\mathbb{P} = \int_G X \, d\mathbb{P} \quad \left(\text{hay } \mathbb{E}[\xi \mathbb{1}_G] = \mathbb{E}[X \mathbb{1}_G]\right)$$

> [!prp] (Sự tồn tại và Duy nhất của Kỳ vọng Điều kiện)
> Với mọi $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\sigma$-đại số con $\mathcal{G} \subseteq \mathcal{F}$, biến ngẫu nhiên $\mathbb{E}[X \mid \mathcal{G}]$ **luôn tồn tại** và **duy nhất** theo nghĩa hầu chắc chắn ($\mathbb{P}$-a.s.).

> [!prf] 
> **Bước 1: Chứng minh Sự tồn tại**
> * **Trường hợp $X \ge 0$:** Theo **Lemma** về độ đo cảm sinh, hàm tập hợp $\nu(G) = \int_G X \, d\mathbb{P}$ là một độ đo hữu hạn trên $(\Omega, \mathcal{G})$ và $\nu \ll \mathbb{P}|_{\mathcal{G}}$.
> * Theo **Định lý Radon-Nikodym**, tồn tại biến ngẫu nhiên $Y \ge 0$, $\mathcal{G}$-đo được sao cho:
>   $$\int_G Y \, d\mathbb{P} = \nu(G) = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}$$
>   Chọn $\xi = Y$, ta có sự tồn tại của $\mathbb{E}[X \mid \mathcal{G}]$ cho biến không âm.
>
> * **Trường hợp $X \in L^1(\mathbb{P})$ tổng quát:** Phân tích $X = X^+ - X^-$. Do $X^+, X^- \in L^1(\mathbb{P})$ và không âm, áp dụng kết quả trên, tồn tại các biến ngẫu nhiên $\xi_1 = \mathbb{E}[X^+ \mid \mathcal{G}]$ và $\xi_2 = \mathbb{E}[X^- \mid \mathcal{G}]$ là $\mathcal{G}$-đo được.
> * Đặt $\xi = \xi_1 - \xi_2$. Khi đó $\xi$ rõ ràng là $\mathcal{G}$-đo được, thuộc $L^1(\mathbb{P})$, và với mọi $G \in \mathcal{G}$:
>   $$\int_G \xi \, d\mathbb{P} = \int_G \xi_1 \, d\mathbb{P} - \int_G \xi_2 \, d\mathbb{P} = \int_G X^+ \, d\mathbb{P} - \int_G X^- \, d\mathbb{P} = \int_G X \, d\mathbb{P}$$
>
> **Bước 2: Chứng minh Sự duy nhất ($\mathbb{P}$-a.s.)**
> * Giả sử tồn tại hai biến ngẫu nhiên $\xi_1, \xi_2$ cùng thỏa mãn định nghĩa $\mathbb{E}[X \mid \mathcal{G}]$.
> * Khi đó, hiệu $Z = \xi_1 - \xi_2$ là biến ngẫu nhiên $\mathcal{G}$-đo được và với mọi $G \in \mathcal{G}$:
>   $$\int_G Z \, d\mathbb{P} = \int_G \xi_1 \, d\mathbb{P} - \int_G \xi_2 \, d\mathbb{P} = \int_G X \, d\mathbb{P} - \int_G X \, d\mathbb{P} = 0$$
> * Chọn $G = \{\omega \in \Omega : Z(\omega) > 0\} = \{Z > 0\}$. Vì $Z$ là $\mathcal{G}$-đo được nên $G \in \mathcal{G}$. Ta có:
>   $$\int_{\{Z > 0\}} Z \, d\mathbb{P} = 0 \implies \mathbb{P}(Z > 0) = 0$$
> * Tương tự, xét $G' = \{Z < 0\} \in \mathcal{G} \implies \mathbb{P}(Z < 0) = 0$.
> * Do đó, $\mathbb{P}(Z = 0) = 1$, tức là $\xi_1 = \xi_2$ hầu chắc chắn ($\mathbb{P}$-a.s.). 

---

# Kỳ vọng Điều kiện theo Biến Ngẫu nhiên và Biểu diễn Doob–Dynkin

Khi điều kiện hóa không phải theo một $\sigma$-đại số trừu tượng mà theo một (hoặc một vectơ) biến ngẫu nhiên $\mathbf{Z} = (Z_1, \dots, Z_k)$, ta định nghĩa thông qua $\sigma$-đại số sinh bởi chúng.

> [!def] (Kỳ vọng điều kiện theo biến ngẫu nhiên)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và vectơ ngẫu nhiên $\mathbf{Z}: \Omega \to \mathbb{R}^k$. Kỳ vọng điều kiện của $X$ theo $\mathbf{Z}$, ký hiệu là $\mathbb{E}[X \mid \mathbf{Z}]$, được định nghĩa bởi:
> $$\mathbb{E}[X \mid \mathbf{Z}] := \mathbb{E}[X \mid \sigma(\mathbf{Z})]$$
> Trong đó $\sigma(\mathbf{Z}) = \sigma(Z_1, \dots, Z_k) = \{ \mathbf{Z}^{-1}(B) : B \in \mathcal{B}(\mathbb{R}^k) \}$.

Nhờ vào **Định lý Biểu diễn Doob–Dynkin** (đã chứng minh ở phần trước), ta có thể cụ thể hóa bản chất "hàm số" của biến ngẫu nhiên kỳ vọng điều kiện này.

> [!thm] (Định lý Phân tích Biểu diễn cho Kỳ vọng Điều kiện)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\mathbf{Z}: \Omega \to \mathbb{R}^k$ là vectơ ngẫu nhiên. Khi đó, **tồn tại một hàm đo được Borel** $g: \mathbb{R}^k \to \mathbb{R}$ sao cho:
> $$\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z}) \quad (\mathbb{P}\text{-a.s.})$$
> Hàm $g(\mathbf{z})$ được ký hiệu chính thức là $g(\mathbf{z}) := \mathbb{E}[X \mid \mathbf{Z} = \mathbf{z}]$, gọi là **hàm hồi quy (regression function)** của $X$ theo $\mathbf{Z}$.

> [!prf] 
> * Theo định nghĩa, đặt $Y = \mathbb{E}[X \mid \mathbf{Z}] = \mathbb{E}[X \mid \sigma(\mathbf{Z})]$.
> * Theo Tiên đề 1 của định nghĩa Kỳ vọng điều kiện, $Y$ là một hàm đo được $\sigma(\mathbf{Z})/\mathcal{B}(\mathbb{R})$.
> * Áp dụng trực tiếp **Doob–Dynkin Representation Theorem** cho hàm $Y$ đo được đối với $\sigma(\mathbf{Z})$, tồn tại một hàm đo được Borel $g: \mathbb{R}^k \to \mathbb{R}$ sao cho:
>   $$Y(\omega) = g(\mathbf{Z}(\omega)) \quad \forall \omega \in \Omega$$
> * Thay lại ký hiệu, ta có $\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z})$ hầu chắc chắn. 

> [!prp] (Đặc trưng Tích phân theo Phân phối của $\mathbf{Z}$)
> Hàm Borel $g: \mathbb{R}^k \to \mathbb{R}$ trong biểu diễn $\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z})$ được xác định duy nhất ($\mathbb{P}_{\mathbf{Z}}$-a.s., với $\mathbb{P}_{\mathbf{Z}}$ là độ đo phân phối của $\mathbf{Z}$ trên $\mathbb{R}^k$) thông qua phương trình tích phân:
> $$\int_B g(\mathbf{z}) \, d\mathbb{P}_{\mathbf{Z}}(\mathbf{z}) = \int_{\mathbf{Z}^{-1}(B)} X \, d\mathbb{P}, \quad \forall B \in \mathcal{B}(\mathbb{R}^k)$$

> [!prf] 
> Với mỗi tập Borel $B \in \mathcal{B}(\mathbb{R}^k)$, đặt $G = \mathbf{Z}^{-1}(B) \in \sigma(\mathbf{Z})$. 
>
> Theo định nghĩa tính chất tích phân trực giao của Kỳ vọng điều kiện trên tập $G \in \sigma(\mathbf{Z})$:
> $$\int_{\mathbf{Z}^{-1}(B)} X \, d\mathbb{P} = \int_{\mathbf{Z}^{-1}(B)} \mathbb{E}[X \mid \mathbf{Z}] \, d\mathbb{P} = \int_\Omega \mathbb{1}_B(\mathbf{Z}(\omega)) \cdot g(\mathbf{Z}(\omega)) \, d\mathbb{P}(\omega)$$
>
> Áp dụng định lý biến đổi tích phân (Change of Variables theorem / Image measure theorem) cho chuyển đổi độ đo từ $\mathbb{P}$ trên $\Omega$ sang độ đo ảnh $\mathbb{P}_{\mathbf{Z}} = \mathbb{P} \circ \mathbf{Z}^{-1}$ trên $\mathbb{R}^k$:
> $$\int_\Omega ( \mathbb{1}_B \cdot g )(\mathbf{Z}(\omega)) \, d\mathbb{P}(\omega) = \int_{\mathbb{R}^k} \mathbb{1}_B(\mathbf{z}) g(\mathbf{z}) \, d\mathbb{P}_{\mathbf{Z}}(\mathbf{z}) = \int_B g(\mathbf{z}) \, d\mathbb{P}_{\mathbf{Z}}(\mathbf{z})$$
>
> Do đó, ta có đẳng thức cần chứng minh. 

---

# Các Tính Chất Nền Tảng của Kỳ vọng Điều kiện

> [!prp] (Đại số và Thứ tự của Kỳ vọng Điều kiện)
> Cho $X, Y \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, $a, b \in \mathbb{R}$ và $\mathcal{G} \subseteq \mathcal{F}$ là $\sigma$-đại số con. Các đẳng thức và bất đẳng thức dưới đây đúng theo nghĩa hầu chắc chắn ($\mathbb{P}$-a.s.):
> 
> 1. **Tính tuyến tính (Linearity):**
>    $$\mathbb{E}[aX + bY \mid \mathcal{G}] = a\mathbb{E}[X \mid \mathcal{G}] + b\mathbb{E}[Y \mid \mathcal{G}]$$
> 2. **Tính đơn điệu (Monotonicity):**
>    $$\text{Nếu } X \le Y \text{ a.s.} \implies \mathbb{E}[X \mid \mathcal{G}] \le \mathbb{E}[Y \mid \mathcal{G}] \text{ a.s.}$$
> 3. **Định lý Tower (Law of Total Expectation / Tower Property):**
>    $$\mathbb{E} \big[ \mathbb{E}[X \mid \mathcal{G}] \big] = \mathbb{E}[X]$$
>    *Tổng quát hơn, nếu $\mathcal{H} \subseteq \mathcal{G} \subseteq \mathcal{F}$ là hệ $\sigma$-đại số lồng nhau:*
>    $$\mathbb{E} \big[ \mathbb{E}[X \mid \mathcal{G}] \big| \mathcal{H} \big] = \mathbb{E}[X \mid \mathcal{H}] = \mathbb{E} \big[ \mathbb{E}[X \mid \mathcal{H}] \big| \mathcal{G} \big]$$
> 4. **Đưa yếu tố đo được ra ngoài (Taking out what is known):**
>    *Nếu $Z$ là biến ngẫu nhiên $\mathcal{G}$-đo được và $ZX \in L^1(\mathbb{P})$, thì:*
>    $$\mathbb{E}[ZX \mid \mathcal{G}] = Z \cdot \mathbb{E}[X \mid \mathcal{G}]$$
> 5. **Độc lập suy ra Kỳ vọng không điều kiện (Independence):**
>    *Nếu $\sigma(X)$ độc lập với $\mathcal{G}$, thì:*
>    $$\mathbb{E}[X \mid \mathcal{G}] = \mathbb{E}[X]$$

> [!prf]
> **1. Chứng minh Tính tuyến tính:**
> * Rõ ràng $a\mathbb{E}[X \mid \mathcal{G}] + b\mathbb{E}[Y \mid \mathcal{G}]$ là $\mathcal{G}$-đo được.
> * Với mọi $G \in \mathcal{G}$, theo tính chất tuyến tính của tích phân Lebesgue:
>   $$\int_G (a\mathbb{E}[X \mid \mathcal{G}] + b\mathbb{E}[Y \mid \mathcal{G}]) \, d\mathbb{P} = a\int_G \mathbb{E}[X \mid \mathcal{G}] \, d\mathbb{P} + b\int_G \mathbb{E}[Y \mid \mathcal{G}] \, d\mathbb{P}$$
>   $$= a\int_G X \, d\mathbb{P} + b\int_G Y \, d\mathbb{P} = \int_G (aX + bY) \, d\mathbb{P}$$
> * Do tính duy nhất của kỳ vọng điều kiện, đẳng thức được chứng minh.
>
> **2. Chứng minh Tính đơn điệu:**
> * Đặt $Z = Y - X \ge 0$ (a.s.). Ta cần chứng minh $\xi = \mathbb{E}[Z \mid \mathcal{G}] \ge 0$ (a.s.).
> * Xét biến cố $G = \{\xi < 0\} \in \mathcal{G}$. Theo định nghĩa:
>   $$\int_G \xi \, d\mathbb{P} = \int_G Z \, d\mathbb{P} \ge 0 \quad (\text{vì } Z \ge 0 \text{ a.s.})$$
> * Tuy nhiên, trên $G$, nếu $\mathbb{P}(G) > 0$ thì $\int_G \xi \, d\mathbb{P} < 0$ (mâu thuẫn). Vậy $\mathbb{P}(\xi < 0) = 0 \implies \mathbb{E}[Y \mid \mathcal{G}] \ge \mathbb{E}[X \mid \mathcal{G}]$ a.s.
>
> **3. Chứng minh Định lý Tower:**
> * Chọn $G = \Omega \in \mathcal{G}$ trong định nghĩa kỳ vọng điều kiện:
>   $$\mathbb{E}\big[\mathbb{E}[X \mid \mathcal{G}]\big] = \int_\Omega \mathbb{E}[X \mid \mathcal{G}] \, d\mathbb{P} = \int_\Omega X \, d\mathbb{P} = \mathbb{E}[X]$$
> * Với $\mathcal{H} \subseteq \mathcal{G}$, ta cần chứng minh $\mathbb{E}[X \mid \mathcal{H}]$ là kỳ vọng điều kiện của $\mathbb{E}[X \mid \mathcal{G}]$ trên $\mathcal{H}$.
> * Rõ ràng $\mathbb{E}[X \mid \mathcal{H}]$ là $\mathcal{H}$-đo được. Với mọi $H \in \mathcal{H}$: do $\mathcal{H} \subseteq \mathcal{G}$ nên $H \in \mathcal{G}$. Khi đó:
>   $$\int_H \mathbb{E}[X \mid \mathcal{G}] \, d\mathbb{P} = \int_H X \, d\mathbb{P} = \int_H \mathbb{E}[X \mid \mathcal{H}] \, d\mathbb{P}$$
> * Từ tính duy nhất trên $\mathcal{H}$, suy ra $\mathbb{E} \big[ \mathbb{E}[X \mid \mathcal{G}] \big| \mathcal{H} \big] = \mathbb{E}[X \mid \mathcal{H}]$.
>
> **4. Chứng minh Taking out what is known:**
> * *Bước 1: $Z = \mathbb{1}_A$ với $A \in \mathcal{G}$.*
>   Với mọi $G \in \mathcal{G}$, ta có $G \cap A \in \mathcal{G}$. Do đó:
>   $$\int_G \mathbb{1}_A \mathbb{E}[X \mid \mathcal{G}] \, d\mathbb{P} = \int_{G \cap A} \mathbb{E}[X \mid \mathcal{G}] \, d\mathbb{P} = \int_{G \cap A} X \, d\mathbb{P} = \int_G (\mathbb{1}_A X) \, d\mathbb{P}$$
>   Suy ra công thức đúng cho hàm chỉ thị.
> * *Bước 2: $Z$ là hàm đơn giản $\mathcal{G}$-đo được.* Đúng theo tính chất tuyến tính.
> * *Bước 3: $Z \ge 0, X \ge 0$.* Dùng dãy hàm đơn giản không âm $Z_n \uparrow Z$ và áp dụng Định lý Hội tụ Đơn điệu (MCT).
> * *Bước 4: $Z, X$ tổng quát.* Phân tích thành các phần dương/âm $Z = Z^+ - Z^-, X = X^+ - X^-$ và sử dụng tính tuyến tính.
>
> **5. Chứng minh Độc lập:**
> * Hằng số $\mathbb{E}[X]$ là biến ngẫu nhiên hiển nhiên $\mathcal{G}$-đo được.
> * Với mọi $G \in \mathcal{G}$, do $X$ (tức $\sigma(X)$) độc lập với $\mathcal{G}$ nên $X$ độc lập với $\mathbb{1}_G$:
>   $$\int_G X \, d\mathbb{P} = \mathbb{E}[X \mathbb{1}_G] = \mathbb{E}[X] \mathbb{E}[\mathbb{1}_G] = \mathbb{E}[X] \mathbb{P}(G) = \int_G \mathbb{E}[X] \, d\mathbb{P}$$
> * Vậy $\mathbb{E}[X \mid \mathcal{G}] = \mathbb{E}[X]$ a.s. 

> [!obs] Ý tưởng nối tiếp: Bước đệm sang Không gian Hilbert $L^2(\Omega, \mathcal{F}, \mathbb{P})$
> 1. Trong không gian $L^1$, Kỳ vọng điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ được xây dựng hoàn toàn dựa trên cấu trúc độ đo và Định lý Radon-Nikodym.
> 2. Tuy nhiên, nếu ta giới hạn các biến ngẫu nhiên trong không gian có phương sai hữu hạn $X \in L^2(\Omega, \mathcal{F}, \mathbb{P})$, thì $L^2(\mathcal{F})$ trở thành một **Không gian Hilbert** với tích vô hướng $\langle X, Y \rangle = \mathbb{E}[XY]$.
> 3. Khi đó, tập các biến ngẫu nhiên $\mathcal{G}$-đo được thuộc $L^2(\mathcal{G})$ là một **không gian con đóng (closed subspace)** của $L^2(\mathcal{F})$. 
> 4. Nhờ đó, Kỳ vọng điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ có thể được định nghĩa một cách cực kỳ trực quan hình học: **nó chính là Hình chiếu Trực giao (Orthogonal Projection)** của vector $X$ xuống không gian con đóng $L^2(\mathcal{G})$ theo định lý chiếu Hilbert!
