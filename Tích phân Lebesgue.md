> [!rem] Nhắc lại không gian $\mathcal{L}^1$
> Ký hiệu $\mathcal{L}^1(D, \mu)$ (hoặc viết gọn là $\mathcal{L}^1(D)$) đại diện cho tập hợp (không gian) tất cả các hàm số đo được và khả tích Lebesgue trên $D$ đối với độ đo $\mu$.

> [!def] (Khả tích Lebesgue)
> Cho một không gian đo $(X, \mathcal{A}, \mu)$ và một tập $D \in \mathcal{A}$. Giả sử $f: D \to \overline{\mathbb{R}}$ là một hàm đo được nhận giá trị thực mở rộng.
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