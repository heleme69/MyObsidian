
# Phần 1: Bài toán Phân loại Tuyến tính, Tối đa hóa Lề và Đối ngẫu Lagrange

Trong phần này, chúng ta thiết lập nền tảng hình học và giải tích của thuật toán Máy Vector Hỗ trợ trong không gian nội tích hữu hạn chiều. Mục tiêu là xây dựng bài toán tối ưu lồi nguyên thủy, chứng minh sự tồn tại và duy nhất của nghiệm, sau đó áp dụng lý thuyết Karush-Kuhn-Tucker (KKT) để thiết lập dạng đối ngẫu. Quan sát giải tích mấu chốt thu được là cấu trúc của bài toán hoàn toàn được xác định bởi dạng song tuyến tính của các điểm dữ liệu, tạo tiền đề để tổng quát hóa lên các Không gian Hilbert có hạt nhân tái tạo (RKHS).

> [!def] Định nghĩa 1 (Không gian giả thuyết và Siêu phẳng affine)
> Giả sử $\mathcal{H}$ là một không gian nội tích trên trường số thực $\mathbb{R}$ với tích vô hướng $\langle\cdot,\cdot\rangle$ và chuẩn cảm sinh $\|x\|=\sqrt{\langle x,x\rangle}$. Ta được cung cấp tập dữ liệu huấn luyện $\mathcal{D}=\{(x_i,y_i)\}_{i=1}^m$, trong đó mẫu $x_i\in\mathcal{H}$ và nhãn $y_i\in\{-1,+1\}$. Giả sử $\mathcal{D}$ chứa ít nhất một mẫu thuộc mỗi lớp.
> Một siêu phẳng affine trong $\mathcal{H}$ được xác định bởi phiếm hàm tuyến tính liên tục $f(x)=\langle w,x\rangle+b$ với vector pháp tuyến $w\in\mathcal{H}\setminus\{0\}$ và độ lệch $b\in\mathbb{R}$. Tập hợp các điểm thuộc siêu phẳng là:
> $$H_{w,b}=\{x\in\mathcal{H}\mid\langle w,x\rangle+b=0\}$$
> Tập $\mathcal{D}$ được gọi là phân tách tuyến tính nếu tồn tại cặp $(w,b)$ sao cho $y_i(\langle w,x_i\rangle+b)>0$ với mọi $i=1,\dots,m$.

> [!def] Định nghĩa 2 (Lề đại số và Lề hình học)
> Đối với mẫu $(x_i,y_i)\in\mathcal{D}$ và siêu phẳng $H_{w,b}$, lề đại số được định nghĩa là:
> $$\hat{\gamma}_i(w,b)=y_i(\langle w,x_i\rangle+b)$$
> Lề hình học của mẫu $(x_i,y_i)$ đến $H_{w,b}$ là khoảng cách trực giao từ $x_i$ đến siêu phẳng:
> $$\gamma_i(w,b)=\frac{y_i(\langle w,x_i\rangle+b)}{\|w\|}$$
> Lề hình học của toàn bộ tập dữ liệu $\mathcal{D}$ đối với $H_{w,b}$ là cận dưới đúng của lề hình học trên toàn tập mẫu:
> $$\gamma(w,b)=\min_{i=1,\dots,m}\gamma_i(w,b)$$

> [!prp] Mệnh đề 1 (Tính bất biến tỷ lệ và Dạng chuẩn tắc của lề)
> Lề hình học $\gamma(w,b)$ bất biến qua phép nhân vô hướng dương đối với cặp $(w,b)$. Từ đó, luôn tồn tại một biểu diễn chuẩn tắc $(w^*,b^*)$ cho siêu phẳng sao cho lề đại số cực tiểu của tập dữ liệu bằng $1$.

> [!prf]
> Xét hằng số $c>0$ bất kỳ. Thực hiện phép biến đổi $(w',b')=(cw,cb)$, lề hình học tại điểm $x_i$ là:
> $$\gamma_i(cw,cb)=\frac{y_i(\langle cw,x_i\rangle+cb)}{\|cw\|}=\frac{c\cdot y_i(\langle w,x_i\rangle+b)}{c\|w\|}=\gamma_i(w,b)$$
> Do $\mathcal{D}$ phân tách tuyến tính, tồn tại $(w_0,b_0)$ sao cho $\hat{\gamma}_{\min}=\min_i y_i(\langle w_0,x_i\rangle+b_0)>0$.
> Chọn hằng số chuẩn hóa $c=\frac{1}{\hat{\gamma}_{\min}}$ và đặt $w^*=cw_0,b^*=cb_0$. Khi đó:
> $$\min_{i=1,\dots,m}y_i(\langle w^*,x_i\rangle+b^*)=c\cdot\hat{\gamma}_{\min}=1$$
> Dưới hệ điều kiện chuẩn tắc này, lề hình học của tập dữ liệu trở thành $\gamma(w^*,b^*)=\frac{1}{\|w^*\|}$.

Dựa trên Mệnh đề 1, việc tìm siêu phẳng có lề hình học cực đại tương đương với việc cực đại hóa $\frac{1}{\|w\|}$. Do tính đơn điệu nghịch đảo trên miền dương, bài toán trở thành cực tiểu hóa $\frac{1}{2}\|w\|^2$.

> [!thm] Định lý 1 (Bài toán tối ưu nguyên thủy - Primal Problem)
> Việc tìm siêu phẳng phân tách có lề hình học cực đại tương đương với bài toán quy hoạch toàn phương:
> $$\min_{w\in\mathcal{H},b\in\mathbb{R}}\frac{1}{2}\|w\|^2$$
> Chịu sự ràng buộc:
> $$y_i(\langle w,x_i\rangle+b)\ge 1,\quad\forall i=1,\dots,m$$
> Bài toán này luôn tồn tại duy nhất một nghiệm tối ưu $(w^*,b^*)$.

> [!prf]
> Đặt $f(w,b)=\frac{1}{2}\|w\|^2$ là hàm mục tiêu và tập ràng buộc khả thi (feasible set) $\mathcal{C}=\{(w,b)\in\mathcal{H}\times\mathbb{R}\mid y_i(\langle w,x_i\rangle+b)\ge 1,\forall i\}$.
> Vì $\mathcal{C}$ là giao của hữu hạn các nửa không gian đóng nên $\mathcal{C}$ là một tập lồi, đóng. Do giả thiết $\mathcal{D}$ phân tách tuyến tính, $\mathcal{C}\neq\emptyset$.
> Hàm $f(w,b)$ là hàm lồi liên tục trên $\mathcal{H}\times\mathbb{R}$ và lồi chặt theo biến $w$. Hình chiếu của $\mathcal{C}$ lên không gian $\mathcal{H}$ của $w$ là một tập lồi đóng không chứa gốc tọa độ $0$. Theo Định lý hình chiếu trên không gian Hilbert, tồn tại duy nhất vector $w^*\in\mathcal{H}$ có chuẩn cực tiểu.
> Đối với thành phần $b^*$, do hàm mục tiêu không phụ thuộc trực tiếp vào $b$, ta xét các ràng buộc $b\ge 1-\langle w^*,x_i\rangle$ (với $y_i=1$) và $b\le -1-\langle w^*,x_j\rangle$ (với $y_j=-1$). Vì $\mathcal{D}$ chứa cả hai lớp và lề được tối đa hóa, hai cận này bắt buộc phải chạm nhau tại trạng thái tối ưu, tạo thành phương trình xác định duy nhất giá trị $b^*=-\frac{\max_{y_i=-1}\langle w^*,x_i\rangle+\min_{y_j=1}\langle w^*,x_j\rangle}{2}$.

Để chuyển đổi bài toán nguyên thủy sang không gian đối ngẫu, ta sử dụng lý thuyết tối ưu hóa lồi KKT.

> [!thm] Định lý 2 (Điều kiện Karush-Kuhn-Tucker)
> Xét bài toán tối ưu lồi với hàm mục tiêu $f(x)$ khả vi và các ràng buộc bất đẳng thức affine $g_i(x)\le 0$. Nếu tập khả thi khác rỗng, điều kiện Slater tự động được thỏa mãn. Khi đó, $x^*$ là nghiệm tối ưu khi và chỉ khi tồn tại vector nhân tử Lagrange $\alpha^*\ge 0$ thỏa mãn:
> 1. Điều kiện tĩnh (Stationarity): $\nabla f(x^*)+\sum_i\alpha_i^*\nabla g_i(x^*)=0$
> 2. Tính khả thi nguyên thủy (Primal feasibility): $g_i(x^*)\le 0$
> 3. Tính khả thi đối ngẫu (Dual feasibility): $\alpha_i^*\ge 0$
> 4. Độ lệch bù (Complementary slackness): $\alpha_i^*g_i(x^*)=0$

Định lý 2 cung cấp bộ công cụ giải tích để khai triển trực tiếp Hàm Lagrange của bài toán phân loại tuyến tính.

> [!def] Định nghĩa 3 (Hàm Lagrange)
> Với các ràng buộc $g_i(w,b)=1-y_i(\langle w,x_i\rangle+b)\le 0$ là các hàm affine, ta xác định vector nhân tử Lagrange $\alpha=(\alpha_1,\dots,\alpha_m)^\top\in\mathbb{R}^m_{\ge 0}$. Hàm Lagrange $\mathcal{L}:\mathcal{H}\times\mathbb{R}\times\mathbb{R}^m_{\ge 0}\to\mathbb{R}$ là:
> $$\mathcal{L}(w,b,\alpha)=\frac{1}{2}\|w\|^2+\sum_{i=1}^m\alpha_i\left[1-y_i(\langle w,x_i\rangle+b)\right]$$

> [!thm] Định lý 3 (Dạng đối ngẫu và Định lý biểu diễn tiền đề)
> Nghiệm nguyên thủy $w^*$ của bài toán phân loại tuyến tính thuộc không gian con sinh bởi các vector đặc trưng dữ liệu. Quá trình giải có thể quy về bài toán đối ngẫu chỉ phụ thuộc vào tích vô hướng của các cặp mẫu huấn luyện $\langle x_i,x_j\rangle$.

> [!prf]
> Áp dụng điều kiện tĩnh từ Định lý KKT, ta tính đạo hàm Fréchet của $\mathcal{L}$ theo $w$ và đạo hàm riêng theo $b$, sau đó đặt bằng $0$:
> $$\nabla_w\mathcal{L}(w,b,\alpha)=w-\sum_{i=1}^m\alpha_i y_i x_i=0\implies w^*=\sum_{i=1}^m\alpha_i y_i x_i$$
> $$\frac{\partial\mathcal{L}}{\partial b}(w,b,\alpha)=-\sum_{i=1}^m\alpha_i y_i=0\implies\sum_{i=1}^m\alpha_i y_i=0$$
> Hệ thức $w^*$ chỉ ra rằng vector pháp tuyến tối ưu là một tổ hợp tuyến tính của các mẫu huấn luyện. Đây là dạng thức cơ bản của Định lý Biểu diễn (Representer Theorem).
> Thay các hệ thức tối ưu này vào Hàm Lagrange, ta thu được hàm mục tiêu đối ngẫu $W(\alpha)$:
> $$\mathcal{L}(w^*,b,\alpha)=\frac{1}{2}\left\langle\sum_{i=1}^m\alpha_i y_i x_i,\sum_{j=1}^m\alpha_j y_j x_j\right\rangle-\sum_{i=1}^m\alpha_i y_i\left\langle\sum_{j=1}^m\alpha_j y_j x_j,x_i\right\rangle-b\sum_{i=1}^m\alpha_i y_i+\sum_{i=1}^m\alpha_i$$
> Áp dụng điều kiện $\sum_{i=1}^m\alpha_i y_i=0$, số hạng chứa $b$ triệt tiêu. Phân rã tính chất song tuyến tính của tích vô hướng:
> $$W(\alpha)=\frac{1}{2}\sum_{i=1}^m\sum_{j=1}^m\alpha_i\alpha_j y_i y_j\langle x_i,x_j\rangle-\sum_{i=1}^m\sum_{j=1}^m\alpha_i\alpha_j y_i y_j\langle x_i,x_j\rangle+\sum_{i=1}^m\alpha_i$$
> Rút gọn biểu thức, bài toán đối ngẫu chuyển thành việc cực đại hóa $W(\alpha)$:
> $$\max_{\alpha\in\mathbb{R}^m}\sum_{i=1}^m\alpha_i-\frac{1}{2}\sum_{i=1}^m\sum_{j=1}^m\alpha_i\alpha_j y_i y_j\langle x_i,x_j\rangle$$
> Chịu sự ràng buộc:
> $$\alpha_i\ge 0,\quad\forall i=1,\dots,m$$
> $$\sum_{i=1}^m\alpha_i y_i=0$$

Dựa trên điều kiện KKT về độ lệch bù (Complementary slackness):
$$\alpha_i^*\left[1-y_i(\langle w^*,x_i\rangle+b^*)\right]=0,\quad\forall i=1,\dots,m$$
Ta thiết lập được tính thưa (sparsity) của tập nghiệm đối ngẫu: nhân tử $\alpha_i^*$ chỉ nhận giá trị dương nghiêm ngặt khi và chỉ khi mẫu $x_i$ nằm chính xác trên biên lề, tức $y_i(\langle w^*,x_i\rangle+b^*)=1$. Các điểm $x_i$ tương ứng với $\alpha_i^*>0$ chính là các Vector Hỗ trợ. Điểm dữ liệu mới $x\in\mathcal{H}$ được phân loại bằng hàm quyết định:
$$f(x)=\text{sign}\left(\sum_{i=1}^m\alpha_i^* y_i\langle x_i,x\rangle+b^*\right)$$

Định lý 3 đã chỉ ra rằng ranh giới quyết định không đòi hỏi sự tồn tại tường minh của vector tham số $w^*$ hay các phép toán hình học trên toàn bộ $\mathcal{H}$. Cấu trúc giải tích duy nhất quyết định hàm mục tiêu và bộ phân loại là phiếm hàm tích vô hướng $\langle\cdot,\cdot\rangle$. Tiền đề toán học này cho phép chúng ta thay thế trực tiếp tích vô hướng bằng một hàm hạch (Kernel) thỏa mãn điều kiện Mercer, mở đường cho các phân tích giải tích hàm sâu hơn.