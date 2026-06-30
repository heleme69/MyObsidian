## 1. Chuỗi Laurent và Điểm Dị Thường Cô Lập

### 1.1. Định nghĩa Chuỗi Laurent

> [!thm] Định lý 1.1: Sự tồn tại và duy nhất của chuỗi Laurent
> Nếu hàm số $f(z)$ giải tích trong một vành khuyên tâm $a$ xác định bởi miền $r < |z - a| < R$ (với $0 \le r < R \le \infty$), thì tại mọi điểm $z$ thuộc vành khuyên này, $f(z)$ được biểu diễn duy nhất dưới dạng chuỗi hai chiều:
> $$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - a)^n$$
> Trong đó, các hệ số $a_n$ được xác định thông qua tích phân biên:
> $$a_n = \frac{1}{2\pi i} \int_{\gamma} \frac{f(z)}{(z - a)^{n+1}} dz, \quad n \in \mathbb{Z}$$
> với $\gamma$ là bất kỳ đường cong kín đơn giản nào bao quanh tâm $a$ và nằm trọn trong vành khuyên giải tích.

Để thuận tiện cho việc phân tích tính chất của điểm dị thường, chuỗi Laurent thường được chia thành hai phần riêng biệt:
$$f(z) = \underbrace{\sum_{n=1}^{\infty} \frac{a{-n}}{(z - a)^n}}_{\text{Phần chính (Principal Part)}} + \underbrace{\sum_{n=0}^{\infty} a_n (z - a)^n}_{\text{Phần đều (Analytic Part)}}$$

### 1.2. Phân loại Điểm Dị Thường Cô Lập

> [!def] Định nghĩa 1.2: Điểm dị thường cô lập
> Điểm $z = a$ được gọi là điểm dị thường cô lập của hàm số $f(z)$ nếu tồn tại một bán kính $R > 0$ sao cho $f(z)$ giải tích trên lân cận thủng $0 < |z - a| < R$, nhưng không giải tích tại chính điểm $a$.

Dựa vào cấu trúc hình học của **Phần chính** trong khai triển chuỗi Laurent tại miền lân cận thủng của tâm $a$, ta phân chia điểm dị thường cô lập thành ba loại chính:

1. **Điểm dị thường bỏ được (Removable Singularity):** Phần chính của chuỗi Laurent không chứa bất kỳ số hạng nào, tức là $a_{-n} = 0$ với mọi $n \ge 1$. Khi đó:
   $$f(z) = a_0 + a_1(z-a) + a_2(z-a)^2 + \dots$$
   Theo định lý Riemann, $z=a$ là dị thường bỏ được khi và chỉ khi $\lim_{z \to a} f(z)$ tồn tại hữu hạn, hoặc $f(z)$ bị chặn trong lân cận của $a$.

2. **Cực điểm bậc $m$ (Pole of order $m$):** Phần chính của chuỗi Laurent chỉ chứa một số hữu hạn các số hạng mũ âm và số hạng mũ âm lớn nhất dừng lại ở chỉ số $-m$ ($m \ge 1$). Nghĩa là:
   $$a_{-m} \neq 0 \quad \text{và} \quad a_{-n} = 0 \quad \forall n > m$$
   Khai triển Laurent lúc này có dạng:
   $$f(z) = \frac{a_{-m}}{(z-a)^m} + \dots + \frac{a_{-1}}{z-a} + \sum_{n=0}^{\infty} a_n (z-a)^n$$
   Nếu $m=1$, điểm $z=a$ được gọi là cực điểm đơn.

3. **Điểm dị thường cốt yếu (Essential Singularity):** Phần chính của chuỗi Laurent chứa vô hạn các số hạng mũ âm khác không, tức là có vô số hệ số $a_{-n} \neq 0$ khi $n \to \infty$. Theo định lý Casorati-Weierstrass, trong lân cận của điểm dị thường cốt yếu, quỹ đạo của hàm số $f(z)$ tiệm cận trù mật tới mọi giá trị phức thuộc $\mathbb{C}$.

### 1.3. Định lý nhận biết Cực điểm bằng Giới hạn

> [!thm] Định lý 1.3: Điều kiện cần và đủ của cực điểm bậc $m$
> Điểm $z = a$ là cực điểm bậc $m$ của hàm số $f(z)$ khi và chỉ khi giới hạn sau tồn tại và là một số phức khác không:
> $$\lim_{z \to a} \left[ (z-a)^m f(z) \right] = L \neq 0$$

> [!prf] Chứng minh Định lý 1.3
> **Chiều thuận ($\Rightarrow$):**
> Giả sử $z=a$ là cực điểm bậc $m$. Theo cấu trúc biểu diễn chuỗi Laurent, ta nhân cả hai vế cho biểu thức đa thức $(z-a)^m$:
> $$(z-a)^m f(z) = a_{-m} + a_{-(m-1)}(z-a) + \dots + a_{-1}(z-a)^{m-1} + \sum_{n=0}^{\infty} a_n (z-a)^{n+m}$$
> Lấy giới hạn hai vế khi $z \to a$, tất cả các số hạng chứa thừa số $(z-a)$ đều triệt tiêu về $0$, chỉ còn lại hằng số đầu tiên:
> $$\lim_{z \to a} \left[ (z-a)^m f(z) \right] = a_{-m}$$
> Vì theo định nghĩa cực điểm bậc $m$, hệ số $a_{-m} \neq 0$, nên ta đặt $L = a_{-m} \neq 0$. Chứng minh hoàn tất chiều xuôi.
> 
> **Chiều nghịch ($\Leftarrow$):**
> Ngược lại, giả sử tồn tại giới hạn $\lim_{z \to a} [(z-a)^m f(z)] = L \neq 0$. Xét hàm bổ trợ:
> $$g(z) = (z-a)^m f(z)$$
> Do $f(z)$ giải tích trên lân cận thủng của $a$, nên $g(z)$ cũng giải tích trên lân cận thủng của $a$. Vì giới hạn của $g(z)$ khi $z \to a$ bằng $L$ (hữu hạn), nên $z=a$ là điểm dị thường bỏ được của $g(z)$. Ta có thể khai triển Taylor cho $g(z)$ quanh tâm $a$:
> $$g(z) = b_0 + b_1(z-a) + b_2(z-a)^2 + \dots$$
> với $b_0 = \lim_{z \to a} g(z) = L \neq 0$. Chia cả hai vế cho $(z-a)^m$, ta thu được biểu thức của $f(z)$:
> $$f(z) = \frac{b_0}{(z-a)^m} + \frac{b_1}{(z-a)^{m-1}} + \dots + \frac{b_{m-1}}{z-a} + b_m + b_{m+1}(z-a) + \dots$$
> Chuỗi này chính là khai triển Laurent của $f(z)$ quanh $a$. Do $b_0 = L \neq 0$, phần chính dừng lại chính xác tại lũy thừa bậc âm thứ $m$. Vậy $z=a$ là cực điểm bậc $m$. 

## 2. Lý Thuyết Thặng Dư và Bản Chất của Phương Pháp Heaviside

### 2.1. Định nghĩa Thặng dư (Residue)

> [!def] Định nghĩa 2.1: Thặng dư
> Thặng dư của hàm số $f(z)$ tại điểm dị thường cô lập $z = a$, ký hiệu là $\text{Res}(f, a)$, là hệ số $a_{-1}$ của số hạng lũy thừa $(z-a)^{-1}$ trong khai triển chuỗi Laurent của $f(z)$ tại lân cận thủng của điểm $a$.

Từ công thức tính hệ số chuỗi Laurent, với chỉ số $n = -1$, ta có mối liên hệ trực tiếp với phép toán tích phân phức:
$$\text{Res}(f, a) = a_{-1} = \frac{1}{2\pi i} \int_{\gamma} f(z) dz \implies \int_{\gamma} f(z) dz = 2\pi i \cdot \text{Res}(f, a)$$

### 2.2. Hệ quả hình học: Kết nối phương pháp tách Heaviside

Xét phân thức hữu tỉ tổng quát $R(z) = \frac{P(z)}{Q(z)}$, trong đó $P(z)$ và $Q(z)$ là các đa thức đại số không có nghiệm chung, và thỏa mãn điều kiện bậc: **$\deg P < \deg Q$**. 

Giả sử đa thức mẫu số $Q(z)$ có $k$ nghiệm phân biệt $z_1, z_2, \dots, z_k$, đều là các nghiệm đơn. 

> [!thm] Định lý 2.2: Phân rã phân thức đơn giản (Partial Fraction Decomposition)
> Mọi hàm phân thức hữu tỉ $R(z)$ thỏa mãn các điều kiện trên đều có thể biểu diễn duy nhất dưới dạng tổng của các phân thức bậc nhất:
> $$R(z) = \frac{P(z)}{Q(z)} = \sum_{j=1}^{k} \frac{A_j}{z - z_j}$$
> Trong đó, các hằng số $A_j$ chính là thặng dư của hàm $R(z)$ tại các cực điểm $z_j$.

> [!prf] Chứng minh Định lý 2.2 (Sử dụng Định lý Liouville)
> Vì $Q(z)$ có các nghiệm đơn $z_1, \dots, z_k$, hàm $R(z)$ có chính xác $k$ cực điểm đơn. Tại mỗi cực điểm $z_j$, phần chính của khai triển Laurent có dạng $\frac{A_j}{z-z_j}$, với $A_j = \text{Res}(R, z_j)$.
> 
> Ta định nghĩa một hàm bổ trợ $f(z)$ bằng cách lấy hàm $R(z)$ ban đầu trừ đi toàn bộ các phần chính của nó tại tất cả các cực điểm:
> $$f(z) = R(z) - \sum_{j=1}^{k} \frac{A_j}{z - z_j}$$
> 
> Theo cách xây dựng này, tại mọi điểm $z_j$, hàm $f(z)$ đã bị triệt tiêu đi phần kì dị gây ra vô cùng. Do đó, các điểm $z_j$ trở thành các **điểm dị thường bỏ được** của $f(z)$. Bằng cách gán giá trị giới hạn tại các điểm này, $f(z)$ có thể được mở rộng thành một hàm giải tích trên toàn bộ mặt phẳng phức $\mathbb{C}$ (hay còn gọi là **Hàm nguyên - Entire function**).
> 
> Mặt khác, xét hành vi của $f(z)$ tại vô cực ($|z| \to \infty$):
> - Theo giả thiết $\deg P < \deg Q$, giới hạn của phân thức ban đầu: $\lim_{|z| \to \infty} R(z) = 0$.
> - Tổng các phân thức bậc nhất cũng tiến về $0$: $\lim_{|z| \to \infty} \sum_{j=1}^{k} \frac{A_j}{z - z_j} = 0$.
> 
> Suy ra: $\lim_{|z| \to \infty} f(z) = 0$.
> 
> Vì $f(z)$ tiến về $0$ tại vô cực, nó buộc phải bị chặn trên toàn mặt phẳng phức. Áp dụng **Định lý Liouville** (mọi hàm nguyên bị chặn thì phải là hằng số), ta kết luận $f(z) = C$. Do giới hạn tại vô cực bằng $0$, hằng số này bắt buộc phải là $C = 0$.
> 
> Vậy $f(z) \equiv 0$ với mọi $z \in \mathbb{C}$, dẫn đến:
> $$R(z) = \sum_{j=1}^{k} \frac{A_j}{z - z_j}$$
> Sự tồn tại của phép tách phân thức đã được chứng minh.


> [!prp] Mệnh đề 2.3: Bản chất giải tích của hằng số Heaviside
> Hằng số tách phân thức $A_j$ trong phương pháp Heaviside hoàn toàn đồng nhất với thặng dư phức của hàm số tại cực điểm đơn $z_j$:
> $$A_j = \text{Res}(R, z_j) = \lim_{z \to z_j} \left[ (z - z_j) R(z) \right] = \frac{P(z_j)}{Q'(z_j)}$$

> [!prf] Chứng minh Mệnh đề 2.2
> **Bước 1: Cô lập thành phần kì dị hình học**
> Vì $z_j$ là nghiệm đơn của đa thức mẫu số $Q(z)$, theo định lý Bezout, ta có thể phân tích nhân tử mẫu số thành:
> $$Q(z) = (z-z_j)Q_1(z)$$
> với điều kiện cốt lõi là $Q_1(z_j) \neq 0$ và tử số $P(z_j) \neq 0$. Viết lại hàm số dưới dạng tách biệt phân thức kì dị:
> $$R(z) = \frac{1}{z - z_j} \cdot \left[ \frac{P(z)}{Q_1(z)} \right]$$
> 
> **Bước 2: Xây dựng chuỗi Taylor cho phần chỉnh quy**
> Xét hàm bổ trợ $g(z) = \frac{P(z)}{Q_1(z)}$. Vì tử và mẫu đều là đa thức, và hằng số mẫu $Q_1(z_j) \neq 0$, hàm $g(z)$ hoàn toàn **giải tích** tại điểm $z = z_j$. Do tính chính quy này, $g(z)$ được khai triển thành một chuỗi Taylor lũy thừa dương duy nhất xung quanh tâm $z_j$:
> $$g(z) = g(z_j) + \frac{g'(z_j)}{1!}(z - z_j) + \frac{g''(z_j)}{2!}(z - z_j)^2 + \dots = \sum_{n=0}^{\infty} c_n(z - z_j)^n$$
> Trong đó, hệ số tự do đầu tiên có giá trị: $c_0 = g(z_j) = \frac{P(z_j)}{Q_1(z_j)}$.
> 
> **Bước 3: Lắp ghép cấu trúc chuỗi Laurent**
> Thay chuỗi Taylor của $g(z)$ ngược trở lại hệ phương trình của $R(z)$:
> $$R(z) = \frac{1}{z - z_j} \left[ c_0 + c_1(z - z_j) + c_2(z - z_j)^2 + c_3(z - z_j)^3 + \dots \right]$$
> Phân phối nhân tử đại số $\frac{1}{z - z_j}$ vào từng số hạng nằm bên trong ngoặc:
> $$R(z) = \frac{c_0}{z - z_j} + c_1 + c_2(z - z_j) + c_3(z - z_j)^2 + \dots$$
> Đổi lại ký hiệu chỉ số chuỗi theo định nghĩa chuẩn tắc của khai triển Laurent (đặt $a_{-1} = c_0$, và $a_n = c_{n+1}$ cho miền chỉ số dương $n \ge 0$):
> $$R(z) = \frac{a_{-1}}{z - z_j} + \sum_{n=0}^{\infty} a_n(z - z_j)^n$$
> Kết quả biểu diễn toán học trên chứng minh rõ ràng phần chính của chuỗi Laurent xung quanh nghiệm đơn $z_j$ chỉ chứa duy nhất một số hạng bậc âm thứ nhất, khẳng định $z_j$ là cực điểm đơn. Theo định nghĩa thặng dư:
> $$\text{Res}(R, z_j) = a_{-1} \equiv c_0 = \frac{P(z_j)}{Q_1(z_j)}$$
> 
> Mặt khác, xét phép tính giới hạn đại số Heaviside (Cover-up Method):
> $$A_j = \lim_{z \to z_j} \left[ (z-z_j) R(z) \right] = \lim_{z \to z_j} \frac{P(z)}{Q_1(z)} = \frac{P(z_j)}{Q_1(z_j)}$$
> Đồng thời, từ định nghĩa đạo hàm: $Q'(z_j) = \lim_{z \to z_j} \frac{Q(z)-Q(z_j)}{z-z_j} = Q_1(z_j)$. Do đó:
> $$A_j = \frac{P(z_j)}{Q'(z_j)} \equiv \text{Res}(R, z_j)$$
> Chứng minh hoàn tất.

**Mở rộng cho mẫu số có nghiệm bội:**
Nếu $Q(z)$ chứa một nhân tử nghiệm bội bậc $m$ dạng $(z-z_1)^m$, phân rã đại số yêu cầu cấu trúc:
$$R(z) = \frac{A_m}{(z-z_1)^m} + \frac{A_{m-1}}{(z-z_1)^{m-1}} + \dots + \frac{A_1}{z-z_1} + \dots$$
Thuyết thặng dư chỉ ra rằng hệ số $A_1$ đứng trước số hạng phân thức bậc nhất chính là thặng dư $\text{Res}(R, z_1)$, và công thức vi phân cấp cao của thặng dư chính là công thức tìm hệ số của Heaviside cho nghiệm bội:
$$A_1 = \text{Res}(R, z_1) = \frac{1}{(m-1)!} \lim_{z \to z_1} \frac{d^{m-1}}{dz^{m-1}} \left[ (z-z_1)^m R(z) \right]$$

## 3. Định Lý Thặng Dư Cauchy và Ứng Dụng

### 3.1. Định lý Thặng dư Cauchy

> [!thm] Định lý 3.1: Định lý Thặng dư Cauchy
> Giả sử $\Gamma$ là một đường cong kín đơn giản, được định hướng dương trong mặt phẳng phức. Nếu một hàm số $f(z)$ giải tích trên toàn bộ miền đóng bao gồm $\Gamma$ và phần không gian bên trong nó, ngoại trừ một số hữu hạn các điểm dị thường cô lập $a_1, a_2, \dots, a_k$ nằm hoàn toàn phía trong biên $\Gamma$, khi đó:
> $$\int_{\Gamma} f(z) dz = 2\pi i \sum_{j=1}^{k} \text{Res}(f, a_j)$$

> [!prf] Chứng minh Định lý 3.1
> Ta sử dụng nguyên lý biến dạng đường cong tích phân của định lý Cauchy cho miền đa liên (Multiply Connected Domains).
> 
> Bao quanh mỗi điểm dị thường cô lập $a_j$ ($j = 1, 2, \dots, k$) bằng một đường tròn nhỏ $\gamma_j$ có tâm tại $a_j$ và bán kính $\epsilon_j > 0$ đủ nhỏ. Ta chọn các bán kính $\epsilon_j$ sao cho thỏa mãn đồng thời hai điều kiện hình học:
> - Các đường tròn $\gamma_j$ nằm hoàn toàn phía trong đường cong biên lớn $\Gamma$.
> - Tất cả các đĩa tròn đóng biên bởi $\gamma_j$ không giao nhau từng đôi một, tức là $\gamma_i \cap \gamma_j = \emptyset$ với mọi $i \neq j$.
> 
> Định hướng tất cả các đường tròn nhỏ $\gamma_j$ theo chiều dương (ngược chiều kim đồng hồ). Xét miền đa liên $D$ giới hạn bên ngoài bởi $\Gamma$ và bên trong bởi các biên tròn $\gamma_1, \gamma_2, \dots, \gamma_k$. Trong miền đa liên $D$ này, hàm số $f(z)$ hoàn toàn giải tích vì tất cả các điểm kì dị $a_j$ đã bị loại bỏ một cách cô lập.
> 
> Theo Định lý tích phân Cauchy mở rộng cho miền đa liên, tích phân dọc theo biên ngoài hướng dương bằng tổng các tích phân dọc theo các biên trong hướng dương:
> $$\int_{\Gamma} f(z) dz = \sum_{j=1}^{k} \int_{\gamma_j} f(z) dz$$
> 
> Mặt khác, xét riêng từng điểm dị thường cô lập $a_j$, đường tròn $\gamma_j$ đóng vai trò là một đường cong kín đơn bao quanh một điểm kì dị duy nhất. Theo công thức liên hệ cốt lõi của thặng dư tại phương trình (2.1), tích phân trên mỗi đường tròn nhỏ $\gamma_j$ được tính bằng:
> $$\int_{\gamma_j} f(z) dz = 2\pi i \cdot \text{Res}(f, a_j)$$
> 
> Thay kết quả từng biên vào tổng hệ phương trình miền đa liên, ta thu được:
> $$\int_{\Gamma} f(z) dz = \sum_{j=1}^{k} \left[ 2\pi i \cdot \text{Res}(f, a_j) \right] = 2\pi i \sum_{j=1}^{k} \text{Res}(f, a_j)$$
> Chứng minh hoàn tất.

### 3.2. Kỹ thuật dùng chuỗi thay vì công thức đạo hàm

Khi tính thặng dư tại cực điểm bậc cao, việc đạo hàm vi phân cấp cao thường rất phức tạp và dễ nhầm chỉ số. Ta có thể khai triển trực tiếp chuỗi Maclaurin/Laurent để trích xuất hệ số $a_{-1}$.

> [!thm] Bài toán minh họa
> Tính giá trị của tích phân phức sau trên biên $|z| = 1$ định hướng dương:
> $$J = \int_{|z|=1} \frac{\sin z}{z^3} dz$$

> [!prf] Lời giải bằng kỹ thuật khai triển chuỗi trực tiếp
> Hàm số dưới dấu tích phân là $f(z) = \frac{\sin z}{z^3}$. Điểm kì dị duy nhất nằm trong biên $|z|=1$ là $z=0$. 
> 
> **Bước 1: Khai triển chuỗi**
> Ta sử dụng khai triển chuỗi Maclaurin kinh điển của hàm lượng giác $\sin z$:
> $$\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \dots = z - \frac{z^3}{6} + \frac{z^5}{120} - \dots$$
> 
> Thay chuỗi lượng giác trên vào biểu thức của hàm số $f(z)$ và thực hiện phép chia phân phối đa thức từng số hạng:
> $$f(z) = \frac{1}{z^3} \left( z - \frac{z^3}{6} + \frac{z^5}{120} - \dots \right)$$
> $$f(z) = \frac{1}{z^2} - \frac{1}{6} + \frac{z^2}{120} - \dots$$
> 
> **Bước 2: Xác định thặng dư**
> Theo định nghĩa, thặng dư $\text{Res}(f, 0)$ là hệ số $a_{-1}$ đứng trước số hạng chứa lũy thừa bậc âm thứ nhất $\frac{1}{z}$. 
> Quan sát chuỗi Laurent vừa thu được ở trên, cấu trúc chuỗi hoàn toàn vắng bóng số hạng $\frac{1}{z}$. Điều này đồng nghĩa với việc hệ số thặng dư triệt tiêu:
> $$\text{Res}(f, 0) = a_{-1} = 0$$
> *(Nhận xét thêm: Chuỗi cũng vạch rõ số hạng mũ âm lớn nhất là $\frac{1}{z^2}$, nên thực chất tâm $z=0$ chỉ là cực điểm bậc 2 của hàm số $f(z)$, không phải cực điểm bậc 3 như lầm tưởng ở mẫu số).*
> 
> **Bước 3: Tính giá trị tích phân**
> Áp dụng trực tiếp Định lý Thặng dư Cauchy:
> $$J = 2\pi i \cdot \text{Res}(f, 0) = 2\pi i \cdot 0 = 0$$
> Kết luận: Giá trị tích phân bằng 0. Biện pháp khai triển chuỗi giúp ta bỏ qua hoàn toàn các bước đạo hàm phân thức phức tạp. 

## 4. Ứng Dụng Tính Toán Các Lớp Tích Phân Thực Suy Rộng

### 4.1. Lớp Tích Phân Hàm Phân Thức Thực Trên Miền $(-\infty, \infty)$

Xét tích phân thực suy rộng $I = \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} dx$ với điều kiện đa thức mẫu số $Q(x) \neq 0$ trên trục thực $\mathbb{R}$, và bậc mẫu lớn hơn bậc tử ít nhất 2 đơn vị ($\deg Q \ge \deg P + 2$). Ta thiết lập công thức tính nhanh:
$$\int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} dx = 2\pi i \sum_{\text{Im}(a_j) > 0} \text{Res}\left( \frac{P}{Q}, a_j \right)$$

### 4.2. Bổ đề Jordan và Tích phân chứa hàm mũ (Biến đổi Fourier)

Khi tính toán các tích phân dạng Fourier chứa thành phần dao động $\int_{-\infty}^{\infty} g(x) e^{i\omega x} dx$, điều kiện xấp xỉ giảm bậc thông thường không còn đủ, ta phải sử dụng một công cụ mạnh hơn gọi là Bổ đề Jordan.

> [!thm] Bổ đề 4.1: Bổ đề Jordan
> Giả sử $\omega_R$ là nửa đường tròn tâm $O$ bán kính $R$ nằm ở nửa mặt phẳng trên ($\text{Im}(z) \ge 0$). Nếu hàm số $g(z)$ tiến liên tục về $0$ khi $|z| \to \infty$ trên nửa mặt phẳng trên, thì với mọi hằng số dương $\alpha > 0$, ta có giới hạn tích phân triệt tiêu:
> $$\lim_{R \to \infty} \int_{\omega_R} g(z) e^{i\alpha z} dz = 0$$

> [!prf] Chứng minh Bổ đề Jordan
> Biểu diễn tọa độ cực cho biến phức trên cung tròn $\omega_R$: $z = R e^{i\theta} = R(\cos \theta + i\sin \theta)$ với miền chạy chỉ số góc $\theta \in [0, \pi]$. Phép thế vi phân vi tích phân: $dz = iR e^{i\theta} d\theta$.
> Hàm mũ phức được phân rã mô-đun để đánh giá độ lớn:
> $$|e^{i\alpha z}| = |e^{i\alpha R(\cos \theta + i\sin \theta)}| = |e^{i\alpha R \cos \theta}| \cdot |e^{-\alpha R \sin \theta}| = e^{-\alpha R \sin \theta}$$
> 
> Đặt hằng số chặn trên $M(R) = \max_{z \in \omega_R} |g(z)|$. Theo giả thiết bài toán, $\lim_{R \to \infty} M(R) = 0$. Lấy mô-đun toàn bộ biểu thức tích phân đường cung tròn:
> $$\left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le \int_{0}^{\pi} |g(R e^{i\theta})| \cdot |e^{i\alpha z}| \cdot |iR e^{i\theta}| d\theta \le M(R) \cdot R \int_{0}^{\pi} e^{-\alpha R \sin \theta} d\theta$$
> Do đồ thị hàm số $\sin \theta$ đối xứng hoàn hảo qua trục tọa độ góc $\theta = \frac{\pi}{2}$, ta thu gọn miền giới hạn tích phân:
> $$\int_{0}^{\pi} e^{-\alpha R \sin \theta} d\theta = 2 \int_{0}^{\frac{\pi}{2}} e^{-\alpha R \sin \theta} d\theta$$
> 
> Áp dụng bất đẳng thức lượng giác Jordan hình học trên miền góc nhọn $0 \le \theta \le \frac{\pi}{2}$: 
> $$\sin \theta \ge \frac{2\theta}{\pi} \implies -\sin \theta \le -\frac{2\theta}{\pi}$$
> Thay thế bất đẳng thức này vào biểu thức tích phân đánh giá:
> $$\left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le 2 R M(R) \int_{0}^{\frac{\pi}{2}} e^{-\frac{2\alpha R \theta}{\pi}} d\theta$$
> Thực hiện tính nguyên hàm trực tiếp cho hàm mũ cơ bản theo biến số $\theta$:
> $$\int_{0}^{\frac{\pi}{2}} e^{-\frac{2\alpha R \theta}{\pi}} d\theta = \left. \frac{-\pi}{2\alpha R} e^{-\frac{2\alpha R \theta}{\pi}} \right|_{0}^{\frac{\pi}{2}} = \frac{\pi}{2\alpha R} \left( 1 - e^{-\alpha R} \right)$$
> Gộp kết quả đánh giá lại, thừa số bán kính $R$ ở tử số bị triệt tiêu hoàn toàn bởi hằng số tích phân ở mẫu số:
> $$\left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le 2 R M(R) \cdot \frac{\pi}{2\alpha R} \left( 1 - e^{-\alpha R} \right) = \frac{\pi M(R)}{\alpha} \left( 1 - e^{-\alpha R} \right)$$
> Vì $\lim_{R \to \infty} M(R) = 0$ và $\lim_{R \to \infty} e^{-\alpha R} = 0$ (do hằng số $\alpha > 0$), giới hạn vế phải tiến hoàn toàn về $0$. Theo nguyên lý kẹp giới hạn, tích phân trên cung $\omega_R$ triệt tiêu hoàn toàn khi $R \to \infty$. Bổ đề được chứng minh một cách tường minh và chặt chẽ. 

> [!prp] Hệ quả 4.2: Tích phân cấu trúc Fourier
> Dưới các điều kiện nghiệm đúng của Bổ đề Jordan, lớp tích phân dạng Fourier trên toàn trục thực được tính thẳng bằng tổng thặng dư tại nửa mặt phẳng phức trên:
> $$\int_{-\infty}^{\infty} g(x) e^{i\alpha x} dx = 2\pi i \sum_{\text{Im}(a_j) > 0} \text{Res}\left( g(z)e^{i\alpha z}, a_j \right)$$
