
## 1. Chuỗi Laurent và Điểm Dị Thường Cô Lập

### 1.1. Định nghĩa Chuỗi Laurent

> [!thm] Định lý 1.1: Sự tồn tại và duy nhất của chuỗi Laurent
> Nếu hàm số $f(z)$ giải tích trong một vành khuyên tâm $a$ xác định bởi miền $r < |z - a| < R$ (với $0 \le r < R \le \infty$), thì tại mọi điểm $z$ thuộc vành khuyên này, $f(z)$ được biểu diễn duy nhất dưới dạng chuỗi hai chiều:
> $$f(z) = \sum_{n=-\infty}^{\infty} a_n (z - a)^n$$
> Trong đó, các hệ số $a_n$ được xác định thông qua tích phân biên:
> $$a_n = \frac{1}{2\pi i} \int_{\gamma} \frac{f(z)}{(z - a)^{n+1}} dz, \quad n \in \mathbb{Z}$$
> với $\gamma$ là bất kỳ đường cong kín đơn giản nào bao quanh tâm $a$ và nằm trọn trong vành khuyên giải tích.

Để thuận tiện cho việc phân tích tính chất của điểm dị thường, chuỗi Laurent thường được chia thành hai phần riêng biệt:
$$f(z) = \underbrace{\sum_{n=1}^{\infty} \frac{a_{-n}}{(z - a)^n}}_{\text{Phần chính (Principal Part)}} + \underbrace{\sum_{n=0}^{\infty} a_n (z - a)^n}_{\text{Phần đều (Analytic Part)}}$$

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

> [!def] Định nghĩa 2.1: Thặng dư giải tích
> Thặng dư của hàm số $f(z)$ tại điểm dị thường cô lập $z = a$, ký hiệu là $\text{Res}(f, a)$, là hệ số $a_{-1}$ của số hạng lũy thừa $(z-a)^{-1}$ trong khai triển chuỗi Laurent của $f(z)$ tại lân cận thủng của điểm $a$.

Từ công thức tính hệ số chuỗi Laurent, với chỉ số $n = -1$, ta có mối liên hệ trực tiếp với phép toán tích phân phức:
$$\text{Res}(f, a) = a_{-1} = \frac{1}{2\pi i} \int_{\gamma} f(z) dz \implies \int_{\gamma} f(z) dz = 2\pi i \cdot \text{Res}(f, a)$$

Để hiểu tại sao giải tích phức lại "chọn" đúng hệ số $a_{-1}$ làm đại diện cho thặng dư, và tại sao nó lại trực tiếp sinh ra kết quả tích phân, ta cần xét một bổ đề nền tảng.

> [!thm] Bổ đề 2.1: Tích phân cơ bản trên đường tròn kì dị
> Xét tích phân của hàm đơn thức lũy thừa $g(z) = (z-a)^k$ (với $k \in \mathbb{Z}$) dọc theo đường tròn $\gamma$ tâm $a$, bán kính $R$ định hướng dương. Ta có kết quả:
> $$\int_{\gamma} (z-a)^k dz = \begin{cases} 0 & \text{nếu } k \neq -1 \\ 2\pi i & \text{nếu } k = -1 \end{cases}$$

> [!prf] Chứng minh Bổ đề 2.1 và Nguồn gốc của Thặng dư
> **Phần 1: Chứng minh Bổ đề**
> Chuyển sang tọa độ cực bằng cách tham số hóa đường cong $\gamma$:
> $$z - a = R e^{i\theta} \implies z = a + R e^{i\theta} \quad (\theta \in [0, 2\pi])$$
> Lấy vi phân: $dz = i R e^{i\theta} d\theta$. Thay vào biểu thức tích phân đường:
> $$\int_{\gamma} (z-a)^k dz = \int_{0}^{2\pi} \left( R e^{i\theta} \right)^k \cdot \left( i R e^{i\theta} \right) d\theta = i R^{k+1} \int_{0}^{2\pi} e^{i(k+1)\theta} d\theta$$
> - **Nếu $k \neq -1$:** Nguyên hàm lượng giác là $\frac{e^{i(k+1)\theta}}{i(k+1)}$. Đánh giá từ $0$ đến $2\pi$, ta có $e^{i(k+1)2\pi} - e^0 = 1 - 1 = 0$. Tích phân hoàn toàn triệt tiêu.
> - **Nếu $k = -1$:** Biểu thức lũy thừa biến thành $e^0 = 1$. Tích phân trở thành:
>   $$\int_{\gamma} (z-a)^{-1} dz = i R^{0} \int_{0}^{2\pi} 1 \, d\theta = i \cdot [\theta]\Big|_{0}^{2\pi} = 2\pi i$$
> 
> **Phần 2: Khai triển chuỗi Laurent**
> Giả sử hàm $f(z)$ có điểm dị thường tại $a$, khai triển Laurent của nó là một tổng vô hạn:
> $$f(z) = \dots + \frac{a_{-2}}{(z-a)^2} + \frac{a_{-1}}{z-a} + a_0 + a_1(z-a) + \dots$$
> Khi lấy tích phân 2 vế trên biên $\gamma$, theo Bổ đề 2.1 vừa chứng minh, **mọi số hạng có bậc $k \neq -1$ đều tích phân ra 0 và tự biến mất**. Duy nhất số hạng ứng với $k=-1$ sống sót:
> $$\int_{\gamma} f(z) dz = a_{-1} \int_{\gamma} \frac{1}{z-a} dz = a_{-1} \cdot 2\pi i$$
> **Kết luận:** Thặng dư $a_{-1}$ chính là "phần năng lượng duy nhất còn sót lại" (residue) của hàm số sau khi quét qua một vòng kín quanh điểm kì dị. 

### 2.2. Cơ sở Đại số: Định lý Phân Rã Phân Thức

Xét phân thức hữu tỉ tổng quát $R(z) = \frac{P(z)}{Q(z)}$, trong đó $P(z)$ và $Q(z)$ là các đa thức đại số không có nghiệm chung, và thỏa mãn điều kiện ràng buộc về bậc: **$\deg P < \deg Q$**.

> [!thm] Định lý 2.2: Sự tồn tại của phép phân rã (Liouville)
> Giả sử đa thức mẫu số $Q(z)$ có các nghiệm phức phân biệt $z_1, z_2, \dots, z_k$ với các bậc bội tương ứng là $m_1, m_2, \dots, m_k$. Khi đó, biểu thức $R(z)$ luôn có thể được phân rã duy nhất thành tổng các phân thức sơ cấp:
> $$R(z) = \frac{P(z)}{Q(z)} = \sum_{j=1}^{k} \left[ \frac{A_{j, m_j}}{(z - z_j)^{m_j}} + \frac{A_{j, m_j-1}}{(z - z_j)^{m_j-1}} + \dots + \frac{A_{j, 1}}{z - z_j} \right]$$
> Trong đó, hệ số đứng trước phân thức bậc một $\frac{A_{j, 1}}{z - z_j}$ chính là thặng dư $\text{Res}(R, z_j)$ của hàm số tại cực điểm đó.

> [!prf] Chứng minh Định lý 2.2 bằng Định lý Liouville
> Tại mỗi cực điểm $z_j$ bậc $m_j$, hàm $R(z)$ có khai triển Laurent với phần chính dạng:
> $$P_j(z) = \frac{A_{j, m_j}}{(z - z_j)^{m_j}} + \frac{A_{j, m_j-1}}{(z - z_j)^{m_j-1}} + \dots + \frac{A_{j, 1}}{z - z_j}$$
> 
> Thiết lập hàm nguyên bổ trợ $f(z)$ bằng cách lấy hàm $R(z)$ trừ đi toàn bộ phần chính của tất cả các cực điểm:
> $$f(z) = R(z) - \sum_{j=1}^{k} P_j(z)$$
> 
> Do đã bị trừ sạch các thành phần gây ra vô cùng, các điểm $z_j$ trở thành các điểm dị thường bỏ được. Bằng cách bổ sung giá trị giới hạn tại các điểm này, $f(z)$ trở thành một **Hàm nguyên** (giải tích trên toàn mặt phẳng phức $\mathbb{C}$).
> 
> Xét hành vi tại vô cực ($|z| \to \infty$):
> - Vì $\deg P < \deg Q$, ta có $\lim_{|z| \to \infty} R(z) = 0$.
> - Tất cả các phân thức bậc âm trong các phần chính $\nu_j(z)$ đều tiến về $0$ khi $|z| \to \infty$.
> 
> Suy ra $\lim_{|z| \to \infty} f(z) = 0$. Theo **Định lý Liouville**, một hàm nguyên bị chặn thì phải là hằng số, do đó $f(z) = C$. Kết hợp điều kiện giới hạn tại vô cực, ta có $C = 0$, suy ra $f(z) \equiv 0$. Do đó, phép phân rã luôn tồn tại và duy nhất. 

### 2.3. Thuật Toán Hệ Thống Tính Hệ Số Heaviside (Lộ trình giảm bậc)

> [!prp] Mệnh đề 2.3: Công thức vi phân tổng quát cho nghiệm bội
> Giả sử cực điểm $z_j$ có bậc bội là $m_j$. Các hằng số $A_{j, k}$ ứng với số hạng phân thức bậc $k$ ($1 \le k \le m_j$) được xác định một cách độc lập thông qua công thức đạo hàm cấp cao của hàm bổ trợ đã cô lập kì dị $F(z) = (z - z_j)^{m_j} R(z)$:
> $$A_{j, k} = \frac{1}{(m_j - k)!} \lim_{z \to z_j} \frac{d^{m_j - k}}{dz^{m_j - k}} \left[ (z - z_j)^{m_j} R(z) \right]$$

Để hiện thực hóa công thức vi phân tổng quát này vào bài tập tính toán bằng tay một cách hiệu quả, tránh việc phải lặp lại các phép đạo hàm cồng kềnh từ đầu, ta quy chuẩn hóa thành quy trình sau:

> [!algo] Thuật toán 2.4: Lộ trình tính toán lũy tiến giảm dần số mũ
> Cho cực điểm $z_j$ có bậc bội $m_j$. Để tìm chuỗi hệ số từ bậc cao nhất $A_{j, m_j}$ lùi dần về bậc thặng dư $A_{j, 1}$, ta thực hiện:
> 
> - **Bước 1 (Khởi tạo hàm bổ trợ):** Nhân nhân tử kì dị bậc cao nhất vào hàm số để triệt tiêu mẫu:
>   $$F_0(z) = (z - z_j)^{m_j} R(z)$$
>   Hệ số bậc cao nhất thu được bằng cách thế số trực tiếp (đạo hàm cấp 0):
>   $$A_{j, m_j} = F_0(z_j)$$
> 
> - **Bước 2 (Lũy tiến đạo hàm giảm bậc):** Để tìm các hệ số bậc thấp hơn, ta liên tục lấy đạo hàm của biểu thức ở bước ngay trước đó và chia cho giai thừa tương ứng:
>   - Đạo hàm cấp 1: $F_1(z) = \frac{d}{dz}[F_0(z)] \implies A_{j, m_j - 1} = \frac{1}{1!} F_1(z_j)$
>   - Đạo hàm cấp 2: $F_2(z) = \frac{d}{dz}[F_1(z)] \implies A_{j, m_j - 2} = \frac{1}{2!} F_2(z_j)$
>   - Tổng quát cho bước thứ $p$ (với $p = m_j - k$):
>     $$F_p(z) = \frac{d}{dz}[F_{p-1}(z)] \implies A_{j, k} = \frac{1}{p!} F_p(z_j)$$
> 
> Lộ trình này biến các phép đạo hàm cấp cao độc lập thành một chuỗi các phép đạo hàm cấp 1 nối tiếp nhau, tối ưu tuyệt đối cho tính toán thủ công.

### 2.4. Ví dụ Minh Họa Phức Hợp (Mẫu số chứa các bậc khác nhau)

> [!thm] Bài toán mẫu
> Tiến hành phân rã phân thức hữu tỉ sau thành các phân thức đơn giản bằng phương pháp Heaviside hệ thống:
> $$R(z) = \frac{z^2 + 1}{(z-1)^2(z-2)}$$

> [!prf] Lời giải chi tiết bám sát Thuật toán 2.4
> Phân thức thỏa mãn điều kiện bậc ($\deg P = 2 < \deg Q = 3$). Mẫu số chứa hai điểm kì dị:
> - $z = 2$: Cực điểm đơn (bậc 1).
> - $z = 1$: Cực điểm bội (bậc 2).
> 
> Cấu trúc phân rã lý thuyết bắt buộc phải có dạng:
> $$R(z) = \frac{B}{z-2} + \frac{A_2}{(z-1)^2} + \frac{A_1}{z-1}$$
> 
> #### Vành kì dị 1: Xét cực điểm đơn $z = 2$
> Áp dụng phương pháp che mẫu đơn giản (tương đương đạo hàm cấp 0):
> $$B = \text{Res}(R, 2) = \lim_{z \to 2} \left[ (z-2) R(z) \right] = \lim_{z \to 2} \frac{z^2 + 1}{(z-1)^2} = \frac{2^2 + 1}{(2-1)^2} = 5$$
> 
> #### Vành kì dị 2: Xét cực điểm bội bậc hai $z = 1$ ($m_j = 2$)
> Áp dụng nghiêm ngặt theo **Thuật toán 2.4**:
> 
> - **Bước 1: Khởi tạo hàm bổ trợ $F_0(z)$ và tìm hệ số bậc cao nhất $A_2$**
>   $$F_0(z) = (z-1)^2 R(z) = \frac{z^2 + 1}{z-2}$$
>   Thế giá trị tâm kì dị $z = 1$ vào hàm bổ trợ (đạo hàm cấp 0):
>   $$A_2 = F_0(1) = \frac{1^2 + 1}{1-2} = \frac{2}{-1} = -2$$
> 
> - **Bước 2: Lấy đạo hàm cấp một để tìm hệ số bậc kế tiếp $A_1$ (Thặng dư)**
>   Thực hiện đạo hàm biểu thức $F_0(z)$ từ bước trước theo quy tắc phân thức $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$:
>   $$F_1(z) = \frac{d}{dz}[F_0(z)] = \frac{d}{dz}\left[\frac{z^2 + 1}{z-2}\right] = \frac{2z(z-2) - (z^2 + 1)(1)}{(z-2)^2}$$
>   Thu gọn biểu thức đạo hàm:
>   $$F_1(z) = \frac{2z^2 - 4z - z^2 - 1}{(z-2)^2} = \frac{z^2 - 4z - 1}{(z-2)^2}$$
>   Theo thuật toán, hằng số ứng với bước thứ $p = 1$ ($k = m_j - p = 2 - 1 = 1$) là:
>   $$A_1 = \text{Res}(R, 1) = \frac{1}{1!} F_1(1) = \frac{1^2 - 4(1) - 1}{(1-2)^2} = \frac{-4}{1} = -4$$
> 
> #### Kết luận cuối cùng:
> Kết quả phân rã hoàn chỉnh của hàm số hoàn toàn khớp với lý thuyết chuỗi Laurent:
> $$R(z) = \frac{5}{z-2} - \frac{2}{(z-1)^2} - \frac{4}{z-1}$$
> Lộ trình lũy tiến giảm dần số mũ từ $A_2 \to A_1$ đã được thiết lập và chứng minh tính đúng đắn.

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
> Mặt khác, xét riêng từng điểm dị thường cô lập $a_j$, đường tròn $\gamma_j$ đóng vai trò là một đường cong kín đơn bao quanh một điểm kì dị duy nhất. Theo công thức liên hệ cốt lõi của thặng dư, tích phân trên mỗi đường tròn nhỏ $\gamma_j$ được tính bằng:
> $$\int_{\gamma_j} f(z) dz = 2\pi i \cdot \text{Res}(f, a_j)$$
> 
> Thay kết quả từng biên vào tổng hệ phương trình miền đa liên, ta thu được:
> $$\int_{\Gamma} f(z) dz = \sum_{j=1}^{k} \left[ 2\pi i \cdot \text{Res}(f, a_j) \right] = 2\pi i \sum_{j=1}^{k} \text{Res}(f, a_j)$$
> Chứng minh hoàn tất. 

### 3.2. Phương Pháp Tiêu Chuẩn Tính Thặng Dư Qua Giới Hạn (Standard Method)

Phương pháp tiêu chuẩn để tìm thặng dư tại một cực điểm bậc $m$ bất kỳ là cô lập phần chính chứa thành phần dị thường thông qua phép lấy giới hạn và vi phân cấp cao.

> [!thm] Định lý 3.2: Công thức giới hạn tiêu chuẩn cho cực điểm bậc $m$
> Nếu điểm $z = z_0$ là một cực điểm bậc $m$ ($m \ge 1$) của hàm số $f(z)$, thì thặng dư của hàm số tại điểm đó được xác định bởi công thức giới hạn tiêu chuẩn:
> $$\text{Res}(f, z_0) = \frac{1}{(m - 1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

> [!prf] Chứng minh Định lý 3.2
> Vì $z = z_0$ là cực điểm bậc $m$ của $f(z)$, theo định nghĩa, khai triển chuỗi Laurent của $f(z)$ tại lân cận thủng của điểm kì dị này có dạng phần chính dừng lại chính xác tại lũy thừa âm bậc $m$:
> $$f(z) = \frac{a_{-m}}{(z - z_0)^m} + \dots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + \sum_{n=0}^{\infty} a_n (z - z_0)^n$$
> 
> Để tìm hệ số thặng dư $a_{-1}$, ta thực hiện chuỗi thao tác giải tích sau:
> 
> **Bước 1: Triệt tiêu mẫu số của phần chính**
> Nhân cả hai vế của khai triển Laurent với lượng đa thức $(z - z_0)^m$:
> $$(z - z_0)^m f(z) = a_{-m} + a_{-(m-1)}(z - z_0) + \dots + a_{-1}(z - z_0)^{m-1} + \sum_{n=0}^{\infty} a_n (z - z_0)^{n+m}$$
> 
> **Bước 2: Sử dụng phép toán vi phân để đẩy $a_{-1}$ về số hạng tự do**
> Ta tiến hành lấy đạo hàm cấp cao hai vế theo biến $z$ liên tục đúng $m - 1$ lần. 
> - Xét các số hạng lũy thừa của $(z-z_0)$ thấp hơn $m-1$ (từ $a_{-m}$ đến $a_{-2}$): Các số hạng này là đa thức có bậc nhỏ hơn $m-1$, do đó khi lấy đạo hàm đến cấp $m-1$, chúng hoàn toàn triệt tiêu về $0$.
> - Xét số hạng chứa hệ số $a_{-1}$: Đại lượng này có dạng $a_{-1}(z - z_0)^{m-1}$. Lấy đạo hàm liên tiếp $m-1$ lần sẽ cho ta kết quả hằng số: $(m-1)! \cdot a_{-1}$.
> - Xét các số hạng thuộc phần đều phía sau: Tất cả đều có bậc lớn hơn hoặc bằng $m$, nên sau khi đạo hàm $m-1$ lần, chúng vẫn còn giữ lại ít nhất một nhân tử $(z - z_0)$ bậc $1$ trở lên.
> 
> Biểu thức sau vi phân biến đổi thành:
> $$\frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right] = (m - 1)! \cdot a_{-1} + \sum_{n=0}^{\infty} a_n \frac{(n+m)!}{(n+1)!} (z - z_0)^{n+1}$$
> 
> **Bước 3: Lấy giới hạn cô lập thặng dư**
> Cho giới hạn hai vế tiến về tâm kì dị $z \to z_0$. Toàn bộ phần tổng chuỗi vô hạn phía sau chứa nhân tử $(z - z_0)$ đều triệt tiêu hoàn toàn về $0$:
> $$\lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right] = (m - 1)! \cdot a_{-1}$$
> 
> Chia cả hai vế cho hằng số giai thừa $(m - 1)!$ và đối chiếu định nghĩa $\text{Res}(f, z_0) = a_{-1}$, ta thu được hệ thức:
> $$\text{Res}(f, z_0) = \frac{1}{(m - 1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

> [!remark] Hệ quả 3.2.1: Trường hợp cực điểm đơn ($m = 1$)
> Khi $z_0$ là cực điểm đơn, đạo hàm cấp $0$ giữ nguyên hàm số và hằng số giai thừa $0! = 1$. Công thức tiêu chuẩn lùi về dạng giới hạn đại số sơ cấp:
> $$\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z)$$

> [!thm] Hệ quả 3.3.2: Công thức giới hạn tổng quát cho hệ số Laurent phần chính
> Nếu điểm $z = z_0$ là một cực điểm bậc $m$ ($m \ge 1$) của hàm số $f(z)$, thì mọi hệ số $a_{-n}$ với $1 \le n \le m$ trong phần chính của khai triển Laurent:
> $$f(z) = \frac{a_{-m}}{(z-z_0)^m} + \dots + \frac{a_{-n}}{(z-z_0)^n} + \dots + \frac{a_{-1}}{z-z_0} + \sum_{k=0}^{\infty} a_k(z-z_0)^k$$
> được xác định một cách độc lập bởi công thức giới hạn tiêu chuẩn:
> $$a_{-n} = \frac{1}{(m - n)!} \lim_{z \to z_0} \frac{d^{m-n}}{dz^{m-n}} \left[ (z - z_0)^m f(z) \right]$$

---

### 💡 Mối liên hệ hệ thống giữa các công thức

Công thức tổng quát này chính là "chìa khóa vạn năng" hợp nhất hai công thức bạn đã có:

1. **Khi $n = 1$ (Tìm hệ số thặng dư $a_{-1} = \text{Res}(f, z_0)$):**
   Thế $n = 1$ vào định lý trên, ta thu được chính xác công thức thặng dư tiêu chuẩn trong ảnh `image_64e386.png`:
   $$a_{-1} = \frac{1}{(m - 1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

2. **Khi $n = m$ (Tìm hệ số của số hạng có bậc cao nhất $a_{-m}$):**
   Thế $n = m$ vào định lý, cấp đạo hàm trở thành $m - m = 0$ (thế số trực tiếp) và giai thừa bằng $0! = 1$, khớp hoàn toàn với hệ số bậc cao nhất khi ta che nhân tử kỳ dị:
   $$a_{-m} = \lim_{z \to z_0} \left[ (z - z_0)^m f(z) \right]$$


### 3.3. Các Phương Pháp Tính Nhanh Thặng Dư Cho Dạng Thương $P/Q$

Khi cấu trúc hàm số được biểu diễn dưới dạng phân thức của hai hàm giải tích, ta có các mệnh đề tối ưu hóa tốc độ tính toán mà không cần qua phép vi phân dài dòng.

> [!prp] Mệnh đề 3.3: Kỹ thuật tính nhanh cho cực điểm đơn dưới dạng thương
> Giả sử hàm số có cấu trúc dạng thương $f(z) = \frac{P(z)}{Q(z)}$, trong đó cả $P(z)$ và $Q(z)$ đều là các hàm giải tích tại lân cận của tâm $z_0$. 
> Nếu tại điểm $z_0$ thỏa mãn đồng thời các điều kiện:
> 1. $P(z_0) \neq 0$
> 2. $Q(z_0) = 0$ và $Q'(z_0) \neq 0$ (tức $z_0$ là nghiệm đơn của mẫu số)
> 
> Thì $z_0$ là một cực điểm đơn của $f(z)$ và thặng dư tại đây được tính thẳng bằng công thức:
> $$\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$$

> [!prf] Chứng minh Mệnh đề 3.3
> Áp dụng công thức giới hạn tiêu chuẩn cho cực điểm đơn từ Hệ quả 3.2.1:
> $$\text{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0) f(z) = \lim_{z \to z_0} (z - z_0) \frac{P(z)}{Q(z)}$$
> 
> Biến đổi đại số để đưa biểu thức giới hạn về cấu trúc của định nghĩa đạo hàm tại mẫu số:
> $$\text{Res}(f, z_0) = \lim_{z \to z_0} \frac{P(z)}{\frac{Q(z)}{z - z_0}}$$
> 
> Vì giả thiết $Q(z_0) = 0$, ta chèn đại lượng này vào mẫu số mà không làm thay đổi giá trị phân thức:
> $$\text{Res}(f, z_0) = \lim_{z \to z_0} \frac{P(z)}{\frac{Q(z) - Q(z_0)}{z - z_0}}$$
> 
> Do $P(z)$ và $Q(z)$ giải tích nên liên tục và có đạo hàm tại $z_0$:
> - Ở tử số: $\lim_{z \to z_0} P(z) = P(z_0)$.
> - Ở mẫu số: Theo định nghĩa giới hạn của đạo hàm, $\lim_{z \to z_0} \frac{Q(z) - Q(z_0)}{z - z_0} = Q'(z_0)$.
> 
> Vì $Q'(z_0) \neq 0$, giới hạn phân thức tồn tại hữu hạn và cho ta kết quả:
> $$\text{Res}(f, z_0) = \frac{P(z_0)}{Q'(z_0)}$$

### 3.3. Kỹ thuật dùng chuỗi thay vì công thức đạo hàm

Khi tính thặng dư tại cực điểm bậc cao, việc đạo hàm vi phân cấp cao thường rất phức tạp và dễ nhầm chỉ số. Ta có thể khai triển trực tiếp chuỗi Maclaurin/Laurent để trích xuất hệ số $a_{-1}$.

> [!exr] Bài toán minh họa
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

> [!prp] Các khai triển chuỗi Maclaurin cơ bản ($z \to 0$)
> Dưới đây là các khai triển chuỗi lũy thừa cơ bản thường dùng trong Giải tích phức, có bán kính hội tụ $R = \infty$ (trừ chuỗi hình học).
> 
> 1. **Chuỗi hình học (Cấp số nhân):** (với $|z| < 1$)
>    $$\frac{1}{1-z} = \sum_{n=0}^{\infty} z^n = 1 + z + z^2 + z^3 + \dots$$
> 2. **Hàm mũ phức:**
>    $$e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots$$
> 3. **Hàm lượng giác:**
>    $$\sin z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots$$
>    $$\cos z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots$$
> 4. **Hàm Hyperbolic:**
>    $$\sinh z = \sum_{n=0}^{\infty} \frac{z^{2n+1}}{(2n+1)!} = z + \frac{z^3}{3!} + \frac{z^5}{5!} + \dots$$
>    $$\cosh z = \sum_{n=0}^{\infty} \frac{z^{2n}}{(2n)!} = 1 + \frac{z^2}{2!} + \frac{z^4}{4!} + \dots$$

---

> [!exr] Bài tập áp dụng 1
> Tìm khai triển chuỗi Laurent của hàm số sau trong miền cô lập quanh cực điểm $z_0 = 2$:
> $$f(z) = \frac{\sin(z-2)}{(z-2)^3} + \frac{1}{z-1}$$
> Xác định phần chính (principal part) và hệ số thặng dư $\text{Res}(f, 2)$ từ chuỗi thu được.

---

> [!prf] Lời giải chi tiết
> Để khai triển chuỗi quanh cực điểm $z_0 = 2$, ta thực hiện phép đổi biến số nhằm đưa tâm hệ tọa độ về gốc $0$.
> 
> **Bước 1: Đổi biến số**
> Đặt $w = z - 2 \implies z = w + 2$. Khi $z \to 2$ thì $w \to 0$.
> Thay vào hàm số $f(z)$, ta được hàm theo biến $w$:
> $$f(w + 2) = \frac{\sin w}{w^3} + \frac{1}{(w+2)-1} = \frac{\sin w}{w^3} + \frac{1}{1+w}$$
> 
> **Bước 2: Khai triển từng thành phần theo $w$**
> * **Thành phần thứ nhất:** Áp dụng khai triển chuỗi $\sin w$ từ hình mẫu `[!prp]`:
>   $$\frac{\sin w}{w^3} = \frac{1}{w^3} \left( w - \frac{w^3}{3!} + \frac{w^5}{5!} - \frac{w^7}{7!} + \dots \right)$$
>   $$\implies \frac{\sin w}{w^3} = \frac{1}{w^2} - \frac{1}{6} + \frac{w^2}{120} - \frac{w^4}{5040} + \dots$$
> 
> * **Thành phần thứ hai:** Áp dụng chuỗi hình học bằng cách biến đổi $\frac{1}{1+w} = \frac{1}{1-(-w)}$:
>   $$\frac{1}{1+w} = \sum_{n=0}^{\infty} (-w)^n = 1 - w + w^2 - w^3 + w^4 - \dots \quad (\text{với } |w| < 1)$$
> 
> **Bước 3: Tổng hợp và chuyển về biến $z$**
> Cộng hai chuỗi lại với nhau và nhóm các hạng tử cùng bậc của $w$:
> $$f(w+2) = \frac{1}{w^2} - w + \left(1 - \frac{1}{6}\right) - w^3 + \left(1 + \frac{1}{120}\right)w^2 - \dots$$
> $$f(w+2) = \frac{1}{w^2} - w + \frac{5}{6} - w^3 + \frac{121}{120}w^2 - \dots$$
> 
> Thay ngược lại $w = z - 2$, ta thu được khai triển Laurent hoàn chỉnh của $f(z)$ trong miền $0 < |z-2| < 1$:
> $$f(z) = \underbrace{\frac{1}{(z-2)^2}}_{\text{Phần chính}} + \underbrace{\frac{5}{6} - (z-2) + \frac{121}{120}(z-2)^2 - (z-2)^3 + \dots}_{\text{Phần giải tích}}$$
> 
> **Bước 4: Xác định các thành phần yêu cầu**
> * **Phần chính:** Chỉ chứa một số hạng là $\frac{1}{(z-2)^2}$ (do đó $z=2$ là cực điểm bậc 2).
> * **Thặng dư $\text{Res}(f, 2)$:** Là hệ số của số hạng $\frac{1}{z-2}$ (bậc $-1$). Nhìn vào khai triển trên, hệ số của số hạng bậc $-1$ hoàn toàn triệt tiêu (bằng $0$).
> $$\implies \text{Res}(f, 2) = 0$$
> 
> Kết luận hoàn toàn phù hợp với tính chất đối xứng của hàm sin.

> [!algo] Thuật toán khai triển chuỗi hàm hợp Laurentz dạng $e^{w}$ với $w = f(z)$
> Khi gặp hàm hợp phức có dạng $F(z) = e^{g(z)}$ tại lân cận cực điểm cô lập $z_0$, ta thực hiện theo các bước sau để tìm nhanh khai triển và ứng dụng tính tích phân:
> 
> 1. **Dời tâm khai triển:** Đặt biến phụ $w = z - z_0 \implies z = w + z_0$. Khi đó hàm hợp trở thành $F(w + z_0) = e^{g(w + z_0)}$.
> 2. **Khai triển hàm lõi (Phân tích $g$):** Biến đổi biểu thức $g(w + z_0)$ về các số hạng lũy thừa đơn giản của $w$ (ví dụ: $\frac{A}{w^k}$).
> 3. **Áp dụng chuỗi Maclaurin hàm mũ:** Sử dụng khai triển nguyên mẫu của hàm số $e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!}$ với $u = g(w + z_0)$. Điều kiện để chuỗi hội tụ là $|u| < \infty$, điều này luôn đúng với mọi $w \neq 0$ nếu $z_0$ là cực điểm cốt yếu hoặc cực điểm thường.
> 4. **Đồng nhất hệ số Laurentz:** Thu thập chuỗi theo các biến chạy của $w$. Hệ số của số hạng $w^{-1}$ (tức là $\frac{1}{z - z_0}$) chính là thặng dư $\text{Res}(F, z_0) = a_{-1}$.
> 5. **Ứng dụng tích phân Cauchy:** Tính tích phân đường trên chu tuyến $C$ bao quanh duy nhất điểm kỳ dị $z_0$ bằng công thức:
>    $$\oint_C F(z) dz = 2\pi i \cdot a_{-1}$$

> [!prob]
> Cho hàm số biến phức $f(z) = e^{\frac{i}{z-i}}$.
> 
> a) Tìm khai triển Laurentz (khai triển chuỗi lũy thừa $\sum_{n=-\infty}^{+\infty} a_n(z-z_0)^n$) của hàm số $f(z)$ tại lân cận tâm $z_0 = i$. Xác định cụ thể hệ số $a_{-1}$.
> b) Tính tích phân Cauchy sau đây bằng cách sử dụng hệ số chuỗi vừa tìm được:
>    $$I = \int_{\{z \in \mathbb{C} \mid |z|=3\}} e^{\frac{i}{z-i}} dz$$

> [!prf] 
> 
> Câu a) Tìm khai triển Laurentz quanh tâm $z_0 = i$
> 
> Đặt biến phụ dời tâm:
> $$w = z - i \implies z = w + i$$
> Khi đó, hàm số $f(z)$ được biểu diễn theo biến $w$ như sau:
> $$f(w + i) = e^{\frac{i}{w}}$$
> 
> Đặt $u = \frac{i}{w}$. Áp dụng trực tiếp công thức khai triển hàm mũ cơ bản từ `[!algo]`:
> $$e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots + \frac{u^n}{n!} + \dots$$
> 
> Thay ngược $u = \frac{i}{w}$ vào chuỗi lũy thừa:
> $$e^{\frac{i}{w}} = \sum_{n=0}^{\infty} \frac{1}{n!} \left( \frac{i}{w} \right)^n = \sum_{n=0}^{\infty} \frac{i^n}{n!} w^{-n}$$
> 
> Viết tường minh một số số hạng của chuỗi để tìm cấu trúc biến chạy lũy thừa âm:
> $$e^{\frac{i}{w}} = 1 + \frac{i}{w} + \frac{i^2}{2! w^2} + \frac{i^3}{3! w^3} + \dots + \frac{i^n}{n! w^n} + \dots$$
> Vì $i^2 = -1, i^3 = -i$, chuỗi viết lại dưới dạng biến $z$ ban đầu ($w = z - i$) là:
> $$f(z) = 1 + \frac{i}{z-i} - \frac{1}{2!(z-i)^2} - \frac{i}{3!(z-i)^3} + \dots + \frac{i^n}{n!(z-i)^n} + \dots$$
> 
> Hàm số có vô hạn các số hạng lũy thừa âm, chứng tỏ $z_0 = i$ là một **cực điểm cốt yếu** (essential singularity).
> Từ khai triển trên, hệ số của số hạng bậc $-1$ (tức là đứng trước $\frac{1}{z-i}$) là:
> $$a_{-1} = i$$
> 
> Câu b) Áp dụng tính tích phân Cauchy
> 
> Ta cần tính tích phân trên chu tuyến $C: |z| = 3$.
> * Điểm kỳ dị duy nhất của hàm số là $z_0 = i$.
> * Kiểm tra vị trí hình học: $|i| = 1 < 3 \implies$ Điểm kỳ dị $z_0 = i$ nằm hoàn toàn **bên trong** chu tuyến tròn bán kính $3$.
> 
> Theo bổ đề mối liên hệ tích phân từ `[!algo]`, giá trị tích phân được xác định hoàn toàn qua hệ số $a_{-1}$ của chuỗi Laurentz:
> $$I = \oint_{|z|=3} e^{\frac{i}{z-i}} dz = 2\pi i \cdot a_{-1}$$
> 
> Thay giá trị $a_{-1} = i$ vừa tìm được ở câu a) vào đẳng thức:
> $$I = 2\pi i \cdot (i) = 2\pi \cdot i^2$$
> Vì $i^2 = -1$, ta thu được kết quả cuối cùng:
> $$I = -2\pi$$

## 4. Ứng Dụng Tính Toán Các Lớp Tích Phân Thực Suy Rộng

### 4.1. Lớp Tích Phân Hàm Phân Thức Thực Trên Miền $(-\infty, \infty)$ (Trường hợp tổng quát có cực điểm thực)

> [!thm] Định lý 4.1: Công thức tổng quát thặng dư cho trục thực
> Xét hàm phân thức thực $f(x) = \frac{P(x)}{Q(x)}$ thỏa mãn các điều kiện:
> 1. $P(x)$ và $Q(x)$ là các đa thức thực không có nhân tử chung và $\deg Q \ge \deg P + 2$.
> 2. Các nghiệm thực $x_1, x_2, \dots, x_m$ của phương trình $Q(x) = 0$ đều là các nghiệm đơn.
> 
> Khi đó, Giá trị chính Cauchy ($\text{PV}$) của tích phân suy rộng được xác định bởi:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} \, dx = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}\left( \frac{P}{Q}, a_k \right) + \pi i \sum_{j=1}^{m} \text{Res}\left( \frac{P}{Q}, x_j \right)$$
> *(Trong đó, $a_k$ là các cực điểm nằm ở nửa mặt phẳng trên, và $x_j$ là các cực điểm đơn nằm trên trục thực).*

> [!prf] Chứng minh chi tiết bằng kỹ thuật giải tích viền
> **Bước 1: Thiết lập đường biên kín $\Gamma$ khép kín không gian**
> Ta xây dựng một đường cong đóng $\Gamma$ nằm ở nửa mặt phẳng trên bao gồm các thành phần:
> - Các đoạn thẳng trên trục thực nối tiếp nhau, chủ động cách các cực điểm thực $x_j$ một khoảng $\varepsilon$: $[-R, x_1-\varepsilon] \cup [x_1+\varepsilon, x_2-\varepsilon] \cup \dots \cup [x_m+\varepsilon, R]$.
> - Các nửa đường tròn nhỏ $C_{\varepsilon, j}$ bán kính $\varepsilon$ tâm $x_j$, được định hướng theo chiều kim đồng hồ (hướng âm) để uốn đường đi tránh các điểm kì dị thực.
> - Nửa đường tròn lớn $C_R$ bán kính $R$ định hướng dương (ngược chiều kim đồng hồ) nối từ $R$ về $-R$.
> 
> Khi chọn $R$ đủ lớn và $\varepsilon$ đủ nhỏ, đường biên kín $\Gamma$ sẽ bao trọn vẹn tất cả các cực điểm phức $a_k$ có phần ảo dương. Theo Định lý Thặng dư Cauchy:
> $$\int_{\Gamma} f(z) \, dz = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}(f, a_k)$$
> 
> **Bước 2: Phân rã tuyến tính và tiệm cận hóa các cung tròn**
> Khai triển tích phân tổng thể trên biên kín $\Gamma$ thành tổng các tích phân thành phần:
> $$\left[ \int_{-R}^{x_1-\varepsilon} + \dots + \int_{x_m+\varepsilon}^{R} \right] f(x) \, dx + \sum_{j=1}^{m} \int_{C_{\varepsilon, j}} f(z) \, dz + \int_{C_R} f(z) \, dz = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}(f, a_k)$$
> 
> Ta tiến hành lấy giới hạn đồng thời khi $R \to \infty$ và $\varepsilon \to 0$:
> 
> 1. **Khảo sát cung lớn $C_R$:** >    Do điều kiện giảm bậc $\deg Q \ge \deg P + 2$, theo ước lượng đa thức tiệm cận, tồn tại hằng số $M_0$ sao cho $|f(z)| \le \frac{M_0}{R^2}$ trên $C_R$. Áp dụng bất đẳng thức $ML$:
>    $$\left| \int_{C_R} f(z) \, dz \right| \le \frac{M_0}{R^2} \cdot \pi R = \frac{\pi M_0}{R} \xrightarrow{R \to \infty} 0$$
> 
> 2. **Khảo sát các cung nhỏ $C_{\varepsilon, j}$ trên trục hoành:**
>    Vì mỗi $x_j$ là một cực điểm đơn, ta khai triển chuỗi Laurent của $f(z)$ tại lân cận của $x_j$: $f(z) = \frac{\text{Res}(f, x_j)}{z - x_j} + g(z)$, với $g(z)$ là phần đều liên tục và bị chặn bởi $M_j$ trên đĩa đóng compact quanh $x_j$.
>    Tham số hóa cung $C_{\varepsilon, j}$ đi từ $\pi$ về $0$ (chiều kim đồng hồ): $z - x_j = \varepsilon e^{i\theta} \implies dz = i\varepsilon e^{i\theta} d\theta$.
>    $$\int_{C_{\varepsilon, j}} f(z) \, dz = \int_{\pi}^{0} \frac{\text{Res}(f, x_j)}{\varepsilon e^{i\theta}} \left( i\varepsilon e^{i\theta} d\theta \right) + \int_{C_{\varepsilon, j}} g(z) \, dz = -\pi i \cdot \text{Res}(f, x_j) + \int_{C_{\varepsilon, j}} g(z) \, dz$$
>    Chặn phần tích phân của $g(z)$ bằng $ML$: $\left|\int_{C_{\varepsilon, j}} g(z) \, dz\right| \le M_j \cdot \pi\varepsilon \xrightarrow{\varepsilon \to 0} 0$.
>    Do đó: $\lim_{\varepsilon \to 0} \int_{C_{\varepsilon, j}} f(z) \, dz = -\pi i \cdot \text{Res}(f, x_j)$.
> 
> **Bước 3: Tổng hợp giới hạn trích xuất kết quả**
> Thay tất cả các giá trị giới hạn của các cấu trúc cung tròn vừa tìm được vào phương trình tổng thể ở Bước 1:
> $$\text{PV} \int_{-\infty}^{\infty} f(x) \, dx + \sum_{j=1}^{m} \left( -\pi i \cdot \text{Res}(f, x_j) \right) + 0 = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}(f, a_k)$$
> Chuyển vế đại lượng mang dấu trừ sang vế phải, ta thu được đẳng thức cần chứng minh:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} \, dx = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}\left( \frac{P}{Q}, a_k \right) + \pi i \sum_{j=1}^{m} \text{Res}\left( \frac{P}{Q}, x_j \right)$$

### 4.2. Bổ đề Jordan và Tích phân chứa hàm mũ (Biến đổi Fourier)

Khi tính toán các tích phân dạng Fourier chứa thành phần dao động $\int_{-\infty}^{\infty} g(x) e^{i\omega x} dx$, điều kiện xấp xỉ giảm bậc thông thường không còn đủ, ta phải sử dụng một công cụ mạnh hơn gọi là Bổ đề Jordan.

> [!thm] Bổ đề 4.2: Bổ đề Jordan
> Giả sử $\omega_R$ là nửa đường tròn tâm $O$ bán kính $R$ nằm ở nửa mặt phẳng trên ($\text{Im}(z) \ge 0$). Nếu hàm số $g(z)$ tiến liên tục về $0$ khi $|z| \to \infty$ trên nửa mặt phẳng trên, thì với mọi hằng số dương $\alpha > 0$, ta có giới hạn tích phân triệt tiêu:
> $$\lim_{R \to \infty} \int_{\omega_R} g(z)e^{i\alpha z}dz = 0$$

> [!prf] Chứng minh Bổ đề Jordan tổng quát
> Tham số hóa nửa đường tròn $\omega_R$ ở nửa mặt phẳng trên: $z = R e^{i\theta}$ với $\theta \in [0, \pi] \implies dz = iR e^{i\theta} d\theta$.
> 
> Đặt $M(R) = \max_{z \in \omega_R} |g(z)|$. Theo giả thiết bài toán, ta có $\lim_{R \to \infty} M(R) = 0$.
> 
> Lấy mô-đun của tích phân đường để đánh giá độ lớn:
> $$\left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le \int_{0}^{\pi} |g(R e^{i\theta})| \cdot \left| e^{i\alpha R(\cos \theta + i\sin \theta)} \right| \cdot |iR e^{i\theta}| \, d\theta$$
> 
> Vì $\left| e^{i\alpha R \cos \theta} \right| = 1$ và $|i e^{i\theta}| = 1$, ta cô lập hằng số chặn $M(R)$ ra ngoài dấu tích phân:
> $$\left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le R \cdot M(R) \int_{0}^{\pi} e^{-\alpha R \sin \theta} \, d\theta$$
> 
> Do đồ thị hàm số $\sin \theta$ đối xứng hoàn hảo qua trục góc $\theta = \frac{\pi}{2}$, ta thu hẹp miền tích phân và áp dụng bất đẳng thức hình học dây cung $\sin \theta \ge \frac{2\theta}{\pi}$ trên miền góc nhọn $0 \le \theta \le \frac{\pi}{2}$:
> $$\int_{0}^{\pi} e^{-\alpha R \sin \theta} \, d\theta = 2 \int_{0}^{\frac{\pi}{2}} e^{-\alpha R \sin \theta} \, d\theta \le 2 \int_{0}^{\frac{\pi}{2}} e^{-\alpha R \frac{2\theta}{\pi}} \, d\theta$$
> 
> 
> Thực hiện tính nguyên hàm trực tiếp theo biến số $\theta$:
> $$2 \int_{0}^{\frac{\pi}{2}} e^{-\frac{2\alpha R}{\pi}\theta} \, d\theta = 2 \left[ \frac{-\pi}{2\alpha R} e^{-\frac{2\alpha R}{\pi}\theta} \right]_{0}^{\frac{\pi}{2}} = \frac{\pi}{\alpha R} \left( 1 - e^{-\alpha R} \right) < \frac{\pi}{\alpha R}$$
> 
> Thay thế đánh giá tích phân lượng giác này vào biểu thức ban đầu, thừa số bán kính $R$ ở tử số bị triệt tiêu hoàn toàn bởi mẫu số:
> $$\left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le R \cdot M(R) \cdot \frac{\pi}{\alpha R} = \frac{\pi M(R)}{\alpha}$$
> 
> Lấy giới hạn hai vế khi bán kính cung viền tiến ra vô cực ($R \to \infty$):
> $$\lim_{R \to \infty} \left| \int_{\omega_R} g(z) e^{i\alpha z} dz \right| \le \lim_{R \to \infty} \frac{\pi M(R)}{\alpha} = 0$$
> 
> Theo nguyên lý kẹp giới hạn, tích phân trên cung $\omega_R$ triệt tiêu hoàn toàn về 0. Chứng minh hoàn tất. 

> [!thm] Định lý 4.2: Công thức tổng quát thặng dư cho tích phân Fourier (Hàm lượng giác)
> Xét tích phân suy rộng dạng $I = \text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} e^{i\alpha x} \, dx$ (với hằng số $\alpha > 0$) thỏa mãn các điều kiện:
> 1. $P(x)$ và $Q(x)$ là các đa thức thực không có nhân tử chung. Bậc của mẫu số chỉ cần thỏa mãn điều kiện nới lỏng: $\deg Q \ge \deg P + 1$.
> 2. Các nghiệm thực $x_1, x_2, \dots, x_m$ của phương trình $Q(x) = 0$ đều là các nghiệm đơn.
> 
> Khi đó, Giá trị chính Cauchy ($\text{PV}$) của tích phân được xác định bởi:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} e^{i\alpha x} \, dx = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}\left( \frac{P(z)}{Q(z)}e^{i\alpha z}, a_k \right) + \pi i \sum_{j=1}^{m} \text{Res}\left( \frac{P(z)}{Q(z)}e^{i\alpha z}, x_j \right)$$
> *(Trong đó, $a_k$ là các cực điểm nằm ở nửa mặt phẳng trên, và $x_j$ là các cực điểm đơn nằm trên trục thực).*
>
>**Hệ quả tách phần thực / phần ảo:**
> Do $e^{i\alpha x} = \cos(\alpha x) + i\sin(\alpha x)$, ta thu được giá trị cho các hàm lượng giác thực bằng cách đồng nhất hai vế:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} \cos(\alpha x) \, dx = \text{Re} \left[ 2\pi i \sum \dots + \pi i \sum \dots \right]$$
> $$\text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} \sin(\alpha x) \, dx = \text{Im} \left[ 2\pi i \sum \dots + \pi i \sum \dots \right]$$

> [!prf] Chứng minh chi tiết bằng kỹ thuật giải tích viền và Bổ đề Jordan
> **Bước 1: Phức hóa và thiết lập đường biên kín $\Gamma$**
> Ta không thao tác trực tiếp trên $\sin$ hay $\cos$ mà phức hóa bài toán bằng hàm bổ trợ $F(z) = \frac{P(z)}{Q(z)} e^{i\alpha z}$. 
> Xây dựng đường biên kín $\Gamma$ ở nửa mặt phẳng trên hoàn toàn tương tự như dạng phân thức:
> - Các đoạn thẳng trên trục hoành $[-R, x_1-\varepsilon] \cup \dots \cup [x_m+\varepsilon, R]$.
> - Các nửa đường tròn nhỏ $C_{\varepsilon, j}$ bán kính $\varepsilon$ tâm $x_j$, định hướng theo chiều kim đồng hồ (hướng âm) để né các điểm kì dị.
> - Nửa đường tròn lớn $C_R$ bán kính $R$ định hướng dương (ngược chiều kim đồng hồ).
> 
> Khi chọn $R$ đủ lớn và $\varepsilon$ đủ nhỏ, theo Định lý Thặng dư Cauchy:
> $$\int_{\Gamma} F(z) \, dz = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}(F, a_k)$$
> 
> **Bước 2: Phân rã tuyến tính và tiệm cận hóa các cung tròn**
> Khai triển tích phân tổng thể trên biên kín $\Gamma$:
> $$\left[ \int_{-R}^{x_1-\varepsilon} + \dots + \int_{x_m+\varepsilon}^{R} \right] F(x) \, dx + \sum_{j=1}^{m} \int_{C_{\varepsilon, j}} F(z) \, dz + \int_{C_R} F(z) \, dz = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}(F, a_k)$$
> 
> Tiến hành lấy giới hạn đồng thời khi $R \to \infty$ và $\varepsilon \to 0$:
> 
> 1. **Khảo sát cung lớn $C_R$ (Sự can thiệp của Bổ đề Jordan):**
>    Khác với hàm phân thức thuần túy cần chênh lệch 2 bậc, sự xuất hiện của $e^{i\alpha z}$ (với $\alpha > 0$) tạo ra hệ số suy giảm mũ $e^{-\alpha y}$ trên nửa mặt phẳng trên ($z = x + iy, y > 0$).
>    Do $\deg Q \ge \deg P + 1$, đa thức thỏa mãn $\lim_{|z| \to \infty} \frac{P(z)}{Q(z)} = 0$. Theo **Bổ đề Jordan**, tích phân trên cung lớn tự động hội tụ về $0$ mà không cần kẹp bằng bất đẳng thức $ML$:
>    $$\lim_{R \to \infty} \int_{C_R} \frac{P(z)}{Q(z)} e^{i\alpha z} \, dz = 0$$
> 
> 2. **Khảo sát các cung nhỏ $C_{\varepsilon, j}$ trên trục hoành:**
>    Lập luận tính toán hoàn toàn tương đương với trường hợp phân thức. Ta khai triển Laurent của $F(z)$ quanh cực điểm đơn $x_j$: $F(z) = \frac{\text{Res}(F, x_j)}{z - x_j} + g(z)$.
>    Đổi biến $z - x_j = \varepsilon e^{i\theta}$ với góc $\theta$ quét lùi từ $\pi$ về $0$:
>    $$\lim_{\varepsilon \to 0} \int_{C_{\varepsilon, j}} F(z) \, dz = \int_{\pi}^{0} \frac{\text{Res}(F, x_j)}{\varepsilon e^{i\theta}} \left( i\varepsilon e^{i\theta} d\theta \right) = -\pi i \cdot \text{Res}(F, x_j)$$
> 
> **Bước 3: Tổng hợp giới hạn trích xuất kết quả**
> Thay các giá trị tiệm cận vừa chứng minh vào phương trình ở Bước 1:
> $$\text{PV} \int_{-\infty}^{\infty} F(x) \, dx + \sum_{j=1}^{m} \left( -\pi i \cdot \text{Res}(F, x_j) \right) + 0 = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}(F, a_k)$$
> 
> Chuyển vế đại lượng mang dấu trừ sang vế phải, ta xác lập được hệ thức cuối cùng:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} e^{i\alpha x} \, dx = 2\pi i \sum_{\text{Im}(a_k) > 0} \text{Res}\left( F, a_k \right) + \pi i \sum_{j=1}^{m} \text{Res}\left( F, x_j \right)$$


> [!prp] Hệ quả 4.2: Tích phân cấu trúc Fourier
> Dưới các điều kiện nghiệm đúng của Bổ đề Jordan, lớp tích phân dạng Fourier trên toàn trục thực được tính thẳng bằng tổng thặng dư tại nửa mặt phẳng phức trên:
> $$\int_{-\infty}^{\infty} g(x) e^{i\alpha x} dx = 2\pi i \sum_{\text{Im}(a_j) > 0} \text{Res}\left( g(z)e^{i\alpha z}, a_j \right)$$



### 5.1. Bài Tập Minh Họa Đặc Trưng

> [!exr] Bài toán minh họa (Giải pháp không dùng Jordan)
> Tính giá trị chính Cauchy (Cauchy Principal Value) của tích phân lượng giác Dirichlet sau bằng phương pháp tích phân từng phần (hạ bậc tử số) kết hợp ước lượng $ML$ tiêu chuẩn:
> $$I = \text{PV} \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx$$

> [!prf] Lời giải chi tiết chuẩn mực thi cử (Không sử dụng Bổ đề Jordan)
> 
> **Bước 1: Biến đổi tích phân thực để nâng bậc mẫu số**
> Do hàm số dưới dấu tích phân $f(x) = \frac{\sin x}{x}$ có hiệu bậc của đa thức mẫu và tử bằng $1$ (vùng nguy hiểm nếu tham số hóa trực tiếp), ta tiến hành tích phân từng phần trên các đoạn thực đối xứng trước khi chuyển sang mặt phẳng phức.
> 
> Áp dụng định nghĩa Giá trị chính Cauchy:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \lim_{\substack{R \to \infty \\ \varepsilon \to 0}} \left[ \int_{-R}^{-\varepsilon} \frac{\sin x}{x} \, dx + \int_{\varepsilon}^{R} \frac{\sin x}{x} \, dx \right]$$
> 
> Xét phép tích phân từng phần trên từng đoạn thực:
> Đặt $\begin{cases} u = \frac{1}{x} \implies du = -\frac{1}{x^2} \, dx \\ dv = \sin x \, dx \implies v = -\cos x \end{cases}$
> 
> Biến đổi biểu thức trong dấu giới hạn:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \lim_{\substack{R \to \infty \\ \varepsilon \to 0}} \left[ \left. -\frac{\cos x}{x} \right|_{-R}^{-\varepsilon} + \left. -\frac{\cos x}{x} \right|_{\varepsilon}^{R} \right] - \lim_{\substack{R \to \infty \\ \varepsilon \to 0}} \left[ \int_{-R}^{-\varepsilon} \frac{\cos x}{x^2} \, dx + \int_{\varepsilon}^{R} \frac{\cos x}{x^2} \, dx \right]$$
> 
> Khai triển phần thế cận số hạng tự do:
> $$\lim_{\substack{R \to \infty \\ \varepsilon \to 0}} \left[ \left( -\frac{\cos(-\varepsilon)}{-\varepsilon} - \left( -\frac{\cos(-R)}{-R} \right) \right) + \left( -\frac{\cos R}{R} - \left( -\frac{\cos\varepsilon}{\varepsilon} \right) \right) \right]$$
> $$= \lim_{\substack{R \to \infty \\ \varepsilon \to 0}} \left[ \left( \frac{\cos\varepsilon}{\varepsilon} - \frac{\cos R}{R} \right) + \left( -\frac{\cos R}{R} + \frac{\cos\varepsilon}{\varepsilon} \right) \right] = \lim_{\substack{R \to \infty \\ \varepsilon \to 0}} \left[ \frac{2\cos\varepsilon}{\varepsilon} - \frac{2\cos R}{R} \right]$$
> 
> Vì $|\cos R| \le 1$, theo nguyên lý kẹp ta có $\lim_{R \to \infty} \frac{2\cos R}{R} = 0$. Phương trình tích phân thực lùi về dạng:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \lim_{\varepsilon \to 0} \frac{2\cos\varepsilon}{\varepsilon} - \text{PV} \int_{-\infty}^{\infty} \frac{\cos x}{x^2} \, dx \quad (1)$$
> Lúc này, hàm số trong tích phân mới có mẫu số đạt **bậc 2** ($\deg Q - \deg P = 2$), đảm bảo an toàn để sử dụng bất đẳng thức $ML$.
> 
> **Bước 2: tham số hóa và thiết lập đường biên tích phân $\Gamma$**
> Theo công thức Euler, ta có $\cos x = \text{Re}(e^{ix})$. Xét hàm phức bổ trợ tương ứng:
> $$f(z) = \frac{e^{iz}}{z^2}$$
> Hàm số $f(z)$ nhận điểm $z = 0$ làm cực điểm bội bậc 2 trên trục hoành.
> 
> Xây dựng đường viền khép kín $\Gamma$ ở nửa mặt phẳng trên ($\text{Im}(z) \ge 0$) gồm 4 thành phần:
> 1. Đoạn thẳng thực $[-R, -\varepsilon]$.
> 2. Cung tròn nhỏ $C_\varepsilon$ bán kính $\varepsilon$ tâm $O$, định hướng âm (chạy theo chiều kim đồng hồ từ góc $\pi$ về $0$) để né điểm kì dị.
> 3. Đoạn thẳng thực $[\varepsilon, R]$.
> 4. Nửa đường tròn lớn $C_R$ bán kính $R$ tâm $O$, định hướng dương (chạy ngược chiều kim đồng hồ từ góc $0$ đến $\pi$).
> 
> Do cực điểm $z=0$ đã bị loại bỏ ra ngoài biên viền, hàm số $f(z)$ giải tích hoàn toàn bên trong miền đóng biên bởi $\Gamma$. Theo Định lý tích phân Cauchy:
> $$\int_{\Gamma} \frac{e^{iz}}{z^2} \, dz = \int_{-R}^{-\varepsilon} \frac{e^{ix}}{x^2} \, dx + \int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz + \int_{\varepsilon}^{R} \frac{e^{ix}}{x^2} \, dx + \int_{C_R} \frac{e^{iz}}{z^2} \, dz = 0 \quad (2)$$
> 
> **Bước 3: Khảo sát hành vi tiệm cận của các cấu trúc cung tròn**
> 
> **1. Đánh giá cung lớn $C_R$ bằng $ML$ tiêu chuẩn (Tuyệt đối không dùng Jordan):**
> Trên cung lớn $C_R$, ta có $|z| = R$ và độ dài cung $L = \pi R$. Do miền khảo sát thỏa mãn $\text{Im}(z) = y \ge 0$, ta có ước lượng mô-đun hàm mũ: $\left| e^{iz} \right| = e^{-y} \le 1$.
> Chặn trên mô-đun hàm số bằng bất đẳng thức tam giác đảo:
> $$|f(z)| = \left| \frac{e^{iz}}{z^2} \right| \le \frac{1}{R^2} = M(R)$$
> Áp dụng bất đẳng thức $ML$ tiêu chuẩn cho tích phân đường:
> $$\left| \int_{C_R} \frac{e^{iz}}{z^2} \, dz \right| \le M(R) \cdot L = \frac{1}{R^2} \cdot \pi R = \frac{\pi}{R}$$
> Lấy giới hạn ra vô cực: $\lim_{R \to \infty} \frac{\pi}{R} = 0 \implies \lim_{R \to \infty} \int_{C_R} \frac{e^{iz}}{z^2} \, dz = 0 \quad (3)$
> 
> **2. Khảo sát cung nhỏ $C_\varepsilon$ bằng phương pháp thặng dư ($\text{Res}$):**
> Vì $z=0$ là cực điểm bậc 2, ta phân rã hàm số qua phần chính Laurent và phần đều giải tích chỉnh hình $h(z)$ (bị chặn bởi $M_0$):
> $$f(z) = \frac{A}{z^2} + \frac{\text{Res}(f, 0)}{z} + h(z)$$
> Với hằng số cấu trúc bậc cao $A = \lim_{z \to 0} z^2 f(z) = \lim_{z \to 0} e^{iz} = 1$, và thặng dư tiêu chuẩn:
> $$\text{Res}(f, 0) = \frac{1}{(2-1)!}\lim_{z \to 0} \frac{d}{dz}\left[ z^2 \frac{e^{iz}}{z^2} \right] = \lim_{z \to 0} i e^{iz} = i$$
> 
> Tính tích phân từng thành phần trên cung nhỏ $C_\varepsilon$ bằng phép tham số hóa trực tiếp ($z = \varepsilon e^{i\theta} \implies dz = i\varepsilon e^{i\theta} d\theta$), biến góc $\theta$ chạy lùi từ $\pi$ về $0$:
> - Thành phần bậc cao:
>   $$\int_{C_\varepsilon} \frac{1}{z^2} \, dz = \int_{\pi}^{0} \frac{i\varepsilon e^{i\theta}}{\varepsilon^2 e^{i2\theta}} \, d\theta = \frac{i}{\varepsilon} \int_{\pi}^{0} e^{-i\theta} \, d\theta = -\frac{i}{\varepsilon} \left. \frac{e^{-i\theta}}{-i} \right|_{0}^{\pi} = \frac{1}{\varepsilon}\left(e^{-i\pi} - e^0\right) = -\frac{2}{\varepsilon}$$
> - Thành phần thặng dư:
>   $$\int_{C_\varepsilon} \frac{1}{z} \, dz = \int_{\pi}^{0} \frac{i\varepsilon e^{i\theta}}{\varepsilon e^{i\theta}} \, d\theta = i \int_{\pi}^{0} d\theta = -\pi i$$
> - Thành phần phần đều chỉnh hình: Áp dụng $ML$, $\left|\int_{C_\varepsilon} h(z)dz\right| \le M_0 \cdot \pi\varepsilon \xrightarrow{\varepsilon \to 0} 0$.
> 
> Gộp lại ta thu được giá trị tiệm cận của cung nhỏ khi $\varepsilon \to 0$:
> $$\int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz = 1 \cdot \left( -\frac{2}{\varepsilon} \right) + i \cdot (-\pi i) + \mathcal{O}(\varepsilon) = -\frac{2}{\varepsilon} + \pi + \mathcal{O}(\varepsilon) \quad (4)$$
> 
> **Bước 4: Đồng nhất đại số trích xuất đáp số cuối cùng**
> Cho giới hạn đồng thời $R \to \infty$ và $\varepsilon \to 0$, thế các kết quả tiệm cận $(3)$ và $(4)$ vào phương trình tích phân tổng thể đường viền kín $(2)$:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{e^{ix}}{x^2} \, dx + \left( -\frac{2}{\varepsilon} + \pi \right) + 0 = 0$$
> 
> Để cô lập phần hàm thực $\cos x$ từ hàm bổ trợ $e^{ix}$, ta tiến hành áp dụng toán tử lấy phần thực ($\text{Re}$) lên cả hai vế của phương trình phức:
> $$\text{Re} \left[ \text{PV} \int_{-\infty}^{\infty} \frac{e^{ix}}{x^2} \, dx \right] + \text{Re}\left[ -\frac{2}{\varepsilon} + \pi \right] = \text{Re}[0]$$
> 
> Do $\frac{2}{\varepsilon}$ và $\pi$ là các đại lượng thực, ta thu được phương trình đại số thực:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{\cos x}{x^2} \, dx - \frac{2}{\varepsilon} + \pi = 0 \implies \text{PV} \int_{-\infty}^{\infty} \frac{\cos x}{x^2} \, dx = \frac{2}{\varepsilon} - \pi \quad (5)$$
> 
> Thế phương trình kết quả thực $(5)$ này ngược trở lại phương trình hệ quả $(1)$ thu được từ Bước 1:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \lim_{\varepsilon \to 0} \frac{2\cos\varepsilon}{\varepsilon} - \left( \frac{2}{\varepsilon} - \pi \right)$$
> 
> Khai triển Taylor hàm số thực $\cos\varepsilon = 1 - \frac{\varepsilon^2}{2} + \mathcal{O}(\varepsilon^4)$ tại lân cận điểm $0$ để xử lý triệt tiêu lượng vô hạn:
> $$\text{PV} \int_{-\infty}^{\infty} \frac{\sin x}{x} \, dx = \lim_{\varepsilon \to 0} \left[ \frac{2\left(1 - \frac{\varepsilon^2}{2} + \mathcal{O}(\varepsilon^4)\right)}{\varepsilon} - \frac{2}{\varepsilon} + \pi \right]$$
> $$= \lim_{\varepsilon \to 0} \left[ \left(\frac{2}{\varepsilon} - \varepsilon + \mathcal{O}(\varepsilon^3)\right) - \frac{2}{\varepsilon} + \pi \right]$$
> 
> Lượng vô hạn thực $\frac{2}{\varepsilon}$ và $-\frac{2}{\varepsilon}$ triệt tiêu đối xứng hoàn hảo, hệ phương trình rút gọn về:
> $$= \lim_{\varepsilon \to 0} \left[ \pi - \varepsilon + \mathcal{O}(\varepsilon^3) \right] = \pi$$
> 
> Vậy giá trị tích phân Dirichlet cuối cùng bằng: $I = \pi$

