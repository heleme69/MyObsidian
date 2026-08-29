> [!thm] (Định lý Đặc trưng tương đương của de la Vallée-Poussin)
> Cho $(D, \mathfrak{A}, \mu)$ là một không gian độ đo và họ hàm $\Lambda \subset L^1(D, \mu)$.
> 1. Nếu $\Lambda$ khả tích đều (UI), thì $\Lambda$ bị chặn đều trong chuẩn $L^1$ ($\sup_{f \in \Lambda} \|f\|_{L^1} < \infty$) và thỏa mãn tính **Liên tục tuyệt đối đều (UAC)**:
>    $$\forall \varepsilon > 0, \exists \delta > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon.$$
> 2. Ngược lại, nếu không gian có **độ đo hữu hạn** ($\mu(D) < \infty$), thì:
>    $$\Lambda \text{ là họ Khả tích đều (UI)} \iff \Lambda \text{ Liên tục tuyệt đối đều (UAC)} \text{ và bị chặn trong } L^1.$$

> [!prf]
> 1. **Chứng minh UI $\implies$ Bị chặn trong $L^1$:**
>    Vì $\Lambda$ là UI, chọn $M_0 < \infty$ sao cho $\sup_{f \in \Lambda} \int_{\{|f| \ge M_0\}} |f| \, d\mu \le 1$.
>    Với mọi $f \in \Lambda$, ta phân rã tích phân:
>    $$\int_D |f| \, d\mu = \int_{\{|f| < M_0\}} |f| \, d\mu + \int_{\{|f| \ge M_0\}} |f| \, d\mu \le M_0 \cdot \mu(D) + 1 < \infty.$$
>    Suy ra $\sup_{f \in \Lambda} \|f\|_{L^1} \le M_0 \mu(D) + 1 < \infty$.
>
> 2. **Chứng minh UI $\implies$ UAC:**
>    Cố định $\varepsilon > 0$. Do $\Lambda$ là UI, chọn $M > 0$ đủ lớn sao cho $\sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu < \frac{\varepsilon}{2}$.
>    Chọn $\delta = \frac{\varepsilon}{2M} > 0$. Với mọi tập $A \in \mathfrak{A}$ có $\mu(A) < \delta$, ta tách tích phân của bất kỳ $f \in \Lambda$:
>    $$\int_A |f| \, d\mu = \int_{A \cap \{|f| < M\}} |f| \, d\mu + \int_{A \cap \{|f| \ge M\}} |f| \, d\mu \le M \cdot \mu(A) + \int_{\{|f| \ge M\}} |f| \, d\mu < M \cdot \frac{\varepsilon}{2M} + \frac{\varepsilon}{2} = \varepsilon.$$
>    Lấy supremum theo $f \in \Lambda$, ta thu được $\sup_{f \in \Lambda} \int_A |f| \, d\mu \le \varepsilon$.
>
> 3. **Chứng minh UAC + Bị chặn $L^1$ $\implies$ UI (khi $\mu(D) < \infty$):**
>    Cho $\varepsilon > 0$. Theo tính UAC, tồn tại $\delta > 0$ sao cho $\mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon$.
>    Đặt $K = \sup_{f \in \Lambda} \int_D |f| \, d\mu < \infty$. Theo bất đẳng thức Chebyshev/Markov:
>    $$\mu(\{|f| \ge M\}) \le \frac{1}{M} \int_D |f| \, d\mu \le \frac{K}{M}.$$
>    Chọn $M_0$ đủ lớn sao cho $\frac{K}{M_0} < \delta$. Khi đó với mọi $M \ge M_0$ và mọi $f \in \Lambda$, ta có $\mu(\{|f| \ge M\}) < \delta$.
>    Áp dụng điều kiện UAC cho tập $A = \{|f| \ge M\}$, ta suy ra $\int_{\{|f| \ge M\}} |f| \, d\mu < \varepsilon$ với mọi $f \in \Lambda$.
>    Suy ra $\lim_{M \to \infty} \sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu = 0$, tức $\Lambda$ khả tích đều.

> [!rem] (Nhận xét: UAC tự động kéo theo tính Bị chặn đều trong $L^1$ trên không gian hữu hạn)
> Cho $(D, \mathfrak{A}, \mu)$ là không gian độ đo thỏa mãn $\mu(D) < \infty$ và $\Lambda \subset L^1(D, \mu)$.
> Nếu họ hàm $\Lambda$ thỏa mãn tính chất **Liên tục tuyệt đối đều (UAC)**, thì $\Lambda$ tự động **bị chặn đều trong chuẩn $L^1$**:
> $$\sup_{f \in \Lambda} \int_D |f| \, d\mu < \infty.$$
> Do đó, trên không gian có độ đo hữu hạn, họ hàm $\Lambda$ khả tích đều (UI) khi và chỉ khi $\Lambda$ liên tục tuyệt đối đều (UAC).

> [!prf]
> 4. **Bước 1: Chọn lân cận độ đo $\delta$ ứng với $\varepsilon = 1$**
>    Vì $\Lambda$ thỏa mãn tính UAC, ứng với $\varepsilon = 1 > 0$, tồn tại một hằng số $\delta > 0$ sao cho với mọi tập đo được $A \in \mathfrak{A}$:
>    $$\mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < 1.$$
>
> 5. **Bước 2: Phân hoạch không gian hữu hạn $D$**
>    Vì không gian toàn phần có độ đo hữu hạn $\mu(D) < \infty$, ta luôn có thể phân chia miền $D$ thành một số hữu hạn $k$ tập đo được đôi một rời nhau $D_1, D_2, \dots, D_k \in \mathfrak{A}$ sao cho:
>    $$D = \bigcup_{i=1}^k D_i \quad \text{và} \quad \mu(D_i) < \delta, \quad \forall i = 1, 2, \dots, k.$$
>    *(Số lượng mảnh phân hoạch bị chặn trên bởi $k \le \lceil \frac{\mu(D)}{\delta} \rceil + 1 < \infty$).*
>
> 6. **Bước 3: Đánh giá chuẩn $L^1$ toàn cục**
>    Với mọi hàm $f \in \Lambda$ bất kỳ, áp dụng tính cộng tích phân trên các mảnh phân hoạch:
>    $$\int_D |f| \, d\mu = \sum_{i=1}^k \int_{D_i} |f| \, d\mu.$$
>    Vì mỗi mảnh $D_i$ đều thỏa mãn $\mu(D_i) < \delta$, theo Bước 1 ta luôn có $\int_{D_i} |f| \, d\mu < 1$ với mọi $i = 1, \dots, k$. Suy ra:
>    $$\int_D |f| \, d\mu < \sum_{i=1}^k 1 = k < \infty.$$
>    Lấy supremum toàn bộ họ $\Lambda$ ở hai vế:
>    $$\sup_{f \in \Lambda} \|f\|_{L^1} = \sup_{f \in \Lambda} \int_D |f| \, d\mu \le k < \infty.$$
>    Vậy họ hàm $\Lambda$ bị chặn đều trong $L^1$.

