> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1) 
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> **Bổ đề:** Giao của hai hình chữ nhật đo được luôn là một hình chữ nhật đo được:
> $$(A_1 \times B_1) \cap (A_2 \times B_2) = (A_1 \cap A_2) \times (B_1 \cap B_2)$$
> Do $\mathcal{F}, \mathcal{G}$ đóng với phép giao hữu hạn nên $(A_1 \cap A_2) \in \mathcal{F}$ và $(B_1 \cap B_2) \in \mathcal{G}$.
> 
> **1. Chứa không gian mẫu ($X \times Y \in \mathcal{R}$):**
> Do $X \in \mathcal{F}$ và $Y \in \mathcal{G}$, ta có $X \times Y = \bigcup_{i=1}^{1} (X \times Y)$. Vậy $X \times Y \in \mathcal{R}$ (với $m=1$).
> 
> **2. Đóng với phép giao hữu hạn:**
> Giả sử $E_1 = \bigcup_{i=1}^m R_i \in \mathcal{R}$ và $E_2 = \bigcup_{j=1}^k R'_j \in \mathcal{R}$. Áp dụng tính phân phối:
> $$E_1 \cap E_2 = \left( \bigcup_{i=1}^m R_i \right) \cap \left( \bigcup_{j=1}^k R'_j \right) = \bigcup_{i=1}^m \bigcup_{j=1}^k (R_i \cap R'_j)$$
> Theo Bổ đề, mỗi mảnh $R_i \cap R'_j$ là một hình chữ nhật đo được. Do các họ ban đầu rời nhau, các giao điểm mới cũng đôi một rời nhau. Số lượng hcn là $m \times k$ (hữu hạn) $\implies E_1 \cap E_2 \in \mathcal{R}$.
> 
> **3. Đóng với phép lấy phần bù:**
> Với $m = 1$: Xét $R = A \times B$. Phần bù tách thành hợp của 2 hình chữ nhật rời nhau:
>     $$R^c = (A^c \times Y) \cup (A \times B^c)$$
>     Kiểm tra tính rời nhau: $(A^c \times Y) \cap (A \times B^c) = (A^c \cap A) \times (Y \cap B^c) = \emptyset$. Do đó $R^c \in \mathcal{R}$.
>     
> Với $m > 1$: Xét $E = \bigcup_{i=1}^m R_i$. Áp dụng luật De Morgan:
>     $$E^c = \left( \bigcup_{i=1}^m R_i \right)^c = \bigcap_{i=1}^m R_i^c$$
>     Theo trường hợp $m=1$, mỗi $R_i^c \in \mathcal{R}$. Vì $\mathcal{R}$ đóng với phép giao hữu hạn (mục 2), suy ra $E^c \in \mathcal{R}$.
> 
> **4. Đóng với phép hợp hữu hạn:**
> Giả sử $E_1 = \bigcup_{i=1}^m R_i \in \mathcal{R}$ và $E_2 = \bigcup_{j=1}^k R'_j \in \mathcal{R}$. Ta sử dụng:
> $$E_1 \cup E_2 = E_1 \cup (E_2 \cap E_1^c)$$
> 
> Khai triển $E_2 \cap E_1^c$ cho trường hợp tổng quát ($m > 1, k > 1$):
> - Theo Mục 3, ta tách phần bù tổng thể: $E_1^c = \bigcap_{i=1}^m R_i^c = \bigcup_{s=1}^{2^m} \tilde{R}_s$ (với $\tilde{R}_s$ là các hình chữ nhật rời nhau).
> - Áp dụng tính phân phối:
>   $$E_2 \cap E_1^c = \left( \bigcup_{j=1}^k R'_j \right) \cap \left( \bigcup_{s=1}^{2^m} \tilde{R}_s \right) = \bigcup_{j=1}^k \bigcup_{s=1}^{2^m} (R'_j \cap \tilde{R}_s)$$
> - Theo Bổ đề, mỗi mảnh $R'_j \cap \tilde{R}_s$ là một hình chữ nhật đo được. Do các họ $\{R'_j\}$ và $\{\tilde{R}_s\}$ đều đôi một rời nhau, các giao điểm mới này cũng đôi một rời nhau với số lượng là $k \times 2^m$ (hữu hạn).
> 
> Thế ngược vào biểu thức tổng thể:
> $$E_1 \cup E_2 = \left( \bigcup_{i=1}^m R_i \right) \cup \left( \bigcup_{j=1}^k \bigcup_{s=1}^{2^m} (R'_j \cap \tilde{R}_s) \right)$$
> - Do các họ thành phần tự rời nhau, và mọi mảnh $R'_j \cap \tilde{R}_s \subset E_1^c$ nên hiển nhiên rời rạc với mọi $R_i \subset E_1$.
> 
> Vế phải hoàn toàn là hợp của $m + (k \times 2^m)$ (hữu hạn) các hình chữ nhật đôi một rời nhau. Suy ra $E_1 \cup E_2 \in \mathcal{R}$. 
> 
> 
> **Kết luận:** $\mathcal{R}$ thỏa mãn đầy đủ 3 tiên đề nên là đại số trên không gian $X \times Y$.

> [!thm] (Mệnh đề 2) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. $E_x := {y \in Y : (x,y) \in E} \in \mathcal{G}$ và $E^y := {x \in X : (x,y) \in E} \in \mathcal{F}$.
> 2. Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được, $y \mapsto \mu(E^y)$ là $\nu$-đo được, và: $$\int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu \tag{1}$$

> [!prob]  (Bước 1 trong chứng minh Tonelli)
> Cho $F : X \times Y \to [0, \infty]$ là hàm đo được. Xét cụ thể ${} F(x, y) = \chi_{E}(x,y) {}$ với $E \in \mathcal{F} \otimes \mathcal{G}$. Chứng minh rằng:  
>  
> 1. Với mỗi $x \in X$, ánh xạ $y \mapsto F(x, y)$ là $\nu$-đo được. Với mỗi $y \in Y$, ánh xạ $x \mapsto F(x, y)$ là $\mu$-đo được.  
> 2. Ánh xạ $x \mapsto \int_Y F(x, y) \, d\nu$ là $\mu$-đo được; ánh xạ $y \mapsto \int_X F(x, y) \, d\mu$ là $\nu$-đo được.  
> 3. Ta có công thức tích phân:  
> $$
> \int_{X \times Y} F(x, y) \, d(\mu \times \nu)
> = \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu
> = \int_Y \left( \int_X F(x, y) \, d\mu \right) d\nu.
> $$

> [!prf]
> Ta có hàm lát cắt của hàm đặc trưng chính là hàm đặc trưng của tập lát cắt. Cụ thể:
>   $$F(x, \cdot) = \chi_{E_x}(\cdot) \quad \text{và} \quad F(\cdot, y) = \chi_{E^y}(\cdot)$$
> Theo Mệnh đề 2 (Mục I), ta đã biết với mọi $E \in \mathcal{F} \otimes \mathcal{G}$ thì $E_x \in \mathcal{G}$ và $E^y \in \mathcal{F}$. Do đó, các hàm đặc trưng $\chi_{E_x}$ và $\chi_{E^y}$ hiển nhiên đo được. Tính chất 1) được thỏa mãn.
> Tương tự, tích phân lát cắt chính là độ đo của tập lát cắt:
>   $$\int_Y F(x, y)  d\nu = \int_Y \chi_{E_x}(y)  d\nu = \nu(E_x)$$
> Mệnh đề 2 khẳng định hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được. Do đó tính chất 2) được thỏa mãn.
> Cuối cùng, thay các biểu thức này vào đẳng thức tích phân tổng quát:
>   $$\int_X \left( \int_Y F(x, y)  d\nu \right) d\mu = \int_X \nu(E_x) d\mu = (\mu \times \nu)(E) = \int_{X \times Y} \chi_E  d(\mu \times \nu)$$
> Theo Mệnh đề 2, giá trị này cũng bằng $\int_Y \mu(E^y)  d\nu = \int_Y \left( \int_X F(x, y)  d\mu \right) d\nu$
> Tính chất 3) được thỏa. Vậy kết quả đúng cho hàm đặc trưng. 

> [!def] (Tích chập) 
> Với $f, g \in \mathcal{L}^1(\mathbb{R}^N)$, tích chập được định nghĩa bởi: $$(f * g)(x) = \int_{\mathbb{R}^N} f(x-y)g(y) dy$$

> [!thm] (Tính chất) 
> Với a.e $x \in \mathbb{R}^N$, hàm $y \mapsto f(x-y)g(y)$ khả tích, và $(f*g) \in \mathcal{L}^1(\mathbb{R}^N)$.

> [!prf] 
> Đặt $F(x,y) = f(x-y)g(y)$. Áp dụng Tonelli cho $|F|$: 
> $$
> \iint |f(x-y)g(y)| dx dy = \int_{\mathbb{R}^N} |g(y)| \left(\int_{\mathbb{R}^N} |f(x-y)| dx\right) dy
> $$ 
> Theo tính bất biến của phép tịnh tiến của độ đo Lebesgue: $\int |f(x-y)| dx = |f|_{\mathcal{L}^1}$. Do đó: 
> $$
> \iint |F| dx dy = |f|_{\mathcal{L}^1} \cdot |g|_{\mathcal{L}^1} < \infty
> $$ 
> Suy ra $F \in \mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$. Áp dụng Fubini: với a.e $x$, lát cắt $y \mapsto f(x-y)g(y)$ khả tích (Tính chất 1); và hàm $(f*g)(x) = \int F(x,\cdot) dy$ khả tích trên $\mathbb{R}^N$ (Tính chất 2).