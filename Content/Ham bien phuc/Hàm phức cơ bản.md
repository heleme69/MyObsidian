# TỔNG HỢP TOÀN DIỆN LÝ THUYẾT VÀ PHƯƠNG PHÁP GIẢI HÀM PHỨC (CẬP NHẬT ĐẦY ĐỦ)
*(Bao gồm Chương 1, Chương 2 và toàn bộ các hàm sơ cấp trong Chương 5)*

Tài liệu này trình bày chi tiết mọi định lý, tính chất nền tảng, hàm đa trị, trị chính, lượng giác, hyperbol và các hàm ngược, cùng với các phương pháp giải bài tập tương ứng [1-3].

---

## PHẦN 1: CÔNG THỨC EULER VÀ KHAI CĂN BẬC N (CHƯƠNG 1)

### 1. Dạng Mũ và Công Thức Euler (Euler's Formula)
**Lý thuyết:**
Mọi số phức $z = x + iy$ ($z \neq 0$) đều có thể biểu diễn dưới dạng phân cực (polar form) qua công thức Euler: 
$e^{i\theta} = \cos \theta + i\sin \theta$ [4, 5]. 
Từ đó, ta có biểu diễn dạng mũ của số phức: $z = r e^{i\theta}$, trong đó $r = |z| = \sqrt{x^2+y^2}$ là modun và $\theta = \arg(z)$ là argument của $z$ [4, 6].

### 2. Định Lý De Moivre và Lũy Thừa Số Nguyên
**Lý thuyết:**
Cho phép tính lũy thừa bậc $n$ (với $n$ là số nguyên) một cách dễ dàng:
$(\cos \theta + i\sin \theta)^n = \cos n\theta + i\sin n\theta$ [7, 8].
Hệ quả: $z^n = (re^{i\theta})^n = r^n(\cos n\theta + i\sin n\theta)$ [9].

### 3. Phép Khai Căn Bậc $n$ (The $n$-th Roots)
**Lý thuyết:**
Phương trình $z^n = c$ (với $c = \rho e^{i\phi} \neq 0$) luôn có đúng $n$ nghiệm phân biệt [10]. Các nghiệm (căn bậc $n$) được tính bởi công thức:
$z_k = \rho^{1/n} \exp\left[ i \left( \frac{\phi + 2k\pi}{n} \right) \right] = \rho^{1/n} \left( \cos \frac{\phi + 2k\pi}{n} + i \sin \frac{\phi + 2k\pi}{n} \right)$, với $k = 0, 1, 2, \dots, n-1$ [10, 11].

**Phương pháp giải bài toán "Tìm căn bậc $n$":**
*   **Bước 1:** Đưa $c$ về dạng cực $c = \rho e^{i\phi}$ với $\rho = |c|$ và $\phi = \text{Arg}(c)$ [11].
*   **Bước 2:** Lấy căn bậc $n$ của số thực dương $\rho \Rightarrow r = \rho^{1/n}$ [11].
*   **Bước 3:** Lập công thức góc $\theta_k = \frac{\phi + 2k\pi}{n}$ [11].
*   **Bước 4:** Lần lượt thay $k = 0, \dots, n-1$ để tìm tất cả các nghiệm [11].

---

## PHẦN 2: HÀM ĐA TRỊ VÀ CÁC NHÁNH (CHƯƠNG 2)

### 1. Khái niệm Hàm Đa Trị (Multivalued Functions)
**Lý thuyết:**
Hàm ngược của các hàm biến đổi góc (như $w=z^n$ hoặc $w=e^z$) thường là hàm đa trị, nghĩa là một giá trị $z$ ánh xạ ra nhiều giá trị $w$ [2, 12]. Ví dụ, hàm căn bậc hai $w = z^{1/2}$ gán hai giá trị phân biệt cho mỗi $z \neq 0$ [12].

### 2. Nhánh (Branches) và Lát Cắt Nhánh (Branch Cuts)
**Lý thuyết:**
Để áp dụng giải tích (liên tục, đạo hàm) lên hàm đa trị, ta chia nó thành các hàm đơn trị được gọi là các **nhánh** [13].
*   **Trị chính (Principal branch):** Với $w = z^{1/2}$, trị chính là $f_1(z) = r^{1/2} e^{i\theta/2}$ với $-\pi < \theta \le \pi$ [13].
*   **Lát cắt nhánh (Branch cut):** Một tia hoặc đường cong mà tại đó hàm số bị gián đoạn. Với trị chính $f_1(z)$, đó là phần âm của trục thực [14, 15].
*   **Điểm rẽ nhánh (Branch point):** Giao điểm của mọi lát cắt nhánh. Với $z^{1/n}$, gốc tọa độ $0$ là điểm rẽ nhánh [16]. Khái niệm Mặt Riemann ghép các mặt phẳng bị cắt để tạo thành bề mặt liên tục cho hàm đa trị [16, 17].

---

## PHẦN 3: HÀM MŨ PHỨC (CHƯƠNG 5.1)

### Lý thuyết
Hàm mũ phức được định nghĩa bằng chuỗi $e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!}$ hoặc công thức:
$e^z = e^{x+iy} = e^x(\cos y + i \sin y)$ [18-20].
*   **Tính chất giải tích:** Là hàm nguyên (entire function), đạo hàm $\frac{d}{dz} e^z = e^z$ [21].
*   **Chu kỳ:** Hàm mũ phức là hàm tuần hoàn với chu kỳ $2\pi i$, do đó $e^{z+2n\pi i} = e^z$ ($n \in \mathbb{Z}$) [22].
*   **Modun và Argument:** $|e^z| = e^x$ và $\arg(e^z) = y + 2n\pi$ [23].

### Phương pháp giải PT $e^z = w$
*   **Bước 1:** Viết $w$ dưới dạng phân cực: $w = |w|e^{i\text{Arg}(w)}$ [24].
*   **Bước 2:** Đồng nhất phần modun: $e^x = |w| \Rightarrow x = \ln|w|$ [24].
*   **Bước 3:** Đồng nhất argument: $y = \text{Arg}(w) + 2n\pi$ [24].
*   **Kết luận:** $z = \ln|w| + i(\text{Arg}(w) + 2n\pi)$ với $n \in \mathbb{Z}$ [24].

---

## PHẦN 4: HÀM LOGARIT PHỨC (CHƯƠNG 5.2)

### Lý thuyết
Vì $e^z$ tuần hoàn, hàm ngược $\log(z)$ là một hàm đa trị có vô số giá trị [25, 26]:
$\log(z) = \ln|z| + i \arg(z) = \ln|z| + i(\text{Arg}(z) + 2n\pi)$ với $n \in \mathbb{Z}$ [26, 27].
*   **Trị chính (Principal Value):** Ký hiệu $\text{Log}(z)$, giới hạn góc argument trong $(-\pi, \pi]$:
    $\text{Log}(z) = \ln|z| + i\text{Arg}(z)$ [27].
*   **Đạo hàm:** Dùng đạo hàm ẩn (implicit differentiation), $\frac{d}{dz}\log(z) = \frac{1}{z}$ trên mọi nhánh không chứa lát cắt [28-30].
*   **Tính chất đại số:** $\log(z_1z_2) = \log(z_1) + \log(z_2)$, $\log(z_1/z_2) = \log(z_1) - \log(z_2)$ (chỉ luôn đúng đối với hàm đa trị, có thể sai lệch $i2\pi$ đối với hàm trị chính $\text{Log}$) [31, 32].

### Phương pháp tính Logarit
*   **Bước 1:** Xác định modun $r = |z|$ và góc chính $\theta = \text{Arg}(z)$ [28].
*   **Bước 2:** Tính trị chính $\text{Log}(z) = \ln(r) + i\theta$ [28].
*   **Bước 3:** Để tìm mọi giá trị của $\log(z)$, cộng thêm $i2n\pi$: $\log(z) = \text{Log}(z) + i2n\pi$ [26, 27].

---

## PHẦN 5: LŨY THỪA PHỨC (CHƯƠNG 5.3)

### Lý thuyết
Lũy thừa phức $z^c$ (với cơ số $z \neq 0$ và số mũ $c$ phức) được định nghĩa qua hàm logarit đa trị:
$z^c = \exp[c \log(z)]$ [33].
*   **Tính đa trị:** Vì $\log(z)$ đa trị, $z^c$ nói chung có vô số giá trị [33, 34].
*   **Trị chính:** Thu được khi ta dùng nhánh chính của logarit: $f(z) = \exp[c \text{Log}(z)]$ [33].
*   **Đạo hàm:** $\frac{d}{dz} z^c = c z^{c-1}$ (áp dụng trên một nhánh xác định) [35]. Tương tự $\frac{d}{dz} b^z = b^z \log(b)$ [36].

### Phương pháp giải & Ví dụ vận dụng
**Câu hỏi:** *Hãy tìm tất cả các giá trị của $(i e^{\pi})^i$. Ghi rõ giá trị chính.*
**Bước giải chi tiết:**
1.  **Xác định $z$ và $\log(z)$:** Cơ số $z = i e^{\pi} \Rightarrow |z| = e^{\pi}$ và $\text{Arg}(z) = \pi/2$ (vì nằm trên tia ảo dương).
2.  **Viết biểu thức $\log(z)$:**
    $\log(i e^{\pi}) = \ln(e^{\pi}) + i\left(\frac{\pi}{2} + 2n\pi\right) = \pi + i\left(\frac{\pi}{2} + 2n\pi\right)$, với $n \in \mathbb{Z}$ [26, 27].
3.  **Nhân với số mũ $c = i$:**
    $i \log(z) = i\left[ \pi + i\left(\frac{\pi}{2} + 2n\pi\right) \right] = i\pi - \left(\frac{\pi}{2} + 2n\pi\right)$ [33].
4.  **Lấy hàm mũ $\exp()$ để tìm kết quả:**
    $(ie^{\pi})^i = \exp\left[ -\left(\frac{\pi}{2} + 2n\pi\right) + i\pi \right] = e^{-(\pi/2 + 2n\pi)} \cdot e^{i\pi}$ [33].
    Vì $e^{i\pi} = \cos\pi + i\sin\pi = -1$ [37], kết quả mọi giá trị là:
    **Tất cả các giá trị:** $-e^{-(\pi/2 + 2n\pi)}$, với $n \in \mathbb{Z}$.
5.  **Tính trị chính:** Ứng với $n = 0$ (sử dụng $\text{Log}(z)$):
    **Giá trị chính:** $-e^{-\pi/2}$ [33].

---

## PHẦN 6: HÀM LƯƠNG GIÁC VÀ HYPERBOL (CHƯƠNG 5.4)

### Lý thuyết Hàm Lượng Giác Phức ($\sin z, \cos z$)
*   **Định nghĩa qua chuỗi và hàm mũ:** 
    $\sin z = \sum_{n=0}^{\infty} (-1)^n \frac{z^{2n+1}}{(2n+1)!}$, $\cos z = \sum_{n=0}^{\infty} (-1)^n \frac{z^{2n}}{(2n)!}$ [38].
    Sử dụng Euler để biểu diễn mối liên hệ mũ: 
    $\sin z = \frac{e^{iz} - e^{-iz}}{2i}$, $\quad \cos z = \frac{e^{iz} + e^{-iz}}{2}$ [39].
*   **Tính chất:** Các hàm này là hàm nguyên (entire) và có đạo hàm: $\frac{d}{dz} \sin z = \cos z$, $\frac{d}{dz} \cos z = -\sin z$ [38, 40]. Đồng nhất thức $\sin^2 z + \cos^2 z = 1$ vẫn đúng trong mặt phẳng phức [40].
*   **Phân tích Thực - Ảo (u+iv):**
    $\sin(x+iy) = \sin x \cosh y + i \cos x \sinh y$ [41].
    $\cos(x+iy) = \cos x \cosh y - i \sin x \sinh y$ [41].
*   **Modun không bị chặn:** 
    $|\sin z|^2 = \sin^2 x + \sinh^2 y$, $|\cos z|^2 = \cos^2 x + \sinh^2 y$ [42]. Do $\sinh y \to \infty$ khi $y \to \infty$, cả $\sin z$ và $\cos z$ đều tiến tới vô cùng trên mặt phẳng phức, không bị chặn như trong số thực [42].
*   **Nghiệm (Zeros):** 
    $\sin z = 0 \iff z = n\pi$ ($n \in \mathbb{Z}$) [43].
    $\cos z = 0 \iff z = (n + \frac{1}{2})\pi$ ($n \in \mathbb{Z}$) [43].

### Lý thuyết Hàm Hyperbol ($\sinh z, \cosh z$)
*   **Định nghĩa:**
    $\sinh z = \frac{e^z - e^{-z}}{2}$, $\quad \cosh z = \frac{e^z + e^{-z}}{2}$ [44, 45].
*   **Liên hệ với hàm lượng giác:** 
    $\cosh(iz) = \cos z$, $\quad \sinh(iz) = i \sin z$ [46].
    $\cos(iz) = \cosh z$, $\quad \sin(iz) = i \sinh z$ [46].
*   **Đồng nhất thức Hyperbol:** $\cosh^2 z - \sinh^2 z = 1$ [46].

### Phương pháp giải PT Lượng Giác Phức
**Câu hỏi mẫu:** *Giải phương trình $\cos z = \cosh 2$.*
*   **Cách giải qua dạng $u+iv$:**
    1.  Viết $\cos z = \cos x \cosh y - i \sin x \sinh y = \cosh 2$ [47].
    2.  Đồng nhất phần thực và ảo: $\cos x \cosh y = \cosh 2$ và $\sin x \sinh y = 0$ [47].
    3.  Tõ $\sin x \sinh y = 0$, có hai khả năng: $y=0$ hoặc $x=n\pi$ [47].
    4.  Nếu $y=0$, $\cos x = \cosh 2 > 1$ (Vô lý đối với số thực $x$) [47].
    5.  Vậy $x=n\pi$. Suy ra $\cos(n\pi) \cosh y = \cosh 2$. Vì $\cosh y \ge 1$, ta phải có $\cos(n\pi) > 0 \Rightarrow n = 2k$ (chẵn), tức là $x = 2k\pi$ và $\cos(x)=1$ [47].
    6.  Thay lại được $\cosh y = \cosh 2 \Rightarrow y = \pm 2$ [48].
    7.  **Kết luận:** $z = 2k\pi \pm 2i$ với $k \in \mathbb{Z}$ [48].

---

## PHẦN 7: HÀM LƯƠNG GIÁC VÀ HYPERBOL NGƯỢC (CHƯƠNG 5.5)

### Lý thuyết
Vì các hàm lượng giác tuần hoàn (many-to-one), hàm ngược của chúng là các hàm đa trị, được xác định thông qua hàm logarit đa trị [49]:
*   $\arcsin z = -i \log[iz + (1 - z^2)^{1/2}]$ [50].
*   $\arccos z = -i \log[z + i(1 - z^2)^{1/2}]$ [50].
*   $\arctan z = \frac{i}{2} \log\left(\frac{i+z}{i-z}\right)$ [50].
Tương tự cho hàm Hyperbol ngược:
*   $\text{arcsinh } z = \log[z + (z^2+1)^{1/2}]$ [51].
*   $\text{arccosh } z = \log[z + (z^2-1)^{1/2}]$ [51].
*   $\text{arctanh } z = \frac{1}{2} \log\left(\frac{1+z}{1-z}\right)$ [51].

**Đạo hàm (dùng đạo hàm ẩn):**
$\frac{d}{dz} \arcsin z = \frac{1}{(1-z^2)^{1/2}}$ [50]; $\frac{d}{dz} \arctan z = \frac{1}{1+z^2}$ [50].

### Phương pháp tính giá trị Hàm lượng giác ngược
**Câu hỏi mẫu:** *Tính tất cả các giá trị của $\arcsin \sqrt{2}$.*
*   **Bước 1:** Lắp vào công thức: $\arcsin \sqrt{2} = -i \log[i\sqrt{2} + (1 - 2)^{1/2}]$ [52].
*   **Bước 2:** Tính căn bậc hai: $(1 - 2)^{1/2} = (-1)^{1/2} = \pm i$ [52].
*   **Bước 3:** Lấy logarit đa trị cho cả hai trường hợp $\pm i$:
    Bên trong hàm log sẽ là: $i\sqrt{2} \pm i = i(\sqrt{2} \pm 1)$ [52].
*   **Bước 4:** Áp dụng $\log(i(\sqrt{2} \pm 1))$:
    Modun là $\sqrt{2} \pm 1$. Góc Argument của số thuần ảo dương là $\pi/2$ [52].
    $\log(i(\sqrt{2} \pm 1)) = \ln(\sqrt{2} \pm 1) + i\left(\frac{\pi}{2} + 2n\pi\right)$ [52].
*   **Bước 5:** Nhân với $-i$:
    $\arcsin \sqrt{2} = \frac{\pi}{2} + 2n\pi - i \ln(\sqrt{2} \pm 1)$ với $n \in \mathbb{Z}$ [52].
    Vì $\ln(\sqrt{2} - 1) = -\ln(\sqrt{2} + 1)$, kết quả có thể viết gọn là: $\arcsin \sqrt{2} = \frac{\pi}{2} + 2n\pi \pm i \ln(\sqrt{2} + 1)$ [52].

# TỔNG HỢP TOÀN DIỆN LÝ THUYẾT VÀ PHƯƠNG PHÁP GIẢI HÀM PHỨC

Tài liệu này hệ thống hóa chi tiết nền tảng giải tích phức, từ việc biểu diễn số phức, khái niệm hàm đa trị, các nhánh giải tích, cho đến lý thuyết chuyên sâu về các hàm sơ cấp phức (Mũ, Logarit, Lũy thừa, Lượng giác, Hyperbol và các hàm ngược). Mỗi phần đều đi kèm phương pháp giải và ví dụ minh họa từng bước.

---

## PHẦN 1: CÔNG THỨC EULER VÀ KHAI CĂN BẬC N (CHƯƠNG 1)

### 1.1 Dạng phân cực và Công thức Euler
Mọi số phức $z = x + iy$ ($z \neq 0$) biểu diễn một điểm trên mặt phẳng phức với tọa độ $(x, y)$. Khi chuyển sang hệ tọa độ cực, ta có:
*   **Modun (Độ lớn):** $r = |z| = \sqrt{x^2 + y^2}$.
*   **Argument (Góc):** $\theta = \arg(z)$ là góc định hướng hợp bởi chiều dương trục thực và vectơ biểu diễn $z$.

**Công thức Euler** là cầu nối vĩ đại giữa hàm mũ và hàm lượng giác:
$$e^{i\theta} = \cos \theta + i\sin \theta$$

Từ đó, ta có biểu diễn **dạng mũ** của số phức:
$$z = r e^{i\theta} = r(\cos \theta + i\sin \theta)$$
*Lưu ý:* Argument của số phức là một tập hợp các góc sai khác nhau bội số của $2\pi$, ký hiệu là $\arg(z) = \text{Arg}(z) + 2k\pi$ với $k \in \mathbb{Z}$ và $\text{Arg}(z) \in (-\pi, \pi]$ được gọi là **Argument chính**.

### 1.2 Định lý De Moivre và Lũy thừa số nguyên
Định lý De Moivre giúp việc tính lũy thừa bậc $n$ của một số phức trở nên cực kỳ đơn giản:
$$(\cos \theta + i\sin \theta)^n = \cos n\theta + i\sin n\theta$$
Hệ quả đối với dạng mũ:
$$z^n = (r e^{i\theta})^n = r^n e^{in\theta} = r^n(\cos n\theta + i\sin n\theta)$$

### 1.3 Phép Khai căn bậc $n$
Phương trình $z^n = c$ (với $c = \rho e^{i\phi} \neq 0$) luôn có đúng $n$ nghiệm phân biệt trong tập số phức. Các nghiệm này nằm trên một đường tròn bán kính $\rho^{1/n}$ và tạo thành một đa giác đều $n$ cạnh.

**Công thức nghiệm:**
$$z_k = \rho^{1/n} \exp\left[ i \left( \frac{\phi + 2k\pi}{n} \right) \right] = \rho^{1/n} \left( \cos \frac{\phi + 2k\pi}{n} + i \sin \frac{\phi + 2k\pi}{n} \right)$$
*(với $k = 0, 1, 2, \dots, n-1$)*

> **Ví dụ Vận Dụng:** Tìm tất cả các căn bậc 3 của số phức $c = -8i$.
> 
> **Giải chi tiết:**
> 1. **Đưa $c$ về dạng phân cực:** Modun $\rho = |-8i| = 8$. Số phức $-8i$ nằm trên phần âm của trục ảo, do đó góc chính $\phi = \text{Arg}(-8i) = -\frac{\pi}{2}$. Vậy $c = 8 e^{-i\pi/2}$.
> 2. **Tính căn bậc 3 của modun:** $r = 8^{1/3} = 2$.
> 3. **Lập công thức góc:** $\theta_k = \frac{-\pi/2 + 2k\pi}{3}$, với $k = 0, 1, 2$.
> 4. **Tính các nghiệm:**
>    * Với $k = 0$: $\theta_0 = -\frac{\pi}{6} \Rightarrow z_0 = 2\left(\cos \frac{-\pi}{6} + i\sin \frac{-\pi}{6}\right) = \sqrt{3} - i$
>    * Với $k = 1$: $\theta_1 = \frac{\pi}{2} \Rightarrow z_1 = 2\left(\cos \frac{\pi}{2} + i\sin \frac{\pi}{2}\right) = 2i$
>    * Với $k = 2$: $\theta_2 = \frac{7\pi}{6} \Rightarrow z_2 = 2\left(\cos \frac{7\pi}{6} + i\sin \frac{7\pi}{6}\right) = -\sqrt{3} - i$

---

## PHẦN 2: HÀM ĐA TRỊ VÀ CÁC NHÁNH (CHƯƠNG 2)

### 2.1 Khái niệm Hàm đa trị
Trong giải tích thực, một hàm số luôn quy định "một đầu vào - một đầu ra". Tuy nhiên, trong giải tích phức, hàm ngược của các hàm tuần hoàn (như hàm mũ) hoặc hàm biến đổi góc (như lũy thừa $z^n$) thường trả về nhiều giá trị cho một đầu vào $z$. Đây gọi là **Hàm đa trị**.
Ví dụ: $w = z^{1/2}$ trả về 2 giá trị; $\log(z)$ trả về vô số giá trị.

### 2.2 Nhánh, Lát cắt nhánh và Điểm rẽ nhánh
Để thực hiện đạo hàm hay lấy tích phân, ta không thể làm việc với hàm đa trị. Ta phải "chia nhỏ" hàm đa trị thành các hàm đơn trị, liên tục trên một miền xác định.
*   **Nhánh (Branch):** Là một hàm đơn trị $f(z)$ liên tục, đại diện cho một phần của hàm đa trị trên một miền cụ thể.
*   **Trị chính (Principal branch):** Là nhánh tiêu chuẩn, thường được chọn bằng cách giới hạn argument chính $\theta \in (-\pi, \pi]$.
*   **Lát cắt nhánh (Branch cut):** Để tạo ra một nhánh liên tục, ta phải "rạch" mặt phẳng phức bằng một tia hoặc đường cong để cấm $z$ chạy vòng quanh gốc tọa độ (vì quay 1 vòng $360^\circ$ sẽ làm hàm nhảy sang giá trị khác). Tại đường rạch này, hàm số bị gián đoạn. Với nhánh chính, lát cắt thường là tia $(-\infty, 0]$.
*   **Điểm rẽ nhánh (Branch point):** Là điểm kỳ dị mà mọi lát cắt nhánh của hàm đa trị đều phải xuất phát hoặc đi qua (ví dụ: điểm $0$ và $\infty$ đối với hàm $z^{1/2}$ và $\log z$). Khái niệm Mặt Riemann ghép các mặt phẳng bị cắt để tạo thành bề mặt liên tục cho hàm đa trị.

> **Ví dụ Vận Dụng:** Xét hàm đa trị $f(z) = z^{1/2}$. Hãy tính giá trị của $f(-4)$ trên nhánh chính và giải thích sự gián đoạn tại lát cắt nhánh.
>
> **Giải chi tiết:**
> 1. Nhánh chính của $z^{1/2}$ được định nghĩa là $f_1(z) = \sqrt{r} e^{i\theta/2}$ với $\theta \in (-\pi, \pi]$.
> 2. Tại $z = -4$, modun $r = 4$, góc $\theta = \pi$.
> 3. Giá trị trên nhánh chính: $f_1(-4) = \sqrt{4} e^{i\pi/2} = 2i$.
> 4. **Về sự gián đoạn:** Lát cắt nhánh của $f_1(z)$ là tia $(-\infty, 0]$. Nếu ta tiến đến $-4$ từ nửa mặt phẳng trên (góc tiến tới $\pi$), hàm trả về $2i$. Nhưng nếu tiến đến $-4$ từ nửa mặt phẳng dưới (góc tiến tới $-\pi$), hàm trả về $\sqrt{4} e^{-i\pi/2} = -2i$. Sự sai khác này ($2i \neq -2i$) chứng tỏ hàm gián đoạn ngay trên lát cắt.

---

## PHẦN 3: HÀM MŨ PHỨC (CHƯƠNG 5.1)

### 3.1 Lý thuyết nền tảng
Hàm mũ phức $f(z) = e^z$ được định nghĩa mở rộng từ số thực qua chuỗi Taylor hoặc công thức:
$$e^z = e^{x+iy} = e^x(\cos y + i \sin y)$$
*   **Modun và Argument:** $|e^z| = e^x$ và $\arg(e^z) = y + 2k\pi$. (Điều này cho thấy $|e^z|$ không bao giờ bằng $0$, tức là phương trình $e^z = 0$ vô nghiệm trên $\mathbb{C}$).
*   **Tính tuần hoàn:** Khác với số thực, hàm mũ phức là hàm tuần hoàn. Chu kỳ của nó là ảo thuần túy: $T = 2\pi i$. Tức là $e^{z + 2k\pi i} = e^z$.
*   **Tính giải tích:** Hàm mũ phức là hàm nguyên (entire function), đạo hàm của hàm mũ phức chính là nó: $\frac{d}{dz} e^z = e^z$.

> **Ví dụ Vận Dụng:** Giải phương trình $e^z = 1 + i$.
>
> **Giải chi tiết:**
> 1. Gọi $z = x + iy$. Ta có $e^x e^{iy} = 1 + i$.
> 2. Đưa vế phải về dạng phân cực: $w = 1+i$ có $|w| = \sqrt{1^2+1^2} = \sqrt{2}$, $\text{Arg}(w) = \frac{\pi}{4}$.
>    Suy ra: $1 + i = \sqrt{2} e^{i\pi/4}$.
> 3. Đồng nhất 2 vế:
>    * Phần modun: $e^x = \sqrt{2} \Rightarrow x = \ln\sqrt{2} = \frac{1}{2}\ln 2$.
>    * Phần argument: $y = \frac{\pi}{4} + 2k\pi$ (với $k \in \mathbb{Z}$).
> 4. **Kết luận:** Tập nghiệm của phương trình là $z = \frac{1}{2}\ln 2 + i\left(\frac{\pi}{4} + 2k\pi\right)$, $k \in \mathbb{Z}$.

---

## PHẦN 4: HÀM LOGARIT PHỨC (CHƯƠNG 5.2)

### 4.1 Lý thuyết
Vì $e^z$ là hàm tuần hoàn, hàm ngược của nó là logarit phức sẽ là một **hàm đa trị** có vô số giá trị:
$$\log(z) = \ln|z| + i \arg(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi) \quad (k \in \mathbb{Z})$$

*   **Trị chính (Principal Value):** Được ký hiệu với chữ "L" viết hoa: $\text{Log}(z)$. Nó sử dụng argument chính $\text{Arg}(z) \in (-\pi, \pi]$:
    $$\text{Log}(z) = \ln|z| + i\text{Arg}(z)$$
*   **Đạo hàm:** Áp dụng trên bất kỳ nhánh nào không chứa lát cắt, đạo hàm là: $\frac{d}{dz}\log(z) = \frac{1}{z}$.
*   **Tính chất:** Khác với số thực, đẳng thức đại số như $\log(z_1 z_2) = \log(z_1) + \log(z_2)$ chỉ luôn đúng khi coi cả 2 vế là các "tập hợp" giá trị đa trị. Nó có thể bị sai lệch đi một lượng $i 2k\pi$ nếu ta chỉ xét trên nhánh trị chính $\text{Log}$.

> **Ví dụ Vận Dụng:** Tính tất cả các giá trị của $\log(-e)$ và tìm trị chính $\text{Log}(-e)$.
>
> **Giải chi tiết:**
> 1. Xét số phức $z = -e$. Modun $|-e| = e$.
> 2. Số phức này nằm trên tia âm của trục thực, nên argument chính là $\text{Arg}(-e) = \pi$.
> 3. Các argument khác là $\pi + 2k\pi$.
> 4. Giá trị của logarit đa trị:
>    $$\log(-e) = \ln(e) + i(\pi + 2k\pi) = 1 + i(2k + 1)\pi \quad (k \in \mathbb{Z})$$
> 5. **Trị chính:** Ứng với $k = 0$, ta có $\text{Log}(-e) = 1 + i\pi$.

---

## PHẦN 5: LŨY THỪA PHỨC (CHƯƠNG 5.3)

### 5.1 Định nghĩa lũy thừa $z^c$
Với cơ số phức $z \neq 0$ và số mũ phức $c$, lũy thừa được định nghĩa hoàn toàn thông qua hàm mũ và hàm logarit đa trị:
$$z^c = \exp[c \log(z)]$$
Vì $\log(z)$ là hàm đa trị, nên $z^c$ nói chung cũng là hàm đa trị sinh ra vô số giá trị.
*   Nếu $c$ là số nguyên, nó suy biến thành 1 giá trị.
*   Nếu $c$ là số hữu tỉ $p/q$, nó sinh ra $q$ giá trị (chính là căn bậc $q$).
*   Nếu $c$ là số vô tỉ hoặc số phức có phần ảo, nó sẽ tạo ra vô số giá trị.

*   **Trị chính của $z^c$:** Tính bằng cách lấy nhánh chính của Logarit:
    $$\text{P.V.} (z^c) = \exp[c \text{Log}(z)]$$
*   **Đạo hàm:** Trên một nhánh xác định, $\frac{d}{dz} z^c = c z^{c-1}$.

> **Ví dụ Vận Dụng:** Tính tất cả các giá trị của $i^i$ và chỉ ra trị chính.
>
> **Giải chi tiết:**
> 1. Áp dụng định nghĩa: $i^i = \exp[i \log(i)]$.
> 2. Tính $\log(i)$: Số $z=i$ có $|i|=1$ và $\text{Arg}(i) = \frac{\pi}{2}$.
>    $$\log(i) = \ln(1) + i\left(\frac{\pi}{2} + 2k\pi\right) = i\left(\frac{\pi}{2} + 2k\pi\right) \quad (k \in \mathbb{Z})$$
> 3. Nhân với số mũ $c=i$:
>    $$i \log(i) = i \cdot i\left(\frac{\pi}{2} + 2k\pi\right) = -\left(\frac{\pi}{2} + 2k\pi\right)$$
> 4. Đưa vào hàm mũ $\exp()$:
>    $$i^i = e^{-(\frac{\pi}{2} + 2k\pi)} \quad (k \in \mathbb{Z})$$
>    *Nhận xét:* Lũy thừa của số ảo lại cho ra một tập hợp toàn CÁC SỐ THỰC.
> 5. **Trị chính:** Ứng với $k=0$, trị chính là $e^{-\pi/2} \approx 0.2079$.

---

## PHẦN 6: HÀM LƯỢNG GIÁC VÀ HYPERBOL PHỨC (CHƯƠNG 5.4)

### 6.1 Lượng giác phức ($\sin z, \cos z$)
Thông qua chuỗi Taylor và công thức Euler, lượng giác phức được định nghĩa bằng hàm mũ:
$$\sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad \cos z = \frac{e^{iz} + e^{-iz}}{2}$$
*   **Tính chất:** Các hàm này là hàm nguyên (entire). Đạo hàm: $\frac{d}{dz} \sin z = \cos z$, $\frac{d}{dz} \cos z = -\sin z$. Đồng nhất thức $\sin^2 z + \cos^2 z = 1$ vẫn đúng trong mặt phẳng phức.
*   **Đặc điểm quan trọng (Modun không bị chặn):** Trên $\mathbb{R}$, $|\sin x| \le 1$ và $|\cos x| \le 1$. Nhưng trên $\mathbb{C}$:
    $$|\sin z|^2 = \sin^2 x + \sinh^2 y$$
    $$|\cos z|^2 = \cos^2 x + \sinh^2 y$$
    Do $\sinh y \to \infty$ khi $y \to \infty$, modun của chúng có thể lớn đến vô hạn khi tiến dọc theo trục ảo.
*   **Phân tích Thực - Ảo ($u+iv$):**
    $$\sin(x+iy) = \sin x \cosh y + i \cos x \sinh y$$
    $$\cos(x+iy) = \cos x \cosh y - i \sin x \sinh y$$
*   **Nghiệm:** $\sin z = 0 \iff z = n\pi$ và $\cos z = 0 \iff z = (n + \frac{1}{2})\pi$ với $n \in \mathbb{Z}$.

### 6.2 Hyperbol phức ($\sinh z, \cosh z$)
$$\sinh z = \frac{e^z - e^{-z}}{2}, \quad \cosh z = \frac{e^z + e^{-z}}{2}$$
Mối liên hệ giữa hàm lượng giác và hyperbol:
$$\cosh(iz) = \cos z, \quad \sinh(iz) = i \sin z$$
$$\cos(iz) = \cosh z, \quad \sin(iz) = i \sinh z$$
Đồng nhất thức Hyperbol: $\cosh^2 z - \sinh^2 z = 1$.

> **Ví dụ Vận Dụng:** Giải phương trình $\sin z = 2$.
> *(Đây là phương trình vô nghiệm trên tập số thực $\mathbb{R}$ nhưng có nghiệm trên $\mathbb{C}$).*
>
> **Giải chi tiết:**
> 1. Dùng định nghĩa qua hàm mũ: $\frac{e^{iz} - e^{-iz}}{2i} = 2 \Rightarrow e^{iz} - e^{-iz} = 4i$.
> 2. Đặt $w = e^{iz}$ ($w \neq 0$), phương trình trở thành:
>    $w - \frac{1}{w} = 4i \Rightarrow w^2 - 4iw - 1 = 0$.
> 3. Giải phương trình bậc 2 theo $w$: Tính $\Delta' = (-2i)^2 - 1(-1) = -4 + 1 = -3$. Căn bậc hai của $\Delta'$ là $\pm i\sqrt{3}$.
>    Vậy $w = 2i \pm i\sqrt{3} = i(2 \pm \sqrt{3})$.
> 4. Giải $e^{iz} = i(2 \pm \sqrt{3})$:
>    * Modun: $|i(2 \pm \sqrt{3})| = 2 \pm \sqrt{3}$ (lưu ý $2 > \sqrt{3}$ nên cả 2 giá trị này đều là số thực dương).
>    * Argument: Số thuần ảo dương nên góc là $\frac{\pi}{2} + 2k\pi$.
>    * Lấy logarit 2 vế: $iz = \ln(2 \pm \sqrt{3}) + i\left(\frac{\pi}{2} + 2k\pi\right)$.
> 5. Chia cho $i$ (hay nhân 2 vế với $-i$):
>    $$z = \left(\frac{\pi}{2} + 2k\pi\right) - i \ln(2 \pm \sqrt{3}) \quad (k \in \mathbb{Z})$$

---

## PHẦN 7: HÀM LƯỢNG GIÁC VÀ HYPERBOL NGƯỢC (CHƯƠNG 5.5)

### 7.1 Định nghĩa các hàm ngược
Bởi vì hàm lượng giác là hàm tuần hoàn (many-to-one), hàm ngược của chúng là các hàm đa trị vô hạn. Bằng cách giải phương trình (như ví dụ phần 6), ta biểu diễn được chúng qua hàm Logarit phức:
*   **Hàm Arcsin và Arccos:**
    $$\arcsin z = -i \log[iz + (1 - z^2)^{1/2}]$$
    $$\arccos z = -i \log[z + i(1 - z^2)^{1/2}]$$
*   **Hàm Arctan:**
    $$\arctan z = \frac{i}{2} \log\left(\frac{i+z}{i-z}\right)$$
*   **Hàm Hyperbol ngược:**
    $$\text{arcsinh } z = \log[z + (z^2+1)^{1/2}]$$
    $$\text{arccosh } z = \log[z + (z^2-1)^{1/2}]$$
    $$\text{arctanh } z = \frac{1}{2} \log\left(\frac{1+z}{1-z}\right)$$

*   **Đạo hàm (Dùng đạo hàm ẩn):** $\frac{d}{dz} \arcsin z = \frac{1}{(1-z^2)^{1/2}}$ và $\frac{d}{dz} \arctan z = \frac{1}{1+z^2}$.

> **Ví dụ Vận Dụng:** Tìm tất cả các giá trị của $\arccos(2)$.
>
> **Giải chi tiết:**
> 1. Lắp vào công thức: $\arccos(2) = -i \log[2 + i(1 - 2^2)^{1/2}]$.
> 2. Tính phần căn (đa trị): $(1 - 4)^{1/2} = (-3)^{1/2} = \pm i\sqrt{3}$.
> 3. Thay vào bên trong hàm log:
>    Biểu thức trong logarit là: $2 + i(\pm i\sqrt{3}) = 2 \mp \sqrt{3}$.
> 4. Tính logarit đa trị của số thực dương $(2 \pm \sqrt{3})$:
>    Vì $2 \pm \sqrt{3} > 0$, góc argument là $2k\pi$.
>    $$\log(2 \pm \sqrt{3}) = \ln(2 \pm \sqrt{3}) + i(2k\pi)$$
> 5. Nhân với $-i$ để tìm kết quả cuối cùng:
>    $$\arccos(2) = -i \left[ \ln(2 \pm \sqrt{3}) + i(2k\pi) \right] = 2k\pi - i \ln(2 \pm \sqrt{3})$$
> *Lưu ý:* Do $\ln(2 - \sqrt{3}) = \ln\left(\frac{1}{2 + \sqrt{3}}\right) = -\ln(2 + \sqrt{3})$, ta có thể viết gọn tập nghiệm dưới dạng:
> $$\arccos(2) = 2k\pi \pm i \ln(2 + \sqrt{3}) \quad (k \in \mathbb{Z})$$
