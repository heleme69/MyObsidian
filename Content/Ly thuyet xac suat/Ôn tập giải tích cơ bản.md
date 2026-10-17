
# Cấu trúc Thứ tự, Tiên Đề Đầy Đủ và Cận Đúng trên Tập Số Thực

Nền tảng của giải tích thực xuất phát từ cấu trúc thứ tự và tiên đề đầy đủ. Sự đối xứng giữa chặn trên và chặn dưới dẫn đến hai khái niệm đối ngẫu là supremum và infimum.

> [!def] Cận trên đúng (Supremum) và Cận dưới đúng (Infimum)
> Cho tập hợp khác rỗng $E \subset \mathbb{R}$.
> 
> 1. Số $M \in \mathbb{R}$ được gọi là supremum của $E$, ký hiệu $M = \sup E$, nếu $M$ là một cận trên của $E$ và với mọi cận trên $M'$ của $E$ thì $M \le M'$.
> 2. Số $m \in \mathbb{R}$ được gọi là infimum của $E$, ký hiệu $m = \inf E$, nếu $m$ là một cận dưới của $E$ và với mọi cận dưới $m'$ của $E$ thì $m \ge m'$.

> [!thm] Tiên đề Tính Đầy đủ của Tập Số Thực
> Mọi tập con khác rỗng của $\mathbb{R}$ bị chặn trên đều có supremum thuộc $\mathbb{R}$. Đối ngẫu lại, mọi tập con khác rỗng của $\mathbb{R}$ bị chặn dưới đều có infimum thuộc $\mathbb{R}$.

> [!prp] Đặc trưng Sai phân Epsilon của Supremum và Infimum
> Cho tập hợp khác rỗng $E \subset \mathbb{R}$.
> 
> 3. $M = \sup E$ khi và chỉ khi $x \le M$ với mọi $x \in E$, và với mọi $\varepsilon > 0$, tồn tại $x_\varepsilon \in E$ sao cho $x_\varepsilon > M - \varepsilon$.
> 
> 4. $m = \inf E$ khi và chỉ khi $x \ge m$ với mọi $x \in E$, và với mọi $\varepsilon > 0$, tồn tại $x_\varepsilon \in E$ sao cho $x_\varepsilon < m + \varepsilon$.

> [!cor] Sự Tồn tại Dãy số Tiến về Supremum và Infimum
> Cho $E \subset \mathbb{R}$ là tập khác rỗng và bị chặn. Khi đó luôn tồn tại một dãy số $\{x_n\} \subset E$ sao cho $\lim_{n \to \infty} x_n = \sup E$, và luôn tồn tại một dãy số $\{y_n\} \subset E$ sao cho $\lim_{n \to \infty} y_n = \inf E$.

> [!prf] Chứng minh Sự Tồn tại Dãy số Tiến về Cận Đúng
> **Bước 1: Dựng dãy số cho supremum.**
> Đặt $M = \sup E$. Với mỗi số nguyên dương $n \in \mathbb{N}^*$, chọn sai số $\varepsilon = \frac{1}{n} > 0$.
> 
> Theo đặc trưng sai phân, luôn tồn tại phần tử $x_n \in E$ thỏa mãn:
> $$M - \frac{1}{n} < x_n \le M$$
> 
> **Bước 2: Lấy giới hạn qua định lý kẹp.**
> Vì $\lim_{n \to \infty} (M - \frac{1}{n}) = M$ và vế phải là hằng số $M$, theo định lý kẹp suy ra $\lim_{n \to \infty} x_n = M$.
> 
> **Bước 3: Dựng dãy số cho infimum.**
> Đặt $m = \inf E$. Với mỗi $n \in \mathbb{N}^*$, chọn $y_n \in E$ thỏa mãn $m \le y_n < m + \frac{1}{n}$. Tương tự ta thu được $\lim_{n \to \infty} y_n = m$.

# Giới Hạn Dãy Số, Tính Bảo Toàn Thứ Tự và Định Lý Kẹp

Sự hội tụ mô tả hành vi tiệm cận của dãy số đến một điểm đích duy nhất, tương thích chặt chẽ với quan hệ thứ tự trên trục số thực.

> [!def] Dãy Hội tụ và Giới hạn
> Dãy số thực $\{x_n\}$ hội tụ về $x \in \mathbb{R}$ nếu với mọi $\varepsilon > 0$, tồn tại số nguyên $N$ sao cho $|x_n - x| < \varepsilon$ với mọi $n > N$. Khi đó ta viết $\lim_{n \to \infty} x_n = x$.

> [!prp] Tính Bị chặn của Dãy Hội tụ
> Mọi dãy số thực hội tụ đều bị chặn.

> [!prf] Chứng minh Tính Bị chặn của Dãy Hội tụ
> **Bước 1: Khống chế phần đuôi của dãy.**
> Giả sử $\lim_{n \to \infty} x_n = x$. Chọn $\varepsilon = 1$, tồn tại chỉ số $N \in \mathbb{N}$ sao cho với mọi $n > N$:
> $$|x_n - x| < 1 \implies |x_n| < |x| + 1$$
> 
> **Bước 2: Khống chế toàn bộ dãy.**
> Đặt $M = \max \{ |x_1|, |x_2|, \dots, |x_N|, |x| + 1 \}$.
> 
> Khi đó $|x_n| \le M$ với mọi $n \in \mathbb{N}^*$. Dãy $\{x_n\}$ bị chặn.

> [!thm] Tính Bảo Toàn Bất Đẳng Thức qua Giới Hạn
> Cho hai dãy số thực hội tụ $\{a_n\}$ và $\{b_n\}$. Nếu tồn tại chỉ số $N_0$ sao cho $a_n \le b_n$ với mọi $n \ge N_0$, thì:
> $$\lim_{n \to \infty} a_n \le \lim_{n \to \infty} b_n$$

> [!prf] Chứng minh Tính Bảo Toàn Bất Đẳng Thức
> **Bước 1: Quy về xét dãy không âm.**
> Đặt $c_n = b_n - a_n$. Khi đó $c_n \ge 0$ với mọi $n \ge N_0$. Đặt $c = \lim_{n \to \infty} c_n = \lim b_n - \lim a_n$. Ta cần chứng minh $c \ge 0$.
> 
> **Bước 2: Phản chứng.**
> Giả sử ngược lại $c < 0$. Chọn $\varepsilon = -\frac{c}{2} > 0$.
> 
> Theo định nghĩa giới hạn, tồn tại $N_1$ sao cho với mọi $n > N_1$:
> $$|c_n - c| < -\frac{c}{2} \implies c_n < c - \frac{c}{2} = \frac{c}{2} < 0$$
> 
> Điều này mâu thuẫn với giả thiết $c_n \ge 0$ với mọi $n \ge N_0$. Do đó $c \ge 0$, tức $\lim a_n \le \lim b_n$.

> [!thm] Định Lý Kẹp (Squeeze Theorem)
> Cho ba dãy số thực $\{a_n\}, \{b_n\}, \{c_n\}$. Giả sử tồn tại $N_0$ sao cho $a_n \le b_n \le c_n$ với mọi $n \ge N_0$. Nếu $\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = L$, thì dãy $\{b_n\}$ hội tụ và $\lim_{n \to \infty} b_n = L$.

> [!prf] Chứng minh Định Lý Kẹp
> **Bước 1: Đánh giá khoảng cách sai phân.**
> Lấy tùy ý $\varepsilon > 0$.
> 
> Do $a_n \to L$ và $c_n \to L$, tồn tại $N > N_0$ sao cho với mọi $n > N$:
> $$L - \varepsilon < a_n < L + \varepsilon \quad \text{và} \quad L - \varepsilon < c_n < L + \varepsilon$$
> 
> **Bước 2: Kẹp phần tử trung gian.**
> Với mọi $n > N$, kết hợp giả thiết kẹp ta có:
> $$L - \varepsilon < a_n \le b_n \le c_n < L + \varepsilon \implies |b_n - L| < \varepsilon$$
> 
> Vậy dãy $\{b_n\}$ hội tụ về $L$.

# Định Lý Hội Tụ Đơn Điệu và Nguyên Lý Đoạn Lồng Nhau Cantor

Định lý hội tụ đơn điệu là mắt xích chuyển hóa trực tiếp Tiên đề đầy đủ của tập hợp thành một công cụ kiểm tra sự hội tụ của dãy số.

> [!thm] Định Lý Hội Tụ Đơn Điệu (Monotone Convergence Theorem)
> 1. Mọi dãy số thực tăng và bị chặn trên đều hội tụ về supremum của tập các số hạng của nó:
>    $$\lim_{n \to \infty} x_n = \sup \{x_n : n \in \mathbb{N}^*\}$$
> 2. Mọi dãy số thực giảm và bị chặn dưới đều hội tụ về infimum của tập các số hạng của nó:
>    $$\lim_{n \to \infty} x_n = \inf \{x_n : n \in \mathbb{N}^*\}$$

> [!prf] Chứng minh Định Lý Hội Tụ Đơn Điệu
> **Bước 1: Sử dụng Tiên đề đầy đủ.**
> Giả sử $\{x_n\}$ là dãy tăng và bị chặn trên. Đặt tập hợp $E = \{x_n : n \in \mathbb{N}^*\}$.
> 
> Vì $E \neq \emptyset$ và bị chặn trên, theo Tiên đề tính đầy đủ của $\mathbb{R}$, tồn tại $M = \sup E \in \mathbb{R}$.
> 
> **Bước 2: Áp dụng đặc trưng sai phân.**
> Lấy tùy ý $\varepsilon > 0$. Vì $M = \sup E$, tồn tại chỉ số $N$ sao cho $x_N > M - \varepsilon$.
> 
> Do dãy $\{x_n\}$ tăng, với mọi $n > N$ ta có $x_n \ge x_N$. Kết hợp với việc $M$ là cận trên của $E$:
> $$M - \varepsilon < x_N \le x_n \le M < M + \varepsilon, \quad \forall n > N$$
> 
> Suy ra $|x_n - M| < \varepsilon$ với mọi $n > N$. Do đó $\lim_{n \to \infty} x_n = M$.
> Trường hợp dãy giảm và bị chặn dưới được chứng minh đối ngẫu hoàn toàn.

> [!thm] Nguyên Lý Đoạn Lồng Nhau Cantor (Cantor's Nested Interval Theorem)
> Cho dãy các đoạn đóng lồng nhau $I_1 \supset I_2 \supset \dots \supset I_n \supset \dots$ với $I_n = [a_n, b_n]$. Khi đó:
> 1. Giao của tất cả các đoạn luôn khác rỗng: $\bigcap_{n=1}^{\infty} I_n \neq \emptyset$.
> 2. Nếu thêm điều kiện độ dài $\lim_{n \to \infty} (b_n - a_n) = 0$, thì giao này chứa duy nhất một điểm.

> [!prf] Chứng minh Nguyên Lý Đoạn Lồng Nhau Cantor
> **Bước 1: Thiết lập tính đơn điệu của hai đầu mút.**
> Vì $I_{n+1} \subset I_n$, ta có:
> $$a_1 \le a_2 \le \dots \le a_n \le a_{n+1} < b_{n+1} \le b_n \le \dots \le b_1$$
> 
> Dãy $\{a_n\}$ tăng và bị chặn trên bởi $b_1$. Dãy $\{b_n\}$ giảm và bị chặn dưới bởi $a_1$.
> 
> **Bước 2: Áp dụng Định lý Hội tụ Đơn điệu.**
> Theo Định lý Hội tụ Đơn điệu, tồn tại $a = \lim_{n \to \infty} a_n = \sup \{a_n\}$ và $b = \lim_{n \to \infty} b_n = \inf \{b_n\}$.
> 
> Do $a_n \le b_m$ với mọi $n, m$, cố định $m$ rồi cho $n \to \infty$ ta được $a \le b_m$. Tiếp tục cho $m \to \infty$ ta thu được $a \le b$.
> 
> Vì $a_n \le a \le b \le b_n$ với mọi $n$, đoạn $[a, b] \subset [a_n, b_n] = I_n$ với mọi $n$. Do đó $[a, b] \subset \bigcap_{n=1}^{\infty} I_n \neq \emptyset$.
> 
> **Bước 3: Chứng minh tính duy nhất.**
> Nếu $\lim_{n \to \infty} (b_n - a_n) = 0$, thì $b - a = \lim_{n \to \infty} (b_n - a_n) = 0 \implies a = b$. Điểm duy nhất trong phần giao là $x = a = b$.

# Giới Hạn Trên và Giới Hạn Dưới (Limsup và Liminf)

Định lý Hội tụ Đơn điệu đảm bảo rằng mọi dãy bị chặn luôn sinh ra hai dãy đơn điệu ở phần đuôi, xác định trọn vẹn giới hạn trên và giới hạn dưới.

> [!def] Giới Hạn Trên và Giới Hạn Dưới
> Cho dãy số thực bị chặn $\{a_n\}$. Với mỗi $n \in \mathbb{N}^*$, đặt:
> $$u_n = \sup_{k \ge n} a_k = \sup \{a_n, a_{n+1}, a_{n+2}, \dots\}$$
> $$v_n = \inf_{k \ge n} a_k = \inf \{a_n, a_{n+1}, a_{n+2}, \dots\}$$
> 
> 1. Dãy $\{u_n\}$ giảm và bị chặn dưới. Theo Định lý Hội tụ Đơn điệu, giới hạn của nó tồn tại và được gọi là giới hạn trên:
>    $$\limsup_{n \to \infty} a_n = \lim_{n \to \infty} u_n = \inf_{n \ge 1} \sup_{k \ge n} a_k$$
> 2. Dãy $\{v_n\}$ tăng và bị chặn trên. Theo Định lý Hội tụ Đơn điệu, giới hạn của nó tồn tại và được gọi là giới hạn dưới:
>    $$\liminf_{n \to \infty} a_n = \lim_{n \to \infty} v_n = \sup_{n \ge 1} \inf_{k \ge n} a_k$$

> [!prp] Đặc Trưng Sai Phân Epsilon của Limsup và Liminf
> Cho dãy số thực bị chặn $\{a_n\}$.
> 
> 3. Số $L = \limsup_{n \to \infty} a_n$ khi và chỉ khi với mọi $\varepsilon > 0$:
>    Tồn tại vô số chỉ số $n$ sao cho $a_n > L - \varepsilon$, và chỉ tồn tại hữu hạn chỉ số $n$ sao cho $a_n > L + \varepsilon$.
> 
> 4. Số $l = \liminf_{n \to \infty} a_n$ khi và chỉ khi với mọi $\varepsilon > 0$:
>    Tồn tại vô số chỉ số $n$ sao cho $a_n < l + \varepsilon$, và chỉ tồn tại hữu hạn chỉ số $n$ sao cho $a_n < l - \varepsilon$.

> [!prp] Sự Tồn Tại Dãy Con Đạt Giới Hạn Liminf và Limsup
> Với mọi dãy số thực bị chặn $(a_n)$, luôn tồn tại một dãy chỉ số con $n_1 < n_2 < \dots < n_k < \dots$ sao cho:
> $$\lim_{k \to \infty} a_{n_k} = \liminf_{n \to \infty} a_n = L$$
> Đối ngẫu lại, luôn tồn tại một dãy chỉ số con $m_1 < m_2 < \dots < m_k < \dots$ sao cho:
> $$\lim_{k \to \infty} a_{m_k} = \limsup_{n \to \infty} a_n = M$$

> [!prf] Chứng minh Tồn Tại Dãy Con Hội Tụ Về Liminf
> **Bước 1: Khởi tạo biến phụ.**
> Đặt $v_n = \inf_{j \ge n} a_j$. Theo Định lý Hội tụ Đơn điệu, $\lim_{n \to \infty} v_n = L = \liminf_{n \to \infty} a_n$.
> 
> **Bước 2: Xây dựng dãy chỉ số con bằng quy nạp.**
> Với $k = 1$, chọn sai số $\varepsilon_1 = 1$. Theo định nghĩa $v_1 = \inf_{j \ge 1} a_j$, tồn tại $n_1 \ge 1$ sao cho:
> $$v_1 \le a_{n_1} < v_1 + 1$$
> 
> Giả sử đã chọn được các chỉ số tăng ngặt $n_1 < n_2 < \dots < n_k$.
> 
> Để chọn chỉ số tiếp theo $n_{k+1}$, xét đuôi bắt đầu từ $n_k + 1$:
> $$v_{n_k + 1} = \inf_{j \ge n_k + 1} a_j$$
> 
> Với sai số $\varepsilon_{k+1} = \frac{1}{k+1} > 0$, tồn tại chỉ số $n_{k+1} \ge n_k + 1 > n_k$ sao cho:
> $$v_{n_k + 1} \le a_{n_{k+1}} < v_{n_k + 1} + \frac{1}{k+1}$$
> 
> **Bước 3: Đánh giá giới hạn kẹp.**
> Dãy chỉ số con $\{n_k\}$ tăng nghiêm ngặt. Với mỗi $k \ge 1$:
> $$v_{n_{k-1} + 1} \le a_{n_k} < v_{n_{k-1} + 1} + \frac{1}{k}$$
> 
> Do $n_k \to \infty$, hai đầu mút của bất đẳng thức đều tiến về $L$. Theo Định Lý Kẹp, dãy con hội tụ và thỏa mãn:
> $$\lim_{k \to \infty} a_{n_k} = L = \liminf_{n \to \infty} a_n$$

> [!cor] Tập Điểm Dính và Giới Hạn Cực Trị
> Gọi $S$ là tập hợp tất cả các giới hạn của mọi dãy con hội tụ trích từ dãy $\{a_n\}$. Khi đó:
> $$\limsup_{n \to \infty} a_n = \max S \quad \text{và} \quad \liminf_{n \to \infty} a_n = \min S$$
> Hơn nữa, dãy $\{a_n\}$ hội tụ về $L$ khi và chỉ khi:
> $$\liminf_{n \to \infty} a_n = \limsup_{n \to \infty} a_n = L$$

# Bổ Đề Dãy Con Đơn Điệu và Định Lý Bolzano-Weierstrass

Định lý Bolzano-Weierstrass khẳng định cơ chế tạo giới hạn của tính bị chặn. Định lý này có thể được chứng minh một cách thuần túy giải tích thông qua Bổ đề Điểm Đỉnh và Định lý Hội tụ Đơn điệu.

> [!def] Điểm Đỉnh của Dãy Số (Peak Point)
> Cho dãy số thực $\{a_n\}$. Một chỉ số $m \in \mathbb{N}^*$ được gọi là một điểm đỉnh của dãy nếu:
> $$a_m \ge a_n, \quad \forall n > m$$
> Nghĩa là giá trị tại điểm đỉnh không bị vượt qua bởi bất kỳ số hạng nào đứng sau nó.

> [!lem] Bổ Đề Dãy Con Đơn Điệu (Peak Point Lemma)
> Mọi dãy số thực đều chứa ít nhất một dãy con đơn điệu.

> [!prf] Chứng minh Bổ Đề Dãy Con Đơn Điệu
> **Trường hợp 1: Dãy có vô số điểm đỉnh.**
> Giả sử tập hợp các điểm đỉnh là vô hạn. Ta liệt kê các chỉ số đỉnh tăng dần:
> $$m_1 < m_2 < m_3 < \dots < m_k < \dots$$
> 
> Vì $m_1$ là một đỉnh và $m_2 > m_1$, ta có $a_{m_1} \ge a_{m_2}$. Tương tự, $a_{m_2} \ge a_{m_3}$.
> 
> Bằng quy nạp, ta thu được $a_{m_1} \ge a_{m_2} \ge a_{m_3} \ge \dots$, tức dãy con $\{a_{m_k}\}$ là một dãy đơn điệu giảm.
> 
> **Trường hợp 2: Dãy chỉ có hữu hạn điểm đỉnh (hoặc không có đỉnh nào).**
> Giả sử có hữu hạn điểm đỉnh, gọi $N$ là chỉ số đỉnh lớn nhất (chọn $N = 0$ nếu không có đỉnh).
> 
> Chọn $n_1 = N + 1$. Vì $n_1 > N$ nên $n_1$ không phải là một đỉnh. Do đó, tồn tại chỉ số $n_2 > n_1$ sao cho $a_{n_2} > a_{n_1}$.
> 
> Vì $n_2 > N$ nên $n_2$ cũng không phải là đỉnh. Do đó tồn tại chỉ số $n_3 > n_2$ sao cho $a_{n_3} > a_{n_2}$.
> 
> Tiếp tục vô hạn lần quá trình này, ta xây dựng được dãy con $\{a_{n_k}\}$ tăng nghiêm ngặt:
> $$a_{n_1} < a_{n_2} < a_{n_3} < \dots$$
> 
> Trong cả hai trường hợp, luôn tồn tại một dãy con đơn điệu.

> [!thm] Định Lý Bolzano-Weierstrass trên Tập Số Thực
> Mọi dãy số thực bị chặn đều chứa ít nhất một dãy con hội tụ.

> [!prf] Chứng minh Định Lý Bolzano-Weierstrass
> **Bước 1: Trích dãy con đơn điệu.**
> Cho $\{x_n\}$ là một dãy số thực bị chặn.
> 
> Theo Bổ Đề Dãy Con Đơn Điệu, dãy $\{x_n\}$ chứa ít nhất một dãy con đơn điệu $\{x_{n_k}\}$.
> 
> **Bước 2: Áp dụng Định lý Hội tụ Đơn điệu.**
> Vì dãy mẹ $\{x_n\}$ bị chặn nên dãy con $\{x_{n_k}\}$ cũng bị chặn.
> 
> Dãy con $\{x_{n_k}\}$ vừa đơn điệu vừa bị chặn. Theo Định Lý Hội Tụ Đơn Điệu, dãy con $\{x_{n_k}\}$ phải hội tụ về một số thực hữu hạn.

# Dãy Cauchy và Tiêu Chuẩn Hội Tụ Cauchy

Tính chất Cauchy là sự đo lường khoảng cách nội bộ giữa các phần tử ở đuôi của dãy số, đóng vai trò bản lề mô tả tính đầy đủ.

> [!def] Dãy Cauchy và Không Gian Đầy Đủ
> 1. Dãy số thực $\{x_n\}$ là dãy Cauchy nếu với mọi $\varepsilon > 0$, tồn tại số nguyên $N$ sao cho:
>    $$|x_n - x_m| < \varepsilon, \quad \forall n, m > N$$
> 2. Tập hợp $A \subset \mathbb{R}$ được gọi là đầy đủ nếu mọi dãy Cauchy nằm trong $A$ đều hội tụ về một điểm thuộc $A$.

> [!lem] Tính Bảo Toàn Giới Hạn của Dãy Con
> Nếu dãy số $\{x_n\}$ hội tụ về $L$, thì mọi dãy con $\{x_{n_k}\}$ của nó cũng hội tụ về cùng giới hạn $L$.

> [!prf] Chứng minh Tính Bảo Toàn Giới Hạn của Dãy Con
> **Bước 1: Sử dụng định nghĩa hội tụ.**
> Giả sử $x_n \to L$. Lấy tùy ý $\varepsilon > 0$. Tồn tại số nguyên $N$ sao cho $|x_n - L| < \varepsilon$ với mọi $n > N$.
> 
> **Bước 2: Đánh giá qua chỉ số con.**
> Xét dãy con $\{x_{n_k}\}$. Do các chỉ số tăng ngặt $n_1 < n_2 < \dots < n_k$, ta có $n_k \ge k$ với mọi $k \in \mathbb{N}^*$.
> 
> Chọn $K = N$. Với mọi $k > K$, ta có $n_k \ge k > N$, suy ra:
> $$|x_{n_k} - L| < \varepsilon$$
> 
> Vậy dãy con $\{x_{n_k}\}$ hội tụ về $L$.

> [!lem] Sự Hội Tụ của Dãy Cauchy khi có Dãy Con Hội Tụ
> Cho $\{x_n\}$ là một dãy Cauchy. Nếu tồn tại ít nhất một dãy con $\{x_{n_k}\}$ hội tụ về $a$, thì toàn bộ dãy mẹ $\{x_n\}$ cũng hội tụ về $a$.

> [!prf] Chứng minh Dãy Cauchy Hội Tụ Nhờ Dãy Con
> **Bước 1: Phân rã sai số bằng bất đẳng thức tam giác.**
> Lấy tùy ý $\varepsilon > 0$. Với phần tử $x_n$ bất kỳ và số thực $a$:
> $$|x_n - a| \le |x_n - x_{n_k}| + |x_{n_k} - a|$$
> 
> **Bước 2: Khống chế từng thành phần.**
> Vì $\{x_n\}$ là dãy Cauchy, tồn tại $N_1$ sao cho $|x_n - x_m| < \frac{\varepsilon}{2}$ với mọi $n, m > N_1$.
> 
> Vì dãy con $x_{n_k} \to a$, tồn tại $K$ sao cho $|x_{n_k} - a| < \frac{\varepsilon}{2}$ với mọi $k > K$.
> 
> **Bước 3: Chọn chỉ số bắc cầu.**
> Chọn một chỉ số $k$ cố định thỏa mãn đồng thời $k > K$ và $n_k > N_1$ (điều này luôn khả thi do $n_k \ge k \to \infty$).
> 
> Khi đó với mọi $n > N_1$, chọn $m = n_k > N_1$, ta có:
> $$|x_n - a| \le |x_n - x_{n_k}| + |x_{n_k} - a| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
> 
> Vậy toàn bộ dãy mẹ $\{x_n\}$ hội tụ về $a$.

> [!thm] Tiêu Chuẩn Hội Tụ Cauchy trên Trục Số Thực
> Một dãy số thực hội tụ khi và chỉ khi nó là một dãy Cauchy. Đặc biệt, trục số thực $\mathbb{R}$ là một không gian đầy đủ.

> [!prf] Chứng minh Tiêu Chuẩn Hội Tụ Cauchy
> **Chiều thuận ($\Rightarrow$):** Giả sử $x_n \to x$. Với mọi $\varepsilon > 0$, tồn tại $N$ sao cho $|x_n - x| < \frac{\varepsilon}{2}$ với mọi $n > N$.
> Khi đó với mọi $n, m > N$:
> $$|x_n - x_m| \le |x_n - x| + |x - x_m| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
> Dãy $\{x_n\}$ là dãy Cauchy.
> 
> **Chiều đảo ($\Leftarrow$):** Giả sử $\{x_n\}$ là một dãy Cauchy.
> Theo mệnh đề trước, mọi dãy Cauchy đều bị chặn.
> Theo Định Lý Bolzano-Weierstrass, dãy bị chặn $\{x_n\}$ chứa một dãy con $\{x_{n_k}\}$ hội tụ về một điểm $x_0 \in \mathbb{R}$.
> Vì $\{x_n\}$ là dãy Cauchy có dãy con $\{x_{n_k}\} \to x_0$, áp dụng Bổ đề Sự Hội Tụ của Dãy Cauchy khi có Dãy Con Hội Tụ, toàn bộ dãy $\{x_n\}$ hội tụ về $x_0$.

# Cơ Chế Giữ Giới Hạn: Điểm Dính, Tập Đóng và Tính Đầy Đủ

Nếu tính bị chặn và định lý Bolzano-Weierstrass tạo ra các điểm giới hạn tiềm năng, thì tính đóng là cơ chế giam giữ không cho các điểm giới hạn đó thất thoát ra bên ngoài tập hợp.

> [!def] Điểm Dính, Điểm Tụ và Bao Đóng
> Cho tập hợp con $A \subset \mathbb{R}$ và một điểm $x \in \mathbb{R}$.
> 
> 1. Điểm $x$ là một điểm dính của $A$ nếu với mọi $\varepsilon > 0$, khoảng $(x - \varepsilon, x + \varepsilon) \cap A \neq \emptyset$. Tập hợp tất cả các điểm dính của $A$ gọi là bao đóng của $A$, ký hiệu $\overline{A}$.
> 2. Điểm $x$ là một điểm tụ (accumulation point) của $A$ nếu với mọi $\varepsilon > 0$, khoảng $(x - \varepsilon, x + \varepsilon) \cap (A \setminus \{x\}) \neq \emptyset$.
> 
> 3. Tập $A$ được gọi là đóng nếu $A = \overline{A}$, nghĩa là $A$ chứa toàn bộ các điểm dính của chính nó.

> [!prp] Đặc Trưng Dãy Số của Điểm Dính và Tập Đóng
> Cho tập hợp con $A \subset \mathbb{R}$.
> 
> 4. Điểm $x \in \overline{A}$ khi và chỉ khi tồn tại một dãy số $\{x_n\} \subset A$ sao cho $\lim_{n \to \infty} x_n = x$.
> 
> 5. Tập $A$ đóng khi và chỉ khi với mọi dãy số $\{x_n\} \subset A$ hội tụ về $x \in \mathbb{R}$, ta luôn có $x \in A$.

> [!prf] Chứng minh Đặc Trưng Dãy Số của Điểm Dính
> **Chiều thuận ($\Rightarrow$):** Giả sử $x \in \overline{A}$. Với mỗi $n \in \mathbb{N}^*$, chọn $\varepsilon = \frac{1}{n} > 0$.
> Theo định nghĩa điểm dính, tồn tại phần tử $x_n \in (x - \frac{1}{n}, x + \frac{1}{n}) \cap A$.
> Dãy $\{x_n\} \subset A$ thỏa mãn $|x_n - x| < \frac{1}{n}$, do đó $\lim_{n \to \infty} x_n = x$.
> 
> **Chiều đảo ($\Leftarrow$):** Giả sử tồn tại dãy $\{x_n\} \subset A$ hội tụ về $x$.
> Với mọi $\varepsilon > 0$, tồn tại $N$ sao cho $|x_N - x| < \varepsilon$, suy ra $x_N \in (x - \varepsilon, x + \varepsilon) \cap A \neq \emptyset$. Vậy $x \in \overline{A}$.

> [!prp] Sự Tương Đương Giữa Tập Đóng và Tính Đầy Đủ trong $\mathbb{R}$
> Cho tập hợp con $A \subset \mathbb{R}$. Khi đó:
> $A$ là tập đóng trong $\mathbb{R} \iff A$ là một không gian đầy đủ.

> [!prf] Chứng minh Tập Đóng Tương Đương với Tính Đầy Đủ
> **Chiều thuận ($\Rightarrow$):** Giả sử $A$ đóng. Lấy một dãy Cauchy bất kỳ $\{x_n\} \subset A$.
> Vì $\{x_n\} \subset \mathbb{R}$ và $\mathbb{R}$ là không gian đầy đủ, dãy Cauchy $\{x_n\}$ hội tụ về một điểm $x_0 \in \mathbb{R}$.
> Vì $\{x_n\} \subset A$ và $A$ đóng, theo đặc trưng dãy số của tập đóng, $x_0 \in A$. Vậy mọi dãy Cauchy trong $A$ đều hội tụ về điểm thuộc $A$, tức $A$ đầy đủ.
> 
> **Chiều đảo ($\Leftarrow$):** Giả sử $A$ đầy đủ. Lấy một dãy $\{x_n\} \subset A$ hội tụ về điểm $x_0 \in \mathbb{R}$.
> Vì dãy $\{x_n\}$ hội tụ trong $\mathbb{R}$, nó là một dãy Cauchy.
> Do $A$ đầy đủ và $\{x_n\} \subset A$ là dãy Cauchy, dãy này phải hội tụ về một điểm $a \in A$.
> Do tính duy nhất của giới hạn trên $\mathbb{R}$, ta có $x_0 = a \in A$. Vậy $A$ là tập đóng.

# Tính Chất Compact và Định Lý Heine-Borel trên Tập Số Thực

Tính chất compact kết hợp trọn vẹn cả hai cơ chế: tạo giới hạn (tính bị chặn) và giữ giới hạn (tính đóng / tính đầy đủ).

> [!def] Tập Compact Dãy
> Một tập hợp con $K \subset \mathbb{R}$ được gọi là compact nếu mọi dãy số $\{x_n\} \subset K$ đều chứa một dãy con $\{x_{n_k}\}$ hội tụ về một điểm thuộc $K$.

> [!prp] Tính Chất Hệ Quả Cốt Lõi của Tập Compact
> Nếu $K \subset \mathbb{R}$ là tập compact thì:
> 1. $K$ là tập đóng.
> 2. $K$ là tập đầy đủ.

> [!prf] Chứng minh Compact Kéo Theo Đóng và Đầy Đủ
> **Bước 1: Chứng minh $K$ đóng.**
> Lấy dãy $\{x_n\} \subset K$ hội tụ về $x \in \mathbb{R}$.
> Do $K$ compact, tồn tại dãy con $\{x_{n_k}\}$ hội tụ về $a \in K$.
> Theo Bổ đề Tính Bảo Toàn Giới Hạn của Dãy Con, vì dãy mẹ $x_n \to x$ nên dãy con $x_{n_k} \to x$.
> Do tính duy nhất của giới hạn, $x = a \in K$. Vậy $K$ là tập đóng.
> 
> **Bước 2: Chứng minh $K$ đầy đủ.**
> Lấy một dãy Cauchy $\{x_n\} \subset K$.
> Do $K$ compact, tồn tại dãy con $\{x_{n_k}\}$ hội tụ về $a \in K$.
> Theo Bổ đề Sự Hội Tụ của Dãy Cauchy khi có Dãy Con Hội Tụ, toàn bộ dãy mẹ $\{x_n\}$ hội tụ về $a \in K$.
> Vậy mọi dãy Cauchy trong $K$ đều hội tụ trong $K$, suy ra $K$ đầy đủ.

> [!thm] Định Lý Heine-Borel trên Trục Số Thực
> Một tập hợp con $K \subset \mathbb{R}$ là compact khi và chỉ khi $K$ là tập đóng và bị chặn.

> [!prf] Chứng minh Định Lý Heine-Borel
> **Chiều thuận ($\Rightarrow$): Giả sử $K$ compact, chứng minh $K$ đóng và bị chặn.**
> Tính đóng đã được chứng minh trong mệnh đề trước.
> Giả sử phản chứng $K$ không bị chặn. Khi đó với mỗi $n \in \mathbb{N}^*$, luôn tồn tại $x_n \in K$ sao cho $|x_n| > n$.
> Xét dãy $\{x_n\} \subset K$. Do $K$ compact, tồn tại dãy con $\{x_{n_k}\}$ hội tụ về một điểm $L \in K$.
> Dãy con hội tụ thì bị chặn, do đó tồn tại hằng số $M > 0$ sao cho $|x_{n_k}| \le M$ với mọi $k$.
> Tuy nhiên, theo cách dựng, ta có $|x_{n_k}| > n_k \ge k$. Khi chọn chỉ số $k > M$, ta gặp mâu thuẫn:
> $$M \ge |x_{n_k}| > k > M$$
> Mâu thuẫn này chứng tỏ giả thiết phản chứng sai. Vậy $K$ phải bị chặn.
> 
> **Chiều đảo ($\Leftarrow$): Giả sử $K$ đóng và bị chặn, chứng minh $K$ compact.**
> Lấy một dãy bất kỳ $\{x_n\} \subset K$.
> 
> **Bước 1: Kích hoạt cơ chế tạo giới hạn.**
> Vì $K$ bị chặn nên dãy $\{x_n\}$ là dãy số bị chặn trong $\mathbb{R}$.
> Theo Định Lý Bolzano-Weierstrass, dãy $\{x_n\}$ chứa một dãy con $\{x_{n_k}\}$ hội tụ về một điểm $x_0 \in \mathbb{R}$.
> 
> **Bước 2: Kích hoạt cơ chế giữ giới hạn.**
> Dãy con $\{x_{n_k}\}$ nằm hoàn toàn trong $K$. Vì $K$ là tập đóng trong $\mathbb{R}$, giới hạn của dãy con bắt buộc phải thuộc về $K$:
> $$x_0 \in K$$
> 
> Như vậy, từ một dãy bất kỳ trong $K$, ta đã trích ra được một dãy con hội tụ về một điểm thuộc $K$. Kết luận: $K$ là tập compact.

# Tổng Kết Chuỗi Suy Luận Logic

Toàn bộ hệ thống kiến thức được xâu chuỗi thông qua các mối liên hệ nhân quả trực tiếp:

1. Tiên Đề Đầy Đủ $\implies$ Định Lý Hội Tụ Đơn Điệu (MCT) $\implies$ Nguyên Lý Đoạn Lồng Nhau Cantor và Sự Tồn Tại của Limsup/Liminf.
2. Bổ Đề Điểm Đỉnh + Định Lý Hội Tụ Đơn Điệu $\implies$ Định Lý Bolzano-Weierstrass (Cơ chế tạo giới hạn).
3. Định Lý Bolzano-Weierstrass + Bổ Đề Dãy Con Cauchy $\implies$ Tiêu Chuẩn Hội Tụ Cauchy và Tính Đầy Đủ của $\mathbb{R}$.
4. Tính Đầy Đủ của $\mathbb{R}$ $\implies$ Sự Tương Đương Giữa Tập Đóng và Tính Đầy Đủ (Cơ chế giữ giới hạn).
5. Cơ Chế Tạo Giới Hạn (Bị chặn) + Cơ Chế Giữ Giới Hạn (Đóng) $\iff$ Định Lý Heine-Borel (Tính Compact).