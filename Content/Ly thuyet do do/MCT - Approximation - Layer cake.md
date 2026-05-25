> [!thm] Định lý Hội tụ đơn điệu (Monotone Convergence Theorem - MCT)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $D \in \mathfrak{A}$. Giả sử $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được không âm trên $D$ thỏa mãn:
> 1. Dãy không giảm: $0 \le f_1 \le f_2 \le \dots \le f_n \le \dots$ hầu khắp nơi trên $D$.
> 2. Hội tụ điểm: $\lim_{n \to \infty} f_n(x) = f(x)$ hầu khắp nơi trên $D$.
> 
> Khi đó, hàm giới hạn $f$ cũng là một hàm đo được không âm trên $D$ và:
> $$\lim_{n \to \infty} \int_D f_n d\mu = \int_D \left( \lim_{n \to \infty} f_n \right) d\mu = \int_D f d\mu$$

> [!prf] Chứng minh
> Để đơn giản hóa trình bày, ta có thể giả sử các tính chất không giảm và hội tụ đúng tại *mọi* điểm $x \in D$ (nếu chỉ đúng hầu khắp nơi, ta bỏ đi một tập có số đo $0$ mà không làm thay đổi giá trị tích phân).
> 
> Quá trình chứng minh được chia làm 2 chiều bất đẳng thức:
> 
> **Chiều 1: Chứng minh $\lim_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu$**
> Vì dãy $(f_n)$ không giảm và tiến tới $f$, ta có $f_n \le f$ với mọi $n \in \mathbb{N}^*$.
> Áp dụng tính đơn điệu của tích phân, ta thu được:
> $$\int_D f_n d\mu \le \int_D f d\mu \quad (\forall n)$$
> Dãy số thực $(\int_D f_n d\mu)$ là một dãy không giảm và bị chặn trên bởi $\int_D f d\mu$, do đó nó có giới hạn và:
> $$
> \lim_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu \tag{1}
> $$
> 
> **Chiều 2: Chứng minh $\lim_{n \to \infty} \int_D f_n d\mu \ge \int_D f d\mu$**
> Theo định nghĩa tích phân của hàm không âm, $\int_D f d\mu = \sup_{\varphi \in S} \int_D \varphi d\mu$, với $S = \{\varphi \text{ đơn giản} : 0 \le \varphi \le f\}$.
> Cố định một hàm đơn giản $\varphi \in S$ và chọn một hằng số bất kỳ $\alpha \in (0, 1)$. Ta cần chứng minh $\lim_{n \to \infty} \int_D f_n d\mu \ge \int_D \varphi d\mu$.
> 
> Với mỗi $n \in \mathbb{N}^*$, định nghĩa tập hợp:
> $$E_n = \{x \in D : f_n(x) \ge \alpha \varphi(x)\}$$
> Nhận xét các tính chất của dãy tập hợp $(E_n)$:
> - **Tính tăng:** Vì $f_{n+1} \ge f_n$, nếu $x \in E_n$ thì $f_{n+1}(x) \ge f_n(x) \ge \alpha \varphi(x)$, suy ra $x \in E_{n+1}$. Vậy $E_1 \subset E_2 \subset \dots \subset E_n \subset \dots$
> - **Phủ toàn bộ $D$ ($\bigcup_{n=1}^\infty E_n = D$):** Lấy $x \in D$ bất kỳ. 
>   + Nếu $f(x) = 0$, do $0 \le \varphi \le f$ nên $\varphi(x) = 0$. Khi đó $\alpha \varphi(x) = 0 \le f_n(x)$ với mọi $n$, tức là $x \in E_n$ với mọi $n$.
>   + Nếu $f(x) > 0$, vì $\alpha \in (0, 1)$ nên $\alpha \varphi(x) < \varphi(x) \le f(x)$. Do $\lim_{n \to \infty} f_n(x) = f(x)$, theo định nghĩa giới hạn, tồn tại một chỉ số $n_0$ đủ lớn sao cho $f_{n_0}(x) \ge \alpha \varphi(x)$. Suy ra $x \in E_{n_0}$.
>   Vậy dãy tập $(E_n)$ tăng dần và tiến tới $D$ ($E_n \uparrow D$).
> 
> Xét tích phân của $f_n$ trên $D$:
> $$\int_D f_n d\mu \ge \int_{E_n} f_n d\mu \ge \int_{E_n} \alpha \varphi d\mu = \alpha \int_{E_n} \varphi d\mu$$
> Hàm tập hợp $\nu(A) = \int_A \varphi d\mu$ (với $\varphi$ là hàm đơn giản) là một độ đo, do đó nó thỏa mãn tính liên tục từ dưới đối với dãy tập tăng $E_n \uparrow D$:
> $$\lim_{n \to \infty} \int_{E_n} \varphi d\mu = \int_D \varphi d\mu$$
> 
> Lấy giới hạn $n \to \infty$ cho bất đẳng thức phía trên:
> $$\lim_{n \to \infty} \int_D f_n d\mu \ge \alpha \lim_{n \to \infty} \int_{E_n} \varphi d\mu = \alpha \int_D \varphi d\mu$$
> Bất đẳng thức này đúng với mọi $\alpha \in (0, 1)$. Cho $\alpha \to 1^-$, ta thu được:
> $$\lim_{n \to \infty} \int_D f_n d\mu \ge \int_D \varphi d\mu$$
> Bất đẳng thức này lại đúng với *mọi* hàm đơn giản $\varphi \le f$. Lấy cận trên đúng (supremum) theo $\varphi \in S$ cho vế phải, ta có:
> $$
> \lim_{n \to \infty} \int_D f_n d\mu \ge \sup_{\varphi \le f} \int_D \varphi d\mu = \int_D f d\mu \tag{2}
> $$
> 
> **Kết luận:**
> Từ (1) và (2), ta kết luận được $\lim_{n \to \infty} \int_D f_n d\mu = \int_D f d\mu$. 

> [!thm] Bổ đề 8.6 (Định lý xấp xỉ bằng hàm đơn giản)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên $X$ (tức là $f: X \to [0, \infty]$).
> Khi đó, luôn tồn tại một dãy các hàm đơn giản không âm $(\varphi_n)_{n=1}^\infty$ trên $X$ sao cho:
> 
> 1. $\varphi_n \uparrow f$ trên $X$ (Tức là $0 \le \varphi_1 \le \varphi_2 \le \dots \le f$ và $\lim_{n \to \infty} \varphi_n(x) = f(x)$ tại mọi $x \in X$).
> 2. $\varphi_n \to f$ hội tụ đều trên mọi tập con $E \subset X$ mà tại đó $f$ bị chặn.
> 3. $\lim_{n \to \infty} \int_D \varphi_n d\mu = \int_D f d\mu$ với mọi tập đo được $D \in \mathfrak{A}$.

> [!prf] 
> **Ý tưởng xây dựng (Construction):**
> Cố định một số nguyên $n \ge 1$. Ta cắt trục tung (tập giá trị của $f$) thành hai phần: phần bị chặn $[0, n)$ và phần không bị chặn $[n, \infty]$. 
> - Chia đoạn $[0, n)$ thành $n \cdot 2^n$ khoảng nhỏ bằng nhau, mỗi khoảng có độ dài $\frac{1}{2^n}$.
> - Đặt $I_{n,k} = \left[ \frac{k-1}{2^n}, \frac{k}{2^n} \right)$ với $k = 1, 2, \dots, n2^n$.
> 
> Tương ứng với các khoảng trên trục tung, ta lấy nghịch ảnh để tạo ra các tập hợp (các bậc thang) trên miền $X$:
> - $E_{n,k} = f^{-1}(I_{n,k}) = \left\{ x \in X : \frac{k-1}{2^n} \le f(x) < \frac{k}{2^n} \right\}$
> - $F_n = f^{-1}([n, \infty]) = \{ x \in X : f(x) \ge n \}$
> 
> Ta định nghĩa hàm đơn giản $\varphi_n$ bằng cách lấy giá trị cận dưới của mỗi khoảng:
> $$\varphi_n(x) = \sum_{k=1}^{n2^n} \frac{k-1}{2^n} \chi_{E_{n,k}}(x) + n \chi_{F_n}(x)$$
> 
> **Chứng minh tính chất 1 (Tính đơn điệu và hội tụ điểm):**
> * $\varphi_n \le f$: Điều này hiển nhiên từ cách dựng. Nếu $x \in E_{n,k}$ thì $\varphi_n(x) = \frac{k-1}{2^n} \le f(x)$. Nếu $x \in F_n$ thì $\varphi_n(x) = n \le f(x)$.
> * $\varphi_n \le \varphi_{n+1}$: Khi chuyển từ bước $n$ sang $n+1$, mỗi khoảng $I_{n,k}$ được chia làm hai nửa bằng nhau, và mức trần được nâng từ $n$ lên $n+1$. Việc "chia mịn" này khiến cho giá trị chốt dưới của các khoảng chứa $f(x)$ chỉ có thể giữ nguyên hoặc tăng lên, do đó $\varphi_n(x) \le \varphi_{n+1}(x)$ với mọi $x$.
> * $\lim_{n \to \infty} \varphi_n(x) = f(x)$: 
>   - *Trường hợp $f(x) = \infty$:* Khi đó $x \in F_n$ với mọi $n$, suy ra $\varphi_n(x) = n$. Lấy giới hạn ta có $\lim \varphi_n(x) = \infty = f(x)$.
>   - *Trường hợp $f(x) < \infty$:* Khi $n$ đủ lớn sao cho $n > f(x)$, điểm $x$ sẽ lọt vào một trong các tập $E_{n,k}$. Khi đó $f(x)$ và $\varphi_n(x)$ nằm trong cùng một khoảng có độ dài $\frac{1}{2^n}$. Do đó:
>   $$0 \le f(x) - \varphi_n(x) < \frac{1}{2^n}$$
>   Cho $n \to \infty$, khoảng cách này tiến về $0$, suy ra $\varphi_n(x) \to f(x)$.
> 
> **Chứng minh tính chất 2 (Hội tụ đều trên tập bị chặn):**
> Giả sử $f$ bị chặn trên tập $E$, tức là tồn tại số thực $M > 0$ sao cho $f(x) < M$ với mọi $x \in E$.
> Chọn một số nguyên $N > M$. Với mọi $n \ge N$ và mọi $x \in E$, ta luôn có $f(x) < M < n$.
> Do đó, đồ thị của $f$ trên tập $E$ hoàn toàn nằm trong phần đã được "chia mịn" (không chạm tới mức trần $n$). Theo lập luận ở trên, ta có:
> $$0 \le f(x) - \varphi_n(x) < \frac{1}{2^n} \quad (\forall x \in E, \forall n \ge N)$$
> Vì đại lượng $\frac{1}{2^n}$ hoàn toàn không phụ thuộc vào $x$, sự hội tụ này là hội tụ đều trên $E$.
> 
> **Chứng minh tính chất 3 (Bảo toàn tích phân qua giới hạn):**
> Vì dãy $(\varphi_n)$ là một dãy các hàm đo được không âm, tăng dần và hội tụ điểm về $f$ ($\varphi_n \uparrow f$). 
> Áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT), ta suy ra:
> $$\lim_{n \to \infty} \int_D \varphi_n d\mu = \int_D f d\mu$$
