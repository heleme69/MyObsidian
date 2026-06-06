
# Độ đo tích

## 1. Độ đo tích – Fubini

> [!def] (Cấu trúc $\mathcal{R}$)
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Bài toán đặt ra là: Xây dựng độ đo tích trên không gian mẫu mới $X \times Y$.
> Đặt $\mathcal{R}$ là họ tất cả các hợp hữu hạn của các hình chữ nhật đo được rời nhau:
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i \;\middle|\; A_i \in \mathcal{F}, B_i \in \mathcal{G}, \text{ các } (A_i \times B_i) \text{ đôi một rời nhau} \right\}$$

> [!prp] (Mệnh đề 1)
> $\mathcal{R}$ lập thành một đại số (algebra) trên tập $X \times Y$.

> [!prf] Chứng minh chi tiết Mệnh đề 1
> i)  Chứng minh không gian toàn phần thuộc $\mathcal{R}$
> - Vì $\mathcal{F}$ và $\mathcal{G}$ là các $\sigma$-đại số lần lượt trên $X$ và $Y$, ta luôn có $X \in \mathcal{F}$ và $Y \in \mathcal{G}$.
> - Do đó, hình chữ nhật toàn phần $X \times Y$ thuộc $\mathcal{R}$ (với trường hợp số tập hợp $m=1$).
> 
> ii) Chứng minh tính đóng đối với phép lấy phần bù
> - Xét một hình chữ nhật cơ bản $A \times B$ với $A \in \mathcal{F}, B \in \mathcal{G}$. Phần bù của nó được biểu diễn thành:
>   $$(A \times B)^c = (A^c \times Y) \cup (A \times B^c)$$
>   Do $A^c \in \mathcal{F}$ và $B^c \in \mathcal{G}$, hai tập $(A^c \times Y)$ và $(A \times B^c)$ là các hình chữ nhật đo được và chúng rõ ràng rời nhau. Do đó $(A \times B)^c \in \mathcal{R}$.
> - Với một tập $E \in \mathcal{R}$ bất kỳ, tức là $E = \bigcup_{i=1}^m (A_i \times B_i)$ rời nhau:
>   $$E^c = \bigcap_{i=1}^m (A_i \times B_i)^c$$
>   Vì mỗi $(A_i \times B_i)^c \in \mathcal{R}$ và phép giao hữu hạn các phần tử trong đại số $\mathcal{R}$ vẫn sinh ra một tập thuộc $\mathcal{R}$ (theo tính chất phân phối), ta suy ra $E^c \in \mathcal{R}$.
> 
> iii) Chứng minh tính đóng đối với phép hợp hữu hạn
> - Giả sử $E_1, E_2 \in \mathcal{R}$. Ta có thể biểu diễn hợp của chúng thông qua hiệu tập hợp để đảm bảo tính rời nhau:
>   $$E_1 \cup E_2 = E_1 \cup (E_2 \setminus E_1) = E_1 \cup (E_2 \cap E_1^c)$$
> - Từ Bước 2, ta có $E_1^c \in \mathcal{R}$. Phép giao $E_2 \cap E_1^c$ sẽ phân rã được thành các hình chữ nhật nhỏ đôi một rời nhau và hoàn toàn không giao với $E_1$.
> - Do đó, $E_1 \cup E_2$ viết được dưới dạng hợp của các hình chữ nhật đôi một rời nhau $\implies E_1 \cup E_2 \in \mathcal{R}$.

> [!def] Định nghĩa: $\sigma$-đại số tích
> Không gian tích $(X \times Y, \mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R}))$.
> Trong đó $\sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa đại số $\mathcal{R}$.

**Mục tiêu tiếp theo:** Định nghĩa độ đo tích $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]\,?$

> [!prp] Mệnh đề 2 (Tiền đề Định lý Fubini)
> Cho $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$ là các không gian độ đo $\sigma$-hữu hạn ($\sigma$-finite). Cho một tập đo được tích $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. Với mọi $x \in X$ và $y \in Y$, các thiết diện thỏa mãn:
>    - $E_x = \{ y \in Y : (x, y) \in E \} \in \mathcal{G}$
>    - $E^y = \{ x \in X : (x, y) \in E \} \in \mathcal{F}$
> 
> 2. Các hàm số nhận giá trị trên tập số thực mở rộng $\overline{\mathbb{R}}$:
>    - Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được.
>    - Hàm $y \mapsto \mu(E^y)$ là $\nu$-đo được.
> 
>    Đồng thời, ta có đẳng thức tích phân:
>    $$\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$$

> [!prf] Chứng minh chi tiết Mệnh đề 2
> 
> Phần 1: Chứng minh các thiết diện $E_x$ và $E^y$ là đo được
> Cố định một phần tử $x \in X$. Gọi $\mathcal{M}$ là lớp tất cả các tập con $E \subset X \times Y$ sao cho thiết diện $E_x \in \mathcal{G}$. Ta sẽ dùng kỹ thuật hệ đơn điệu để chứng minh $\mathcal{M}$ chứa toàn bộ $\mathcal{F} \otimes \mathcal{G}$.
> 
> 1. Xét các hình chữ nhật cơ bản: Giả sử $E = A \times B$ với $A \in \mathcal{F}, B \in \mathcal{G}$. Thiết diện tại $x$ được xác định bởi:
>    $$E_x = \begin{cases} B & \text{nếu } x \in A \\ \emptyset & \text{nếu } x \notin A \end{cases}$$
>    Vì $B \in \mathcal{G}$ và tập rỗng $\emptyset \in \mathcal{G}$, nên $E_x \in \mathcal{G} \implies A \times B \in \mathcal{M}$. Do đó, đại số sinh $\mathcal{R} \subset \mathcal{M}$.
> 
> 2. Chứng minh $\mathcal{M}$ là một $\sigma$-đại số:
>    - Tính đóng với phần bù: Nếu $E \in \mathcal{M}$, thiết diện của phần bù tuân theo công thức: $(E^c)_x = (E_x)^c$. Vì $E_x \in \mathcal{G}$ nên $(E_x)^c \in \mathcal{G} \implies E^c \in \mathcal{M}$.
>    - Tính đóng với phép hợp đếm được: Nếu chuỗi tập $\{E_n\}_{n=1}^\infty \subset \mathcal{M}$, thiết diện của hợp đếm được là: $\left(\bigcup_{n=1}^\infty E_n\right)_x = \bigcup_{n=1}^\infty (E_n)_x$. Vì $\mathcal{G}$ là một $\sigma$-đại số nên hợp đếm được này thuộc $\mathcal{G} \implies \bigcup_{n=1}^\infty E_n \in \mathcal{M}$.
>   - Vì $\mathcal{M}$ là một $\sigma$-đại số chứa đại số sinh $\mathcal{R}$, theo nguyên lý hệ đơn điệu, nó phải chứa $\sigma(\mathcal{R}) = \mathcal{F} \otimes \mathcal{G}$. Do đó với mọi $E \in \mathcal{F} \otimes \mathcal{G}$ thì $E_x \in \mathcal{G}$. 
>    *(Chứng minh tương tự đối với $E^y \in \mathcal{F}$)*.
> 
> Phần 2: Tính đo được của hàm thiết diện và Đẳng thức tích phân
> 
> Trường hợp A: Giả sử các không gian độ đo là hữu hạn ($\mu(X) < \infty, \nu(Y) < \infty$)
> Gọi $\mathcal{L}$ là tập hợp tất cả các tập $E \in \mathcal{F} \otimes \mathcal{G}$ sao cho hàm $x \mapsto \nu(E_x)$ đo được, hàm $y \mapsto \mu(E^y)$ đo được và thỏa mãn đẳng thức tích phân của mệnh đề.
> 
> 3. **Kiểm tra với hình chữ nhật cơ bản $E = A \times B$:**
>    * Hàm thiết diện có dạng: $\nu((A \times B)_x) = \nu(B) \cdot \chi_A(x)$ (với $\chi_A$ là hàm đặc trưng của tập $A$).
>    * Vì $A \in \mathcal{F}$, hàm đặc trưng $\chi_A(x)$ là hàm đo được $\implies$ hàm $x \mapsto \nu(E_x)$ đo được.
>    * Tính tích phân vế trái:
>      $$\int_X \nu(E_x) \, d\mu = \int_X \nu(B) \cdot \chi_A(x) \, d\mu = \nu(B) \cdot \mu(A)$$
>    * Tương tự với vế phải: $\int_Y \mu(E^y) \, d\nu = \mu(A) \cdot \nu(B)$.
>    * Hai vế bằng nhau, suy ra các hình chữ nhật thuộc $\mathcal{L}$. Nhờ tính tuyến tính của tích phân, toàn bộ đại số $\mathcal{R}$ cũng thuộc $\mathcal{L}$.
> 
> 4. **Chứng minh $\mathcal{L}$ là một Hệ Đơn Điệu (Monotone Class):**
>    * Giả sử có một chuỗi tăng các tập hợp $E_1 \subset E_2 \subset E_3 \subset \dots$ thuộc $\mathcal{L}$ và đặt $E = \bigcup_{n=1}^\infty E_n$.
>    * Theo tính chất liên tục dưới của độ đo, ta có: $\nu(E_x) = \lim_{n \to \infty} \nu((E_n)_x)$.
>    * Vì giới hạn của một dãy hàm đo được là một hàm đo được nên $x \mapsto \nu(E_x)$ đo được.
>    * Áp dụng **Định lý hội tụ đơn điệu (Beppo Levi)** cho cả hai vế tích phân:
>      $$\int_X \nu(E_x) \, d\mu = \lim_{n \to \infty} \int_X \nu((E_n)_x) \, d\mu = \lim_{n \to \infty} \int_Y \mu((E_n)^y) \, d\nu = \int_Y \mu(E^y) \, d\nu$$
>    * Do đó $E \in \mathcal{L}$. Lý luận hoàn toàn tương tự cho chuỗi giảm (sử dụng tính chất độ đo hữu hạn để đảm bảo không gặp dạng vô định $\infty - \infty$).
> 
> Theo Định lý Hệ đơn điệu, vì $\mathcal{L}$ chứa đại số $\mathcal{R}$ và đóng đối với các giới hạn đơn điệu nên $\mathcal{L}$ trùng với $\mathcal{F} \otimes \mathcal{G}$. Đẳng thức được chứng minh trong trường hợp hữu hạn.
> 
> Trường hợp B: Mở rộng cho không gian $\sigma$-hữu hạn ($\sigma$-finite)
> * Vì không gian là $\sigma$-hữu hạn, ta có thể phân rã $X = \bigcup_{k=1}^\infty X_k$ và $Y = \bigcup_{m=1}^\infty Y_m$ với $\mu(X_k) < \infty$ và $\nu(Y_m) < \infty$.
> * Xây dựng chuỗi các "khối" hữu hạn tăng dần $K_n = X_n \times Y_n$ sao cho $K_n \uparrow X \times Y$.
> * Với tập $E \in \mathcal{F} \otimes \mathcal{G}$ bất kỳ, ta áp dụng kết quả của Trường hợp A cho tập con có độ đo hữu hạn $E \cap K_n$:
>   $$\int_X \nu((E \cap K_n)_x) \, d\mu = \int_Y \mu((E \cap K_n)^y) \, d\nu$$
> * Cho $n \to \infty$, áp dụng Định lý hội tụ đơn điệu lần nữa cho dãy tập tăng này, ta thu được đẳng thức tổng quát:
>   $$\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$$
> Mệnh đề được chứng minh hoàn toàn.