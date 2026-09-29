
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