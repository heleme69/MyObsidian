# Lời giải Bài tập 9.49 (Gaussian Integral & Dirac Sequence)

> [!prob] (9.49)
> Cho tích phân Riemann suy rộng $\int_{-\infty}^{\infty} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, dx = 1$ kéo theo tích phân Lebesgue tương ứng bằng $1$:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, \mu_L(dx) = 1$$
>
> a) Chứng minh rằng với mọi $v > 0$ và $m \in \mathbb{R}$, ta luôn có:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} \mu_L(dx) = 1$$
>
> b) Cho $f: \mathbb{R} \to \mathbb{R}$ là một hàm đo được Lebesgue, bị chặn ($|f(x)| \le M \, \forall x$) và liên tục tại điểm $m \in \mathbb{R}$. Chứng minh:
> $$\lim_{v \downarrow 0} \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} f(x) \, \mu_L(dx) = f(m)$$

> [!prf] 
> **Chứng minh ý a)**
> Ta sử dụng phương pháp đổi biến số tuyến tính đối với tích phân Lebesgue trên $\mathbb{R}$.
> 
> Đặt biến số mới $z$ sao cho thành phần mũ quay về dạng bình phương cơ bản:
> $$z = \frac{x-m}{\sqrt{2v}} \implies x = \sqrt{2v} \cdot z + m$$
> 
> Do đây là một phép biến đổi tuyến tính (gồm phép vị tự $\sqrt{2v}$ và phép tịnh tiến một khoảng $m$), theo tính chất bất biến đối với tịnh tiến và scale với vị tự, vi phân độ đo thay đổi bằng trị tuyệt đối của hệ số scale:
> $$\mu_L(dx) = \sqrt{2v} \, \mu_L(dz)$$
> 
> Thay các biến mới vào tích phân ban đầu, để ý khi $x$ chạy trên $\mathbb{R}$ thì $z$ cũng chạy trên $\mathbb{R}$:
> $$I_a = \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -z^2 \right\} \cdot \sqrt{2v} \, \mu_L(dz)$$
> 
> Rút gọn biểu thức và đối chiếu với giả thiết đề bài cho:
> $$I_a = \int_{\mathbb{R}} \frac{\sqrt{2v}}{\sqrt{2v} \cdot \sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = 1$$
> 
> **Chứng minh ý (b)**
> Ta áp dụng phép đổi biến số tương tự như câu (a), viết lại tích phân của kernel nhân với $f(x)$: 
> $$I(v) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z) \, \mu_L(dz)$$
> 
> Xét dãy hàm số theo tham số $v$ biến độc lập $z$:
> $$h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z)$$
> Khi cho $v \downarrow 0$, do hàm số $f$ liên tục tại điểm $m$, ta có giới hạn điểm với mọi $z \in \mathbb{R}$:
> $$\lim_{v \downarrow 0} f(m + \sqrt{2v} \cdot z) = f(m + 0) = f(m)$$
> Do đó, dãy hàm $h_v(z)$ hội tụ điểm về hàm giới hạn:
> $$\lim_{v \downarrow 0} h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m)$$
> 
> Theo giả thiết, hàm $f$ bị chặn trên $\mathbb{R}$: ${} f(x) < M {}$, ta có đánh giá trị tuyệt đối cho dãy hàm $h_v$:
> $$|h_v(z)| = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} |f(m + \sqrt{2v} \cdot z)| \le \frac{M}{\sqrt{\pi}} \exp \{-z^2\} := \phi(z)$$
> Hàm khống chế $\phi(z) = \frac{M}{\sqrt{\pi}} \exp \{-z^2\}$ là một hàm không âm và khả tích trên $\mathbb{R}$, bởi vì:
> $$\int_{\mathbb{R}} \phi(z) \, \mu_L(dz) = M \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz) = M \cdot 1 = M < \infty$$
> 
> **Bước 4: Đẩy giới hạn qua dấu tích phân**
> Do thỏa mãn đầy đủ các điều kiện của Định lý Hội tụ Bị chặn (DCT), ta được quyền chuyển dấu giới hạn vào bên trong lòng tích phân:
> $$\lim_{v \downarrow 0} I(v) = \int_{\mathbb{R}} \left( \lim_{v \downarrow 0} h_v(z) \right) \mu_L(dz)$$
> $$\lim_{v \downarrow 0} I(v) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m) \, \mu_L(dz)$$
> 
> Vì $f(m)$ lúc này là một hằng số thực không phụ thuộc vào biến tích phân $z$, ta đưa $f(m)$ ra ngoài:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz)$$
> 
> Dựa vào giả thiết gốc, tích phân Gauss cơ bản bằng 1, ta thu được kết quả cuối cùng:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot 1 = f(m)$$
> Câu (b) được chứng minh hoàn tất một cách chặt chẽ.