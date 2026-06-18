# Lời giải Bài tập 9.49 (Gaussian Integral & Dirac Sequence)

> [!info] Ý nghĩa tổng quát của Bài 9.30
> Bài toán này là một minh chứng thực tế chỉ ra rằng: Sự hội tụ và triệt tiêu của diện tích (vế tích phân) không đồng nghĩa với việc chuỗi hàm số hành xử êm đẹp. Nếu vi phạm điều kiện trội khả tích ($L^1$), năng lượng của đồ thị hàm số sẽ bị "thoát ra vô cực" (escape to infinity) khi lấy tổng vô hạn, khiến phép toán hoán đổi $\sum$ và $\int$ bị đổ vỡ hoàn toàn.

> [!ans] Phân tích chi tiết bản chất qua từng câu hỏi (a) đến (e)
> 
> **1. Câu (a), (b), (c): Sự tích lũy năng lượng âm thầm**
> * **Ở câu (a):** Tích phân của từng hàm thành phần luôn bằng 0:
>   $$\int_0^\infty (ae^{-nax} - be^{-nbx}) dx = \left[ -\frac{1}{n}e^{-nax} + \frac{1}{n}e^{-nbx} \right]_0^\infty = 0$$
>   Do đó, tổng của các tích phân hiển nhiên bằng 0: $\sum_{n \in \mathbb{N}} \int f_n d\mu_L = 0$. Điều này tạo ra một "ảo tưởng" rằng bài toán rất hội tụ.
> * **Ở câu (b) và (c):** Khi ta xét trị tuyệt đối $|f_n|$, ta không cho phép hai phần diện tích dương và âm triệt tiêu nhau nữa. Kết quả tính toán câu (c) sẽ chỉ ra rằng:
>   $$\sum_{n \in \mathbb{N}} \int_{(0, \infty)} |f_n| d\mu_L = \infty$$
>   Điều này khẳng định giả thiết $1^\circ$ của Bài 9.29 bị vi phạm. Chuỗi hàm này không có một hàm trội khả tích toàn cục (đây là dấu hiệu nguy hiểm!).
> 
> **2. Câu (d), (e): Sự sụp đổ ở hàm mục tiêu**
> * **Ở câu (d):** Khi ta tính tổng trực tiếp chuỗi hàm trước:
>   $$\sum_{n=1}^\infty f_n(x) = \sum_{n=1}^\infty (ae^{-ax})^n - \sum_{n=1}^\infty (e^{-bx})^n$$
>   Đây là các chuỗi cấp số nhân lùi vô hạn, tổng của chúng sẽ ra một hàm phân thức đại số cụ thể khi $x > 0$.
> * **Ở câu (e):** Khi tính tích phân của hàm tổng vừa tìm được ở câu (d) trên miền $[0, \infty)$, ta sẽ thấy tích phân này **không tồn tại** (bị phân kỳ về vô cùng tại lân cận điểm $0^+$ do bậc ở mẫu quá lớn).
> 
> **3. Bức tranh toàn cảnh về sự mâu thuẫn**
> Nếu ta nhắm mắt hoán đổi dấu một cách vô điều kiện, ta sẽ gặp một nghịch lý logic:
> * Nếu lấy tích phân trước rồi lấy tổng sau (Vế trái): Kết quả bằng **$0$** (theo câu a).
> * Nếu lấy tổng chuỗi trước rồi lấy tích phân sau (Vế phải): Kết quả bằng **$\infty$ (không tồn tại)** (theo câu e).
> 
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n d\mu_L = 0 \quad \neq \quad \int_{[0, \infty)} \left\{ \sum_{n \in \mathbb{N}} f_n \right\} d\mu_L = \text{Không tồn tại}$$

> [!ans] Trình bày tối ưu câu (a) sử dụng Định lý Hội tụ Trội (DCT) cho chuỗi
> 
> Để xét tính hợp pháp của việc hoán đổi dấu tổng và dấu tích phân:
> $$\sum_{n=1}^\infty \int_{[0, \infty)} f_n \, d\mu_L \stackrel{?}{=} \int_{[0, \infty)} \left( \sum_{n=1}^\infty f_n \right) d\mu_L$$
> 
> Ta áp dụng Định lý Hội tụ Trội (DCT) dành cho chuỗi hàm số (đã được phát biểu ở Prob. 9.29). Theo định lý này, phép hoán đổi trên hoàn toàn hợp pháp nếu chuỗi các tích phân trị tuyệt đối hội tụ:
> $$\sum_{n=1}^\infty \int_{[0, \infty)} |f_n| \, d\mu_L < \infty$$
> 
> Tuy nhiên, dựa trên kết quả biến đổi thu được từ **câu (b)** và **câu (c)**, ta có:
> $$\sum_{n=1}^\infty \int_{[0, \infty)} |f_n| \, d\mu_L = 2C(a,b) \sum_{n=1}^\infty \frac{1}{n} = \infty$$
> 
> Do điều kiện trội bị vi phạm nghiêm trọng (chuỗi tích phân trị tuyệt đối phân kỳ về vô cùng), Định lý Hội tụ Trội **không thể áp dụng** cho chuỗi hàm này trên miền $[0, \infty)$. 
> 
> Vì không có sự bảo đảm của DCT, hai vế của phép toán hoán đổi không bắt buộc phải bằng nhau. Ta tiến hành tính toán độc lập từng vế để chỉ ra sự bất đối xứng:
> 
> * **Vế lấy tích phân trước, lấy tổng sau (Vế trái):**
>   $$\text{Vế Trái} = \sum_{n=1}^\infty \int_0^\infty (ae^{-nax} - be^{-nbx}) \, dx = \sum_{n=1}^\infty 0 = 0$$
> 
> * **Vế lấy tổng trước, lấy tích phân sau (Vế phải):**
>   Dựa vào kết quả hàm tổng $f(x)$ ở câu (d) và phép tính tích phân đổi biến ở câu (e):
>   $$\text{Vế Phải} = \int_0^\infty \left( \frac{a}{e^{ax}-1} - \frac{b}{e^{bx}-1} \right) dx = \ln\left(\frac{b}{a}\right)$$
> 
> Vì $b > a > 0 \implies \ln(b/a) > 0 = \text{Vế Trái}$. 
> 
> **Kết luận từ DCT:** Sự sụp đổ của đẳng thức toán học ($\sum \int \neq \int \sum$) là hệ quả tất yếu từ việc vi phạm điều kiện hội tụ tuyệt đối của DCT.

> [!ans] Lời giải bài bản cho câu (a) - Bài 9.30
> 
> ### Bước 1: Tính toán trực tiếp tích phân từng số hạng (Vế Trái)
> Do hàm số $f_n(x) = ae^{-nax} - be^{-nbx}$ liên tục trên khoảng $(0, \infty)$ và hội tụ tuyệt đối về 0 ở vô cực, tích phân Lebesgue của nó trùng với tích phân Riemann suy rộng. Với mỗi $n \in \mathbb{N}$ cố định, ta tìm nguyên hàm và thế cận:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_0^\infty (ae^{-nax} - be^{-nbx}) \, dx$$
> $$\quad = \left[ -\frac{a}{na}e^{-nax} + \frac{b}{nb}e^{-nbx} \right]_0^\infty = \frac{1}{n} \left[ -e^{-nax} + e^{-nbx} \right]_0^\infty$$
> $$\quad = \frac{1}{n} \left[ (0 + 0) - (-1 + 1) \right] = 0$$
> 
> Vì tích phân của mọi số hạng đơn lẻ đều bằng 0, tổng của chuỗi số này hiển nhiên bằng 0:
> $$\text{Vế Trái} = \sum_{n \in \mathbb{N}} \left\{ \int_{[0, \infty)} f_n \, d\mu_L \right\} = \sum_{n=1}^\infty 0 = 0$$
> 
> ### Bước 2: Kiểm tra điều kiện hoán đổi toán tử ($\sum$ và $\int$)
> Ta đặt câu hỏi liệu có thể áp dụng các định lý hội tụ Lebesgue để hoán đổi dấu tổng và tích phân hay không:
> * **Định lý Hội tụ Đơn điệu (MCT / Tính $\sigma$-cộng tính):** Không áp dụng được, vì hàm số $f_n(x)$ đổi dấu (nhận giá trị âm trên khoảng $[0, x_n)$ như sẽ chứng minh ở câu b), vi phạm giả thiết dãy hàm không âm.
> * **Định lý Hội tụ Trội (DCT):** Để áp dụng được DCT cho chuỗi, ta cần chuỗi tích phân trị tuyệt đối phải hội tụ. Tuy nhiên, theo kết quả khảo sát từ câu (b) và câu (c), ta có:
>   $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \infty$$
>   Do chuỗi trị tuyệt đối phân kỳ, giả thiết trội của DCT bị vi phạm nghiêm trọng.
> 
> ### Bước 3: Lập luận và Kết luận toán học
> Vì cả MCT và DCT đều bị từ chối hoạt động, phép hoán đổi toán tử giữa tổng vô hạn và tích phân trên miền vô hạn $(0, \infty)$ **không hợp pháp** trong bài toán này. 
> 
> Do đó, vế trái (tổng các tích phân) và vế phải (tích phân của hàm tổng, sẽ tính ở câu e) không bắt buộc phải bằng nhau. Kết luận cuối cùng cho câu (a):
> $$\sum_{n \in \mathbb{N}} \left\{ \int_{[0, \infty)} f_n \, d\mu_L \right\} = 0$$




> [!rem] Tầm quan trọng của giả thiết hội tụ tuyệt đối
> Nếu không có điều kiện hội tụ tuyệt đối $\int_0^\infty |f| dx < \infty$, ta không thể dùng Theorem 3 để khẳng định $|f|$ khả tích Lebesgue ở **Bước 1**. Khi $|f|$ không khả tích, ta sẽ mất đi hàm trội toàn cục để áp dụng DCT ở **Bước 2**, khiến toàn bộ chuỗi logic chuyển đổi giữa hai hệ thống tích phân bị sụp đổ hoàn toàn.













$\xi$