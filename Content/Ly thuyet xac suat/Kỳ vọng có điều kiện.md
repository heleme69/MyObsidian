
# Kỳ vọng Điều kiện theo Biến cố và Phân hoạch Đếm được

> [!def] (Xác suất có điều kiện và Kỳ vọng có điều kiện sơ cấp)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ và biến cố $A \in \mathcal{F}$ thỏa mãn $\mathbb{P}(A) > 0$. Độ đo xác suất có điều kiện điều kiện $\mathbb{P}_A: \mathcal{F} \to [0, 1]$ được định nghĩa bởi
> $$\mathbb{P}_A(B) = \mathbb{P}(B \mid A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}, \quad \forall B \in \mathcal{F}.$$
> Khi đó, kỳ vọng điều kiện của biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P}_A)$ đối với biến cố $A$ được xác định qua tích phân đối với độ đo $\mathbb{P}_A$:
> $$\mathbb{E}_A[X] = \mathbb{E}[X \mid A] = \int_\Omega X \, d\mathbb{P}_A.$$

> [!lem] (Tích phân theo Độ đo Xác suất Điều kiện)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ và biến cố $A \in \mathcal{F}$ với $\mathbb{P}(A) > 0$. Khi đó:
> 1. Mọi biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ đều thuộc $L^1(\Omega, \mathcal{F}, \mathbb{P}_A)$.
> 2. Kỳ vọng của $X$ theo độ đo $\mathbb{P}_A$ được biểu diễn bằng công thức:
> $$\mathbb{E}_A[X] = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}.$$

> [!prf]
> 3. **Trường hợp $X$ là hàm đơn giản (Simple function):**
>    Giả sử $X$ có dạng biểu diễn chính tắc $X = \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j}$, trong đó $\alpha_j \in \mathbb{R}$ và họ các tập hợp $\{B_j\}_{j=1}^n \subset \mathcal{F}$ rời nhau đôi một. Theo định nghĩa của tích phân Lebesgue đối với hàm đơn giản theo độ đo $\mathbb{P}_A$, ta có:
>    $$\int_\Omega X \, d\mathbb{P}_A = \sum_{j=1}^n \alpha_j \mathbb{P}_A(B_j) = \sum_{j=1}^n \alpha_j \frac{\mathbb{P}(A \cap B_j)}{\mathbb{P}(A)} = \frac{1}{\mathbb{P}(A)} \sum_{j=1}^n \alpha_j \mathbb{P}(A \cap B_j).$$
>    Do $\mathbb{P}(A \cap B_j) = \int_\Omega \mathbb{1}_{B_j \cap A} \, d\mathbb{P} = \int_\Omega \mathbb{1}_{B_j} \mathbb{1}_A \, d\mathbb{P}$, phương trình trên được viết lại thành:
>    $$\int_\Omega X \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \int_\Omega \left( \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j} \right) \mathbb{1}_A \, d\mathbb{P} = \frac{1}{\mathbb{P}(A)} \int_\Omega X \mathbb{1}_A \, d\mathbb{P} = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}.$$
>
> 4. **Trường hợp $X$ tổng quát thuộc $L^1(\mathbb{P})$:**
>    * **Phân tích hàm:** Ta phân tích $X = X^+ - X^-$, trong đó $X^+ = \max(X, 0)$ và $X^- = \max(-X, 0)$ là các phần không âm. Do $|X| = X^+ + X^- \in L^1(\mathbb{P})$, cả $X^+$ và $X^-$ đều thuộc $L^1(\mathbb{P})$.
>    * **Xấp xỉ đơn điệu:** Theo định lý xấp xỉ hàm đo được, tồn tại hai dãy hàm đơn giản không âm $(X_n^+)_{n \ge 1}$ và $(X_n^-)_{n \ge 1}$ tăng đơn điệu đến $X^+$ và $X^-$.
>    * **Chuyển giới hạn:** Áp dụng kết quả từ Bước 1 cho các hàm đơn giản không âm này, ta thu được:
>      $$\int_\Omega (X_n^+ - X_n^-) \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \left( \int_\Omega X_n^+ \mathbb{1}_A \, d\mathbb{P} - \int_\Omega X_n^- \mathbb{1}_A \, d\mathbb{P} \right).$$
>      Do $0 \le X_n^{\pm} \mathbb{1}_A \uparrow X^{\pm} \mathbb{1}_A$ khi $n \to \infty$, áp dụng Định lý Hội tụ Đơn điệu cho từng tích phân, ta có:
>      $$\int_\Omega X^\pm \, d\mathbb{P}_A = \lim_{n \to \infty} \int_\Omega X_n^\pm \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \lim_{n \to \infty} \int_\Omega X_n^\pm \mathbb{1}_A \, d\mathbb{P} = \frac{\mathbb{E}[X^\pm \mathbb{1}_A]}{\mathbb{P}(A)}.$$
>    Do $\mathbb{E}[X^+ \mathbb{1}_A]$ và $\mathbb{E}[X^- \mathbb{1}_A]$ đều hữu hạn, lấy hiệu hai đẳng thức trên cho ta kết luận $\mathbb{E}_A[X] = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}$.

> [!def] (Kỳ vọng điều kiện theo phân hoạch đếm được)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất và $\{A_n\}_{n=1}^\infty \subset \mathcal{F}$ là một phân hoạch đếm được của $\Omega$ thỏa mãn $\mathbb{P}(A_n) > 0$ với mọi $n \ge 1$. Với mỗi biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, kỳ vọng điều kiện của $X$ theo phân hoạch $\{A_n\}_{n=1}^\infty$ là một hàm số $\mathbb{E}_{\{A_n\}_{n=1}^\infty}[X]: \Omega \to \mathbb{R}$ được định nghĩa bởi
> $$\mathbb{E}_{\{A_n\}_{n=1}^\infty}[X](\omega) \equiv \sum_{n=1}^\infty \mathbb{E}_{A_n}[X] \mathbb{1}_{A_n}(\omega) = \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n}(\omega).$$

> [!lem] (Cấu trúc của $\sigma$-đại số sinh bởi phân hoạch)
> Cho $\{A_n\}_{n=1}^\infty \subset \mathcal{F}$ là một phân hoạch đếm được của $\Omega$. Khi đó, $\sigma$-đại số sinh bởi phân hoạch này có dạng:
> $$\sigma(\{A_n\}_{n=1}^\infty) = \left\{ \bigsqcup_{n \in \Lambda} A_n \;\middle|\; \Lambda \subseteq \mathbb{N} \right\}.$$

> [!prf]
> Đặt $\mathcal{M} = \left\{ \bigsqcup_{n \in \Lambda} A_n \;\middle|\; \Lambda \subseteq \mathbb{N} \right\}$. Ta cần chứng minh $\sigma(\{A_n\}_{n=1}^\infty) = \mathcal{M}$.
>
> 5. **Chứng minh bao hàm $\mathcal{M} \subseteq \sigma(\{A_n\}_{n=1}^\infty)$:**
>    Với mọi $n \in \mathbb{N}$, tập $A_n$ thuộc phân hoạch nên $A_n \in \sigma(\{A_n\}_{n=1}^\infty)$. Vì một $\sigma$-đại số luôn đóng đối với phép hợp đếm được, với bất kỳ tập chỉ số $\Lambda \subseteq \mathbb{N}$, hợp rời $\bigsqcup_{n \in \Lambda} A_n$ cũng thuộc $\sigma(\{A_n\}_{n=1}^\infty)$.
>
> 6. **Chứng minh bao hàm $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$:**
>    Ta chứng minh $\mathcal{M}$ là một $\sigma$-đại số trên $\Omega$:
>    * **Chứa tập sinh:** Với $\Lambda = \{n\}$, ta có $A_n \in \mathcal{M}$, do đó $\{A_n\}_{n=1}^\infty \subseteq \mathcal{M}$.
>    * **Chứa tập rỗng và không gian toàn phần:** Với $\Lambda = \emptyset$ và $\Lambda = \mathbb{N}$, ta lần lượt có $\emptyset \in \mathcal{M}$ và $\Omega \in \mathcal{M}$.
>    * **Đóng đối với phép lấy bù:** Với một tập $E = \bigsqcup_{n \in \Lambda} A_n \in \mathcal{M}$, phần bù của nó là
>      $$E^c = \Omega \setminus \left( \bigsqcup_{n \in \Lambda} A_n \right) = \bigsqcup_{n \in \mathbb{N} \setminus \Lambda} A_n \in \mathcal{M}.$$
>    * **Đóng đối với hợp đếm được:** Với một dãy hợp đếm được các tập $\{E_k\}_{k=1}^\infty \subset \mathcal{M}$ trong đó $E_k = \bigsqcup_{n \in \Lambda_k} A_n$, ta có:
>      $$\bigcup_{k=1}^\infty E_k = \bigcup_{k=1}^\infty \left( \bigsqcup_{n \in \Lambda_k} A_n \right) = \bigsqcup_{n \in \bigcup_{k=1}^\infty \Lambda_k} A_n \in \mathcal{M}.$$
>    Như vậy $\mathcal{M}$ là một $\sigma$-đại số chứa $\{A_n\}_{n=1}^\infty$. Theo tính tối tiểu của $\sigma$-đại số sinh, ta suy ra $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$.

> [!prp] (Đặc trưng của Kỳ vọng Điều kiện theo $\sigma$-Đại số Phân hoạch)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\{A_n\}_{n=1}^\infty$ là một phân hoạch đếm được của $\Omega$ với $\mathbb{P}(A_n) > 0$ với mọi $n \ge 1$. Đặt $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$ và định nghĩa biến ngẫu nhiên
> $$Y = \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n}.$$
> Khi đó, biến ngẫu nhiên $Y$ thỏa mãn hai tính chất:
> 7. **Tính đo được ($\mathcal{G}$-measurability):** $Y$ là biến ngẫu nhiên đo được đối với $\mathcal{G}$.
> 8. **Tính chất bình quân cục bộ (Partial averaging property):** Với mọi biến cố $G \in \mathcal{G}$, ta có:
> $$\int_G Y \, d\mathbb{P} = \int_G X \, d\mathbb{P}.$$

> [!prf]
> 9. **Chứng minh tính đo được ($\mathcal{G}$-measurability):**
>    Ta có hàm $Y = \mathbb{E}_{\mathcal{G}}[X] = \sum_{n=1}^\infty c_n \mathbb{1}_{A_n}$ (với $c_n = \mathbb{E}_{A_n}[X]$) là một hàm $\mathcal{G}$-đo được.
>    Với mọi tập Borel $B \in \mathcal{B}(\mathbb{R})$, tạo ảnh kéo về của $B$ qua $Y$ được tính bởi
>      $$Y^{-1}(B) = \left\{ \omega \in \Omega : \sum_{n=1}^\infty c_n \mathbb{1}_{A_n}(\omega) \in B \right\} = \bigsqcup_{n: c_n \in B} A_n.$$
>      Do $A_n \in \mathcal{G}$ với mọi $n$ và $\mathcal{G}$ đóng đối với hợp đếm được, suy ra $Y^{-1}(B) = \bigsqcup_{n: c_n \in B} A_n \in \mathcal{G}$. Vậy $Y$ đo được đối với $\mathcal{G}$.
>
> 10. **Chứng minh tính chất tích phân trên mọi $G \in \mathcal{G}$:**
>    Theo bổ đề cấu trúc của $\sigma$-đại số sinh bởi phân hoạch, mọi tập $G \in \mathcal{G}$ đều biểu diễn duy nhất dưới dạng $G = \bigsqcup_{n \in \Lambda} A_n$ với $\Lambda \subseteq \mathbb{N}$.
>    Khi đó, ta tính tích phân vế trái:
>      $$\int_G Y \, d\mathbb{P} = \mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ \left( \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n} \right) \mathbb{1}_{\bigsqcup_{k \in \Lambda} A_k} \right].$$
>    Do các tập $A_n$ rời nhau đôi một, ta có $\mathbb{1}_{A_n} \mathbb{1}_{\bigsqcup_{k \in \Lambda} A_k} = \mathbb{1}_{A_n}$ nếu $n \in \Lambda$ và bằng $0$ trong trường hợp ngược lại. Phương trình trên trở thành:
>      $$\mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ \sum_{n \in \Lambda} \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n} \right].$$
>    Do $X \in L^1(\mathbb{P})$, áp dụng Định lý Hội tụ Bị chặn (Dominated Convergence Theorem) để hoán đổi toán tử kỳ vọng và tổng đếm được, ta thu được:
>      $$\mathbb{E}[Y \mathbb{1}_G] = \sum_{n \in \Lambda} \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{E}[\mathbb{1}_{A_n}] = \sum_{n \in \Lambda} \mathbb{E}[X \mathbb{1}_{A_n}] = \mathbb{E} \left[ X \sum_{n \in \Lambda} \mathbb{1}_{A_n} \right] = \mathbb{E}[X \mathbb{1}_G] = \int_G X \, d\mathbb{P}.$$

> [!rem] (Đặc trưng thông tin và Khả năng Khôi phục Phân hoạch từ $\sigma$-Đại số)
> 1. **Đặc trưng Bảo toàn Thông tin ($\sigma(Y) = \mathcal{G}$ khi các giá trị $c_n$ phân biệt đôi một):**
>    Giả sử $c_i \neq c_j$ với mọi $i \neq j$. Khi đó, $\sigma$-đại số do $Y$ sinh ra trùng khớp hoàn toàn với $\mathcal{G}$.
>      * ($\subseteq$) Do $Y$ là $\mathcal{G}$-đo được, theo định nghĩa ta có ngay $\sigma(Y) \subseteq \mathcal{G}$.
>      * ($\supseteq$) Cần chứng minh $A_k \in \sigma(Y)$ với mọi $k \ge 1$. Với một chỉ số $k \in \mathbb{N}$ cố định, do các giá trị $c_n$ phân biệt đôi một, tồn tại một bán kính $\varepsilon_k > 0$ đủ nhỏ sao cho tập Borel $B_k = (c_k - \varepsilon_k, c_k + \varepsilon_k) \subset \mathbb{R}$ chỉ chứa duy nhất điểm $c_k$ trong dãy $\{c_n\}_{n=1}^\infty$. Khi đó, tạo ảnh của $B_k$ qua $Y$ là
>        $$Y^{-1}(B_k) = \bigsqcup_{n: c_n \in B_k} A_n = A_k.$$
>        Theo định nghĩa $\sigma(Y) = Y^*(\mathcal{B}(\mathbb{R}))$, ta có $A_k = Y^{-1}(B_k) \in \sigma(Y)$. Vì $\sigma(Y)$ chứa toàn bộ các tập sinh $A_k$, suy ra $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty) \subseteq \sigma(Y)$.
>      * Kết luận: $\sigma(Y) = \mathcal{G}$, nghĩa là biến ngẫu nhiên $Y$ chứa đựng toàn bộ cấu trúc thông tin của $\mathcal{G}$.
>
> 2. **Khôi phục Nguyên tử (Atoms) từ $\sigma$-Đại số:**
>    Với mỗi điểm mẫu $\omega \in \Omega$, nguyên tử (tập phân hoạch) $A(\omega)$ chứa $\omega$ được xác định duy nhất thông qua phép giao đếm được của các tập trong $\mathcal{G}$:
>    $$A(\omega) = \bigcap_{G \in \mathcal{G}: \, \omega \in G} G.$$
>    Do $\mathcal{G} = \left\{ \bigsqcup_{n \in \Lambda} A_n : \Lambda \subseteq \mathbb{N} \right\}$, một tập $G \in \mathcal{G}$ chứa $\omega$ khi và chỉ khi tồn tại duy nhất một chỉ số $k \in \mathbb{N}$ sao cho $\omega \in A_k$ và $A_k \subseteq G$. Do đó:
>      $$\bigcap_{G \in \mathcal{G}: \, \omega \in G} G = \bigcap_{\Lambda \subseteq \mathbb{N}: \, k \in \Lambda} \left( \bigsqcup_{n \in \Lambda} A_n \right) = A_k.$$
>  Khi phân hoạch vô hạn đếm được ($\Omega = \bigsqcup_{n=1}^\infty A_n$), việc giao vô hạn các tập hợp $G \in \mathcal{G}$ mang bản chất lý thuyết độ đo trừu tượng. Trong thực tế tính toán và xử lý dữ liệu, việc xác định tường minh nguyên tử $A_k$ từ $\mathcal{G}$ chỉ thực hiện được khi cấu trúc phân hoạch là **hữu hạn** ($\mathcal{G}$ sinh bởi hữu hạn biến cố).


> [!obs] (Motivating Example - Cấu trúc Kéo về của Phân hoạch rời rạc)
> Cho $Y: \Omega \to S$ là biến ngẫu nhiên rời rạc có không gian trạng thái đếm được $S$ và $\mathbb{P}(Y = s) > 0$ với mọi $s \in S$.
> 3. **Phân hoạch sinh bởi phép Kéo về (Pullback Partition):**
>    Với mỗi điểm trạng thái $s \in S$, tập hợp con $\{s\} \subset S$ được kéo về không gian mẫu $\Omega$ thông qua tạo ảnh:
>    $$Y^{-1}(\{s\}) = \{\omega \in \Omega : Y(\omega) = s\} = \{Y = s\}.$$
>    Họ các tạo ảnh này hình thành một phân hoạch đếm được của $\Omega$. Khi đó, $\sigma$-đại số sinh bởi phân hoạch này chính là $\sigma$-đại số kéo về (pullback $\sigma$-algebra) $\sigma(Y) \equiv Y^*(\mathcal{P}(S))$:
>    $$\sigma(\{Y = s\} : s \in S) = \sigma(Y) = \left\{ Y^{-1}(B) : B \subseteq S \right\}.$$
> 4. **Cấu trúc biến ngẫu nhiên kỳ vọng điều kiện:**
>    Với $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, áp dụng định nghĩa kỳ vọng điều kiện theo phân hoạch:
>    $$\mathbb{E}[X \mid Y] = \mathbb{E}[X \mid \sigma(Y)] = \sum_{s \in S} \mathbb{E}_{\{Y = s\}}[X] \mathbb{1}_{\{Y = s\}} = \sum_{s \in S} \frac{\mathbb{E}[X \mathbb{1}_{\{Y=s\}}]}{\mathbb{P}(Y=s)} \mathbb{1}_{\{Y = s\}}.$$
> 5. **Tính chất phụ thuộc thông tin qua ánh xạ:**
>    Tại một điểm mẫu cụ thể $\omega \in \Omega$, giá trị của kỳ vọng điều kiện được tính bởi:
>    $$\mathbb{E}[X \mid Y](\omega) = \frac{\mathbb{E}[X \mathbb{1}_{\{Y = Y(\omega)\}}]}{\mathbb{P}(Y = Y(\omega))}.$$
>    Nhận xét trọng tâm: Giá trị $\mathbb{E}[X \mid Y](\omega)$ chỉ phụ thuộc vào $\omega$ thông qua hình ảnh $Y(\omega)$. Nói cách khác, biến ngẫu nhiên $\mathbb{E}[X \mid Y]$ là một hàm hằng trên từng thớ (fiber) $Y^{-1}(\{s\})$. Do đó, theo Định lý Biểu diễn Doob–Dynkin (ta sẽ trình bày), tồn tại một hàm số $g: S \to \mathbb{R}$ sao cho:
>    $$\mathbb{E}[X \mid Y] = g \circ Y \quad \text{với } g(s) \equiv \mathbb{E}[X \mid Y = s] = \mathbb{E}_{\mathbb{P}_{\{Y=s\}}}[X].$$
> Khi không gian trạng thái $S$ không còn rời rạc (phân hoạch không đếm được, xác suất thớ $\mathbb{P}(Y=y) = 0$), công thức Bayes element-wise bị phá vỡ. Ta phải sử dụng Định lý Radon-Nikodym để định nghĩa $\mathbb{E}[X \mid \sigma(Y)]$, sau đó dùng Doob–Dynkin để bảo toàn cấu trúc phân tích hàm $\mathbb{E}[X \mid Y] = g(Y)$.

# Kỳ vọng Điều kiện theo $\sigma$-Đại số Tổng quát (Radon-Nikodym)

> [!lem] (Độ đo không âm cảm sinh bởi tích phân)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất, $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con và $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ là biến ngẫu nhiên không âm ($X \ge 0$). Định nghĩa hàm tập hợp $\nu: \mathcal{G} \to [0, \infty)$ bởi
> $$\nu(G) = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}.$$
> Khi đó:
> 1. $\nu$ là một độ đo hữu hạn trên không gian đo được $(\Omega, \mathcal{G})$.
> 2. $\nu$ liên tục tuyệt đối đối với thu hẹp của độ đo $\mathbb{P}$ trên $\mathcal{G}$ (ký hiệu $\nu \ll \mathbb{P}|_{\mathcal{G}}$), tức là với mọi $G \in \mathcal{G}$, nếu $\mathbb{P}(G) = 0$ thì $\nu(G) = 0$.

> [!prf]
> 1. **Chứng minh $\nu$ là độ đo hữu hạn trên $(\Omega, \mathcal{G})$:**
>    * **Tính không âm và hữu hạn:** Do $X \ge 0$ và $X \in L^1(\mathbb{P})$, ta có $0 \le \nu(G) \le \int_\Omega X \, d\mathbb{P} < \infty$ với mọi $G \in \mathcal{G}$ và $\nu(\emptyset) = \int_\emptyset X \, d\mathbb{P} = 0$.
>    * **Tính $\sigma$-cộng tính:** Cho dãy các tập hợp $\{G_n\}_{n=1}^\infty \subset \mathcal{G}$ rời nhau đôi một và đặt $G = \bigsqcup_{n=1}^\infty G_n \in \mathcal{G}$, ta có $\mathbb{1}_G = \sum_{n=1}^\infty \mathbb{1}_{G_n}$. Do $X \ge 0$, áp dụng Định lý Hội tụ Đơn điệu cho chuỗi hàm không âm, ta có:
>      $$\nu(G) = \int_\Omega X \left( \sum_{n=1}^\infty \mathbb{1}_{G_n} \right) d\mathbb{P} = \sum_{n=1}^\infty \int_\Omega X \mathbb{1}_{G_n} \, d\mathbb{P} = \sum_{n=1}^\infty \nu(G_n).$$
>
> 2. **Chứng minh $\nu \ll \mathbb{P}|_{\mathcal{G}}$:**
>    Giả sử $G \in \mathcal{G}$ thỏa mãn $\mathbb{P}(G) = 0$. Khi đó hàm chỉ thị $\mathbb{1}_G = 0$ hầu chắc chắn ($\mathbb{P}$-a.s.), dẫn đến biến ngẫu nhiên $X \mathbb{1}_G = 0$ ($\mathbb{P}$-a.s.). Theo tính chất của tích phân Lebesgue, ta có:
>    $$\nu(G) = \int_G X \, d\mathbb{P} = \int_\Omega X \mathbb{1}_G \, d\mathbb{P} = 0.$$

> [!thm] (Định lý Radon-Nikodym cho $\sigma$-đại số con)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất, $\mathcal{G} \subseteq \mathcal{F}$ là $\sigma$-đại số con và $\nu$ là độ đo hữu hạn trên $(\Omega, \mathcal{G})$ thỏa mãn $\nu \ll \mathbb{P}|_{\mathcal{G}}$. Khi đó, tồn tại duy nhất (theo nghĩa hầu chắc chắn $\mathbb{P}$-a.s.) một biến ngẫu nhiên $Y: \Omega \to [0, \infty)$ thỏa mãn các điều kiện:
> 1. $Y$ đo được đối với $\sigma$-đại số $\mathcal{G}$.
> 2. $Y \in L^1(\Omega, \mathcal{G}, \mathbb{P}|_{\mathcal{G}})$.
> 3. Với mọi biến cố $G \in \mathcal{G}$, ta có công thức biểu diễn
> $$\nu(G) = \int_G Y \, d\mathbb{P}.$$
> Biến ngẫu nhiên $Y$ được gọi là đạo hàm Radon-Nikodym của $\nu$ đối với $\mathbb{P}|_{\mathcal{G}}$, ký hiệu là $Y = \frac{d\nu}{d\mathbb{P}|_{\mathcal{G}}}$.

> [!def] (Kỳ vọng Điều kiện theo $\sigma$-Đại số - Định nghĩa Kolmogorov)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con. Kỳ vọng điều kiện của $X$ với điều kiện $\mathcal{G}$, ký hiệu là $\mathbb{E}[X \mid \mathcal{G}]$, là một biến ngẫu nhiên $\xi: \Omega \to \mathbb{R}$ thỏa mãn hai tiên đề:
> 4. **Tính đo được ($\mathcal{G}$-measurability):** $\xi$ là biến ngẫu nhiên $\mathcal{G}$-đo được.
> 5. **Tính chất bình quân cục bộ (Partial averaging property):** Với mọi biến cố $G \in \mathcal{G}$, ta có:
> $$\int_G \xi \, d\mathbb{P} = \int_G X \, d\mathbb{P} \quad \left(\text{tương đương } \mathbb{E}[\xi \mathbb{1}_G] = \mathbb{E}[X \mathbb{1}_G]\right).$$

> [!rem] (Diễn giải Hệ Tiên đề Kolmogorov)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\sigma$-đại số con $\mathcal{G} \subseteq \mathcal{F}$. Định nghĩa tiên đề Kolmogorov xác lập kỳ vọng điều kiện $\xi = \mathbb{E}[X \mid \mathcal{G}]$ dựa trên hai điều kiện bổ sung lẫn nhau:
>
> **1. Ràng buộc về miền thông tin ($\mathcal{G}$-measurability)**
>
> Trên không gian đo được $(\Omega, \mathcal{F})$, mỗi $\sigma$-đại số con $\mathcal{G} \subseteq \mathcal{F}$ đại diện cho một hệ thống thông tin/quan sát sẵn có. Điều kiện đo được $\xi \in \mathcal{G}$ đòi hỏi mọi tập mức (level set) phải thuộc vào $\mathcal{G}$:
> $$\xi^{-1}(B) \in \mathcal{G}, \quad \forall B \in \mathcal{B}(\mathbb{R})$$
>
> Đẳng thức trên khẳng định $\xi$ không thể phân biệt các điểm mẫu $\omega_1, \omega_2 \in \Omega$ mà các biến cố trong $\mathcal{G}$ không phân biệt được. Vì $\xi$ đóng vai trò là ước lượng của $X$ dựa trên thông tin $\mathcal{G}$, điều kiện này đảm bảo $\xi$ bị giới hạn hoàn toàn trong phạm vi quan sát của $\mathcal{G}$, không chứa bất kỳ dữ liệu nào vượt ngoài $\mathcal{G}$.
>
> **2. Bảo toàn bình quân cục bộ và triệt tiêu dạng vô định $0/0$**
>
> Với một biến cố $A \in \mathcal{F}$ có $\mathbb{P}(A) > 0$, kỳ vọng điều kiện sơ cấp của $X$ trên $A$ được định nghĩa qua độ đo xác suất điều kiện $\mathbb{P}_A(B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}$:
> $$\mathbb{E}[X \mid A] \equiv \int_\Omega X \, d\mathbb{P}_A = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}$$
>
> Nhân hai vế với $\mathbb{P}(A) = \int_A d\mathbb{P}$, ta biến đổi thành phương trình tích phân bảo toàn khối lượng:
> $$
> \begin{aligned}
> \mathbb{E}[X \mid A]\,\mathbb{P}(A)
> &= \mathbb{E}[X\mathbf{1}_A] \\
> &= \int_A X\,d\mathbb{P},
> \end{aligned}
> $$
> Do đó,
> $$
> \begin{aligned}
> \int_A \mathbb{E}[X \mid A]\,d\mathbb{P}
> &= \mathbb{E}[X \mid A]\int_A d\mathbb{P} \\
> &= \mathbb{E}[X \mid A]\,\mathbb{P}(A) \\
> &= \mathbb{E}[X\mathbf{1}_A] \\
> &= \int_A X\,d\mathbb{P}.
> \end{aligned}
> $$
>
> Ta nhận thấy đẳng thức $\int_G \xi \, d\mathbb{P} = \int_G X \, d\mathbb{P}$ thể hiện rằng sai số dự báo $e = X - \xi$ luôn có kỳ vọng bằng $0$ trên mọi tập $G \in \mathcal{G}$, tức là $\int_G (X - \xi) \, d\mathbb{P} = 0$. Bằng cách nâng đẳng thức này thành **Tiên đề 2** trên mọi $G \in \mathcal{G}$, lý thuyết hoàn toàn giải phóng khỏi phép chia cho $\mathbb{P}(G)$, triệt tiêu dạng vô định $0/0$ khi xét các biến ngẫu nhiên liên tục (nơi $\mathbb{P}(Y = y) = 0$).
>
> **3. Khẳng định tồn tại (Radon–Nikodym) và Cụ thể hóa hàm thực (Doob–Dynkin)**
>
> Hệ hai tiên đề Kolmogorov thiết lập một hệ phương trình cấu trúc xác định biến ngẫu nhiên $\xi$:
> $$\begin{cases}
> (1) & \xi: \Omega \to \mathbb{R} \text{ đo được đối với } \mathcal{G}/\mathcal{B}(\mathbb{R}) \\
> (2) & \int_G \xi \, d\mathbb{P} = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}
> \end{cases}$$
>
> Với $\nu(G) = \int_G X \, d\mathbb{P} \ll \mathbb{P}|_{\mathcal{G}}$, Định lý Radon–Nikodym khẳng định sự tồn tại duy nhất ($\mathbb{P}$-a.s.) của biến ngẫu nhiên trừu tượng $\xi = \frac{d\nu}{d\mathbb{P}|_{\mathcal{G}}} \equiv \mathbb{E}[X \mid \mathcal{G}]$ trên không gian mẫu $\Omega$ mà không cần tới bất kỳ biến ngẫu nhiên quan sát cụ thể nào.
>
> Chỉ khi cụ thể hóa thông tin qua biến ngẫu nhiên quan sát $\mathbf{Y}: \Omega \to \mathbb{R}^k$ bằng cách đặt $\mathcal{G} = \sigma(\mathbf{Y})$, các thớ thông tin $A_\mathbf{y} = \mathbf{Y}^{-1}(\{\mathbf{y}\})$ mới xuất hiện thông qua toán tử kéo về (pullback). Khi đó, Định lý Biểu diễn Doob–Dynkin mới được bổ sung để đưa biến ngẫu nhiên chưa xác định $\xi(\omega)$ trên $\Omega$ thành một hàm số Borel thực $g(\mathbf{y})$ tính toán được trên không gian trạng thái $\mathbb{R}^k$:
> $$\mathbb{E}[X \mid \mathbf{Y}](\omega) = g(\mathbf{Y}(\omega)) \quad \text{với } g(\mathbf{y}) \equiv \mathbb{E}[X \mid \mathbf{Y} = \mathbf{y}]$$

> [!prp] (Sự tồn tại và Duy nhất của Kỳ vọng Điều kiện)
> Với mọi $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\sigma$-đại số con $\mathcal{G} \subseteq \mathcal{F}$, biến ngẫu nhiên kỳ vọng điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ luôn tồn tại và duy nhất theo nghĩa hầu chắc chắn ($\mathbb{P}$-a.s.).

> [!prf]
> 6. **Chứng minh sự tồn tại:**
>    * **Trường hợp không âm ($X \ge 0$):** Xét hàm tập hợp $\nu(G) = \int_G X \, d\mathbb{P}$ với $G \in \mathcal{G}$. Theo Bổ đề về độ đo cảm sinh bởi tích phân, $\nu$ là một độ đo hữu hạn trên $(\Omega, \mathcal{G})$ và $\nu \ll \mathbb{P}|_{\mathcal{G}}$. Theo Định lý Radon-Nikodym, tồn tại một biến ngẫu nhiên $Y \ge 0$ đo được đối với $\mathcal{G}$ sao cho
>      $$\int_G Y \, d\mathbb{P} = \nu(G) = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}.$$
>      Chọn $\xi = Y$, ta thu được sự tồn tại cho biến ngẫu nhiên không âm.
>    * **Trường hợp tổng quát ($X \in L^1(\mathbb{P})$):** Ta phân tích $X = X^+ - X^-$. Do $X^+, X^- \in L^1(\mathbb{P})$ và không âm, áp dụng chứng minh trên, tồn tại hai biến ngẫu nhiên $\xi_1 = \mathbb{E}[X^+ \mid \mathcal{G}]$ và $\xi_2 = \mathbb{E}[X^- \mid \mathcal{G}]$ đều là $\mathcal{G}$-đo được. Đặt $\xi = \xi_1 - \xi_2$, hiển nhiên $\xi$ đo được đối với $\mathcal{G}$, thuộc $L^1(\mathbb{P})$ và thỏa mãn
>      $$\int_G \xi \, d\mathbb{P} = \int_G \xi_1 \, d\mathbb{P} - \int_G \xi_2 \, d\mathbb{P} = \int_G X^+ \, d\mathbb{P} - \int_G X^- \, d\mathbb{P} = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}.$$
>
> 7. **Chứng minh sự duy nhất ($\mathbb{P}$-a.s.):**
>    Giả sử tồn tại hai biến ngẫu nhiên $\xi_1, \xi_2$ cùng thỏa mãn định nghĩa $\mathbb{E}[X \mid \mathcal{G}]$. Đặt $Z = \xi_1 - \xi_2$, ta có $Z$ là biến ngẫu nhiên $\mathcal{G}$-đo được và với mọi $G \in \mathcal{G}$:
>      $$\int_G Z \, d\mathbb{P} = \int_G \xi_1 \, d\mathbb{P} - \int_G \xi_2 \, d\mathbb{P} = \int_G X \, d\mathbb{P} - \int_G X \, d\mathbb{P} = 0.$$
>    Xét tập hợp $G = \{\omega \in \Omega : Z(\omega) > 0\} = \{Z > 0\}$. Vì $Z$ là $\mathcal{G}$-đo được nên $G \in \mathcal{G}$, dẫn đến $\int_{\{Z > 0\}} Z \, d\mathbb{P} = 0$, suy ra $\mathbb{P}(Z > 0) = 0$.
>    Hoàn toàn tương tự với tập $G' = \{Z < 0\} \in \mathcal{G}$, ta thu được $\mathbb{P}(Z < 0) = 0$. Do đó hạ $\mathbb{P}(Z = 0) = 1$, chứng tỏ $\xi_1 = \xi_2$ hầu chắc chắn ($\mathbb{P}$-a.s.).

# Cấu trúc Không gian Hàm: Pullback, Push-forward và Biểu diễn Doob–Dynkin

> [!lem] (Đặc trưng hóa $\sigma$-đại số sinh dưới góc nhìn Kéo về - Pullback $\sigma$-algebra)
> Cho vectơ ngẫu nhiên $\mathbf{X} = (X_1, \dots, X_d): \Omega \to \mathbb{R}^d$. Khi đó, $\sigma$-đại số sinh bởi $(X_1, \dots, X_d)$ chính là $\sigma$-đại số kéo về của $\mathcal{B}(\mathbb{R}^d)$ qua ánh xạ $\mathbf{X}$, xác định bởi toán tử tạo ảnh (pullback operator) $\mathbf{X}^*$:
> $$\sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \equiv \left\{ \mathbf{X}^{-1}(B) : B \in \mathcal{B}(\mathbb{R}^d) \right\}.$$
> Cấu trúc này khẳng định rằng một tập hợp thuộc $\sigma(\mathbf{X})$ khi và chỉ khi nó là tạo ảnh của một tập Borel dưới ánh xạ $\mathbf{X}$.

> [!prf]
> Đặt $\mathcal{M} = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \equiv \left\{ \mathbf{X}^{-1}(B) : B \in \mathcal{B}(\mathbb{R}^d) \right\}$. Ta chứng minh đẳng thức $\sigma(X_1, \dots, X_d) = \mathcal{M}$ bằng cách chứng minh hai bao hàm thức:
>
> 1. **Chứng minh bao hàm $\mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \subseteq \sigma(X_1, \dots, X_d)$:**
>    Do các biến ngẫu nhiên thành phần $X_1, \dots, X_d$ đều đo được đối với đại số $\sigma(X_1, \dots, X_d)$, vectơ ngẫu nhiên $\mathbf{X} = (X_1, \dots, X_d)$ là một ánh xạ đo được từ không gian mẫu $(\Omega, \sigma(X_1, \dots, X_d))$ vào $(\mathbb{R}^d, \mathcal{B}(\mathbb{R}^d))$.
>    Theo định nghĩa của hàm đo được, với mọi tập Borel $B \in \mathcal{B}(\mathbb{R}^d)$, tạo ảnh $\mathbf{X}^{-1}(B)$ bắt buộc phải thuộc vào đại số $\sigma$ ở miền nguồn:
>    $$\mathbf{X}^{-1}(B) \in \sigma(X_1, \dots, X_d), \quad \forall B \in \mathcal{B}(\mathbb{R}^d).$$
>    Do đó, ta có $\mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \subseteq \sigma(X_1, \dots, X_d)$.
>
> 2. **Chứng minh bao hàm $\sigma(X_1, \dots, X_d) \subseteq \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$:**
>    Nhắc lại rằng $\sigma(X_1, \dots, X_d)$ là $\sigma$-đại số **nhỏ nhất** trên $\Omega$ làm cho tất cả các $X_1, \dots, X_d$ đo được đối với $\mathcal{B}(\mathbb{R})$. Do đó, ta chỉ cần chứng minh hai điều:
>    * **$\mathcal{M} = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$ là một $\sigma$-đại số trên $\Omega$:**
>      * *Chứa không gian toàn phần:* Vì $\mathbb{R}^d \in \mathcal{B}(\mathbb{R}^d)$, ta có $\Omega = \mathbf{X}^{-1}(\mathbb{R}^d) \in \mathcal{M}$.
>      * *Đóng đối với phép lấy bù:* Nếu $A \in \mathcal{M}$, tức $A = \mathbf{X}^{-1}(B)$ với $B \in \mathcal{B}(\mathbb{R}^d)$, thì phần bù $A^c = (\mathbf{X}^{-1}(B))^c = \mathbf{X}^{-1}(B^c) \in \mathcal{M}$ do $B^c \in \mathcal{B}(\mathbb{R}^d)$.
>      * *Đóng đối với hợp đếm được:* Giả sử $\{A_n\}_{n \ge 1} \subseteq \mathcal{M}$ với $A_n = \mathbf{X}^{-1}(B_n)$ ($B_n \in \mathcal{B}(\mathbb{R}^d)$). Khi đó $\bigcup_{n=1}^\infty A_n = \bigcup_{n=1}^\infty \mathbf{X}^{-1}(B_n) = \mathbf{X}^{-1}\left( \bigcup_{n=1}^\infty B_n \right) \in \mathcal{M}$ do $\bigcup_{n=1}^\infty B_n \in \mathcal{B}(\mathbb{R}^d)$.
>    * **Các biến ngẫu nhiên $X_j$ đều đo được đối với $\mathcal{M}$:**
>      Với mỗi $j \in \{1, \dots, d\}$ và mỗi tập Borel $I \in \mathcal{B}(\mathbb{R})$, xét tập hình trụ $B_j \in \mathcal{B}(\mathbb{R}^d)$ định nghĩa bởi $B_j = \mathbb{R} \times \dots \times \underbrace{I}_{vị trí \, j} \times \dots \times \mathbb{R}$. Khi đó:
>      $$X_j^{-1}(I) = \{ \omega \in \Omega : X_j(\omega) \in I \} = \{ \omega \in \Omega : \mathbf{X}(\omega) \in B_j \} = \mathbf{X}^{-1}(B_j) \in \mathcal{M}.$$
>      Tính chất này khẳng định mọi $X_j$ đều $\mathcal{M}$-đo được.
>    Theo tính chất tối tiểu của $\sigma$-đại số sinh, ta suy ra $\sigma(X_1, \dots, X_d) \subseteq \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$.

> [!thm] (Định lý Biểu diễn Doob–Dynkin - Doob–Dynkin Representation Theorem)
> Cho $(\Omega, \mathcal{F})$ là một không gian đo được, $X_1, \dots, X_d$ là các hàm đo được $\mathcal{F}/\mathcal{B}(\mathbb{R})$ và $Y: \Omega \to \mathbb{R}$ là một hàm đo được $\sigma(X_1, \dots, X_d)/\mathcal{B}(\mathbb{R})$.
> 
> Khi đó, tồn tại một hàm đo được Borel $f: \mathbb{R}^d \to \mathbb{R}$ sao cho:
> $$Y = f(X_1, \dots, X_d) = f(\mathbf{X}).$$

![[doob-dykin-representation.webp]]

> [!prf]
> Áp dụng đặc trưng hóa kéo về $\mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$ ở trên, ta chứng minh định lý theo 3 bước:
>
> 1. **Bước 1: Trường hợp $Y$ là hàm chỉ thị ($\mathbb{1}_A$):**
>    Giả sử $Y = \mathbf{1}_A$ với $A \in \sigma(X_1, \dots, X_d)$.
>    Do $A \in \sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$, tồn tại một tập Borel $B \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A = \mathbf{X}^{-1}(B)$.
>    Khi đó, với mọi $\omega \in \Omega$, tính chất kéo về hàm chỉ thị cho ta:
>      $$\mathbf{1}_A = \mathbf{1}_{\mathbf{X}^{-1}(B)} = \mathbf{1}_B \circ \mathbf{X}.$$
>    Chọn hàm Borel $f = \mathbf{1}_B$, ta có ngay biểu diễn $Y = f(\mathbf{X})$.
>
> 2. **Bước 2: Trường hợp $Y$ là hàm đơn giản (Simple function):**
>    Giả sử $Y$ là tổ hợp tuyến tính hữu hạn của các hàm chỉ thị:
>      $$Y = \sum_{j=1}^n \alpha_j \mathbf{1}_{A_j}$$
>      với $\alpha_j \in \mathbb{R}$ và $A_j \in \sigma(X_1, \dots, X_d)$.
>    Do $A_j \in \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$, với mỗi chỉ số $j$ tồn tại tập Borel $B_j \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A_j = \mathbf{X}^{-1}(B_j)$. Khi đó:
>      $$Y = \sum_{j=1}^n \alpha_j \mathbf{1}_{\mathbf{X}^{-1}(B_j)} = \sum_{j=1}^n \alpha_j (\mathbf{1}_{B_j} \circ \mathbf{X}) = \left( \sum_{j=1}^n \alpha_j \mathbf{1}_{B_j} \right) \circ \mathbf{X}.$$
>    Định nghĩa hàm Borel $f = \sum_{j=1}^n \alpha_j \mathbf{1}_{B_j}$, ta suy ra:
>      $$Y = f(\mathbf{X}).$$
>
> 3. **Bước 3: Trường hợp $Y$ là hàm đo được tổng quát:**
>    Trong trường hợp tổng quát, luôn tồn tại một dãy hàm đơn giản $(Y_n)_{n \ge 1}$ đo được đối với $\sigma(\mathbf{X})$ hội tụ điểm đến $Y$ trên toàn bộ $\Omega$.
>    Theo kết quả từ Bước 2, với mỗi $n \ge 1$, tồn tại hàm đo được Borel $f_n: \mathbb{R}^d \to \mathbb{R}$ sao cho $Y_n = f_n(\mathbf{X})$.
>    Ta định nghĩa hàm đo được Borel $f: \mathbb{R}^d \to \mathbb{R}$ bởi giới hạn trên:
>      $$f(\mathbf{x}) \equiv \limsup_{n \to \infty} f_n(\mathbf{x}), \quad \forall \mathbf{x} \in \mathbb{R}^d.$$
>    Do phép toán giới hạn trên bảo toàn tính đo được Borel, $f$ là hàm đo được Borel và thỏa mãn:
>      $$Y = \lim_{n \to \infty} Y_n = \limsup_{n \to \infty} Y_n = \limsup_{n \to \infty} f_n(\mathbf{X}) = f(\mathbf{X}).$$

> [!def] (Kỳ vọng điều kiện theo biến ngẫu nhiên)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và vectơ ngẫu nhiên $\mathbf{Z}: \Omega \to \mathbb{R}^k$. Kỳ vọng điều kiện của $X$ theo $\mathbf{Z}$, ký hiệu là $\mathbb{E}[X \mid \mathbf{Z}]$, được định nghĩa là kỳ vọng điều kiện theo $\sigma$-đại số kéo về sinh bởi $\mathbf{Z}$:
> $$\mathbb{E}[X \mid \mathbf{Z}] \equiv \mathbb{E}[X \mid \sigma(\mathbf{Z})] = \mathbb{E}[X \mid \mathbf{Z}^*(\mathcal{B}(\mathbb{R}^k))].$$

> [!thm] (Định lý Phân tích Biểu diễn cho Kỳ vọng Điều kiện)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\mathbf{Z}: \Omega \to \mathbb{R}^k$ là vectơ ngẫu nhiên. Khi đó, tồn tại một hàm đo được Borel $g: \mathbb{R}^k \to \mathbb{R}$ sao cho
> $$\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z}) \quad (\mathbb{P}\text{-a.s.}).$$
> Hàm $g(\mathbf{z})$ được ký hiệu là $g(\mathbf{z}) \equiv \mathbb{E}[X \mid \mathbf{Z} = \mathbf{z}]$ và được gọi là hàm hồi quy (regression function) của $X$ theo $\mathbf{Z}$.

> [!prf]
> Đặt $Y = \mathbb{E}[X \mid \mathbf{Z}] = \mathbb{E}[X \mid \sigma(\mathbf{Z})]$.
> 
> Theo tiên đề thứ nhất trong định nghĩa kỳ vọng điều kiện theo $\sigma$-đại số, $Y$ là một hàm đo được đối với $\sigma(\mathbf{Z})/\mathcal{B}(\mathbb{R}) \equiv \mathbf{Z}^*(\mathcal{B}(\mathbb{R}^k))/\mathcal{B}(\mathbb{R})$.
> 
> Áp dụng trực tiếp Định lý Biểu diễn Doob–Dynkin vừa chứng minh cho biến ngẫu nhiên $Y$ đối với hệ sinh $\mathbf{Z}$, tồn tại một hàm đo được Borel $g: \mathbb{R}^k \to \mathbb{R}$ sao cho $Y(\omega) = g(\mathbf{Z}(\omega))$ với mọi $\omega \in \Omega$.
> 
> Kết hợp với tính duy nhất hầu chắc chắn của kỳ vọng điều kiện, ta thu được $\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z})$ hầu chắc chắn.

> [!lem] (Định lý Đổi biến cho Độ đo Đẩy - Change of Variables Formula)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, ánh xạ đo được $\mathbf{Z}: \Omega \to \mathbb{R}^k$, và độ đo đẩy $\mathbf{Z}_*\mathbb{P} = \mathbb{P} \circ \mathbf{Z}^{-1}$ trên $(\mathbb{R}^k, \mathcal{B}(\mathbb{R}^k))$. Khi đó, với mọi hàm đo được Borel $\varphi: \mathbb{R}^k \to \mathbb{R}$ khả tích (hoặc không âm), ta có:
> $$\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P} = \int_{\mathbb{R}^k} \varphi(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}).$$

> [!prf]
> 4. **Trường hợp $\varphi$ là Hàm chỉ thị (Indicator function):**
>    Xét $\varphi = \mathbb{1}_B$ với $B \in \mathcal{B}(\mathbb{R}^k)$. Với mỗi $\omega \in \Omega$, ta có:
>    $$(\mathbb{1}_B \circ \mathbf{Z})(\omega) = \mathbb{1}_B(\mathbf{Z}(\omega)) = \mathbb{1}_{\mathbf{Z}^{-1}(B)}(\omega)$$
>    Tính tích phân hai vế:
>    * Vế trái:
>      $$\int_\Omega (\mathbb{1}_B \circ \mathbf{Z}) \, d\mathbb{P} = \int_\Omega \mathbb{1}_{\mathbf{Z}^{-1}(B)} \, d\mathbb{P} = \mathbb{P}(\mathbf{Z}^{-1}(B))$$
>    * Vế phải: Theo định nghĩa của độ đo đẩy $(\mathbf{Z}_*\mathbb{P})(B) \equiv \mathbb{P}(\mathbf{Z}^{-1}(B))$, ta có:
>      $$\int_{\mathbb{R}^k} \mathbb{1}_B(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = (\mathbf{Z}_*\mathbb{P})(B) = \mathbb{P}(\mathbf{Z}^{-1}(B))$$
>    Do đó, đẳng thức đúng cho hàm chỉ thị:
>    $$\int_\Omega (\mathbb{1}_B \circ \mathbf{Z}) \, d\mathbb{P} = \int_{\mathbb{R}^k} \mathbb{1}_B(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z})$$
>
> 5. **Trường hợp $\varphi$ là Hàm đơn giản không âm (Simple function):**
>    Giả sử $\varphi = \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j}$ với $\alpha_j \ge 0$ và $B_j \in \mathcal{B}(\mathbb{R}^k)$.
>    Do tính tuyến tính của tích phân Lebesgue và kết quả ở Bước 1, ta có:
>    $$\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P} = \int_\Omega \left( \sum_{j=1}^n \alpha_j (\mathbb{1}_{B_j} \circ \mathbf{Z}) \right) d\mathbb{P} = \sum_{j=1}^n \alpha_j \int_\Omega (\mathbb{1}_{B_j} \circ \mathbf{Z}) \, d\mathbb{P}$$
>    $$\phantom{\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P}} = \sum_{j=1}^n \alpha_j \int_{\mathbb{R}^k} \mathbb{1}_{B_j}(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = \int_{\mathbb{R}^k} \left( \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j}(\mathbf{z}) \right) d(\mathbf{Z}_*\mathbb{P})(\mathbf{z})$$
>    $$\phantom{\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P}} = \int_{\mathbb{R}^k} \varphi(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z})$$
>
> 6. **Trường hợp $\varphi$ là Hàm đo được không âm tổng quát ($\varphi \ge 0$):**
>    Theo định lý xấp xỉ hàm đo được, tồn tại một dãy hàm đơn giản không âm $(\varphi_n)_{n \ge 1}$ tăng đơn điệu đến $\varphi$ ($\varphi_n \uparrow \varphi$ pointwise trên $\mathbb{R}^k$).
>    Khi đó, dãy hàm $(\varphi_n \circ \mathbf{Z})_{n \ge 1}$ cũng tăng đơn điệu đến $\varphi \circ \mathbf{Z}$ trên $\Omega$.
>    Áp dụng kết quả ở Bước 2 cho từng hàm đơn giản $\varphi_n$ và sử dụng Định lý Hội tụ Đơn điệu (Monotone Convergence Theorem - MCT) cho cả hai vế:
>    $$\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P} = \lim_{n \to \infty} \int_\Omega (\varphi_n \circ \mathbf{Z}) \, d\mathbb{P} = \lim_{n \to \infty} \int_{\mathbb{R}^k} \varphi_n(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = \int_{\mathbb{R}^k} \varphi(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z})$$
>
> 7. **Trường hợp $\varphi$ là Hàm khả tích tổng quát ($\varphi \in L^1(\mathbf{Z}_*\mathbb{P})$):**
>    Tách $\varphi = \varphi^+ - \varphi^-$, trong đó $\varphi^+ = \max(\varphi, 0)$ và $\varphi^- = \max(-\varphi, 0)$ là các phần không âm đo được.
>    Do $\varphi$ khả tích, cả $\varphi^+$ và $\varphi^-$ đều khả tích theo độ đo $\mathbf{Z}_*\mathbb{P}$. Áp dụng kết quả Bước 3 cho $\varphi^+$ và $\varphi^-$ rồi lấy hiệu hai tích phân:
>    $$\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P} = \int_\Omega (\varphi^+ \circ \mathbf{Z}) \, d\mathbb{P} - \int_\Omega (\varphi^- \circ \mathbf{Z}) \, d\mathbb{P}$$
>    $$\phantom{\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P}} = \int_{\mathbb{R}^k} \varphi^+(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) - \int_{\mathbb{R}^k} \varphi^-(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z})$$
>    $$\phantom{\int_\Omega (\varphi \circ \mathbf{Z}) \, d\mathbb{P}} = \int_{\mathbb{R}^k} \varphi(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z})$$

> [!prp] (Đặc trưng Tích phân qua Độ đo Đẩy - Push-forward Measure $\mathbf{Z}_*\mathbb{P}$)
> Cho $\mathbb{P}_{\mathbf{Z}} \equiv \mathbf{Z}_*\mathbb{P} = \mathbb{P} \circ \mathbf{Z}^{-1}$ là độ đo đẩy (push-forward measure) của $\mathbb{P}$ từ không gian mẫu $\Omega$ sang không gian trạng thái $\mathbb{R}^k$ qua ánh xạ $\mathbf{Z}$. Khi đó, hàm Borel $g: \mathbb{R}^k \to \mathbb{R}$ trong biểu diễn $\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z})$ được xác định duy nhất ($\mathbf{Z}_*\mathbb{P}$-a.s.) thông qua phương trình tích phân:
> $$\int_B g(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = \int_{\mathbf{Z}^{-1}(B)} X \, d\mathbb{P}, \quad \forall B \in \mathcal{B}(\mathbb{R}^k).$$

> [!prf]
> Với mỗi Borel set $B \in \mathcal{B}(\mathbb{R}^k)$, xét tập pullback $G = \mathbf{Z}^{-1}(B) \in \sigma(\mathbf{Z})$. Theo tiên đề thứ hai của định nghĩa kỳ vọng điều kiện trên tập $G$, ta có:
>    $$\int_{\mathbf{Z}^{-1}(B)} X \, d\mathbb{P} = \int_{\mathbf{Z}^{-1}(B)} \mathbb{E}[X \mid \mathbf{Z}] \, d\mathbb{P} = \int_\Omega \mathbb{1}_B(\mathbf{Z}(\omega)) g(\mathbf{Z}(\omega)) \, d\mathbb{P}(\omega).$$
> Áp dụng Định lý Đổi biến tích phân theo Độ đo đẩy vừa nêu ở trên cho hàm $\varphi = \mathbb{1}_B \cdot g$, vế phải được chuyển hóa hoàn toàn sang không gian trạng thái $\mathbb{R}^k$:
>    $$\int_\Omega (\mathbb{1}_B \cdot g)(\mathbf{Z}(\omega)) \, d\mathbb{P}(\omega) = \int_{\mathbb{R}^k} \mathbb{1}_B(\mathbf{z}) g(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = \int_B g(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}).$$
> Phương trình tích phân trên đúng với mọi $B \in \mathcal{B}(\mathbb{R}^k)$, do đó hàm $g$ được xác định duy nhất theo nghĩa hầu chắc chắn đối với độ đo đẩy $\mathbf{Z}_*\mathbb{P}$.

# Mật độ Xác suất Có điều kiện và Biểu diễn Tích phân cho Vectơ Liên tục

> [!thm] (Định lý Tonelli–Fubini cho Độ đo Tích - Product Measure and Fubini's Theorem)
> Cho $(S, \mathcal{B}_S, \mu_S)$ và $(T, \mathcal{B}_T, \mu_T)$ là hai không gian độ đo $\sigma$-hữu hạn (ví dụ, các không gian Lebesgue trên $\mathbb{R}^d$). Gọi $\mu_S \otimes \mu_T$ là độ đo tích duy nhất trên $\sigma$-đại số tích $\mathcal{B}_S \otimes \mathcal{B}_T$.
> 
> 1. **Định lý Tonelli (Hàm đo được không âm):** Nếu $f: S \times T \to [0, \infty]$ là hàm $\mathcal{B}_S \otimes \mathcal{B}_T$-đo được, thì các hàm lề tích phân thớ
>    $$x \mapsto \int_T f(x, y) \, d\mu_T(y) \quad \text{và} \quad y \mapsto \int_S f(x, y) \, d\mu_S(x)$$
>    lần lượt đo được đối với $\mathcal{B}_S$ và $\mathcal{B}_T$, đồng thời ta có công thức đổi thứ tự tích phân:
>    $$\int_{S \times T} f \, d(\mu_S \otimes \mu_T) = \int_S \left( \int_T f(x, y) \, d\mu_T(y) \right) d\mu_S(x) = \int_T \left( \int_S f(x, y) \, d\mu_S(x) \right) d\mu_T(y).$$
> 2. **Định lý Fubini (Hàm khả tích):** Nếu $f \in L^1(S \times T, \mathcal{B}_S \otimes \mathcal{B}_T, \mu_S \otimes \mu_T)$, thì với hầu hết $x \in S$ ($\mu_S$-a.e.) thớ $f_x(y) = f(x, y)$ thuộc $L^1(\mu_T)$, với hầu hết $y \in T$ ($\mu_T$-a.e.) thớ $f^y(x) = f(x, y)$ thuộc $L^1(\mu_S)$, và đẳng thức tích phân lặp trên vẫn đúng.

> [!prp] (Tích phân Từng phần - Partial Integration on Product Spaces)
> Cho không gian xác suất tích $(\Omega_1 \times \Omega_2, \mathcal{F}_1 \otimes \mathcal{F}_2, \mathbb{P}_1 \otimes \mathbb{P}_2)$ và xét $\sigma$-đại số con $\mathcal{G} = \mathcal{F}_1 \otimes \{\emptyset, \Omega_2\}$ (chỉ chứa thông tin về tọa độ thứ nhất $\omega_1$). 
> 
> Với mọi biến ngẫu nhiên $X \in L^1(\Omega_1 \times \Omega_2, \mathcal{F}_1 \otimes \mathcal{F}_2, \mathbb{P}_1 \otimes \mathbb{P}_2)$, kỳ vọng điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ chính là phép **tích phân từng phần (integrating out $\omega_2$)** theo độ đo lề $\mathbb{P}_2$:
> $$\mathbb{E}[X \mid \mathcal{G}](\omega_1, \omega_2) = \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2'), \quad \text{a.s.}$$

> [!prf]
> Đặt $Z(\omega_1) = \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2')$. Theo Định lý Fubini, $Z$ là một hàm đo được đối với $\mathcal{F}_1$, do đó đo được đối với $\mathcal{G} = \mathcal{F}_1 \otimes \{\emptyset, \Omega_2\}$.
> 
> Với mỗi tập $G \in \mathcal{G}$, theo cấu trúc $\sigma$-đại số tích, $G$ có dạng $A \times \Omega_2$ với $A \in \mathcal{F}_1$. Tính tích phân của $Z$ trên $G$ đối với độ đo tích $\mathbb{P} = \mathbb{P}_1 \otimes \mathbb{P}_2$:
> $$\int_G Z \, d\mathbb{P} = \int_{A \times \Omega_2} Z(\omega_1) \, d(\mathbb{P}_1 \otimes \mathbb{P}_2)(\omega_1, \omega_2) = \int_A Z(\omega_1) \, d\mathbb{P}_1(\omega_1) = \int_A \left( \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2') \right) d\mathbb{P}_1(\omega_1).$$
> Áp dụng Định lý Fubini hoán đổi tích phân lặp thành tích phân trên không gian tích $A \times \Omega_2 = G$:
> $$\int_G Z \, d\mathbb{P} = \int_{A \times \Omega_2} X(\omega_1, \omega_2) \, d(\mathbb{P}_1 \otimes \mathbb{P}_2)(\omega_1, \omega_2) = \int_G X \, d\mathbb{P}.$$
> Đẳng thức trên nghiệm đúng với mọi $G \in \mathcal{G}$, khẳng định $Z = \mathbb{E}[X \mid \mathcal{G}]$ hầu chắc chắn.

> [!prp] (Đặc trưng Tính Độc lập qua Kỳ vọng Điều kiện)
> Cho biến ngẫu nhiên $X: (\Omega, \mathcal{F}) \to (S, \mathcal{B}_S)$ và $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con. 
> 
> $\sigma$-đại số $\sigma(X)$ và $\mathcal{G}$ độc lập với nhau khi và chỉ khi với mọi hàm Borel bị chặn $f \in \mathcal{B}(S, \mathcal{B}_S)$, ta có đẳng thức hầu chắc chắn:
> $$\mathbb{E}[f(X) \mid \mathcal{G}] = \mathbb{E}[f(X)] \quad (\mathbb{P}\text{-a.s.})$$
=>
> [!prf]
> 1. **Chiều thuận ($\implies$):** Giả sử $\sigma(X)$ và $\mathcal{G}$ độc lập. Với bất kỳ $G \in \mathcal{G}$, do $f(X)$ và $\mathbb{1}_G$ độc lập, ta có:
>    $$\int_G \mathbb{E}[f(X)] \, d\mathbb{P} = \mathbb{E}[f(X)] \mathbb{P}(G) = \mathbb{E}[f(X) \mathbb{1}_G] = \int_G f(X) \, d\mathbb{P}.$$
>    Vì $\mathbb{E}[f(X)]$ là hằng số (hiển nhiên $\mathcal{G}$-đo được), theo tính duy nhất của tiên đề Kolmogorov, ta suy ra $\mathbb{E}[f(X) \mid \mathcal{G}] = \mathbb{E}[f(X)]$ a.s.
> 2. **Chiều đảo ($\impliedby$):** Giả sử $\mathbb{E}[f(X) \mid \mathcal{G}] = \mathbb{E}[f(X)]$ a.s. Với mọi tập $B \in \mathcal{B}_S$ và $G \in \mathcal{G}$, chọn $f = \mathbb{1}_B$:
>    $$\mathbb{P}(\{X \in B\} \cap G) = \mathbb{E}[\mathbb{1}_B(X) \mathbb{1}_G] = \int_G \mathbb{E}[\mathbb{1}_B(X) \mid \mathcal{G}] \, d\mathbb{P} = \int_G \mathbb{E}[\mathbb{1}_B(X)] \, d\mathbb{P} = \mathbb{P}(X \in B) \mathbb{P}(G).$$
>    Đẳng thức khẳng định $\sigma(X)$ và $\mathcal{G}$ độc lập.

> [!lem] (Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel - Test Function Characterization)
> Cho $X: \Omega \to \mathbb{R}^k$ là vectơ ngẫu nhiên, $Z \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, và $g: \mathbb{R}^k \to \mathbb{R}$ là hàm Borel. 
> 
> Đẳng thức kỳ vọng điều kiện $g(X) = \mathbb{E}[Z \mid X]$ hầu chắc chắn tương đương với việc $g(X)$ nghiệm đúng phương trình bình quân cục bộ đối với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R}^k)$:
> $$\mathbb{E}[Z \cdot h(X)] = \mathbb{E}[g(X) \cdot h(X)].$$

> [!prf]
> **1. Chiều thuận ($\implies$):** 
> Giả sử $g(X) = \mathbb{E}[Z \mid X]$ hầu chắc chắn. Theo Đặc trưng Tích phân qua Độ đo Đẩy, đẳng thức tích phân sau nghiệm đúng với mọi tập Borel $B \in \mathcal{B}(\mathbb{R}^k)$:
> $$\int_{X^{-1}(B)} Z \, d\mathbb{P} = \int_B g(x) \, d(X_*\mathbb{P})(x).$$
> Ta chứng minh phương trình $\mathbb{E}[Z \cdot h(X)] = \mathbb{E}[g(X) \cdot h(X)]$ đúng cho mọi hàm thử Borel bị chặn thông qua cấu trúc 3 bước:
> 
> * **Bước 1 (Hàm chỉ thị Borel):** Chọn $h = \mathbb{1}_B$ với $B \in \mathcal{B}(\mathbb{R}^k)$. Áp dụng Định lý Đổi biến theo độ đo đẩy $X_*\mathbb{P}$, vế trái và vế phải được viết dưới dạng kỳ vọng:
>   $$\mathbb{E}[Z \cdot \mathbb{1}_B(X)] = \int_{X^{-1}(B)} Z \, d\mathbb{P} = \int_B g(x) \, d(X_*\mathbb{P})(x) = \mathbb{E}[g(X) \cdot \mathbb{1}_B(X)].$$
>   Do đó, đẳng thức nghiệm đúng với mọi hàm chỉ thị Borel.
> 
> * **Bước 2 (Hàm đơn giản Borel):** Với mọi hàm đơn giản $h_m = \sum_{j=1}^m c_j \mathbb{1}_{B_j}$ (trong đó $c_j \in \mathbb{R}$ và $B_j \in \mathcal{B}(\mathbb{R}^k)$), nhờ tính chất tuyến tính của toán tử tích phân Lebesgue, ta có:
>   $$\mathbb{E}[Z \cdot h_m(X)] = \sum_{j=1}^m c_j \mathbb{E}[Z \cdot \mathbb{1}_{B_j}(X)] = \sum_{j=1}^m c_j \mathbb{E}[g(X) \cdot \mathbb{1}_{B_j}(X)] = \mathbb{E}[g(X) \cdot h_m(X)].$$
> 
> * **Bước 3 (Hàm Borel bị chặn bất kỳ via Dominated Convergence Theorem):** Xét hàm Borel bị chặn tùy ý $h \in \mathcal{B}(\mathbb{R}^k)$ thỏa mãn $\sup_{x \in \mathbb{R}^k} |h(x)| \le M < \infty$. 
>   Luôn tồn tại một dãy hàm đơn giản $(h_n)_{n \ge 1}$ bị chặn bởi $M$ ($|h_n(x)| \le M$) hội tụ từng điểm về $h(x)$ trên toàn bộ $\mathbb{R}^k$. Khi đó:
>   $$\lim_{n \to \infty} Z \cdot h_n(X) = Z \cdot h(X) \quad \text{và} \quad \lim_{n \to \infty} g(X) \cdot h_n(X) = g(X) \cdot h(X) \quad (\mathbb{P}\text{-a.s.}).$$
>   Do $|Z \cdot h_n(X)| \le M|Z| \in L^1(\mathbb{P})$ và $|g(X) \cdot h_n(X)| \le M|g(X)| \in L^1(\mathbb{P})$, áp dụng Định lý Hội tụ trội Lebesgue (Dominated Convergence Theorem - DCT) cho hai vế, ta thu được:
>   $$\mathbb{E}[Z \cdot h(X)] = \lim_{n \to \infty} \mathbb{E}[Z \cdot h_n(X)] = \lim_{n \to \infty} \mathbb{E}[g(X) \cdot h_n(X)] = \mathbb{E}[g(X) \cdot h(X)].$$
> 
> **2. Chiều đảo ($\impliedby$):** 
> Giả sử phương trình $\mathbb{E}[Z \cdot h(X)] = \mathbb{E}[g(X) \cdot h(X)]$ nghiệm đúng với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R}^k)$.
> 
> * **Bước 1 (Thu gọn về tập sự kiện Borel):** Với mỗi tập Borel $B \in \mathcal{B}(\mathbb{R}^k)$ bất kỳ, chọn hàm thử là hàm chỉ thị $h = \mathbb{1}_B$. Vì $\mathbb{1}_B$ là hàm Borel bị chặn, giả thiết cho ta:
>   $$\mathbb{E}[Z \cdot \mathbb{1}_B(X)] = \mathbb{E}[g(X) \cdot \mathbb{1}_B(X)].$$
> 
> * **Bước 2 (Chuyển hóa sang phương trình tích phân Kolmogorov trên $\sigma(X)$):** 
>   Mọi biến cố $G \in \sigma(X)$ đều là tạo ảnh (pullback event) của một tập Borel $B \in \mathcal{B}(\mathbb{R}^k)$ dưới ánh xạ $X$, tức $G = X^{-1}(B) = \{X \in B\}$. Viết lại kỳ vọng dưới dạng tích phân Lebesgue trên biến cố $G$:
>   $$\int_G Z \, d\mathbb{P} = \int_{X^{-1}(B)} Z \, d\mathbb{P} = \mathbb{E}[Z \cdot \mathbb{1}_B(X)] = \mathbb{E}[g(X) \cdot \mathbb{1}_B(X)] = \int_{X^{-1}(B)} g(X) \, d\mathbb{P} = \int_G g(X) \, d\mathbb{P}.$$
> 
> * **Bước 3 (Kết luận theo hệ tiên đề Kolmogorov):** 
>   Vì $g(X)$ hiển nhiên đo được đối với $\sigma(X)$ và thỏa mãn $\int_G Z \, d\mathbb{P} = \int_G g(X) \, d\mathbb{P}$ với mọi biến cố $G \in \sigma(X)$, theo tính duy nhất hầu chắc chắn của Tiên đề Kolmogorov (hoặc chiều đảo của Đặc trưng Tích phân qua Độ đo Đẩy), ta kết luận:
>   $$g(X) = \mathbb{E}[Z \mid X] \quad (\mathbb{P}\text{-a.s.}).$$


> [!thm] (Công thức Cắt lớp Tích phân cho Các Biến Độc lập - Independent Slicing)
> Cho hai biến ngẫu nhiên độc lập $X: (\Omega, \mathcal{F}) \to (S, \mathcal{B}_S)$ và $Y: (\Omega, \mathcal{F}) \to (T, \mathcal{B}_T)$ trên không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, với phân phối lề lần lượt là $\mu_X$ và $\mu_Y$. 
> 
> Với mọi hàm Borel $f \in \mathcal{B}(S \times T, \mathcal{B}_S \otimes \mathcal{B}_T)$ khả tích hoặc không âm, kỳ vọng điều kiện $\mathbb{E}[f(X,Y) \mid X]$ có biểu diễn Doob–Dynkin $\mathbb{E}[f(X,Y) \mid X] = g(X)$, trong đó hàm hồi quy $g(x) \equiv \mathbb{E}[f(X,Y) \mid X = x]$ được xác định bởi:
> $$g(x) = \mathbb{E}[f(x, Y)] = \int_T f(x, y) \,\mu_Y(dy).$$

> [!prf]
> Do $X$ và $Y$ độc lập, định luật đồng thời của vectơ $(X, Y)$ là độ đo tích $\mu_{XY} = \mu_X \otimes \mu_Y$. Với mọi hàm thử $h \in \mathcal{B}(S, \mathcal{B}_S)$, áp dụng Định lý Fubini–Tonelli:
> $$\mathbb{E}[f(X,Y)h(X)] = \iint_{S \times T} f(x,y)h(x) \,(\mu_X \otimes \mu_Y)(dxdy)$$
> $$= \int_S h(x) \left( \int_T f(x,y) \,\mu_Y(dy) \right) \mu_X(dx) = \int_S g(x)h(x) \,\mu_X(dx) = \mathbb{E}[g(X)h(X)].$$
> Theo Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel vừa chứng minh ở trên, đẳng thức $\mathbb{E}[f(X,Y)h(X)] = \mathbb{E}[g(X)h(X)]$ nghiệm đúng với mọi hàm thử $h$ khẳng định $g(X) = \mathbb{E}[f(X,Y) \mid X]$ hầu chắc chắn.

> [!def] (Hàm Mật độ Xác suất Có điều kiện - Conditional Probability Density)
> Cho vectơ ngẫu nhiên $(X, Y): \Omega \to \mathbb{R} \times \mathbb{R}^d$ có hàm mật độ xác suất đồng thời $\rho_{XY} \in L^1(\mathbb{R} \times \mathbb{R}^d, \mathcal{B}(\mathbb{R} \times \mathbb{R}^d), \lambda)$ đối với độ đo Lebesgue $\lambda$. Theo Định lý Fubini–Tonelli áp dụng cho độ đo tích trên $\mathbb{R} \times \mathbb{R}^d$, hàm mật độ lề của $X$ được xác định bởi tích phân Lebesgue theo từng thớ:
> $$\rho_X(x) = \int_{\mathbb{R}^d} \rho_{XY}(x, y) \, dy, \quad \forall x \in \mathbb{R}.$$
> Hàm **mật độ xác suất có điều kiện** của $Y$ với điều kiện $X = x$, ký hiệu là $\rho_{Y \mid X}(\cdot \mid x): \mathbb{R}^d \to [0, \infty)$, được định nghĩa tường minh bởi:
> $$\rho_{Y \mid X}(y \mid x) = \mathbb{1}_{\{0 < \rho_X(x) < \infty\}} \frac{\rho_{XY}(x,y)}{\rho_X(x)}.$$

> [!thm] (Biểu diễn Tích phân của Kỳ vọng Điều kiện qua Mật độ Điều kiện)
> Cho $(X, Y)$ là vectơ ngẫu nhiên có hàm mật độ đồng thời $\rho_{XY}(x, y)$. Với mọi hàm Borel $f \in \mathcal{B}(\mathbb{R} \times \mathbb{R}^d)$ thỏa mãn $f(X, Y) \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ (hoặc $f \ge 0$), kỳ vọng điều kiện $\mathbb{E}[f(X, Y) \mid X]$ có biểu diễn Doob–Dynkin $\mathbb{E}[f(X, Y) \mid X] = g(X)$, trong đó hàm hồi quy $g(x) \equiv \mathbb{E}[f(X, Y) \mid X = x]$ được tính tường minh bằng tích phân Lebesgue theo mật độ điều kiện:
> $$g(x) = \int_{\mathbb{R}^d} f(x, y) \rho_{Y \mid X}(y \mid x) \, dy.$$

> [!prf]
> Theo Định lý Biểu diễn Doob–Dynkin và Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel, để chứng minh $g(X) = \mathbb{E}[f(X, Y) \mid X]$ hầu chắc chắn, ta cần nghiệm lại phương trình bình quân cục bộ Kolmogorov đối với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R})$:
> $$\mathbb{E}[f(X, Y)h(X)] = \mathbb{E}[g(X)h(X)].$$
> Quá trình chứng minh được chia thành 3 bước chi tiết:
>
> 1. **Bước 1: Khai triển vế phải theo mật độ lề của $X$**
>    Áp dụng định lý đổi biến theo độ đo đẩy $\mathbb{P}_X(dx) = \rho_X(x)dx$, kỳ vọng của hàm $g(X)h(X)$ được viết dưới dạng tích phân Lebesgue trên $\mathbb{R}$:
>    $$\mathbb{E}[g(X)h(X)] = \int_{\mathbb{R}} g(x)h(x)\rho_X(x) \, dx.$$
>    Phân hoạch miền tích phân $\mathbb{R}$ thành hai tập hợp rời nhau: tập hỗ trợ hữu hạn $S = \{x \in \mathbb{R} : 0 < \rho_X(x) < \infty\}$ và tập kỳ dị $S^c = \{\rho_X(x) = 0\} \cup \{\rho_X(x) = \infty\}$. Khi đó:
>    $$\mathbb{E}[g(X)h(X)] = \int_S g(x)h(x)\rho_X(x) \, dx + \int_{S^c} g(x)h(x)\rho_X(x) \, dx.$$
>
> 2. **Bước 2: Xử lý tập hỗ trợ hữu hạn ($S$)**
>    Trên miền $S = \{0 < \rho_X(x) < \infty\}$, thay định nghĩa hàm $g(x)$ và hàm mật độ điều kiện $\rho_{Y \mid X}(y \mid x) = \frac{\rho_{XY}(x,y)}{\rho_X(x)}$ vào tích phân:
>    $$\int_S g(x)h(x)\rho_X(x) \, dx = \int_S h(x) \left( \int_{\mathbb{R}^d} f(x,y) \frac{\rho_{XY}(x,y)}{\rho_X(x)} \, dy \right) \rho_X(x) \, dx.$$
>    Triệt tiêu nhân tử $\rho_X(x) > 0$ ở tử số và mẫu số, ta thu được tích phân kép trên $S \times \mathbb{R}^d$:
>    $$\int_S g(x)h(x)\rho_X(x) \, dx = \int_S \int_{\mathbb{R}^d} f(x,y)h(x)\rho_{XY}(x,y) \, dy dx.$$
>
> 3. **Bước 3: Triệt tiêu tích phân trên miền số đo không ($S^c$) và hoàn tất phương trình**
>    * Do $\rho_X \in L^1(\mathbb{R})$, tập các điểm $\{\rho_X(x) = \infty\}$ có số đo Lebesgue bằng $0$.
>    * Tại các điểm thuộc tập $\{\rho_X(x) = 0\}$, theo định nghĩa mật độ lề $\rho_X(x) = \int_{\mathbb{R}^d} \rho_{XY}(x,y) \, dy = 0$, ta suy ra hàm không âm $\rho_{XY}(x, y) = 0$ hầu khắp nơi đối với độ đo Lebesgue trên $\mathbb{R}^d$ theo biến $y$.
>    * Do đó, tích phân lớp trong trên thớ $\{\rho_X(x) = 0\}$ bị triệt tiêu hoàn toàn:
>      $$\left| \int_{\mathbb{R}^d} f(x,y)\rho_{XY}(x,y) \, dy \right| \le \sup_{y} |f(x,y)| \int_{\mathbb{R}^d} \rho_{XY}(x,y) \, dy = 0.$$
>    Như vậy, tích phân kép trên toàn bộ vùng kỳ dị $S^c \times \mathbb{R}^d$ có giá trị bằng $0$. Bổ sung miền này vào kết quả từ Bước 2 và áp dụng Định lý Fubini cho không gian tích $\mathbb{R} \times \mathbb{R}^d$, ta có:
>    $$\mathbb{E}[g(X)h(X)] = \iint_{\mathbb{R} \times \mathbb{R}^d} f(x,y)h(x)\rho_{XY}(x,y) \, dy dx = \mathbb{E}[f(X, Y)h(X)].$$
>    Đẳng thức tích phân nghiệm đúng với mọi hàm thử $h \in \mathcal{B}(\mathbb{R})$, khẳng định $g(X) = \mathbb{E}[f(X, Y) \mid X]$ hầu chắc chắn.

> [!rem] (Diễn giải Mật độ Điều kiện từ Góc nhìn Tích phân Từng phần)
> Hàm mật độ xác suất có điều kiện $\rho_{Y \mid X}(y \mid x)$ chính là sự cụ thể hóa trên $\mathbb{R} \times \mathbb{R}^d$ của mệnh đề **Partial Integration (Tích phân từng phần)** trừu tượng.
> 
> **1. Biểu diễn Phân tích Độ đo (Measure Disintegration)**
> 
> * **Trên Không gian Tích Trừu tượng $(\Omega_1 \times \Omega_2, \mathcal{F}_1 \otimes \mathcal{F}_2, \mathbb{P}_1 \otimes \mathbb{P}_2)$:** 
>   Phép lấy kỳ vọng điều kiện theo $\sigma$-đại số $\mathcal{G} = \mathcal{F}_1 \otimes \{\emptyset, \Omega_2\}$ biến biến ngẫu nhiên hai biến $X(\omega_1, \omega_2)$ thành $Z(\omega_1)$ bằng cách **tích phân tiêu biến (integrating out)** tọa độ $\omega_2$ đối với độ đo lề $\mathbb{P}_2$:
>   $$\mathbb{E}[X \mid \mathcal{G}](\omega_1) = \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2').$$
> 
> * **Chuyển hóa sang $\mathbb{R} \times \mathbb{R}^d$ qua Tỷ số Mật độ:**
>   Trên không gian trạng thái, phân phối đồng thời $d\mathbb{P}_{XY}(x, y) = \rho_{XY}(x, y) \, dx dy$ được phân tích thành tích của độ đo lề $d\mathbb{P}_X(x) = \rho_X(x) \, dx$ và độ đo điều kiện trên từng thớ $d\mathbb{P}_{Y \mid X=x}(y) = \rho_{Y \mid X}(y \mid x) \, dy$:
>   $$d\mathbb{P}_{XY}(x, y) = \rho_{XY}(x, y) \, dx dy = \left( \frac{\rho_{XY}(x, y)}{\rho_X(x)} \, dy \right) \left( \rho_X(x) \, dx \right) = d\mathbb{P}_{Y \mid X=x}(y) \cdot d\mathbb{P}_X(x).$$
> 
> **2. Diễn giải Phương trình Kolmogorov qua Toán tử Tích phân Từng phần**
> 
> Nhắc lại phương trình bình quân cục bộ Kolmogorov gốc đối với kỳ vọng điều kiện $\xi = \mathbb{E}[f(X,Y) \mid X]$:
> $$\mathbb{E}[\xi \cdot \mathbb{1}_G] = \mathbb{E}[f(X,Y) \cdot \mathbb{1}_G], \quad \forall G \in \sigma(X).$$
> Nhờ Định lý Doob–Dynkin, tồn tại hàm hồi quy $g(x)$ sao cho $\xi = g(X)$. Bằng cách áp dụng `[lem] Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel` để nâng từ hàm chỉ thị $\mathbb{1}_G = \mathbb{1}_B(X)$ sang hàm thử Borel bị chặn $h(X) \in \mathcal{B}(\mathbb{R})$, phương trình gốc trở thành:
> $$\mathbb{E}[g(X)h(X)] = \mathbb{E}[f(X,Y)h(X)].$$
> 
> Ta khai triển vế phải $\mathbb{E}[f(X,Y)h(X)]$ thông qua độ đo tích Lebesgue $d\mathbb{P}_{XY}(x,y) = \rho_{XY}(x,y) \,dxdy$ và áp dụng Định lý Fubini để tìm dạng tường minh của $g(x)$:
> 
> * **Bước 1 (Khai triển tích phân kép trên không gian trạng thái):**
>   $$\mathbb{E}[f(X,Y)h(X)] = \iint_{\mathbb{R} \times \mathbb{R}^d} f(x,y)h(x)\rho_{XY}(x,y) \,dy dx.$$
> 
> * **Bước 2 (Chèn nhân tử chuẩn hóa mật độ lề $\frac{\rho_X(x)}{\rho_X(x)}$ trên tập hỗ trợ $S = \{\rho_X > 0\}$):**
>   Do vùng $S^c = \{\rho_X = 0\}$ có tích phân bằng $0$, ta nhân và chia cho $\rho_X(x) > 0$ bên trong tích phân lớp trong:
>   $$\mathbb{E}[f(X,Y)h(X)] = \int_S h(x) \left( \int_{\mathbb{R}^d} f(x,y) \frac{\rho_{XY}(x,y)}{\rho_X(x)} \,dy \right) \rho_X(x) \,dx.$$
> 
> * **Bước 3 (Nhận diện Đẩy độ đo lề và Tích phân Từng phần Thớ):**
>   Đặt toán tử tích phân lớp trong là $g(x) \equiv \int_{\mathbb{R}^d} f(x,y) \frac{\rho_{XY}(x,y)}{\rho_X(x)} \,dy = \int_{\mathbb{R}^d} f(x,y) \,d\mathbb{P}_{Y \mid X=x}(y)$. Thay $g(x)$ và $d\mathbb{P}_X(x) = \rho_X(x)dx$ vào biểu thức trên:
>   $$\mathbb{E}[f(X,Y)h(X)] = \int_S g(x)h(x)\rho_X(x) \,dx = \int_{\mathbb{R}} g(x)h(x) \,d\mathbb{P}_X(x) = \mathbb{E}[g(X)h(X)].$$
> 
> Biến đổi trên chứng minh rằng việc định nghĩa $g(x) = \int_{\mathbb{R}^d} f(x,y) \rho_{Y \mid X}(y \mid x) \,dy$ chính là thao tác **tích phân tiêu biến biến $y$ trên từng thớ $\{X = x\}$**, làm cho $g(X)$ nghiệm đúng phương trình Kolmogorov gốc $\mathbb{E}[g(X)h(X)] = \mathbb{E}[f(X,Y)h(X)]$.
> 
> **3. Giới hạn của Công thức Sơ cấp và Sự Xử lý Dạng Vô định $0/0$**
> 
> * **Giới hạn của công thức xác suất sơ cấp:** Khi $X$ là biến ngẫu nhiên liên tục, mọi thớ tạo ảnh $A_x = \{X = x\} = X^{-1}(\{x\})$ đều có số đo xác suất triệt tiêu:
>   $$\mathbb{P}(X = x) = \int_{\{x\}} \rho_X(t) \, dt = 0, \quad \forall x \in \mathbb{R}.$$
>   Do đó, biểu thức sơ cấp $\mathbb{E}[Y \mid X = x] = \frac{\mathbb{E}[Y \mathbb{1}_{\{X=x\}}]}{\mathbb{P}(X=x)}$ xuất hiện dạng vô định $0/0$ và không xác định được giá trị pointwise.
> 
> * **Chuyển hóa từ Xác suất Sự kiện sang Tỷ số Mật độ Pointwise:** Lý thuyết độ đo thay thế phép chia xác suất sự kiện bằng tỷ số mật độ $\frac{\rho_{XY}(x,y)}{\rho_X(x)}$. Việc nhân với hàm chỉ thị $\mathbb{1}_{\{0 < \rho_X(x) < \infty\}}$ trong định nghĩa mật độ điều kiện xử lý hoàn toàn trường hợp chia cho $0$, đảm bảo hàm hồi quy $g(x) = \int_{\mathbb{R}^d} f(x,y) \rho_{Y \mid X}(y \mid x) \, dy$ bị chặn và xác định trên toàn bộ $\mathbb{R}$.
> 
> * **Sự Tiêu biến của Tập Kỳ dị theo Độ đo Lề $\mathbb{P}_X$:** Miền kỳ dị $S^c = \{x \in \mathbb{R} : \rho_X(x) = 0\}$ (nơi xuất hiện mẫu số bằng $0$) có số đo xác suất bằng $0$ đối với độ đo lề $\mathbb{P}_X$:
>   $$\mathbb{P}(X \in S^c) = \mathbb{P}_X(\{\rho_X = 0\}) = \int_{\{\rho_X = 0\}} \rho_X(x) \, dx = 0.$$
>   Theo tính chất của tích phân Lebesgue, tích phân của một hàm bị chặn trên tập có số đo $0$ luôn bằng $0$. Do đó, miền $S^c$ không đóng góp khối lượng vào tích phân kép Kolmogorov $\int_{S^c} g(x)h(x)\rho_X(x)dx = 0$, đảm bảo tính duy nhất hầu chắc chắn ($\mathbb{P}$-a.s.) của kỳ vọng điều kiện.



$\xi$