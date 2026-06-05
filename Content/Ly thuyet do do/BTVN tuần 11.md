
> [!prob] (Prob 8.11)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo và $f$ là một hàm đo được, không âm trên $X$ sao cho $f$ hữu hạn $\mu$-hầu khắp nơi ($\mu$-a.e) trên $X$. Định nghĩa dãy hàm $f_{n}$ trên $X$:
> $$
> f_{n}(x) = \begin{cases}
> f(x) & \text{nếu } f(x) \le n\\
> 0 & \text{nếu } f(x) > n
> \end{cases}
> $$
> Chứng minh rằng $\lim_{ n \to \infty } \int_{X} f_{n} d\mu = \int_{X} f d\mu$.

> [!prf]
> 

> [!prob] (Prob 8.15)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo. Cho $f$ là các hàm nhận giá trị thực mở rộng, $\mathfrak{A}$-đo được trên $X$ và hữu hạn $\mu$-hầu khắp nơi trên $X$. Chứng minh rằng $f$ khả tích theo $\mu$ trên $X$ khi và chỉ khi:
> $$
> \sum_{n \in \mathbb{Z}_+} 2^{n} \mu(\{ x \in X: f(x) > 2^{n}\}) < \infty 
> $$

> [!prf]
> Đặt $A_n = \{x \in X : f(x) > 2^n\}$ với mọi $n \in \mathbb{Z}_+ = \{1, 2, 3, \dots\}$. Ta cần chứng minh $\int_X f d\mu < \infty \iff \sum_{n=1}^\infty 2^n \mu(A_n) < \infty$.
> Gọi $\chi_{A_{n}}$ là hàm chỉ thị của tập đo được $A_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$:
> $$
> \mu(A_n) = \int_X \chi_{A_n} d\mu
> $$
> Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí tổng và tích phân:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) = \sum_{n=1}^\infty \int_X 2^n \chi_{A_n} d\mu = \int_X \left( \sum_{n=1}^\infty 2^n \chi_{A_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty 2^n \chi_{A_n}(x)$. Vì $f(x) < \infty$ hầu khắp nơi trên $X$, xét các điểm $x \in X$ có giá trị hữu hạn. Do dãy $(2^n)_{n=0}^\infty$ tăng ngặt và tiến ra vô cùng, ta tìm được một số nguyên không âm $k \in \mathbb{N}$ sao cho:
> $$
> 2^k \le f(x) < 2^{k+1}
> $$
> Ta khảo sát $g(x)$ tại từng mức giá trị, suy ra từ hàm chỉ thị $\chi_{A_{n}}(x)$:
> - Trường hợp $1\le n \le k-1$:
> 	- Ta có $n \le k-1 \implies n+1 \le k \implies 2^n \cdot 2 \le 2^k$. Kết hợp giả thiết $2^{k} \le f(x)$, ta được $2^{n} \le 2\cdot 2^{n} \le 2^{k} \le f(x)$.
> 	- Khi đó: vì $f(x) > 2^{n}$ đúng với mọi $n$ từ $1$ tới $k-1$, ta có $g(x) = \sum_{n=1}^{k-1} 2^n + 0 = 2^1 + 2^2 + \dots + 2^{k-1}$
> - Trường hợp $n \ge k +1$:
>   Vì $2^n \ge 2^{k+1} > f(x)$, điều kiện $f(x) > 2^n$ không thỏa. Do đó $\chi_{A_n}(x) = 0$ dẫn tới $g(x) = 0$.
> - Trường hợp $n = k$: 
> 	- Nếu $f(x) > 2^{k}$, ta có: $g(x) = \sum_{n=1}^{k} 2^n = (2^1 + 2^2 + \dots + 2^{k-1}) + 2^k$
> 	- Nếu $f(x) = 2^{k}$, ta có $g(x) = \sum_{n=1}^{k-1} 2^n + 0 = 2^1 + 2^2 + \dots + 2^{k-1}$
> 	  
> Ta rút ra kết luận: trong tất cả trường hợp, ta đều có $g(x) \ge \sum_{n=1}^{k-1} 2^n = 2^k - 2$. 
> Kết hợp với giả thiết $f(x) < 2^{k+1}$ hay $2^k > \frac{1}{2}f(x)$, ta suy ra: $g(x) > \frac{1}{2}f(x) - 2$ hay $f(x)<g(x) + 4$.
> Mà $f(x) \ge 2^{k} > 2^{k} - 2$ nên ta có $f(x) \ge g(x)$.
> Vậy ta kết hợp hai chiều bất đẳng thức để được: 
> $$
> g(x) \le f(x) < 2g(x) + 4
> $$
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân, lấy tích phân trên $X$ cho bất đẳng thức ở trên, ta được:
> $$
> \int_X g \, d\mu \le \int_X f \, d\mu \le 2\int_X g \, d\mu + 4\mu(X)
> $$
> Thay kết quả tính toán, ta được:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) \le \int_X f \, d\mu \le 2 \sum_{n=1}^\infty 2^n \mu(A_n) + 4\mu(X)
> $$
> Do giả thiết đề bài cho không gian có độ đo hữu hạn, tức là $\mu(X) < \infty$, nên $4\mu(X)$ là một hằng số thực là một chặn trên. Ta biện luận hai chiều:
> - ($\iff$): Nếu chuỗi độ đo hội tụ ($\sum_{n=1}^\infty 2^n \mu(A_n) < \infty$), thì vế phải của bất đẳng thức kẹp là hữu hạn, kéo theo tích phân $\int_X f d\mu < \infty$ (hàm $f$ khả tích).
> - ($\impliedby$): Nếu hàm $f$ khả tích ($\int_X f d\mu < \infty$), dựa vào vế trái của bất đẳng thức kẹp, chuỗi độ đo $\sum_{n=1}^\infty 2^n \mu(A_n)$ bị chặn bởi một số hữu hạn, tức là chuỗi hội tụ.

> [!prob] (Prob 8.16)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo bất kỳ. Giả sử $f$ là một hàm đo được nhận giá trị thực, không âm và bị chặn trên $X$. Chứng minh rằng $f$ khả tích đối với $\mu$ trên $X$ khi và chỉ khi:
> $$
> \sum_{n \in \mathbb{Z}_+} \frac{1}{2^n} \mu\left(\left\{x \in X : f(x) > \frac{1}{2^n}\right\}\right) < \infty
> $$

> [!prf]
> Đặt $B_{n} = \left\{  x \in X: f(x) > \frac{1}{2^{n}}  \right\}$ với mọi $n \in \mathbb{Z}_+ = \{1, 2, 3, \dots\}$. Ta cần chứng minh $\int_X f d\mu < \infty \iff \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) < \infty$.
> Gọi $\chi_{B_{n}}$ là hàm chỉ thị của tập đo được $B_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$:
> $$
> \mu(B_n) = \int_X \chi_{B_n} d\mu
> $$
> Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí tổng và tích phân:
> $$
> \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) = \sum_{n=1}^\infty \int_X \frac{1}{2^n} \chi_{B_n} d\mu = \int_X \left( \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x)$. Vì $f$ bị chặn trên $X$, tồn tại một số nguyên dương $N \in \mathbb{Z}_+$ đủ lớn sao cho $f(x) \le N$ với mọi $x \in X$. Ta xét giá trị của $g(x)$ dựa trên các phân vùng giá trị của $f(x)$ suy ra từ hàm chỉ thị $\chi_{B_{n}}(x)$:
> - Vì dãy $\frac{1}{2^{n}}\to 0$ là dãy giảm với ${} f(x) > 0 {}$, nên ta tìm được $k \in \mathbb{Z}_{+}$ sao cho:
>   $$
>  \frac{1}{2^{k+1}} < f(x) \le \frac{1}{2^k}
>   $$ 
> - Với $n \ge k+1$: 
> 	 - Ta có$\frac{1}{2^n} \le \frac{1}{2^{k+1}} < f(x)$ nghĩa là điều kiện $f(x) > \frac{1}{2^n}$ đúng.
> 	- Khi đó $g(x) = \sum_{n=k+1}^\infty \frac{1}{2^n} \cdot 1 = \frac{1}{2^{k+1}} + \frac{1}{2^{k+2}} + \dots = \frac{\frac{1}{2^{k+1}}}{1 - \frac{1}{2}} = \frac{1}{2^k}$
> - Với $1\le n \le k+1$: 
>  Ta có điều kiện $\frac{1}{2^n} \ge \frac{1}{2^{k-1}} > \frac{1}{2^k} \ge f(x)$ tương đương $f(x) > \frac{1}{2^n}$ sai, dẫn tới $g(x) = 0$.
> - Với $n =  k$: 
>   Ta có điều kiện $f(x) \ge \frac{1}{2^{n}}$, $g(x)$ có thê nhận giá trị $0$ hoặc $\frac{1}{2^k}$.
>   
>  Ta kết luận trong trường hợp $f(x) > 0$, ta luôn có $g(x) \ge \frac{1}{2^k}$.
>  Kết hợp với giả thiết $f(x) \le \frac{1}{2^{k}}$, ta có $g(x) \ge f(x)$.
>  Xét riêng trường hợp $f(x) =0$, khi đó điều kiện $0> \frac{1}{2^{k}}$ là sai dẫn tới quay lại trường hợp cho $g(x) = 0$.
>  Ta lại có: 
>  $$
>  g(x) = \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x) \le \sum_{n=k}^\infty \frac{1}{2^n} = \frac{1}{2^k} + \frac{1}{2^{k+1}} + \dots = \frac{\frac{1}{2^k}}{1 - \frac{1}{2}} = 4 \cdot \frac{1}{2^{k+1}}
>  $$
> Kết hợp với giả thiết $\frac{1}{2^{k+1}}\le f(x)$, ta được $g(x) \le 4 \cdot f(x)$
> Vậy kết hợp hai chiều bất đẳng thức, ta được:
> $$
> \frac{1}{4}g(x) \le f(x) \le g(x)
> $$
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân, lấy tích phân trên  cho bất đẳng thức ở trên, ta được:
> $$
> \frac{1}{4}\int_X g \, d\mu \le \int_X f \, d\mu \le \int_X g \, d\mu
> $$
> Thay kết quả tính toán, ta được:
> $$
> \frac{1}{4}\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) \le \int_X f \, d\mu \le \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n)
> $$
> Ta biện luận:
> - ($\implies$): Nếu hàm $f$ khả tích ($\int_X f d\mu < \infty$), dựa vào vế trái ta có $\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) \le 4 \int_X f d\mu < \infty$, tức là chuỗi độ đo hội tụ.
> - ($\impliedby$): Nếu chuỗi độ đo hội tụ ($\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) < \infty$), dựa vào vế phải ta suy ra tích phân của hàm số $\int_X f d\mu < \infty$, nghĩa là hàm $f$ khả tích.

> [!thm] (Prob 8.17: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, đo được trên $D \in \mathfrak{A}$. Giả sử $f$ nhận giá trị thực hữu hạn hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Lấy tổng các tích phân sai số**
> Từ giả thiết thứ hai, ta lấy tổng hai vế cho tất cả $n \in \mathbb{N}$. Kết hợp với giả thiết thứ nhất, ta có chuỗi các tích phân hội tụ:
> $$\sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) \le \sum_{n \in \mathbb{N}} \varepsilon_n < \infty$$
> 
> **Bước 2: Đổi chỗ tổng và tích phân**
> Vì $|f_n - f|^p \ge 0$ với mọi $n$, ta áp dụng tính $\sigma$-cộng tính của tích phân để hoán vị dấu tổng và dấu tích phân:
> $$\int_D \left( \sum_{n \in \mathbb{N}} |f_n - f|^p \right) d\mu = \sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) < \infty$$
> 
> **Bước 3: Tính hữu hạn a.e của tích phân hàm không âm**
> Đặt hàm số $g(x) = \sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p$. Nhận thấy $g(x)$ là một hàm đo được, không âm.
> Vì tích phân của $g(x)$ trên $D$ là hữu hạn, theo Bổ đề 8.2, hàm $g(x)$ bắt buộc phải nhận giá trị hữu hạn hầu khắp nơi trên $D$.
> 
> Mặt khác, theo giả thiết, $f(x)$ cũng nhận giá trị thực hữu hạn hầu khắp nơi. Gọi $N$ là tập hợp chứa các điểm làm cho $g(x) = \infty$ hoặc $f(x)$ vô hạn. Ta có $\mu(N) = 0$. 
> Với mọi $x \in D \setminus N$, ta có:
> $$\sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p < \infty$$
> 
> **Bước 4: Sử dụng điều kiện cần của chuỗi số hội tụ**
> Xét tại một điểm $x \in D \setminus N$ cố định, ta có một chuỗi số thực hội tụ. Theo tính chất cơ bản của chuỗi, nếu một chuỗi hội tụ thì số hạng tổng quát của nó phải tiến về $0$. Do đó:
> $$\lim_{n \to \infty} |f_n(x) - f(x)|^p = 0$$
> 
> **Bước 5: Kết luận**
> Vì $p \in (0, \infty)$ là một số dương cố định, $|f_n(x) - f(x)|^p \to 0$ tương đương với:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> 
> Lập luận này đúng với mọi $x \in D \setminus N$ (nơi $\mu(N) = 0$). Vậy ta kết luận dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 

> [!thm] (Prob 8.18: Trích dãy con hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, $\mathcal{A}$-đo được trên $D \in \mathcal{A}$, và giả sử $f$ nhận giá trị thực hầu khắp nơi trên $D$. Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\lim_{n \to \infty} \varepsilon_n = 0$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng dãy $f_n$ có một dãy con $(f_{n_k} : k \in \mathbb{N})$ hội tụ đến $f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Trích dãy con có tổng hội tụ**
> Theo giả thiết thứ nhất, ta có $\lim_{n \to \infty} \varepsilon_n = 0$. 
> Dựa vào định nghĩa giới hạn, với mỗi số nguyên dương $k \in \mathbb{N}$, ta luôn luôn tìm được một dãy chỉ số $n_k \in \mathbb{N}$ tăng dần, sao cho:
> $$\varepsilon_{n_k} < \frac{1}{2^k}$$
> 
> Xét chuỗi số dương tạo bởi dãy con $(\varepsilon_{n_k})_{k \in \mathbb{N}}$, ta thấy nó bị chặn trên bởi một chuỗi hình học hội tụ:
> $$\sum_{k \in \mathbb{N}} \varepsilon_{n_k} < \sum_{k \in \mathbb{N}} \frac{1}{2^k} = 1 < \infty$$
> 
> **Bước 2: Áp dụng kết quả Prob 8.17**
> Xét riêng dãy con các hàm số $(f_{n_k})_{k \in \mathbb{N}}$ và dãy số dương tương ứng $(\varepsilon_{n_k})_{k \in \mathbb{N}}$. 
> 
> Kiểm tra hai điều kiện với dãy con này:
> - Điều kiện (i): Chuỗi số dương hội tụ, $\sum_{k \in \mathbb{N}} \varepsilon_{n_k} < \infty$ (đã chứng minh ở Bước 1).
> - Điều kiện (ii): Từ giả thiết thứ hai của đề bài, với mọi chỉ số thuộc dãy con $n_k$, ta luôn có:
> $$\int_D |f_{n_k} - f|^p d\mu < \varepsilon_{n_k} \quad (\forall k \in \mathbb{N})$$
> 
> Do cả hai điều kiện trên đều thỏa, áp dụng kết quả Prob 8.17 cho dãy con $(f_{n_k})_{k \in \mathbb{N}}$, ta thu được kết luận:
> Dãy con $f_{n_k} \to f$ hầu khắp nơi (a.e.) trên $D$.
> 
> Chứng minh hoàn tất.

> [!prob] 
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo và $f$ nhận giá trị thực mở rộng, $\mathfrak{A}$-đo được trên $X$ sao cho $\int_{X}|f|^{p}d\mu < \infty$ với một $p \in (0, \infty)$. Chứng minh rằng $\lim_{ \lambda \to \infty }\lambda ^{p}\mu(\{ x \in X: |f(x)| \ge \lambda \}) = 0$.








$\xi$