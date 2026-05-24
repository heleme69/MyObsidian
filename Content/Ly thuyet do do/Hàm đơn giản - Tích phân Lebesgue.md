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


> [!thm] (Tính chất cơ bản của tích phân hàm đơn giản)
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
> Vì $E \subset D$ nên $(D_i \cap E) \subset D_i$. Áp dụng tính đơn điệu của độ đo $\mu$, ta có $\mu(D_i \cap E) \le \mu(D_i)$. Kéo theo:
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
