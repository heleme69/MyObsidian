
# Cấu trúc Thứ tự và Tiên Đề Đầy Đủ của Tập Số Thực

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
> **Bước 1: Dựng dãy cho supremum.**
> Đặt $M = \sup E$. Với mỗi số nguyên dương $n \in \mathbb{N}^*$, chọn $\varepsilon = \frac{1}{n} > 0$.
> 
> Theo đặc trưng sai phân, tồn tại phần tử $x_n \in E$ thỏa mãn:
> $$M - \frac{1}{n} < x_n \le M$$
> 
> **Bước 2: Lấy giới hạn qua định lý kẹp.**
> Vì $\lim_{n \to \infty} (M - \frac{1}{n}) = M$ và vế phải là hằng số $M$, theo định lý kẹp ta suy ra $\lim_{n \to \infty} x_n = M$.
> 
> **Bước 3: Dựng dãy cho infimum.**
> Đặt $m = \inf E$. Với mỗi $n \in \mathbb{N}^*$, chọn $y_n \in E$ thỏa mãn $m \le y_n < m + \frac{1}{n}$. Tương tự ta có $\lim_{n \to \infty} y_n = m$.

# Dãy Số Thực, Tính Chất Cauchy và Sự Hội Tụ

Sự hội tụ mô tả hành vi của dãy số đối với một điểm đích cố định, trong khi tính chất Cauchy mô tả tương quan khoảng cách nội tại giữa các phần tử ở phần đuôi của dãy số.

> [!def] Dãy Hội tụ và Dãy Cauchy
> Cho dãy số thực $\{x_n\}$.
> 
> 1. Dãy $\{x_n\}$ hội tụ về $x \in \mathbb{R}$ nếu với mọi $\varepsilon > 0$, tồn tại số nguyên $N$ sao cho $|x_n - x| < \varepsilon$ với mọi $n > N$.
> 2. Dãy $\{x_n\}$ là dãy Cauchy nếu với mọi $\varepsilon > 0$, tồn tại số nguyên $N$ sao cho $|x_n - x_m| < \varepsilon$ với mọi $n, m > N$.

> [!thm] Tiêu chuẩn Hội tụ Cauchy trên Trục Số Thực
> Trong tập số thực $\mathbb{R}$, một dãy số $\{x_n\}$ hội tụ khi và chỉ khi nó là một dãy Cauchy.

> [!prp] Tính Bị chặn của Dãy Hội tụ và Dãy Cauchy
> Mọi dãy số Cauchy (và do đó mọi dãy hội tụ) trong $\mathbb{R}$ đều bị chặn.

> [!prf] Chứng minh Tính Bị chặn của Dãy Cauchy
> **Bước 1: Khống chế phần đuôi của dãy.**
> Cho dãy Cauchy $\{x_n\}$. Chọn $\varepsilon = 1$, tồn tại chỉ số $N \in \mathbb{N}$ sao cho với mọi $n, m > N$ ta có $|x_n - x_m| < 1$.
> 
> Cố định $m = N + 1$, ta có $|x_n - x_{N+1}| < 1$ với mọi $n > N$, suy ra:
> $$|x_n| < |x_{N+1}| + 1, \quad \forall n > N$$
> 
> **Bước 2: Khống chế toàn bộ dãy bằng giá trị lớn nhất.**
> Đặt $M = \max \{ |x_1|, |x_2|, \dots, |x_N|, |x_{N+1}| + 1 \}$.
> 
> Khi đó $|x_n| \le M$ với mọi $n \in \mathbb{N}^*$, chứng tỏ dãy $\{x_n\}$ bị chặn.

# Lý Thuyết Chuyên Sâu về Limsup, Liminf và Dãy Con Hội Tụ

Một dãy số thực bất kỳ không nhất thiết phải hội tụ, nhưng luôn xác định được giới hạn trên và giới hạn dưới trong tập số thực mở rộng. Đây là công cụ hữu hiệu nhất để kiểm soát các điểm tụ của dãy.

> [!def] Giới hạn Trên và Giới hạn Dưới
> Cho dãy số thực bị chặn $\{a_n\}$. Với mỗi $n \in \mathbb{N}^*$, đặt:
> $$u_n = \sup_{k \ge n} a_k = \sup \{a_n, a_{n+1}, a_{n+2}, \dots\}$$
> $$v_n = \inf_{k \ge n} a_k = \inf \{a_n, a_{n+1}, a_{n+2}, \dots\}$$
> 
> 1. Dãy $\{u_n\}$ là dãy giảm và bị chặn dưới, giới hạn của nó là giới hạn trên của $\{a_n\}$:
>    $$\limsup_{n \to \infty} a_n = \lim_{n \to \infty} u_n = \inf_{n \ge 1} \sup_{k \ge n} a_k$$
> 2. Dãy $\{v_n\}$ là dãy tăng và bị chặn trên, giới hạn của nó là giới hạn dưới của $\{a_n\}$:
>    $$\liminf_{n \to \infty} a_n = \lim_{n \to \infty} v_n = \sup_{n \ge 1} \inf_{k \ge n} a_k$$

> [!prp] Đặc trưng Sai phân Epsilon của Limsup và Liminf
> Cho dãy số thực bị chặn $\{a_n\}$.
> 
> 3. Số $L = \limsup_{n \to \infty} a_n$ khi và chỉ khi với mọi $\varepsilon > 0$:
>    Tồn tại vô số chỉ số $n$ sao cho $a_n > L - \varepsilon$, và chỉ tồn tại hữu hạn chỉ số $n$ sao cho $a_n > L + \varepsilon$.
> 
> 4. Số $l = \liminf_{n \to \infty} a_n$ khi và chỉ khi với mọi $\varepsilon > 0$:
>    Tồn tại vô số chỉ số $n$ sao cho $a_n < l + \varepsilon$, và chỉ tồn tại hữu hạn chỉ số $n$ sao cho $a_n < l - \varepsilon$.

> [!prp] Sự Tồn tại Dãy Con Đạt Giới hạn Liminf và Limsup
> Với mọi dãy số thực bị chặn $(a_n)$, luôn tồn tại một dãy chỉ số con $n_1 < n_2 < n_3 < \dots < n_k < \dots$ sao cho dãy con $(a_{n_k})_{k \ge 1}$ có giới hạn thực sự bằng $\liminf_{n \to \infty} a_n$:
> $$\lim_{k \to \infty} a_{n_k} = \liminf_{n \to \infty} a_n = L$$
> Đối ngẫu lại, luôn tồn tại một dãy chỉ số con $m_1 < m_2 < \dots < m_k < \dots$ sao cho:
> $$\lim_{k \to \infty} a_{m_k} = \limsup_{n \to \infty} a_n = M$$

> [!prf] Chứng minh Tồn tại Dãy Con Hội tụ về Liminf
> **Bước 1: Đặt các biến phụ và giới hạn.**
> Đặt $v_n = \inf_{j \ge n} a_j$. Vì dãy $\{a_n\}$ bị chặn nên dãy $\{v_n\}$ tăng và bị chặn trên.
> 
> Do đó $\lim_{n \to \infty} v_n = L = \liminf_{n \to \infty} a_n$.
> 
> **Bước 2: Xây dựng dãy chỉ số con bằng quy nạp.**
> Với $k = 1$, chọn $\varepsilon_1 = 1$. Theo định nghĩa của $v_1 = \inf_{j \ge 1} a_j$, tồn tại chỉ số $n_1 \ge 1$ sao cho:
> $$v_1 \le a_{n_1} < v_1 + 1$$
> 
> Giả sử ta đã chọn được các chỉ số tăng ngặt $n_1 < n_2 < \dots < n_k$.
> 
> Để chọn chỉ số tiếp theo $n_{k+1}$, ta xét đoạn đuôi bắt đầu từ chỉ số $n_k + 1$. Xét infimum của đuôi này:
> $$v_{n_k + 1} = \inf_{j \ge n_k + 1} a_j$$
> 
> Với sai số $\varepsilon_{k+1} = \frac{1}{k+1} > 0$, theo đặc trưng của infimum, luôn tồn tại một chỉ số $n_{k+1} \ge n_k + 1 > n_k$ sao cho:
> $$v_{n_k + 1} \le a_{n_{k+1}} < v_{n_k + 1} + \frac{1}{k+1}$$
> 
> **Bước 3: Đánh giá kẹp và kết luận giới hạn.**
> Dãy chỉ số con $\{n_k\}$ vừa xây dựng thỏa mãn tính tăng nghiêm ngặt $n_1 < n_2 < \dots < n_k < \dots$
> 
> Với mỗi $k \ge 1$, ta có bất đẳng thức:
> $$v_{n_{k-1} + 1} \le a_{n_k} < v_{n_{k-1} + 1} + \frac{1}{k}$$
> 
> Vì $n_k \to \infty$ nên $v_{n_{k-1} + 1} \to L$. Hai vế kẹp của bất đẳng thức trên đều hội tụ về $L$ khi $k \to \infty$:
> $$\lim_{k \to \infty} v_{n_{k-1} + 1} = L \quad \text{và} \quad \lim_{k \to \infty} \left( v_{n_{k-1} + 1} + \frac{1}{k} \right) = L + 0 = L$$
> 
> Theo định lý kẹp, dãy con $(a_{n_k})$ hội tụ và đạt giới hạn:
> $$\lim_{k \to \infty} a_{n_k} = L = \liminf_{n \to \infty} a_n$$
> 
> Quá trình chứng minh cho $\limsup$ được thực hiện hoàn toàn đối ngẫu bằng cách dùng dãy giảm $u_n = \sup_{j \ge n} a_j$ và trích chỉ số sao cho $u_{m_k} - \frac{1}{k} < a_{m_k} \le u_{m_k}$.

> [!cor] Tập Điểm Dính và Giới Hạn Cực Trị
> Gọi $S$ là tập hợp tất cả các giới hạn của mọi dãy con hội tụ trích từ dãy $\{a_n\}$ (tập các điểm dính). Khi đó:
> $$\limsup_{n \to \infty} a_n = \max S \quad \text{và} \quad \liminf_{n \to \infty} a_n = \min S$$
> Mọi dãy con hội tụ $\{a_{n_k}\}$ của $\{a_n\}$ đều thỏa mãn:
> $$\liminf_{n \to \infty} a_n \le \lim_{k \to \infty} a_{n_k} \le \limsup_{n \to \infty} a_n$$

> [!prp] Các Tính Chất Đại Số và Thứ Tự của Limsup và Liminf
> Cho hai dãy số thực bị chặn $\{a_n\}$ và $\{b_n\}$.
> 
> 5. Nếu $a_n \le b_n$ với mọi $n$ đủ lớn thì:
>    $$\liminf_{n \to \infty} a_n \le \liminf_{n \to \infty} b_n \quad \text{và} \quad \limsup_{n \to \infty} a_n \le \limsup_{n \to \infty} b_n$$
> 
> 6. Tính chất bán cộng tính (Subadditivity):
>    $$\liminf a_n + \liminf b_n \le \liminf (a_n + b_n) \le \liminf a_n + \limsup b_n$$
>    $$\liminf a_n + \limsup b_n \le \limsup (a_n + b_n) \le \limsup a_n + \limsup b_n$$
> 
> 7. Nếu một trong hai dãy hội tụ, ví dụ $\lim_{n \to \infty} a_n = a$, thì:
>    $$\limsup_{n \to \infty} (a_n + b_n) = a + \limsup_{n \to \infty} b_n$$
>    $$\liminf_{n \to \infty} (a_n + b_n) = a + \liminf_{n \to \infty} b_n$$

> [!cor] Tiêu Chuẩn Hội Tụ Qua Limsup và Liminf
> Dãy số thực bị chặn $\{a_n\}$ hội tụ về giới hạn $L$ khi và chỉ khi:
> $$\liminf_{n \to \infty} a_n = \limsup_{n \to \infty} a_n = L$$

# Hai Bổ Đề Nền Tảng về Dãy Con và Dãy Cauchy

Hai bổ đề dưới đây tạo nên sự liên kết giữa hành vi của từng dãy con riêng lẻ và toàn bộ dãy mẹ.

> [!lem] Tính Bảo Toàn Giới Hạn của Dãy Con
> Nếu một dãy số $\{x_n\}$ hội tụ về $L$, thì mọi dãy con $\{x_{n_k}\}$ của nó cũng hội tụ về cùng giới hạn $L$.

> [!prf] Chứng minh Tính Bảo Toàn Giới Hạn của Dãy Con
> **Bước 1: Sử dụng định nghĩa hội tụ của dãy mẹ.**
> Giả sử $x_n \to L$. Lấy tùy ý $\varepsilon > 0$.
> 
> Tồn tại số tự nhiên $N$ sao cho $|x_n - L| < \varepsilon$ với mọi $n > N$.
> 
> **Bước 2: Đánh giá qua chỉ số con.**
> Xét dãy con $\{x_{n_k}\}$. Vì dãy chỉ số $\{n_k\}$ nguyên dương và tăng ngặt nên $n_1 < n_2 < \dots < n_k$, kéo theo $n_k \ge k$ với mọi $k \in \mathbb{N}^*$.
> 
> Chọn $K = N$. Với mọi $k > K$, ta có $n_k \ge k > N$, suy ra:
> $$|x_{n_k} - L| < \varepsilon$$
> 
> Vậy dãy con $\{x_{n_k}\}$ hội tụ về $L$.

> [!lem] Sự Hội Tụ của Dãy Cauchy khi có Dãy Con Hội Tụ
> Cho $\{x_n\}$ là một dãy Cauchy. Nếu tồn tại ít nhất một dãy con $\{x_{n_k}\}$ hội tụ về $a$, thì toàn bộ dãy mẹ $\{x_n\}$ cũng hội tụ về $a$.

> [!prf] Chứng minh Dãy Cauchy Hội Tụ Nhờ Dãy Con
> **Bước 1: Tách sai số bằng bất đẳng thức tam giác.**
> Lấy tùy ý $\varepsilon > 0$. Ta phân rã sai số giữa phần tử $x_n$ bất kỳ và điểm $a$:
> $$|x_n - a| \le |x_n - x_{n_k}| + |x_{n_k} - a|$$
> 
> **Bước 2: Khống chế từng thành phần sai số.**
> Vì $\{x_n\}$ là dãy Cauchy, tồn tại $N_1$ sao cho $|x_n - x_m| < \frac{\varepsilon}{2}$ với mọi $n, m > N_1$.
> 
> Vì dãy con $x_{n_k} \to a$, tồn tại $K$ sao cho $|x_{n_k} - a| < \frac{\varepsilon}{2}$ với mọi $k > K$.
> 
> **Bước 3: Chọn chỉ số bắc cầu.**
> Chọn một chỉ số $k$ cố định thỏa mãn đồng thời $k > K$ và $n_k > N_1$ (điều này luôn thực hiện được do $n_k \ge k \to \infty$).
> 
> Khi đó, với mọi $n > N_1$, chọn $m = n_k > N_1$, ta có:
> $$|x_n - a| \le |x_n - x_{n_k}| + |x_{n_k} - a| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
> 
> Suy ra dãy mẹ $\{x_n\}$ hội tụ về $a$.

# Cơ Chế Tạo Giới Hạn: Định Lý Bolzano-Weierstrass

Tính bị chặn là cơ chế giam giữ không gian, cưỡng bức các phần tử không thể phân tán ra vô hạn và buộc phải sinh ra ít nhất một điểm tụ.

> [!thm] Định lý Bolzano-Weierstrass trên Tập Số Thực
> Mọi dãy số thực bị chặn đều chứa ít nhất một dãy con hội tụ.

> [!prf] Chứng minh Định lý Bolzano-Weierstrass bằng Tính Chất Liminf
> **Bước 1: Kiểm tra tính tồn tại của giá trị Liminf.**
> Cho $\{a_n\}$ là một dãy số thực bị chặn.
> 
> Vì $\{a_n\}$ bị chặn dưới, dãy số $v_n = \inf_{k \ge n} a_k$ xác định, đơn điệu tăng và bị chặn trên.
> 
> Theo Tiên đề tính đầy đủ của $\mathbb{R}$, dãy $\{v_n\}$ hội tụ về một số thực hữu hạn:
> $$L = \lim_{n \to \infty} v_n = \liminf_{n \to \infty} a_n \in \mathbb{R}$$
> 
> **Bước 2: Áp dụng mệnh đề trích dãy con đạt Liminf.**
> Theo Mệnh đề về Sự tồn tại dãy con đạt giới hạn Liminf đã chứng minh ở mục trước, luôn tồn tại một dãy chỉ số con $n_1 < n_2 < \dots < n_k < \dots$ sao cho:
> $$\lim_{k \to \infty} a_{n_k} = \liminf_{n \to \infty} a_n = L$$
> 
> Vì $L \in \mathbb{R}$, dãy con $\{a_{n_k}\}$ là một dãy con hội tụ.
> 
> Chứng minh hoàn tất mà không cần chia đôi đoạn thẳng.

# Cơ Chế Giữ Giới Hạn: Tập Đóng và Tính Đầy Đủ

Nếu tính bị chặn kích hoạt sự tồn tại của điểm giới hạn thì tính đóng đóng vai trò là "bức tường bảo vệ", đảm bảo điểm giới hạn được tạo ra không bị rơi ra ngoài tập hợp con đang xét.

> [!def] Tập Đóng và Tính Đầy Đủ trong Tập Số Thực
> Cho tập hợp con $A \subset \mathbb{R}$.
> 
> 1. Tập $A$ được gọi là đóng trong $\mathbb{R}$ nếu với mọi dãy số $\{x_n\} \subset A$ hội tụ về $x \in \mathbb{R}$, giới hạn $x$ bắt buộc phải thuộc $A$.
> 2. Tập $A$ được gọi là đầy đủ nếu mọi dãy Cauchy $\{x_n\} \subset A$ đều hội tụ về một điểm thuộc $A$.

> [!prp] Mối Liên Hệ Tương Đương giữa Tập Đóng và Tính Đầy Đủ
> Cho tập hợp con $A \subset \mathbb{R}$. Khi đó:
> $A$ là tập đóng trong $\mathbb{R} \iff A$ là một không gian đầy đủ.

> [!prf] Chứng minh Tập Đóng Tương Đương với Tính Đầy Đủ
> **Chiều ($\implies$): Giả sử $A$ đóng, chứng minh $A$ đầy đủ.**
> Lấy một dãy Cauchy bất kỳ $\{x_n\}$ nằm trong $A$.
> 
> Vì $\{x_n\} \subset \mathbb{R}$ và $\mathbb{R}$ là không gian đầy đủ, dãy Cauchy $\{x_n\}$ phải hội tụ về một điểm $x_0 \in \mathbb{R}$.
> 
> Vì $A$ là tập đóng và $\{x_n\} \subset A$, theo định nghĩa tập đóng, giới hạn $x_0$ phải thuộc $A$.
> 
> Vậy mọi dãy Cauchy trong $A$ đều hội tụ về một điểm trong $A$, suy ra $A$ đầy đủ.
> 
> **Chiều ($\impliedby$): Giả sử $A$ đầy đủ, chứng minh $A$ đóng.**
> Lấy một dãy $\{x_n\} \subset A$ hội tụ về điểm $x_0 \in \mathbb{R}$.
> 
> Vì dãy $\{x_n\}$ hội tụ trong $\mathbb{R}$, theo tính chất cơ bản, nó là một dãy Cauchy.
> 
> Do $A$ là không gian đầy đủ và $\{x_n\} \subset A$ là dãy Cauchy, dãy này phải hội tụ về một điểm $a \in A$.
> 
> Do tính duy nhất của giới hạn trên $\mathbb{R}$, ta có $x_0 = a$. Suy ra $x_0 \in A$.
> 
> Vậy $A$ là tập đóng trong $\mathbb{R}$.

# Tính Chất Compact và Định Lý Heine-Borel trên Tập Số Thực

Compact là trạng thái hoàn chỉnh nhất của một tập hợp trong giải tích thực, kết hợp sự ràng buộc không gian của tính bị chặn và tính khép kín của tính đóng.

> [!def] Tập Compact Dãy
> Một tập con $K \subset \mathbb{R}$ được gọi là compact nếu mọi dãy số $\{x_n\} \subset K$ đều tồn tại một dãy con $\{x_{n_k}\}$ hội tụ về một điểm thuộc $K$.

> [!prp] Tính Chất Hệ Quả Cốt Lõi của Tập Compact
> Nếu $K \subset \mathbb{R}$ là tập compact thì:
> 
> 1. $K$ là tập đóng.
> 2. $K$ là tập đầy đủ.

> [!prf] Chứng minh Compact Kéo Theo Đóng và Đầy Đủ
> **Bước 1: Chứng minh $K$ đóng.**
> Lấy một dãy $\{x_n\} \subset K$ hội tụ về $x \in \mathbb{R}$.
> 
> Do $K$ compact, tồn tại dãy con $\{x_{n_k}\}$ hội tụ về $a \in K$.
> 
> Mặt khác, theo Bổ đề Tính Bảo toàn Giới hạn của Dãy con, vì dãy mẹ $x_n \to x$ nên dãy con $x_{n_k} \to x$.
> 
> Do tính duy nhất của giới hạn, $x = a \in K$. Vậy $K$ là tập đóng.
> 
> **Bước 2: Chứng minh $K$ đầy đủ.**
> Lấy một dãy Cauchy $\{x_n\} \subset K$.
> 
> Do $K$ compact, tồn tại dãy con $\{x_{n_k}\}$ hội tụ về $a \in K$.
> 
> Áp dụng Bổ đề Sự Hội tụ của Dãy Cauchy khi có Dãy Con Hội tụ, toàn bộ dãy mẹ $\{x_n\}$ cũng hội tụ về $a \in K$.
> 
> Vậy mọi dãy Cauchy trong $K$ đều hội tụ trong $K$, suy ra $K$ đầy đủ.

> [!thm] Định lý Heine-Borel trên Trục Số Thực
> Một tập hợp con $K \subset \mathbb{R}$ là compact khi và chỉ khi $K$ là tập đóng và bị chặn.

> [!prf] Chứng minh Định lý Heine-Borel trên Trục Số Thực
> **Chiều ($\implies$): Giả sử $K$ compact, chứng minh $K$ đóng và bị chặn.**
> 
> Tính chất đóng đã được chứng minh trong mệnh đề trước.
> 
> Để chứng minh $K$ bị chặn, ta dùng phương pháp phản chứng. Giả sử $K$ không bị chặn.
> 
> Khi đó với mỗi $n \in \mathbb{N}^*$, luôn tồn tại phần tử $x_n \in K$ sao cho $|x_n| > n$.
> 
> Xét dãy $\{x_n\} \subset K$. Do $K$ compact, tồn tại dãy con $\{x_{n_k}\}$ hội tụ về một điểm $L \in K$.
> 
> Vì dãy con $\{x_{n_k}\}$ hội tụ nên nó bị chặn, tức tồn tại hằng số $M > 0$ sao cho $|x_{n_k}| \le M$ với mọi $k$.
> 
> Tuy nhiên, theo cách dựng, ta có $|x_{n_k}| > n_k \ge k$. Khi chọn chỉ số $k > M$, ta gặp mâu thuẫn:
> $$M \ge |x_{n_k}| > k > M$$
> 
> Mâu thuẫn này chứng tỏ giả thiết phản chứng sai. Vậy $K$ phải bị chặn.
> 
> **Chiều ($\impliedby$): Giả sử $K$ đóng và bị chặn, chứng minh $K$ compact.**
> 
> Lấy một dãy bất kỳ $\{x_n\} \subset K$.
> 
> **Bước 1: Kích hoạt cơ chế tạo giới hạn.**
> Vì $K$ bị chặn nên dãy $\{x_n\}$ là dãy số bị chặn trong $\mathbb{R}$.
> 
> Theo Định lý Bolzano-Weierstrass, dãy $\{x_n\}$ chứa một dãy con $\{x_{n_k}\}$ hội tụ về một điểm giới hạn $x_0 \in \mathbb{R}$.
> 
> **Bước 2: Kích hoạt cơ chế giữ giới hạn.**
> Dãy con $\{x_{n_k}\}$ nằm hoàn toàn trong $K$. Vì $K$ là tập đóng trong $\mathbb{R}$, giới hạn của dãy con bắt buộc phải thuộc về $K$:
> $$x_0 \in K$$
> 
> Như vậy, từ một dãy bất kỳ trong $K$, ta đã trích ra được một dãy con hội tụ về một điểm thuộc $K$.
> 
> Kết luận: $K$ là tập compact.

# Hệ Thống So Sánh Đối Xứng Giữa Các Khái Niệm Giải Tích

Toàn bộ hệ thống giải tích trên tập số thực được liên kết chặt chẽ thông qua các cặp khái niệm đối ngẫu và sự phân cấp điều kiện.

Cặp đối xứng về cận và cực trị:
1. Cận trên đúng ($\sup$) kiểm soát biên trên $\longleftrightarrow$ Cận dưới đúng ($\inf$) kiểm soát biên dưới.
2. Giới hạn trên ($\limsup$) là điểm dính lớn nhất $\longleftrightarrow$ Giới hạn dưới ($\liminf$) là điểm dính nhỏ nhất.
3. Dãy số hội tụ khi và chỉ khi hai giới hạn cực trị này trùng nhau: $\liminf a_n = \limsup a_n$.

Cặp đối xứng về cơ chế vận hành của tính Compact:
1. Bị chặn (Cơ chế ngoại cảnh): Đóng vai trò tạo giới hạn thông qua việc gom điểm và kích hoạt định lý Bolzano-Weierstrass.
2. Đóng / Đầy đủ (Cơ chế nội tại): Đóng vai trò giữ giới hạn thông qua việc ngăn chặn sự thất thoát điểm tụ ra ngoài tập hợp.
3. Compact: Sự kết hợp hoàn chỉnh của hai cơ chế, biến một tập hợp vô hạn điểm mang đầy đủ các tính chất ổn định tương đương với một tập hữu hạn.