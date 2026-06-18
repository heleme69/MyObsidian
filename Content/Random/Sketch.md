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

> [!rem] Kết luận cốt lõi cho kỹ sư Toán
> Bài toán này dạy cho chúng ta một bộ lọc tư duy: Khi làm việc với chuỗi hàm, dấu hiệu $\sum \int f_n = 0$ hoặc hữu hạn là một cái bẫy. Muốn an toàn hoán đổi, bắt buộc phải kiểm tra "bảo hiểm" Tonelli/DCT bằng cách lấy trị tuyệt đối $\sum \int |f_n|$. Nếu tổng trị tuyệt đối vọt ra $\infty$, cấu trúc giải tích sẽ bị gãy như kịch bản của bài 9.30 này.

> [!rem] 1. Trị tuyệt đối là công cụ để định nghĩa "Hàm Trội" ($g$)
> Hãy nhìn vào giả thiết trung tâm của Định lý Hội tụ Trội (DCT): 
> > *"Giả sử tồn tại một hàm số $g$ khả tích ($\int_X g d\mu < \infty$) sao cho $|f_n(x)| \le g(x)$ với mọi $n$ và hầu khắp nơi trên $X$."*
> 
> * Bất đẳng thức $|f_n(x)| \le g(x)$ bắt buộc phải sử dụng dấu trị tuyệt đối. Điều này có nghĩa là hàm trội $g$ không chỉ bao phủ giá trị của dãy hàm $f_n$, mà nó bắt buộc phải bao phủ **độ lớn tuyệt đối** (khối lượng năng lượng) của dãy hàm đó.
> * Vì $g \ge 0$ và $g$ khả tích, theo tính chất đơn điệu của tích phân Lebesgue, ta có:
>   $$\int_X |f_n| \, d\mu \le \int_X g \, d\mu < \infty$$
> * Như vậy, chính sự tồn tại của hàm trội $g$ trong DCT đã **ép** mọi hàm số $f_n$ trong dãy phải thỏa mãn điều kiện khả tích Lebesgue dạng trị tuyệt đối ngay từ ban đầu. DCT không bao giờ chấp nhận một dãy hàm bán hội tụ (conditionally convergent).

> [!rem] 2. Trị tuyệt đối giúp kiểm soát hiện tượng "Thoát năng lượng" (Escape to Infinity)
> Bản chất của trị tuyệt đối là gom toàn bộ phần đồ thị nằm dưới trục hoành (diện tích âm) lật ngược lên trên (diện tích dương). 
> 
> * Trong giải tích cổ điển, một dãy hàm có thể hoán đổi tích phân nhờ vào sự triệt tiêu cơ học giữa phần dương và phần âm khi $x \to \infty$ (như bài 9.30 bạn vừa giải). 
> * Tuy nhiên, khi lấy giới hạn điểm, cấu trúc triệt tiêu này có thể bị mất đi ở hàm giới hạn $f$, khiến năng lượng đột ngột vọt ra vô cùng hoặc thay đổi giá trị.
> * Bằng cách đặt trị tuyệt đối $\int |f_n| d\mu \le \int g d\mu$, DCT chặn đứng khả năng dịch chuyển diện tích này. Nó đảm bảo khối lượng tổng thể của đồ thị bị giam cầm dưới một "mái nhà" hữu hạn là $g$, không cho phép năng lượng tự do chạy thoát ra các rìa vô cực hoặc các điểm kỳ dị.

> [!rem] 3. Trị tuyệt đối là chìa khóa trong bước chứng minh DCT (Bổ đề Fatou)
> Nếu bạn nhìn vào bên trong cấu trúc chứng minh của Định lý DCT, bạn sẽ thấy người ta bắt buộc phải dùng đến yêu cầu trị tuyệt đối thông qua Bổ đề Fatou.
> 
> Để chứng minh DCT, các nhà toán học thiết lập hai dãy hàm mới luôn luôn không âm:
> $$h_n(x) = g(x) + f_n(x) \ge 0 \quad \text{và} \quad k_n(x) = g(x) - f_n(x) \ge 0$$
> (Sở dĩ ta có $g + f_n \ge 0$ và $g - f_n \ge 0$ là nhờ vào điều kiện trị tuyệt đối $|f_n| \le g$).
> 
> Sau đó, áp dụng Bổ đề Fatou (vốn chỉ dành cho hàm không âm) cho $h_n$ và $k_n$:
> $$\int_X \liminf (g \pm f_n) \, d\mu \le \liminf \int_X (g \pm f_n) \, d\mu$$
> 
> Nhờ có sự bảo đảm không âm từ bất đẳng thức trị tuyệt đối này, các phép toán tuyến tính $\int (g + f_n) = \int g + \int f_n$ mới diễn ra một cách hợp pháp (né được dạng vô định $[ \infty - \infty ]$), từ đó ép được giới hạn tích phân vế trái bằng vế phải.



$\xi$