

# 1. Định nghĩa

## a) Độ đo và các khái niệm cộng tính

> [!def] (Độ đo và các khái niệm)
> - Cho $X$ là tập khác rỗng, $\mathfrak{A}$ là một đại số $\sigma$ trên $X$. Một hàm tập hợp $\mu : \mathfrak{A} \to [0, \infty]$ được gọi là một độ đo nếu nó thỏa mãn 2 tiên đề:
> 1. $\mu(\emptyset) = 0$
> 2. $\sigma$ - cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathfrak{A}$, 
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n}\right) = \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> - Các thuật ngữ mở rộng cho một hàm tập hợp $\mu$ bất kỳ:
> 1. Hữu hạn cộng tính: Cho trước $A_{1}, A_{2}, \dots, A_{N} \in \mathfrak{A}$ rời nhau,
> $$
> \mu\left( \bigcup_{n=1}^{N} A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n})
> $$
> 2. $\sigma$ - dưới cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ bất kì trên $\mathfrak{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_n \right) \le \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 3. $\sigma$ - cộng tính trên: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathfrak{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 4. Đơn điệu: Cho $A, B \in \mathfrak{A}, A \subset B$,
> $$
> \mu(A) \le \mu(B)
> $$

## b) Liên tục

> [!def] (Tính liên tục)
> 6. Liên tục dưới: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy tăng trong $\mathfrak{A}$ ($A_{1} \subseteq A_{2} \subseteq A_{3} \subseteq \dots$) và $A = \bigcup_{n=1}^{\infty} A_n \in \mathfrak{A}$, khi đó:
> $$
> \mu(A) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> 7. Liên tục trên: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy giảm trong $\mathfrak{A}$ ($A_{1} \supseteq A_{2} \supseteq A_{3} \supseteq \dots$), $A = \bigcap_{n=1}^{\infty} A_n \in \mathfrak{A}$ và $\mu(A_{1}) < \infty$, khi đó:
> $$
> \mu(A) = \lim_{ n \to \infty } \mu(A_{n})
> $$

# 2. Mệnh đề

## a) Các tính chất đại số cơ bản

> [!thm] 
> $\sigma$ - Cộng tính $\implies$ Hữu hạn cộng tính

> [!prf] 
> Cho $A_{1}, A_{2},\dots, A_{N} \in \mathfrak{A}$ là họ các tập rời nhau, xét $A_{n}= \emptyset$ $\forall n>N$. Theo định nghĩa $\sigma$-cộng tính:
> $$
> \mu\left( \bigcup_{n=1} ^{N} A_{n} \right) = \mu\left( \bigcup_{n=1} ^{\infty} A_{n} \right) = \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n}) + \sum_{n=N+1}^{\infty} \mu(\emptyset ) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Đơn điệu

> [!prf] 
> Lấy $A,B \in \mathfrak{A}$ sao cho $A \subseteq B$. Ta tách $B = A \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B\setminus A)
> $$
> Vì $\mu \ge 0$ nên $\mu(B\setminus A)\ge 0$, do đó:
> $$
> \mu(B) \ge \mu(A)
> $$

> [!thm] (Tính chất trừ)
> Cho $A, B \in \mathfrak{A}$ sao cho $A \subseteq B$ và $\mu(A) < \infty$. Khi đó:
> $$
> \mu(B \setminus A) = \mu(B) - \mu(A)
> $$

> [!prf]
> Ta có $B = A \sqcup (B \setminus A)$. Áp dụng tính hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B \setminus A)
> $$
> Vì $\mu(A) < \infty$, ta có thể trừ $\mu(A)$ ở cả hai vế để nhận được $\mu(B \setminus A) = \mu(B) - \mu(A)$.

> [!thm] 
> Hữu hạn cộng tính $\implies$ $\sigma$ - Cộng tính trên

> [!prf] 
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau trong $\mathfrak{A}$. Với mỗi $N \in \mathbb{N}$, ta có $\bigcup _{n=1}^{N} A_n \subseteq \bigcup _{n=1}^{\infty} A_n$. Vì $\mu$ hữu hạn cộng tính nên nó đơn điệu, ta có:
> $$
> \mu\left( \bigcup_{n=1} ^{\infty }A_{n} \right) \ge \mu\left( \bigcup_{n=1}^{N}A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n}) 
> $$
> Vì $\mu \ge 0$ và bất đẳng thức đúng với mọi $N$, lấy giới hạn $N \to \infty$ ở vế phải, ta được:
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf] 
> Lấy $A,B \in \mathfrak{A}$, ta tách $A \cup B = A \sqcup (B\setminus A)$ rời nhau. Theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(A \cup B) = \mu(A) + \mu(B\setminus A)
> $$
> Mà vì $B\setminus A \subseteq B$, theo tính chất đơn điệu, $\mu(B\setminus A) \le \mu(B)$. Vậy:
> $$
> \mu(A \cup B) \le \mu(A) + \mu(B)
> $$

> [!thm] 
> $\sigma$ - Cộng tính $\implies$ $\sigma$ - Dưới cộng tính

> [!prf]  
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập bất kì trong $\mathfrak{A}$. Đặt dãy $\{ B_{n} \}_{n=1}^{\infty}$ lần lượt là: 
> $$
> B_{1} = A_{1}, \quad B_{n} = A_{n} \setminus \bigcup_{i=1}^{n-1} A_{i} \quad (\forall n \ge 2)
> $$
> Khi đó $\{ B_{n} \}_{n=1}^{\infty}$ là dãy các tập rời nhau, $\bigcup_{n=1}^{\infty} B_{n} = \bigcup_{n=1}^{\infty} A_{n}$ và $B_{n} \subseteq A_{n}$. Sử dụng tính $\sigma$-cộng tính của $\{B_n\}$:
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) = \mu\left( \bigcup_{n=1}^{\infty} B_{n} \right) = \sum_{n=1}^{\infty} \mu(B_{n})
> $$
> Áp dụng tính đơn điệu $\mu(B_{n}) \le \mu(A_{n})$, ta suy ra:
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) \le \sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
> $\sigma$ - Dưới cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf]
> Cho $A_1, \dots, A_N$ là họ các tập bất kì trong $\mathfrak{A}$, xét $A_{n} = \emptyset$ với mọi $n > N$.
> Áp dụng tính $\sigma$-dưới cộng tính:
> $$
> \mu\left( \bigcup_{n=1}^{N} A_n \right) = \mu\left( \bigcup_{n=1}^{\infty }A_{n} \right) \le \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm]
> $\sigma$ - Dưới cộng tính và $\sigma$ - Cộng tính trên $\iff$ $\sigma$ - Cộng tính

> [!prf] 
> $(\implies)$ : Dựa trực tiếp vào việc kẹp bất đẳng thức hai chiều từ tính $\sigma$-dưới cộng tính và $\sigma$-cộng tính trên đối với dãy rời nhau.
> 
> $(\impliedby)$ : Xét $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau. Từ tính hữu hạn cộng tính suy ra tính cộng tính trên: $\mu\left( \bigcup_{n=1}^{\infty } A_{n}\right) \ge \sum_{n=1}^{\infty} \mu(A_{n})$; kết hợp tính $\sigma$-dưới cộng tính: $\mu\left( \bigcup_{n=1}^{\infty} A_{n}\right) \le \sum_{n=1}^{\infty} \mu(A_{n})$.

## b) Tính liên tục và Giới hạn

> [!thm] 
> Cho $\mu$ hữu hạn cộng tính. Khi đó $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục dưới 

> [!prf] 
> $(\implies)$ :
> Lấy $\{ A_{n} \}_{n=1}^{\infty} \uparrow A$. Đặt $B_{1} = A_{1}$, $B_{n} = A_{n} \setminus A_{n-1}$ với mọi $n \ge 2$. Khi đó $\{B_n\}$ là họ rời nhau, $A_{n} = \bigsqcup_{i=1}^{n} B_{i}$ và $A = \bigsqcup_{i=1}^{\infty} B_{i}$. Do $\mu$ có tính $\sigma$-cộng tính:
> $$
> \mu(A) = \sum_{i=1}^{\infty} \mu(B_{i}) = \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i})
> $$
> Vì $\mu$ cộng tính hữu hạn trên $A_{n}$:
> $$
> \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i}) = \lim_{ n \to \infty } \mu\left(\bigsqcup_{i=1}^{n} B_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> Vậy $\lim_{ n \to \infty } \mu(A_{n}) = \mu(A)$.
> 
> $(\impliedby)$ :
> Lấy $\{ E_{n} \}_{n=1}^{\infty}$ rời nhau, đặt $A_{n} = \bigsqcup_{i=1}^{n} E_{i}$. Ta có $A_{n} \uparrow \bigsqcup_{i=1}^{\infty} E_{i}$. Vì $\mu$ liên tục dưới:
> $$
> \mu\left( \bigcup_{i=1}^{\infty} E_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> Áp dụng tính chất cộng tính hữu hạn:
> $$
> \lim_{ n \to \infty } \mu(A_{n}) = \lim_{ n \to \infty } \mu\left(\bigsqcup_{i=1}^{n} E_{i}\right) = \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(E_{i}) = \sum_{i=1}^{\infty} \mu(E_{i})
> $$
> Vậy $\mu\left( \bigcup_{i=1}^{\infty} E_{i} \right) = \sum_{i=1}^{\infty} \mu(E_{i})$.

> [!thm] 
> Cho $\mu$ hữu hạn cộng tính và $\mu(X) < \infty$. Khi đó $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục trên tại $\emptyset$

> [!prf] 
> $(\implies)$ :
> Lấy $\{ A_{n} \}_{n=1}^{\infty} \downarrow \emptyset$. Đặt $B_{n} = A_{n} \setminus A_{n+1}$, họ $\{B_n\}$ đôi một rời nhau và $A_{1} = \bigsqcup_{n=1}^{\infty} B_{n}$. Sử dụng tính $\sigma$-cộng tính:
> $$
> \mu(A_{1}) = \mu\left(\bigsqcup_{n=1}^{\infty} B_{n}\right) = \sum_{n=1}^{\infty} \mu(B_{n})
> $$
> Vì $\mu \ge 0$ và $\mu(A_{1}) \le \mu(X) < \infty$ nên chuỗi số hội tụ. Do đó, phần dư của chuỗi tiến về 0:
> $$
> \lim_{ n \to \infty } \sum_{i=n}^{\infty} \mu(B_{i}) = 0 
> $$
> Mặt khác, $A_{n} = \bigsqcup_{i=n}^{\infty} B_{i}$, vậy $\lim_{ n \to \infty } \mu(A_{n}) = \lim_{ n \to \infty } \sum_{i=n}^{\infty} \mu(B_{i}) = 0$.
> 
> $(\impliedby)$ :
> Lấy $A_{n} \uparrow A$. Đặt $R_{n} = A \setminus A_{n}$, suy ra $R_{n} \downarrow \emptyset$. Vì $\mu(X) < \infty$ nên $\mu(A) \le \mu(X) < \infty$. Theo tính chất trừ:
> $$
> \mu(R_n) = \mu(A \setminus A_n) = \mu(A) - \mu(A_n) \implies \mu(A_n) = \mu(A) - \mu(R_n)
> $$
> Lấy giới hạn $n \to \infty$:
> $$
> \lim_{n \to \infty} \mu(A_n) = \mu(A) - \lim_{n \to \infty} \mu(R_n) = \mu(A) - 0 = \mu(A)
> $$
> Vậy $\mu$ liên tục dưới. Theo định lý trước, $\mu$ có tính $\sigma$-cộng tính.

> [!lem] (Liên tục trên tổng quát)
> Cho $\mu$ là độ đo trên $(X, \mathfrak{A})$. Nếu $\{A_n\}_{n=1}^\infty$ là dãy giảm trong $\mathfrak{A}$ ($A_1 \supseteq A_2 \supseteq \dots$), $A = \bigcap_{n=1}^\infty A_n \in \mathfrak{A}$ và tồn tại chỉ số $k$ sao cho $\mu(A_k) < \infty$, khi đó:
> $$
> \mu\left( \bigcap_{n=1}^\infty A_n \right) = \lim_{n \to \infty} \mu(A_n)
> $$

> [!prf]
> Không mất tính tổng quát, xét dãy bắt đầu từ chỉ số $k$: $\{A_n\}_{n=k}^\infty$. Khi đó $\mu(A_k) < \infty$. 
> Đặt $B_n = A_n \setminus A$ với $n \ge k$. Ta có $B_n \downarrow \emptyset$ và $\mu(B_k) \le \mu(A_k) < \infty$.
> Áp dụng tính liên tục trên tại $\emptyset$, ta được $\lim_{n \to \infty} \mu(B_n) = 0$.
> Vì $\mu(A) \le \mu(A_k) < \infty$, theo tính chất trừ ta có $\mu(B_n) = \mu(A_n) - \mu(A)$ với mọi $n \ge k$.
> Do đó $\lim_{n \to \infty} (\mu(A_n) - \mu(A)) = 0$, suy ra $\lim_{n \to \infty} \mu(A_n) = \mu(A)$.

> [!thm] (Bổ đề Fatou cho tập hợp - Ý a)
> Cho dãy tập hợp $\{A_n\}_{n=1}^\infty$ bất kỳ trong $\mathfrak{A}$. Khi đó:
> $$
> \mu\left( \liminf_{n \to \infty} A_n \right) \le \liminf_{n \to \infty} \mu(A_n)
> $$

> [!prf]
> Theo định nghĩa của giới hạn dưới đối với dãy tập hợp: $\liminf_{n \to \infty} A_n = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k$.
> Đặt $F_n = \bigcap_{k=n}^\infty A_k$. Khi chỉ số $n$ tăng lên, ta lấy giao trên ít tập hợp hơn, do đó $\{F_n\}_{n=1}^\infty$ là một dãy tăng.
> Áp dụng định lý liên tục dưới cho dãy tăng $\{F_n\}$, ta có:
> $$
> \mu\left( \liminf_{n \to \infty} A_n \right) = \mu\left( \bigcup_{n=1}^\infty F_n \right) = \lim_{n \to \infty} \mu(F_n)
> $$
> Với mỗi $n$ cố định, do $F_n = \bigcap_{k=n}^\infty A_k \subseteq A_n$, áp dụng tính đơn điệu của độ đo: $\mu(F_n) \le \mu(A_n)$ với mọi $n$.
> Lấy giới hạn dưới hai vế khi $n \to \infty$:
> $$
> \liminf_{n \to \infty} \mu(F_n) \le \liminf_{n \to \infty} \mu(A_n)
> $$
> Vì dãy số thực $\mu(F_n)$ là một dãy tăng, giới hạn của dãy này tồn tại và trùng với giới hạn dưới: $\liminf_{n \to \infty} \mu(F_n) = \lim_{n \to \infty} \mu(F_n)$.
> Kết hợp các hệ thức trên:
> $$
> \mu\left( \liminf_{n \to \infty} A_n \right) = \lim_{n \to \infty} \mu(F_n) = \liminf_{n \to \infty} \mu(F_n) \le \liminf_{n \to \infty} \mu(A_n)
> $$

> [!thm] (Bổ đề Fatou ngược cho giới hạn trên - Ý b)
> Cho dãy tập hợp $\{E_n\}_{n=1}^\infty$ trong $\mathfrak{A}$. Nếu tồn tại tập $A \in \mathfrak{A}$ với $\mu(A) < \infty$ sao cho $E_n \subseteq A$ với mọi $n \in \mathbb{N}$, thì:
> $$
> \mu\left( \limsup_{n \to \infty} E_n \right) \ge \limsup_{n \to \infty} \mu(E_n)
> $$

> [!prf]
> Theo định nghĩa của giới hạn trên đối với dãy tập hợp: $\limsup_{n \to \infty} E_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty E_k$.
> Đặt $G_n = \bigcup_{k=n}^\infty E_k$. Khi chỉ số $n$ tăng, $\{G_n\}_{n=1}^\infty$ là một dãy giảm.
> Vì $E_k \subseteq A$ với mọi $k$, nên $G_n \subseteq A$ với mọi $n$. Suy ra $\mu(G_1) \le \mu(A) < \infty$.
> Áp dụng bổ đề liên tục trên tổng quát cho dãy giảm $\{G_n\}$:
> $$
> \mu\left( \limsup_{n \to \infty} E_n \right) = \mu\left( \bigcap_{n=1}^\infty G_n \right) = \lim_{n \to \infty} \mu(G_n)
> $$
> Với mỗi $k \ge n$, do $E_k \subseteq G_n$, theo tính chất đơn điệu: $\mu(E_k) \le \mu(G_n)$.
> Lấy supremum các phần tử từ $n$ trở đi ở vế trái: $\sup_{k \ge n} \mu(E_k) \le \mu(G_n)$.
> Lấy giới hạn hai vế khi $n \to \infty$:
> $$
> \limsup_{n \to \infty} \mu(E_n) = \lim_{n \to \infty} \left( \sup_{k \ge n} \mu(E_k) \right) \le \lim_{n \to \infty} \mu(G_n)
> $$
> Kết hợp lại, ta được:
> $$
> \mu\left( \limsup_{n \to \infty} E_n \right) = \lim_{n \to \infty} \mu(G_n) \ge \limsup_{n \to \infty} \mu(E_n)
> $$

> [!thm] (Giới hạn của độ đo khi tồn tại giới hạn tập hợp - Ý c)
> Nếu cả hai giới hạn $\lim_{n \to \infty} E_n$ và $\lim_{n \to \infty} \mu(E_n)$ đều tồn tại, thì:
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \le \lim_{n \to \infty} \mu(E_n)
> $$

> [!prf]
> Vì giới hạn của dãy tập hợp $\lim_{n \to \infty} E_n$ tồn tại, ta có $\lim_{n \to \infty} E_n = \liminf_{n \to \infty} E_n$.
> Áp dụng Bổ đề Fatou cho tập hợp (ý a):
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) = \mu\left( \liminf_{n \to \infty} E_n \right) \le \liminf_{n \to \infty} \mu(E_n)
> $$
> Mặt khác, vì $\lim_{n \to \infty} \mu(E_n)$ tồn tại, nên $\liminf_{n \to \infty} \mu(E_n) = \lim_{n \to \infty} \mu(E_n)$.
> Do đó:
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \le \lim_{n \to \infty} \mu(E_n)
> $$

> [!thm] (Định lý hội tụ bị chặn cho tập hợp - Ý d)
> Nếu $\lim_{n \to \infty} E_n$ tồn tại và tồn tại $A \in \mathfrak{A}$ với $\mu(A) < \infty$ sao cho $E_n \subseteq A$ với mọi $n \in \mathbb{N}$, thì $\lim_{n \to \infty} \mu(E_n)$ tồn tại và:
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$

> [!prf]
> Vì $\lim_{n \to \infty} E_n$ tồn tại, ta có:
> $$
> \lim_{n \to \infty} E_n = \liminf_{n \to \infty} E_n = \limsup_{n \to \infty} E_n
> $$
> Áp dụng Bổ đề Fatou (ý a):
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \le \liminf_{n \to \infty} \mu(E_n) \tag{1}
> $$
> Áp dụng Bổ đề Fatou ngược (ý b, thỏa mãn do có điều kiện bị chặn bởi $A$ với $\mu(A) < \infty$):
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \ge \limsup_{n \to \infty} \mu(E_n) \tag{2}
> $$
> Kết hợp (1) và (2):
> $$
> \limsup_{n \to \infty} \mu(E_n) \le \mu\left( \lim_{n \to \infty} E_n \right) \le \liminf_{n \to \infty} \mu(E_n)
> $$
> Mà theo tính chất cơ bản của dãy số thực, ta luôn có $\liminf_{n \to \infty} \mu(E_n) \le \limsup_{n \to \infty} \mu(E_n)$.
> Do đó dấu bằng bắt buộc xảy ra:
> $$
> \liminf_{n \to \infty} \mu(E_n) = \limsup_{n \to \infty} \mu(E_n) = \mu\left( \lim_{n \to \infty} E_n \right)
> $$
> Dãy số thực $\mu(E_n)$ có giới hạn trên bằng giới hạn dưới, nên nó hội tụ và $\lim_{n \to \infty} \mu(E_n) = \mu\left( \lim_{n \to \infty} E_n \right)$.

> [!obs]
> Trên không gian có độ đo vô hạn, việc hoán vị giữa hàm độ đo và giới hạn tập hợp $\mu(\lim E_n) = \lim \mu(E_n)$ không được bảo đảm do hiện tượng khối lượng bị dịch chuyển ra ngoài biên vô cùng (Escaping mass).
> 
> Xét không gian độ đo Lebesgue $(\mathbb{R}, \mathfrak{M}_{L}, \mu_L)$. Định nghĩa dãy tập hợp:
> $$
> E_n = [n, n+1]
> $$
> Ta có $\mu_L(E_n) = 1$ với mọi $n \in \mathbb{N}$, nên $\lim_{n \to \infty} \mu_L(E_n) = 1$.
> Tuy nhiên, với mỗi $x \in \mathbb{R}$, theo tính chất Archimedes luôn tồn tại $N \in \mathbb{N}$ sao cho $N > x$. Khi đó $x \notin [n, n+1]$ với mọi $n \ge N$. Do đó không có điểm nào thuộc vô hạn các tập $E_n$:
> $$
> \limsup_{n \to \infty} E_n = \liminf_{n \to \infty} E_n = \emptyset
> $$
> Áp dụng hàm độ đo: $\mu_L(\lim E_n) = \mu_L(\emptyset) = 0 \neq 1$. Khối lượng đơn vị trượt ra vô cùng.
> 
> Đối chiếu các trường hợp:
> - **a) Liên tục dưới ($A_n \uparrow A$):** Đẳng thức $\mu(\bigcup A_n) = \lim \mu(A_n)$ luôn đúng vì $A_n \subseteq A_{n+1}$, khối lượng bị khóa trong $\bigcup A_n$, không bị trượt ra ngoài.
> - **b) Liên tục trên ($A_n \downarrow A$):** Cần điều kiện chặn $\mu(A_k) < \infty$. Với dãy trượt $A_n = [n, \infty) \downarrow \emptyset$, ta có $\mu_L(\bigcap A_n) = 0$, nhưng $\mu_L(A_n) = \infty$ và $\lim \mu_L(A_n) = \infty$.
> - **c) Bổ đề Fatou cho tập hợp:** Với $E_n = [n, n+1]$, vế trái là $\mu_L(\emptyset) = 0$, vế phải là $\liminf 1 = 1$. Bất đẳng thức $0 \le 1$ bảo toàn.
> - **d) Bổ đề Fatou ngược:** Cần điều kiện bị chặn trong tập có độ đo hữu hạn. Nếu xét $E_n = [n, n+1]$, vế trái $\limsup 1 = 1$, vế phải $\mu_L(\emptyset) = 0$, chiều bất đẳng thức bị đảo lộn nếu không có tập chặn.

> [!thm] (Bổ đề Borel-Cantelli thứ nhất)
> Cho dãy tập hợp $\{A_n\}_{n=1}^\infty$ trong $\mathfrak{A}$. Nếu $\sum_{n=1}^{\infty} \mu(A_n) < \infty$, thì:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!prf]
> Theo định nghĩa giới hạn trên: $\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$. 
> Đặt $E_n = \bigcup_{k=n}^\infty A_k$. Dãy $\{E_n\}_{n=1}^\infty$ là một dãy giảm. 
> Áp dụng tính $\sigma$-dưới cộng tính cho tập đầu tiên:
> $$
> \mu(E_1) = \mu\left( \bigcup_{k=1}^\infty A_k \right) \le \sum_{k=1}^\infty \mu(A_k) < \infty
> $$
> Áp dụng Bổ đề liên tục trên tổng quát cho dãy giảm $\{E_n\}$:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = \mu\left( \bigcap_{n=1}^\infty E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$
> Mặt khác, theo tính $\sigma$-dưới cộng tính:
> $$
> \mu(E_n) = \mu\left( \bigcup_{k=n}^\infty A_k \right) \le \sum_{k=n}^\infty \mu(A_k)
> $$
> Vì chuỗi $\sum_{k=1}^\infty \mu(A_k)$ hội tụ nên phần dư $\lim_{n \to \infty} \sum_{k=n}^\infty \mu(A_k) = 0$. 
> Suy ra $\lim_{n \to \infty} \mu(E_n) = 0$. Vậy $\mu\left( \limsup_{n \to \infty} A_n \right) = 0$.

> [!thm] (Bổ đề Borel-Cantelli thứ hai)
> Cho không gian xác suất $(X, \mathfrak{A}, \mu)$ với $\mu(X) = 1$. Giả sử $\{A_n\}_{n=1}^\infty$ là một dãy các biến cố độc lập trong $\mathfrak{A}$. Nếu:
> $$
> \sum_{n=1}^{\infty} \mu(A_n) = \infty
> $$
> Thì độ đo của giới hạn trên bằng 1:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 1
> $$

> [!prf]
> Xét phần bù của giới hạn trên theo luật De Morgan:
> $$
> \left(\limsup_{n \to \infty} A_n\right)^c = \left(\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k\right)^c = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k^c = \liminf_{n \to \infty} A_n^c
> $$
> Đặt $G_n = \bigcap_{k=n}^\infty A_k^c$. Với mọi $N > n$, xét tích giao hữu hạn $G_{n,N} = \bigcap_{k=n}^N A_k^c$.
> Do $\{A_n\}$ độc lập nên họ các phần bù $\{A_n^c\}$ cũng độc lập. Áp dụng tính chất độc lập:
> $$
> \mu(G_{n,N}) = \prod_{k=n}^N \mu(A_k^c) = \prod_{k=n}^N (1 - \mu(A_k))
> $$
> Sử dụng bất đẳng thức đại số cơ bản $1 - x \le e^{-x}$ với mọi $x \ge 0$:
> $$
> \prod_{k=n}^N (1 - \mu(A_k)) \le \prod_{k=n}^N e^{-\mu(A_k)} = \exp\left(-\sum_{k=n}^N \mu(A_k)\right)
> $$
> Vì $\sum_{k=1}^\infty \mu(A_k) = \infty$ nên $\lim_{N \to \infty} \sum_{k=n}^N \mu(A_k) = \infty$, dẫn đến $\lim_{N \to \infty} \exp\left(-\sum_{k=n}^N \mu(A_k)\right) = 0$.
> Dãy tập hữu hạn $G_{n,N} \downarrow G_n$ khi $N \to \infty$. Vì $\mu(X) = 1 < \infty$, áp dụng bổ đề liên tục trên:
> $$
> \mu(G_n) = \lim_{N \to \infty} \mu(G_{n,N}) \le 0 \implies \mu(G_n) = 0 \quad (\forall n)
> $$
> Do $G_n$ là dãy tăng theo $n$, áp dụng định lý liên tục dưới:
> $$
> \mu\left(\left(\limsup_{n \to \infty} A_n\right)^c\right) = \mu\left(\bigcup_{n=1}^\infty G_n\right) = \lim_{n \to \infty} \mu(G_n) = 0
> $$
> Áp dụng tính chất trừ cho biến cố phần bù trên không gian xác suất:
> $$
> \mu\left(\limsup_{n \to \infty} A_n\right) = \mu(X) - \mu\left(\left(\limsup_{n \to \infty} A_n\right)^c\right) = 1 - 0 = 1
> $$

## c) Dãy độ đo

> [!prp] (Prob 1.23: Tổ hợp tuyến tính của các độ đo là một độ đo)
> Cho $(X, \mathfrak{A})$ là một không gian đo được. Với mỗi $k \in \mathbb{N}$, giả sử $\mu_k$ là một độ đo trên $\sigma$-đại số $\mathfrak{A}$ và $\alpha_k \ge 0$.  
> Định nghĩa một hàm tập $\mu$ trên $\mathfrak{A}$ bằng cách đặt:  
> $$
> \mu = \sum_{k=1}^\infty \alpha_k \mu_k
> $$  
> Khi đó $\mu$ là một độ đo trên $\mathfrak{A}$.

> [!prf]
> Ta kiểm tra các tiên đề của một độ đo:
> - **Tính không âm:** Vì $\mu_{k} \ge 0$ và $\alpha_k \ge 0$ với mọi $k$, nên $\mu(A) = \sum_{k=1}^\infty \alpha_{k} \mu_{k}(A) \ge 0$ với mọi $A \in \mathfrak{A}$.
> - **Độ đo của tập rỗng:** $\mu(\emptyset) = \sum_{k=1}^\infty \alpha_{k} \mu_{k}(\emptyset) = \sum_{k=1}^\infty \alpha_{k} \cdot 0 = 0$.
> - **Tính $\sigma$ - cộng tính:** Lấy dãy $\{E_n\}_{n=1}^\infty$ các tập đôi một rời nhau trong $\mathfrak{A}$. Do các số hạng đều không âm, ta được phép đổi thứ tự lấy tổng (định lý Tonelli cho chuỗi số không âm):
> $$
> \begin{aligned}
> \mu\left( \bigcup_{n=1}^{\infty} E_{n} \right) &= \sum_{k=1}^{\infty} \alpha_{k} \mu_{k} \left( \bigcup_{n=1}^{\infty} E_{n} \right) \\
> &= \sum_{k=1}^{\infty} \alpha_{k} \left( \sum_{n=1}^{\infty} \mu_{k}(E_{n}) \right) \\
> &= \sum_{k=1}^{\infty} \sum_{n=1}^{\infty} \alpha_{k} \mu_{k} (E_{n}) \\
> &= \sum_{n=1}^{\infty} \left( \sum_{k=1}^{\infty} \alpha_{k} \mu_{k} (E_{n}) \right) \\
> &= \sum_{n=1}^{\infty} \mu(E_{n})
> \end{aligned}
> $$
> Vậy $\mu$ là một độ đo trên $(X, \mathfrak{A})$.

> [!thm] (Bổ đề: Giới hạn của dãy độ đo tăng)
> Cho $\{\mu_n\}_{n \in \mathbb{N}}$ là một dãy các độ đo tăng trên không gian đo được $(X, \mathfrak{A})$ (nghĩa là $\mu_n(A) \le \mu_{n+1}(A)$ với mọi $A \in \mathfrak{A}$). Khi đó, hàm tập hợp định nghĩa bởi:
> $$
> \mu(A) := \lim_{n \to \infty} \mu_n(A), \quad \forall A \in \mathfrak{A}
> $$
> là một độ đo trên $(X, \mathfrak{A})$.

> [!prf]
> (i) **Kiểm tra $\mu(\emptyset) = 0$:**
> $$
> \mu(\emptyset) = \lim_{n \to \infty} \mu_n(\emptyset) = \lim_{n \to \infty} 0 = 0
> $$
> 
> (ii) **Kiểm tra tính $\sigma$-cộng tính:**
> Cho $\{A_k\}_{k=1}^\infty$ là họ các tập hợp đôi một rời nhau trong $\mathfrak{A}$. Đặt $A = \bigcup_{k=1}^\infty A_k$. Ta chứng minh $\mu(A) = \sum_{k=1}^\infty \mu(A_k)$.
> 
> *Chiều $(\ge)$:* Xét số nguyên dương $m$ bất kỳ. Ta có:
> $$
> \sum_{k=1}^m \mu(A_k) = \sum_{k=1}^m \lim_{n \to \infty} \mu_n(A_k) = \lim_{n \to \infty} \sum_{k=1}^m \mu_n(A_k)
> $$
> Vì $\mu_n$ là độ đo nên $\sum_{k=1}^m \mu_n(A_k) = \mu_n\left( \bigcup_{k=1}^m A_k \right)$. Do $\bigcup_{k=1}^m A_k \subseteq A$, theo tính đơn điệu:
> $$
> \mu_n\left( \bigcup_{k=1}^m A_k \right) \le \mu_n(A)
> $$
> Lấy giới hạn $n \to \infty$ hai vế:
> $$
> \sum_{k=1}^m \mu(A_k) \le \lim_{n \to \infty} \mu_n(A) = \mu(A)
> $$
> Cho $m \to \infty$, ta được:
> $$
> \sum_{k=1}^\infty \mu(A_k) \le \mu(A) \tag{1}
> $$
> 
> *Chiều $(\le)$:* Vì $\{\mu_n\}$ là dãy tăng nên $\mu_n(A_k) \le \mu(A_k)$ với mọi $n, k$. Áp dụng tính $\sigma$-cộng tính của từng độ đo $\mu_n$:
> $$
> \mu_n(A) = \sum_{k=1}^\infty \mu_n(A_k) \le \sum_{k=1}^\infty \mu(A_k)
> $$
> Lấy giới hạn $n \to \infty$ ở vế trái:
> $$
> \mu(A) \le \sum_{k=1}^\infty \mu(A_k) \tag{2}
> $$
> 
> Từ (1) và (2), suy ra $\mu(A) = \sum_{k=1}^\infty \mu(A_k)$. Vậy $\mu$ là một độ đo.

> [!thm] (Giới hạn của dãy độ đo giảm cần điều kiện độ đo hữu hạn)
> Cho $\{\mu_n\}_{n \in \mathbb{N}}$ là một dãy các độ đo giảm trên không gian đo được $(X, \mathfrak{A})$ (nghĩa là $\mu_{n+1}(A) \le \mu_n(A)$ với mọi $A \in \mathfrak{A}$). 
> Nếu tồn tại một chỉ số $k$ sao cho $\mu_k(X) < \infty$, thì hàm tập hợp định nghĩa bởi:
> $$
> \mu(A) := \lim_{n \to \infty} \mu_n(A), \quad \forall A \in \mathfrak{A}
> $$
> cũng là một độ đo trên $(X, \mathfrak{A})$.

> [!prf]
> Bỏ qua hữu hạn số hạng đầu, không mất tính tổng quát giả sử $k=1$, tức $\mu_1(X) < \infty$. Do dãy giảm nên $\mu_n(A) \le \mu_1(X) < \infty$ với mọi $n \ge 1$ và mọi $A \in \mathfrak{A}$.
> 
> Với mỗi $n \ge 1$, định nghĩa hàm tập:
> $$
> \nu_n(A) = \mu_1(A) - \mu_n(A) \quad (\forall A \in \mathfrak{A})
> $$
> - Vì $\mu_1(A) \ge \mu_n(A)$ nên $\nu_n(A) \ge 0$.
> - $\nu_n(\emptyset) = \mu_1(\emptyset) - \mu_n(\emptyset) = 0$.
> - Vì $\mu_1, \mu_n$ là các độ đo hữu hạn, hiệu của chúng bảo toàn tính $\sigma$-cộng tính. 
> 
> Do đó $\nu_n$ là một độ đo trên $(X, \mathfrak{A})$.
> Mặt khác, vì $\{\mu_n\}$ là dãy giảm nên $\{\nu_n\}$ là dãy độ đo tăng: $\nu_n(A) \le \nu_{n+1}(A)$.
> Áp dụng định lý "Giới hạn của dãy độ đo tăng là một độ đo" cho $\{\nu_n\}$, suy ra $\nu(A) := \lim_{n \to \infty} \nu_n(A)$ là một độ đo.
> 
> Khai triển giới hạn:
> $$
> \nu(A) = \lim_{n \to \infty} (\mu_1(A) - \mu_n(A)) = \mu_1(A) - \lim_{n \to \infty} \mu_n(A) = \mu_1(A) - \mu(A)
> $$
> Vì các giá trị đều hữu hạn, chuyển vế ta được: $\mu(A) = \mu_1(A) - \nu(A)$.
> Do $\mu_1$ và $\nu$ là các độ đo hữu hạn thỏa mãn $\mu_1 \ge \nu$, hiệu $\mu = \mu_1 - \nu$ là một độ đo không âm và $\sigma$-cộng tính. Vậy $\mu$ là một độ đo trên $(X, \mathfrak{A})$.

> [!obs] (Phản ví dụ: Dãy độ đo giảm không có điều kiện chặn)
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$. Định nghĩa dãy các hàm tập:
> $$
> \mu_n(A) = \mu_L(A \cap [n, \infty)) \quad (\forall A \in \mathfrak{M}_L)
> $$
> Mỗi $\mu_n$ là một độ đo và dãy $\{\mu_n\}$ giảm đơn điệu. Đặt $\mu(A) = \lim_{n \to \infty} \mu_n(A)$.
> 
> Xét họ các tập đôi một rời nhau $A_k = [k, k+1)$ với $k \in \mathbb{N}^*$. Đặt $A = \bigcup_{k=1}^\infty A_k = [1, \infty)$:
> - Với mỗi $k$ cố định, khi $n > k+1$ thì $A_k \cap [n, \infty) = \emptyset$, do đó $\mu_n(A_k) = 0$. Suy ra:
>   $$
>   \mu(A_k) = \lim_{n \to \infty} \mu_n(A_k) = 0 \implies \sum_{k=1}^\infty \mu(A_k) = 0
>   $$
> - Với tập hợp tổng $A = [1, \infty)$:
>   $$
>   \mu_n(A) = \mu_L([1, \infty) \cap [n, \infty)) = \mu_L([n, \infty)) = \infty \implies \mu(A) = \lim_{n \to \infty} \infty = \infty
>   $$
> 
> Ta có $\mu\left(\bigcup_{k=1}^\infty A_k\right) = \infty \neq 0 = \sum_{k=1}^\infty \mu(A_k)$. Tính $\sigma$-cộng tính bị phá vỡ nếu thiếu điều kiện độ đo toàn phần hữu hạn $\mu_k(X) < \infty$.

> [!def]
> Cho một họ $C \in 2^{\Omega}$, ta nói:
> i) $C$ đóng với phép giao hữu hạn nếu $A_{1}, A_{2}, \dots, A_{n} \in C$ thì $\bigcap_{i}^{n} A_{i} \in C$.
> ii) $C$  đóng với phép giới hạn trên nếu $\forall A_{i} \in C$
