
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
> Gọi $\chi_{A_{n}}$ là hàm chỉ thị của tập đo được $A_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$. 
> Xét tổng vô hạn của chuỗi các độ đo. Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí toán tử tổng và tích phân:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) = \sum_{n=1}^\infty \int_X 2^n \chi_{A_n} d\mu = \int_X \left( \sum_{n=1}^\infty 2^n \chi_{A_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty 2^n \chi_{A_n}(x)$. Vì $f(x) < \infty$ hầu khắp nơi trên $X$, xét các điểm $x \in X$ có giá trị hữu hạn. Do dãy $(2^n)_{n=0}^\infty$ tăng ngặt và tiến ra vô cùng, ta tìm được một số nguyên không âm $k \in \mathbb{N}$ sao cho:
> $$
> 2^k \le f(x) < 2^{k+1}
> $$
> Ta phân tách trục tung và khảo sát $g(x)$ tại các điểm giá trị, suy ra từ hàm chỉ thị $\chi_{A_{n}}(x)$:
> - Trường hợp $1\le n \le k-1$:
> 	- Ta có $n \le k-1 \implies n+1 \le k \implies 2^n \cdot 2 \le 2^k$. Kết hợp giả thiết $2^{k} \le f(x)$, ta được $2^{n} \le 2\cdot 2^{n} \le 2^{k} \le f(x)$.
> 	- Khi đó: vì $f(x) > 2^{n}$ đúng với mọi $n$ từ $1$ tới $k-1$, ta có ${} g(x) =  {}$



$\xi$