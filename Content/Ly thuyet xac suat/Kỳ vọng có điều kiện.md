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

> [!obs] Ý tưởng nối tiếp: 
> Bước đệm sang $\mathbb{E}[X \mid Z]$ (Conditioning on Random Variable)
> 1. Khi ta muốn tính kỳ vọng điều kiện của $X$ theo một biến ngẫu nhiên rời rạc $Z$ nhận các giá trị $\{z_n\}_{n=1}^\infty$, ta lập tức có phân hoạch $\Omega = \bigsqcup_{n=1}^\infty \{Z = z_n\}$. 
> 2. Khi đó, $\sigma$-đại số sinh bởi $Z$ chính là $\sigma(Z) = \sigma(\{Z = z_n\}_{n=1}^\infty)$.
> 3. Mệnh đề trên chứng tỏ rằng khái niệm xây dựng từ phân hoạch cổ điển $\mathbb{E}[X \mid Z = z_n]$ hoàn toàn khớp với định nghĩa trừu tượng theo $\sigma$-đại số $\mathbb{E}[X \mid \sigma(Z)]$. Đây chính là cầu nối để mở rộng định nghĩa Kỳ vọng điều kiện cho các biến ngẫu nhiên liên tục tổng quát bằng Định lý Radon-Nikodym!

> [!cor]