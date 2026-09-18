
# Phần 1: Bài toán Phân loại Tuyến tính, Tối đa hóa Lề và Đối ngẫu Lagrange

Trong phần này, chúng ta sẽ thiết lập nền tảng hình học và giải tích của thuật toán Máy Vector Hỗ trợ trong không gian nội tích hữu hạn chiều. Mục tiêu là xây dựng bài toán tối ưu lồi nguyên thủy, sau đó áp dụng lý thuyết đối ngẫu Lagrange để chứng minh rằng cấu trúc của bài toán hoàn toàn được xác định bởi dạng song tuyến tính của các điểm dữ liệu. Quan sát giải tích mấu chốt này chính là bản lề để chúng ta tổng quát hóa lên các Không gian Hilbert có hạt nhân tái tạo (RKHS) ở các phần tiếp theo.

> [!def] Định nghĩa 1 (Không gian giả thuyết và Siêu phẳng affine)
> Giả sử $\mathcal{X}$ là một không gian nội tích trên trường số thực $\mathbb{R}$ với tích vô hướng $\langle \cdot, \cdot \rangle$ và chuẩn cảm sinh $\|x\| = \sqrt{\langle x, x \rangle}$. Ta được cung cấp một tập dữ liệu huấn luyện $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^m$, trong đó mỗi mẫu $x_i \in \mathcal{X}$ và $y_i \in \{-1, +1\}$ là nhãn phân loại tương ứng.
> Một siêu phẳng affine trong $\mathcal{X}$ được xác định bởi một phiếm hàm tuyến tính liên tục $f(x) = \langle w, x \rangle + b$ với vector pháp tuyến $w \in \mathcal{X} \setminus \{0\}$ và độ lệch $b \in \mathbb{R}$. Siêu phẳng này là tập hợp các điểm:
> $$H_{w,b} = \{x \in \mathcal{X} \mid \langle w, x \rangle + b = 0\}$$
> Tập dữ liệu $\mathcal{D}$ được gọi là phân tách tuyến tính nếu tồn tại cặp $(w, b)$ sao cho $y_i(\langle w, x_i \rangle + b) > 0$ với mọi $i = 1, \dots, m$.

Khi dữ liệu phân tách tuyến tính, không gian nghiệm chứa vô số siêu phẳng thỏa mãn. Để chọn ra siêu phẳng tối ưu mang lại sức mạnh tổng quát hóa cao nhất, ta dựa trên nguyên lý tối đa hóa khoảng cách biên, hay còn gọi là lề.

> [!def] Định nghĩa 2 (Lề đại số và Lề hình học)
> Đối với một mẫu $(x_i, y_i) \in \mathcal{D}$ và siêu phẳng $H_{w,b}$, lề đại số được định nghĩa là:
> $$\hat{\gamma}_i(w, b) = y_i (\langle w, x_i \rangle + b)$$
> Lề hình học của mẫu $(x_i, y_i)$ đến $H_{w,b}$ là khoảng cách trực giao từ $x_i$ đến siêu phẳng, được chuẩn hóa bởi chuẩn của vector pháp tuyến:
> $$\gamma_i(w, b) = \frac{y_i (\langle w, x_i \rangle + b)}{\|w\|}$$
> Lề hình học của toàn bộ tập dữ liệu $\mathcal{D}$ đối với $H_{w,b}$ là cận dưới đúng của lề hình học trên toàn tập mẫu:
> $$\gamma(w, b) = \min_{i=1,\dots,m} \gamma_i(w, b)$$

> [!prp] Mệnh đề 1 (Tính bất biến tỷ lệ và Dạng chuẩn tắc của lề)
> Lề hình học $\gamma(w, b)$ bất biến qua phép nhân vô hướng dương đối với cặp $(w, b)$. Từ đó, ta luôn có thể chọn một biểu diễn chuẩn tắc $(w^*, b^*)$ cho siêu phẳng sao cho lề đại số cực tiểu của tập dữ liệu bằng $1$.

> [!prf]
> Xét một hằng số $c > 0$ bất kỳ. Áp dụng phép biến đổi $(w', b') = (cw, cb)$, ta tính lề hình học tại điểm $x_i$:
> $$\gamma_i(cw, cb) = \frac{y_i (\langle cw, x_i \rangle + cb)}{\|cw\|} = \frac{c \cdot y_i (\langle w, x_i \rangle + b)}{c \|w\|} = \gamma_i(w, b)$$
> Do tính bất biến này, không mất tính tổng quát, ta có thể tự do điều chỉnh độ lớn của $\|w\|$ mà không làm thay đổi siêu phẳng $H_{w,b}$. Khởi tạo một cặp $(w_0, b_0)$ phân tách được dữ liệu. Gọi lề đại số cực tiểu là $\hat{\gamma}_{\min} = \min_{i} y_i(\langle w_0, x_i \rangle + b_0)$. Vì dữ liệu phân tách tuyến tính, ta có $\hat{\gamma}_{\min} > 0$.
> Chọn hằng số $c = \frac{1}{\hat{\gamma}_{\min}}$ và đặt $w^* = cw_0, b^* = cb_0$. Khi đó:
> $$\min_{i=1,\dots,m} y_i(\langle w^*, x_i \rangle + b^*) = c \cdot \hat{\gamma}_{\min} = 1$$
> Dưới điều kiện chuẩn tắc này, lề hình học của tập dữ liệu trở thành $\gamma(w^*, b^*) = \frac{1}{\|w^*\|}$.

Dựa trên Mệnh đề 1, việc tìm siêu phẳng có lề hình học cực đại tương đương với việc tối đa hóa hàm $f(w) = \frac{1}{\|w\|}$, và do tính đơn điệu nghịch đảo trên miền dương, bài toán trở thành tối thiểu hóa $\|w\|^2$.

> [!thm] Định lý 1 (Bài toán tối ưu nguyên thủy - Primal Problem)
> Việc tìm siêu phẳng phân tách có lề hình học cực đại trên tập dữ liệu phân tách tuyến tính tương đương với bài toán quy hoạch toàn phương lồi:
> $$\min_{w \in \mathcal{X}, b \in \mathbb{R}} \frac{1}{2}\|w\|^2$$
> Chịu sự ràng buộc:
> $$y_i(\langle w, x_i \rangle + b) \ge 1, \quad \forall i = 1, \dots, m$$

Bài toán trong Định lý 1 có hàm mục tiêu lồi chặt và tập ràng buộc là một giao của các nửa không gian đóng (là một tập lồi, đóng). Theo định lý Weierstrass mở rộng, tồn tại duy nhất một vector $w^*$ tối ưu bài toán. Để giải quyết các ràng buộc bất đẳng thức và khảo sát sâu hơn cấu trúc của nghiệm, ta thiết lập đối ngẫu Lagrange.

> [!def] Định nghĩa 3 (Hàm Lagrange và Cặp đối ngẫu)
> Gọi $\alpha = (\alpha_1, \dots, \alpha_m)^\top \in \mathbb{R}^m_{\ge 0}$ là vector các nhân tử Lagrange. Hàm Lagrange $\mathcal{L}: \mathcal{X} \times \mathbb{R} \times \mathbb{R}^m_{\ge 0} \to \mathbb{R}$ được định nghĩa là:
> $$\mathcal{L}(w, b, \alpha) = \frac{1}{2}\|w\|^2 - \sum_{i=1}^m \alpha_i \left[ y_i(\langle w, x_i \rangle + b) - 1 \right]$$

> [!thm] Định lý 2 (Dạng đối ngẫu và Định lý biểu diễn tiền đề)
> Nghiệm tối ưu $w^*$ của bài toán phân loại tuyến tính nằm hoàn toàn trong không gian con sinh bởi các vector đặc trưng dữ liệu. Hơn nữa, bài toán có thể được giải qua dạng đối ngẫu Fenchel-Lagrange chỉ phụ thuộc vào cấu trúc tích vô hướng $\langle x_i, x_j \rangle$.

> [!prf]
> Để tìm cận dưới của hàm Lagrange theo các biến nguyên thủy $(w, b)$, ta tính đạo hàm Fréchet của $\mathcal{L}$ theo $w$ và đạo hàm riêng theo $b$, sau đó đặt bằng $0$ theo điều kiện tĩnh KKT:
> $$\nabla_w \mathcal{L}(w, b, \alpha) = w - \sum_{i=1}^m \alpha_i y_i x_i = 0 \implies w^* = \sum_{i=1}^m \alpha_i y_i x_i$$
> $$\frac{\partial \mathcal{L}}{\partial b}(w, b, \alpha) = -\sum_{i=1}^m \alpha_i y_i = 0 \implies \sum_{i=1}^m \alpha_i y_i = 0$$
> Phương trình thứ nhất chỉ ra rằng vector pháp tuyến tối ưu $w^*$ là một tổ hợp tuyến tính của các mẫu huấn luyện $x_i$. Đây chính là trường hợp hữu hạn chiều của Định lý Biểu diễn (Representer Theorem).
> Thay $w^*$ và điều kiện của $b$ ngược trở lại hàm Lagrange để thu được hàm mục tiêu đối ngẫu $W(\alpha)$:
> $$\mathcal{L}(w^*, b, \alpha) = \frac{1}{2} \left\langle \sum_{i=1}^m \alpha_i y_i x_i, \sum_{j=1}^m \alpha_j y_j x_j \right\rangle - \sum_{i=1}^m \alpha_i y_i \left\langle \sum_{j=1}^m \alpha_j y_j x_j, x_i \right\rangle - b \sum_{i=1}^m \alpha_i y_i + \sum_{i=1}^m \alpha_i$$
> Do $\sum_{i=1}^m \alpha_i y_i = 0$, số hạng chứa $b$ triệt tiêu. Áp dụng tính chất song tuyến tính của tích vô hướng:
> $$W(\alpha) = \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle - \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle + \sum_{i=1}^m \alpha_i$$
> Rút gọn biểu thức, bài toán đối ngẫu trở thành việc cực đại hóa $W(\alpha)$:
> $$\max_{\alpha \in \mathbb{R}^m} \sum_{i=1}^m \alpha_i - \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j y_i y_j \langle x_i, x_j \rangle$$
> Chịu sự ràng buộc:
> $$\alpha_i \ge 0, \quad \forall i = 1, \dots, m$$
> $$\sum_{i=1}^m \alpha_i y_i = 0$$

Khi bài toán chứa dữ liệu nhiễu hoặc không phân tách tuyến tính nghiêm ngặt, việc điều chỉnh nới lỏng được thực hiện bằng cách đưa vào các biến $\xi_i \ge 0$. Hàm mục tiêu nguyên thủy trở thành $\frac{1}{2}\|w\|^2 + C \sum_{i=1}^m \xi_i$, với $C > 0$ là hằng số kiểm soát chỉnh hóa. Thực hiện khai triển đối ngẫu tương tự, ta thu được bài toán đối ngẫu hoàn toàn giữ nguyên cấu trúc tích vô hướng, chỉ bổ sung cận trên của tập ràng buộc thành $0 \le \alpha_i \le C$.

Theo điều kiện độ lệch bù KKT (Complementary Slackness), nghiệm đối ngẫu $\alpha^*$ và nghiệm nguyên thủy $(w^*, b^*)$ phải thỏa mãn:
$$\alpha_i^* \left[ y_i(\langle w^*, x_i \rangle + b^*) - 1 \right] = 0, \quad \forall i = 1, \dots, m$$
Hệ thức giải tích này dẫn đến hệ quả về tính thưa (sparsity) của nghiệm: nhân tử $\alpha_i^*$ chỉ nhận giá trị dương khi và chỉ khi mẫu $x_i$ nằm chính xác trên biên cực lề ($y_i(\langle w^*, x_i \rangle + b^*) = 1$). Các điểm này được định nghĩa là các Vector Hỗ trợ.

Cuối cùng, hàm quyết định để phân loại một điểm dữ liệu mới $x \in \mathcal{X}$ được viết lại thành:
$$f(x) = \text{sign} \left( \sum_{i=1}^m \alpha_i^* y_i \langle x_i, x \rangle + b^* \right)$$

Định lý 2 và phương trình hàm quyết định cho thấy một sự dịch chuyển tư duy lớn trong toán học tối ưu: ta không cần làm việc trực tiếp với vector $w$ trong không gian $\mathcal{X}$. Hàm mục tiêu và ranh giới quyết định chỉ phụ thuộc vào phép toán $\langle \cdot, \cdot \rangle$. Tiền đề giải tích này là điều kiện cần và đủ để ta từ bỏ không gian tham số ban đầu, áp dụng một toán tử tích phân và Định lý Mercer nhằm thiết lập các siêu phẳng trong Không gian Hilbert vô hạn chiều.