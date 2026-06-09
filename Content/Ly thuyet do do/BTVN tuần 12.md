
> [!lem] (Tính liên tục tuyệt đối của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy hàm chặt cụt $\varphi_n(x) = \min\{\varphi(x), n\}$. Ta có $0 \le \varphi_n \le n$ (bị chặn) và $\varphi_n \uparrow \varphi$.
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

> [!prob] (Prob 9.15)
> Cho $f$ là hàm đo được và khả tích Lebesgue trên $[0, \infty)$ ($\int_0^\infty |f| d\mu_L < \infty$). 
> Nếu $f$ liên tục đều trên $[0, \infty)$ thì:
> $$\lim_{x \to \infty} f(x) = 0$$

> [!prf] Chứng minh
> Giả sử phản chứng rằng $\lim_{x \to \infty} f(x) \neq 0$. 
> Điều này có nghĩa là tìm được $\varepsilon_0 > 0$ và một dãy các điểm $x_n \to \infty$ (ta có thể chọn sao cho $x_{n+1} - x_n > 1$) thỏa mãn:
> $$|f(x_n)| \ge \varepsilon_0, \quad \forall n \in \mathbb{N}^*$$
> 
> Vì $f$ liên tục đều trên $[0, \infty)$, ứng với $\frac{\varepsilon_0}{2} > 0$, tồn tại một số $\delta > 0$ (ta có thể chọn $\delta < \frac{1}{2}$) sao cho:
> $$\forall x, y \in [0, \infty), |x - y| < \delta \Rightarrow |f(x) - f(y)| < \frac{\varepsilon_0}{2}$$
> 
> Xét các lân cận $I_n = [x_n - \delta, x_n + \delta]$ của từng điểm $x_n$. Với mọi $t \in I_n$, ta có $|t - x_n| \le \delta$, áp dụng bất đẳng thức trên:
> $$|f(t) - f(x_n)| < \frac{\varepsilon_0}{2} \implies |f(t)| \ge |f(x_n)| - |f(t) - f(x_n)| > \varepsilon_0 - \frac{\varepsilon_0}{2} = \frac{\varepsilon_0}{2}$$
> 
> Vì các khoảng $I_n$ rời nhau (do cách chọn $x_{n+1} - x_n > 1$ và $\delta < \frac{1}{2}$), ta tính tích phân của $|f|$ trên hợp của tất cả các khoảng này:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \int_{I_n} |f| d\mu_L$$
> Trên mỗi khoảng $I_n$, do $|f(t)| > \frac{\varepsilon_0}{2}$ và chiều dài khoảng $\mu_L(I_n) = 2\delta$, ta có:
> $$\int_{I_n} |f| d\mu_L \ge \frac{\varepsilon_0}{2} \cdot 2\delta = \varepsilon_0 \delta$$
> 
> Thế ngược lại vào tổng chuỗi:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \varepsilon_0 \delta = \infty$$
> Điều này mâu thuẫn trực tiếp với giả thiết $f$ khả tích Lebesgue ($\int_0^\infty |f| d\mu_L < \infty$).
> 
> Vậy giả thiết phản chứng là sai. Ta có $\lim_{x \to \infty} f(x) = 0$.

> [!prob] (Prob 9.20)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ Cho $f_{n}$ và $f$ là dãy hàm và hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử ta có $g$ là hàm khả tích không âm nhận giá trị thực mở rộng và đo được trên $D \in \mathfrak{A}$. Giả sử:
> 1. $|f_{n}| \le g$ trên $D$ với mọi $n \in \mathbb{N}$.
> 2. $g^{p}$ khả tích đối với $\mu$ trên $D$ với $p \in (0, \infty)$.
>
> Khi đó ta có:
> (a) $|f^{p}|$ khả tích đối với $\mu$ trên $D$,
> (b) $\lim_{ n \to \infty } \int_{D} |f_{n}|^{p}d\mu = \int_{D} |f|^{p} d\mu$
> (c) $\lim_{ n \to \infty } \int |f_{n} - f|^{p} d\mu = 0$.

> [!prf]
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được ${} \lim_{ n \to \infty } |f_{n}|^{p} = |f|^{p} {}$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối và hàm nâng lũy thừa trên $[0, \infty)$ là liên tục nên ta được phép đưa qua giới hạn. Từ ${} |f_{n}| \le g {}$, ta cũng suy ra được $|f_{n}|^{p} \le g^{p}$.
>
> Ta nhận thấy Định lý hội tụ bị chặn được thỏa cho dãy hàm $|f_{n}|^{p}$, vì:
> 1. $|f_{n}|^{p} \to |f|^{p}$ a.e
> 2. $|f_{n}|^{p} \le g^{p}$ a.e (với mọi $n \in \mathbb{N}$)
> 
> Vậy ta kết luận hàm giới hạn $|f|^{p}$ khả tích và $\lim_{ n \to \infty } \int_{D} |f_{n}|^{p}d\mu = \int_{D} |f|^{p} d\mu$, hoàn tất chứng minh ý (a) và ý (b).
> 
> Trước khi chứng minh ý (c), ta cần cần chú ý giả thiết $f_{n}$ và $f$ nhận giá trị thực mở rộng, nên ta có thể rơi vào dạng vô định $\infty - \infty$ khi xét $f_{n} - f$. Ta giải quyết bằng tính chất: Nếu một hàm khả tích $\int_D f d\mu < \infty$, thì $f < \infty$ hầu khắp nơi (a.e.) trên $D$. 
> 
> Áp dụng cho $|f^{p}|$ là hàm khả tích, Gọi $D_0$ là tập hợp tất cả các điểm $x \in D$ mà tại đó $f(x) = \infty$ hoặc tồn tại một chỉ số $n$ để $f_n(x) = \infty$. Tập $D_0$ này chính là hợp đếm được của các tập có độ đo $0$, do đó $\mu(D_0) = 0$ ($D_0$ là tập null).
> 
> Xét trên $D \setminus D_{0}$, ta có: 
> $$
> \lim_{ n \to \infty } |f_{n} - f|^{p} = |\lim_{ n \to \infty }f_{n} - f|^{p} = |f - f| = 0 \text{ a.e trên } D
> $$ 
> Ta cũng có $|f_{n} - f| ^{p} \le (|f_{n}| + |f|) ^{p} \le (g + g) ^{p} = 2^{p}g^{p}$. Vậy DCT thỏa cho dãy $|f_{n} - f|^{p}$ với dãy hàm bị chặn $2^{p}g^{p}$ là một hàm khả tích.
> 
> Áp dụng DCT, cho ta $\lim_{ n \to \infty } \int_{D} |f_{n} - f| ^{p} d\mu = \int_{D} \lim_{ n \to \infty } |f_{n} - f|^{p} d\mu = \int_{D} 0 d\mu = 0$.
> Vậy ý (c) được chứng minh hoàn tất.

> [!thm] (Prob 9.22: Mở rộng của Định lý Hội tụ Bị chặn (Generalized DCT))
> Giả sử ta thay thế điều kiện bị chặn tuyệt đối bởi một hàm hằng số $g$ bằng một dãy các hàm khả tích biến $g_n$. Phát biểu tổng quát như sau:
> 
> Cho dãy hàm đo được $(f_n)_{n=1}^\infty$ và hàm $f$ đo được trên $D$. Cho dãy hàm không âm, khả tích $(g_n)_{n=1}^\infty$ và hàm không âm, khả tích $g$ trên $D$ thỏa mãn:
> 1. $f_n \to f$ và $g_n \to g$ hầu khắp nơi (a.e.) trên $D$.
> 2. $\lim_{n \to \infty} \int_D g_n \, d\mu = \int_D g \, d\mu < \infty$.
> 3. $|f_n| \le g_n$ trên $D$ với mọi $n \ge 1$.
> 
> Khi đó, hàm giới hạn $f$ cũng khả tích trên $D$ và ta có quyền đưa giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$

> [!prf]
> Vì $|f_n| \le g_n$, lấy giới hạn hai vế ta có $|f| \le g$ hầu khắp nơi trên $D$. Do $g$ khả tích, ta suy ra ngay $f$ cũng khả tích. 
> Từ điều kiện 3, ta có bất đẳng thức kẹp: $-g_n \le f_n \le g_n$. Ta thiết lập hai dãy hàm không âm và áp dụng Bổ đề Fatou:
> 
> **Bước 1: Xét dãy hàm không âm $(g_n + f_n \ge 0)$**
> Áp dụng Bổ đề Fatou cho dãy này trên miền $D$:
> $$\int_D \liminf_{n \to \infty} (g_n + f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n + f_n) \, d\mu$$
> 
> Nhờ tính chất hội tụ điểm hầu khắp nơi, vế trái hội tụ về $\int_D (g + f) \, d\mu$. Vế phải tách thành tổng các $\liminf$:
> $$\int_D g \, d\mu + \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Sử dụng giả thiết $\lim \int_D g_n d\mu = \int_D g d\mu < \infty$, ta triệt tiêu đại lượng hữu hạn này ở hai vế, thu được rào chặn dưới:
> $$\int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu \tag{1}$$
> 
> **Bước 2: Xét dãy hàm không âm $(g_n - f_n \ge 0)$**
> Tiếp tục áp dụng Bổ đề Fatou cho dãy hiệu:
> $$\int_D \liminf_{n \to \infty} (g_n - f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n - f_n) \, d\mu$$
> $$\implies \int_D g \, d\mu - \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D (-f_n) \, d\mu$$
> 
> Chú ý rằng $\liminf (-a_n) = - \limsup a_n$. Thay vào và tiếp tục giản ước $\int_D g \, d\mu < \infty$ ở hai vế:
> $$-\int_D f \, d\mu \le - \limsup_{n \to \infty} \int_D f_n \, d\mu \implies \int_D f \, d\mu \ge \limsup_{n \to \infty} \int_D f_n \, d\mu \tag{2}$$
> 
> **Bước 3: Nguyên lý kẹp**
> Kết hợp hai đánh giá $(1)$ và $(2)$, ta có chuỗi bao hàm:
> $$\limsup_{n \to \infty} \int_D f_n \, d\mu \le \int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Vì bất đẳng thức $\liminf \le \limsup$ luôn đúng, toàn bộ chuỗi trên ép buộc các dấu bằng phải xảy ra. Do đó, giới hạn tồn tại và thỏa mãn đẳng thức:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> Định lý mở rộng được chứng minh hoàn tất. 

> [!prob] (Prob 9.23)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$. Cho $f_{n}$ là dãy hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử:
> 1. $\lim_{ n \to \infty }f_{n} = f$ a.e trên $D$,
> 2. $f_{n}$ và $f$ khả tích đối với $\mu$ trên $D$.
> 
> Khi đó ta có:
> (a) Nếu ta có $\lim_{ n \to \infty } \int_{D}|f_{n}| d\mu = \int_{D} |f|d\mu$ thì $\lim_{ n \to \infty } \int_{D}f_{n} d\mu = \int_{D} fd\mu$
> (b) Chứng tỏ (a) sai bằng cách cho phản ví dụ

> [!prf]
> Chứng minh ý (a):
> Đặt $g_{n} = |f_{n}|$ và $g = |f|$. Ta sẽ chứng minh $f_{n}$ và $g$ thỏa 3 điều kiện của định lý DCT mở rộng từ Prob 9.22 để áp dụng chứng minh ý (a). 
> 
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được $\lim_{ n \to \infty } |f_{n}| = |f|$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối là liên tục nên ta được phép đưa qua giới hạn. 
> 
> Ta cũng có $\lim_{ n \to \infty }g_{n} = g$ a.e trên D, $g$ là khả tích đối với $\mu$ và $\lim_{ n \to \infty }\int_{D}g_{n} d\mu = \int_{D} g d\mu$. Vậy ta có $g_{n}$ thỏa điều kiện 2 của DCT mở rộng.
> 
> Gọi $f^+_{n}$ và $f^-_{n}$ lần lượt là phần dương và phần âm của dãy hàm $f_{n}$ ($f_{n} = f^+_{n} - f^-_{n}$ với $f^+_{n}, f^-_{n} \ge 0$). Ta có $\lim_{ n \to \infty } f^+_{n} = f^+$ và $\lim_{ n \to \infty } f^-_{n} = f^-$ và ta cũng có $f^+ \le |f_{n}| = g_{n}$ và $f^- \le |f_{n}| = g_{n}$. Vậy ta có điều kiện 1 và 3 của DCT mở rộng thỏa. Áp dụng DCT mở rộng:
> $$
> \lim_{ n \to \infty } \int_{D} f^+_{n} d\mu = \int_{D} f^+ d\mu \text{ và } \lim_{ n \to \infty } \int_{D} f^-_{n} d\mu = \int_{D} f^- d\mu 
> $$
> Theo khả tích Lebesgue:
> $$
> \begin{align}
> \lim_{n \to \infty} \int_D f_n \, d\mu 
> &=  \lim_{n \to \infty} \int_D f_n^+ \, d\mu - \int_D f_n^- \, d\mu \\
> &=  \lim_{n \to \infty} \int_D f_n^+ \, d\mu - \lim_{n \to \infty} \int_D f_n^- \, d\mu \\
> &=  \int_D f^+ \, d\mu - \int_D f^- \, d\mu \\
> &=  \int_D f \, d\mu.
> \end{align}
> $$
> Vậy ta hoàn tất chứng minh ý (a).
> 
> Phản ví dụ cho ý (a):
> Xét không gian độ đo $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$.  
> Cho $f = 0$ trên $\mathbb{R}$ và ${} f_{n} {}$ là một dãy các hàm thực $\mathcal{M}_L$-đo được trên $\mathbb{R}$, được định nghĩa bởi:
> $$
> f_n(x) =
> \begin{cases}
> \frac{1}{n}, & \text{khi } x \in [0, n), \\
> -\frac{1}{n}, & \text{khi } x \in (-n, 0), \\
> 0, & \text{khi } x \in (-n, n)^c.
> \end{cases}
> $$
> Ta có $\lim_{n \to \infty} f_n(x) = 0 = f(x)$ với mọi $x \in \mathbb{R}$.  
> Hơn nữa, $\int_{\mathbb{R}} f_n \, d\mu_L = 0 = \int_{\mathbb{R}} f \, d\mu_L$ với mọi $n \in \mathbb{N}$, do đó  
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \int_{\mathbb{R}} f \, d\mu_L.$$
>  
> Mặt khác, ta có $\int_{\mathbb{R}} |f_n| \, d\mu_L = 2$ với mọi $n \in \mathbb{N}$, nên  
> $$\lim_{n \to \infty} \int_{\mathbb{R}} |f_n| \, d\mu_L = 2 \neq 0 = \int_{\mathbb{R}} f_n \, d\mu_L.$$
> Vậy ta hoàn tất ý (b)

> [!prob] (BT 1)
> a) Cho dãy hàm ${} f_{n}(x) = \frac{n \sqrt{ x }}{1 + n^{2}x^{2}}$, với $x \in[0,1] {}$. Tính $\lim_{ n \to \infty } f_{n}(x)dx$.
> 
> b) Cho dãy hàm ${} g_{n}(x) = \frac{n}{x^{3/2}} \ln\left( 1 + \frac{x}{n} \right)$, với $x \in [0,1] {}$. Tính $\int_{0}^{1}g_{n}(x) dx$ khi $n \to \infty$.
>
> c) Cho dãy hàm $h_n(x) = \frac{1}{x^{3/2}} \sin\left(\frac{x}{n}\right)$ trên $x > 0$. Tính $\lim_{n\to\infty} \int_0^\infty h_n(x) dx$.

> [!ans]
> Ý a)
> **Tìm giới hạn điểm:**
> Với $x = 0$: $f_{n}(0) = 0 \implies \lim_{ n \to \infty }f_{n}(0) = 0$.
> Với $x \in (0,1]$: Khi $n \to \infty$, bậc của mẫu số ($n^2$) lớn hơn bậc của tử số ($n$), do đó: $\lim_{ n \to \infty } \frac{n \sqrt{ x }}{1 + n^{2}x^{2}} = 0$.
> Vậy $f_{n} \to f = 0$ hầu khắp nơi.

$\xi$