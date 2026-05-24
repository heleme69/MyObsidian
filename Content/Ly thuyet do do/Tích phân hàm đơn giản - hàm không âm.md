# [I] Tích phân hàm đơn giản

> [!def] (Hàm đơn giản)  
> Cho một không gian độ đo $(X, \mathfrak{A}, \mu)$. Một hàm $\varphi$ được gọi là hàm đơn giản nếu thỏa các điều kiện sau:  
> (i) Miền xác định $\mathfrak{D}(\varphi) \in \mathfrak{A}$,  
> (ii) $\varphi$ là $\mathfrak{A}$-đo được trên $\mathfrak{D}(\varphi)$,  
> (iii) $\varphi$ chỉ nhận hữu hạn giá trị thực, tức là $\mathfrak{R}(\varphi)$ là một tập con hữu hạn của $\mathbb{R}$.  
> (Lưu ý rằng có thể $\mu(\mathfrak{D}(\varphi)) = \infty$, nhưng các giá trị $\infty$ và $-\infty$ không được phép là giá trị của một hàm đơn giản $\varphi$.)

> [!def] (Biểu diễn chuẩn tắc)  
> Cho $\varphi$ là một hàm đơn giản trên tập $D \in \mathcal{A}$ trong không gian đo $(X, \mathfrak{A}, \mu)$.  
> Gọi $\{a_i : i = 1, \ldots, n\}$ là tập các giá trị khác nhau mà $\varphi$ nhận trên $D$ và đặt  
> $D_i = \{x \in D : \varphi(x) = a_i\}$ với $i = 1, \ldots, n$.  
> Khi đó $\{D_i : i = 1, \ldots, n\}$ là một họ rời nhau trong $\mathcal{A}$ và $\bigcup_{i=1}^{n} D_i = D$.  
> Biểu thức $\varphi(x) = \sum_{i=1}^{n} a_i 1_{D_i}(x)$ với $x \in D$ được gọi là biểu diễn chuẩn tắc của $\varphi$.  
>  
> Lưu ý rằng nếu $D_i \in \mathfrak{A}$ và $a_i \in \mathbb{R}$ với $i = 1, \ldots, n$, và nếu ta đặt $D = \bigcup_{i=1}^{n} D_i$ rồi định nghĩa $\varphi = \sum_{i=1}^{n} a_i 1_{D_i}$ trên $D$, thì $\varphi$ là một hàm đơn giản trên $D$.  
> 
> Tuy nhiên, $\sum_{i=1}^{n} a_i 1_{D_i}$ có thể không phải là biểu diễn chuẩn tắc của $\varphi$, bởi vì $\{D_i : i = 1, \ldots, n\}$ có thể không phải là một họ rời nhau và $\{a_i : i = 1, \ldots, n\}$ có thể không phải là tập các số thực phân biệt.

> [!def] (Tích phân Lebesgue cho hàm đơn giản)  
> Cho $\varphi = \sum_{i=1}^{n} a_i 1_{D_i}$ là biểu diễn chuẩn tắc của một hàm đơn giản trên tập $D \in \mathcal{A}$ trong không gian độ đo $(X, \mathcal{A}, \mu)$.  
> Tích phân Lebesgue của $\varphi$ trên $D$ theo $\mu$ được định nghĩa bởi  
> $$\int_D \varphi(x)\,\mu(dx) = \sum_{i=1}^{n} a_i \mu(D_i),$$  
> với điều kiện tổng này tồn tại trong $\overline{\mathbb{R}}$.  
>  
> Lưu ý: Ta thường xét $\int_D \varphi(x)\,\mu(dx)$ là một số thực khi nói $\varphi$ là Lebesgue khả tích trên $D$ theo $\mu$. Ký hiệu: $\int_D \varphi \, d\mu$.


> [!thm] (Tính chất cơ bản trên miền $D$)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $\varphi \ge 0$ là một hàm đơn giản xác định trên tập $D \in \mathfrak{A}$ có biểu diễn chuẩn tắc $\varphi = \sum_{i=1}^m \alpha_i \chi_{D_i}$. Khi đó ta có các tính chất sau:
> 
> 1. Tính đơn điệu 
> Nếu $E \subset D$ và $E \in \mathfrak{A}$, thì:
> $$\int_E \varphi d\mu \le \int_D \varphi d\mu$$
> 
> 2. Tính cộng tính hữu hạn 
> Cho $D = \bigcup_{j=1}^n E_j$ là hợp của các tập hợp $E_j \in \mathfrak{A}$ rời nhau đôi một. Khi đó:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \int_{E_j} \varphi d\mu$$

> [!prf]
> 1.
> Khi xét trên tập $E \subset D$, ta thu hẹp hàm $\varphi$ trên $E$:
> $$\varphi|_E = \sum_{i=1}^m \alpha_i \chi_{D_i \cap E}$$
> Hàm số này được định nghĩa trên tập nền $E = \bigcup_{i=1}^m (D_i \cap E)$ (trong đó các tập $D_i \cap E$ rời nhau đôi một).
> Theo định nghĩa tích phân của hàm đơn giản trên tập $E$:
> $$\int_E \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i \cap E)$$
> Vì $E \subset D$ nên $(D_i \cap E) \subset D_i$. Áp dụng tính đơn điệu của độ đo $\mu$, ta có $\mu(D_i \cap E) \le \mu(D_i)$. Dẫn tới:
> $$\int_E \varphi d\mu \le \sum_{i=1}^m \alpha_i \mu(D_i) = \int_D \varphi d\mu$$
>
> 2.
> Ta phân hoạch mỗi tập $D_i$ theo các tập $E_j$:
> $$D_i = D_i \cap D = D_i \cap \left( \bigcup_{j=1}^n E_j \right) = \bigcup_{j=1}^n (D_i \cap E_j)$$
> Do các tập $E_j$ rời nhau, nên các tập con $(D_i \cap E_j)$ cũng rời nhau đối với mọi $j \in \{1, \dots, n\}$. Áp dụng tính cộng tính hữu hạn của độ đo $\mu$:
> $$\mu(D_i) = \sum_{j=1}^n \mu(D_i \cap E_j)$$
> Thay vào định nghĩa tích phân ban đầu trên tập $D$:
> $$\int_D \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i) = \sum_{i=1}^m \alpha_i \left( \sum_{j=1}^n \mu(D_i \cap E_j) \right)$$
> Vì đây là các tổng hữu hạn, ta có thể tự do đổi thứ tự lấy tổng:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \left( \sum_{i=1}^m \alpha_i \mu(D_i \cap E_j) \right)$$
> Nhận xét rằng phần tổng bên trong dấu ngoặc tròn chính là định nghĩa tích phân của hàm đơn giản $\varphi$ trên tập con $E_j$:
> $$\int_{E_j} \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i \cap E_j)$$
> Từ đó suy ra:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \int_{E_j} \varphi d\mu$$

> [!prp] (Tính chất cơ bản của tích phân hàm đơn giản)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và các hàm đơn giản $\varphi, \varphi_1, \varphi_2$ xác định trên tập $D \in \mathfrak{A}$. Ta có các tính chất sau:
> 
> 1. Bằng nhau hầu khắp nơi (a.e.): Nếu $\varphi_1 = \varphi_2$ a.e. trên $D$ thì $\int_D \varphi_1 d\mu = \int_D \varphi_2 d\mu$.
> 2. Tính đơn điệu: Nếu $\varphi_1 \le \varphi_2$ trên $D$ thì $\int_D \varphi_1 d\mu \le \int_D \varphi_2 d\mu$.
> 3. Tính bị chặn: Nếu $\varphi \in [M_1, M_2]$ trên $D$ thì $M_1 \mu(D) \le \int_D \varphi d\mu \le M_2 \mu(D)$.
> 4. Tính thuần nhất: Nếu $\varphi$ khả tích và $c$ là hằng số thì $c\varphi$ cũng khả tích và $\int_D c\varphi d\mu = c \int_D \varphi d\mu$.
> 5. Tính tuyến tính (Cộng tính): Nếu $\varphi_1, \varphi_2$ khả tích trên $D$ thì $\varphi_1 + \varphi_2$ khả tích trên $D$ và:
> $$\int_D (\varphi_1 + \varphi_2) d\mu = \int_D \varphi_1 d\mu + \int_D \varphi_2 d\mu$$

> [!prf] Chứng minh các tính chất cơ bản
> 
> 1. Bằng nhau hầu khắp nơi:
> Gọi $N \subset D$ là tập hợp có số đo không ($\mu(N) = 0$) sao cho $\varphi_1 = \varphi_2$ trên tập $D \setminus N$.
> Áp dụng tính cộng tính theo tập hợp, ta phân tích tích phân trên $D$:
> $$\int_D \varphi_1 d\mu = \int_{D \setminus N} \varphi_1 d\mu + \int_N \varphi_1 d\mu$$
> Vì $\mu(N) = 0$ nên theo định nghĩa, tích phân của bất kỳ hàm đơn giản nào trên $N$ cũng bằng $0$. Trên miền $D \setminus N$, do $\varphi_1 = \varphi_2$ nên:
> $$\int_{D \setminus N} \varphi_1 d\mu + 0 = \int_{D \setminus N} \varphi_2 d\mu + \int_N \varphi_2 d\mu = \int_D \varphi_2 d\mu$$
> 
> 2. Tính đơn điệu:
> Giả sử $\varphi_1$ và $\varphi_2$ có biểu diễn chuẩn tắc là $\varphi_1 = \sum_{i=1}^n \alpha_i \chi_{D_i}$ và $\varphi_2 = \sum_{j=1}^m \beta_j \chi_{E_j}$.
> Xét họ các tập hợp giao nhau $D_i \cap E_j$. Trên mỗi tập $D_i \cap E_j$, hàm $\varphi_1$ có giá trị $\alpha_i$ và $\varphi_2$ có giá trị $\beta_j$. 
> Vì $\varphi_1 \le \varphi_2$ trên $D$, ta suy ra $\alpha_i \le \beta_j$ với mọi cặp $(i,j)$ sao cho $D_i \cap E_j \neq \emptyset$.
> Do đó:
> $$\int_D \varphi_1 d\mu = \sum_{i=1}^n \sum_{j=1}^m \alpha_i \mu(D_i \cap E_j) \le \sum_{i=1}^n \sum_{j=1}^m \beta_j \mu(D_i \cap E_j) = \int_D \varphi_2 d\mu$$
> 
> 3. Tính bị chặn:
> Xét các hàm đơn giản hằng số $\psi_1 = M_1 \chi_D$ và $\psi_2 = M_2 \chi_D$. Theo định nghĩa, ta có $\int_D \psi_1 d\mu = M_1 \mu(D)$ và $\int_D \psi_2 d\mu = M_2 \mu(D)$.
> Vì $M_1 \le \varphi \le M_2$ trên toàn bộ $D$, tức là $\psi_1 \le \varphi \le \psi_2$. Áp dụng tính đơn điệu (đã chứng minh ở ý 2), ta thu được:
> $$\int_D \psi_1 d\mu \le \int_D \varphi d\mu \le \int_D \psi_2 d\mu \implies M_1 \mu(D) \le \int_D \varphi d\mu \le M_2 \mu(D)$$
> 
> 4. Tính thuần nhất:
> Giả sử $\varphi = \sum_{i=1}^n \alpha_i \chi_{D_i}$. Khi nhân với hằng số $c$, hàm $c\varphi$ sẽ có biểu diễn là $c\varphi = \sum_{i=1}^n (c\alpha_i) \chi_{D_i}$.
> Theo định nghĩa tích phân của hàm đơn giản:
> $$\int_D c\varphi d\mu = \sum_{i=1}^n (c\alpha_i) \mu(D_i) = c \sum_{i=1}^n \alpha_i \mu(D_i) = c \int_D \varphi d\mu$$
> 
> 5. Tính tuyến tính (Cộng tính):
> Sử dụng lại phân hoạch chung $D_i \cap E_j$ như ở ý 2. Các tập $D_i \cap E_j$ rời nhau đôi một và có hợp bằng $D$.
> Trên mỗi tập $D_i \cap E_j$, hàm tổng $\varphi_1 + \varphi_2$ có giá trị không đổi là $\alpha_i + \beta_j$.
> Áp dụng định nghĩa tích phân cho hàm $\varphi_1 + \varphi_2$:
> $$\int_D (\varphi_1 + \varphi_2) d\mu = \sum_{i=1}^n \sum_{j=1}^m (\alpha_i + \beta_j) \mu(D_i \cap E_j)$$
> Tách tổng này ra làm hai phần:
> $$
> \begin{align}
> &=  \sum_{i=1}^n \sum_{j=1}^m \alpha_i \mu(D_i \cap E_j) + \sum_{i=1}^n \sum_{j=1}^m \beta_j \mu(D_i \cap E_j) \\
> &= \sum_{i=1}^n \alpha_i \left( \sum_{j=1}^m \mu(D_i \cap E_j) \right) + \sum_{j=1}^m \beta_j \left( \sum_{i=1}^n \mu(D_i \cap E_j) \right) \\
> &= \sum_{i=1}^n \alpha_i \mu(D_i) + \sum_{j=1}^m \beta_j \mu(E_j) = \int_D \varphi_1 d\mu + \int_D \varphi_2 d\mu
> \end{align}
> $$

# Tích phân hàm không âm




$\xi$