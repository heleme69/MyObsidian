
# [IV] Dãy hàm đo được

> [!rem]
> - Xét dãy $(f_{n}: n \in \mathbb{N})$, $f_{n} : D \to \overline{\mathbb{R}}$: $\limsup_{ n \to \infty }f_{n}$ và $\liminf_{  \to \infty }f_{n}$ luôn tồn tại và bằng $\lim_{ n \to \infty }f_{n}$ nếu $\limsup_{ n \to \infty }f_{n} = \liminf_{ n \to \infty }f_{n}$.
> - $f_{n}(x)$ hội tụ nếu $\lim_{ n \to \infty }f_{n}(x)$ tồn tại và thuộc $\overline{\mathbb{R}}$.

> [!thm] (Định lý 4.21)
> Let $(X, \mathfrak{A})$ be a measureable space and let ${} f_{n} {}$ be a monotone sequence of extended real-valued $\mathfrak{A}$-measureable functions on a set $D \in \mathfrak{A}$. Then $\lim_{ n \to \infty }f_{n}$ exists on $D$ and is $\mathfrak{A}$-measureable on $D$.

> [!prf]
> - Giả sử $f_{n}$ là dãy tăng, ta sẽ chứng minh đẳng thức:
>     $$
>     \{x \in D : \lim_{n \to \infty} f_n(x) > \alpha\} = \bigcup_{n=1}^{\infty} \{x \in D : f_n(x) > \alpha\} 
>      $$
> 	- Chiều $(\subset)$: Vì giới hạn tại điểm $x$ lớn hơn $\alpha$, ta tìm được $k$ sao cho $f_{k}(x) > \alpha$, nên $x$ nằm trong hợp của các tập vế phải.
> 	- Chiều $(\supset)$: Vì $x$ nằm ở vế phải, ta tìm được $k$ sao cho $f_k(x) > \alpha$. Vì dãy $(f_n)$ là dãy tăng, nên hàm giới hạn $\lim_{n \to \infty} f_n(x)$ chắc chắn phải lớn hơn hoặc bằng $f_k(x)$, hay $\lim_{n \to \infty} f_n(x) > \alpha$. Vậy $x$ thuộc vế trái.
> - Vì $f_{n}$ đo được nên $A_{n} = \{ x \in D: f_{n}(x) > \alpha \}$ là một tập đo được thuộc $\mathfrak{A}$. Vì $\mathfrak{A}$ là $\sigma$-đại số, nó đóng kín dưới phép hợp đếm được.
> - Nếu $f_{n}$ là dãy giảm, $-f_{n}$ là dãy tăng. Vì $\lim_{ n \to \infty }-f_{n} = - \lim_{ n \to \infty }f_{n}$, mà $f_{n}$ là hàm đo được nên $-1 \cdot f_{n}$ là hàm đo được.

> [!thm]
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable on a set $D \in \mathfrak{A}$:
> a) $\min_{n=1,\ldots,N} f_n, \; \max_{n=1,\ldots,N} f_n, \; \inf_{n \in \mathbb{N}} f_n, \; \sup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> b) $\liminf_{n \in \mathbb{N}} f_n, \; \limsup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> c) Let $D_{e} = \{ D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}}\}$. Then $D_{e} \in \mathfrak{A}$ and $\lim_{ n \to \infty }f_{n}$ is $\mathfrak{A}$-measureable on $D_{e}$.

> [!prf]
> a)
> Ta chứng minh các hàm cho theo giả thiết được biểu diễn bởi hợp hoặc giao đếm được các hàm đo được, nên là hàm đo được:
> 1. Hàm $\min$:
> 	Với mỗi $\alpha \in \mathbb{R}$, ta có:
>	$$
> 	\{x \in D : \min_{n=1,\dots,N} f_n(x) < \alpha\} = \bigcup_{n=1}^N \{x \in D : f_n(x) < \alpha\}
>	$$
>	- Chiều $(\subset)$: Nếu giá trị nhỏ nhất của một tập hữu hạn số $\{f_1(x), \dots, f_N(x)\}$ nhỏ hơn $\alpha$, ta tìm được ít nhất một phần tử $f_k(x)$ nhỏ hơn $\alpha$, nên $x$ nằm trong hợp ở vế phải.
>	- Chiều $(\supset)$: Nếu $x$ thuộc vế phải, ta tìm được $k$ sao cho $f_k(x) < \alpha$. Vì $\min f_n(x)$ luôn nhỏ hơn hoặc bằng bất kỳ phần tử nào trong tập, ta có $\min f_n(x) \le f_k(x) < \alpha$. Vậy $x$ thuộc vế trái.
> 2. Hàm $\inf$:
> 	Với mỗi $\alpha \in \mathbb{R}$, ta có:
> 	$$
> 	\{x \in D : \inf_{n \in \mathbb{N}} f_n(x) < \alpha\} = \bigcup_{n=1}^{\infty} \{x \in D : f_n(x) < \alpha\}
> 	$$
> 	- Chiều $(\subset)$: Vì $\inf f_{n}(x) < \alpha$ là cận đưới đúng của $\alpha$, ta luôn tìm được $f_{k}(x)$ sao cho $f_{k}(x) < \alpha$. Vậy $x$ thuộc vế phải.
> 	- Chiều $(\supset)$: - Nếu $x$ thuộc vế phải, ta tìm được một $k$ sao cho $f_k(x) < \alpha$. Theo định nghĩa, cận dưới đúng luôn bé hơn hoặc bằng mọi phần tử: $\inf f_n(x) \le f_k(x)$, nên $\inf f_n(x) < \alpha$. Vậy $x$ thuộc vế trái.
> 3. Hàm $\max$:
> 	Với mỗi $\alpha \in \mathbb{R}$, ta có:
> 	$$
> 	\{x \in D : \max_{n=1,\dots,N} f_n(x) > \alpha\} = \bigcup_{n=1}^N \{x \in D : f_n(x) > \alpha\}
> 	$$
> 	- Chiều $(\subset)$: Nếu giá trị lớn nhất trong các số $f_n(x)$ lớn hơn $\alpha$, ta tìm được nhất một số $f_k(x)$ lớn hơn $\alpha$. Vậy $x$ thuộc vế phải.
> 	- Chiều $(\supset)$: Nếu $x$ thuộc vế phải, có một $f_k(x) > \alpha$. Vì $\max f_n(x) \ge f_k(x)$, nên $\max f_n(x) > \alpha$. Vậy $x$ thuộc vế trái
> 4. Hàm $\sup$:
> Với mỗi $\alpha \in \mathbb{R}$, ta có: 
> $$
> \{x \in D : \sup_{n \in \mathbb{N}} f_n(x) > \alpha\} = \bigcup_{n=1}^{\infty} \{x \in D : f_n(x) > \alpha\}
> $$
> - Chiều $(\subset)$: Vì $\sup f_n(x) > \alpha$ là cận trên đúng, ta tìm được ít nhất một phần tử $f_k(x)$ sao cho $f_k(x) > \alpha$. Vậy $x$ thuộc hợp ở vế phải.
> - Chiều $(\supset)$: Nếu $x$ thuộc vế phải, tìm được $k$ sao cho $f_k(x) > \alpha$. Vì $\sup f_n(x)$ luôn lớn hơn hoặc bằng mọi phần tử trong tập, ta có $\sup f_n(x) \ge f_k(x) > \alpha$. Vậy $x$ thuộc vế trái.
>   
> b)
> Ta có định nghĩa giới hạn dưới:
> $$
> \liminf_{n \to \infty} f_n = \lim_{n \to \infty} \left( \inf_{k \ge n} f_k \right)
> $$
> Đặt $g_{n} = \inf_{k\ge n} f_{k}$. Theo kết quả câu trên, $g_{n}$ là hàm đo được, và ta cũng biết $g_{n}$ là một dãy hàm tăng. Áp dụng định lý 4.21 (Giới hạn của dãy hàm đơn điệu đo được là đo được), nên $\lim_{n \to \infty} g_n$ đo được. Vậy $\liminf f_n$ đo được. 
> Chứng minh tương tự cho giới hạn trên:
> $$
> \limsup_{n \to \infty} f_n = \lim_{n \to \infty} (\sup_{k \ge n} f_k)
> $$
> 
> c)
> Tập $D_{e}$ là tập hợp các nơi mà giới hạn tồn tại trong $\overline{\mathbb{R}}$, theo định nghĩa là tập mà giới hạn trên và giới hạn dưới bằng nhau:
> $$
> D_e = \{x \in D : \liminf_{n \to \infty} f_n(x) = \limsup_{n \to \infty} f_n(x)\}
> $$
> Vì $\liminf f_n$ và $\limsup f_n$ đều là hai hàm đo được (theo b), tập hợp các điểm mà hai hàm đo được có giá trị bằng nhau là một tập đo được (theo Định lý 4.16). Vậy $D_e \in \mathfrak{A}$.
> Vì $\liminf f_n$ là hàm đo được trên toàn bộ $D$, thì nó hiển nhiên cũng đo được trên miền $D_e$. Vậy $\lim f_n$ (${} = \liminf f_{n}= \limsup f_{n} {}$) là hàm đo được trên $D_e$.

# [I] Hội tụ hầu khắp nơi

> [!def] (Hội tụ hầu khắp nơi)
> Dãy hàm $f_{n}$ hội tụ a.e về một hàm hữu hạn trên $D$ nếu nó chỉ phân kỳ (tiến ra vô cực) trên một tập có độ đo bằng không:
> $$
> \exists \text{ null }N: \forall x \in D \setminus N,\lim_{ n \to \infty } f_{n}(x) \in \mathbb{R} 
> $$

> [!lem] (Bổ đề 6.2)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và dãy hàm đo được $(f_n)_{n \in \mathbb{N}}$ trên tập $D \in \mathfrak{A}$.
> Nếu với mọi số $\eta > 0$ nhỏ tùy ý, ta luôn tìm được một tập con đo được $E \subset D$ với độ đo $\mu(E) < \eta$ sao cho dãy $(f_n)$ hội tụ tại mọi điểm thuộc phần còn lại $D \setminus E$, thì dãy $(f_n)$ hội tụ hầu khắp nơi (a.e.) trên $D$.

> [!prf]
> Với mỗi số nguyên dương $k \in \mathbb{N}$, chọn $\eta = \frac{1}{k}$. Theo giả thiết, tồn tại một tập hợp đo được $E_k \subset D$ sao cho $\mu(E_k) < \frac{1}{k}$ và giới hạn $\lim_{n \to \infty} f_n(x)$ tồn tại với mọi $x \in D \setminus E_k$.
> Ta đặt $E = \bigcap_{k \in \mathbb{N}} E_{k}$. Vì $E$ là tập con của $E_{k}$ với mọi $k$, nên do tính đơn điệu:
> $$
> \mu(E) \le \mu(E_k) < \frac{1}{k} \quad \text{với mọi } k \in \mathbb{N}
> $$
> Do $\mu(E)$ không âm mà nhỏ hơn ${} \frac{1}{k}$ là số dương bất kì, ta phải có $\mu(E) = 0$.
> Kiểm tra hội tụ trên phần không gian còn lại: 
> $$
>D \setminus E = D \setminus \left( \bigcap_{k \in \mathbb{N}} E_k \right) = \bigcup_{k \in \mathbb{N}} (D \setminus E_k)
> $$
> Nếu lấy một điểm $x$ bất kỳ thuộc $D \setminus E$, thì điểm $x$ này phải nằm trong ít nhất một tập $D \setminus E_k$ với $k$ nào đó. Theo giả thiết, ta có $\lim_{ n \to \infty }f_{n}(x)$ tồn tại trên $D \setminus E_{k}$, do đó hàm số hội tụ về $x$ trên $D \setminus E$.
> Vì điều này đúng với mọi $x \in D \setminus E$ và $\mu(E) = 0$, ta kết luận $f_{n}$ hội tụ a.e trên $D$.

> [!prp] (Mệnh đề 6.3)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và dãy hàm đo được $(f_n)_{n \in \mathbb{N}}$ trên $D$. Giả sử $g_1$ và $g_2$ là hai hàm đo được trên $D$.
> Nếu $\lim_{n \to \infty} f_n = g_1$ a.e. trên $D$ và đồng thời $\lim_{n \to \infty} f_n = g_2$ a.e. trên $D$, thì $g_1 = g_2$ a.e. trên $D$.

> [!prf]
> Vì $\lim f_n = g_1$ a.e., tồn tại một tập null $N_1 \subset D$ sao cho $\lim f_n(x) = g_1(x)$ với mọi $x \in D \setminus N_1$.
> Tương tự, tồn tại một tập null $N_2 \subset D$ sao cho $\lim f_n(x) = g_2(x)$ với mọi $x \in D \setminus N_2$.
> Đặt $N = N_1 \cup N_2$. Vì hợp đếm được (hoặc hữu hạn) của các tập null luôn là một tập null, ta có $\mu(N) = 0$. Ta có  biểu diễn $D \setminus N$:
> $$
> D \setminus N = D \setminus (N_1 \cup N_2) = (D \setminus N_1) \cap (D \setminus N_2)
> $$
> Lấy một điểm $x$ bất kỳ thuộc $D \setminus N$. Vì $x \in D \setminus N_1$, ta có $\lim f_n(x) = g_1(x)$. Mà $x \in D \setminus N_2$, ta cũng có $\lim f_n(x) = g_2(x)$. Vì giới hạn của các số thực tại một điểm cụ thể là duy nhất, ta phải có $g_1(x) = g_2(x)$.
> Vì điều này đúng với mọi $x \in D \setminus N$, ta kết luận $g_{1} = g_{2}$ a.e trên $D$.

> [!prp] (Mệnh đề 6.4)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $A$-measureable functions on set $D \in \mathfrak{A}$. Then:
> $$
> \{ x \in D: \lim_{ n \to \infty }f_{n}(x) = f(x) \in \mathbb{R} \}  = \bigcap_{m \in \mathbb{N}} \bigcup_{N \in \mathbb{N}} \bigcap_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f_N(x)| < \frac{1}{m}\right\}
> $$
> and
> $$
> \{x \in D : f_n(x) \not\to f(x)\} = \bigcup_{m \in \mathbb{N}} \bigcap_{N \in \mathbb{N}} \bigcup_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f(x)| \ge \frac{1}{m}\right\}
> $$

> [!prf]
> Theo định nghĩa giới hạn $\lim_{ n \to \infty }f_{n}(x) = f(x)$ nghĩa là: Tùy ý $\epsilon> 0$, tìm được $N \in \mathbb{N}$m sao cho mọi $n \ge N$, ta có $|f_n(x) - f(x)| < \epsilon$.
> Ta thay $\epsilon = \frac{1}{m}$ và đặt $n = N + p$. Ta có:
> $$
> \forall m \in \mathbb{N}, \exists N \in \mathbb{N}, \forall p \in \mathbb{N}, \text{ta có} |f_{N+p}(x) - f(x)| < \frac{1}{m}
> $$
> Sử dụng $\bigcap$ thay cho $\forall$ và $\bigcup$ thay cho $\exists$ ta có điều cần chứng minh.
> Đẳng thức hai suy ra từ phủ định của đẳng thức trên.

> [!thm] (Định lý 6.5)
> Given a measure space $(X, \mathfrak{A}, \mu)$. Let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable on a set $D \in \mathfrak{A}$ and let $f$ be a real-valued $\mathfrak{A}$-measureable function on $D$. For $m,n \in \mathbb{N}$, define:
> $$
> D_n^m = \left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\}
> $$
> Then we have $f_{n}$ converges to $f$ a.e on $D$ if and only if: $\mu(\limsup_{ n\to \infty }D_{n}^{m}) =0$ for every $m \in \mathbb{N}$.

> [!prf]
> Theo định nghĩa, dãy $f_{n}$ hội tụ về $f$ hầu khắp nơi trên $D$ khi và chỉ khi: 
> $$
> \mu\left(\{x \in D : f_n(x) \not\to f(x)\}\right) = 0
> $$
> Áp dụng trực tiếp mệnh đề 6.4 cho dãy hàm không hội tụ:
> $$
> \mu\left( \bigcup_{m \in \mathbb{N}} \bigcap_{N \in \mathbb{N}} \bigcup_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f(x)| \ge \frac{1}{m}\right\} \right) = 0 \tag{1}
> $$
> Vì độ đo có tính đơn điều nên nếu hợp đếm được của tập lớn bằng không thì các tập con $A_{m}$ có độ đo không. Ngược lại, nếu mọi tập con $A_m$ có độ đo bằng không, thì hợp đếm được của chúng cũng là một tập có độ đo bằng 0. Vậy $(1)$ tương đương:
> $$
> \mu\left( \bigcap_{N \in \mathbb{N}} \bigcup_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f(x)| \ge \frac{1}{m}\right\} \right) = 0 
> $$
> Thay định nghĩa $\limsup_{n \to \infty} A_n = \bigcap_{N=1}^{\infty} \bigcup_{n=N}^{\infty} A_n$ và $D_{n}^{m} =\left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\}$ vào phương trình:
> $$
> \mu\left( \limsup_{n \to \infty} D_n^m \right) = 0$
> $$ 

> [!thm] (Borel-Cantelli Lemma)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$. Với mọi dãy các tập đo được $(A_n)_{n \in \mathbb{N}}$, nếu tổng các độ đo của chúng là hữu hạn:
> $$
> \sum_{n=1}^{\infty} \mu(A_n) < \infty
> $$
> thì độ đo của giới hạn trên của dãy tập hợp đó bằng không:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!prf]
> Theo định nghĩa giới hạn trên:
> $$
> \limsup_{n \to \infty} A_n = \bigcap_{n \in \mathbb{N}} \bigcup_{k \ge n} A_k
> $$
> Đặt $E_n = \bigcup_{k \ge n} A_k$, ta áp dụng tính chất $\sigma$- dưới cộng tính cho dãy giảm (với $E_{1}$ là tập hữu hạn):
> $$
> \mu(E_1) = \mu\left( \bigcup_{n=1}^{\infty} A_n \right) \le \sum_{n=1}^{\infty} \mu(A_n)
> $$
> Áp dụng tính chất liên tục từ phía trên của độ đo:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = \mu\left( \lim_{n \to \infty} E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$
> Áp dụng tính chất dưới chất $\sigma$-dưới cộng tính cho $\mu(E_{n})$:
> $$
> \mu(E_n) = \mu\left( \bigcup_{k \ge n} A_k \right) \le \sum_{k=n}^{\infty} \mu(A_k)
> $$
> Ta lấy giới hạn cho $n \to \infty$: 
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) \le \lim_{n \to \infty} \sum_{k=n}^{\infty} \mu(A_k)
> $$
> Theo giả thiết $\sum_{k=1}^{\infty} \mu(A_k)$ hội tụ, nên phần dư $\sum_{k=n}^{\infty} \mu(A_k)$ phải tiến về không. Vậy ta kết luận:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$ 




$\xi$