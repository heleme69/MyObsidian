# Lời giải Bài tập 9.49 (Gaussian Integral & Dirac Sequence)

> [!prob] (9.49)
> Cho tích phân Riemann suy rộng $\int_{-\infty}^{\infty} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, dx = 1$ kéo theo tích phân Lebesgue tương ứng trên đường thẳng thực cũng bằng 1:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, \mu_L(dx) = 1$$

---

## 1. Chứng minh câu (a)

> [!abstract] Yêu cầu câu (a)
> Chứng minh rằng với mọi $v > 0$ và $m \in \mathbb{R}$, ta luôn có:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} \mu_L(dx) = 1$$

> [!prf] Chứng minh
> Ta sử dụng phương pháp đổi biến số tuyến tính đối với tích phân Lebesgue trên $\mathbb{R}$.
> 
> **Bước 1: Thực hiện phép đổi biến số**
> Đặt biến số mới $z$ sao cho thành phần mũ quay về dạng bình phương cơ bản:
> $$z = \frac{x-m}{\sqrt{2v}} \implies x = \sqrt{2v} \cdot z + m$$
> 
> Do đây là một phép biến đổi tuyến tính (gồm phép co giãn tọa độ theo hệ số $\sqrt{2v}$ và phép tịnh tiến một khoảng $m$), theo tính chất biến đổi của độ đo Lebesgue $\mu_L$, vi phân độ đo thay đổi một lượng đúng bằng giá trị tuyệt đối của hệ số co giãn:
> $$\mu_L(dx) = \sqrt{2v} \, \mu_L(dz)$$
> 
> **Bước 2: Biến đổi biểu thức tích phân**
> Thay các thành phần biến mới vào tích phân ban đầu, chú ý rằng khi $x$ chạy trên toàn bộ $\mathbb{R}$ thì $z$ cũng chạy trên toàn bộ $\mathbb{R}$:
> $$I_a = \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -z^2 \right\} \cdot \sqrt{2v} \, \mu_L(dz)$$
> 
> Tách hằng số và triệt tiêu các đại lượng căn thức ở tử và mẫu:
> $$I_a = \int_{\mathbb{R}} \frac{\sqrt{2v}}{\sqrt{2v} \cdot \sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz)$$
> 
> **Bước 3: Kết luận**
> Theo giả thiết gốc của đề bài, tích phân Gauss cơ bản trên bằng 1. Do đó:
> $$I_a = 1$$
> Câu (a) được chứng minh hoàn tất.

---

## 2. Chứng minh câu (b)

> [!abstract] Yêu cầu câu (b)
> Cho $f: \mathbb{R} \to \mathbb{R}$ là một hàm đo được Lebesgue, bị chặn ($|f(x)| \le M \, \forall x$) và liên tục tại điểm $m \in \mathbb{R}$. Chứng minh:
> $$\lim_{v \downarrow 0} \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} f(x) \, \mu_L(dx) = f(m)$$

> [!prf] Chứng minh (Sử dụng Định lý Hội tụ Bị chặn - DCT)
> 
> Để thuận tiện cho việc lấy giới hạn khi $v \downarrow 0$, ta áp dụng phép đổi biến số tương tự như câu (a).
> 
> **Bước 1: Đổi biến để cô lập tham số $v$**
> Đặt $z = \frac{x-m}{\sqrt{2v}} \implies x = m + \sqrt{2v} \cdot z$ và $\mu_L(dx) = \sqrt{2v} \, \mu_L(dz)$. 
> Tích phân bên trong giới hạn được viết lại thành:
> $$I(v) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z) \, \mu_L(dz)$$
> 
> **Bước 2: Tìm giới hạn điểm (Pointwise limit) của dãy hàm**
> Xét dãy hàm số theo tham số $v$ biến độc lập $z$:
> $$h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z)$$
> Khi cho $v \downarrow 0$, do hàm số $f$ liên tục tại điểm $m$, ta có giới hạn điểm với mọi $z \in \mathbb{R}$:
> $$\lim_{v \downarrow 0} f(m + \sqrt{2v} \cdot z) = f(m + 0) = f(m)$$
> Do đó, dãy hàm $h_v(z)$ hội tụ điểm về hàm giới hạn:
> $$\lim_{v \downarrow 0} h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m)$$
> 
> **Bước 3: Thiết lập hàm khống chế để áp dụng DCT**
> Vì hàm $f$ bị chặn trên toàn bộ $\mathbb{R}$ bởi hằng số $M$, ta có đánh giá trị tuyệt đối cho dãy hàm $h_v$:
> $$|h_v(z)| = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} |f(m + \sqrt{2v} \cdot z)| \le \frac{M}{\sqrt{\pi}} \exp \{-z^2\} := \phi(z)$$
> Hàm khống chế $\phi(z) = \frac{M}{\sqrt{\pi}} \exp \{-z^2\}$ là một hàm không âm và khả tích trên $\mathbb{R}$, bởi vì:
> $$\int_{\mathbb{R}} \phi(z) \, \mu_L(dz) = M \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz) = M \cdot 1 = M < \infty$$
> 
> **Bước 4: Đẩy giới hạn qua dấu tích phân**
> Do thỏa mãn đầy đủ các điều kiện của **Định lý Hội tụ Bị chặn (DCT)**, ta được quyền chuyển dấu giới hạn vào bên trong lòng tích phân:
> $$\lim_{v \downarrow 0} I(v) = \int_{\mathbb{R}} \left( \lim_{v \downarrow 0} h_v(z) \right) \mu_L(dz)$$
> $$\lim_{v \downarrow 0} I(v) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m) \, \mu_L(dz)$$
> 
> Vì $f(m)$ lúc này là một hằng số thực không phụ thuộc vào biến tích phân $z$, ta đưa $f(m)$ ra ngoài:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz)$$
> 
> Dựa vào giả thiết gốc, tích phân Gauss cơ bản bằng 1, ta thu được kết quả cuối cùng:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot 1 = f(m)$$
> Câu (b) được chứng minh hoàn tất một cách chặt chẽ.