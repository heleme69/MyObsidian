# Lý thuyết Cầu phương Gauss và Đa thức trực giao

## 1. Không gian tích trong và Không gian đa thức

Xét không gian các hàm thực liên tục trên đoạn $[a, b]$, ký hiệu là $C[a, b]$. Ta trang bị cho không gian này một tích trong được xác định thông qua hàm trọng số $w(x)$ (với $w(x) > 0$ trên $(a, b)$):
$$\langle f, g \rangle = \int_a^b f(x)g(x)w(x) dx$$

Ký hiệu $\Pi_n$ là không gian các đa thức có bậc không vượt quá $n$. Một tập hợp các đa thức $\{P_0, P_1, \dots, P_n\}$ được gọi là họ đa thức trực giao nếu $\text{deg}(P_k) = k$ và:
$$\langle P_i, P_j \rangle = 0 \quad \text{với mọi } i \neq j$$

> [!thm] Bổ đề 1: Độc lập tuyến tính và tính trực giao
> Cho $\{P_0, P_1, \dots, P_n\}$ là họ đa thức trực giao. Khi đó:
> Tập hợp này là độc lập tuyến tính và tạo thành một cơ sở cho không gian $\Pi_n$.
> Đa thức $P_n$ trực giao với mọi đa thức $q(x)$ có bậc nhỏ hơn $n$, tức là $\langle q, P_n \rangle = 0$ với mọi $q \in \Pi_{n-1}$.

> [!prf] Chứng minh Bổ đề 1
> Xét phương trình tổ hợp tuyến tính: $\sum_{j=0}^n \alpha_j P_j(x) = 0$.
> Lấy tích trong của cả hai vế với đa thức $P_k$ (với $0 \le k \le n$), ta có:
>   $$\left\langle \sum_{j=0}^n \alpha_j P_j, P_k \right\rangle = 0$$
> Theo tính chất tuyến tính của tích trong và tính trực giao:
>   $$\sum_{j=0}^n \alpha_j \langle P_j, P_k \rangle = \alpha_k \langle P_k, P_k \rangle = 0$$
> Vì $\langle P_k, P_k \rangle > 0$, suy ra $\alpha_k = 0$ với mọi $k$. Do đó họ đa thức độc lập tuyến tính.
> Lấy $q(x)$ là một đa thức bất kỳ bậc $m < n$. Vì họ đa thức tạo thành cơ sở, ta có thể biểu diễn $q(x)$ dưới dạng: $q(x) = \sum_{j=0}^m c_j P_j(x)$.
> Xét tích trong $\langle q, P_n \rangle$:
>   $$\langle q, P_n \rangle = \left\langle \sum_{j=0}^m c_j P_j, P_n \right\rangle = \sum_{j=0}^m c_j \langle P_j, P_n \rangle$$
> Vì $j \le m < n$ nên $j \neq n$, do đó $\langle P_j, P_n \rangle = 0$. Kết luận $\langle q, P_n \rangle = 0$.

## 2. Hệ thức truy hồi xây dựng đa thức trực giao

> [!algo] Bổ đề 2: Hệ thức truy hồi 3 số hạng
> Mọi họ đa thức trực giao monic (hệ số bậc cao nhất bằng 1) đều thỏa mãn hệ thức truy hồi:
> $$P_n(x) = (x - a_n)P_{n-1}(x) - b_n P_{n-2}(x)$$
> Với các hệ số được xác định bởi:
> $a_n = \frac{\langle x P_{n-1}, P_{n-1} \rangle}{\langle P_{n-1}, P_{n-1} \rangle}$
> $b_n = \frac{\langle x P_{n-1}, P_{n-2} \rangle}{\langle P_{n-2}, P_{n-2} \rangle}$

> [!prf] Chứng minh Bổ đề 2
> Xét đa thức $P_n(x) - xP_{n-1}(x)$. Vì cả hai đều là đa thức monic bậc $n$, hiệu của chúng là một đa thức có bậc tối đa là $n-1$.
> Do đó, có thể biểu diễn hiệu này qua cơ sở trực giao:
>   $$xP_{n-1}(x) - P_n(x) = \sum_{j=0}^{n-1} c_j P_j(x)$$
>   Hay viết lại: $P_n(x) = xP_{n-1}(x) - \sum_{j=0}^{n-1} c_j P_j(x)$.
> Để xác định hệ số $c_{n-1}$ (tương ứng với $a_n$), ta lấy tích trong hai vế với $P_{n-1}$:
>   $$\langle P_n, P_{n-1} \rangle = \langle xP_{n-1}, P_{n-1} \rangle - c_{n-1}\langle P_{n-1}, P_{n-1} \rangle$$
> Vì $\langle P_n, P_{n-1} \rangle = 0$, ta suy ra $c_{n-1} = \frac{\langle xP_{n-1}, P_{n-1} \rangle}{\langle P_{n-1}, P_{n-1} \rangle} = a_n$.
> Tương tự, để xác định $c_{n-2}$ (tương ứng với $b_n$), lấy tích trong hai vế với $P_{n-2}$:
>   $$\langle P_n, P_{n-2} \rangle = \langle xP_{n-1}, P_{n-2} \rangle - c_{n-2}\langle P_{n-2}, P_{n-2} \rangle$$
> Suy ra $c_{n-2} = \frac{\langle xP_{n-1}, P_{n-2} \rangle}{\langle P_{n-2}, P_{n-2} \rangle} = b_n$.
> Với các $j < n-2$, $\langle xP_{n-1}, P_j \rangle = \langle P_{n-1}, xP_j \rangle$. Vì đa thức $xP_j$ có bậc $j+1 < n-1$, theo Bổ đề 1 thì tích trong này bằng 0. Do đó tất cả các hệ số $c_j$ với $j < n-2$ đều bằng 0, chứng minh được công thức truy hồi 3 số hạng.

## 3. Tính chất nghiệm của đa thức trực giao

> [!thm] Định lý 1: Sự phân bố nghiệm
> Đa thức trực giao $P_n(x)$ có đúng $n$ nghiệm thực phân biệt và tất cả các nghiệm này đều nằm hoàn toàn trong khoảng $(a, b)$.

> [!prf] 
> Giả sử $P_n(x)$ chỉ đổi dấu tại $m$ điểm phân biệt $t_1, t_2, \dots, t_m$ nằm trong khoảng $(a, b)$, với $m < n$.
> Thiết lập một đa thức phụ trợ có bậc $m$:
>   $$p(x) = (x - t_1)(x - t_2)\dots(x - t_m)$$
> Khi đó, các nghiệm của $p(x)$ trùng với các điểm đổi dấu của $P_n(x)$. Do đó, hàm số $P_n(x)p(x)$ sẽ không đổi dấu trên toàn bộ đoạn $[a, b]$ (vì tại các điểm $t_i$, cả hai hàm cùng đổi dấu nên tích của chúng luôn giữ nguyên một dấu).
> Tính tích phân của hàm này kèm trọng số:
>   $$\langle P_n, p \rangle = \int_a^b P_n(x)p(x)w(x) dx \neq 0$$
> Tuy nhiên, vì đa thức $p(x)$ có bậc $m < n$, nên $p(x) \in \Pi_{n-1}$. Áp dụng Bổ đề 1, đa thức $P_n$ phải trực giao với mọi đa thức thuộc $\Pi_{n-1}$, tức là $\langle P_n, p \rangle = 0$.
> Hai điều trên dẫn đến mâu thuẫn. Vậy giả thiết $m < n$ là sai. Đa thức $P_n(x)$ phải đổi dấu đúng $n$ lần, tương đương với việc có $n$ nghiệm thực phân biệt trong khoảng $(a, b)$.

## 4. Xây dựng Cầu phương Gauss và Bậc chính xác

Nhiệm vụ của cầu phương Gauss là tìm $n$ điểm mốc $x_i$ và các hệ số trọng lượng $c_i$ sao cho công thức sau đạt độ chính xác cao nhất:
$$\int_a^b f(x)w(x) dx \approx \sum_{i=1}^n c_i f(x_i)$$

> [!thm] Định lý 2: Bậc chính xác tối đa của Cầu phương Gauss
> Nếu chọn $n$ điểm mốc $x_1, x_2, \dots, x_n$ là các nghiệm của đa thức trực giao $P_n(x)$ ứng với hàm trọng số $w(x)$, thì công thức cầu phương Gauss nội suy sẽ chính xác tuyệt đối cho mọi đa thức $f(x)$ có bậc $\le 2n - 1$.

> [!prf] 
> Xét $f(x)$ là một đa thức tùy ý thuộc $\Pi_{2n-1}$ (bậc $\le 2n-1$).
> Thực hiện phép chia đa thức $f(x)$ cho đa thức trực giao $P_n(x)$, ta thu được thương $q(x)$ và dư $r(x)$:
>   $$f(x) = q(x)P_n(x) + r(x)$$
> Vì $\text{deg}(f) \le 2n - 1$ và $\text{deg}(P_n) = n$, suy ra bậc của thương $q(x) \le n - 1$. Phần dư $r(x)$ luôn có bậc nhỏ hơn $P_n(x)$ nên bậc của $r(x) \le n - 1$.
> Tính tích phân chính xác của $f(x)$ trên miền có trọng số:
>   $$\int_a^b f(x)w(x) dx = \int_a^b q(x)P_n(x)w(x) dx + \int_a^b r(x)w(x) dx$$
> Cụm tích phân đầu tiên chính là tích trong $\langle q, P_n \rangle$. Vì $q \in \Pi_{n-1}$, theo Bổ đề 1 thì $\langle q, P_n \rangle = 0$. Do đó:
>   $$\int_a^b f(x)w(x) dx = \int_a^b r(x)w(x) dx \tag{1}$$
> Tiếp tục áp dụng công thức xấp xỉ cầu phương tại $n$ điểm mốc $x_i$:
>   $$\sum_{i=1}^n c_i f(x_i) = \sum_{i=1}^n c_i [q(x_i)P_n(x_i) + r(x_i)]$$
> Vì các mốc $x_i$ được chọn là nghiệm của $P_n(x)$ nên $P_n(x_i) = 0$ tại mọi $i$. Tổng rút gọn thành:
>   $$\sum_{i=1}^n c_i f(x_i) = \sum_{i=1}^n c_i r(x_i) \tag{2}$$
> Vì $r(x)$ là đa thức bậc $\le n - 1$, công thức nội suy Lagrange với $n$ điểm bất kỳ luôn chính xác tuyệt đối cho nó, nghĩa là:
>   $$\int_a^b r(x)w(x) dx = \sum_{i=1}^n c_i r(x_i) \tag{3}$$
> Từ (1), (2) và (3), ta suy ra:
>   $$\int_a^b f(x)w(x) dx = \sum_{i=1}^n c_i f(x_i)$$
> Định lý được chứng minh hoàn tất.