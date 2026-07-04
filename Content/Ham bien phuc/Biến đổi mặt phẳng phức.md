# Các hàm biến phức sơ cấp

## 1. Hàm Mũ Phức ($w = e^z$)

> [!def] Công thức tổng quát
> Cho số phức $z = x + iy$. Hàm mũ phức $e^z$ được định nghĩa qua công thức Euler:
> $$w = e^z = e^{x+iy} = e^x(\cos y + i\sin y)$$
> - Mô-đun: $|e^z| = e^x$
> - Argument: $\arg(e^z) = y + 2k\pi$

> [!thm] Tính chất và So sánh với hàm thực
> **1. Các tính chất kế thừa từ hàm thực (ĐÚNG):**
> - $e^{z_1 + z_2} = e^{z_1}e^{z_2}$
> - $e^z \neq 0, \forall z \in \mathbb{C}$
> - Đạo hàm: $(e^z)' = e^z$
> 
> **2. Khác biệt cốt lõi (Chu kỳ thuần ảo):**
> Khác với hàm $e^x$ trên tập thực là đơn ánh, hàm $e^z$ là một hàm tuần hoàn với chu kỳ $T = 2\pi i$.
> $$e^{z + 2k\pi i} = e^z \cdot e^{2k\pi i} = e^z (\cos(2k\pi) + i\sin(2k\pi)) = e^z$$

> [!exm] Ví dụ tính toán
> Tính giá trị của $e^{2 + i\frac{\pi}{3}}$:
> $$e^{2 + i\frac{\pi}{3}} = e^2 \left( \cos\frac{\pi}{3} + i\sin\frac{\pi}{3} \right) = e^2 \left( \frac{1}{2} + i\frac{\sqrt{3}}{2} \right) = \frac{e^2}{2} + i\frac{e^2\sqrt{3}}{2}$$

> [!prf] Khảo sát Ánh xạ & Tính Bảo giác
> **1. Phép biến đổi mặt phẳng:**
> - Các đường thẳng đứng $x = c$ (phần thực không đổi): $|w| = e^c$ là hằng số, $y$ thay đổi từ $-\infty$ đến $\infty$. Ảnh là một **đường tròn** tâm gốc tọa độ, bán kính $e^c$.
> - Các đường nằm ngang $y = c$ (phần ảo không đổi): $\arg(w) = c$ là hằng số, mô-đun $e^x$ quét từ $0$ đến $\infty$. Ảnh là một **tia** phát xuất từ gốc tọa độ (không chứa gốc) tạo góc $c$ với trục thực.
> 
> **2. Xét tính bảo giác:**
> Hàm $f(z) = e^z$ là hàm chỉnh hình trên toàn $\mathbb{C}$. Đạo hàm $f'(z) = e^z \neq 0, \forall z \in \mathbb{C}$. Do đó, hàm mũ phức là **ánh xạ bảo giác** tại mọi điểm trên mặt phẳng phức.

---

## 2. Hàm Logarit Phức ($w = \log z$)

> [!def] Công thức tổng quát (Hàm đa trị)
> Logarit phức là hàm ngược của hàm mũ. Với $z \neq 0$:
> $$\log z = \ln|z| + i\arg(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi) \quad (k \in \mathbb{Z})$$
> Do tính tuần hoàn của hàm mũ, $\log z$ là một **hàm vô hạn trị**.

> [!thm] Trị chính (Principal Value)
> Để có hàm đơn trị, ta giới hạn argument trong một khoảng chiều dài $2\pi$, thường là $(-\pi, \pi]$. Trị chính được ký hiệu là $\text{Log}(z)$:
> $$\text{Log}(z) = \ln|z| + i\text{Arg}(z) \quad \text{với } -\pi < \text{Arg}(z) \le \pi$$

> [!prf] So sánh tính đúng đắn với hàm thực: Tính chất $\text{Log}(z_1 z_2)$
> Trên tập thực, $\ln(ab) = \ln(a) + \ln(b)$ luôn đúng với $a, b > 0$. Trên tập phức, dưới dạng tập hợp đa trị: $\log(z_1 z_2) = \log z_1 + \log z_2$ là **ĐÚNG**.
> Tuy nhiên, với hàm trị chính $\text{Log}$, đẳng thức $\text{Log}(z_1 z_2) = \text{Log}(z_1) + \text{Log}(z_2)$ là **KHÔNG LUÔN ĐÚNG**.
> **Chứng minh / Phản ví dụ:**
> Xét $z_1 = -1, z_2 = -1$. Ta có $z_1 z_2 = 1$.
> $\text{Log}(z_1 z_2) = \text{Log}(1) = 0$.
> Trong khi đó: $\text{Log}(-1) = \ln(1) + i\pi = i\pi$.
> $\text{Log}(z_1) + \text{Log}(z_2) = i\pi + i\pi = 2\pi i$.
> Rõ ràng $0 \neq 2\pi i$. Công thức tổng quát phải là: $\text{Log}(z_1 z_2) = \text{Log}(z_1) + \text{Log}(z_2) + 2k\pi i$.

> [!exm] Ví dụ tính toán
> Tính $\log(-1 - i)$ và tìm trị chính.
> - Mô-đun: $|-1-i| = \sqrt{2}$. Góc: Trục nằm ở góc phần tư thứ 3, $\text{Arg}(-1-i) = -\frac{3\pi}{4}$.
> - $\log(-1-i) = \ln\sqrt{2} + i\left(-\frac{3\pi}{4} + 2k\pi\right)$.
> - Trị chính ($k=0$): $\text{Log}(-1-i) = \ln\sqrt{2} - i\frac{3\pi}{4}$.

> [!prf] Khảo sát Ánh xạ & Tính Bảo giác
> **1. Phép biến đổi mặt phẳng (Nhánh chính):**
> Ánh xạ $w = \text{Log}(z)$ biến hệ tọa độ cực thành hệ tọa độ Descartes:
> - Cung tròn $|z| = r$ (tâm O) $\mapsto$ Đoạn thẳng thẳng đứng tại $u = \ln r$.
> - Tia $\text{Arg}(z) = \theta$ $\mapsto$ Đường thẳng nằm ngang tại $v = \theta$.
> 
> **2. Xét tính bảo giác:**
> Xét nhánh chính trên miền $D = \mathbb{C} \setminus (-\infty, 0]$. Đạo hàm $f'(z) = \frac{1}{z} \neq 0, \forall z \in D$. Do đó, nhánh chính của logarit là **ánh xạ bảo giác** tại mọi điểm không nằm trên tia thực âm và gốc tọa độ.

---

## 3. Hàm Lũy thừa Phức Tổng quát ($w = z^c$)

> [!def] Công thức tổng quát
> Cho $z, c \in \mathbb{C}, z \neq 0$. Hàm lũy thừa được định nghĩa thông qua hàm logarit đa trị:
> $$z^c = e^{c \log z} = e^{c[\ln|z| + i(\text{Arg}(z) + 2k\pi)]}$$

> [!thm] Trị chính của hàm lũy thừa
> Trị chính của $z^c$ đạt được khi ta thay $\log z$ bằng nhánh chính $\text{Log}(z)$:
> $$\text{PV}(z^c) = e^{c \text{Log}(z)}$$

> [!exm] Ví dụ: Tính $i^i$
> Tính tất cả các giá trị và trị chính của $i^i$:
> 1. Đưa về dạng logarit: $i^i = e^{i \log i}$.
> 2. Tính $\log i = \ln|i| + i(\frac{\pi}{2} + 2k\pi) = i(\frac{\pi}{2} + 2k\pi)$.
> 3. Thay vào công thức: $i^i = e^{i \cdot i(\frac{\pi}{2} + 2k\pi)} = e^{-(\frac{\pi}{2} + 2k\pi)}$.
> *Nhận xét:* Dù $i$ là số phức, kết quả $i^i$ lại là một tập hợp các số thực dương.
> - Trị chính ($k=0$): $\text{PV}(i^i) = e^{-\frac{\pi}{2}} \approx 0.2078$.

> [!prf] Khảo sát Ánh xạ & Tính Bảo giác
> Hàm $w = z^c$ bảo giác trên các nhánh đơn trị của nó (cắt đi tia thực âm) vì đạo hàm $w' = c z^{c-1} \neq 0$ (với $z \neq 0, c \neq 0$). Phép biến đổi cơ bản là phép nhân góc với $c$ và nâng mô-đun lên lũy thừa $c$.

---

## 4. Hàm Khai căn Bậc n ($w = \sqrt[n]{z}$)

> [!def] Công thức tổng quát
> Đây là trường hợp đặc biệt của lũy thừa khi $c = \frac{1}{n}$. Với $z = re^{i\theta}$:
> $$w = \sqrt[n]{z} = z^{\frac{1}{n}} = \sqrt[n]{r} e^{i \frac{\theta + 2k\pi}{n}} \quad \text{với } k = 0, 1, \dots, n-1$$
> Hàm sinh ra đúng $n$ giá trị phân biệt tạo thành một đa giác đều $n$ cạnh nội tiếp đường tròn bán kính $\sqrt[n]{r}$.

> [!exm] Ví dụ: Tìm các nghiệm của $\sqrt[3]{-8}$
> Số phức $z = -8 = 8e^{i\pi}$. Ta có $r = 8, \theta = \pi, n = 3$.
> $$w_k = \sqrt[3]{8} e^{i \frac{\pi + 2k\pi}{3}} = 2 e^{i \left(\frac{\pi}{3} + \frac{2k\pi}{3}\right)} \quad \text{với } k = 0, 1, 2$$
> - $k=0: w_0 = 2e^{i\pi/3} = 1 + i\sqrt{3}$ (Trị chính)
> - $k=1: w_1 = 2e^{i\pi} = -2$ (Trị thực)
> - $k=2: w_2 = 2e^{i5\pi/3} = 1 - i\sqrt{3}$

> [!prf] Khảo sát Ánh xạ
> Xét nhánh chính (trị chính). Nó biến toàn bộ mặt phẳng phức (bỏ tia thực âm) thành một hình quạt có góc mở $\frac{2\pi}{n}$. Ánh xạ này bảo giác tại mọi điểm $z \neq 0$ vì đạo hàm luôn tồn tại và khác $0$. $z=0$ là điểm rẽ nhánh (branch point).

---

## 5. Hàm Nghịch đảo ($w = \frac{1}{z}$)

> [!def] Công thức tổng quát
> Định nghĩa đơn giản: $w = \frac{1}{z}$. Đặt $z = re^{i\theta}$, ta có:
> $$w = \frac{1}{r e^{i\theta}} = \frac{1}{r} e^{-i\theta}$$

> [!thm] Khảo sát Ánh xạ: Phép nghịch đảo (Inversion)
> Phép biến đổi $w = 1/z$ thực chất là sự kết hợp của hai phép biến đổi hình học:
> 1. **Nghịch đảo qua đường tròn đơn vị:** Mô-đun $r$ thành $1/r$. Điểm ngoài đường tròn rơi vào trong và ngược lại.
> 2. **Phản xạ qua trục thực:** Góc $\theta$ biến thành $-\theta$.
> 
> **Tính chất "Bảo toàn đường tròn" (Circle-preserving property):**
> Trong mặt phẳng phức mở rộng $\hat{\mathbb{C}}$, ánh xạ $w=1/z$ biến một "đường tròn tổng quát" (đường tròn hoặc đường thẳng) thành một "đường tròn tổng quát" khác.
> - Đường thẳng qua gốc O $\mapsto$ Đường thẳng qua gốc O.
> - Đường thẳng không qua gốc O $\mapsto$ Đường tròn qua gốc O.
> - Đường tròn qua gốc O $\mapsto$ Đường thẳng không qua gốc O.
> - Đường tròn không qua gốc O $\mapsto$ Đường tròn không qua gốc O.

> [!prf] Tính Bảo giác
> Đạo hàm $f'(z) = -\frac{1}{z^2}$. Rõ ràng $f'(z) \neq 0$ với mọi $z \neq 0$. Do đó, hàm nghịch đảo là ánh xạ bảo giác tại mọi điểm $z \neq 0$. Kể cả tại $z=0$, nếu xét trên mặt phẳng phức mở rộng (mặt cầu Riemann), hàm vẫn bảo giác tại cực $\infty$.

---

## 6. Hàm Lượng giác Phức ($\sin z, \cos z$)

> [!def] Công thức tổng quát
> Hàm lượng giác thực được mở rộng lên trường số phức thông qua công thức Euler:
> $$\cos z = \frac{e^{iz} + e^{-iz}}{2}$$
> $$\sin z = \frac{e^{iz} - e^{-iz}}{2i}$$

> [!thm] So sánh với hàm thực (Đẳng thức vs. Bất đẳng thức)
> **1. Các đẳng thức lượng giác ĐÚNG trên $\mathbb{C}$:**
> - $\cos^2 z + \sin^2 z = 1$
> - $\sin(z_1 + z_2) = \sin z_1 \cos z_2 + \cos z_1 \sin z_2$
> - Tính tuần hoàn: $\sin(z+2\pi) = \sin z, \cos(z+2\pi) = \cos z$
> 
> *Chứng minh $\cos^2 z + \sin^2 z = 1$:*
> $\cos^2 z = \frac{e^{2iz} + 2 + e^{-2iz}}{4}$ và $\sin^2 z = \frac{e^{2iz} - 2 + e^{-2iz}}{-4}$
> Cộng hai vế: $\cos^2 z + \sin^2 z = \frac{e^{2iz} + 2 + e^{-2iz} - (e^{2iz} - 2 + e^{-2iz})}{4} = \frac{4}{4} = 1$.
> 
> **2. Tính chất KHÔNG ĐÚNG: Tính bị chặn**
> Trên $\mathbb{R}$, $|\sin x| \le 1$ và $|\cos x| \le 1$. Tuy nhiên, trên $\mathbb{C}$, các hàm lượng giác **không bị chặn**. Giá trị mô-đun của chúng có thể lớn đến vô cực.

> [!prf] Chứng minh hàm Lượng giác phức không bị chặn
> Xét $z = iy$ (một số thuần ảo), khi đó $y \in \mathbb{R}$.
> $$\sin(iy) = \frac{e^{i(iy)} - e^{-i(iy)}}{2i} = \frac{e^{-y} - e^y}{2i} = i\left( \frac{e^y - e^{-y}}{2} \right) = i \sinh y$$
> Xét mô-đun: $|\sin(iy)| = |\sinh y|$.
> Khi $y \to +\infty$, rõ ràng $\sinh y \to +\infty$. Do đó $|\sin z|$ có thể nhận giá trị lớn tùy ý. Điều này dẫn đến kết quả nổi tiếng (Định lý Liouville): Một hàm chỉnh hình không hằng trên toàn bộ $\mathbb{C}$ thì bắt buộc phải không bị chặn. Hàm sin và cos phức tuân thủ tuyệt đối định lý này.

> [!exm] Ví dụ tính toán
> Giải phương trình $\cos z = 2$. (Điều vô lý trong hàm thực nhưng hoàn toàn giải được trong hàm phức).
> Ta có $\frac{e^{iz} + e^{-iz}}{2} = 2 \implies e^{iz} + e^{-iz} = 4$. Đặt $X = e^{iz}$, ta được $X^2 - 4X + 1 = 0$.
> Nghiệm: $X = 2 \pm \sqrt{3}$.
> Do $e^{iz} = 2 \pm \sqrt{3} \implies iz = \log(2 \pm \sqrt{3}) = \ln(2 \pm \sqrt{3}) + 2k\pi i$.
> Vậy $z = 2k\pi - i\ln(2 \pm \sqrt{3})$ với $k \in \mathbb{Z}$.

> [!prf] Khảo sát Ánh xạ & Tính Bảo giác
> Hàm $w = \sin z$ có đạo hàm $w' = \cos z$. Đạo hàm bằng 0 tại $z = \frac{\pi}{2} + k\pi$.
> - Do đó, ánh xạ $\sin z$ là bảo giác tại mọi điểm ngoại trừ $z = \frac{\pi}{2} + k\pi$ (các điểm tới hạn này sẽ không bảo toàn góc).
> - Ánh xạ biến dải hình chữ nhật $-\frac{\pi}{2} < x < \frac{\pi}{2}, y > 0$ thành nửa trên của mặt phẳng phức, biến các đường nằm ngang $y=c$ thành các hình elip và đường thẳng đứng $x=c$ thành các hyperbol nhận tiêu điểm $\pm 1$.
