
# Phần 1: Hình học của Siêu phẳng, Phân loại Tuyến tính và Bài toán Lề Cực đại

Trong phần này, chúng ta thiết lập nền tảng hình học và giải tích của bài toán phân loại tuyến tính trong không gian Euclid hữu hạn chiều. Trọng tâm của phần này là phát triển khái niệm khoảng cách có dấu, dẫn xuất lề hình học của tập dữ liệu, và chứng minh rằng bài toán tìm siêu phẳng phân tách tối ưu có thể được quy về một bài toán quy hoạch toàn phương lồi (Convex Quadratic Programming). Chúng ta cũng sẽ chứng minh tường minh sự tồn tại và tính duy nhất của nghiệm cho bài toán tối ưu nguyên thủy này thông qua Định lý hình chiếu trên không gian Hilbert.

> [!def] Định nghĩa 1 (Siêu phẳng Affine và Nửa không gian)
> Trong không gian vector $n$-chiều $\mathbb{R}^n$ trang bị tích vô hướng tiêu chuẩn $\langle u, v \rangle = u^\top v$ và chuẩn cảm sinh $\|u\| = \sqrt{u^\top u}$, một siêu phẳng affine $H$ được xác định bởi phương trình:
> $$\omega^\top x + b = 0$$
> Trong đó $\omega \in \mathbb{R}^n \setminus \{0\}$ là vector pháp tuyến hướng ra ngoài, và $b \in \mathbb{R}$ là hệ số tự do (độ lệch).
> Siêu phẳng $H$ chia không gian $\mathbb{R}^n$ thành hai nửa không gian mở đối ngẫu:
> $$H^+ = \{x \in \mathbb{R}^n \mid \omega^\top x + b > 0\}$$
> $$H^- = \{x \in \mathbb{R}^n \mid \omega^\top x + b < 0\}$$
> Biên của hai nửa không gian này chính là siêu phẳng $H$.

> [!def] Định nghĩa 2 (Bài toán Phân loại Nhị phân Tuyến tính)
> Cho tập dữ liệu huấn luyện gồm $m$ mẫu $\mathcal{D} = \{(x^{(i)}, y^{(i)})\}_{i=1}^m$, trong đó mỗi mẫu $x^{(i)} \in \mathbb{R}^n$ là một vector đặc trưng và $y^{(i)} \in \{-1, +1\}$ là nhãn phân loại tương ứng. Giả sử tập $\mathcal{D}$ chứa ít nhất một mẫu thuộc lớp $+1$ và một mẫu thuộc lớp $-1$.
> Quy tắc quyết định nhị phân gán nhãn cho một vector đầu vào $x_0 \in \mathbb{R}^n$ dựa trên dấu của dạng affine:
> $$y_0 = \operatorname{sign}(\omega^\top x_0 + b) = \begin{cases} 1, & \omega^\top x_0 + b \ge 0 \\ -1, & \omega^\top x_0 + b < 0 \end{cases}$$
> Tập dữ liệu $\mathcal{D}$ được gọi là phân tách tuyến tính hoàn hảo nếu tồn tại ít nhất một cặp tham số $(\omega, b)$ thỏa mãn:
> $$y^{(i)}(\omega^\top x^{(i)} + b) > 0, \quad \forall i = 1, \dots, m$$

Khi dữ liệu phân tách tuyến tính, tồn tại vô số siêu phẳng thỏa mãn việc phân tách các mẫu. Để đánh giá mức độ tin cậy của việc phân loại, ta cần lượng hóa khoảng cách từ các điểm dữ liệu tới ranh giới quyết định.

> [!prp] Mệnh đề 1 (Khoảng cách có dấu và Lề hình học)
> Cho điểm $x_0 \in \mathbb{R}^n$ và siêu phẳng $H: \omega^\top x + b = 0$.
> 1. Khoảng cách có dấu (signed distance) từ $x_0$ tới $H$ được cho bởi:
> $$d_0 = \frac{\omega^\top x_0 + b}{\|\omega\|} = \left(\frac{\omega}{\|\omega\|}\right)^\top x_0 + \frac{b}{\|\omega\|}$$
> 2. Lề hình học (geometric margin) của mẫu dữ liệu $(x_0, y_0)$ đối với siêu phẳng $H$ là:
> $$\gamma_0 = \frac{y_0(\omega^\top x_0 + b)}{\|\omega\|}$$

> [!prf]
> Gọi $x_p$ là hình chiếu trực giao của $x_0$ lên siêu phẳng $H$. Vì đoạn thẳng nối từ $x_p$ tới $x_0$ trực giao với $H$, vector $x_0 - x_p$ song song cùng phương với vector pháp tuyến $\omega$.
> Gọi $d_0 \in \mathbb{R}$ là đại lượng đại số biểu diễn khoảng cách có hướng theo vector đơn vị pháp tuyến $\frac{\omega}{\|\omega\|}$, ta có biểu diễn vector:
> $$x_0 = x_p + d_0 \frac{\omega}{\|\omega\|} \iff x_p = x_0 - d_0 \frac{\omega}{\|\omega\|}$$
> Do $x_p \in H$, tọa độ của $x_p$ thỏa mãn phương trình xác định siêu phẳng:
> $$\omega^\top x_p + b = 0 \iff \omega^\top \left( x_0 - d_0 \frac{\omega}{\|\omega\|} \right) + b = 0$$
> Sử dụng tính chất tuyến tính của tích vô hướng:
> $$\omega^\top x_0 - d_0 \frac{\omega^\top \omega}{\|\omega\|} + b = 0$$
> Vì $\omega^\top \omega = \|\omega\|^2$, ta thu được:
> $$\omega^\top x_0 - d_0 \|\omega\| + b = 0 \implies d_0 = \frac{\omega^\top x_0 + b}{\|\omega\|}$$
> Dấu của $d_0$ cho biết điểm $x_0$ nằm ở nửa không gian nào. Khi $x_0$ được phân loại đúng nhãn, đại lượng $\operatorname{sign}(d_0)$ trùng với nhãn $y_0$. Nhân trực tiếp nhãn $y_0$ vào khoảng cách có dấu ta thu được lề hình học:
> $$\gamma_0 = y_0 d_0 = \frac{y_0(\omega^\top x_0 + b)}{\|\omega\|}$$
> Đại lượng $\gamma_0$ luôn dương khi và chỉ khi mẫu $x_0$ được phân loại chính xác, và độ lớn của nó đo khoảng cách hình học Euclid từ $x_0$ đến siêu phẳng.

> [!def] Định nghĩa 3 (Lề hình học của Tập dữ liệu)
> Với tập dữ liệu huấn luyện $\mathcal{D} = \{(x^{(i)}, y^{(i)})\}_{i=1}^m$, lề hình học của mẫu thứ $i$ được ký hiệu là:
> $$\gamma^{(i)} = y^{(i)} \left( \left(\frac{\omega}{\|\omega\|}\right)^\top x^{(i)} + \frac{b}{\|\omega\|} \right)$$
> Lề hình học của toàn bộ tập dữ liệu $\mathcal{D}$ đối với siêu phẳng $(\omega, b)$ là giá trị lề nhỏ nhất trong tất cả các mẫu:
> $$\gamma = \min_{i=1,\dots,m} \gamma^{(i)}$$

> [!prp] Mệnh đề 2 (Tính bất biến tỷ lệ và Phép chuẩn hóa thang đo)
> Lề hình học $\gamma$ là một bất biến hình học qua phép nhân vô hướng của cặp tham số $(\omega, b)$ với một hằng số dương tùy ý. Do đó, ta luôn có thể chuẩn hóa thang đo của siêu phẳng sao cho lề đại số cực tiểu đạt giá trị đúng bằng $1$:
> $$\min_{i=1,\dots,m} y^{(i)}(\omega^\top x^{(i)} + b) = 1$$
> Khi đó, biểu diễn của lề hình học của tập dữ liệu trở thành:
> $$\gamma = \frac{1}{\|\omega\|}$$

> [!prf]
> Xét phép đổi thang đo $(\omega', b') = (k\omega, kb)$ với hằng số $k > 0$ bất kỳ. Thay vào công thức lề hình học của mẫu thứ $i$:
> $$\gamma^{(i)}(\omega', b') = \frac{y^{(i)}((k\omega)^\top x^{(i)} + kb)}{\|k\omega\|} = \frac{k \cdot y^{(i)}(\omega^\top x^{(i)} + b)}{k \|\omega\|} = \frac{y^{(i)}(\omega^\top x^{(i)} + b)}{\|\omega\|} = \gamma^{(i)}(\omega, b)$$
> Do đó $\gamma(\omega', b') = \gamma(\omega, b)$ với mọi $k > 0$.
> Vì tập dữ liệu phân tách tuyến tính, tồn tại $(\omega_0, b_0)$ sao cho mọi mẫu đều có lề đại số dương:
> $$\hat{\gamma}_{\min} = \min_{i=1,\dots,m} y^{(i)}(\omega_0^\top x^{(i)} + b_0) > 0$$
> Chọn hệ số tỷ lệ $k = \frac{1}{\hat{\gamma}_{\min}} > 0$ và đặt $\omega = k\omega_0$, $b = kb_0$. Khi đó:
> $$\min_{i=1,\dots,m} y^{(i)}(\omega^\top x^{(i)} + b) = k \cdot \min_{i=1,\dots,m} y^{(i)}(\omega_0^\top x^{(i)} + b_0) = \frac{1}{\hat{\gamma}_{\min}} \cdot \hat{\gamma}_{\min} = 1$$
> Dưới điều kiện chuẩn hóa này, lề hình học của toàn tập dữ liệu là:
> $$\gamma = \min_{i=1,\dots,m} \frac{y^{(i)}(\omega^\top x^{(i)} + b)}{\|\omega\|} = \frac{1}{\|\omega\|} \min_{i=1,\dots,m} y^{(i)}(\omega^\top x^{(i)} + b) = \frac{1}{\|\omega\|}$$

Từ Mệnh đề 2, mục tiêu tối đa hóa lề hình học $\max_{\gamma, \omega, b} \gamma$ tương đương với việc giải bài toán cực đại hóa $\frac{1}{\|\omega\|}$ dưới ràng buộc lề đại số của tất cả các mẫu không nhỏ hơn $1$. Vì hàm số $g(t) = \frac{1}{t}$ là hàm nghịch biến ngặt trên $(0, +\infty)$, việc cực đại hóa $\frac{1}{\|\omega\|}$ tương đương với cực tiểu hóa $\|\omega\|$, hay tương đương với việc cực tiểu hóa hàm toàn phương $\frac{1}{2}\|\omega\|^2 = \frac{1}{2}\omega^\top \omega$.

> [!thm] Định lý 1 (Bài toán Tối ưu Lề Cứng Nguyên thủy - Primal Hard-Margin SVM)
> Giả sử tập dữ liệu $\mathcal{D} = \{(x^{(i)}, y^{(i)})\}_{i=1}^m$ phân tách tuyến tính hoàn hảo. Bài toán tìm siêu phẳng phân tách tối đa hóa lề hình học quy về bài toán quy hoạch toàn phương lồi:
> $$\min_{\omega \in \mathbb{R}^n, b \in \mathbb{R}} \frac{1}{2}\omega^\top \omega$$
> Thỏa mãn hệ ràng buộc bất đẳng thức affine:
> $$y^{(i)}(\omega^\top x^{(i)} + b) \ge 1, \quad \forall i = 1, \dots, m$$
> Bài toán này luôn tồn tại duy nhất một nghiệm tối ưu toàn cục $(\omega^*, b^*)$.

> [!prf]
> Đặt không gian tích $\mathcal{V} = \mathbb{R}^n \times \mathbb{R}$ với biến phần tử $u = (\omega, b)$. Định nghĩa hàm mục tiêu $f: \mathcal{V} \to \mathbb{R}$ bởi $f(u) = f(\omega, b) = \frac{1}{2}\|\omega\|^2$.
> Tập nghiệm khả thi của bài toán là:
> $$\mathcal{C} = \{(\omega, b) \in \mathbb{R}^n \times \mathbb{R} \mid y^{(i)}(\omega^\top x^{(i)} + b) \ge 1, \; \forall i = 1, \dots, m\}$$
> 
> Bước 1: Chứng minh tính lồi, đóng và khác rỗng của tập khả thi $\mathcal{C}$.
> Với mỗi $i \in \{1, \dots, m\}$, xét phiếm hàm affine $A_i(\omega, b) = y^{(i)}(\omega^\top x^{(i)} + b) - 1$. Vì $A_i$ là hàm liên tục, tập mức $C_i = \{(\omega, b) \in \mathcal{V} \mid A_i(\omega, b) \ge 0\}$ là một nửa không gian đóng trong $\mathcal{V}$. Tập khả thi $\mathcal{C} = \bigcap_{i=1}^m C_i$ là giao của hữu hạn các nửa không gian đóng, do đó $\mathcal{C}$ là một tập lồi và đóng trong $\mathcal{V}$. Theo giả thiết tập $\mathcal{D}$ phân tách tuyến tính, áp dụng Mệnh đề 2, luôn tồn tại cặp $(\omega, b)$ chuẩn hóa sao cho $A_i(\omega, b) \ge 0$ với mọi $i$, tức $\mathcal{C} \neq \emptyset$.
> 
> Bước 2: Sự tồn tại và tính duy nhất của vector pháp tuyến tối ưu $\omega^*$.
> Xét phép chiếu trực giao $\pi_\omega: \mathcal{V} \to \mathbb{R}^n$ xác định bởi $\pi_\omega(\omega, b) = \omega$. Đặt hình ảnh của tập khả thi qua phép chiếu là $\Omega = \pi_\omega(\mathcal{C}) \subset \mathbb{R}^n$.
> Do $\mathcal{C}$ là tập lồi đóng và các ràng buộc chứa cả hai lớp $y = +1$ và $y = -1$, vector $\omega = 0$ không thể thuộc $\Omega$ (vì nếu $\omega = 0$ thì hệ ràng buộc suy biến thành $b \ge 1$ và $-b \ge 1 \implies 1 \le b \le -1$, mâu thuẫn). Do đó $0 \notin \Omega$.
> Tập $\Omega$ là tập lồi, đóng và khác rỗng trong $\mathbb{R}^n$. Bài toán tối ưu theo biến $\omega$ có dạng:
> $$\min_{\omega \in \Omega} \frac{1}{2}\|\omega\|^2$$
> Đây chính là bài toán tìm điểm thuộc tập lồi đóng $\Omega$ có khoảng cách ngắn nhất tới gốc tọa độ $0$. Theo Định lý hình chiếu trên không gian Hilbert (Hilbert Projection Theorem), tồn tại duy nhất một vector $\omega^* \in \Omega$ thỏa mãn:
> $$\|\omega^*\| = \inf_{\omega \in \Omega} \|\omega\|$$
> 
> Bước 3: Sự tồn tại và tính duy nhất của hệ số tự do $b^*$.
> Cố định vector tối ưu $\omega^*$. Hệ ràng buộc của bài toán trở thành hệ bất đẳng thức đối với biến vô hướng $b$:
> $$\begin{cases} \omega^{*\top} x^{(i)} + b \ge 1, & \forall i: y^{(i)} = +1 \\ \omega^{*\top} x^{(i)} + b \le -1, & \forall i: y^{(i)} = -1 \end{cases} \iff \begin{cases} b \ge 1 - \omega^{*\top} x^{(i)}, & \forall i: y^{(i)} = +1 \\ b \le -1 - \omega^{*\top} x^{(i)}, & \forall i: y^{(i)} = -1 \end{cases}$$
> Đặt hai cận giới hạn:
> $$b_{\min} = \max_{i: y^{(i)} = +1} (1 - \omega^{*\top} x^{(i)})$$
> $$b_{\max} = \min_{j: y^{(j)} = -1} (-1 - \omega^{*\top} x^{(j)})$$
> Khoảng giá trị khả thi của $b$ là đoạn $[b_{\min}, b_{\max}]$. Giả sử phản chứng $b_{\min} < b_{\max}$. Khi đó, tồn tại một đoạn mở các giá trị của $b$ nằm hoàn toàn trong tập khả thi sao cho không có mẫu nào chạm vào biên lề, điều này cho phép ta xoay nhẹ hoặc co giãn $\omega^*$ để làm giảm chuẩn $\|\omega^*\|$, mâu thuẫn với tính cực tiểu ngặt của $\|\omega^*\|$. Do đó tại nghiệm tối đa hóa lề hình học, hai biên đối ngẫu chạm nhau tại trạng thái cực hạn $b_{\min} = b_{\max}$. Điểm $b^*$ được xác định duy nhất bởi:
> $$b^* = -\frac{\max_{j: y^{(j)} = -1} (\omega^{*\top} x^{(j)}) + \min_{i: y^{(i)} = +1} (\omega^{*\top} x^{(i)})}{2}$$
> Như vậy, nghiệm $(\omega^*, b^*)$ tồn tại và là duy nhất.

Cấu trúc hình học của bài toán được mô tả qua hai đường biên lề song song với siêu phẳng tối ưu:
$$H^+ = \{x \in \mathbb{R}^n \mid \omega^{*\top} x + b^* = 1\}$$
$$H^- = \{x \in \mathbb{R}^n \mid \omega^{*\top} x + b^* = -1\}$$
Khoảng cách trực giao giữa hai đường biên này là $\frac{2}{\|\omega^*\|}$, biểu diễn độ rộng toàn phần của vùng phân cách. Các điểm dữ liệu nằm chính xác trên hai đường biên này đóng vai trò quyết định cấu trúc của siêu phẳng.

Mặc dù bài toán trong Định lý 1 có thể được giải bằng các thuật toán quy hoạch toàn phương thông thường (như Interior Point Method hay Active Set Method), chi phí tính toán trực tiếp trên không gian biến gốc sẽ bùng nổ khi số chiều $n$ rất lớn hoặc khi ta ánh xạ dữ liệu sang không gian vô hạn chiều. Để khắc phục triệt để rào cản này, chúng ta cần chuyển bài toán sang dạng đối ngẫu thông qua lý thuyết Tối ưu hóa Lồi và Nhân tử Lagrange trong phần tiếp theo.

# Phần 2: Cơ sở Lý thuyết Tối ưu hóa Lồi và Đối ngẫu Lagrange

Trong phần này, chúng ta trang bị bộ khung toán học tổng quát về tối ưu hóa lồi và lý thuyết đối ngẫu Lagrange làm tiền đề giải tích cho mô hình Máy Vector Hỗ trợ. Chúng ta sẽ thiết lập bài toán tối ưu phi tuyến có ràng buộc, định nghĩa hàm đối ngẫu Lagrange, chứng minh tính chất cận dưới (đối ngẫu yếu), phân tích điều kiện quy chuẩn ràng buộc Slater dẫn đến đối ngẫu mạnh, và dẫn xuất định lý độ lệch bù cùng hệ điều kiện Karush-Kuhn-Tucker (KKT).

> [!def] Định nghĩa 1 (Bài toán Tối ưu hóa Tổng quát)
> Xét không gian Euclid $\mathbb{R}^n$. Cho các hàm số $f: \mathbb{R}^n \to \mathbb{R}$, $g_i: \mathbb{R}^n \to \mathbb{R}$ với $i = 1, \dots, k$, và $h_j: \mathbb{R}^n \to \mathbb{R}$ với $j = 1, \dots, l$. Miền xác định chung của bài toán là tập hợp:
> $$\mathcal{D} = \operatorname{dom} f \cap \left( \bigcap_{i=1}^k \operatorname{dom} g_i \right) \cap \left( \bigcap_{j=1}^l \operatorname{dom} h_j \right)$$
> Bài toán tối ưu hóa nguyên thủy (Primal Problem) được định nghĩa dưới dạng:
> $$\min_{\omega \in \mathcal{D}} f(\omega)$$
> Chịu sự ràng buộc:
> $$g_i(\omega) \le 0, \quad i = 1, \dots, k$$
> $$h_j(\omega) = 0, \quad j = 1, \dots, l$$
> Giá trị tối ưu của bài toán nguyên thủy được ký hiệu là $p^* = \inf \{f(\omega) \mid \omega \in \mathcal{D}, \; g_i(\omega) \le 0, \; h_j(\omega) = 0\}$. Nếu tập khả thi rỗng, ta quy ước $p^* = +\infty$.

> [!def] Định nghĩa 2 (Hàm Lagrange và Nhân tử Lagrange)
> Hàm Lagrange (Lagrangian) $\mathcal{L}: \mathbb{R}^n \times \mathbb{R}^k \times \mathbb{R}^l \to \mathbb{R}$ của bài toán nguyên thủy là tổng có trọng số giữa hàm mục tiêu và các hàm ràng buộc:
> $$\mathcal{L}(\omega, \alpha, \beta) = f(\omega) + \sum_{i=1}^k \alpha_i g_i(\omega) + \sum_{j=1}^l \beta_j h_j(\omega)$$
> Trong đó $\alpha = (\alpha_1, \dots, \alpha_k)^\top$ là vector nhân tử Lagrange gắn với các ràng buộc bất đẳng thức, với điều kiện $\alpha_i \ge 0$, và $\beta = (\beta_1, \dots, \beta_l)^\top$ là vector nhân tử Lagrange gắn với các ràng buộc đẳng thức.

> [!def] Định nghĩa 3 (Hàm Đối ngẫu Lagrange)
> Hàm đối ngẫu Lagrange (Lagrange dual function) $\mathcal{G}: \mathbb{R}^k \times \mathbb{R}^l \to \mathbb{R} \cup \{-\infty\}$ được định nghĩa là cận dưới đúng của hàm Lagrange theo biến nguyên thủy $\omega$ trên miền $\mathcal{D}$:
> $$\mathcal{G}(\alpha, \beta) = \inf_{\omega \in \mathcal{D}} \mathcal{L}(\omega, \alpha, \beta) = \inf_{\omega \in \mathcal{D}} \left( f(\omega) + \sum_{i=1}^k \alpha_i g_i(\omega) + \sum_{j=1}^l \beta_j h_j(\omega) \right)$$

> [!prp] Mệnh đề 1 (Tính Lõm của Hàm Đối ngẫu)
> Hàm đối ngẫu $\mathcal{G}(\alpha, \beta)$ luôn là một hàm lõm đối với các biến đối ngẫu $(\alpha, \beta)$, kể cả khi hàm mục tiêu $f$ hoặc các hàm ràng buộc $g_i, h_j$ ban đầu không phải là hàm lồi.

> [!prf]
> Với mỗi điểm $\omega \in \mathcal{D}$ cố định, phiếm hàm $F_\omega(\alpha, \beta) = \mathcal{L}(\omega, \alpha, \beta)$ là một hàm affine theo $(\alpha, \beta)$:
> $$F_\omega(\alpha, \beta) = f(\omega) + \sum_{i=1}^k \alpha_i g_i(\omega) + \sum_{j=1}^l \beta_j h_j(\omega)$$
> Mọi hàm affine đều đồng thời là hàm lồi và hàm lõm. Hàm đối ngẫu $\mathcal{G}(\alpha, \beta) = \inf_{\omega \in \mathcal{D}} F_\omega(\alpha, \beta)$ là cận dưới đúng của một họ các hàm affine.
> Lấy hai điểm bất kỳ $(\alpha^{(1)}, \beta^{(1)})$ và $(\alpha^{(2)}, \beta^{(2)})$, cùng với số thực $\theta \in [0, 1]$. Áp dụng tính chất của cận dưới đúng:
> $$\mathcal{G}(\theta \alpha^{(1)} + (1-\theta) \alpha^{(2)}, \; \theta \beta^{(1)} + (1-\theta) \beta^{(2)}) = \inf_{\omega \in \mathcal{D}} \left[ \theta F_\omega(\alpha^{(1)}, \beta^{(1)}) + (1-\theta) F_\omega(\alpha^{(2)}, \beta^{(2)}) \right]$$
> Do cận dưới đúng của một tổng luôn lớn hơn hoặc bằng tổng các cận dưới đúng:
> $$\inf_{\omega \in \mathcal{D}} \left[ \theta F_\omega(\alpha^{(1)}, \beta^{(1)}) + (1-\theta) F_\omega(\alpha^{(2)}, \beta^{(2)}) \right] \ge \theta \inf_{\omega \in \mathcal{D}} F_\omega(\alpha^{(1)}, \beta^{(1)}) + (1-\theta) \inf_{\omega \in \mathcal{D}} F_\omega(\alpha^{(2)}, \beta^{(2)})$$
> Từ đó ta thu được:
> $$\mathcal{G}(\theta \alpha^{(1)} + (1-\theta) \alpha^{(2)}, \; \theta \beta^{(1)} + (1-\theta) \beta^{(2)}) \ge \theta \mathcal{G}(\alpha^{(1)}, \beta^{(1)}) + (1-\theta) \mathcal{G}(\alpha^{(2)}, \beta^{(2)})$$
> Bất đẳng thức này chứng minh rằng $\mathcal{G}$ là một hàm lõm trên toàn bộ miền xác định.

> [!thm] Định lý 1 (Tính chất Cận dưới và Đối ngẫu Yếu - Weak Duality)
> Với mọi vector đối ngẫu $\alpha \ge 0$ (tức $\alpha_i \ge 0, \forall i$) và $\beta \in \mathbb{R}^l$, hàm đối ngẫu Lagrange thiết lập một chặn dưới không tầm thường cho giá trị tối ưu của bài toán nguyên thủy:
> $$\mathcal{G}(\alpha, \beta) \le p^*$$
> Gọi bài toán đối ngẫu Lagrange (Dual Problem) là:
> $$\max_{\alpha, \beta} \mathcal{G}(\alpha, \beta) \quad \text{với ràng buộc } \alpha \ge 0$$
> Ký hiệu giá trị tối ưu đối ngẫu là $d^* = \sup_{\alpha \ge 0, \beta} \mathcal{G}(\alpha, \beta)$, ta luôn có hệ thức đối ngẫu yếu:
> $$d^* \le p^*$$

> [!prf]
> Giả sử $\tilde{\omega} \in \mathcal{D}$ là một điểm khả thi bất kỳ của bài toán nguyên thủy. Theo định nghĩa tập khả thi, ta có $g_i(\tilde{\omega}) \le 0$ với mọi $i = 1, \dots, k$ và $h_j(\tilde{\omega}) = 0$ với mọi $j = 1, \dots, l$.
> Vì $\alpha_i \ge 0$ với mọi $i$, tích $\alpha_i g_i(\tilde{\omega}) \le 0$. Do đó:
> $$\sum_{i=1}^k \alpha_i g_i(\tilde{\omega}) + \sum_{j=1}^l \beta_j h_j(\tilde{\omega}) \le 0$$
> Cộng $f(\tilde{\omega})$ vào hai vế, ta có:
> $$\mathcal{L}(\tilde{\omega}, \alpha, \beta) = f(\tilde{\omega}) + \sum_{i=1}^k \alpha_i g_i(\tilde{\omega}) + \sum_{j=1}^l \beta_j h_j(\tilde{\omega}) \le f(\tilde{\omega})$$
> Mặt khác, theo định nghĩa cận dưới đúng của hàm đối ngẫu:
> $$\mathcal{G}(\alpha, \beta) = \inf_{\omega \in \mathcal{D}} \mathcal{L}(\omega, \alpha, \beta) \le \mathcal{L}(\tilde{\omega}, \alpha, \beta)$$
> Kết hợp hai bất đẳng thức trên:
> $$\mathcal{G}(\alpha, \beta) \le f(\tilde{\omega})$$
> Bất đẳng thức này đúng với mọi điểm $\tilde{\omega}$ khả thi trong bài toán nguyên thủy. Lấy cận dưới đúng theo toàn bộ tập các điểm khả thi $\tilde{\omega}$, ta thu được:
> $$\mathcal{G}(\alpha, \beta) \le \inf \{f(\tilde{\omega}) \mid \tilde{\omega} \text{ khả thi}\} = p^*$$
> Bất đẳng thức $\mathcal{G}(\alpha, \beta) \le p^*$ đúng với mọi $\alpha \ge 0$ và $\beta \in \mathbb{R}^l$. Lấy cận trên đúng theo toàn bộ miền khả thi đối ngẫu, ta có:
> $$d^* = \sup_{\alpha \ge 0, \beta} \mathcal{G}(\alpha, \beta) \le p^*$$

Hiệu số $p^* - d^* \ge 0$ được gọi là khoảng cách đối ngẫu (duality gap). Khi khoảng cách này triệt tiêu, tức $d^* = p^*$, ta nói bài toán thỏa mãn đối ngẫu mạnh (Strong Duality). Đối ngẫu mạnh không tự nhiên xảy ra cho các bài toán tối ưu phi tuyến tổng quát, nhưng được đảm bảo dưới các giả thiết về tính lồi và điều kiện quy chuẩn ràng buộc.

> [!def] Định nghĩa 4 (Bài toán Tối ưu Lồi Chính quy)
> Bài toán tối ưu nguyên thủy được gọi là bài toán tối ưu lồi nếu tập xác định $\mathcal{D}$ là tập lồi, hàm mục tiêu $f$ và các hàm ràng buộc bất đẳng thức $g_i$ ($i = 1, \dots, k$) đều là các hàm lồi, còn các ràng buộc đẳng thức $h_j$ ($j = 1, \dots, l$) là các hàm affine:
> $$h_j(\omega) = a_j^\top \omega - b_j \iff A\omega - b = 0$$
> trong đó $A \in \mathbb{R}^{l \times n}$ và $b \in \mathbb{R}^l$.

> [!thm] Định lý 2 (Điều kiện Quy chuẩn Ràng buộc Slater - Slater's Condition)
> Xét bài toán tối ưu lồi chính quy. Giả sử tồn tại một điểm $\omega_0$ thuộc phần trong tương đối của miền xác định, ký hiệu $\omega_0 \in \operatorname{relint} \mathcal{D}$, thỏa mãn chặt các ràng buộc bất đẳng thức:
> $$g_i(\omega_0) < 0, \quad \forall i = 1, \dots, k$$
> $$A\omega_0 - b = 0$$
> Khi đó, đối ngẫu mạnh được thiết lập:
> $$d^* = p^*$$
> Hơn nữa, nếu $p^* > -\infty$, cận trên đúng của bài toán đối ngẫu đạt được tại một điểm hữu hạn, tức tồn tại cặp nhân tử đối ngẫu tối ưu $(\alpha^*, \beta^*)$ thỏa mãn $\mathcal{G}(\alpha^*, \beta^*) = d^* = p^*$.
> Đặc biệt, nếu tất cả các hàm ràng buộc bất đẳng thức $g_i(\omega)$ đều là các hàm affine, điều kiện Slater chỉ đòi hỏi tồn tại điểm khả thi $\omega_0 \in \operatorname{relint} \mathcal{D}$ thỏa mãn $g_i(\omega_0) \le 0$ với mọi $i$.

> [!thm] Định lý 3 (Định lý Độ lệch bù - Complementary Slackness)
> Giả sử đối ngẫu mạnh được thỏa mãn ($p^* = d^*$), gọi $\omega^*$ là một nghiệm tối ưu nguyên thủy và $(\alpha^*, \beta^*)$ là một nghiệm tối ưu đối ngẫu. Khi đó:
> $$\alpha_i^* g_i(\omega^*) = 0, \quad \forall i = 1, \dots, k$$

> [!prf]
> Sử dụng tính chất đối ngẫu mạnh, định nghĩa hàm đối ngẫu và tính chất cận dưới đúng:
> $$f(\omega^*) = p^* = d^* = \mathcal{G}(\alpha^*, \beta^*)$$
> Theo định nghĩa của hàm đối ngẫu:
> $$\mathcal{G}(\alpha^*, \beta^*) = \inf_{\omega \in \mathcal{D}} \left( f(\omega) + \sum_{i=1}^k \alpha_i^* g_i(\omega) + \sum_{j=1}^l \beta_j^* h_j(\omega) \right)$$
> Do $\omega^*$ là một điểm khả thi nguyên thủy thuộc $\mathcal{D}$, cận dưới đúng không vượt quá giá trị của biểu thức tại $\omega = \omega^*$:
> $$\mathcal{G}(\alpha^*, \beta^*) \le f(\omega^*) + \sum_{i=1}^k \alpha_i^* g_i(\omega^*) + \sum_{j=1}^l \beta_j^* h_j(\omega^*)$$
> Vì $\omega^*$ khả thi nguyên thủy, ta có $h_j(\omega^*) = 0$ với mọi $j = 1, \dots, l$, nên số hạng thứ ba triệt tiêu. Hơn nữa, vì $\alpha_i^* \ge 0$ và $g_i(\omega^*) \le 0$ với mọi $i$, tích $\alpha_i^* g_i(\omega^*) \le 0$. Do đó:
> $$f(\omega^*) + \sum_{i=1}^k \alpha_i^* g_i(\omega^*) \le f(\omega^*)$$
> Ghép toàn bộ chuỗi hệ thức lại:
> $$f(\omega^*) = \mathcal{G}(\alpha^*, \beta^*) \le f(\omega^*) + \sum_{i=1}^k \alpha_i^* g_i(\omega^*) \le f(\omega^*)$$
> Hai đầu của chuỗi hệ thức bằng nhau, buộc tất cả các bất đẳng thức trung gian phải trở thành đẳng thức chặt:
> $$\sum_{i=1}^k \alpha_i^* g_i(\omega^*) = 0$$
> Vì mỗi số hạng trong tổng đều không dương ($\alpha_i^* g_i(\omega^*) \le 0, \forall i$), một tổng các số hạng không dương bằng $0$ khi và chỉ khi từng số hạng thành phần đồng thời bằng $0$:
> $$\alpha_i^* g_i(\omega^*) = 0, \quad \forall i = 1, \dots, k$$
> Đồng thời, từ chuỗi đẳng thức trên, ta cũng suy ra rằng $\omega^*$ là một điểm cực tiểu hóa toàn cục của hàm Lagrange $\mathcal{L}(\omega, \alpha^*, \beta^*)$ theo biến $\omega$ trên $\mathcal{D}$.

> [!thm] Định lý 4 (Hệ Điều kiện Karush-Kuhn-Tucker - KKT Conditions)
> Xét bài toán tối ưu với các hàm $f, g_i, h_j$ khả vi liên tục.
> 1. Tính cần thiết: Giả sử đối ngẫu mạnh được thỏa mãn ($p^* = d^*$). Nếu $\omega^*$ là nghiệm tối ưu nguyên thủy và $(\alpha^*, \beta^*)$ là nghiệm tối ưu đối ngẫu, thì bộ nghiệm $(\omega^*, \alpha^*, \beta^*)$ bắt buộc phải thỏa mãn hệ điều kiện KKT:
>    * Điều kiện tĩnh (Stationarity):
>      $$\nabla f(\omega^*) + \sum_{i=1}^k \alpha_i^* \nabla g_i(\omega^*) + \sum_{j=1}^l \beta_j^* \nabla h_j(\omega^*) = 0$$
>    * Tính khả thi nguyên thủy (Primal Feasibility):
>      $$g_i(\omega^*) \le 0, \quad \forall i = 1, \dots, k$$
>      $$h_j(\omega^*) = 0, \quad \forall j = 1, \dots, l$$
>    * Tính khả thi đối ngẫu (Dual Feasibility):
>      $$\alpha_i^* \ge 0, \quad \forall i = 1, \dots, k$$
>    * Độ lệch bù (Complementary Slackness):
>      $$\alpha_i^* g_i(\omega^*) = 0, \quad \forall i = 1, \dots, k$$
> 2. Tính đủ đối với bài toán lồi: Nếu bài toán nguyên thủy là một bài toán tối ưu lồi, thì hệ điều kiện KKT là điều kiện cần và đủ cho tính tối ưu. Bất kỳ bộ điểm $(\tilde{\omega}, \tilde{\alpha}, \tilde{\beta})$ nào thỏa mãn đồng thời bốn điều kiện KKT nêu trên thì $\tilde{\omega}$ là nghiệm tối ưu nguyên thủy, $(\tilde{\alpha}, \tilde{\beta})$ là nghiệm tối ưu đối ngẫu, và khoảng cách đối ngẫu bằng $0$.

> [!prf]
> Ta chứng minh phần tính đủ cho bài toán lồi. Giả sử $(\tilde{\omega}, \tilde{\alpha}, \tilde{\beta})$ thỏa mãn toàn bộ bốn điều kiện KKT.
> Xét hàm Lagrange đối với các tham số đối ngẫu đã cố định $\tilde{\alpha}, \tilde{\beta}$:
> $$\mathcal{L}(\omega, \tilde{\alpha}, \tilde{\beta}) = f(\omega) + \sum_{i=1}^k \tilde{\alpha}_i g_i(\omega) + \sum_{j=1}^l \tilde{\beta}_j h_j(\omega)$$
> Vì $f$ và các hàm $g_i$ là hàm lồi, $\tilde{\alpha}_i \ge 0$, và các hàm $h_j$ là hàm affine, hàm $\mathcal{L}(\omega, \tilde{\alpha}, \tilde{\beta})$ là một hàm lồi khả vi theo biến $\omega$.
> Điều kiện tĩnh KKT chỉ ra rằng gradient của hàm Lagrange triệt tiêu tại $\tilde{\omega}$:
> $$\nabla_\omega \mathcal{L}(\tilde{\omega}, \tilde{\alpha}, \tilde{\beta}) = 0$$
> Đối với một hàm lồi khả vi, điểm có gradient bằng không chính là điểm cực tiểu toàn cục. Do đó:
> $$\mathcal{G}(\tilde{\alpha}, \tilde{\beta}) = \inf_{\omega \in \mathcal{D}} \mathcal{L}(\omega, \tilde{\alpha}, \tilde{\beta}) = \mathcal{L}(\tilde{\omega}, \tilde{\alpha}, \tilde{\beta})$$
> Khai triển giá trị của hàm Lagrange tại $\tilde{\omega}$:
> $$\mathcal{L}(\tilde{\omega}, \tilde{\alpha}, \tilde{\beta}) = f(\tilde{\omega}) + \sum_{i=1}^k \tilde{\alpha}_i g_i(\tilde{\omega}) + \sum_{j=1}^l \tilde{\beta}_j h_j(\tilde{\omega})$$
> Áp dụng tính khả thi nguyên thủy $h_j(\tilde{\omega}) = 0$ và điều kiện độ lệch bù $\tilde{\alpha}_i g_i(\tilde{\omega}) = 0$, hai tổng ràng buộc triệt tiêu hoàn toàn:
> $$\mathcal{L}(\tilde{\omega}, \tilde{\alpha}, \tilde{\beta}) = f(\tilde{\omega})$$
> Suy ra $\mathcal{G}(\tilde{\alpha}, \tilde{\beta}) = f(\tilde{\omega})$.
> Mặt khác, theo Định lý Đối ngẫu Yếu, với mọi điểm nguyên thủy khả thi $\omega$ và điểm đối ngẫu khả thi $(\alpha, \beta)$, ta luôn có $\mathcal{G}(\alpha, \beta) \le f(\omega)$. Do đó:
> $$f(\tilde{\omega}) = \mathcal{G}(\tilde{\alpha}, \tilde{\beta}) \le d^* \le p^* \le f(\tilde{\omega})$$
> Đẳng thức buộc phải xảy ra trên toàn bộ chuỗi: $f(\tilde{\omega}) = p^*$ và $\mathcal{G}(\tilde{\alpha}, \tilde{\beta}) = d^*$, đồng thời $p^* = d^*$.
> Như vậy, $\tilde{\omega}$ là nghiệm tối ưu nguyên thủy, $(\tilde{\alpha}, \tilde{\beta})$ là nghiệm tối ưu đối ngẫu, và bài toán đạt đối ngẫu mạnh.

Hệ điều kiện KKT và lý thuyết đối ngẫu Lagrange phát triển ở trên cung cấp nền tảng giải tích hoàn chỉnh để phân tích bài toán tối ưu lề cực đại của SVM. Trong Phần 3, chúng ta sẽ áp dụng trực tiếp cấu trúc này lên bài toán Hard-Margin SVM nguyên thủy đã thiết lập ở Phần 1, qua đó làm sáng tỏ bản chất hình học của các Vector Hỗ trợ.

# Phần 3: Dạng Đối ngẫu trong Hard-Margin SVM và Bản chất Vector Hỗ trợ

Trong các phần trước, bài toán phân loại tuyến tính với lề cực đại đã được thiết lập dưới dạng quy hoạch toàn phương lồi nguyên thủy (Primal Problem) và được trang bị bộ khung đối ngẫu Lagrange cùng hệ điều kiện Karush-Kuhn-Tucker (KKT). Mục tiêu của phần này là chuyển hóa bài toán nguyên thủy sang dạng đối ngẫu toàn phương (Dual Problem). Việc đối ngẫu hóa không chỉ tối ưu hóa bậc tự do tính toán theo số lượng mẫu mà còn chứng minh rằng siêu phẳng quyết định được xác lập hoàn toàn bởi một tập con thưa các điểm dữ liệu – các Vector Hỗ trợ.

> [!def] Định nghĩa 1 (Hàm Lagrange của bài toán SVM lề cứng)
> Xét bài toán quy hoạch toàn phương nguyên thủy trên không gian $\mathbb{R}^n$:
> $$\min_{\omega \in \mathbb{R}^n, b \in \mathbb{R}} \frac{1}{2} \|\omega\|^2$$
> thỏa mãn hệ ràng buộc bất đẳng thức affine:
> $$1 - y^{(i)}(\omega^\top x^{(i)} + b) \le 0, \quad \forall i = 1, \dots, m$$
> Với vector nhân tử Lagrange $\alpha = (\alpha_1, \dots, \alpha_m)^\top \in \mathbb{R}^m_{\ge 0}$, hàm Lagrange $\mathcal{L}: \mathbb{R}^n \times \mathbb{R} \times \mathbb{R}^m_{\ge 0} \to \mathbb{R}$ được xác định bởi:
> $$\mathcal{L}(\omega, b, \alpha) = \frac{1}{2} \|\omega\|^2 - \sum_{i=1}^m \alpha_i \left[ y^{(i)}(\omega^\top x^{(i)} + b) - 1 \right]$$

Do hàm mục tiêu lồi chặt và hệ ràng buộc affine thỏa mãn điều kiện quy chuẩn Slater ngặt trên tập dữ liệu phân tách tuyến tính, bài toán đạt đối ngẫu mạnh ($p^* = d^*$). Nghiệm tối ưu nguyên thủy $(\omega^*, b^*)$ và nghiệm đối ngẫu $\alpha^*$ được liên kết chặt chẽ thông qua hệ điều kiện KKT.

> [!thm] Định lý 1 (Bài toán Quy hoạch Đối ngẫu SVM)
> Nghiệm đối ngẫu $\alpha^*$ là nghiệm cực đại của bài toán quy hoạch toàn phương lõm sau:
> $$\max_{\alpha \in \mathbb{R}^m} \mathcal{G}(\alpha) = \sum_{i=1}^m \alpha_i - \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j y^{(i)} y^{(j)} (x^{(i)})^\top x^{(j)}$$
> thỏa mãn hệ ràng buộc:
> $$\alpha_i \ge 0, \quad \forall i = 1, \dots, m$$
> $$\sum_{i=1}^m \alpha_i y^{(i)} = 0$$

> [!prf]
> Hàm đối ngẫu Lagrange được định nghĩa là cận dưới đúng của $\mathcal{L}$ theo các biến nguyên thủy:
> $$\mathcal{G}(\alpha) = \inf_{\omega \in \mathbb{R}^n, b \in \mathbb{R}} \mathcal{L}(\omega, b, \alpha)$$
> Vì $\mathcal{L}(\omega, b, \alpha)$ khả vi và lồi đối với $(\omega, b)$, điểm cực tiểu toàn cục thỏa mãn điều kiện dừng KKT (Stationarity):
> $$\nabla_\omega \mathcal{L}(\omega, b, \alpha) = \omega - \sum_{i=1}^m \alpha_i y^{(i)} x^{(i)} = 0 \implies \omega = \sum_{i=1}^m \alpha_i y^{(i)} x^{(i)}$$
> $$\frac{\partial \mathcal{L}}{\partial b}(\omega, b, \alpha) = -\sum_{i=1}^m \alpha_i y^{(i)} = 0 \implies \sum_{i=1}^m \alpha_i y^{(i)} = 0$$
> Thế các hệ thức dừng vào hàm Lagrange, ta rút gọn từng thành phần:
> $$\sum_{i=1}^m \alpha_i y^{(i)} (\omega^\top x^{(i)} + b) = \omega^\top \left( \sum_{i=1}^m \alpha_i y^{(i)} x^{(i)} \right) + b \sum_{i=1}^m \alpha_i y^{(i)} = \|\omega\|^2 + 0 = \|\omega\|^2$$
> Do đó:
> $$\mathcal{L}(\omega, b, \alpha) = \frac{1}{2}\|\omega\|^2 - \|\omega\|^2 + \sum_{i=1}^m \alpha_i = \sum_{i=1}^m \alpha_i - \frac{1}{2}\|\omega\|^2$$
> Khai triển $\|\omega\|^2$ qua dạng toàn phương của các vector dữ liệu:
> $$\|\omega\|^2 = \left( \sum_{i=1}^m \alpha_i y^{(i)} x^{(i)} \right)^\top \left( \sum_{j=1}^m \alpha_j y^{(j)} x^{(j)} \right) = \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j y^{(i)} y^{(j)} (x^{(i)})^\top x^{(j)}$$
> Thu được hàm đối ngẫu:
> $$\mathcal{G}(\alpha) = \sum_{i=1}^m \alpha_i - \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m \alpha_i \alpha_j y^{(i)} y^{(j)} (x^{(i)})^\top x^{(j)}$$
> Kết hợp với điều kiện khả thi đối ngẫu $\alpha_i \ge 0$ và ràng buộc đẳng thức $\sum_{i=1}^m \alpha_i y^{(i)} = 0$, bài toán đối ngẫu được thiết lập trọn vẹn.

> [!prp] Mệnh đề 1 (Độ lệch bù và Tính thưa của Nghiệm)
> Tại điểm tối ưu, điều kiện độ lệch bù KKT (Complementary Slackness) đòi hỏi:
> $$\alpha_i^* \left[ y^{(i)}(\omega^{*\top} x^{(i)} + b^*) - 1 \right] = 0, \quad \forall i = 1, \dots, m$$
> Từ đây, tập chỉ số mẫu $\{1, \dots, m\}$ được phân hoạch thành hai tập rời nhau:
> 1. Tập các điểm ngoài lề: $y^{(i)}(\omega^{*\top} x^{(i)} + b^*) > 1 \implies \alpha_i^* = 0$.
> 2. Tập các Vector Hỗ trợ $\mathcal{S}$: $\alpha_i^* > 0 \implies y^{(i)}(\omega^{*\top} x^{(i)} + b^*) = 1$.

> [!prf]
> Tích $\alpha_i^* [y^{(i)}(\omega^{*\top} x^{(i)} + b^*) - 1] = 0$ bắt buộc ít nhất một trong hai thừa số phải bằng 0:
> Nếu mẫu $x^{(i)}$ thỏa mãn nghiêm ngặt $y^{(i)}(\omega^{*\top} x^{(i)} + b^*) > 1$, thừa số thứ hai khác 0, suy ra $\alpha_i^* = 0$.
> Ngược lại, nếu $\alpha_i^* > 0$, thừa số thứ hai triệt tiêu, tức $y^{(i)}(\omega^{*\top} x^{(i)} + b^*) = 1$. Điều này chứng minh hình học rằng $x^{(i)}$ nằm chính xác trên một trong hai siêu phẳng biên lề:
> $$H_{\pm} = \{x \in \mathbb{R}^n \mid \omega^{*\top} x + b^* = \pm 1\}$$

Từ Mệnh đề 1, vector pháp tuyến tối ưu $\omega^*$ hoàn toàn được biểu diễn qua tập con các Vector Hỗ trợ $\mathcal{S} = \{i \in \{1, \dots, m\} \mid \alpha_i^* > 0\}$:
$$\omega^* = \sum_{i \in \mathcal{S}} \alpha_i^* y^{(i)} x^{(i)}$$
Tính chất này thể hiện tính thưa (sparsity) của nghiệm đối ngẫu: việc loại bỏ hoặc dịch chuyển bất kỳ mẫu dữ liệu nào không thuộc tập $\mathcal{S}$ mà vẫn thỏa mãn ràng buộc lề sẽ không làm thay đổi vị trí của siêu phẳng phân tách tối ưu.

> [!thm] Định lý 2 (Xác định Hệ số Tự do Tối ưu $b^*$)
> Với mọi chỉ số $k \in \mathcal{S}$, hệ số tự do $b^*$ được xác định giải tích bởi:
> $$b^* = y^{(k)} - \omega^{*\top} x^{(k)}$$
> Để triệt tiêu sai số số học trong thực nghiệm tính toán, $b^*$ được xác định bằng trung bình cộng trên toàn bộ tập $\mathcal{S}$:
> $$b^* = \frac{1}{|\mathcal{S}|} \sum_{k \in \mathcal{S}} \left( y^{(k)} - \omega^{*\top} x^{(k)} \right)$$

> [!prf]
> Với mỗi $k \in \mathcal{S}$, do $x^{(k)}$ nằm trên biên lề, ta có $y^{(k)}(\omega^{*\top} x^{(k)} + b^*) = 1$.
> Vì $y^{(k)} \in \{-1, +1\}$, nhân hai vế với $y^{(k)}$ (chú ý rằng $(y^{(k)})^2 = 1$):
> $$\omega^{*\top} x^{(k)} + b^* = y^{(k)} \implies b^* = y^{(k)} - \omega^{*\top} x^{(k)}$$
> Lấy trung bình cộng đẳng thức trên với mọi $k \in \mathcal{S}$, ta thu được công thức ước lượng ổn định số học của $b^*$.

> [!def] Định nghĩa 2 (Hàm Quyết định Tuyến tính Đối ngẫu)
> Kết hợp biểu diễn của $\omega^*$ và $b^*$, hàm quyết định nhị phân phân loại mẫu mới $x \in \mathbb{R}^n$ có dạng:
> $$f(x) = \operatorname{sign}\left( \omega^{*\top} x + b^* \right) = \operatorname{sign}\left( \sum_{i \in \mathcal{S}} \alpha_i^* y^{(i)} (x^{(i)})^\top x + b^* \right)$$

Cấu trúc của hàm đối ngẫu $\mathcal{G}(\alpha)$ và hàm quyết định $f(x)$ chỉ ra một kết quả giải tích quan trọng: toàn bộ thuật toán huấn luyện và suy luận phụ thuộc duy nhất vào tích vô hướng giữa các điểm dữ liệu $(x^{(i)})^\top x^{(j)}$ mà không cần thao tác trực tiếp trên tọa độ của $\omega^*$. Đây là tiền đề toán học trực tiếp cho phép thay thế dạng song tuyến tính Euclid bằng một hàm hạt nhân tổng quát $K(x^{(i)}, x^{(j)})$ trong Không gian Hilbert ở Phần 4.