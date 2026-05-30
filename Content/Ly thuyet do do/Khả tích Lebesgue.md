# 1. Khả tích Lebesgue
> [!rem] Nhắc lại không gian $\mathfrak{L}^1$
> Ký hiệu $\mathfrak{L}^1(D, \mu)$ (hoặc viết gọn là $\mathfrak{L}^1(D)$) đại diện cho tập hợp (không gian) tất cả các hàm số đo được và khả tích Lebesgue trên $D$ đối với độ đo $\mu$.

> [!def] (Khả tích Lebesgue)
> Cho một không gian đo $(X, \mathfrak{A}, \mu)$ và một tập ${} D \in \mathfrak{A} {}$. Giả sử $f: D \to \overline{\mathbb{R}}$ là một hàm đo được nhận giá trị thực mở rộng.
> 
> Gọi $f^+$ và $f^-$ lần lượt là phần dương và phần âm của hàm $f$ ($f = f^+ - f^-$ với $f^+, f^- \ge 0$).
> 
> 1. Tính bán khả tích (Semi-integrable):
>    Nếu biểu thức $\int_D f^+ d\mu - \int_D f^- d\mu$ tồn tại trong tập số thực mở rộng $\overline{\mathbb{R}}$ (tức là không rơi vào dạng vô định $\infty - \infty$), thì ta nói $f$ là **bán khả tích Lebesgue** trên $D$ đối với độ đo $\mu$.
>    Khi đó, tích phân của $f$ trên $D$ được định nghĩa là:
>    $$\int_D f d\mu = \int_D f^+ d\mu - \int_D f^- d\mu$$
> 
> 2. Tính khả tích (Integrable):
>    Ta nói $f$ khả tích Lebesgue trên $D$ đối với độ đo $\mu$, ký hiệu là **$f \in \mathfrak{L}^1(D, \mu)$**, khi và chỉ khi:
>    $$\int_D f d\mu \in \mathbb{R}$$
>    *(Điều này xảy ra khi và chỉ khi cả hai tích phân thành phần đều hữu hạn, tương đương với điều kiện kiện chuẩn tích phân của trị tuyệt đối hữu hạn: $\int_D |f| d\mu < \infty$).*

# 2. Khả tích đều

> [!lem] (Tính liên tục tuyệt đối của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy hàm cắt cụt $\varphi_n(x) = \min\{\varphi(x), n\}$. Ta có $0 \le \varphi_n \le n$ (bị chặn) và $\varphi_n \uparrow \varphi$.
> 
> Theo Định lý Hội tụ Đơn điệu (hoặc Hội tụ Bị chặn), ta có $\lim_{n \to \infty} \int_D \varphi_n = \int_D \varphi$. 
> Do $\varphi \in L^1$ nên $\int_D \varphi < \infty$, suy ra:
> $$\lim_{n \to \infty} \int_D (\varphi - \varphi_n) = 0$$
> 
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại $N_\varepsilon \in \mathbb{N}^*$ sao cho:
> $$\int_D (\varphi - \varphi_{N_\varepsilon}) < \frac{\varepsilon}{2}$$
> 
> Với tập $A \in \mathfrak{A}$ bất kỳ, ta tách tích phân:
> $$\int_A \varphi = \int_A \varphi_{N_\varepsilon} + \int_A (\varphi - \varphi_{N_\varepsilon})$$
> Ta đánh giá từng thành phần:
> 
> $$\int_A \varphi_{N_\varepsilon} \le \int_A N_\varepsilon = N_\varepsilon \cdot \mu(A)$$
> $$\int_A (\varphi - \varphi_{N_\varepsilon}) \le \int_D (\varphi - \varphi_{N_\varepsilon}) < \frac{\varepsilon}{2}$$
> 
> Gộp lại ta được:
> $$\int_A \varphi \le N_\varepsilon \cdot \mu(A) + \frac{\varepsilon}{2}$$.
> 
> Chọn $\delta_\varepsilon = \frac{\varepsilon}{2 N_\varepsilon} > 0$. Khi $\mu(A) < \delta_\varepsilon$, ta có:
> $$\int_A \varphi < N_\varepsilon \cdot \left(\frac{\varepsilon}{2 N_\varepsilon}\right) + \frac{\varepsilon}{2} = \varepsilon$$
> Bổ đề đã được chứng minh.

> [!lem] (Tính "chặt" của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists B_\varepsilon \in \mathfrak{A}, \mu(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy các tập hợp $A_n = \{x \in D : \varphi(x) > \frac{1}{n}\}$ với $n \in \mathbb{N}^*$.
> Rõ ràng $A_n \in \mathfrak{A}$ và $A_n \subseteq A_{n+1}$.
> Ta có đánh giá sau: 
> $$\int_D \varphi \ge \int_{A_n} \varphi \ge \int_{A_n} \frac{1}{n} = \frac{1}{n} \mu(A_n)$$
> Do $\varphi \in L^1$ nên $\int_D \varphi < \infty$. Suy ra $\mu(A_n) \le n \int_D \varphi < \infty$. Vậy các tập $A_n$ đều có độ đo hữu hạn.
> 
> Gọi $A = \{x \in D : \varphi(x) > 0\}$. Dễ thấy $A_n \uparrow A$.
> Xét dãy hàm $f_n = \varphi \cdot \mathbf{1}_{A_n}$. Ta có $f_n \uparrow \varphi \cdot \mathbf{1}_A = \varphi$ (do $\varphi = 0$ trên $A^c$).
> Theo Định lý Hội tụ Đơn điệu:
> $$\lim_{n \to \infty} \int_D f_n = \int_D \varphi \Rightarrow \lim_{n \to \infty} \int_{A_n} \varphi = \int_D \varphi$$
> 
> Vì $\int_D \varphi < \infty$, ta đơn giản hai vế:
> $$\lim_{n \to \infty} \int_{A_n^c} \varphi = \lim_{n \to \infty} \left( \int_D \varphi - \int_{A_n} \varphi \right) = 0$$
> 
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại một số nguyên $N \in \mathbb{N}^*$ sao cho:
> $$\int_{A_N^c} \varphi < \varepsilon$$
> 
> Chọn $B_\varepsilon = A_N$. Khi đó ta có $\mu(B_\varepsilon) < \infty$ và $\int_{B_\varepsilon^c} \varphi < \varepsilon$. 
> Bổ đề đã được chứng minh.

> [!rem] 
> Tính chất 1: Tính khả tích đều (Uniform Integrability / Uniform Absolute Continuity)
> Dãy hàm $\{f_n\} \subset L^1$ được gọi là khả tích đều nếu:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |f_n| < \varepsilon, \quad \forall n$$
> Tính chất 2: Tính chặt (Tightness)
> Dãy hàm $\{f_n\} \subset L^1$ được gọi là một họ chặt nếu:
> $$\forall \varepsilon > 0, \exists B_\varepsilon \in \mathfrak{A} \text{ với } \mu(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |f_n| < \varepsilon, \quad \forall n$$

> [!thm] Nhận xét 1: Liên hệ với Định lý Hội tụ bị chặn (Dominated Convergence)
> Nếu dãy $\{f_n\}$ bị chặn bởi một hàm $g \in L^1$ (tức là $|f_n| \le g$ hầu khắp nơi với mọi $n$), thì dãy $\{f_n\}$ thỏa mãn cả Tính chất 1 (Khả tích đều) và Tính chất 2 (Tính chặt).

> [!prf] Chứng minh Nhận xét 1
> Giả sử tồn tại hàm $g \in L^1(D, \mathfrak{A}, \mu)$ sao cho $|f_n| \le g$ với mọi $n$.
> 
> **1. Chứng minh $\{f_n\}$ thỏa Tính chất 1:**
> Vì $g \in L^1$, áp dụng *Bổ đề về tính liên tục tuyệt đối của tích phân Lebesgue* đối với hàm $g$, ta có:
> Với mọi $\varepsilon > 0$, tồn tại $\delta_\varepsilon > 0$ sao cho với mọi tập $A \in \mathfrak{A}$, nếu $\mu(A) < \delta_\varepsilon$ thì:
> $$\int_A g < \varepsilon$$
> Mặt khác, do $|f_n| \le g$ với mọi $n$, tính chất đơn điệu của tích phân cho ta:
> $$\int_A |f_n| \le \int_A g < \varepsilon, \quad \forall n$$
> Điều này chứng tỏ dãy $\{f_n\}$ khả tích đều.
> 
> **2. Chứng minh $\{f_n\}$ thỏa Tính chất 2:**
> Tương tự, vì $g \in L^1$, áp dụng *Bổ đề về tính "chặt" của tích phân Lebesgue* đối với hàm $g$, ta có:
> Với mọi $\varepsilon > 0$, tồn tại tập đo được $B_\varepsilon \in \mathfrak{A}$ có độ đo hữu hạn $\mu(B_\varepsilon) < \infty$ sao cho:
> $$\int_{B_\varepsilon^c} g < \varepsilon$$
> Tương tự như trên, từ giả thiết $|f_n| \le g$, ta suy ra:
> $$\int_{B_\varepsilon^c} |f_n| \le \int_{B_\varepsilon^c} g < \varepsilon, \quad \forall n$$
> Điều này chứng tỏ dãy $\{f_n\}$ thỏa mãn tính chặt.