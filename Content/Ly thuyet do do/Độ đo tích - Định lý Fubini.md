# I. Độ Đo Tích

## 1. Xây dựng đại số sinh và $\sigma$-đại số tích

> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Mục tiêu là xây dựng độ đo tích trên không gian $X \times Y$.
> 
> Đặt $\mathcal{R}$ là họ tất cả các hợp hữu hạn của các hình chữ nhật đo được rời nhau:
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F}, B_i \in \mathcal{G}, \text{ đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1)
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf] 
> Ta chứng minh 3 tính chất bắt buộc của một đại số:
> - **Chứa không gian toàn phần:** Rõ ràng $X \in \mathcal{F}$ và $Y \in \mathcal{G}$, nên hình chữ nhật $X \times Y \in \mathcal{R}$.
> - **Đóng với phép lấy phần bù:** Theo luật De Morgan, $(A \times B)^c = (A^c \times Y) \cup (A \times B^c)$. Hai tập này đo được và rời nhau nên thuộc $\mathcal{R}$. Việc mở rộng ra phần bù của một hợp hữu hạn cũng thỏa mãn nhờ tính phân phối của tập hợp.
> - **Đóng với phép hợp hữu hạn:** Với $E_1, E_2 \in \mathcal{R}$, ta có thể viết lại thành các phần rời nhau: $E_1 \cup E_2 = E_1 \cup (E_2 \cap E_1^c)$. Vì $E_1^c \in \mathcal{R}$ và giao của hai phần tử trong đại số vẫn thuộc đại số (phân rã được thành các hình chữ nhật rời nhau), nên hợp của chúng chắc chắn thuộc $\mathcal{R}$.

> [!def] Định nghĩa: $\sigma$-đại số tích
> Không gian tích $(X \times Y, \mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R}))$.
> Trong đó $\sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{R}$.

**Mục tiêu tiếp theo:** Định nghĩa độ đo tích $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]\,?$

## 2. Tập mặt cắt (Tiền đề Fubini)

> [!thm] (Mệnh đề 2)
> Cho $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$ là các không gian $\sigma$-hữu hạn ($\sigma$-finite). Cho $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1) Với mọi $(x, y) \in X \times Y$:
> $E_x = \{ y \in Y : (x, y) \in E \} \in \mathcal{G}$
> $E^y = \{ x \in X : (x, y) \in E \} \in \mathcal{F}$
> 
> 2) Các hàm đi từ không gian vào $\overline{\mathbb{R}}$:
> Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được.
> Hàm $y \mapsto \mu(E^y)$ là $\nu$-đo được.
> Và ta có đẳng thức tích phân:
> $$\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu \tag{1}$$

## 3. Chứng minh Mệnh đề 2

Việc chứng minh trực tiếp Mệnh đề 2 cho một tập bất kỳ thuộc $\sigma$-đại số tích rất khó. Thay vào đó, ta sử dụng nguyên lý xây dựng "tập hợp tốt" kết hợp với Định lý Halmos.

> [!def] Định nghĩa: Lớp đơn điệu
> Một họ $\mathcal{M}$ được gọi là lớp đơn điệu nếu:
> i/ $E_n \in \mathcal{M}, E_n \uparrow E \implies E \in \mathcal{M}$.
> ii/ $F_n \in \mathcal{M}, F_n \downarrow F \implies F \in \mathcal{M}$.

> [!thm] Định lý Halmos
> Nếu $\mathcal{M}$ thỏa mãn tính chất lớp đơn điệu và $\mathcal{R}$ là đại số sao cho $\mathcal{R} \subset \mathcal{M}$, thì $\sigma(\mathcal{R}) \subset \mathcal{M}$.

Dựa vào công cụ trên, ta có sơ đồ chiến lược chứng minh cho Mệnh đề 2 như sau:

> [!obs] (Sơ đồ chứng minh)
> Để chứng minh các tính chất 1) và 2) thỏa mãn với mọi tập đo được $E \in \sigma(\mathcal{R})$, ta thực hiện theo sơ đồ sau:
> 
> - **B1:** Khởi tạo với $E \in \mathcal{R}$. Tính toán trực tiếp để chỉ ra $E$ thỏa mãn tính chất 1) và 2).
> - **B2:** Mở rộng lên không gian $E \in \sigma(\mathcal{R})$ bằng cách lập các "tập hợp tốt":
> - **B2.1:** Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa t/c 1)}\}$. Đi chứng minh $\mathcal{E}$ là một $\sigma$-đại số. Kết hợp với $\mathcal{R} \subset \mathcal{E}$, ta suy ra $\mathcal{E} = \sigma(\mathcal{R})$.
> - **B2.2:** Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa t/c 2)}\}$. Đi chứng minh $\mathcal{M}$ là một lớp đơn điệu. Kết hợp với Định lý Halmos, ta suy ra $\mathcal{M} = \sigma(\mathcal{R})$.

**Giải thích cách thức hoạt động của sơ đồ:**
Thay vì đi kiểm tra từng tập hợp $E$ phức tạp, ta gom tất cả các tập thỏa mãn tính chất cần chứng minh vào một lớp $\mathcal{E}$ (hoặc $\mathcal{M}$). Bằng cách dùng Bước 1 để chứng minh lõi $\mathcal{R}$ nằm trong các lớp này, việc còn lại chỉ là chứng minh cấu trúc của $\mathcal{E}$ là một $\sigma$-đại số (hoặc $\mathcal{M}$ là lớp đơn điệu). Vì $\sigma(\mathcal{R})$ là cấu trúc nhỏ nhất chứa $\mathcal{R}$, sự bao hàm $\sigma(\mathcal{R}) \subset \mathcal{E}$ và $\sigma(\mathcal{R}) \subset \mathcal{M}$ sẽ tự động có.

> [!prf]
> **B1: Xét $E \in \mathcal{R}$**
> Đặt $E = \bigcup_{i=1}^n A_i \times B_i$.
> Tập mặt cắt: $E_x = \bigcup_{i=1}^n (A_i \times B_i)_x$ và $E^y = \bigcup_{i=1}^n (A_i \times B_i)^y$.
> Trong đó $(A_i \times B_i)_x = B_i$ (nếu $x \in A_i$) hoặc $\emptyset$ (nếu $x \notin A_i$). 
> $\implies E_x \in \mathcal{G}, E^y \in \mathcal{F}$. (Thỏa mãn 1).
> Tính độ đo tập mặt cắt: $\nu(E_x) = \nu\left(\bigcup_{i=1}^n (A_i \times B_i)_x\right) = \sum_{i=1}^n \nu((A_i \times B_i)_x) = \sum_{i=1}^n \chi_{A_i}(x)\nu(B_i)$.
> Hàm đặc trưng đo được nên tổ hợp tuyến tính $x \mapsto \nu(E_x)$ là $\mu$-đo được. Tương tự vậy ta cũng có $\mu(E^y)$ đo được.
> Lấy tích phân: $\int_X \nu(E_x) \, d\mu = \sum_{i=1}^n \int_X \chi_{A_i}(x)\nu(B_i) \, d\mu = \sum_{i=1}^n \mu(A_i)\nu(B_i)$.
> Tương tự $\int_Y \mu(E^y) \, d\nu = \sum_{i=1}^n \mu(A_i)\nu(B_i)$ nên ta suy ra được $\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$. Mệnh đề đúng với mọi $E \in \mathcal{R}$.
> 
> **B2: Xét $E \in \sigma(\mathcal{R})$**
> B2.1: Chứng minh Tính chất 1
> Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 1)}\}$. Ta chứng minh $\mathcal{E}$ là $\sigma$-đại số trên $X \times Y$:
> - $X \times Y \in \mathcal{E}$ (hiển nhiên).
> - Phần bù: Lấy $E \in \mathcal{E} \implies E_x \in \mathcal{G}, E^y \in \mathcal{F}$. Xét $E^c$, ta có $(E^c)_x = (E_x)^c \in \mathcal{G}$ và $(E^c)^y = (E^y)^c \in \mathcal{F}$ (do $\mathcal{G}, \mathcal{F}$ là $\sigma$-đại số). $\implies E^c \in \mathcal{E}$.
> - Hợp đếm được: $( \bigcup_{n=1}^\infty E_n )_x = \bigcup_{n=1}^\infty (E_n)_x \implies \bigcup_{n=1}^\infty E_n \in \mathcal{E}$.
> Từ B1 ta có $\mathcal{R} \subset \mathcal{E}$. Vì $\mathcal{E}$ là $\sigma$-đại số chứa $\mathcal{R} \implies \sigma(\mathcal{R}) \subset \mathcal{E}$.
> 
> B2.2: Chứng minh Tính chất 2 (Dùng Định lý Halmos)
> Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 2)}\}$. Ta đi chứng minh $\mathcal{M}$ là lớp đơn điệu.
> 
> Trường hợp A: $\mu, \nu$ hữu hạn (finite)
> - **i/ $E_n \uparrow E$ ($E_{n}$ trong $\mathcal{M}$): c/m $E \in \mathcal{M}$**
> Nhận xét: $(E_n)_x \uparrow E_x \implies \nu((E_n)_x) \uparrow \nu(E_x)$.
> Vì $E_n \in \mathcal{M}$, hàm $x \mapsto \nu((E_n)_x)$ đo được. Đặt dãy hàm $f_n(x) = \nu((E_n)_x)$, ta có $f_n \uparrow f$ hầu khắp nơi. Giới hạn của dãy hàm đo được là hàm đo được, ta suy ra $x \mapsto \nu(E_x)$ $\mu$-đo được.
> Áp dụng Định lý Hội tụ Đơn điệu (MCT): $\int_X \nu(E_x) \, d\mu = \lim \int_X \nu((E_n)_x) \, d\mu$.
> Tương tự cho biến $Y$: $\int_Y \mu(E^y) \, d\nu = \lim_{n \to \infty} \int_Y \mu((E_n)^y) \, d\nu$. 
> Vì $E_n \in \mathcal{M}$ với mọi $n$, nên theo định nghĩa của $\mathcal{M}$, $E_n$ đã thỏa mãn đẳng thức tích phân: 
> $$
> \int_X \nu((E_n)_x) \, d\mu = \int_Y \mu((E_n)^y) \, d\nu
> $$
> Dẫn tới giới hạn của chúng phải bằng nhau: 
> $$
> \int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu
> $$
> Vậy ta có $E$ thỏa $(1)$ nên $E \in \mathcal{M}$.
> 
> - **ii/ $E_n \downarrow E$ ($E_{n}$ trong $\mathcal{M}$): c/m $E \in \mathcal{M}$**
> Tương tự có $\nu((E_n)_x) \downarrow \nu(E_x)$.
> Vì $\mu, \nu$ bị chặn (finite), ta có chặn trên: $\nu((E_n)_x) \le \nu(Y) < \infty$.
> Đủ điều kiện áp dụng Định lý Hội tụ Bị chặn (BCT): $\int_X \nu(E_x) \, d\mu = \lim \int_X \nu((E_n)_x) \, d\mu$.
> Tương tự cho $Y$: $\int_Y \mu(E^y) \, d\nu = \lim_{n \to \infty} \int_Y \mu((E_n)^y) \, d\nu$.
> Lập luận tương tự bên trên, ta suy ra $E \in \mathcal{M}$. Vậy $\mathcal{M}$ là lớp đơn điệu.
> 
> Trường hợp B: Không gian $\sigma$-hữu hạn ($\mu, \nu$ là các độ đo $\sigma$-finite)
> 
> Vì các không gian độ đo là $\sigma$-hữu hạn, theo định nghĩa, tồn tại hai dãy tập hợp tăng dần trong các $\sigma$-đại số tương ứng:
> $$X_k \uparrow X \quad \text{và} \quad Y_k \uparrow Y$$
> Sao cho với mọi $k \in \mathbb{N}^*$, ta luôn có độ đo thành phần là hữu hạn: $\mu(X_k) < \infty$ và $\nu(Y_k) < \infty$.
> 
> Ta thực hiện chứng minh qua 3 bước tường minh sau:
> 
> - Bước 1: Thiết lập các độ đo thu hẹp và áp dụng kết quả Trường hợp A
>   Với mỗi $k \in \mathbb{N}^*$, ta định nghĩa các độ đo thu hẹp (độ đo hữu hạn) $\mu_k$ trên $\mathcal{F}$ và $\nu_k$ trên $\mathcal{G}$ bằng công thức:
>   $$\mu_k(A) = \mu(X_k \cap A), \quad \forall A \in \mathcal{F}$$
>   $$\nu_k(B) = \nu(Y_k \cap B), \quad \forall B \in \mathcal{G}$$
>   Vì các độ đo $\mu_k, \nu_k$ là các độ đo hữu hạn ($\mu_k(X) = \mu(X_k) < \infty$ và $\nu_k(Y) = \nu(Y_k) < \infty$), ta hoàn toàn đủ điều kiện áp dụng kết quả đã chứng minh ở Trường hợp A cho cặp độ đo này. 
>   Do đó, với tập $E \in \mathcal{M}$, đẳng thức tích phân trên các "khối nhỏ" luôn được bảo đảm:
>   $$\int_X \nu_k(E_x) \, d\mu_k = \int_Y \mu_k(E^y) \, d\nu_k \tag{*}$$
> 
> - Bước 2: Sử dụng bổ đề phụ để bảo toàn tính đo được
>   Để tính tích phân khi cho $k \to \infty$, ta viết lại hai vế của đẳng thức $(*)$ về theo các độ đo gốc $\mu$ và $\nu$:
>   $$\int_X \nu(Y_k \cap E_x) \cdot \chi_{X_k}(x) \, d\mu = \int_Y \mu(X_k \cap E^y) \cdot \chi_{Y_k}(y) \, d\nu$$
>   Xét dãy hàm số $f_k(x) = \nu(Y_k \cap E_x) \cdot \chi_{X_k}(x)$. Theo kết quả của Trường hợp A và bổ đề về tính đo được của hàm thu hẹp ($f$ đo được $\iff f|_{X_k}$ đo được), hàm số $f_k(x)$ này là $\mu$-đo được trên $X$ với mọi $k$.
> 
> - Bước 3: Lấy giới hạn qua Định lý Hội tụ Đơn điệu (MCT)
>   Khi cho $k \to \infty$:
>   - Vì $Y_k \uparrow Y$, theo tính chất liên tục dưới của độ đo, ta có: $\nu(Y_k \cap E_x) \uparrow \nu(Y \cap E_x) = \nu(E_x)$.
>   - Vì $X_k \uparrow X$, hàm đặc trưng hội tụ tăng: $\chi_{X_k}(x) \uparrow \chi_X(x) = 1$.
>   
>   Do đó, dãy hàm số đo được và không âm $f_k(x)$ hội tụ tăng đơn điệu về hàm giới hạn:
>   $$f_k(x) \uparrow \nu(E_x), \quad \forall x \in X$$
>   Vì giới hạn tăng của một dãy hàm đo được là một hàm đo được, ta suy ra hàm lát cắt $x \mapsto \nu(E_x)$ là $\mu$-đo được.
>   
>   Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho vế trái:
>   $$\lim_{k \to \infty} \int_X \nu_k(E_x) \, d\mu_k = \lim_{k \to \infty} \int_X f_k(x) \, d\mu = \int_X \nu(E_x) \, d\mu$$
>   Lập luận hoàn toàn tương tự cho vế phải với dãy hàm $g_k(y) = \mu(X_k \cap E^y) \cdot \chi_{Y_k}(y)$, ta có $g_k(y) \uparrow \mu(E^y)$ và áp dụng MCT cho vế phải:
>   $$\lim_{k \to \infty} \int_Y \mu_k(E^y) \, d\nu_k = \int_Y \mu(E^y) \, d\nu$$
>   
>   Vì đẳng thức $(*)$ đúng với mọi $k$, nên khi lấy giới hạn hai vế khi $k \to \infty$, ta thu được đẳng thức toàn cục trên không gian lớn:
>   $$\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$$
> 
>   Vậy tập $E$ thỏa $(1)$, dẫn đến $E \in \mathcal{M}$. Vậy $\mathcal{M}$ đóng đối với các giới hạn đơn điệu trên không gian $\sigma$-hữu hạn, nên là lớp đơn điệu.
>
> Mệnh đề được chứng minh hoàn tất.

## 4. Định lý Độ đo tích

> [!thm] Định lý (Độ đo tích)
> Ánh xạ $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]$ định nghĩa bởi:
> $$(\mu \times \nu)(E) = \int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$$
> (Định nghĩa tốt nhờ Mệnh đề tiền Fubini). Ánh xạ này là 1 độ đo và $\sigma$-hữu hạn.
> 
> **Tính duy nhất:**
> Nếu có độ đo $\lambda$ trên $(X \times Y, \mathcal{F} \otimes \mathcal{G})$ thỏa:
> $\lambda(A \times B) = \mu(A)\cdot\nu(B) \quad \forall A \in \mathcal{F}, B \in \mathcal{G} \quad (\approx \mathcal{R})$
> Thì ta có:
> $\lambda \equiv \mu \times \nu$ trên toàn bộ $\sigma(\mathcal{R})$.

> [!prf] Chứng minh
> 
> **0. Tính định nghĩa tốt:**
> - Ta cần khẳng định biểu thức xác định ánh xạ $(\mu \times \nu)(E)$ là duy nhất với mọi tập $E \in \mathcal{F} \otimes \mathcal{G}$.
> - Theo kết quả trực tiếp của Mệnh đề 2, các hàm lát cắt $x \mapsto \nu(E_x)$ và $y \mapsto \mu(E^y)$ đều đo được, đảm bảo hai tích phân lặp vế trái và vế phải luôn tồn tại giá trị trong miền $[0, \infty]$. 
> - Đồng thời, đẳng thức $(1)$ của Mệnh đề 2: $\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$ khẳng định rằng dù ta tính toán độ đo của tập $E$ thông qua việc quét tích phân các lát cắt dọc hay lát cắt ngang, kết quả thu được là đồng nhất.
>    Do đó, ánh xạ $\mu \times \nu$ hoàn toàn xác định tốt trên $\mathcal{F} \otimes \mathcal{G}$.
> 
> **1. Tính chất độ đo:**
> - Tập rỗng: $(\mu \times \nu)(\emptyset) = \int_X \nu(\emptyset) \, d\mu = \int_X 0 \, d\mu = 0$.
> - Tính $\sigma$-cộng tính: Với $E = \bigcup_{n=1}^\infty E_n$ (các $E_n$ đôi một rời nhau).
>    Các mặt cắt $(E_n)_x$ cũng rời nhau. Theo tính $\sigma$-cộng tính của độ đo $\nu$: $\nu(E_x) = \sum_{n=1}^\infty \nu((E_n)_x)$.
>   Lấy tích phân: $(\mu \times \nu)(E) = \int_X \left( \sum_{n=1}^\infty \nu((E_n)_x) \right) d\mu$.
>   Áp dụng Định lý Hội tụ Đơn điệu (MCT) để đưa tổng ra ngoài tích phân:
> $\sum_{n=1}^\infty \int_X \nu((E_n)_x) \, d\mu = \sum_{n=1}^\infty (\mu \times \nu)(E_n)$.
> 
> **2. Tính $\sigma$-hữu hạn:**
> - Xét các khối $K_n = X_n \times Y_n \uparrow X \times Y$.
>  $(\mu \times \nu)(K_n) = \mu(X_n)\cdot\nu(Y_n) < \infty$. Vậy độ đo là $\sigma$-hữu hạn.
> 
> **3. Tính duy nhất:** (Chỉ nói sơ qua ý tưởng)
> - Cả $\lambda$ và $\mu \times \nu$ đều là các độ đo trùng nhau trên đại số $\mathcal{R}$ (vì tính chất đo hình chữ nhật mở rộng ra được cho các hợp rời nhau).
> - Cả hai độ đo đều $\sigma$-hữu hạn trên $\mathcal{R}$.
> - Áp dụng Định lý mở rộng Carathéodory (hoặc Hệ quả của lớp đơn điệu), hai độ đo này phải trùng nhau trên toàn bộ $\sigma$-đại số sinh bởi $\mathcal{R}$. $\implies \lambda \equiv \mu \times \nu$.

