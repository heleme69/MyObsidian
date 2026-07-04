# Khảo sát Ánh xạ Mũ và Logarit Phức

## I. Ánh xạ Mũ ($w = e^z$)

> [!def] Định nghĩa Hàm mũ phức
> Cho số phức $z = x + iy$. Hàm mũ phức $w = f(z) = e^z$ được định nghĩa mở rộng từ hàm thực thông qua công thức Euler:
> $$w = e^z = e^{x+iy} = e^x(\cos y + i\sin y)$$
> Từ đó, tọa độ trong mặt phẳng $w$ là $u = e^x \cos y$ và $v = e^x \sin y$. Mô-đun của ảnh là $|w| = e^x$ và argument là $\arg(w) = y + 2k\pi$.

> [!thm] Tính Toàn ánh, Đơn ánh và Tập nghiệm
> - **Tính toàn ánh:** Hàm $e^z$ biến đổi toàn bộ mặt phẳng phức $\mathbb{C}$ lên mặt phẳng $\mathbb{C} \setminus \{0\}$. Hàm này là một **toàn ánh** lên tập các số phức khác không (vì phương trình $e^z = w$ luôn có nghiệm với mọi $w \neq 0$).
> - **Tính đơn ánh:** Hàm $e^z$ **không phải là đơn ánh** trên toàn $\mathbb{C}$ do tính tuần hoàn với chu kỳ thuần ảo $2\pi i$: 
> $$e^{z+2k\pi i} = e^z \cdot e^{2k\pi i} = e^z \cdot 1 = e^z \quad (k \in \mathbb{Z})$$
> - **Nghiệm của phương trình:** Phương trình $e^z = w$ (với $w \neq 0$) có vô số nghiệm phân biệt cách nhau một bội số của $2\pi i$, được cho bởi:
> $$z = \ln|w| + i(\text{Arg}(w) + 2k\pi)$$

> [!thm] Khảo sát ảnh của mặt phẳng phức qua $w = e^z$
> Phép biến đổi $w = e^z$ ánh xạ lưới tọa độ Descartes trong mặt phẳng $z$ thành hệ tọa độ cực trong mặt phẳng $w$:
> 1. **Ảnh của đường thẳng đứng ($x = c$):** 
> Vì $|w| = e^c$ là hằng số, ảnh là một **đường tròn tâm O, bán kính $R = e^c$**.
> 2. **Ảnh của đường nằm ngang ($y = c$):** 
> Vì $\arg(w) = c$ là hằng số và $x \in (-\infty, +\infty)$ nên $|w| \in (0, +\infty)$. Ảnh là một **tia xuất phát từ gốc tọa độ** (nhưng không chứa gốc) tạo với trục thực một góc $c$.
> *Miền cơ bản:* Để hàm $e^z$ là một song ánh, ta thường giới hạn nó trong một dải cơ bản song song với trục thực, độ rộng $2\pi$, ví dụ dải: $-\pi < y \le \pi$. Dải này sẽ ánh xạ song ánh lên toàn bộ mặt phẳng $w \setminus \{0\}$.

> [!prf] Tính bảo giác của ánh xạ $w = e^z$
> Hàm mũ $f(z) = e^z$ là một hàm nguyên (chỉnh hình trên toàn bộ mặt phẳng phức $\mathbb{C}$).
> Đạo hàm của hàm mũ là $f'(z) = e^z$.
> Vì $e^z \neq 0$ với mọi $z \in \mathbb{C}$, nên điều kiện $f'(z) \neq 0$ luôn được thỏa mãn. 
> **Kết luận:** Ánh xạ $w = e^z$ là một **ánh xạ bảo giác** tại mọi điểm trên mặt phẳng phức $\mathbb{C}$.

---

## II. Ánh xạ Logarit ($w = \log z$)

> [!def] Định nghĩa, Tính đa trị và Nhánh chính
> Hàm logarit phức là hàm ngược của hàm mũ phức. Cho $z \neq 0$, $w = \log z$ là số phức thỏa mãn $e^w = z$.
> - **Tính đa trị:** Do tính tuần hoàn của hàm mũ, với mỗi số phức $z \neq 0$, có vô số giá trị logarit:
> $$\log z = \ln|z| + i\arg(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi) \quad (k \in \mathbb{Z})$$
> Vì có vô số giá trị $w$ ứng với một giá trị $z$, $\log z$ là một **hàm đa trị**.
> - **Trị chính (Nhánh chính):** Để biến $\log z$ thành một hàm đơn trị, ta giới hạn argument của $z$ vào miền giá trị chính (thường là $-\pi < \text{Arg}(z) \le \pi$). Trị chính của logarit được ký hiệu là $\text{Log}(z)$:
> $$\text{Log}(z) = \ln|z| + i\text{Arg}(z)$$

> [!thm] Tìm trị chính của một phép tính lũy thừa tổng quát
> Trong giải tích phức, phép lũy thừa tổng quát $z^c$ (với $z, c \in \mathbb{C}, z \neq 0$) được định nghĩa thông qua hàm logarit:
> $$z^c = e^{c \log z}$$
> Vì $\log z$ đa trị, phép tính $z^c$ nói chung cũng đa trị. Để tính **trị chính** của biểu thức này, ta sử dụng nhánh chính của logarit:
> $$\text{Trị chính của } z^c = e^{c \text{Log}(z)}$$
> *Ví dụ:* Tìm trị chính của $i^i$. Ta có $\text{Log}(i) = \ln|i| + i\text{Arg}(i) = 0 + i\frac{\pi}{2}$. Vậy trị chính của $i^i$ là $e^{i(i\frac{\pi}{2})} = e^{-\pi/2}$.

> [!thm] Khảo sát ảnh của mặt phẳng phức qua $w = \text{Log}(z)$
> Xét nhánh chính $w = u + iv = \text{Log}(z)$ với tập xác định là mặt phẳng $z$ đã cắt bỏ tia thực âm (tức là $-\pi < \text{Arg}(z) < \pi$):
> Hàm logarit ánh xạ hệ tọa độ cực của mặt phẳng $z$ về hệ tọa độ Descartes của mặt phẳng $w$:
> 1. **Ảnh của cung tròn tâm O ($|z| = r_0$):** 
> Tọa độ $u = \ln r_0$ không đổi. Góc $\theta \in (-\pi, \pi)$. Do đó, ảnh là một **đoạn thẳng thẳng đứng** nằm tại $u = \ln r_0$, giới hạn trong dải $v \in (-\pi, \pi)$.
> 2. **Ảnh của tia xuất phát từ O ($\text{Arg}(z) = \theta_0$):** 
> Tọa độ $v = \theta_0$ không đổi. Bán kính $r \in (0, +\infty)$ kéo theo $u \in (-\infty, +\infty)$. Do đó, ảnh là một **đường thẳng nằm ngang** ở độ cao $v = \theta_0$.

> [!prf] Tính bảo giác của ánh xạ $w = \text{Log}(z)$
> Xét hàm $\text{Log}(z)$ trên miền $D = \mathbb{C} \setminus (-\infty, 0]$ (mặt phẳng phức bỏ đi gốc tọa độ và trục thực âm để hàm liên tục và đơn trị).
> Tại mọi điểm $z \in D$, hàm $\text{Log}(z)$ là chỉnh hình và có đạo hàm:
> $$f'(z) = \frac{d}{dz}(\text{Log}(z)) = \frac{1}{z}$$
> Vì $z \in D \implies z \neq 0$, do đó $f'(z) = \frac{1}{z} \neq 0$ tại mọi điểm trong miền khảo sát.
> **Kết luận:** Ánh xạ nhánh chính $w = \text{Log}(z)$ là một **ánh xạ bảo giác** trên miền $\mathbb{C} \setminus (-\infty, 0]$.
