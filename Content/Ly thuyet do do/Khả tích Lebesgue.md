# 1. Khả tích Lebesgue
> [!rem] Nhắc lại không gian $\mathcal{L}^1$
> Ký hiệu $\mathcal{L}^1(D, \mu)$ (hoặc viết gọn là $\mathcal{L}^1(D)$) đại diện cho tập hợp (không gian) tất cả các hàm số đo được và khả tích Lebesgue trên $D$ đối với độ đo $\mu$.

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
>    Ta nói $f$ khả tích Lebesgue trên $D$ đối với độ đo $\mu$, ký hiệu là **$f \in \mathcal{L}^1(D, \mu)$**, khi và chỉ khi:
>    $$\int_D f d\mu \in \mathbb{R}$$
>    *(Điều này xảy ra khi và chỉ khi cả hai tích phân thành phần đều hữu hạn, tương đương với điều kiện kiện chuẩn tích phân của trị tuyệt đối hữu hạn: $\int_D |f| d\mu < \infty$).*

# 2. Khả tích đều

> [!lem] (Tính liên tục tuyệt đối của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathcal{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathcal{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |\varphi| < \varepsilon$$

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
> Với tập $A \in \mathcal{A}$ bất kỳ, ta tách tích phân:
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
> Cho $\varphi \in L^1(D, \mathcal{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists B_\varepsilon \in \mathcal{A}, \mu(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy các tập hợp $A_n = \{x \in D : \varphi(x) > \frac{1}{n}\}$ với $n \in \mathbb{N}^*$.
> Rõ ràng $A_n \in \mathcal{A}$ và $A_n \subseteq A_{n+1}$.
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